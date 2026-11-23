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
Name chosen by Jakob (2026-11-23); earlier working name `backup-before-rewrite`. Name not checked against the web.

## Open questions
- Decided (Jakob 2026-11-23): keep 0.8 as the default similarity limit. It is still an untuned starting value, adjustable with `--similar`.
- Should CHANGED lines fail the run with a flag (strict mode) for data files where any change is an error? Not built.
