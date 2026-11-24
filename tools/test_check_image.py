"""Regression tests for skill-drafts/media-review/scripts/check_image.py. Run: python -I tools/test_check_image.py

Fixtures are built with the standard library. Cases that need Pillow are skipped
when it is missing, and the "without Pillow" cases run with Pillow hidden.
"""
import struct
import subprocess
import sys
import tempfile
import zlib
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent.parent / "skill-drafts" / "media-review" / "scripts" / "check_image.py"

try:
    import PIL  # noqa: F401
    HAVE_PIL = True
except ImportError:
    HAVE_PIL = False

failures = 0


def case(name, ok):
    global failures
    print(("ok   " if ok else "FAIL ") + name)
    if not ok:
        failures += 1


def chunk(kind, data):
    return struct.pack(">I", len(data)) + kind + data + struct.pack(">I", zlib.crc32(kind + data))


def png(width, height, pixel, ctype=6, extra=b""):
    """pixel is a bytes object for one pixel, ctype 6 = RGBA, 2 = RGB. pixel may be a function (x, y) -> bytes."""
    raw = b""
    for y in range(height):
        raw += b"\x00"
        for x in range(width):
            raw += pixel(x, y) if callable(pixel) else pixel
    ihdr = struct.pack(">IIBBBBB", width, height, 8, ctype, 0, 0, 0)
    return (b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr) + extra
            + chunk(b"IDAT", zlib.compress(raw)) + chunk(b"IEND", b""))


def run(files, *opts, no_pillow=False):
    d = Path(tempfile.mkdtemp())
    paths = []
    for name, data in files.items():
        p = d / name
        p.write_bytes(data)
        paths.append(str(p))
    code = "import sys, runpy\n"
    if no_pillow:
        code += "sys.modules['PIL'] = None\n"
    code += "sys.argv = ['check_image.py'] + sys.argv[1:]\nrunpy.run_path(%r, run_name='__main__')\n" % str(SCRIPT)
    r = subprocess.run([sys.executable, "-I", "-c", code] + paths + list(opts),
                       capture_output=True, text=True, encoding="utf-8")
    return r.returncode, r.stdout + r.stderr


TRANSPARENT = png(4, 4, b"\x00\x00\x00\x00")
OPAQUE_RGB = png(4, 3, b"\x10\x20\x30", ctype=2)
CORNERS_OPAQUE = png(4, 4, lambda x, y: b"\xff\x00\x00\xff" if (x, y) == (0, 0) else b"\x00\x00\x00\x00")
JPEG = (b"\xff\xd8\xff\xc0\x00\x11\x08" + struct.pack(">HH", 30, 40) + b"\x03\x01\x22\x00\x02\x11\x01\x03\x11\x01\xff\xd9")
GIF = b"GIF89a" + struct.pack("<HH", 7, 5) + b"\x00\x00\x00\x21\xf9\x04\x01\x00\x00\x00\x00;"
WEBP_VP8X = b"RIFF" + struct.pack("<I", 22) + b"WEBPVP8X" + struct.pack("<I", 10) + b"\x10\x00\x00\x00" + (9).to_bytes(3, "little") + (5).to_bytes(3, "little")

# 1. header reads, standard library only
code, out = run({"a.png": OPAQUE_RGB}, no_pillow=True)
case("png size, format and no alpha read without Pillow", code == 0 and "png, 4x3" in out and "alpha channel: no" in out)
case("without Pillow the pixel line says not measured", "pixels: not measured (Pillow is not installed)" in out)
code, out = run({"a.jpg": JPEG}, no_pillow=True)
case("jpeg size read from the SOF marker", "jpeg, 40x30" in out)
code, out = run({"a.gif": GIF}, no_pillow=True)
case("gif size and transparency flag", "gif, 7x5" in out and "alpha channel: yes" in out)
code, out = run({"a.webp": WEBP_VP8X}, no_pillow=True)
case("webp VP8X size and alpha flag", "webp, 10x6" in out and "alpha channel: yes" in out)
code, out = run({"a.png": TRANSPARENT}, no_pillow=True)
case("png RGBA reports an alpha channel", "alpha channel: yes" in out)
trns = png(2, 2, b"\x01", ctype=3, extra=chunk(b"PLTE", b"\x00\x00\x00") + chunk(b"tRNS", b"\x00"))
code, out = run({"p.png": trns}, no_pillow=True)
case("png palette with tRNS counts as alpha", "alpha channel: yes" in out)

