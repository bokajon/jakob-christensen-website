# measure-ui - draft notes

## Sources read
- Private rules, section "Live checks in the built-in browser pane" and "Visual tweaks take the reference literally" (CLAUDE.md and long form). Material to generalize, not copied.
- `skill-drafts/IDEEN.md` idea 6, `REVIEW-AUSWERTUNG.md` (all four reviewers: keep; "ui-verify" suggested twice as a name), `NETZ-ABGLEICH.md` (similar: autonomous-ui-inspection; used only to delimit).

## Generalized
- The built-in browser pane and its tool names (`resize_window` and others) became "an agent tool that can open a page in a real browser and run JavaScript". The need for that is stated in `compatibility`.
- "hidden pane is 0 x 0" became "a hidden or background browser view can report 0 x 0". This was observed in one tool only, other tools not checked.
- Kept: viewport first, `getBoundingClientRect` numbers, screenshots only when the user should look, switching in more than one order, only the measured tab open, stand-in `requestAnimationFrame` must honor `cancelAnimationFrame`.
- Added: wait for fonts and images, write the wanted numbers down first, narrow and wide size, report table, "not checked" list, guardrails.
- The claim "localhost pages share one renderer process, so a second tab skews numbers" comes from the private rules; softened to "can share". Not re-verified here.
- Dropped: the owner's vitest remark as a project fact (kept as one general sentence).

## Tested
- Not run in any browser. check_skill.py: exit 0. No trigger test of the description.

## Name
Name chosen by Jakob (2026-11-23); earlier working name `live-layout-check`. Name not checked against the web.

## Open questions
- Should the skill ship a small JS snippet that prints the rects of a list of selectors as a table? Left out: it would be tool-specific and untested.
- "Visual tweak with a reference is the spec" is a taste rule of the owner; kept in step 3 as one sentence. Drop it if it feels too personal.
