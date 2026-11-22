---
name: parallel-worktrees
description: How several agent sessions work on one git repository at the same time without breaking each other. One worktree and branch per session, a main checkout that stays clean and is only the integration target, named-file staging, a check before every commit, and a bundled script that integrates a branch one at a time (merge and full check in a temporary worktree, fast-forward only). Use when starting work in a repository other sessions also use, when finishing a branch that must reach the default branch, or when the user asks to set up parallel agent sessions in a project. Not for projects that integrate only through hosted pull requests.
compatibility: The integration script needs Windows PowerShell 5.1 or newer and git (2.30 or newer for worktree support). The guard hook is an optional Claude Code PreToolUse hook and needs Node.js. No macOS or Linux version of the script is bundled.
---

# Parallel worktrees

Goal: any number of sessions change one repository at once, and the default branch only ever moves to a state that passed the full check. Below, `<default>` is the repository's default branch (main or master) and `<repo>` the folder name of the main checkout.

## Rules for every session

1. **Own worktree, own branch.** Before the first edit: `git worktree add ../<repo>-<name> -b <name>/<topic> <default>`, then install dependencies there. The main checkout is only the integration target: never edit or commit in it, and never use it to integrate.
2. **Mini-fix** (one file, a few lines, no new dependency): reuse one standing worktree `../<repo>-quick`, created and installed once. Check `git -C ../<repo>-quick status` first: if a branch is checked out there, another session is using it, so make your own worktree. Otherwise `git switch -c <name>/<topic> <default>`, commit, integrate, and after OK run `git switch --detach <default>` and delete the branch. The worktree stays.
3. **Split work by files** so two branches never touch the same file.
4. **Stage named files only**: never `git add -A` or `git commit -a`. To commit only your own hunks of a file another session also changed, build the staged version from `git show HEAD:<file>` in the same command as the commit, then check `git show --stat HEAD` for lines you did not write. Never attribute a change to a session without evidence.
5. **A check runs before every commit that touches code or scripts**, chained with `&&` so a failing check never reaches the commit. A small commit runs the linter plus only the tests that reach the changed files. A larger one runs the project's full check. Never pipe the check into `grep`, `head` or `tail` inside the chain, because a pipe returns the last command's exit code: write the output to a log file outside the repository and read it after. In PowerShell, write a multiword commit message to a file and use `git commit -F`, keeping the check chained to the commit.
6. **Never touch other sessions' work**: no stash, reset, clean or commit of changes you did not make.
7. **A branch from another agent** can start from an old base. Before integrating it, compare `git merge-base <branch> <default>` with the tip of `<default>`. On an old base, cherry-pick its commits onto a fresh branch from `<default>`. An agent that reported failure may still have written correct work: diff the real files before discarding anything.

## Integrating

Integrating is part of finishing and needs no extra question. Small changes integrate at once: a tweak or fix starts on a fresh branch from `<default>` and is integrated right after its commit, never stacked on an older unintegrated branch. A session that picks up an unintegrated branch says in its first message what `<default>` is missing.

1. Commit everything on the branch.
2. From the branch's worktree run, as one background command if your tool has them:
   `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/integrate.ps1 -Detach -Wait`
   It starts the integration in its own hidden process (a plain background command dies when the agent session ends), prints the log path (report it), and returns once the log has its result line: exit 0 on `OK:`, exit 1 on `FAILED:`. Do not write a watcher of your own and do not poll: each poll re-reads the whole conversation. The log is UTF-16, read it with PowerShell, never with `grep`.
3. Read the output once it returns. A `FAILED-SO-FAR` line, or a log that only says another integration is running, is not a result: check whether the integration process still runs, and if not, start it again.
4. On `FAILED:` fix the cause on the branch (merge `<default>` into it, resolve the named files, run the check) and integrate again without asking. A red check is fixed, never skipped.
5. Remove the branch's worktree only after `OK:`.

What the script does: it takes a lock so one integration runs at a time across all worktrees, merges the branch into a temporary worktree at `<default>`, runs the full check there, and moves `<default>` with `git merge --ff-only` only when it is green and no merged path has uncommitted changes in the main checkout (it waits up to 60 minutes for that work to be committed, then fails and names the files). If `<default>` moved during the check, it merges and checks again. Other sessions' uncommitted work is never stashed, reset or touched. Without the script, merge only into a clean main checkout after a green check on the merged result.

## Setup in a project

Do this only when the user asks for it, and say which files you add.

1. Copy `scripts/integrate.ps1` from this skill's folder into the project's `scripts/` folder. Optionally copy the guard hook (step 4).
2. Settings go in an optional `scripts/integrate.config.json`, or as parameters of the script (a parameter wins). Empty or missing means auto:
   - `target`: branch to integrate into. Auto: origin/HEAD, else main, else master, else the branch of the main checkout.
   - `checkCommand`: the full check. Default `npm run check`. Set it for any other project, for example `{"checkCommand": "python -m pytest"}`.
   - `installCommand`: run in the temporary worktree before the check. Auto: `npm ci` when `package-lock.json` exists, `none` to skip.
   - `retryCheckCommand`: run once when the check fails, to tell a flaky red from a real one (for example the same check with one test worker). Empty: no retry.
   - `mainInstallCommand`: run in the main checkout after OK when `package-lock.json` changed. Auto: `npm install --no-save`, `none` to skip. A `vite.config.*` file there is touched afterwards so a running Vite restarts.
   - `devServerPattern`: text such as `vite`. After OK, node processes whose command line holds it and that run from inside the branch's own worktree are stopped. Empty: none.
3. Make sure the project has a check command that exits 0 only when everything is fine, and tell the user which one the script will run. Optionally add an alias such as an `integrate` script in `package.json`.
4. Optional guard hook (Claude Code only, because it uses its PreToolUse hook): copy `scripts/guard-main-checkout.mjs`, then merge this into the project's `.claude/settings.json`, keeping every existing setting and hook and not adding it twice, with the absolute path of the project in the command:

   ```json
   {"hooks": {"PreToolUse": [{"matcher": "Edit|Write|NotebookEdit", "hooks": [{"type": "command", "command": "node \"<absolute project path>/scripts/guard-main-checkout.mjs\""}]}]}}
   ```

   It blocks Edit, Write and NotebookEdit on files in the main checkout outside its nested worktrees. It does not stop shell edits or other tools. Check that the file is still valid JSON.
5. Create the standing quick worktree if the user wants mini-fixes: `git worktree add --detach ../<repo>-quick <default>`, then install dependencies there.
