---
name: attic
license: MIT
description: Archive every session in the Claude desktop app whose title starts with the check mark ✓, and keep their sub-sessions unless those carry a check mark too. Use with /attic, or when the user explicitly asks to archive all ticked or check-marked sessions. Not for judging whether a session is really finished and never for deleting.
compatibility: Claude desktop app (Code tab) only. Needs the session tools list_sessions, archive_session and set_pinned.
metadata:
  author: "Jakob Christensen"
  source: "https://jakobchristensen.com"
---

# Attic: archive ticked sessions

The check mark in the title is the user's decision. Do not re-judge the session, ask nothing, just archive.

1. Call `list_sessions` with `limit` 500 (it has no paging). Ticked = the first character of `title` is `✓`; a check mark later in the title does not count. Descendants of a session = every row whose `startedBy` is its `sessionId`, and in turn their descendants, at any depth.
2. Candidates = ticked sessions that are not `isRunning`. A pinned one stays a candidate: a check mark outweighs the pin.
3. Skip a candidate that has any descendant that is not ticked or is running: archiving a parent also archives its finished sub-sessions, and the app refuses it while one is working. Keep it and name that descendant in the report.
4. Archive every other candidate, deepest descendants first, one `archive_session` call each with reason "ticked". If the candidate is `pinned`, call `set_pinned` with pinned false on it first (the app refuses to archive a pinned session) and note it in the report. A ticked sub-session under a skipped parent is archived on its own. If a sub-session is refused (for example "still has live work", which `isRunning` does not always show), do not archive its ancestors either: list them as kept because of that sub-session. If a call comes back with a hook-rewritten input (it adds a `session` field), send it again once with exactly that input. On any other error do not retry: list the session with the error text.
5. Report in one short block: how many were archived (titles on one line), then which ones were unpinned first, then each kept ticked session with its reason (running, or the unticked or running descendant). If the call returned exactly 500 rows, add "older sessions were not checked". If nothing matched, say only "no ticked sessions".

Count only sessions whose `archive_session` call succeeded. The current session is not in the list: never archive it, and never call `delete_session`.
