## Agent skills

### Issue tracker

Issues and specs live as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

The five default roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), written as a `Status:` line in each issue file. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root, created only when a term or decision gets settled. See `docs/agents/domain.md`.

## Deploy

Small changes to the site (CSS, text, one page) that land on `main` are deployed at once after integration with `npx wrangler deploy`, without asking. Save the log to `D:\Temp`. Larger changes wait for Jakob's word. This also holds when Jakob is away (touch-grass): after a green check, with the undo command (previous version redeploy) in the log and the live file's SHA-256 compared with the repo file; push and publishing stay skipped.

Gotchas: on `Unable to authenticate (code 10001)` ask Jakob to run `npx wrangler login`, never `--temporary` (that deploys to a temporary account). Before `git merge --ff-only` in the main checkout it holds no untracked copy of a file the branch adds (the merge aborts): commit the file on the branch instead. Worktree files are CRLF and main is LF, so a size difference of one file is no content difference.
