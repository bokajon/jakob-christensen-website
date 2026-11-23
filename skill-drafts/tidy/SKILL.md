---
name: tidy
description: Archive every finished or superseded session in the Claude desktop app's session list so the sidebar stays short. Use only when the user asks to tidy up, clean up or archive their finished sessions, or asks which sessions would be archived. Not for deleting sessions and not for the running session.
compatibility: Claude desktop app (Code tab) only. Needs its session tools list_sessions, list_events and archive_session (get_session is optional) and git.
---

# Tidy

Goal: archive every session whose work is **settled**, and keep the rest. The user's request to tidy is their standing yes for that. Archiving is reversible (the Archived list, `unarchive_session`), so decide per session yourself and do not ask first. If the user named a scope (a project, a title, "older than a day"), tidy only that scope. If they only ask what would be archived, stop after step 3 and list the sessions.

A session is **settled** when nothing will happen in it any more and no question to the user is open. That means one of these:
- It ended with a final report that names no open question and no remaining step.
- It handed off to a successor session that is in the list and has taken over the remaining work (it names this session or its task).
- What it waited for has landed.
- A newer session says explicitly that it finished or replaced this session's work (obsolete).

A session is **live** when any of these holds:
- Its `isRunning` field is true, or it waits for an answer.
- It is the parent of a live session (the parent is the session named in the child's `startedBy` field).
- It waits for a result that has not landed yet.
- It ended with an open question to the user.

A session that matches a live condition is live even when it also matches a settled one. When the ending is unclear, for example an aborted session, keep it and name it under **Needs your attention**.

## Steps

0. **Check the environment.** If `list_sessions`, `list_events` and `archive_session` are not available, say that this skill needs the Claude desktop app's Code tab, and stop. Done when the tools exist or you have stopped.
1. **Inventory.** Call `list_sessions` with `limit: 100` (it lists unarchived sessions by default and has no paging). If the result has 100 rows, call it again with a higher limit until it returns fewer rows than the limit. If the user named a scope, filter the list to it now. Drop the current session: take its ID from your context, or from `get_session` if it exists, and drop sessions you started yourself too (their `startedBy` is the current session). Done when every remaining row is on your list.
2. **Read each ending.** Call `list_events` with `limit: 8` per session, in parallel batches of 10 sessions. For a session with no assistant message, retry that session once with `limit: 40`. If there is still none, keep the session and name it in the report. Done when each session has its last assistant message or is named in the report.
3. **Verify every candidate.** Check each session you would archive, and each session whose last message claims a state ("integration running", "waiting for X", "merged"). Check the claim in the successor session. When the session's folder still exists and is a git repo, check it in git too, always with `git -C <folder>`. A claim counts as landed only when you observed it in a successor session or in git; without that observation it has not landed. Take the branch from the `branch` field of `list_sessions`. Find the default branch with `git symbolic-ref --short refs/remotes/origin/HEAD`, falling back to the first of `origin/main`, `origin/master`, `main`, `master` that `git rev-parse --verify --quiet` accepts, and never run `git fetch`. Say in the report when you used a local branch or a remote ref that may be stale. A merge counts as landed when the branch exists and `git merge-base --is-ancestor <branch-tip> <default-branch>` succeeds (tip from `git rev-parse <branch>`), or when `git cherry <default-branch> <branch>` exits 0 and shows no line starting with `+`. If the branch does not exist, keep the session and write "branch not found, not verified". That second test recognises a squash merge only for a branch with a single commit; for a longer branch it cannot tell, so keep the session and name it under **Needs your attention** as "merge not verifiable". A claimed merge that has not landed makes the session **live**. If the folder is gone, write "git not checked". For every candidate whose folder exists, a session that would be settled but whose folder has uncommitted changes (`git -C <folder> status --porcelain` prints anything) is kept and named under **Needs your attention**, because archiving can clean up its worktree. Done when every waiting session is marked settled or live, each with the observation it rests on (successor title, git result, open question or waiting condition).
4. **Archive the settled ones.** First check that archiving a parent will not take a live child with it. Then call `archive_session` for all settled sessions in one parallel batch with a short `reason`. Archiving a parent also archives its finished side sessions, and "already archived" is success. If a call fails because the session is pinned or open on screen, do not retry: list it as kept. If it fails for another reason, retry it once, then list the session with the error text. Done when every settled session is archived or listed with its refusal.
5. **Report**, short, in the conversation's language. Take every number from the tool results. If nothing was archived, start with "0 sessions archived" and still give the other points.
   - how many were archived (only sessions where `archive_session` succeeded in this run; "already archived" separately), as one line of titles
   - each kept session with its one-line reason (live, or refused because it is pinned or open on screen: the user archives it from the sidebar)
   - **Needs your attention:** every open point left by a settled or kept session (an unanswered question, a command only the user can run, a claim that turned out false), one line each with the session title and the exact question

Never archive the session you are running in, and never delete a session (`delete_session`).
