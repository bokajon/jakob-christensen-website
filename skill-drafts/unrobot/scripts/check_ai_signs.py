"""Scan text for pattern-matchable signs of AI writing.

Sign numbers match references/signs.md. Only word and phrase patterns are
caught; judgement signs (rule of three, elegant variation, deep sayings,
run-ups) need a human read.

Usage:
    python -I check_ai_signs.py <file> [<file> ...] [--summary]
    python -I check_ai_signs.py -            # read stdin
Files: .txt, .md, .html (tags, scripts and styles are stripped).
Exit code: 0 if no hits, 1 if hits, 2 on usage error.
"""
import html
import re
import sys

W = r"\b"

SIGNS = {
    "1.1 undue significance": [
        r"stands as", r"serves as a (?:testament|reminder)", r"(?:is|was|remains) a testament",
        r"testament to", r"(?:pivotal|crucial|vital|significant|key) (?:role|moment)",
        r"underscor\w*", r"reflects? (?:the )?broader", r"enduring legacy", r"lasting legacy",
        r"setting the stage", r"turning point", r"evolving landscape", r"focal point",
        r"indelible mark", r"deeply rooted", r"marking a", r"shaping the",
    ],
    "1.2 canned notability": [
        r"independent coverage", r"(?:local|national) media outlets", r"trade publications",
        r"(?:featured|profiled) in", r"active social media presence",
    ],
    "1.3 superficial -ing analysis": [
        r",\s+(?:highlighting|underscoring|emphasi[sz]ing|ensuring|reflecting|symboli[sz]ing|"
        r"contributing to|cultivating|fostering|encompassing|enhancing|showcasing)\b",
        r"valuable insights?", r"resonates? with", r"aligns? with",
    ],
    "1.4 promotional tone": [
        r"boasts?", r"vibrant", r"rich (?:cultural |)(?:culture|heritage|history|tapestry)",
        r"nestled", r"in the heart of", r"groundbreaking", r"renowned", r"diverse array",
        r"breathtaking", r"stunning", r"world-class", r"seamless(?:ly)?", r"state-of-the-art",
        r"natural beauty", r"commitment to", r"exemplif\w+",
    ],
    "1.5 vague attribution": [
        r"experts (?:say|argue|believe|agree)", r"observers (?:have )?(?:noted|cited|note)",
        r"industry reports", r"studies (?:show|suggest)", r"widely regarded",
        r"some critics argue", r"many believe",
    ],
    "1.6 challenges formula": [r"despite (?:these|its|the) challenges", r"faces (?:several |many )?challenges"],
    "1.7 title-defining lead": [r"^\s*[\w\s]{1,40} refers to"],
    "2.1 AI vocabulary": [
        r"^additionally", r"(?<=[.!?]\s)additionally", r"bolster\w*", r"crucial", r"delv\w+",
        r"garner\w*", r"intricac\w+", r"intricate", r"interplay", r"meticulous\w*", r"pivotal",
        r"tapestry", r"enhanc\w+", r"foster\w*", r"robust", r"landscape", r"showcas\w+",
        r"leverag\w+", r"realm", r"embark\w*", r"navigat\w+ the",
    ],
    "2.2 copula avoidance": [
        r"serves as", r"functions as", r"operates as", r"stands as", r"began (?:his|her|their) career as",
    ],
    "2.3 vague association": [r"(?:is|was|were|are) associated with", r"in connection with"],
    "2.4 negative parallelism": [
        r"not only\b.{0,80}\bbut", r"(?:it'?s|it is|this is|this isn'?t|isn'?t|is not|it'?s not|it is not|this is not) (?:just|merely|simply|only) ",
        r"\bnot\b[^.!?]{1,40}, but\b", r"\bno \w+, no \w+, just\b", r"rather than",
    ],
    "3.4 em/en dash": [r"\u2014", r"\s\u2013\s", r"\s--\s"],
    "3.5 emoji": [r"[\U0001F300-\U0001FAFF\u2600-\u27bf\u2b50\u2705]"],
    "3.7 curly quotes": [r"[\u201c\u201d\u2018\u2019]"],
    "4.1 chat leftovers": [
        r"i hope this helps", r"^certainly!", r"great question", r"let me know if",
        r"would you like me to", r"^here is (?:a|an|the) ", r"in this (?:section|article), we will",
        r"feel free to",
    ],
    "4.2 cutoff disclaimer": [
        r"as of my (?:last|latest) (?:update|knowledge)", r"not widely (?:documented|disclosed|known)",
        r"based on available information", r"maintains? a low profile", r"while specific details",
        r"not publicly available",
    ],
    "4.3 placeholder": [r"\[(?:your|insert|describe)[^\]]*\]", r"INSERT_\w+", r"\b\d{4}-XX-XX\b"],
    "5.1 didactic disclaimer": [
        r"it'?s important to (?:note|remember|consider)", r"it is important to (?:note|remember)",
        r"(?:it is|it'?s) worth noting", r"may vary", r"keep in mind",
    ],
    "5.2 section summary": [r"^(?:in summary|in conclusion|overall|ultimately|to sum up)\b"],
    "6.5 staged run-up": [
        r"here'?s (?:what|the thing|why)", r"let'?s be (?:honest|clear)", r"the truth is",
        r"let that sink in",
    ],
    "6.7 stacked qualifiers": [r"(?:could|may|might) potentially", r"potentially (?:possibly|perhaps)"],
}

