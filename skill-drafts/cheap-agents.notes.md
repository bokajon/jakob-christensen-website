# cheap-agents - draft notes

Old working name: `delegate` (taken, see Name). Renamed 2026-11-24.

## Sources read
- Private rules, section "Subagents and sessions" (short and long form). Material to generalize, not copied.
- `skill-drafts/IDEEN.md` idea 1, `REVIEW-AUSWERTUNG.md` (all four reviewers would use it; two say the rule "more than 2 agents" is arbitrary), `NETZ-ABGLEICH.md` (similar skills exist; used only to delimit, nothing copied).

## Generalized
- Model names became roles (cheap, middle, strong) because names go out of date. No tool names that exist in one tool only.
- The rule "ask before more than two agents" became a decision frame (steps 1 and 3). The user is asked before several helpers start (count, role, model, cost class), but the number follows from the independent parts. Reviewer criticism taken.
- Dropped: subscription and cache lifetimes (only "switching model re-reads uncached" stays), the owner's "strong model only with permission" wording.
- Kept: shared brief plus own file list, no follow-up helpers, check against real files, "failed" may still have written work, old branch base check, script validation of combined output.
- New (not in the private rules): the list of brief contents and "never hand over a hypothesis to be confirmed".

## Name
- Jakob chose `delegate` on 2026-11-23. Checked 2026-11-24: taken. skills.sh search API `https://skills.sh/api/search?q=delegate` lists exactly `lvlup-sw/exarchos/delegate` (258 installs); its page (https://skills.sh/lvlup-sw/exarchos/delegate) shows a different skill: a workflow step of the Exarchos tool (prepare, dispatch, settle, task capsules). Same name, other job. Also many `<tool>-delegate` skills (amelnagdy/delegate-skills) and oxmonty/product-engineering-skills/delegate (model per call).
- Briefly renamed `tiers` (2026-11-24), dropped the same day: it names the mechanism, not Jakob's goal (save usage and cost). Another session checked `tiers`: no skill of that name found; similar ones model-hierarchy, model-tiering, model-tiers, pick-model; npm package `tiers` exists.
- Final name `cheap-agents`, chosen by Jakob 2026-11-24. skills.sh API search `cheap-agents`: 5 results, none with that id; `cheap-helpers`: 0. Only skills.sh was searched, so "not found" is not proof. Discarded: cheap-helpers, worker-bees (no cost meaning), agent-budget (close to agentbudget, agent-budget-governance, agent-budget-controller).

## Tested (details in SKILL-CHECKLIST.md section 8g)
Claude Code headless, Sonnet, 2 runs per case, skill still installed as `delegate` in the test folders (the text did not mention its own name). Fixture: four independent one-line bugs, plus a one-file task.
- Without skill, user asks for four helpers: 2 of 2 started 4 helpers on the default model, no role, cost or model named.
- With skill, same prompt: 4 of 4 (two rounds) named role, model, effort and cost class, started 4 Haiku helpers, briefs limited each helper to one file (only the first brief of two read said "no sub-agents of your own": D2a yes, D2b no; the other runs' briefs were not read); all 4 re-read the files and re-ran the tests themselves.
- Small one-file task with the skill: 2 of 2 did it themselves, 0 helpers.
- User says "use sub-agents" without a number, old step 3: 1 of 2 started 4 helpers without asking; 1 of 2 split into 2 helpers to stay under the limit. Step 3 changed (end the turn with the question, never merge or split to stay under the limit, a named number is the yes for the count).
- Same case, new step 3: 1 of 2 stopped with count, role, model, cost class and the question; 1 of 2 did the work itself (allowed by step 1). 0 of 2 started helpers without a yes.
- Not tested: step 5 (failed helper with written work, old branch base), several different roles in one run, Codex, Cursor, a strong-role approval step, the case where the user asks for no helpers at all.

## Review round 1 (Gemini, ChatGPT, Copilot; 68 points, triaged 2026-11-24, Jakob approved the batch)
Accepted (20): description in third person (best-practices page: "Always write in third person", read 2026-11-24); effort for the strong role named; cost and context sentences softened (own context window confirmed for Claude Code and Cursor, extra tokens for Codex); model-switch sentence scoped to Claude Code (docs, "Switching models"; not stated for Cursor and Codex); role always named, model and effort only where the tool shows them (Cursor shows no effort field); roles mapped to the cheapest model the tool offers; "done when one sentence" replaced by a concrete gain test; check what the tool offers first; stage-wise delegation for mixed jobs; command in the brief only where one exists; helpers need the user's approval for commit, push, delete, publish, deploy, outside resources, money (a brief cannot grant it); brief is intent, not access control (helpers start in the parent's working directory, Claude Code `isolation: worktree`); overwrite warning made conditional; review brief carries the criteria; ownership check made concrete; failed-helper wording ("for example after a usage limit"); merge-base only for branches or worktrees; script check only for structured output; track helpers to a terminal state; neutral question framing. Strong role: the user's yes is always asked (taste, Jakob). Unasked helpers: state count, role, model, cost class and wait for a yes before even one (taste, Jakob).
Rejected (7): missing `---` in frontmatter (paste artifact, file has them, check_skill green); move text to references/ (7.9k characters, far under 500 lines); "5 or fewer tool calls" instead of "handful" (a hard number gets gamed); a named helper count is the yes for the count (kept, tested 4 of 4); separate "user direction" section; overlap points (no copied sentence found; Gemini and ChatGPT could not open every folder, so the overlap check is not exhaustive); the long rewrites of ChatGPT P12, P21, P23 (only their core taken).
Not verified against first-party docs: Cursor checkout sharing, Codex sandbox and approval inheritance (pages cut off when fetched).

## Second review round: blind read (Sonnet agent, 2026-11-24, 12 points)
Accepted and applied (10): step 3 as a decision list incl. strong role; forbidden actions named in the brief; step 5 effort scaled to risk and no re-run of a final command with side effects; ownership check asks the user when unclear, git only where it exists; strong-role "no" path and gate only where the tool picks models; ruled-out items only for build and search, none for review, diagnosis, bug hunt; wait for a background stage by ending the turn; script-check sentence fixed; state noted before a writing helper; duplicate "never hide a failed helper" removed (step 6 says failed ones included). Rejected (1): model-switch sentence (already Claude Code scoped, docs checked). Jakob's decision (point 5): the agent keeps doing tiny tasks itself even on a request for helpers, and says so in one line. Not yet done: the second paste round in Gemini, ChatGPT and Copilot (`skill-drafts/cheap-agents.review-paste-2.md`, built from the current SKILL.md).

## Second review round 2: Gemini, Copilot, ChatGPT (2026-11-24, Jakob approved "all 13")
Accepted and applied (13): strong-role line first in the step 3 list, and it also covers inherited strong models (Gemini P6, ChatGPT P11); final command must only read or run locally, "no command" where none exists; helpers that write run one after another without isolation; "create resources outside the project" in the brief's forbidden actions; baseline copy goes to a temporary folder outside the project when git is absent; strong-cost sentence deleted; "inherits" sentence replaced by "model it will use if the tool shows it, otherwise the tool chooses"; cost classes defined by total scope and "unknown" allowed; helper defined; "touches" became "writes to"; batching where the tool limits concurrent helpers; "normally runs in its own context window". Rejected: the remaining points (kept the tested count rule, no reference files, no hard numbers, no extra sections). Rerun `r5`: same behaviour as `r4` (numbers in SKILL-CHECKLIST.md 8g). Not tested: strong-role "no" path, step 3 for 1-2 helpers on a larger task, batching, Codex, Cursor.

## Open questions
- Does "ask the user first" for the strong role fit tools without an approval step? The text says "if the tool has one".
- Should the role table name example models of today? Left out on purpose, they age.
- Decided by Jakob 2026-11-24: two cases did the work themselves although the user asked for helpers (task too small); that stays, with one line saying why (step 1).
