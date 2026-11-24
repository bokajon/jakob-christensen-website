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

## Open questions
- Does "ask the user first" for the strong role fit tools without an approval step? The text says "if the tool has one".
- Should the role table name example models of today? Left out on purpose, they age.
- Two cases did the work themselves although the user asked for helpers (task too small); step 1 says so. Jakob may want the skill to follow an explicit request for helpers anyway.
