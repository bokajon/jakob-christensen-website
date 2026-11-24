---
name: push
license: MIT
description: Find local git work that is not on the remote yet and push it safely, including a fast-forward of the default branch. Use when the user asks to push their work, to find unpushed commits or branches, or to check what is only local. Shows an overview first and pushes only after the user agrees. Not for committing, merging or resolving diverged branches.
---

# Push

Goal: every local commit worth keeping is on the remote. A push publishes work, so the user releases it before anything is sent.

## 1. Analyse

Make one or two shell calls and print one line per branch or worktree, with no logs and no file lists. Run `git fetch origin` first, without `--prune`. If it fails, stop and report the first error line. It is the only write. With several remotes, ask which one to use.

- Find the default branch: `git symbolic-ref --short refs/remotes/origin/HEAD` returns `origin/<default>`, so cut the `origin/` prefix. If it is unset, try `git ls-remote --symref origin HEAD`. If that is unclear too, ask the user.
- "Remote default" is `origin/<default>`, "local default" is the local branch of that name. Take all remote state from the fetched `origin/*` refs. A branch's topic is its name plus its last commit subject.
- Membership is reachability only (`git merge-base --is-ancestor`, `git rev-list`).
- Leave the default branch out of the branch categories. Step 4 handles it.
- Give each other local branch the first matching category:
  - **MERGED**: in the remote default. Count only.
  - **LOCAL IN DEFAULT**: in the local default, not in the remote default. Goes with the default-branch push.
  - **SPECIAL**: `backup/*`, or a remote branch of the same name is not an ancestor of the local tip.
  - **ON REMOTE**: `origin/<branch>` of the same name exists and points to the same SHA, yet the branch is in neither default.
  - **LOCAL ONLY**: everything else. `git rev-list --count <sha> --not --remotes=origin` is above 0. These are the push candidates.
- For each worktree from `git worktree list`, count the uncommitted files. Note a detached HEAD only if `git rev-list --count HEAD --not --branches --remotes` is above 0.

Done when every local branch has exactly one category.

## 2. Overview and release

Show a numbered table `No. | Branch | Topic | Commits (count, short tip) | Status` for LOCAL ONLY, LOCAL IN DEFAULT and ON REMOTE. Below it, one line each for SPECIAL branches, uncommitted worktrees and detached HEADs. If nothing is LOCAL ONLY, say "Nothing to push." and end here.

Otherwise ask the user once, with three answers. Use the tool's choice buttons where it has them, otherwise ask in text. This step pushes nothing.

- "Push all (N branches, plus a fast-forward of the default)": name the real branch count, the commit count and the default fast-forward if there is one.
- "Push only this one": offer it only when there are several branches. The user names the branch.
- "Stop".

Rules for the answers:

- An explicit "push everything" in the request is the first answer. Show the table, skip the question and go on to step 3.
- If the user wants to decide per branch, ask for each LOCAL ONLY entry in table order, with the commit count and tip, and offer "next", "all remaining" and "stop".
- "Stop" ends every write at once. Anything not released stays unpushed.
- When no one can answer, show the overview, push nothing and name the answer you wait for.

## 3. Branch pushes

Push each released LOCAL ONLY entry with the exact inspected SHA: `git push origin <sha>:refs/heads/<branch>`. Before each push, read the current remote tip with `git ls-remote --heads origin`, check how many commits the push carries and read their subject lines. If the remote tip is not an ancestor of the SHA, skip the branch and report it.

If a push fails, report the first error line and go on to the next entry. After a hook failure, leave the hook alone and never use `--no-verify`. After an auth or network error, stop all pushes.

Done when every released entry is pushed, rejected or skipped.

## 4. Default branch

Compare the local and remote default tips again with a fresh `git ls-remote --heads origin`. Push only when the remote tip is an ancestor of the local default tip: `git push origin <sha>:refs/heads/<default>`. Before pushing, state the commit count and up to 10 subject lines. Then verify the actual remote tip with `git ls-remote --heads origin`. If the remote refuses the push because the default branch is protected, report it and suggest a pull request. If the branches diverge, explain it in two sentences and leave merge, rebase or cherry-pick to the user.

## 5. Report

Run `git ls-remote --heads origin` once, then write at most five lines: pushed, already on the remote before, on the remote but in no default branch (suggest merging it the project's usual way), local only or uncommitted, open.

## Guardrails

Every push names an explicit SHA refspec and runs without force: no `--force`, no `--force-with-lease`, no `--all`, `--mirror` or `--tags`. Uncommitted work, `backup/*` branches and detached HEADs are reported and left as they are. The run makes no commit, merge, rebase, reset, cherry-pick, stash, deletion or file change. An unclear entry is skipped and named.