COMPILED = {
    name: [re.compile(p if p.startswith(("^", "(?<=")) else W + p if p[0].isalpha() else p, re.I | re.M) for p in pats]
    for name, pats in SIGNS.items()
}


def strip_html(text):
    text = re.sub(r"(?is)<(script|style|code|pre)\b.*?</\1>", " ", text)
    text = re.sub(r"(?s)<!--.*?-->", " ", text)
    text = re.sub(r"(?i)<br\s*/?>|</(?:p|div|li|h\d|tr|section|article)>", "\n", text)
    text = re.sub(r"<[^>]+>", " ", text)
    return html.unescape(text)


def strip_markdown(text):
    text = re.sub(r"(?s)```.*?```", " ", text)
    text = re.sub(r"`[^`]*`", " ", text)
    text = re.sub(r"(?s)\A---\n.*?\n---\n", "", text)  # front matter
    return text


def sentences(text):
    for line_no, line in enumerate(text.splitlines(), 1):
        line = line.strip()
        if not line:
            continue
        for s in re.split(r"(?<=[.!?])\s+(?=[A-Z\"'\u201c])", line):
            if s.strip():
                yield line_no, s.strip()


def scan(text):
    hits = []
    for line_no, s in sentences(text):
        for name, pats in COMPILED.items():
            for p in pats:
                m = p.search(s)
                if m:
                    hits.append((name, line_no, m.group(0), s))
                    break
    return hits


def load(path):
    if path == "-":
        return sys.stdin.read()
    with open(path, encoding="utf-8", errors="replace") as f:
        raw = f.read()
    low = path.lower()
    if low.endswith((".html", ".htm")):
        return strip_html(raw)
    if low.endswith((".md", ".markdown")):
        return strip_markdown(raw)
    return raw


def main(argv):
    summary = "--summary" in argv
    paths = [a for a in argv if a != "--summary"]
    if not paths:
        print(__doc__)
        return 2
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except AttributeError:
        pass
    total = 0
    for path in paths:
        hits = scan(load(path))
        total += len(hits)
        print(f"== {path}: {len(hits)} hit(s)")
        by_sign = {}
        for h in hits:
            by_sign.setdefault(h[0], []).append(h)
        for name in SIGNS:
            if name not in by_sign:
                continue
            print(f"  [{name}] {len(by_sign[name])}")
            if summary:
                continue
            for _, line_no, match, s in by_sign[name]:
                snippet = s if len(s) <= 160 else s[:157] + "..."
                print(f"    line {line_no} '{match}': {snippet}")
    print(f"Total: {total}")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
