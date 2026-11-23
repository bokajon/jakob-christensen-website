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

## Test round 1 (2026-11-23, checklist section 7), SKILL.md of 5fb8347 unchanged
Raw data, scripts and analyzer: `D:\Temp\agent-skills-tests\strays-round1-2026-11-23\` (`claude\`, `codex\`, `codex-adddir\`, `fixture.ps1`, `analyze.py`). Not durable. Numbers read from the transcripts and from the bare remotes before and after each run, not from the model's report.

Fixture per run (own throwaway repo plus bare origin, default branch `trunk`, `origin/HEAD` unset): `merged`, `onremote` (same SHA on remote), `localonly` (2 commits), `feature-x` (1), `wt-branch` (1, checked out in a second worktree), `diverged` (remote and local tips differ), local `trunk` 1 ahead, one untracked file. Expected push set for "push everything": localonly, feature-x, wt-branch, trunk. Clean fixture (`Z`): one branch, equal to the remote.

**Claude Code 2.x headless, Sonnet, 2 runs per case** (headless has no choice buttons, so the question is asked in text):
- Baseline "Push my local work." (B): 2 of 2 pushed `trunk` only, without asking, with a bare `git push` (no SHA refspec, no `--no-follow-tags`), no fetch. One run mentioned the other branches as left alone, the other too. `localonly`, `feature-x`, `wt-branch` were never pushed.
- Natural prompt with the skill installed (N, "Push my local work."): 2 of 2 started the skill (Skill call in the transcript), fetched, showed the table and asked the three-answer question, pushed nothing (remote unchanged).
- Natural read-only question (Q): 2 of 2 started the skill, fetched, showed the table, pushed nothing, did not ask.
- `/strays` (S): 2 of 2 showed the table, asked Push all / Push only this one / Stop with the real counts (3 branches, 4 commits, fast-forward of trunk), pushed nothing. `diverged` named as SPECIAL, `dirty.txt` named as uncommitted in 2 of 2.
- `/strays push everything` (E): 2 of 2 pushed exactly localonly, feature-x, wt-branch by SHA refspec with `--no-follow-tags --recurse-submodules=no` (4 of 4 pushes guarded, 0 force-like flags) and fast-forwarded trunk; remote tips equal the local tips; `diverged` remote tip unchanged, `merged` and `onremote` untouched, `dirty.txt` untouched, no local branch moved. The 5-line report was given.
- Clean repo (Z): 2 of 2 "Nothing to push.", 0 pushes.
- Not testable headless: the button answers themselves ("Push only this one", "Stop"), the per-branch flow, several remotes, differing push URLs.

**Codex 0.169.1, `-s workspace-write`, test copy `strays-test`, 2 runs per case:** 12 of 12 stopped at step 1: `git fetch --no-prune origin` fails with `cannot open '.git/FETCH_HEAD': Permission denied` (`.git` is read-only in this sandbox), and the skill's rule "if it fails, stop" held in all of them (0 pushes, nothing changed). The baseline (B) is not comparable: B1 tried `git push` and failed on dubious ownership, B2 pushed nothing and waited for a choice. A rerun with `--add-dir <repo>\.git` failed even earlier (the shell did not start: "conflicting write and read rights", 6 of 6, 0 pushes). So the content of the skill was not exercised in Codex. `~/.codex/AGENTS.md` has no rule on pushing, so the baseline was neutral on that topic. Only the safe-stop is a Codex result. Not checked: Codex with a sandbox that lets git write `.git` (needs another sandbox mode, Jakob's call; `danger-full-access` is not allowed).

**Verdict:** Claude Code passes every case in 2 of 2 runs; the baseline pushes only trunk, unasked and without the guard flags, the skill pushes the whole expected set only after "push everything" and leaves `diverged` and the dirty file alone. No flaw found that needs a SKILL.md change, so no edit and no before/after. Page wording: "tested in Claude Code"; for Codex say only that it stops safely when `.git` is not writable.

## Second external review (Gemini, Copilot, ChatGPT), pasted by Jakob on 2026-11-23, NOT triaged or applied
Not part of this test round. Points that match known behaviour and are worth the triage: ChatGPT P7 (a `backup/*` branch that is merged lands in MERGED before SPECIAL, see the smoke test above), ChatGPT P8/P10/P11 (diverged default, selectable rows, default in per-branch flow), P9 (`git rev-list HEAD` is per worktree), Gemini P6 (`--remotes=origin` with `--no-prune` can count deleted remote refs), P5 (repository without a remote). The test round above used the unchanged text; a changed SKILL.md needs a rerun of S and E.
