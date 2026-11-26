---
name: sealed
license: MIT
description: Seals a finished chat session so it is easy to spot in the session list - puts a check mark at the very start of the session title, marks the session completed, and ends the last message with a short bullet report and the word "Done." as its own paragraph. Use when the user asks to mark a session as finished, done, sealed or ticked off, or says wrap up, finish or sign off for the session, or when another skill says to seal the session; the skill still checks every condition below itself before it seals. Not for a session that still has open work, pending operations, unresolved failures or open questions, not for archiving or deleting sessions, and not for deciding whether the work is finished (that is a separate check).
compatibility: Renaming and completion marking need the Claude desktop app session tools set_session_title and mark_completed (plus get_session for the current title, and list_events to read another session). On agents without these tools the skill only writes the closing report, says in one line that the title and the completion state were not changed (naming which of the two were unavailable), and cannot seal other sessions.
---

# Sealed

Goal: a finished session says so where the user looks first, the title in the session list. The check mark goes at the start, because titles get cut off at the end in a narrow sidebar.

## When to seal

Seal only when all of this holds. Read each point from the current state, never assume it. A point that cannot be verified counts as failing.

- Every deliverable the user asked for was completed and shown, or explicitly declined or deferred by the user. Nothing was silently skipped.
- Nothing is waiting for the user: no open question, no approval, no failed check, no tool failure or skipped mandatory step.
- No background task, build or test run is still running, and the checks reflect the latest edits.
- In a git repository with file changes: `git status` is clean (no uncommitted edits or unintended untracked files) and any requested push, merge or deploy has completed. Skip this point if the session changed no files.

If one point fails, do not seal. Say which point and keep the title as it is. A check mark already on a title is not evidence that the work is finished: always check again.

## Steps

1. **Title.** Read the current title (`get_session` with `session_id: "self"`). If it cannot be read, do not invent one: skip this step and say so in the notice line. Otherwise call `set_session_title` with `✓` (U+2713), one space and the old title, nothing else changed. If the title already starts with `✓` (with or without a space), skip only this rename and continue with step 2. If the title ends in a handoff marker such as `(handoff open)`, keep that suffix as it is: another skill owns it, and a written handoff does not block sealing. If the app asks the user to approve the new title, wait for the answer; if it is denied or does not come, leave the title unchanged and note it.
2. **Complete.** If `mark_completed` exists, call it for this session without narrating the call. Never archive the session.
3. **Report.** End the final message with a very short bullet report, one line per point (what was done, what was checked, what the user explicitly deferred), then `Done.` as its own last paragraph. If a tool in step 1 or 2 is missing, unreadable or denied, put one line before the report that names exactly what was not changed. Write the notice, the report and the word in the user's language (German: `Fertig.`). The report and the word come only when everything is finished, never while a question is open, and only after a pending title approval has been answered.

## Sealing another session

Read its last messages first (`list_events`). If you cannot inspect that session, do not seal it. Check the conditions above against what you read, then run steps 1 and 2 with its session id instead of `"self"`. Tell the user the result in one line. Do not write `Done.` or the bullet report for the current session unless the current session is also finished.

## If work continues after sealing

If the user keeps working in a sealed session, leave the `✓` alone unless asked, and write no new `Done.` until the new work is finished too.

## Works with

Other skills may call this one: a handoff skill sealing the session it hands over from, a "can I close this chat" check on a green result, an away-mode report at its end, a session-tidying skill reading the check mark as one more sign of "finished". Each of them keeps working without this skill and sets the same `✓ ` prefix itself when it is missing.
