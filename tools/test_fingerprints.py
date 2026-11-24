"""Regression tests for skill-drafts/fingerprints/scripts/fingerprints.py. Run: python -I tools/test_fingerprints.py"""
import subprocess, sys, tempfile, shutil
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent.parent / "skill-drafts" / "fingerprints" / "scripts" / "fingerprints.py"
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


def run_plain(files, words=None):
    d = Path(tempfile.mkdtemp())
    try:
        folder = d / "site"
        folder.mkdir()
        for name, data in files.items():
            (folder / name).write_bytes(data)
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
    case("link: query token not printed", (lambda r: "SECRET123" not in r[1] and "(query omitted)" in r[1])(run(HEAD + "see https://example.com/a?token=SECRET123\n"))),
    case("link: user:pass not printed", (lambda r: "user:pass" not in r[1] and "(credentials omitted)" in r[1] and "example.com/x" in r[1])(run(HEAD + "see https://user:pass@example.com/x\n"))),
    case("link: trailing dot and backtick stripped", "link to check by hand: https://example.com/page\n" in run(HEAD + "see `https://example.com/page.`\n")[1]),
    case("word 'acme' hits client_acme_v2.py in text and path", (lambda r: r[0] == 1 and "private word 'acme' in the file path" in r[1] and "client_acme_v2.py:1: private word 'acme'" in r[1])(run(extra={"client_acme_v2.py": b"acme\n"}, words="acme\n"))),
    case("word 'acme' does not hit acmeco or xacme", run(HEAD + "acmeco xacme\n", extra={"acmeco.txt": b"xacme\n"}, words="acme\n")[0] == 0),
    case("Windows path printed as C:\\, not redacted", (lambda r: "'C:\\'" in r[1] and "[REDACTED]" not in r[1])(run(HEAD + "C:\\Users\\x\n"))),
    case("15-character xoxb token shows only length", (lambda r: "[REDACTED] (15 characters)" in r[1] and "xoxb-1234567890" not in r[1])(run(HEAD + "xoxb-1234567890\n"))),
    case("two private word hits give two lines", (lambda r: "SKILL.md:5: private word 'ann'" in r[1] and "SKILL.md:7: private word 'ann'" in r[1])(run(HEAD + "ann\nfoo\nann\n", words="ann\n"))),
    case("'----' start gives no frontmatter", "no frontmatter" in run(body="----\nname: demo\ndescription: Demo skill.\n---\n")[1]),
    case("plain folder without SKILL.md is scanned, not a problem", (lambda r: r[0] == 0 and "scanned as a plain folder" in r[1] and "no regular SKILL.md" not in r[1])(run_plain({"index.html": b"hello"}))),
    case("plain folder: private word and key found", (lambda r: r[0] == 1 and "private word 'ann'" in r[1] and KEY not in r[1])(run_plain({"a.txt": b"ann " + KEY.encode()}, words="ann\n"))),
    case("plain folder: no header problems", "frontmatter" not in run_plain({"a.txt": b"x"})[1]),
    case("plain folder: tool-specific term is not flagged", run_plain({"a.md": ("Send" + "Message").encode()})[0] == 0),
    case("CRLF SKILL.md parses", (lambda r: r[0] == 0 and "no frontmatter" not in r[1] and "frontmatter:" not in r[1])(run(HEAD.replace("\n", "\r\n")))),
]
sys.exit(0 if all(results) else 1)
