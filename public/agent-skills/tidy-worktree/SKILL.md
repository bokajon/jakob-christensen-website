---
name: tidy-worktree
description: Remove local git worktrees and branches whose work has safely landed in the default branch and whose worktree is clean, and keep everything else. Use when the user asks to tidy up, clean up or remove old worktrees and branches in a git repository, or asks which ones would be removed. Needs only git and runs in any tool. Not for pushing unpushed work, not for the single worktree a session just finished with, not for remote branches and not for archiving sessions in an app.
compatibility: Needs git (2.31 or newer, because the steps read the `prunable` field of `git worktree list --porcelain`) and nothing else. Works in any tool that can run shell commands.
---

# Tidy worktree

Goal: remove every local worktree and branch that is **landed** (its work is provably in the default branch) and **clean**, and keep the rest. The user's request to tidy up is their permission for exactly that. Both a landed branch and a clean worktree are needed. Removal never forces anything: `git worktree remove <path>` without `--force` and `git branch -d`, never `-D`. If the user only asks what would be removed, run steps 1 to 3, skip step 4, and write the step 5 report in the conditional ("would remove"), including the kept entries. If the user named a scope (a branch prefix, a folder), tidy only that scope.

Remote branches are never touched. There is no `git fetch` and no push, so a remote ref used below can be stale. Say so in the report when you used one.

## Steps

1. **Inventory.** Run `git worktree list --porcelain` and `git branch --format='%(refname:short)'`. The first worktree in the list is the main checkout. Note the current worktree (`git rev-parse --show-toplevel`). Work from the main checkout with `git -C "<path>" ...` for every command below. Done when you have every worktree (path, branch or detached, `locked`, `prunable`) and every local branch.
2. **Default branch.** `git symbolic-ref --quiet --short refs/remotes/origin/HEAD` gives `origin/<default>`. If it is unset, use the first of `origin/main`, `origin/master`, `main`, `master` that `git rev-parse --verify --quiet` accepts. Say in the report that the default was chosen by name. If none exists, stop and ask the user which branch is the default. Below, `<default>` is that ref and `<default-tip>` its commit (`git rev-parse <default>`).
3. **Judge every entry.** An entry is a worktree with a branch, or a branch without a worktree. Give each the first matching result, and keep a one-line reason for every kept entry:
   - **Never touched**: the main checkout, the current worktree, the default branch itself (local branch of the same name as `<default>`), a worktree with `locked`, and a worktree on a detached HEAD (report it, name its commit).
   - **Prunable**: a worktree marked `prunable` (its folder is gone). Do not remove it, and keep its branch too: `git branch -d` refuses while the dead worktree record exists. List both under **Needs your attention** (also in a dry run, never under "would remove").
   - **No own commits**: the branch tip equals `<default-tip>`, or the reflog of the branch has no entry other than the creation line (`git reflog show --format=%gs refs/heads/<branch>` prints only `branch: Created from ...`). It looks landed (a tip that is an ancestor of the default branch) but may be a session that has just started, so keep it and name it. Never remove it. An empty or expired reflog proves nothing, then the normal checks decide.
   - **Unique reflog commits**: the reflog of the branch (`git reflog show --format=%H refs/heads/<branch>`) lists a commit that `git merge-base --is-ancestor <commit> <default>` does not accept (for example a commit that was reset away). Deleting the branch also deletes its reflog, so keep the entry as "reflog holds commits not in the default branch" and name the first commit. An unreadable reflog skips this check.
   - **Shallow history**: `git rev-parse --is-shallow-repository` prints `true`. Ancestry and patch checks cannot see the full history, so keep the entry as "shallow history, landing not provable".
   - **Landed**: `git merge-base --is-ancestor refs/heads/<branch> <default>` exits 0. Exit 1 means not an ancestor, any other exit is an error: keep the entry and name the error. After exit 1: if `git rev-list --merges <default>..refs/heads/<branch>` prints anything, keep it as "merge history not verifiable" (the patch comparison below is not trusted for branches with merge commits). Otherwise run `git cherry <default> refs/heads/<branch>`: no line starting with `+` and no error means landed. Any `+` line means not proven: keep it as "squash merge not provable" (a squash merge of several commits looks the same as unmerged work).
   - **Dirty**: for a landed branch with a worktree, `git -C "<worktree>" status --porcelain --untracked-files=all` prints anything. Keep it and name the first five paths and the total count.
   - **Ignored files**: for a landed, clean worktree, run `git -C "<worktree>" status --ignored --porcelain`. `git worktree remove` deletes ignored files with the folder (local notes, `.env`). If any ignored path is outside dependency and build folders (`node_modules`, `dist`, `build`, `out`, `target`, `.next`, `.cache`, `__pycache__`, `.venv`), keep the entry as "ignored files present" and name the first five paths.
   - **Unlanded**: everything else. Keep it.
   - **Removable**: landed, no own-commit exception, and clean (or a landed branch without a worktree).

   Done when every entry is removable or kept with a reason.
4. **Remove.** Skip this step in a dry run. For each removable entry with a worktree, run `git worktree remove "<path>"` from the main checkout, then `git branch -d <branch>`. For a removable branch without a worktree, only `git branch -d <branch>`. If `git worktree remove` refuses (it also refuses a worktree that contains submodules), keep the entry and report the first error line, and never retry with `--force`. If `git branch -d` refuses, say "worktree removed, branch kept: <error line>" and do not use `-D`. Done when every removable entry is removed or reported.
5. **Report**, short, in the conversation's language, counts taken from this run's command results. If nothing was removed, start with "0 removed". List:
   - removed: worktree paths and branch names, one line
   - kept, one line each with the reason (no own commits, reflog holds commits, shallow history, dirty with files, ignored files present, squash merge not provable, merge history not verifiable, locked, current, detached HEAD)
   - **Needs your attention:** prunable entries (ask whether to run `git worktree prune`, and run it only after a yes), errors, and a note when a stale remote ref was used

Never run `git worktree remove --force`, `git branch -D`, `git worktree prune` without a yes, `git fetch`, `git push`, `git stash`, `git reset` or `git clean`.