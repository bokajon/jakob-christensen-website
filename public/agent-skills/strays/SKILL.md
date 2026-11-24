---
name: strays
license: MIT
description: Find stray local git work (branches and commits not on the remote yet) and push it with safe pushes only - no force, each branch by its exact commit, the default branch only fast-forwarded. Shows an overview first and pushes nothing before the user agrees. Use when the user asks to push their already committed work, to find unpushed commits or branches, or to check what is only local. Not for staging or committing changes, opening pull requests, merging or resolving diverged branches.
---

# Strays

Goal: find local commits that are not on the remote and push the ones the user releases. A push publishes work, so nothing is sent before the release.

## 1. Analyse

Keep the output to one line per branch or worktree, with no logs and no file lists. With no remote configured, say so and stop. If the request names a remote, use it. With several remotes, ask which one to use. With a single remote not named `origin`, use it. Read every `origin` in this skill as the chosen remote. Run `git fetch --no-prune --no-tags --recurse-submodules=no origin` first, so a `fetch.prune` setting deletes nothing. It updates only remote-tracking refs. If it fails, stop and report the first error line.

Push URLs: if `git remote get-url --push --all origin` prints several URLs or another URL than `git remote get-url origin`, name the push URLs in the overview and always ask the question in step 2, also for "push everything". Hide credentials in every URL you show.

- Find the default branch: `git ls-remote --symref origin HEAD` returns a `ref: refs/heads/<default>` line. `origin/HEAD` can be stale after the remote changed its default, so use it only as a fallback. If the `ref:` line is missing and `origin/HEAD` is unset, ask the user.
- "Remote default" is `origin/<default>`, "local default" is the local branch of that name. If no local default branch exists, skip LOCAL IN DEFAULT and step 4. Take reachability from the fetched `origin/*` refs and the list of remote branches from `git ls-remote --heads origin`. A failed `ls-remote` is no answer: never read it as "branch absent", stop all pushes and report the error. A branch's topic is its name plus its last commit subject.
- Membership is reachability only (`git merge-base --is-ancestor`, `git rev-list`).
- Leave the default branch out of the branch categories. Step 4 handles it.
- Give each other local branch the first matching category:
  - **SPECIAL**: `backup/*`, or a remote branch of the same name is not an ancestor of the local tip.
  - **MERGED**: in the remote default. Count only.
  - **LOCAL IN DEFAULT**: in the local default, not in the remote default. Goes with the default-branch push.
  - **ON REMOTE**: `git ls-remote --heads origin` lists the same branch name at the same SHA, yet the branch is in neither default.
  - **LOCAL ONLY**: everything else. These are the push candidates. Their commit count is `git rev-list --count <sha> --not <tip SHAs from git ls-remote --heads origin>`, because a remote-tracking ref can outlive a branch deleted on the remote. It is 0 for a new branch name on commits that are already on the remote.
- Default branch states: "ahead, fast-forward" (remote tip is an ancestor of the local tip) and "diverged" (neither tip is an ancestor of the other, keeps its local-only commit count). Test with `git merge-base --is-ancestor`.
- For each worktree from `git worktree list`, run `git -C <path>` to count the uncommitted files. Note a detached HEAD only if `git -C <path> rev-list --count HEAD --not --branches --remotes` is above 0.

Done when every local branch has exactly one category.

## 2. Overview and release

Show a numbered table `No. | Branch | Topic | Commits (count, short tip) | Status` for LOCAL ONLY, LOCAL IN DEFAULT and ON REMOTE, plus a row for the default branch when its local tip differs from the remote default. Its status is "ahead, fast-forward" when the remote tip is an ancestor of the local tip, and "diverged" with its local-only count when neither tip is an ancestor of the other. Below it, one line each for SPECIAL branches, uncommitted worktrees and detached HEADs. If nothing is LOCAL ONLY and the default branch is neither ahead nor diverged, say "Nothing to push." and end here. If the request only asks what is local, show the overview and end here without the question.

Only LOCAL ONLY entries and a fast-forwardable default branch can be released. Rows for LOCAL IN DEFAULT, ON REMOTE and a diverged default are information: if the user selects one, explain why nothing is pushed for it.

Otherwise ask the user once, with up to three answers. Use the tool's choice buttons where it has them, otherwise ask in text. This step pushes nothing.

- "Push all (N branches, plus a fast-forward of the default)": name the real branch count, the commit count and the default fast-forward if there is one.
- "Push only this one": offer it only when there is more than one entry to push. The user names the entry by its number or its exact branch name from the table.
- "Stop".

Rules for the answers:

- An explicit "push everything" in the request is the first answer. Show the table, skip the question and go on to step 3, unless the push URLs call for the question.
- If the user wants to decide per branch, ask for each releasable entry in table order, the default branch included, with the commit count and tip, and offer "next", "all remaining" and "stop".
- "Stop" ends every write at once. Anything not released stays unpushed.
- If the host cannot collect an answer, show the overview, push nothing and name the answer you wait for.

## 3. Branch pushes

Push each released LOCAL ONLY entry with the exact inspected SHA: `git push --no-follow-tags --recurse-submodules=no origin <sha>:refs/heads/<branch>`. Before each push, read the current remote tip with `git ls-remote --heads origin`, check how many commits the push carries and read their subject lines. If the branch does not exist on the remote yet, the push creates it. If it exists and its tip is not an ancestor of the SHA, skip the branch and report it.

If a push fails, report the first error line and go on to the next entry. After a hook failure, leave the hook alone and never use `--no-verify`. After an auth or network error, stop all pushes.

Done when every released entry is pushed, rejected or skipped.

## 4. Default branch

Run this step only when the user released the default branch: with "Push all", an explicit "push everything", or "Push only this one" naming the default. Compare the local and remote default tips again with a fresh `git ls-remote --heads origin`. Push only when the remote tip is an ancestor of the local default tip: `git push --no-follow-tags --recurse-submodules=no origin <sha>:refs/heads/<default>`. Before pushing, state the commit count and up to 10 subject lines. Then verify the actual remote tip with `git ls-remote --heads origin`. If the remote refuses the push because the default branch is protected, report it and suggest a pull request. If the branches diverge, explain it in two sentences and leave merge, rebase or cherry-pick to the user.

## 5. Report

Run `git ls-remote --heads origin` once, then write at most five lines: pushed, already on the remote before, on the remote but in no default branch (suggest a pull request or a merge into the default), still local only or uncommitted, skipped or rejected with the reason.

## Guardrails

Every push names an explicit SHA refspec and runs without force: no `--force`, no `--force-with-lease`, no `--all`, `--mirror` or `--tags`. Every push carries `--no-follow-tags --recurse-submodules=no`, so a `push.followTags` or `push.recurseSubmodules` setting sends no tags and no submodule commits. Uncommitted work, `backup/*` branches and detached HEADs are reported and left as they are. Apart from the fetch and the released pushes, the run makes no commit, merge, rebase, reset, cherry-pick, stash, deletion or file change. A push may run the repository's hooks; they stay on. An entry that is unclear (its remote state cannot be verified, or the user's selection matches no single row) is skipped and named.
