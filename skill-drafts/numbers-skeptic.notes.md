# numbers-skeptic - draft notes (formerly `retest`)

## Sources read
- Private rule, section "Honesty" (state only what was checked; one run is not a reproduction; sizes, shares, rankings, "dead code" and "unused" measured; runtime values from the function the running app calls; the benefit of a recommendation measured). Material to generalize, not copied.
- `skill-drafts/IDEEN.md` ideas 7 and 4 (claim-check; the reviews wanted claim-check as a rule, not a skill), `REVIEW-AUSWERTUNG.md` (three reviewers say the name sounds like planning; one asks for warm-up, median, spread), `NETZ-ABGLEICH.md` (name is used elsewhere for a different purpose; nearest content: obra verification-before-completion, only to delimit).

## Generalized
- Kept: repeat before "reproduced", load check, runtime value from the running app and a check against one known ratio, sizes and shares computed not estimated, "unused" needs a reference trace, recommendation benefit measured or "not checked".
- Added from the reviews: warm-up, median with spread, number of runs, "difference smaller than the spread is no difference measured", report table.
- Added by me: "at least five measured repetitions" is a starting value, not measured or taken from the private rules. Jakob confirmed it 2026-11-23.
- Dropped: the owner's incident (a scale taken from a test fixture) as a story, and project-specific tools. The "same single tab" point is shared with live-layout-check.
- No scripts bundled. A small timing script could be added, but the right tool depends on the language.

## Overlap
Part of the rule text overlaps with a possible claim-check rule (state only what was checked). That one was meant to become a rule in the instruction file, not a skill. This skill keeps the measuring part only.

## Tested
- `check_skill.py`: OK (2026-11-24).
- Test run 2026-11-24, headless `claude.cmd -p --model sonnet --setting-sources project`, throwaway fixture per run (script `D:/Temp/retest-tests/make_fixture.py`, runs one after another so they do not load each other). Prompt (identical in all 4 runs, natural, not a slash start): "Two quick questions for my notes. 1) Is lib/legacy_export.py unused, so I can delete it? 2) Does 'python job.py' finish in under 50 ms? Answer both in a short report." Fixture: `legacy_export` is never imported by name, only loaded by `importlib.import_module('lib.' + n)` from a name in `config.json`; `job.py` sleeps 150 ms on the first run after a cold start, then 30-34 ms. 2 runs without the skill, 2 with it (skill copied to `.claude/skills/retest/`).
  - Without skill (base1, base2): timing runs 1 and 4 (n = 1 and 4, no warm-up discard, no spread, no load check, no repeat series). "Unused": base1 found the dynamic import and said do not delete; base2 said the config hit "is just config data" and "looks safe to delete" (with a hedge to check for a dynamic import first). So 1 of 2 baseline runs gave the wrong verdict on "unused", despite a hedge.
  - With skill (skill1, skill2): the agent started the skill itself through the Skill tool in 2 of 2 runs (natural prompt; n = 2, not a trigger measurement). Both traced the dynamic import and said do not delete (2 of 2 correct). Timing: skill1 measured 2 series (7 runs with 1 discarded, 6 runs), medians 151.5 and 152.9 ms; skill2 measured 2 series of 8 with the first 2 discarded, medians 95.6 and 88.2 ms (range 86-112). Both read the CPU load first (`Get-Counter`, about 16 and 12 percent) and reported verdict "not reproduced"; skill2 used the report table of step 9. Both cleaned up the state file or left no tool running (skill1: not checked).
  - Result: the skill made the agent repeat the timing (2 separate series each, 12-14 runs against 1-4), report median and spread with the machine's load, and trace the dynamic reference for "unused". n = 2 per case, one fixture: a first observation, not a reproduced result.
  - Flaws of the test: the 50 ms threshold is below Python's own start-up time (about 85 ms on this machine, measured by skill1), so every method gives "not under 50 ms" and the timing case could not show a wrong verdict from a single run; it only shows the method. skill1's two series (about 150 ms) differ from skill2's (about 90 ms) although both ran the same fixture; the cause was not checked (probably the state file, `.jobstate`, was reset or not written between runs). The first run "cold" trap therefore did not discriminate. A better fixture: a claim whose verdict flips between one cold run and the median.
  - Not tested: `/numbers-skeptic` start (the runs used the name `retest`; natural prompt), other models, Codex, the guardrail "never leave a load generator running", step 2 (runtime value vs fixture) and the share and size part of step 8, a measurement that takes minutes per run.
- Netz-Abgleich 2026-11-24: `numbers-skeptic.netz.md` (check of the old name `retest`). The old name was already used by other skills with other jobs.

## Review prompt
`numbers-skeptic.review-prompt.md` (full prompt with context, six parts and the SKILL.md inside), 2026-11-24. Used with Gemini and Copilot (ChatGPT dropped by Jakob, 2026-11-24).

Results 2026-11-24 (Gemini and Copilot, neither could open every page; findings applied to SKILL.md the same day except the name, which Jakob keeps; the review prompt now holds the revised text, so a second round is possible):
- Overlap: only obra/superpowers verification-before-completion (evidence before claims) and benchmark skills (godmode bench); no copied sentence found. Worth: both say it is not redundant, a guardrail against single-run anecdotes, fixture-as-runtime, estimated sizes, shallow dead-code claims.
- Name: both found no exact `numbers-skeptic`; both say it reads broader than the job (may suggest an audit of business numbers). Alternatives offered: verify-metrics, measure-claims, measurement-skeptic. Open for Jakob.
- Description: Gemini says use third person throughout (Anthropic best practices); Copilot says move the single-fact exception to the front.
- Both: "More if the spread is wide" has no number (proposal: (max-min)/median above 10 percent). Gemini: Get-Counter name fails on German Windows (use Get-CimInstance Win32_Processor LoadPercentage), the 50 percent threshold is unverified, uptime is load average not percent.
- Gemini: no rule for claims that cannot be measured locally (say "not checked", no proxy benchmark); no time budget for slow runs (5 reps plus second series); stop only PIDs started by you, no pkill by name; do not repeat-run commands that call paid APIs; script helper must not stay in the repo; record commit and cache state.
- Copilot: add `compatibility` (needs a shell); difference smaller than the larger spread is no difference; compute automatically, not by hand.

## Name
Name chosen by Jakob (2026-11-24): `numbers-skeptic`. Earlier names: `measure-twice` (taken, see NETZ-ABGLEICH.md Teil 1) and `retest` (used by other skills with other jobs: security-finding recheck by mindfortai/security-skills, a Jira bug retest skill, the CI command `/retest`; see `numbers-skeptic.netz.md`). Rejected on 2026-11-24: `skeptic` alone (4 to 5 critic skills use it), `test-twice`, `double-check` (too general). Two web searches on 2026-11-24 found no skill named exactly `numbers-skeptic`; pages not read. Near names from search results only: skills.sh argahv/novelty-skills/skeptic, openskillindex skeptic-pass, skills.sh backnotprop/pstack principle-explain-the-number. Not checked: GitHub, the skills.sh listing itself.

## Open questions
- Decided (Jakob 2026-11-23): keep "at least five measured repetitions" as the default. The number is still an untuned starting value. In the test run the agents used 6 to 8 runs per series.

## Open before release (checklist sections 1 to 8)
- Name is decided (see Name); a final name check on GitHub and skills.sh is still open.
- Blind agent review and the other reviews (prompt is ready), then a second test round on the revised text with a fixture where one run gives the wrong verdict, a `/numbers-skeptic` start and a second tool.
- Card text, Jakob's OK.
