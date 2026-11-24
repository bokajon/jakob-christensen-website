I am about to publish the agent skill below under my own name on my personal website, as a free download. Review it like a strict senior reviewer before release. Open the sources listed here yourself and cite the exact file or page for every comparison or factual claim. If you cannot open a source, say so instead of answering from memory.

Context
- Skill: nothing-lost. What it does: before a large rewrite of text or data files (restructure, shorten, split, merge, reformat), the agent makes the old state recoverable in git, moves text verbatim, then runs a bundled Python script that checks line by line that no old line was lost. Old lines found in none of the new files are LOST (run fails), lines with a similar new line are CHANGED (listed with the nearest new line, run does not fail), lines the user named as meant to go are ALLOWED. The script is included below, after the SKILL.md.
- It must work in: Claude Code, Codex and Cursor (needs git and Python 3, standard library only).
- Origin: written by me from my own working rule ("back up before a large rewrite and run a loss check"). Part 1 is there to catch anything that slipped in from other people's skills anyway.
- Decided by me. Do not argue these, but flag one if it makes the skill unsafe or broken: model-invoked (no disable-model-invocation); git is the backup (no backup folder); set semantics (order and counts are not checked, stated in the skill); a CHANGED line does not fail the run, a person reads it; the default similarity limit 0.8 stays (adjustable with `--similar`); the allow file lists only text the user named as meant to go.
- Already answered in an earlier review round (round 1: Copilot and Gemini), do not raise again unless the new text brings the problem back: (a) the repositories under Sources could not be opened by the round-1 reviewers, so overlap there stays "not checked" (not a text problem); (b) the path placeholder "<this skill's folder>" stays, the step says to use the full path; (c) the snapshot commit before the rewrite is intended and told to the user; (d) SKILL.md stays one file (about 6 KB); (e) the script runs only as a command line tool, so its module-level `SKIPPED` list is accepted; (f) Gemini P2, Codex rejects the "compatibility" field: checked, Codex CLI 0.171.0-alpha.13 lists a skill with that field normally in its model-visible skill list (codex debug prompt-input); only the authoring script quick_validate.py of Codex's own skill-creator rejects unknown keys, so the field stays; (g) Gemini P10, submodules and symbolic links: reproduced and fixed, both are now skipped and listed. Changed after round 1, check the new text: description front-loaded; `git commit --only` with a staged-files check; allow file holds only user-named lines; rename and build-folder notes; `--allow` read like every other file with BOM removed; `--similar` and `--git-ref` validated; submodules and symbolic links are skipped and listed; the skipped list is no longer cleared when --allow is given.
- Known from my own checks, you need not repeat them, but tell me where the text or script still allows a loss: (a) Web search for the name on 2026-11-24 found no skill called nothing-lost; nearest in idea are preservation-verifier (tessl.io, checks protected content classes after a rewrite), safe-edit (backups, diffs) and safe-refactor (tests before and after); none seen with a line-by-line script over an old-versus-new pool. (b) Script runs of my own: identical, removed, changed-number, reworded, white-space-only, moved-to-another-file and allowed lines were classified as intended; 20000 lines with 2000 reworded took 0.28 s. Not tested: Windows paths with spaces, non-UTF-8 files, very long lines, submodules, the skill's description for triggering. A line of only punctuation cannot be matched by similarity and is LOST unless identical or allowed.

Sources
- Agent Skills specification: https://agentskills.io/specification
- Anthropic, Skill authoring best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Anthropic's public skills: https://github.com/anthropics/skills (folder skills/)
- Matt Pocock's skills: https://github.com/mattpocock/skills (every folder under skills/, including deprecated, in-progress and misc)
- OpenAI's Codex skills catalog: https://github.com/openai/skills (marked deprecated, still readable)
- Tool docs: Claude Code https://code.claude.com/docs/en/skills, Codex https://learn.chatgpt.com/docs/build-skills, Cursor https://cursor.com/docs/skills
- Possible overlaps to read: https://tessl.io/registry/skills/github/conorbronsdon/avoid-ai-writing/preservation-verifier, https://skillstore.io/skills/doyajin174-safe-edit, https://www.skills.sh/daymade/claude-code-skills/git-safety-net, https://skills.sh/phar-dev/phardev.dot/safe-refactor

Do all five parts:
1. Origin and overlap. Name every skill in those repositories and on the sites listed under "Possible overlaps" that does the same job or a large part of it. Quote overlapping sentences side by side. Flag any sentence of mine that looks copied or closely paraphrased. Say what mine does that those do not, or say plainly that it adds nothing.
2. Professional standard. Check against the specification and the best-practices page: frontmatter fields and limits (including the `compatibility` field); whether the description says what the skill does and when to use it, so an agent picks it at the right moment and not otherwise ("more than about 5 files or 100 lines": is that threshold usable?); whether each step says what to do rather than what to avoid; length and what should move into a separate file; sentences that change nothing because a current model does that anyway; vague words an agent cannot act on; how the bundled script is referenced (path, `python -I`, Windows versus Unix).
3. Agent behaviour. Walk through the skill as the agent running it, step by step: where would it misread, skip a step, loop, stop too early, commit something it should not, add a line to the allow file to make the run pass, pick the wrong `--old`/`--new` paths, or ask the user something it could find out itself? Which common case is missing (rename of a file, reflowed paragraphs, JSON, a rewrite across several commits, an uncommitted repository)?
4. Safety and tool claims, and the script. Anything it does without asking that changes things outside the current project (the snapshot commit, `git init`, copying files out of the project), overwrites or deletes data. Read the script: any case where a real loss is reported as OK or CHANGED, a crash on odd input, a path or git-ref handling problem (injection through file names or `--git-ref`, paths outside the repository), a wrong exit code. For every claim about how a tool behaves: confirmed by that tool's own docs (cite) or unverified.
5. Worth. Would an experienced user of these tools install it, or is it redundant with a built-in feature (`git diff`, `git diff --word-diff`, `git log -p`, editor diff) or an existing skill? One honest paragraph.

