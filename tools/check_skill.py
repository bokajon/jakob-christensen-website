"""Check a skill folder before it is published on the Agent Skills page.

Usage: python -I tools/check_skill.py <skill-folder> [<skill-folder> ...]

Exit code 0 = no problems, 1 = problems found. "Hint" lines are for a human
to look at and never fail the check.

Rules for the frontmatter come from the Agent Skills specification
(https://agentskills.io/specification, read 2026-11-22): name required,
max 64 characters, lowercase letters, digits and single hyphens, equal to the
folder name; description required, non-empty, max 1024 characters; optional
fields license, compatibility (max 500), metadata, allowed-tools.
"""

import re
import sys
from pathlib import Path

SPEC_FIELDS = {"name", "description", "license", "compatibility", "metadata", "allowed-tools"}

# Words that point to Jakob, his machine or his projects. A public skill must not contain them.
PRIVATE_WORDS = [
    "jakob", "christensen", "fhs30332", "bokajon", "salzburg",
    "niagara", "niagarama", "tinkerlodge", "city run", "atelier",
    "art hub", "pixel lab", "pixellab", "little lights",
]
# Project documents of Jakob's repos that a stranger does not have.
PRIVATE_DOCS = ["OFFEN.md", "STATUS.md", "KARTE.md", "IDEEN.md", "SESSION-LOG.md", "FAKTEN.md", "RULES-DETAIL.md"]
# Names that only exist in one tool. A skill for all tools needs a neutral wording or a note.
TOOL_ONLY = [
    "AskUserQuestion", "TaskCreate", "TodoWrite", "mcp__", "Skill tool", "SendMessage",
    "disable-model-invocation", "user-invocable", "$ARGUMENTS", "CLAUDE_",
]
# Exact lines that carry the author's name on purpose (compared after stripping whitespace).
# They are skipped for the PRIVATE_WORDS scan only.
ALLOWED_NAME_LINES = {
    'author: "Jakob Christensen"',
    'source: "https://jakobchristensen.com"',
    "Copyright (c) 2026 Jakob Christensen",
}
GERMAN_HINTS = [" und ", " der ", " die ", " das ", " nicht ", " ist ", " mit ", " für "]

PATTERNS = {
    "absolute Windows path": re.compile(r"\b[A-Za-z]:[\\/]"),
    "home path": re.compile(r"(/Users/|/home/|~[\\/]\.(claude|codex|agents|gemini))"),
    "email address": re.compile(r"[\w.+-]+@[\w-]+\.[\w.]+"),
    "key or token": re.compile(r"(sk-[A-Za-z0-9]{16,}|ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|xox[bap]-[A-Za-z0-9-]{10,})"),
    "long secret-like string": re.compile(r"\b[A-Za-z0-9+/_-]{40,}\b"),
    "em or en dash": re.compile("[" + chr(0x2013) + chr(0x2014) + "]"),
}
NAME_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")


def parse_frontmatter(text):
    if not text.startswith("---"):
        return None, text
    end = text.find("\n---", 3)
    if end == -1:
        return None, text
    block = text[3:end].strip("\n")
    fields = {}
    current = None
    for line in block.splitlines():
        m = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", line)
        if m and not line.startswith(" "):
            current = m.group(1)
            fields[current] = m.group(2).strip().strip('"').strip("'")
        elif current:
            fields[current] += " " + line.strip()
    return fields, text[end + 4:]


def check(folder):
    problems, hints = [], []
    folder = Path(folder).resolve()
    skill = folder / "SKILL.md"
    if not skill.is_file():
        return [f"no SKILL.md in {folder}"], hints

    text = skill.read_text(encoding="utf-8")
    fields, _body = parse_frontmatter(text)
    if fields is None:
        problems.append("SKILL.md has no frontmatter between --- lines")
        fields = {}

    name = fields.get("name", "")
    desc = fields.get("description", "")
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
        name_scan = "\n".join(
            ln for ln in content.split("\n") if ln.strip() not in ALLOWED_NAME_LINES
        ).lower()
        for word in PRIVATE_WORDS:
            if word in name_scan:
                problems.append(f"{rel}: private word '{word}'")
        for doc in PRIVATE_DOCS:
            if doc in content:
                problems.append(f"{rel}: names private project document '{doc}'")
        for label, pattern in PATTERNS.items():
            for m in pattern.finditer(content):
                line = content.count("\n", 0, m.start()) + 1
                problems.append(f"{rel}:{line}: {label}: '{m.group(0)[:40]}'")
        for word in TOOL_ONLY:
            if word in content:
                problems.append(f"{rel}: '{word}' exists in one tool only")
        german = [w.strip() for w in GERMAN_HINTS if w in lower]
        if len(german) >= 2:
            hints.append(f"{rel}: looks partly German ({', '.join(german)})")
        for m in re.finditer(r"https?://[^\s)>\"']+", content):
            hints.append(f"{rel}: link to check by hand: {m.group(0)}")
    hints.append(f"{len(files)} file(s), SKILL.md {len(text)} characters, description {len(desc)} characters")
    return problems, hints


def check_checklist_numbers(path):
    """Two '## <number>.' headings with the same number are a merge collision."""
    problems, seen = [], {}
    for i, line in enumerate(Path(path).read_text(encoding="utf-8").splitlines(), 1):
        m = re.match(r"^## (\d+[a-z]?)\.", line)
        if m:
            if m.group(1) in seen:
                problems.append(f"{Path(path).name}:{i}: heading number {m.group(1)} already used on line {seen[m.group(1)]}")
            seen.setdefault(m.group(1), i)
    return problems


def check_review_prompt(folder):
    """A review prompt next to a draft folder must be about that skill."""
    folder = Path(folder).resolve()
    prompt = folder.parent / f"{folder.name}.review-prompt.md"
    if not prompt.is_file():
        return []
    text = prompt.read_text(encoding="utf-8")
    problems = []
    names = re.findall(r"^name:\s*(\S+)", text, re.M)
    if not names:
        problems.append(f"{prompt.name}: no embedded 'name:' line found")
    for n in names:
        if n != folder.name:
            problems.append(f"{prompt.name}: embedded name '{n}' differs from skill '{folder.name}'")
    if f"Skill: {folder.name}." not in text:
        problems.append(f"{prompt.name}: context line 'Skill: {folder.name}.' missing")
    return problems


def main(argv):
    if not argv:
        print(__doc__)
        return 2
    failed = False
    checklist = Path(__file__).resolve().parent / "SKILL-CHECKLIST.md"
    if checklist.is_file():
        nums = check_checklist_numbers(checklist)
        for p in nums:
            print(f"PROBLEM {p}")
        failed = bool(nums)
    for folder in argv:
        problems, hints = check(folder)
        problems += check_review_prompt(folder)
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
