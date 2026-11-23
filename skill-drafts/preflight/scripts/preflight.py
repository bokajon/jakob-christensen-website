"""Check a skill folder before you share it.

Usage: python -I scripts/preflight.py <skill-folder> [<skill-folder> ...]
           [--words FILE] [--no-dashes] [--english]

Exit code 0 = no problems, 1 = problems found, 2 = wrong usage.
"Hint" lines are for a human and never fail the check.

Frontmatter rules follow the Agent Skills specification: name required, max 64
characters, lowercase letters, digits and single hyphens, equal to the folder
name; description required, max 1024 characters; optional fields license,
compatibility (max 500), metadata, allowed-tools.

Options:
  --words FILE   One private word or file name per line (names, projects, internal
                 documents). Every hit is a problem. Lines starting with # are ignored.
  --no-dashes    Report em and en dashes as problems.
  --english      Hint when a file looks partly German.
"""

import re
import sys
from pathlib import Path

SPEC_FIELDS = {"name", "description", "license", "compatibility", "metadata", "allowed-tools"}

# Names that exist in one tool only. Built from parts so this file does not flag itself.
TOOL_ONLY = [
    "AskUser" + "Question", "Task" + "Create", "Todo" + "Write", "mcp" + "__",
    "Skill" + " tool", "Send" + "Message", "disable-model-" + "invocation",
    "user-" + "invocable", "$ARG" + "UMENTS", "CLAUDE" + "_",
]
GERMAN_HINTS = [" und ", " der ", " die ", " das ", " nicht ", " ist ", " mit ", " f\u00fcr "]
DASHES = "[" + chr(0x2013) + chr(0x2014) + "]"
HOME = r"(/Us" + r"ers/|/ho" + r"me/|~[\\/]\." + r"(claude|codex|agents|gemini))"

PATTERNS = {
    "absolute Windows path": re.compile(r"\b[A-Za-z]:[\\/]"),
    "home path": re.compile(HOME),
    "email address": re.compile(r"[\w.+-]+@[\w-]+\.[\w.]+"),
    "key or token": re.compile(r"(sk-[A-Za-z0-9]{16,}|ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|xox[bap]-[A-Za-z0-9-]{10,})"),
    "long secret-like string": re.compile(r"\b[A-Za-z0-9+/_-]{40,}\b"),
}
NAME_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")


def parse_frontmatter(text):
    if not text.startswith("---"):
        return None
    end = text.find("\n---", 3)
    if end == -1:
        return None
    fields, current = {}, None
    for line in text[3:end].strip("\n").splitlines():
        m = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", line)
        if m and not line.startswith(" "):
            current = m.group(1)
            fields[current] = m.group(2).strip().strip('"').strip("'")
        elif current:
            fields[current] += " " + line.strip()
    return fields


def check(folder, words, no_dashes, english):
    problems, hints = [], []
    folder = Path(folder).resolve()
    skill = folder / "SKILL.md"
    if not skill.is_file():
        return [f"no SKILL.md in {folder}"], hints
    text = skill.read_text(encoding="utf-8")
    fields = parse_frontmatter(text)
    if fields is None:
        problems.append("SKILL.md has no frontmatter between --- lines")
        fields = {}
    name, desc = fields.get("name", ""), fields.get("description", "")
    if not name:
        problems.append("frontmatter: name missing")
    else:
        if len(name) > 64:
            problems.append(f"frontmatter: name longer than 64 characters ({len(name)})")
        if not NAME_RE.match(name):
            problems.append(f"frontmatter: name '{name}' is not lowercase letters, digits and single hyphens")
        if name != folder.name:
            problems.append(f"frontmatter: name '{name}' differs from folder name '{folder.name}'")
    if not desc:
        problems.append("frontmatter: description missing or empty")
    elif len(desc) > 1024:
        problems.append(f"frontmatter: description longer than 1024 characters ({len(desc)})")
    if len(fields.get("compatibility", "")) > 500:
        problems.append("frontmatter: compatibility longer than 500 characters")
    for key in fields:
        if key not in SPEC_FIELDS:
            problems.append(f"frontmatter: field '{key}' is not in the Agent Skills spec (works in one tool only)")

    files = [p for p in folder.rglob("*") if p.is_file()]
    for path in files:
        rel = path.relative_to(folder)
        try:
            content = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            hints.append(f"{rel}: binary file, check by hand")
            continue
        lower = content.lower()
        for word in words:
            if word.lower() in lower:
                problems.append(f"{rel}: private word '{word}'")
        for label, pattern in PATTERNS.items():
            for m in pattern.finditer(content):
                line = content.count("\n", 0, m.start()) + 1
                problems.append(f"{rel}:{line}: {label}: '{m.group(0)[:40]}'")
        if no_dashes:
            for m in re.finditer(DASHES, content):
                line = content.count("\n", 0, m.start()) + 1
                problems.append(f"{rel}:{line}: em or en dash")
        for word in TOOL_ONLY:
            if word in content:
                problems.append(f"{rel}: '{word}' exists in one tool only")
        if english:
            german = [w.strip() for w in GERMAN_HINTS if w in lower]
            if len(german) >= 2:
                hints.append(f"{rel}: looks partly German ({', '.join(german)})")
        for m in re.finditer(r"https?://[^\s)>\"']+", content):
            hints.append(f"{rel}: link to check by hand: {m.group(0)}")
    hints.append(f"{len(files)} file(s), SKILL.md {len(text)} characters, description {len(desc)} characters")
    return problems, hints


def main(argv):
    folders, words, no_dashes, english = [], [], False, False
    i = 0
    while i < len(argv):
        arg = argv[i]
        if arg == "--words" and i + 1 < len(argv):
            lines = Path(argv[i + 1]).read_text(encoding="utf-8").splitlines()
            words += [w.strip() for w in lines if w.strip() and not w.startswith("#")]
            i += 1
        elif arg == "--no-dashes":
            no_dashes = True
        elif arg == "--english":
            english = True
        elif arg.startswith("--"):
            print(__doc__)
            return 2
        else:
            folders.append(arg)
        i += 1
    if not folders:
        print(__doc__)
        return 2
    failed = False
    for folder in folders:
        problems, hints = check(folder, words, no_dashes, english)
        print(f"== {folder}")
        for p in problems:
            print(f"PROBLEM {p}")
        for h in hints:
            print(f"hint    {h}")
        print("OK" if not problems else f"FAILED ({len(problems)} problem(s))")
        failed = failed or bool(problems)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
