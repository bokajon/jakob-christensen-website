---
name: freeup
description: Frees disk space on the Windows system drive C:. Use with /freeup or when the user asks for space on C ("C is full", "free up disk space"). Measures junk caches, shows a size table, deletes the shown rows after one yes. Windows only.
---

# freeup

Frees disk space from safe junk on Windows. `scripts/freeup.ps1` (Windows PowerShell 5.1) measures and deletes. Built-in rows are on drive C: only; places the user accepts from the candidate list may sit on any drive. On macOS or Linux tell the user the skill does not support them.

## Steps

1. Run the dry run (changes nothing) in the background and keep its full output:
   `powershell -NoProfile -ExecutionPolicy Bypass -File "<skill folder>\scripts\freeup.ps1"`
   The table part takes seconds. On the first start, and with `-Discover`, the script also searches all fixed drives for cache-like folders (about 2 minutes, then it stops and says INCOMPLETE). Add `-Full` only when the user asks about worktrees, logs or AppData\Local.
2. Show the user the table (item, size, deletable size, action), the SHOW ONLY lines and the free space on C:, in the user's language, each with the number the script printed. Name every `SHOW ONLY (not on C:)` row as untouched and say why. Add this safety block:
   - Deleted: only caches and temp files that programs rebuild on their own. No documents, projects, downloads or settings.
   - Worst case: the next start of a game or app is slower once; a crash dump is gone.
   - Brakes: nothing younger than 1 hour (Temp\claude and accepted places 1 day), files in use stay, built-in rows only on C:.
   - Not covered: the script is not checked against every program's cache layout. Write "caches, rebuilt on demand", never "100% safe".
3. Candidates (the CANDIDATES list, only when the script printed one): the list matches folder names only, the content is unchecked. Say that, and mark each candidate that may hold work data (a Perforce workspace `temp`, a backup copy, a game mod `cache`, any path with `bak` or `old`). Ask which to accept and which to ignore, then record the answers:
   `... freeup.ps1 -Accept "<path>" ... -Ignore "<path>" ...`
   This only writes `places.json`. Accepted places join the table at the next run. Done when the user answered for every listed path or said to skip the list.
4. Ask one yes/no question: delete all rows marked DELETE. Wait for the answer.
5. After a yes, run the command again with `-Delete`. Report the freed size per row and C: free before and after, from the script output.
6. Report what stayed: locked or denied files (counted per row), and SHOW ONLY items as numbers, never as advice to delete.

## Rules

- Delete only rows the table showed, and only after the yes of step 4. A refused or ambiguous answer ends the run with nothing deleted. A yes to the candidate question (step 3) is not a yes to deleting.
- The script enforces its own limits (age, reparse points skipped, `-Accept` refuses drive roots and folders with `.git`). Never lower them.
- A locked or denied file stays. When the script reports one, name it and move on; never kill a process, take ownership, retry in another form or run as admin to get past it.
- Downloads, worktrees, logs and the AppData\Local list are SHOW ONLY: size and path, never deleted, even when the user asks in the same turn; tell them to do it themselves.
- Run it by hand only. No scheduled task.
- A number counts only when the script printed it. Without a fresh run, say "not measured".
