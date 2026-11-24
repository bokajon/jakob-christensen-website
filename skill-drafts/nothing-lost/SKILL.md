---
name: nothing-lost
license: MIT
description: Guards a large rewrite of text or data files against silent loss: commits the old state, moves text verbatim, then runs a bundled script that checks line by line that no old line was lost. Lists every old line found in none of the new files and marks lines that changed on purpose instead of failing on them. Use when restructuring, shortening, splitting, merging or reformatting documents, rule files, content or data across many files (rough guide: 5 or more files, or a rewrite touching 100 or more lines), or when the user asks that nothing gets lost. Not for smaller edits.
compatibility: Needs git and Python 3. The script uses only the standard library.
---

# Nothing lost

Goal: a big rewrite of content or data loses nothing by accident. Git is the backup. The script is the proof that every old line either still exists, changed on purpose, or was meant to go.

## Steps

1. **Make the old state recoverable.** Run `git status --short --ignored` for the files you will touch. If they have uncommitted changes, tell the user in one line and check `git diff --cached --name-only` so no unrelated staged file goes along, then commit only those files on the current branch with `git commit --only -m "snapshot before rewrite" -- <files>`, so that `HEAD` holds the old content; if the project or environment forbids commits on that branch, ask first. Note the snapshot hash (`git rev-parse HEAD`): it is the `--git-ref` in step 4, also if later commits follow. Git is the backup where the files are tracked. Files that are untracked or ignored are not in `HEAD`: copy only the ones the rewrite will change (no caches, datasets or build folders) to a folder outside the project and use that folder as `--old` (without `--git-ref`). If the folder is not a git repository or has no commit yet, ask the user whether to copy the files to a folder outside the project (default) or to run `git init`; never run `git init` inside another repository or in a home folder or drive root.
2. **Say what is going to change and what is meant to go.** List the files, the new structure and any content you plan to drop. Dropping text is a decision for the user: ask them to confirm every drop. The allow file (below) holds only lines the user named as meant to go, one per line, in a temporary file outside the project; delete it after the final `OK` run, or when the rewrite is aborted.
3. **Move text verbatim.** Move whole blocks with file tools or a short script instead of regenerating them from memory. Retyping is where words and numbers get lost or changed. Reword only where the rewrite requires it, and only after the block has moved.
4. **Run the loss check** after the rewrite, before you commit, from the repository root, with the full path of this skill's folder (try `python3`, then `py -3`, then `python`; on Windows a bare `python` may be only the Store stub):
   `python -I "<this skill's folder>/scripts/loss_check.py" --old <files or folders> --git-ref <snapshot hash> --new <files or folders> [--allow <allow file>]`
   - `--old` names the files as they were, and `--git-ref <snapshot hash>` reads them from the snapshot commit (`HEAD` if no commit followed). Without `--git-ref` it reads them from disk, for example from a copy; if `--old` and `--new` then name the same files, the script refuses (exit 2).
   - `--new` names every place the content may now live: the rewritten files and any detail documents or new files (list them with `git status --short`, but pass only paths that exist: no deleted files, no `->` of a rename; a file the check did not read cannot save a line). They count as one pool, so moving a line to another file is fine. For an in-place rewrite `--old` and `--new` name the same paths, with `--git-ref`. For a renamed file, the old path goes in `--old` and the new one in `--new`. Do not pass a folder that holds build output or a virtual environment as `--new`: stray copies there would count as found.
   - `--allow` is the list from step 2.
   - Case is compared as written. Add `--ignore-case` if case changes are expected. White space is always ignored.
5. **Read the result.** Three kinds of line are listed:
   - `LOST`: an old line that appears nowhere and has no similar new line. The run fails (exit 1). For each one, restore it. Add it to the allow file only after the user named that text, or its whole class, as meant to go (in this request or in chat); never add a line yourself to make the run pass. Then run again. If the same line is lost after two fixes, first check that every place the content may now live is in `--new`, then ask the user whether it should go.
   - `CHANGED`: no identical new line, but a similar one (the script shows the nearest). Does not fail the run. Read every pair; the script also prints the differing words, because it cuts long lines. A deliberate reformat is fine, a changed number, name or rule is not. If there are more than 50, filter the output to the lines with digits or with negation and rule words (not, never, no, only, must) and the lines under 60 characters, read those first, and say how many you did not read.
   - `ALLOWED`: listed in the allow file.
   Repeat until the result says `OK`. Any file the script lists as `skipped` was not checked: name every skipped file in the report and say the script did not verify it.
6. **Commit only after OK**, with the check chained before the commit so a failure never reaches it: `python ... && git add <every new and changed file, by name> && git commit -m ...`, never `git add -A`. In Windows PowerShell 5.1 `&&` does not exist: run the steps one by one and continue only if `$LASTEXITCODE` is 0. Say in the report how many lines were `CHANGED` and `ALLOWED`, and what you looked at.

## What the check does not cover

It works on lines, as a set: a line that occurred three times and now occurs once is not reported, and a changed line that looks similar to another new line is reported as `CHANGED`, not as an error. It does not check order, structure, meaning or links between files. It cannot tell a reworded rule from a rule that changed meaning: that is why `CHANGED` lines are read by a person. A line of only punctuation or symbols cannot be matched by similarity: it must exist identically or be allowed. Binary files, UTF-32 files, symbolic links and submodules are skipped and listed; files that are not UTF-8 are read with replacement characters, so a changed non-UTF-8 byte may go unnoticed. If the rewrite reflows paragraphs or reformats JSON or tables, every old line shows as `LOST` or `CHANGED`: put one sentence or token per line in old and new first, or tell the user the line check does not apply. In the report state only the limits that matter here.

## Exit codes

0: no lost line. 1: at least one lost line. 2: wrong call or unreadable input; the script prints the reason.
