# nothing-lost - draft notes

## Sources read
- Private rule, section "Back up before a large rewrite pass" (short and long form). Material to generalize, not copied.
- `skill-drafts/IDEEN.md` idea 9, `REVIEW-AUSWERTUNG.md` (all four: change it. Drop the backup folder, git is enough, one says at most outside the project folder; keep the line-by-line script; one says a deliberately reformatted line may change), `NETZ-ABGLEICH.md` (similar: safe-edit with dated backups; used only to delimit).

## Generalized
- The dated backup folder is gone (git is the backup, as the reviewers asked). Without a git repo the skill asks whether to `git init` or to copy outside the project.
- Kept: move text verbatim, line-by-line loss check, "list every old line found in neither the new file nor its detail doc, confirm each was meant to go" (now: `--new` takes several files as one pool, `--allow` lists lines meant to go).
- New by the review: a line that changed on purpose does not fail the run (CHANGED, nearest new line shown); only a line with no similar new line is LOST.
- Added by me: the commit-before-rewrite step, the "what the check does not cover" section, the case and white space rule.

## The script `scripts/loss_check.py`
Standard library only. Every non-blank old line, trimmed and white space collapsed, is looked up in the pool of new lines. Missing lines are classified ALLOWED (in the allow file), CHANGED (a new line with similarity of at least 0.8 by `difflib`, candidates shortlisted by shared words) or LOST. Exit 0 / 1 / 2.

## Tested (really run, in `D:\Temp\claude\47a866133e9a320d\bbc083ac-1a72-4534-9f17-def1b6c890d1\scratchpad\loss`, a throwaway git repository)
- Old state from `--git-ref HEAD`, new state rewritten on disk. Cases in one run: an identical line (kept), a removed line (LOST, exit 1), a changed number `gamma: 10` to `gamma: 12` (CHANGED), a reworded sentence (CHANGED), a white-space-only change (not reported), a line moved to another folder (not reported, found in the pool), a line meant to go and listed in the allow file (ALLOWED, exit still 1 because of the real LOST line). Without the allow file the run still exits 1. An unchanged state exits 0 ("OK"). A missing path exits 2 with a message. A call without arguments exits 2 with usage. A fully replaced file reports all its lines as LOST.
- Without `--git-ref`: old file read from a copy on disk, `--ignore-case` run: works, case differences not reported.
- Size: 20000 lines, 2000 of them reworded: all 2000 reported as CHANGED, 0 LOST, 0.28 s. (A first version with `difflib.get_close_matches` over the whole pool needed 60 s for 500 lines and was replaced by the word shortlist.)
- Not tested: Windows paths with spaces, non-UTF-8 files (decoded with replacement), very long lines, repositories with submodules. Not run by an agent following the SKILL.md. The skill's description was not tested for triggering.
- Known limitation: a word-free line (for example only punctuation) cannot be matched by similarity and is LOST unless identical or allowed. Line order and counts are not checked (set semantics, stated in the skill).
- Windows line endings and Git's CRLF warnings do not matter (lines are compared trimmed).

## Name
Name chosen by Jakob (2026-11-23); earlier working name `backup-before-rewrite`. Web check 2026-11-24: no skill or command called `nothing-lost` found, see `skill-drafts/nothing-lost.netz.md` (6 searches, 2 pages read partly, 1 unreadable). Review prompt for Gemini, ChatGPT and Copilot: `skill-drafts/nothing-lost.review-prompt.md` (not yet pasted into any of them).

## Test run 2026-11-24 (checklist section 7)
Throwaway repos in the session scratchpad, script `scripts/loss_check.py` at the state of this draft.
- Script on a real git before/after pair (2 files, 11 non-blank old lines; rewrite: a heading changed, one line moved to `docs/detail/ops.md`, `3 attempts` to `5 attempts`, one line deleted, one line meant to go, one line duplicated): result LOST 1 (`Backups live in D:/backups.`), CHANGED 1 (`3` to `5`, nearest line and differing words shown), ALLOWED 1, exit 1. Same run without the allow file: exit 1. With `--new` leaving out the detail folder: LOST 3, so the moved lines are found only through the pool (as the skill says). After restoring the lost line and the number: `OK`, exit 0 (LOST 0, CHANGED 0, ALLOWED 1).
- Agent run (Claude Code headless, Sonnet, `--max-turns 25`, skill in `.claude/skills/nothing-lost/`, 2 runs, `/nothing-lost` prompt): split a 16-line handbook into 4 files and delete the old one; the user said only the fax line may go. Both runs wrote an allow file outside the project, ran the script with `python -I`, read the pairs (8 CHANGED: heading level, reworded lines), and 2 of 2 stopped with `# Handbook` as the one LOST line and asked whether it may go, instead of adding it to the allow file themselves. Committed: 0 of 2 (HEAD still the base commit, files left uncommitted). My own run of the script on both final states gave the same 1 LOST, 8 CHANGED, 1 ALLOWED.
- Observations: (1) the repository was clean, so step 1 needed no snapshot commit; the snapshot step was not exercised. (2) In both runs the check was reached through a `PY=$(command -v python ...) | ...` pipe construct, which only worked because the output was still shown; not a skill problem, not investigated. (3) Whether the skill loaded by itself is not checked (a `/name` start leaves no trace, checklist 7.5). (4) Not tested: natural prompt without `/nothing-lost`, a run without the skill (baseline), Codex, untracked or ignored files, a repository without git, more than 50 CHANGED lines.
- Raw data (not durable): `D:/Temp/claude/9dc38ff85235d23c/c563d232-db6c-41d5-aea3-16480c5d4417/scratchpad/nl1` and `.../nlh/run1`, `run2` (`out.jsonl`).

## Open questions
- Decided (Jakob 2026-11-23): keep 0.8 as the default similarity limit. It is still an untuned starting value, adjustable with `--similar`.
- Should CHANGED lines fail the run with a flag (strict mode) for data files where any change is an error? Not built.

## Review round 1 (2026-11-24, Copilot and Gemini; ChatGPT out of usage)
Triage in `skill-drafts/nothing-lost.review-triage.md`; Jakob approved the proposed batch. Applied to SKILL.md (6,006 characters, description 558): description front-loaded with the threshold as a rough guide; step 1 `git diff --cached --name-only` plus `git commit --only`, no-commit repository counts as no git; step 2 allow file holds only user-confirmed lines and is deleted after the run; step 3 "move with file tools or a script"; step 4 rename and build-folder notes; step 5 first check `--new` after two losses, filter more than 50 CHANGED lines, skipped files; non-UTF-8 limit. Script: UTF-8 byte order mark dropped, `--allow` read like every other file (a Latin-1 file no longer crashes), `--similar` outside 0 to 1 gives exit 2, a `--git-ref` starting with `-` gives exit 2, `SKIPPED` cleared per run.
Rechecked after the change (same throwaway repo): BOM allow file `OK` exit 0, Latin-1 allow file no traceback, `--similar 5` exit 2 with message, `--git-ref=--help` exit 2 with message, normal allow run `OK` exit 0. Not rerun: the two agent runs (text changed, so the agent behaviour is not re-measured), submodules and symlinks (Gemini P10, not reproduced), the Codex claim that `compatibility` is rejected (Gemini P2, not checked against the Codex docs; the field stays for now, as in reroll).
Review prompt regenerated with the new text and an "Already answered" list for round 2 (not yet pasted).
