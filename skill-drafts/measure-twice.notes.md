# measure-twice - draft notes

## Sources read
- Private rule, section "Honesty" (state only what was checked; one run is not a reproduction; sizes, shares, rankings, "dead code" and "unused" measured; runtime values from the function the running app calls; the benefit of a recommendation measured). Material to generalize, not copied.
- `skill-drafts/IDEEN.md` ideas 7 and 4 (claim-check; the reviews wanted claim-check as a rule, not a skill), `REVIEW-AUSWERTUNG.md` (three reviewers say the name sounds like planning; one asks for warm-up, median, spread), `NETZ-ABGLEICH.md` (name is used elsewhere for a different purpose; nearest content: obra verification-before-completion, only to delimit).

## Generalized
- Kept: repeat before "reproduced", load check, runtime value from the running app and a check against one known ratio, sizes and shares computed not estimated, "unused" needs a reference trace, recommendation benefit measured or "not checked".
- Added from the reviews: warm-up, median with spread, number of runs, "difference smaller than the spread is no difference measured", report table.
- Added by me: "at least five measured repetitions" is a starting value, not measured or taken from the private rules. Jakob decides.
- Dropped: the owner's incident (a scale taken from a test fixture) as a story, and project-specific tools. The "same single tab" point is shared with live-layout-check.
- No scripts bundled. A small timing script could be added, but the right tool depends on the language.

## Overlap
Part of the rule text overlaps with a possible claim-check rule (state only what was checked). That one was meant to become a rule in the instruction file, not a skill. This skill keeps the measuring part only.

## Tested
- Not tested in any agent. check_skill.py: see commit.

## Name
Working name `measure-twice`: three reviewers say it sounds like planning, and the web comparison found the name used with a different purpose. Alternatives (the reviews' own proposals): `bench-check`, `perf-verify`, `benchmark-check`. My pick: `bench-check` (short, but narrower than the content: the skill also covers sizes and shares). `benchmark-check` fits timing only. Name not checked against the web.

## Open questions
- Name (see above). If the skill should cover "measured, not estimated" for sizes and shares, a name about benchmarks is too narrow. A fourth option would be `verify-numbers`.
- Is five repetitions a good default?
