---
name: parallel-worktrees
description: How several agent sessions work on one git repository at the same time without breaking each other. One worktree and branch per session, a main checkout that stays clean and is only the integration target, named-file staging, a check before every commit, and a bundled script that integrates a branch one at a time (merge and full check in a temporary worktree, fast-forward only). Use when starting work in a repository other sessions also use, when finishing a branch that must reach the default branch, or when the user asks to set up parallel agent sessions in a project. Not for projects that integrate only through hosted pull requests.
compatibility: The integration script needs Windows PowerShell 5.1 or newer and git (2.31 or newer, because the script uses `git rev-parse --path-format=absolute`). The guard hook is an optional Claude Code PreToolUse hook and needs Node.js. No macOS or Linux version of the script is bundled.
---

# Parallel worktrees

Goal: any number of sessions change one repository at once, and the default branch only ever moves to a state that passed the full check. Below, `<default>` is the repository's default branch (main or master) and `<repo>` the folder name of the main checkout. `<name>` is a short lowercase tag for your session (for example `claude`) and `<topic>` is 2 to 4 words for the change.

## Rules for every session

1. **Own worktree, own branch.** Before the first edit: `git worktree add ../<repo>-<name> -b <name>/<topic> <default>`, then install dependencies there with the project's documented install command (`npm ci` when `package-lock.json` exists). The main checkout is only the integration target: never edit or commit in it with any tool, shell edits included, and never use it to integrate. If your session starts inside the main checkout, move to your worktree and tell the user.
2. **Mini-fix** (one file, a few lines, no new dependency): reuse one standing worktree `../<repo>-quick`, created and installed once. Check first: `git -C ../<repo>-quick branch --show-current` must print nothing and `git -C ../<repo>-quick status --porcelain` must be empty. Otherwise another session uses it, so make your own worktree. If both are empty, run `git -C ../<repo>-quick switch -c <name>/<topic> <default>` and treat a failure as taken. Commit, integrate, and after OK run `git -C ../<repo>-quick switch --detach <default>` and then `git branch -d <name>/<topic>`. The worktree stays.
3. **Split work by files** so two branches never touch the same file.
4. **Stage named files only**: never `git add -A` or `git commit -a`. To commit only your own hunks of a file another session also changed, build the staged version from `git show HEAD:<file>` in the same command as the commit, then check `git show --stat HEAD` for lines you did not write. Never attribute a change to a session without evidence.
5. **A check runs before every commit that touches code or scripts**, chained so a failing check never reaches the commit: use `&&` in bash or PowerShell 7. Windows PowerShell 5.1 has no `&&`, so write `npm run check > <logfile>` and then `if ($LASTEXITCODE -eq 0) { git commit -F <msgfile> }`, redirecting stdout only and never using `2>&1`. A small commit runs the linter plus only the tests that reach the changed files. A larger one runs the project's full check. Never pipe the check into `grep`, `head` or `tail` inside the chain, because a pipe returns the last command's exit code: write the output to a log file outside the repository and read it after.
6. **Never touch other sessions' work**: no stash, reset, clean or commit of changes you did not make.
7. **A branch from another agent** can start from an old base. Before integrating it, compare `git merge-base <branch> <default>` with the tip of `<default>`. On an old base, cherry-pick its commits onto a fresh branch from `<default>`. An agent that reported failure may still have written correct work: diff the real files before discarding anything.

## Integrating

Integrating is part of finishing and needs no extra question. Small changes integrate at once: a tweak or fix starts on a fresh branch from `<default>` and is integrated right after its commit, never stacked on an older unintegrated branch. A session that picks up an unintegrated branch says in its first message what `<default>` is missing.

1. Commit your own files by name. `git status --porcelain` must then print nothing. Delete your own scratch files or add them to `.git/info/exclude`. Leave a file you did not create alone and say so. Never run `git add -A` to make the script pass.
2. From the branch's worktree run, as one background command if your tool has them:
   `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/integrate.ps1 -Detach -Wait`
   If your tool has no background mode, run it with `-Detach` only (it returns at once with the log path), end the turn, and run it with `-Wait` once on the next turn. If `scripts/integrate.ps1` is missing in your worktree, use the main checkout's copy with `-File <that path>` from your worktree, or the manual route below if the project has none, and tell the user once that the script could be installed.
   It starts the integration in its own hidden process (a plain background command dies when the agent session ends), prints the log path (report it), and returns once the log has its result line: exit 0 on `OK:`, exit 1 on `FAILED:`. Do not write a watcher of your own and do not poll: each poll re-reads the whole conversation. The log is UTF-16, read it with PowerShell, never with `grep`.
3. Read the output once it returns. A `FAILED-SO-FAR` line, or a log that only says another integration is running, is not a result: run `-Wait` once more. Check whether the process runs with `Get-CimInstance Win32_Process -Filter "Name='powershell.exe'" | Where-Object CommandLine -like '*integrate.ps1*'`. If none runs and the log has no result line, start the script again. Never kill a running integration.
4. On `FAILED:` fix the cause on the branch (merge `<default>` into it, resolve the named files, run the check) and integrate again without asking, at most 3 rounds. Then stop and report the log path, the failing step and what you tried. A red check is fixed, never skipped. Resolve a conflict yourself only when you can read the other side and keep it in full, otherwise stop and ask. Failures about git user settings, a missing worktree or a refused fast-forward are not code problems: report them and do not retry.
5. Remove the branch's worktree only after `OK:`. Leave its folder first, then run `git worktree remove ../<repo>-<name>` and `git branch -d <name>/<topic>`. Do not push unless the project says so, and say in the final message that `<default>` is updated locally only. If the `OK:` line says `0 files`, nothing was integrated: check that you committed on the right branch.

What the script does: it takes a lock so one integration runs at a time across all worktrees, merges the branch into a temporary worktree at `<default>`, runs the full check there, and moves `<default>` with `git merge --ff-only` only when it is green and no merged path has uncommitted changes in the main checkout (it waits up to 60 minutes for that work to be committed, then fails and names the files). If the log shows that wait, tell the user once, naming the files, and do not touch them. If `<default>` moved during the check, it merges and checks again. Other sessions' uncommitted work is never stashed, reset or touched. Without the script, merge only into a clean main checkout after a green check on the merged result.

## Setup in a project

Do this only when the user asks for it, and say which files you add. Work in your own worktree on a branch `<name>/setup-parallel-worktrees`. The script does not exist yet for this first merge, so merge it by hand per the manual route above.

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