# 2. requirements
code, out = run({"a.png": OPAQUE_RGB}, "--size", "512x512", no_pillow=True)
case("wrong size fails with exit 1", code == 1 and "FAIL" in out and "wanted 512x512, measured 4x3" in out)
code, out = run({"a.png": OPAQUE_RGB}, "--size", "4x3", "--format", "png", "--max-bytes", "100000", no_pillow=True)
case("right size, format and byte limit pass with exit 0", code == 0 and out.count("PASS") == 3)
code, out = run({"a.png": OPAQUE_RGB}, "--ratio", "1:1", no_pillow=True)
case("ratio 4:3 image fails 1:1", code == 1)
code, out = run({"a.png": OPAQUE_RGB}, "--ratio", "4:3", no_pillow=True)
case("ratio 4:3 image passes 4:3", code == 0)
code, out = run({"a.jpg": JPEG}, "--format", "jpg", no_pillow=True)
case("jpg is accepted as a name for jpeg", code == 0)
code, out = run({"a.png": OPAQUE_RGB}, "--max-bytes", "10", no_pillow=True)
case("byte limit exceeded fails", code == 1)

# 3. transparency is not guessed
code, out = run({"a.png": OPAQUE_RGB}, "--transparent", no_pillow=True)
case("no alpha channel fails --transparent even without Pillow", code == 1 and "no alpha channel" in out)
code, out = run({"a.png": TRANSPARENT}, "--transparent", no_pillow=True)
case("alpha channel without Pillow is NOT MEASURED, exit 3", code == 3 and "NOT MEASURED" in out)
code, out = run({"a.png": OPAQUE_RGB}, "--max-colors", "16", no_pillow=True)
case("--max-colors without Pillow is NOT MEASURED, exit 3", code == 3 and "NOT MEASURED" in out)

if HAVE_PIL:
    code, out = run({"a.png": TRANSPARENT}, "--transparent")
    case("fully transparent png passes --transparent with Pillow", code == 0 and "corners transparent: yes" in out)
    code, out = run({"a.png": CORNERS_OPAQUE}, "--transparent")
    case("an opaque corner fails --transparent although the file has alpha", code == 1)
    code, out = run({"a.png": OPAQUE_RGB}, "--max-colors", "1")
    case("one-color image passes --max-colors 1", code == 0 and "distinct colors: 1" in out)
    two = png(4, 4, lambda x, y: b"\xff\x00\x00" if x < 2 else b"\x00\x00\xff", ctype=2)
    code, out = run({"a.png": two}, "--max-colors", "1")
    case("two-color image fails --max-colors 1 and lists dominant colors", code == 1 and "#e00000 50%" in out)
else:
    print("skip pixel cases with Pillow (not installed)")

# 4. identical files, unreadable files, usage
code, out = run({"a.png": OPAQUE_RGB, "b.png": OPAQUE_RGB}, no_pillow=True)
case("identical files are reported", "identical to" in out)
code, out = run({"a.png": OPAQUE_RGB, "b.png": png(4, 3, b"\x11\x20\x30", ctype=2)}, no_pillow=True)
case("different files are not reported as identical", "identical to" not in out)
code, out = run({"a.txt": b"hello"}, no_pillow=True)
case("a text file is unreadable, exit 2", code == 2 and "unreadable" in out)
code, out = run({"a.png": OPAQUE_RGB[:20]}, no_pillow=True)
case("a truncated png is unreadable, exit 2", code == 2)
code, out = run({"a.png": OPAQUE_RGB}, "--size", "big", no_pillow=True)
case("a bad --size value is a usage error, exit 2", code == 2)
r = subprocess.run([sys.executable, "-I", str(SCRIPT), str(Path(tempfile.gettempdir()) / "no-such-file.png")],
                   capture_output=True, text=True, encoding="utf-8")
case("a missing file is unreadable, exit 2", r.returncode == 2 and "unreadable" in r.stdout)

print("%d failed" % failures)
sys.exit(1 if failures else 0)
