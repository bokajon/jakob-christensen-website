---
name: tidy
description: Archive every finished or abandoned session in the Claude desktop app's session list so the sidebar stays short. Use only when the user asks to tidy up, clean up or archive their finished sessions. Not for deleting sessions and not for the session you are running in.
compatibility: Claude desktop app (Code tab) only. Needs its session tools list_sessions, list_events and archive_session.
---

# Tidy

Goal: archive every session whose work is **settled**, and keep the rest. The user's request to tidy is their standing yes for that. Archiving is reversible (the Archived list, `unarchive_session`), so decide per session yourself and ask nothing.

A session is **settled** when nothing will happen in it any more: it ended with a clear done or final report, or handed off to a successor, or what it waited for has landed, or a later session made it obsolete. A session is **live** when it is running, is the parent of a running session, or waits for a result that has not landed yet.

This skill works only in the Claude desktop app's Code tab.

## Steps

0. **Check the environment.** If the session tools `list_sessions`, `list_events` and `archive_session` are not available, say that this skill needs the Claude desktop app's Code tab, and stop. Done when the tools exist or you have stopped.
1. **Inventory.** `list_sessions` with `limit: 100`. Drop this session. Done when every remaining row is on your list.
2. **Read each ending.** `list_events` with `limit: 8` per session, in parallel batches (a limit of 2-3 often shows only the `[result]` line). Done when you have each session's last assistant message.
3. **Verify the claims.** A message saying "integration running", "waiting for X" or "merged" is a claim. Check it in the successor session and, when the session's folder is a git repo, in git. Find the default branch with `git symbolic-ref --short refs/remotes/origin/HEAD`, falling back to `main`, then `master`. Then run `git merge-base --is-ancestor <commit> <default-branch>` or `git log --oneline <default-branch>`. A claimed merge missing from the default branch makes the session and its coordinators **live**. Done when every waiting session is marked settled or live with evidence.
4. **Archive the settled ones.** Call `archive_session` for all of them in one parallel batch with a short `reason`. Archiving a parent also archives its finished side sessions, and "already archived" is success. Done when every settled session is archived or refused.
5. **Report**, short, in the conversation's language:
   - how many were archived, as one line of titles
   - each kept session with its one-line reason (live, or refused because it is open on screen or pinned: the user archives those from the sidebar)
   - **Needs your attention:** every open point a settled session left for the user (an unanswered question, a command only they can run, a claim that turned out false), one line each with the session title

Never archive the session you are running in, and never delete a session (`delete_session`).
