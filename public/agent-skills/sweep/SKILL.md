---
name: sweep
license: MIT
description: Frees disk space on Windows drives (C: and others). Use with /sweep or when the user asks for space ("C is full", "free up disk space", "find duplicate files", "what is eating my drive"). Cleans rebuildable caches after one yes, and finds duplicates, archives next to their extracted folder and big files in folders the user names, removed only by number after a second yes.
metadata:
  author: "Jakob Christensen"
  copyright: "(c) 2026 Jakob Christensen"
  source: "https://jakobchristensen.com"
---

# sweep

Frees disk space on Windows. `scripts/sweep.ps1` (Windows PowerShell 5.1) measures and deletes. On macOS or Linux tell the user the skill does not support them.

Two kinds of work, two kinds of yes:

- **Junk** (caches, temp files that programs rebuild): the table run. Built-in rows are on the Windows drive (usually C:); a few rebuildable leftovers in `<drive>\Temp` of other drives are included. One yes deletes the rows marked DELETE.
- **User files** (duplicates, archives next to an extracted folder, big files): only in folders the user named with `-Root`. The script writes a numbered list, the user picks numbers, and only those are removed.

## Steps: junk

1. Run the dry run (changes nothing) in the background and keep its full output:
   `powershell -NoProfile -ExecutionPolicy Bypass -File "<skill folder>\scripts\sweep.ps1"`
   The table part takes seconds. Until `places.json` exists, and with `-Discover`, the script also searches all fixed drives for cache-like folders (up to about 3 minutes, then it says INCOMPLETE). Add `-Full` only when the user asks about worktrees, logs or AppData\Local.
2. Show the user the table (item, size, deletable size, action), the SHOW ONLY lines and the free space of every drive, each with the number the script printed. Name every `SHOW ONLY (not on the Windows drive)` row as untouched and say why. Add this safety block:
   - Deleted: only caches and temp files that programs rebuild on their own. No documents, projects, downloads or settings.
   - Worst case: the next start of a game or app is slower once; a crash dump is gone.
   - Brakes: nothing younger than the row's minimum age (1 hour, some 1 day), files in use stay.
   - Not covered: the script is not checked against every program's cache layout. Write "caches, rebuilt on demand", never "100% safe".
3. Candidates (the CANDIDATES list, only when the script printed one): the list matches folder names only, the content is unchecked. Say that, and mark each candidate that may hold work data (a Perforce workspace `temp`, a backup copy, a game mod `cache`, any path with `bak` or `old`). Ask which to accept and which to ignore, then record the answers:
   `... sweep.ps1 -Accept "<path>"` or `... sweep.ps1 -Ignore "<path>"`
   One path per flag and one run per path: with `powershell -File` several paths after one flag arrive as one broken string. Check that the output says `ACCEPTED:` or `IGNORED:` and not `REFUSED`. This only writes `places.json`. A yes here is not a yes to deleting.
4. Ask one yes/no question: delete all rows marked DELETE. Wait for the answer.
5. After a yes, run the command again with `-Delete`. Report the freed size per row and the free space before and after, from the script output.
6. Report what stayed: locked or denied files (counted per row), and SHOW ONLY items as numbers.

## Steps: duplicates, archives, big files

1. Ask which folders to search, for example Downloads or a backup folder. Do not suggest installed program or game folders, a project the user works in, or a drive root unless they insist. Register each one in its own run:
   `... sweep.ps1 -Root "<folder>"`
   Check for `ROOT:` and not `REFUSED`. Nothing is scanned or deleted yet.
2. Run `... sweep.ps1 -Find` in the background (it prints progress; the default budget is 15 minutes, `-BudgetSec` changes it, `-MinMB` and `-LargeMB` set the size limits). It writes `candidates.json` with numbers, valid for 24 hours.
3. Show the three lists with their numbers and sizes:
   - DUPLICATE: same size and the same SHA-256 over the whole file. One copy is kept (not named like a copy, shorter path, older). A copy that cannot be read completely is listed under UNREADABLE and never offered; say it may be damaged.
   - ARCHIVE: a .zip/.7z/.rar next to a same-named folder. For zip the script checks that the files exist in the folder with the same size; 7z and rar are not compared and are marked.
   - LARGE: the biggest files, only a report.
   Entries marked "looks like part of an installed program" or "not in all" stay out of `all`. Say what is counted and that nothing was changed yet.
4. Ask which numbers to remove (a box or a list with the sizes). The user may name numbers, ranges, "all" (duplicates and verified archives only) or "all except 3,7". Removal is permanent, there is no recycle bin; say so in the question.
5. After the answer run `... sweep.ps1 -Remove "1,3,5-8"` (or `-Remove all -Except "3,7"`) first as a dry run, then once more with `-Delete`. The script re-checks each file right before removal (still there, same size and time, kept copy or extracted folder still there, inside a scan folder, not on the keep list) and skips what changed. Report removed, skipped and the free space before and after.
6. Protect things for good with `... sweep.ps1 -Keep "<file or folder>"`: it is never offered and never removed.

## Recycle bin

The table run shows each drive's recycle bin as SHOW ONLY. Emptying it is permanent, so ask a separate yes/no question with the size, then `... sweep.ps1 -EmptyBin <drive letter>` as a dry run and again with `-Delete`.

## Rules

- Delete only what the table or the numbered list showed, and only after the matching yes. A refused or ambiguous answer ends the run with nothing deleted. A yes to the candidate or the scan-folder question is not a yes to deleting.
- User files (duplicates, archives, big files) are removed only by number after the user's explicit answer in this conversation, never on your own initiative and never from an old `candidates.json`. Downloads, worktrees, logs and the AppData\Local list in the table run stay SHOW ONLY.
- The script enforces its own limits (age, reparse points skipped, project folders with `.git` skipped, `-Accept` refuses drive roots). Never lower them.
- A locked or denied file stays. Name it and move on; never kill a process, take ownership, retry in another form or run as admin to get past it.
- Run it by hand only. No scheduled task.
- A number counts only when the script printed it. Without a fresh run, say "not measured".
- `places.json` and `candidates.json` next to the script hold the user's own choices. Do not copy them anywhere else.
