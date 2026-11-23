---
name: tidy
description: Archive every finished or abandoned session in the Claude desktop app's session list so the sidebar stays short. Use only when the user asks to tidy up, clean up or archive their finished sessions. Not for deleting sessions and not for the session you are running in.
compatibility: Claude desktop app (Code tab) only. Needs its session tools list_sessions, list_events and archive_session.
---

# Tidy

Goal: archive every session whose work is **settled**, and keep the rest. The user's request to tidy is their standing yes for that. Archiving is reversible (the Archived list, `unarchive_session`), so decide per session yourself and do not ask first. If the user named a scope (a project, a title, "older than a day"), tidy only that scope. If they only ask what would be archived, stop after step 3 and list the sessions.

A session is **settled** when nothing will happen in it any more and no question to the user is open. That means one of these:
- It ended with a clear done or final report.
- It handed off to a successor session that is in the list and has taken over the remaining work (it names this session or its task).
- What it waited for has landed.
- A newer session says explicitly that it finished or replaced this session's work (obsolete).

A session is **live** when any of these holds:
- Its status field shows it running, or it waits for an answer.
- It is the parent of a live session.
- It waits for a result that has not landed yet.
- It ended with an open question to the user.

When the ending is unclear, for example an aborted session, keep it and name it under **Needs your attention**.

## Steps

0. **Check the environment.** If `list_sessions`, `list_events` and `archive_session` are not available, say that this skill needs the Claude desktop app's Code tab, and stop. Done when the tools exist or you have stopped.
1. **Inventory.** Call `list_sessions` with `limit: 100` and exclude archived sessions. If the result is full, page onward until no unarchived session is left; say in the report that older sessions were not covered only when the tool stops you from paging. Drop the current session: take its ID from your context, or from `get_session` if it exists, and drop sessions you started yourself too. Done when every remaining row is on your list.
2. **Read each ending.** Call `list_events` with `limit: 8` per session, in parallel batches. If no assistant message appears, double the limit up to 40. If there is still none, keep the session and name it in the report. Done when you have each session's last assistant message.
3. **Verify the claims.** A message saying "integration running", "waiting for X" or "merged" is a claim. Check it in the successor session. When the session's folder still exists and is a git repo, check it in git too, always with `git -C <folder>`. Find the default branch with `git symbolic-ref --short refs/remotes/origin/HEAD`, falling back to `main`, then `master`. A merge counts as landed when `git merge-base --is-ancestor <commit> <default-branch>` succeeds, or when `git cherry <default-branch> <branch>` shows no line starting with `+` (this also covers squash merges). A claimed merge that has not landed makes the session and its parent session **live**. If the folder is gone, write "git not checked". Done when every waiting session is marked settled or live, each with the observation it rests on (successor title, git result, open question or waiting condition).
4. **Archive the settled ones.** First check that archiving a parent will not take a live child with it. Then call `archive_session` for all settled sessions in one parallel batch with a short `reason`. Archiving a parent also archives its finished side sessions, and "already archived" is success. If a call fails for another reason, retry it once, then list the session with the error text. Done when every settled session is archived or listed with its refusal.
5. **Report**, short, in the conversation's language. Take every number from the tool results. If nothing was archived, say so in one line.
   - how many were archived, as one line of titles
   - each kept session with its one-line reason (live, or refused because it is open on screen: the user archives it from the sidebar)
   - **Needs your attention:** every open point left by a settled or kept session (an unanswered question, a command only the user can run, a claim that turned out false), one line each with the session title and the exact question

Never archive the session you are running in, and never delete a session (`delete_session`).
