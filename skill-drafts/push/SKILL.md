---
name: push
description: Find local git work that is not on the remote yet and push it safely, including a fast-forward of the default branch. Use when the user asks to push their work, to find unpushed commits or branches, or to check what is only local. Shows an overview first and pushes only after the user agrees. Not for committing, merging or resolving diverged branches.
---

# Push

Goal: every local commit worth keeping is on the remote. A push publishes work, so the user releases it before anything is sent.

## 1. Analyse

Make one or two shell calls and print one line per branch or worktree, with no logs and no file lists. The only write is `git fetch origin` (use another remote only if the user names it).

- Find the default branch: `git symbolic-ref --short refs/remotes/origin/HEAD`, or `git ls-remote --symref origin HEAD` if that is unset. Call it `<default>`. "Remote default" is `origin/<default>`, "local default" is the local branch of that name.
- Remote state comes from `git ls-remote --heads origin`. A branch's topic is its name plus its last commit subject.
- Membership is reachability only (`git merge-base --is-ancestor`, `git rev-list`).
- Give each local branch the first matching category:
  - **MERGED**: in the remote default. Count only.
  - **LOCAL IN DEFAULT**: in the local default, not in the remote default. Goes with the default-branch push.
  - **SPECIAL**: `backup/*`, or a remote branch of the same name is not an ancestor of the local tip.
  - **ON REMOTE**: `git rev-list --count <sha> --not --remotes=origin` is 0, yet the branch is in neither default.
  - **LOCAL ONLY**: that count is above 0. These are the push candidates.
- For each worktree from `git worktree list`, count the uncommitted files and note every detached HEAD whose commits sit on no branch.

Done when every local branch has exactly one category.

## 2. Overview and release

Show a numbered table `No. | Branch | Topic | Commits (count, short tip) | Status` for LOCAL ONLY, LOCAL IN DEFAULT and ON REMOTE. Below it, one line each for SPECIAL branches, uncommitted worktrees and detached HEADs. Then ask the user once, naming the LOCAL ONLY branches, the commit count and the default-branch fast-forward (if there is one), with three answers: "Push all", "Push only this one" (when there are several branches, the user names it) and "Stop". Use the tool's choice buttons where it has them, otherwise ask in text. This step pushes nothing.

- An explicit "push everything" in the request is that answer. Skip the question and go on to step 3.
- "Push only this one" releases that branch alone. If the user wants to decide per branch, ask for each LOCAL ONLY entry in table order, with the commit count and tip, and offer "next", "all remaining" and "stop".
- "Stop" ends every write at once. Anything not released stays unpushed.

## 3. Branch pushes

Push each released LOCAL ONLY entry with the exact inspected SHA: `git push origin <sha>:refs/heads/<branch>`. Before each push, read the current remote tip with `git ls-remote --heads origin` and inspect every commit the push carries. If the remote tip is not an ancestor of the SHA, skip the branch and report it. A rejection gets one sentence, then the next entry.

Done when every released entry is pushed, rejected or skipped.

## 4. Default branch

Compare the local and remote default tips again. Push only when the remote tip is an ancestor of the local default tip: `git push origin <sha>:refs/heads/<default>`, then verify the actual remote tip with `git ls-remote --heads origin`. Report the commit count. If the branches diverge, explain it in two sentences and leave merge, rebase or cherry-pick to the user.

## 5. Report

Run `git ls-remote --heads origin` once, then write at most five lines: pushed, already on the remote before, on the remote but in no default branch (suggest merging it the project's usual way), local only or uncommitted, open.

## Guardrails

Every push names an explicit SHA refspec and runs without force: no `--force`, no `--force-with-lease`, no `--all`, `--mirror` or `--tags`. Uncommitted work, `backup/*` branches and detached HEADs are reported and left as they are. The run makes no commit, merge, rebase, reset, cherry-pick, stash, deletion or file change. An unclear entry is skipped and named.
