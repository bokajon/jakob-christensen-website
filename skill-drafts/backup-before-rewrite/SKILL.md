---
name: backup-before-rewrite
description: Before a large rewrite of text or data files, commit the current state, move text verbatim instead of retyping it, then run a bundled script that checks line by line that no old line was lost. Lists every old line found in none of the new files, and marks lines that changed on purpose instead of failing on them. Use when you restructure, shorten, split, merge or reformat documents, rule files, content or data, or when the user asks that nothing gets lost. Not for small edits.
compatibility: Needs git and Python 3. The script uses only the standard library.
---

# Backup before rewrite

Goal: a big rewrite of content or data loses nothing by accident. Git is the backup. The script is the proof that every old line either still exists, changed on purpose, or was meant to go.

## Steps

1. **Make the old state recoverable.** Run `git status`. If the files you will touch have uncommitted changes, commit them (only those files) before you start, so that `HEAD` holds the old content. Do not copy files into a backup folder. If the folder is not a git repository, ask the user whether to run `git init` there or to copy the files to a folder outside the project.
2. **Say what is going to change and what is meant to go.** List the files, the new structure and any content you plan to drop. Dropping text is a decision: keep a list of the lines meant to go, one per line, in a temporary file outside the project (the allow file below).
3. **Move text verbatim.** Cut and paste or move whole blocks instead of retyping them. Retyping is where words and numbers get lost or changed. Reword only where the rewrite requires it, and only after the block has moved.
4. **Run the loss check** after the rewrite, before you commit:
   `python -I scripts/loss_check.py --old <files or folders> --git-ref HEAD --new <files or folders> [--allow <allow file>]`
   - `--old` names the files as they were, and `--git-ref HEAD` reads them from the last commit. Without `--git-ref` it reads them from disk, for example from a copy.
   - `--new` names every place the content may now live: the rewritten files and any detail documents or new files. They count as one pool, so moving a line to another file is fine.
   - `--allow` is the list from step 2.
   - Case is compared as written. Add `--ignore-case` if case changes are expected. White space is always ignored.
5. **Read the result.** Three kinds of line are listed:
   - `LOST`: an old line that appears nowhere and has no similar new line. The run fails (exit 1). For each one, restore it or add it to the allow file if the user wanted it gone, and run again.
   - `CHANGED`: no identical new line, but a similar one (the script shows the nearest). Does not fail the run. Look at each one: a deliberate reformat is fine, a changed number, name or rule is not.
   - `ALLOWED`: listed in the allow file.
   Repeat until the result says `OK`.
6. **Commit only after OK**, with the check chained before the commit so a failure never reaches it. Say in the report how many lines were `CHANGED` and `ALLOWED`, and what you looked at.

## What the check does not cover

It works on lines, as a set: a line that occurred three times and now occurs once is not reported, and a changed line that looks similar to another new line is reported as `CHANGED`, not as an error. It does not check order, structure, meaning or links between files. It cannot tell a reworded rule from a rule that changed meaning: that is why `CHANGED` lines are read by a person. Binary files are skipped. Say these limits in the report.

## Exit codes

0: no lost line. 1: at least one lost line. 2: wrong call or unreadable input; the script prints the reason.
