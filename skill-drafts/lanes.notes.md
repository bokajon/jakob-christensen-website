# Notes: lanes

## Read
- D:\Projekt-Vorlage: ANLEITUNG.md, CLAUDE.md, AGENTS.md, .claude\settings.json, scripts\integrate.ps1 (182 lines), scripts\guard-main-checkout.mjs.
- The global rule text, section "Git and parallel sessions", in the main rules file and the detail file.
- D:\NiagaraUI\scripts\integrate.ps1 (225 lines) and its history (9 commits, 2026-11-08 to 2026-11-22): d3434208 created, b687f459 install packages in the main checkout and restart Vite, 4b06e1c7 retry a red check with one test worker, 97add14d -Wait mode, 99804c79 wait for overlapping main-checkout work plus the guard hook, d696f11b stop the branch's own dev servers, aae3f184 -Wait handles a missing log, e8620615 and 1c196f02 mirror a tool folder (project-specific).

## Generalized
- scripts/integrate.ps1 is built from the Niagara version (newest). Taken over: -Detach, -Wait, FAILED-SO-FAR for a missing log, waiting for overlapping main-checkout work, lock, retry loop when the target moves, main-checkout install after a lock change, dev-server stop, retry of a red check.
- Configurable by parameter or scripts/integrate.config.json: target branch (auto: origin/HEAD, main, master, branch of the main checkout), check command (default npm run check, early failure with a message if there is no package.json and no command), install command (auto npm ci only when package-lock.json exists), retry command (was hard-coded VITEST_MAX_WORKERS), main-checkout install command, dev-server pattern (was always "vite", now empty means stop nothing, because stopping processes is a side effect).
- Vite restart: touches vite.config.* in the main checkout only after a lock change and only if such a file exists.
- Dropped: the tool-mirror step (project-specific) and all project paths and log names.
- New: on a merge failure the conflicting files are named (git diff --diff-filter=U). A merge failure without conflict (for example no git user) is reported as that, not as a conflict. Merge commit message "Merge <branch> into <target>".
- guard-main-checkout.mjs: only the message is generalized. It no longer reads the Claude project dir variable (the checker flags the name) and uses the hook input's cwd instead. The BOM in the regex is written as a \uFEFF escape so the file is ASCII. The settings snippet uses an absolute project path.

## Original rules
- Kept: own worktree and branch per session, main checkout only the integration target, mini-fix with the standing quick worktree and its status check, split by files, named files only, own hunks via git show HEAD:<file> plus git show --stat check, never attribute without evidence, check before every commit chained with &&, small versus full, never pipe the check, log file outside the repo, commit message via file in PowerShell, integrate at once and never stacked, say what the default branch is missing when picking up a branch, one background command, no watcher or polling, UTF-16 log, FAILED-SO-FAR is no result, fix FAILED without asking, remove the worktree only after OK, never stash, reset, clean or commit others' work, fallback without the script, old-base check for agent branches, "a failed agent may have written good work".
- Dropped as personal: "tests on master", "hears from you only with the final result", the fixed branch name master (now detected), D:\ paths, the doc-split rules and the deploy rule of the template CLAUDE.md, and the ANLEITUNG steps about package.json and CLAUDE.md. Project setup is now the Setup section of the skill.

## Open questions
- macOS/Linux port of integrate.ps1 (bash version). Recommendation: later, only if used outside Windows. Not written, as the brief said.
- Should devServerPattern default to vite as in the original? Recommendation: keep empty, set it per project.
- Setup copies the script into each project. Alternative: run it from the skill folder. Recommendation: copy, so the repo carries its own tool.
- No guard exists for shell edits or Codex. Recommendation: leave as stated in the skill.

## Tested (D:\Temp\skill-draft-tests\parallel)
- PowerShell parser on integrate.ps1: no errors. node --check on guard-main-checkout.mjs: ok. Both files contain no non-ASCII bytes.
- Repo on branch main, check command from scripts/integrate.config.json (node check.js, exits 0), worktrees a/topic and b/topic with non-conflicting commits, created before an extra commit on main so real merges were needed.
- `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/integrate.ps1 -Detach -Wait` from wt-a: exit 0, "OK: a/topic is in main". Same from wt-b: exit 0. main log shows both merges, a.txt and b.txt are in the main checkout.
- Branch c/conflict changing the same file as main: exit 1, "FAILED: merging c/conflict into main conflicts in shared.txt. Merge main into the branch, resolve there, then run again." main unchanged.
- Red check: -CheckCommand returning 1 with a failing retry command: exit 1, "is red. main is unchanged". With a passing retry command: exit 0 and the branch integrated (foreground mode).
- Guard hook: a path in the main checkout gives exit 2 with the message, a path in a worktree gives exit 0.
- Not checked: the 60-minute wait on a dirty main checkout, the lock with two simultaneous integrations, the dev-server stop, the main-checkout install and Vite touch, target detection from origin/HEAD (only the main path ran), a repository whose default branch is master, the hook inside Claude Code, PowerShell versions other than the one on this machine.
