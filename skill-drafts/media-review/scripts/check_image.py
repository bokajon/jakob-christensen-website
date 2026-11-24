"""Measure image files, so a requirement is checked on the result and not on the prompt.

Usage: python -I scripts/check_image.py FILE [FILE ...]
           [--size WxH] [--ratio W:H] [--max-bytes N] [--format NAME]
           [--transparent] [--max-colors N]

Without options it only prints what it measured. Each option is a requirement and
gets one line: PASS, FAIL or NOT MEASURED.

Exit code: 0 = every requested check passed, 1 = at least one failed,
2 = wrong usage or a file that is not a readable PNG, JPEG, GIF or WebP,
3 = nothing failed, but at least one requested check could not be measured.

Format, width, height, ratio, file size and "has an alpha channel" are read from the
file's own header with the standard library only. The pixel checks (is the
background really transparent, how many distinct colors, the dominant colors) need
the Pillow package. Without Pillow they are reported as NOT MEASURED, never guessed.
Only the first frame of an animated file is looked at for pixels.

"Transparent" passes only if the file has an alpha channel and all four corner
pixels are fully transparent. A declared alpha channel on its own is not enough.
Identical files (same SHA-256) are reported, because two generations can come back
byte for byte the same.
"""

import argparse
import hashlib
import struct
import sys
from pathlib import Path

HEAD_BYTES = 4 * 1024 * 1024
MAX_PIXELS_FOR_COLORS = 4_000_000
RATIO_TOLERANCE = 0.005  # 0.5 percent


def parse_png(b):
    if len(b) < 33 or b[12:16] != b"IHDR":
        return None
    width, height = struct.unpack(">II", b[16:24])
    alpha = b[25] in (4, 6)
    pos = 8
    while pos + 8 <= len(b):
        n = struct.unpack(">I", b[pos:pos + 4])[0]
        kind = b[pos + 4:pos + 8]
        if kind == b"tRNS":
            alpha = True
        if kind in (b"IDAT", b"IEND"):
            break
        pos += 12 + n
    return {"format": "png", "width": width, "height": height, "alpha": alpha}


def parse_jpeg(b):
    pos = 2
    while pos + 4 <= len(b):
        if b[pos] != 0xFF:
            pos += 1
            continue
        marker = b[pos + 1]
        if marker == 0xFF:
            pos += 1
            continue
        if marker in (0xD8, 0x01) or 0xD0 <= marker <= 0xD7:
            pos += 2
            continue
        if marker == 0xD9:
            break
        length = struct.unpack(">H", b[pos + 2:pos + 4])[0]
        if 0xC0 <= marker <= 0xCF and marker not in (0xC4, 0xC8, 0xCC):
            if pos + 9 > len(b):
                break
            height, width = struct.unpack(">HH", b[pos + 5:pos + 9])
            return {"format": "jpeg", "width": width, "height": height, "alpha": False}
        pos += 2 + length
    return None


def parse_gif(b):
    if len(b) < 10:
        return None
    width, height = struct.unpack("<HH", b[6:10])
    alpha = False
    idx = b.find(b"\x21\xf9\x04")
    while idx != -1 and idx + 4 < len(b):
        if b[idx + 3] & 1:
            alpha = True
            break
        idx = b.find(b"\x21\xf9\x04", idx + 1)
    return {"format": "gif", "width": width, "height": height, "alpha": alpha}


def parse_webp(b):
    if len(b) < 30:
        return None
    kind = b[12:16]
    if kind == b"VP8X":
        alpha = bool(b[20] & 0x10)
        width = 1 + int.from_bytes(b[24:27], "little")
        height = 1 + int.from_bytes(b[27:30], "little")
    elif kind == b"VP8L" and b[20] == 0x2F:
        bits = struct.unpack("<I", b[21:25])[0]
        width = (bits & 0x3FFF) + 1
        height = ((bits >> 14) & 0x3FFF) + 1
        alpha = bool((bits >> 28) & 1)
    elif kind == b"VP8 " and b[23:26] == b"\x9d\x01\x2a":
        width = struct.unpack("<H", b[26:28])[0] & 0x3FFF
        height = struct.unpack("<H", b[28:30])[0] & 0x3FFF
        alpha = False
    else:
        return None
    return {"format": "webp", "width": width, "height": height, "alpha": alpha}


