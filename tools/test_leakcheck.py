"""Regression tests for skill-drafts/leakcheck/scripts/leakcheck.py. Run: python -I tools/test_leakcheck.py"""
import subprocess, sys, tempfile, shutil
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent.parent / "skill-drafts" / "leakcheck" / "scripts" / "leakcheck.py"
HEAD = "---\nname: demo\ndescription: Demo skill.\n---\n"


def run(body=HEAD, extra=None, words=None, raw=None):
    d = Path(tempfile.mkdtemp())
    try:
        folder = d / "demo"
        folder.mkdir()
        (folder / "SKILL.md").write_bytes(raw if raw is not None else body.encode("utf-8"))
        for name, data in (extra or {}).items():
            p = folder / name
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_bytes(data)
        args = [sys.executable, "-I", str(SCRIPT), str(folder)]
        if words is not None:
            w = d / "w.txt"
            w.write_text(words, encoding="utf-8")
            args += ["--words", str(w)]
        r = subprocess.run(args, capture_output=True, text=True, encoding="utf-8")
        return r.returncode, r.stdout
    finally:
        shutil.rmtree(d, ignore_errors=True)


def case(name, ok):
    print(("ok   " if ok else "FAIL ") + name)
    return ok


KEY = "sk-" + "ant-" + "A1b2C3d4E5f6G7h8I9j0K1l2M3n4"
results = [
    case("clean skill passes", run()[0] == 0),
    case("key found and masked", (lambda r: r[0] == 1 and KEY not in r[1] and "characters)" in r[1])(run(HEAD + KEY + "\n"))),
    case("BOM is not 'no frontmatter'", "no frontmatter" not in run(raw=b"\xef\xbb\xbf" + HEAD.encode())[1]),
    case("non-UTF-8 SKILL.md gives a problem, no crash", (lambda r: r[0] == 1 and "Traceback" not in r[1])(run(raw=b"\xff\xfe\x00bad"))),
    case("word boundary: 'ann' does not hit 'banner'", run(HEAD + "banner\n", words="ann\n")[0] == 0),
    case("word hit is case-insensitive", run(HEAD + "Ann was here\n", words="ann\n")[0] == 1),
    case("private word in file path", run(extra={"ann-notes.txt": b"x"}, words="ann\n")[0] == 1),
    case("task-management is no key", run(HEAD + "task-management-board-with-many-parts\n")[0] == 0),
    case(".git skipped", (lambda r: r[0] == 0 and "skipped" in r[1])(run(extra={".git/config": (KEY).encode()}))),
    case("non-UTF-8 extra file is a hint", (lambda r: r[0] == 0 and "not UTF-8" in r[1])(run(extra={"b.bin": b"\xff\xfe\x00\x01"}))),
]
sys.exit(0 if all(results) else 1)
