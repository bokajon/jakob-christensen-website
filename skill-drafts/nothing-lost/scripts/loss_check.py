"""Line-by-line loss check for a rewrite of text or data files.

Usage:
  python -I loss_check.py --old <path> [<path> ...] --new <path> [<path> ...]
                          [--git-ref REF] [--allow FILE] [--similar 0.8]
                          [--ignore-case]

--old     files or folders holding the content before the rewrite. With --git-ref the
          paths are read from that commit (default use: HEAD, run inside the repository,
          run from the repository root, paths relative to it).
--new     files or folders holding the content after the rewrite. Together they count as
          one pool of lines: moving a line to another file, or into a detail document, is fine.
--allow   a text file with lines that were meant to go (one per line, compared the same way).
--similar a changed line counts as "changed, not lost" when a new line is at least this similar
          (0 to 1, default 0.8). Such lines are listed for a look but never fail the run.

Every old line, compared after trimming and collapsing white space (case is kept unless
--ignore-case), must appear in the new pool.
Blank lines are ignored. An old line that is missing is checked for a similar new line
(the nearest candidates are chosen by shared words, so a line that shares no word with any new line
counts as LOST):
  CHANGED  similar line found (listed with the nearest new line), does not fail the run
  ALLOWED  listed in the --allow file, does not fail the run
  LOST     nothing similar found: fails the run, exit code 1
Files that look binary, symbolic links and submodules are skipped and listed as "skipped"; UTF-16 files with a byte order mark are
read. Exit codes: 0 no lost line, 1 at least one lost line, 2 wrong call or unreadable input.

Set semantics: a line that occurs three times before and once after is not reported (the check
asks whether the text still exists, not how often). Standard library only.
"""

import argparse
import difflib
import re
import subprocess
import sys
from pathlib import Path

WS = re.compile(r"\s+")
TOKEN = re.compile(r"\w+")


def norm(line, ignore_case):
    s = WS.sub(" ", line.strip())
    return s.lower() if ignore_case else s


SKIPPED = []  # (name, reason) of entries that were not read: binary, symbolic link, submodule


def fs_files(path):
    p = Path(path)
    if p.is_symlink():
        SKIPPED.append((str(p), "symbolic link"))
        return []
    if p.is_dir():
        out = []
        for f in sorted(p.rglob("*")):
            if ".git" in f.parts:
                continue
            if f.is_symlink():
                SKIPPED.append((str(f), "symbolic link"))
            elif f.is_file():
                out.append(f)
        return out
    if p.is_file():
        return [p]
    raise FileNotFoundError(path)


def decode(data, name):
    """Text of a file, or None (and a note in SKIPPED) when it is binary."""
    if data[:4] in (b"\xff\xfe\x00\x00", b"\x00\x00\xfe\xff"):
        SKIPPED.append((name, "UTF-32"))
        return None
    if data[:2] in (b"\xff\xfe", b"\xfe\xff"):
        return data.decode("utf-16", "replace")
    if b"\0" in data[:4096]:
        SKIPPED.append((name, "binary"))
        return None
    return data.decode("utf-8-sig", "replace")  # a UTF-8 byte order mark is dropped


def read_text(path):
    return decode(Path(path).read_bytes(), str(path))


def git(args):
    r = subprocess.run(["git", *args], capture_output=True)
    if r.returncode != 0:
        raise RuntimeError(r.stderr.decode("utf-8", "replace").strip() or "git failed")
    return r.stdout


def git_texts(ref, path):
    """Yield (name, text) for a file or folder as it was at ref."""
    if ref.startswith("-"):
        raise RuntimeError(f"invalid git ref: {ref}")
    raw = git(["ls-tree", "-r", "-z", "--full-name", ref, "--", path])
    entries = []
    for rec in raw.split(b"\0"):
        if not rec:
            continue
        meta, _, n = rec.partition(b"\t")
        entries.append((meta.split(b" ")[0], n.decode("utf-8", "replace")))
    if not entries:
        raise FileNotFoundError(f"{ref}:{path}")
    for mode, n in entries:
        if mode == b"160000":
            SKIPPED.append((n, "submodule"))
            continue
        if mode == b"120000":
            SKIPPED.append((n, "symbolic link"))
            continue
        text = decode(git(["show", f"{ref}:{n}"]), n)
        if text is not None:
            yield n, text


def collect(paths, ref=None):
    out = []
    for path in paths:
        if ref:
            out.extend(git_texts(ref, path))
        else:
            for f in fs_files(path):
                t = read_text(f)
                if t is not None:
                    out.append((str(f), t))
    return out