Answer format: one table with the columns ID (P1, P2, ...), Part (1-5), Exact sentence (quoted, or "missing"), Problem, Proposed rewrite (full text, ready to paste), Source (URL plus file or section, or "none"), Confidence (high, medium, low). Then the paragraph for part 5. No praise, no summary, no rewrite of the whole skill.

--- SKILL.md (paste starts here; the file is inside the code block below, its first line is the frontmatter) ---

````markdown
---
name: nothing-lost
description: Guards a large rewrite of text or data files against silent loss: commits the old state, moves text verbatim, then runs a bundled script that checks line by line that no old line was lost. Lists every old line found in none of the new files and marks lines that changed on purpose instead of failing on them. Use when restructuring, shortening, splitting, merging or reformatting documents, rule files, content or data across many files (rough guide: 5 or more files or 100 or more lines), or when the user asks that nothing gets lost. Not for smaller edits.
compatibility: Needs git and Python 3. The script uses only the standard library.
---

# Nothing lost

Goal: a big rewrite of content or data loses nothing by accident. Git is the backup. The script is the proof that every old line either still exists, changed on purpose, or was meant to go.

## Steps

1. **Make the old state recoverable.** Run `git status --short --ignored` for the files you will touch. If they have uncommitted changes, tell the user in one line and check `git diff --cached --name-only` so no unrelated staged file goes along, then commit only those files on the current branch with `git commit --only -m "snapshot before rewrite" -- <files>` (new files need `git add` first), so that `HEAD` holds the old content; if the project forbids commits on that branch, ask first. Git is the backup where the files are tracked. Files that are untracked or ignored are not in `HEAD`: copy them to a folder outside the project and use that folder as `--old` (without `--git-ref`). If the folder is not a git repository or has no commit yet, ask the user whether to copy the files to a folder outside the project (default) or to run `git init`; never run `git init` inside another repository or in a home folder or drive root.
2. **Say what is going to change and what is meant to go.** List the files, the new structure and any content you plan to drop. Dropping text is a decision for the user: ask them to confirm every drop. The allow file (below) holds only lines the user named as meant to go, one per line, in a temporary file outside the project; delete it after the run.
3. **Move text verbatim.** Move whole blocks with file tools or a short script instead of regenerating them from memory. Retyping is where words and numbers get lost or changed. Reword only where the rewrite requires it, and only after the block has moved.
4. **Run the loss check** after the rewrite, before you commit, from the repository root, with the full path of this skill's folder (use whichever of `python`, `python3`, `py -3` exists):
   `python -I "<this skill's folder>/scripts/loss_check.py" --old <files or folders> --git-ref HEAD --new <files or folders> [--allow <allow file>]`
   - `--old` names the files as they were, and `--git-ref HEAD` reads them from the last commit. Without `--git-ref` it reads them from disk, for example from a copy.
   - `--new` names every place the content may now live: the rewritten files and any detail documents or new files (list them with `git status --short`; a file the check did not read cannot save a line). They count as one pool, so moving a line to another file is fine. For an in-place rewrite `--old` and `--new` name the same paths. For a renamed file, the old path goes in `--old` and the new one in `--new`. Do not pass a folder that holds build output or a virtual environment as `--new`: stray copies there would count as found.
   - `--allow` is the list from step 2.
   - Case is compared as written. Add `--ignore-case` if case changes are expected. White space is always ignored.
5. **Read the result.** Three kinds of line are listed:
   - `LOST`: an old line that appears nowhere and has no similar new line. The run fails (exit 1). For each one, restore it. Add it to the allow file only after the user named that text, or its whole class, as meant to go (in this request or in chat); never add a line yourself to make the run pass. Then run again. If the same line is lost after two fixes, first check that every place the content may now live is in `--new`, then ask the user whether it should go.
   - `CHANGED`: no identical new line, but a similar one (the script shows the nearest). Does not fail the run. Read every pair; the script also prints the differing words, because it cuts long lines. A deliberate reformat is fine, a changed number, name or rule is not. If there are more than 50, filter the output to the lines with digits and the lines under 60 characters, read those first, and say how many you did not read.
   - `ALLOWED`: listed in the allow file.
   Repeat until the result says `OK`. Any file the script lists as `skipped` was not checked: check it another way or say so.
6. **Commit only after OK**, with the check chained before the commit so a failure never reaches it: `python ... && git add <every new and changed file, by name> && git commit -m ...`, never `git add -A`. Say in the report how many lines were `CHANGED` and `ALLOWED`, and what you looked at.

## What the check does not cover

It works on lines, as a set: a line that occurred three times and now occurs once is not reported, and a changed line that looks similar to another new line is reported as `CHANGED`, not as an error. It does not check order, structure, meaning or links between files. It cannot tell a reworded rule from a rule that changed meaning: that is why `CHANGED` lines are read by a person. Binary files, symbolic links and submodules are skipped and listed; files that are not UTF-8 are read with replacement characters, so a changed non-UTF-8 byte may go unnoticed. If the rewrite reflows paragraphs or reformats JSON or tables, every old line shows as `LOST` or `CHANGED`: put one sentence or token per line in old and new first, or tell the user the line check does not apply. In the report state only the limits that matter here.

## Exit codes

0: no lost line. 1: at least one lost line. 2: wrong call or unreadable input; the script prints the reason.
````

--- scripts/loss_check.py (the second file of the skill, inside the code block below) ---

````python
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
````
