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
- `check_skill.py`: OK (2026-11-24, 4,235 characters, description 489).
- Test run 2026-11-24, Claude Code desktop app, built-in browser pane (`mcp__Claude_Browser__*`), steps 1 to 6 and 8 done by hand from the SKILL.md (not a headless `/measure-ui` run, no second run). Fixture: `D:\Temp\mui-test\index.html` (3 tabs, cards of 300 px content width + 16 px padding + 1 px border = 334 px; tab 3 holds two cards in a flex row). Not durable.
  - Wanted (step 3, written before measuring): at 375 x 812 no horizontal scroll, every card keeps 334 px width, the two cards of tab 3 do not shrink; at 1280 x 800 the two cards sit side by side.
  - Step 1: `resize_window` 375 x 812 first, `innerWidth` x `innerHeight` read back as 375 x 812. Step 5 order: tab 1, 2, 3, 2, 1, 1 (repeat), 3.
  - Before (same tab): `scrollWidth` 375 = `clientWidth` 375 at every step. c1 `16,67,334,52` (x,y,width,height), c2 `16,67,334,142`. Tab 3: c3 `16,67,164,52`, c4 `196,67,164,52`. FAIL: the cards shrink to 164 px (flex-shrink).
  - Tweak: `.row{flex-wrap:wrap}` and `.row .card{flex:none}`. Same tab reloaded, same viewport, same 7 steps.
  - After: scroll 375 = 375 at every step. c1 and c2 unchanged. Tab 3: c3 `16,67,334,52`, c4 `16,143,334,52` (wrapped below, 16 px gap). PASS. Repeat of tab 1 and the second visit of tab 3 gave identical numbers to the first visit (7 of 7 steps).
  - Wide (step 1, second size): 1280 x 800, c3 `16,67,334,52`, c4 `366,67,334,52`, scroll 1280 = 1280. PASS. Viewport reset with `preset: desktop` afterwards.
- Finding for the text (step 2): the first navigation went to `localhost:8765` and measured the wrong page, because another process already listened there (netstat showed three listeners; the page title read "Jakob Christensen - Odds & Ends", not my fixture). It showed only because the script threw on a missing element. The skill says to start the server and name what you measured but does not say to confirm that the page that answered is the intended one (title, URL, one known element). Proposal for step 2: "After loading, confirm it is the page you meant (title or a known element) before measuring; a port can be held by another project's server."
- Not observed: hidden pane reporting 0 x 0 (the pane was open), step 7 (animation stand-ins), tab hygiene with several tabs of one site (one tab only), keyboard focus, resizing while open, a `/measure-ui` or natural-language start of the skill (description trigger), other browser tools.
- Test numbers measured once per state (one run); the before and after pair is a before/after, not a repeat run.

## Name
Name chosen by Jakob (2026-11-23); earlier working name `live-layout-check`. Web check 2026-11-24: see `measure-ui.netz.md`. No skill exactly `measure-ui` found; `ui-verify` (suggested by two reviewers) is taken by at least four skills with other jobs; `ux-measure` and `design-measure` are near in wording. Jakob decides whether the name stays.

## Open questions
- Should the skill ship a small JS snippet that prints the rects of a list of selectors as a table? Left out: it would be tool-specific and untested.
- "Visual tweak with a reference is the spec" is a taste rule of the owner; kept in step 3 as one sentence. Drop it if it feels too personal.

## Review prompt
`measure-ui.review-prompt.md` (full prompt with context, the five parts and the SKILL.md inside), 2026-11-24. To paste into Gemini, ChatGPT and Copilot. Not yet sent; blind agent review not run.