def word_diff(a, b):
    """Only the words that differ, so a change at the end of a long line is visible."""
    x, y = a.split(), b.split()
    out = []
    for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(None, x, y).get_opcodes():
        if tag != "equal":
            out.append("[" + " ".join(x[i1:i2]) + "] -> [" + " ".join(y[j1:j2]) + "]")
    return "; ".join(out)[:300]


def main(argv):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--old", nargs="+", required=True)
    ap.add_argument("--new", nargs="+", required=True)
    ap.add_argument("--git-ref")
    ap.add_argument("--allow")
    ap.add_argument("--similar", type=float, default=0.8)
    ap.add_argument("--ignore-case", action="store_true")
    try:
        a = ap.parse_args(argv)
    except SystemExit as e:
        return 2 if e.code else 0
    keep = a.ignore_case
    if not 0 <= a.similar <= 1:
        print("error: --similar must be between 0 and 1", file=sys.stderr)
        return 2
    SKIPPED.clear()
    try:
        old = collect(a.old, a.git_ref)
        new = collect(a.new)
        if not a.git_ref:
            same = {str(Path(n).resolve()) for n, _ in old} & {str(Path(n).resolve()) for n, _ in new}
            if same:
                print("error: --old and --new read the same files from disk, so every line would match itself; "
                      "pass --git-ref or copy the old files to a folder outside the project first: "
                      + ", ".join(sorted(same)[:3]), file=sys.stderr)
                return 2
        allow = set()
        if a.allow:
            allow_text = read_text(a.allow)
            if allow_text is None:
                raise RuntimeError(f"--allow file looks binary: {a.allow}")
            allow = {norm(l, keep) for l in allow_text.splitlines() if l.strip()}
    except (OSError, RuntimeError, ValueError) as e:
        print(f"error: {e}", file=sys.stderr)
        return 2
    if not old or not new:
        print("error: no readable text files in --old or --new", file=sys.stderr)
        return 2

    pool = {}
    for name, text in new:
        for l in text.splitlines():
            n = norm(l, keep)
            if n:
                pool.setdefault(n, name)
    pool_lines = list(pool)

    total = 0
    missing = []  # (file, lineno, original, normalized)
    seen = set()
    for name, text in old:
        for i, l in enumerate(text.splitlines(), 1):
            n = norm(l, keep)
            if not n:
                continue
            total += 1
            if n in pool or n in seen:
                continue
            seen.add(n)
            missing.append((name, i, l.rstrip(), n))

    index = {}
    for k, line in enumerate(pool_lines):
        for w in set(TOKEN.findall(line)):
            index.setdefault(w, []).append(k)

    def nearest(n):
        """Best similar pool line: shortlist by shared words, then compare the shortlist."""
        votes = {}
        for w in set(TOKEN.findall(n)):
            posting = index.get(w, ())
            if len(posting) > 300:  # a word found everywhere says nothing
                continue
            for k in posting:
                votes[k] = votes.get(k, 0) + 1
        best, best_r = None, a.similar
        for k in sorted(votes, key=votes.get, reverse=True)[:30]:
            r = difflib.SequenceMatcher(None, n, pool_lines[k]).ratio()
            if r >= best_r:
                best, best_r = pool_lines[k], r
        return best

    lost, changed, allowed = [], [], []
    for name, i, orig, n in missing:
        if n in allow:
            allowed.append((name, i, orig))
            continue
        near = nearest(n)
        if near is not None:
            changed.append((name, i, orig, near, pool[near]))
        else:
            lost.append((name, i, orig))

    for name, reason in dict.fromkeys(SKIPPED):
        print(f"skipped ({reason}, not checked): {name}")
    print(f"old lines (non-blank): {total}, distinct missing from new pool: {len(missing)}")
    print(f"LOST {len(lost)}, CHANGED {len(changed)}, ALLOWED {len(allowed)}")
    for name, i, orig in lost:
        print(f"LOST    {name}:{i}: {orig[:200]}")
    for name, i, orig, near, where in changed:
        print(f"CHANGED {name}:{i}: {orig[:120]}\n        -> {where}: {near[:120]}")
        print(f"        differing words: {word_diff(norm(orig, keep), near)}")
    for name, i, orig in allowed:
        print(f"ALLOWED {name}:{i}: {orig[:120]}")
    print("OK: no old line is lost" if not lost else f"FAILED: {len(lost)} old line(s) found nowhere in the new files")
    return 1 if lost else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
