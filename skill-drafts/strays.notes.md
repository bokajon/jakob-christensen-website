# strays - draft notes

Renamed from `push` to `strays` on 2026-11-23 (Jakob: "push ist bisl zu vage"). The private NiagaraUI copy stays `/push`.

## Sources read
- Current `.claude/skills/push/SKILL.md` in the NiagaraUI repo (commit 6f09573f, 2026-11-20, "Make requested pushes autonomous").
- First version c2afb62a (2026-11-10, asks before each push). `git log --follow` shows only these two commits.

## Generalized
- master became the detected default branch (`git symbolic-ref --short refs/remotes/origin/HEAD`, fallback `git ls-remote --symref origin HEAD`). Remote origin by default.
- German category names and table headers became English (MERGED, LOCAL IN DEFAULT, SPECIAL, ON REMOTE, LOCAL ONLY).
- Dropped the German question texts, "Jakob", `npm run integrate` and the `%TEMP%\integrate-*` note (replaced by "suggest merging it the project's usual way"). The detached-HEAD report stays, the integrate-leftover remark went with the script.

## Rules kept / changed / dropped
- Kept: read-only analysis (only `git fetch`), reachability-only categories, SHA refspec pushes, remote-tip re-check before each push, default branch only as fast-forward, no force/--all/--mirror/--tags, no commit/merge/rebase/reset/cherry-pick/stash/deletion, unclear entry skipped and named, five-line report.
- Changed: confirmation. Original v2 pushed autonomously, v1 asked per branch. Draft asks once after the overview. "Push everything" in the request counts as yes. Per-branch asking when the user wants it ("next / all remaining / stop" from v1).
- Changed: v1 asked a separate question for master. The draft folds the default-branch fast-forward into the single yes (it is named in the question).
- Dropped: v1's "standing push approval from memory does not apply" (Jakob's memory setup).

## Invocation: model-invoked
Original is user-invoked. Checklist 2.3: the desktop app drops user-invoked skills, so they cannot be reached there. Choose user-invoked only if the agent starting it alone would do harm. Here the skill never pushes before the user agrees (step 2), so an agent starting it on its own only produces a read-only overview. Hence model-invoked, with a description that names the trigger (user asks to push or to find unpushed work) and states that it asks first.

## Open questions (Jakob's taste)
- Autonomous vs ask once vs ask per branch: draft defaults to ask once. Recommendation: keep ask once (a push publishes work), "push everything" skips it.
- Should the default-branch fast-forward have its own yes? Recommendation: no, one yes naming both.

## Tested
- Smoke test in `D:\Temp\skill-draft-tests\push` (bare origin with default branch `trunk`, clone, branches pushed / localonly / merged / backup/x). Ran the draft's analysis commands: default detected as `trunk` (both methods agree); pushed -> ON REMOTE, localonly -> LOCAL ONLY, merged -> MERGED; default ahead by 1 and a fast-forward; pushed localonly and trunk by SHA refspec to the bare repo, `ls-remote` confirmed.
- Not checked: the LOCAL IN DEFAULT and SPECIAL (diverged remote branch) paths were not exercised. `backup/x` pointing at a merged commit landed in MERGED because MERGED is matched first (same ordering as the original). Not run in any agent tool, no reachability/trigger test of the description. check_skill.py: exit 0.

## Test round 1 (2026-11-23, Claude Code, Sonnet, 2 runs per case)
Fixture: bare origin (default `trunk`), branches merged / onremote / localonly (2 commits) / feature-x (1 commit), trunk 1 ahead, one untracked file. Runner `D:\Temp\agent-skills-tests\run-strays-round.ps1`, raw data `D:\Temp\agent-skills-tests\strays-round1`.
- Baseline "Push my local work." (no skill), 2 of 2: pushed only `trunk`, left the rest, offered to push `localonly` / the other branches. No overview.
- Natural prompt with skill, 2 of 2: Skill called, overview table shown, 0 pushes, remote unchanged (localonly, feature-x not created). The skill's question was not visible in the result head (not checked in full text).
- `/strays`, 2 of 2: overview table, 0 pushes, remote unchanged (no Skill call visible in stream-json, as the checklist says).
- `/strays push everything`, 2 of 2: pushed feature-x and localonly (SHA refspec, `--no-follow-tags --recurse-submodules=no`), fast-forwarded trunk, left `onremote` and the untracked file alone, five-line report. Remote tips match the local SHAs.
- No force, no `--all`, no commit/merge/reset in any run (push commands read from the transcripts).
- Not checked: diverged remote branch, protected default, hook failure, auth failure paths; Codex; the per-branch "next / all remaining" flow; the question text with the three answers (headless run, no one to answer).