def read_header(path):
    with open(path, "rb") as f:
        b = f.read(HEAD_BYTES)
    if b.startswith(b"\x89PNG\r\n\x1a\n"):
        return parse_png(b)
    if b.startswith(b"\xff\xd8"):
        return parse_jpeg(b)
    if b[:4] == b"GIF8":
        return parse_gif(b)
    if b[:4] == b"RIFF" and b[8:12] == b"WEBP":
        return parse_webp(b)
    return None


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def pixel_stats(path):
    """Return (stats, reason). stats is None when pixels could not be read."""
    try:
        from PIL import Image
    except ImportError:
        return None, "Pillow is not installed"
    try:
        with Image.open(path) as im:
            im.load()
            rgba = im.convert("RGBA")
    except Exception as e:  # unreadable or too large for Pillow's safety limit
        return None, "Pillow could not read it (%s)" % type(e).__name__
    w, h = rgba.size
    px = rgba.load()
    corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    stats = {
        "corners_transparent": all(c[3] == 0 for c in corners),
        "transparent_share": rgba.getchannel("A").histogram()[0] / float(w * h),
        "distinct_colors": None,
        "dominant": [],
    }
    if w * h <= MAX_PIXELS_FOR_COLORS:
        found = rgba.getcolors(maxcolors=w * h) or []
        opaque = {c for _, c in found if c[3] > 0}
        stats["distinct_colors"] = len(opaque) + (1 if any(c[3] == 0 for _, c in found) else 0)
        rounded = {}
        for count, c in found:
            if c[3] == 0:
                continue
            key = tuple((v // 32) * 32 for v in c[:3])
            rounded[key] = rounded.get(key, 0) + count
        top = sorted(rounded.items(), key=lambda kv: -kv[1])[:5]
        stats["dominant"] = [("#%02x%02x%02x" % k, n / float(w * h)) for k, n in top]
    return stats, None


def parse_pair(text, sep, what):
    try:
        a, b = text.lower().split(sep)
        a, b = int(a), int(b)
        if a <= 0 or b <= 0:
            raise ValueError
        return a, b
    except ValueError:
        sys.stderr.write("%s must look like 512%s512, got %r\n" % (what, sep, text))
        sys.exit(2)


def main(argv):
    ap = argparse.ArgumentParser(prog="check_image.py", add_help=True)
    ap.add_argument("files", nargs="+")
    ap.add_argument("--size")
    ap.add_argument("--ratio")
    ap.add_argument("--max-bytes", type=int)
    ap.add_argument("--format")
    ap.add_argument("--transparent", action="store_true")
    ap.add_argument("--max-colors", type=int)
    args = ap.parse_args(argv)

    want_size = parse_pair(args.size, "x", "--size") if args.size else None
    want_ratio = parse_pair(args.ratio, ":", "--ratio") if args.ratio else None
    want_format = args.format.lower().replace("jpg", "jpeg") if args.format else None

    failed = unmeasured = unreadable = 0
    seen = {}

    def line(result, name, text):
        nonlocal failed, unmeasured
        if result == "FAIL":
            failed += 1
        elif result == "NOT MEASURED":
            unmeasured += 1
        print("  %-12s %-10s %s" % (result, name, text))

    for name in args.files:
        path = Path(name)
        print("file: %s" % name)
        try:
            size_bytes = path.stat().st_size
            head = read_header(path)
            digest = sha256(path)
        except OSError as e:
            print("  unreadable: %s" % e.strerror)
            unreadable += 1
            continue
        if head is None:
            print("  unreadable: not a PNG, JPEG, GIF or WebP file (or its header is damaged)")
            unreadable += 1
            continue

        w, h = head["width"], head["height"]
        print("  measured: %s, %dx%d, ratio %.4f, %d bytes, alpha channel: %s"
              % (head["format"], w, h, w / float(h), size_bytes, "yes" if head["alpha"] else "no"))
        if digest in seen:
            print("  identical to %s (same SHA-256)" % seen[digest])
        seen.setdefault(digest, name)

        stats, why = pixel_stats(path)
        if stats:
            print("  pixels: fully transparent share %.1f%%, corners transparent: %s, distinct colors: %s"
                  % (stats["transparent_share"] * 100,
                     "yes" if stats["corners_transparent"] else "no",
                     stats["distinct_colors"] if stats["distinct_colors"] is not None
                     else "not measured (image has more than %d pixels)" % MAX_PIXELS_FOR_COLORS))
            if stats["dominant"]:
                print("  dominant colors (rounded to 32 levels): "
                      + ", ".join("%s %.0f%%" % (c, s * 100) for c, s in stats["dominant"]))
        else:
            print("  pixels: not measured (%s)" % why)

        if want_size:
            ok = (w, h) == want_size
            line("PASS" if ok else "FAIL", "size", "wanted %dx%d, measured %dx%d" % (want_size + (w, h)))
        if want_ratio:
            wanted = want_ratio[0] / float(want_ratio[1])
            got = w / float(h)
            ok = abs(got - wanted) / wanted <= RATIO_TOLERANCE
            line("PASS" if ok else "FAIL", "ratio",
                 "wanted %d:%d (%.4f), measured %.4f" % (want_ratio + (wanted, got)))
        if args.max_bytes is not None:
            ok = size_bytes <= args.max_bytes
            line("PASS" if ok else "FAIL", "max-bytes", "limit %d, measured %d" % (args.max_bytes, size_bytes))
        if want_format:
            ok = head["format"] == want_format
            line("PASS" if ok else "FAIL", "format", "wanted %s, measured %s" % (want_format, head["format"]))
        if args.transparent:
            if not head["alpha"]:
                line("FAIL", "transparent", "no alpha channel in the file")
            elif stats is None:
                line("NOT MEASURED", "transparent",
                     "has an alpha channel, but pixels were not read (%s)" % why)
            else:
                line("PASS" if stats["corners_transparent"] else "FAIL", "transparent",
                     "all four corners fully transparent: %s" % ("yes" if stats["corners_transparent"] else "no"))
        if args.max_colors is not None:
            if stats is None:
                line("NOT MEASURED", "max-colors", "pixels were not read (%s)" % why)
            elif stats["distinct_colors"] is None:
                line("NOT MEASURED", "max-colors",
                     "image has more than %d pixels" % MAX_PIXELS_FOR_COLORS)
            else:
                ok = stats["distinct_colors"] <= args.max_colors
                line("PASS" if ok else "FAIL", "max-colors",
                     "limit %d, measured %d" % (args.max_colors, stats["distinct_colors"]))

    print("summary: %d failed, %d not measured, %d unreadable" % (failed, unmeasured, unreadable))
    if unreadable:
        return 2
    if failed:
        return 1
    if unmeasured:
        return 3
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
