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

## Blind review and round 2 (2026-11-24)
- Blind review (Sonnet, fresh context, only SKILL.md, 12 points). Applied, shortened: no-JS browser fallback in `compatibility`; CSS-pixel viewport read-back with `devicePixelRatio`; wait on a condition and read twice; page identity and login wall; rect relative to viewport, 0 x 0 means failed check, iframe and shadow root, covered elements via `elementFromPoint`; read a control before clicking; tab list before start and the renderer claim marked "not verified for layout sizes"; animations; 375 x 812 and 1280 x 800 with `scrollWidth` against `clientWidth`. Rejected: point 8 (resize and focus pass criteria: too prescriptive, untested), point 12 (screenshot rule is the owner's decision; Goal paragraph kept), the DPR division formula (untested). Text now about 6,000 characters.
- Test round 2, Claude Code desktop app browser pane, new fixture `D:\Temp\mui-test	2.html`, 375 x 812, one run, steps done by hand. (Test)
  - Late rendering: a rect read right after load gave height 18, 300 ms later 45, then 45 again (the two reads differ, so the page was not settled: works as the skill says). The first attempt read it after the timer had run and showed nothing, so the check depends on reading right after load.
  - Hidden element (`display:none`): rect `0,0,0,0`, reported as failed check by the new rule.
  - Covered element: `elementFromPoint` at the button center returned `hdr` (fixed header) instead of `btn`. My first fixture had the button above the header and returned `btn`, so the check separates both cases.
  - Overflow: `scrollWidth` 500 against `clientWidth` 375.
  - New finding: `innerWidth` read 500 (not 375) with `innerHeight` 1083 and `devicePixelRatio` 2 on this overflowing page under phone emulation, while `clientWidth` was 375. Step 1 now reads `clientWidth` and says to note any difference. Cause not checked (probably the mobile layout viewport widening to content width).
  - Tab list before start (`tabs_context`): pane closed, no tabs, so nothing of the user's. Not tested: tab list with the user's tabs, a login wall, iframes, shadow DOM, `getAnimations`, the no-JS fallback, a `/measure-ui` or natural start.

## Gemini, Copilot and final blind read (2026-11-24)
- Gemini (12 points) and Copilot (18 points) pasted by Jakob; ChatGPT still missing. Applied: no-JS fallback moved from `compatibility` into step 0; broader description non-trigger; px units; retry cap of 3 read pairs; dev server started in the background with the port named (judgement call, Copilot wanted "only start if asked"); `elementFromPoint` after scrolling and in shadow roots; infinite lists; dark mode and reduced motion; broader no-click list; softened renderer claim; derived checks; reference assumptions; scroll coordinates; closed shadow root "not checked"; long-content item found by inspection.
- Rejected: pass criteria for opening, closing, resize, focus (untested); moving the rationale into a reference file (one file kept); limits on the overlap audit. The overlap check stays incomplete: neither reviewer could open the full repositories ("not checked").
- Final blind read (8 points): all applied by splitting steps 1, 2, 4, 6 into sub-bullets, clearer 3-pair rule, removing "Build to it" so the skill does not suggest editing code, removing the tab rule duplicated in Guardrails. Text now 7,541 characters, description 558, `check_skill.py` OK.
- Not tested: the new bits (0 x 0 handling, 3-pair retry, derived checks, iframe, shadow root); no round 3 run.

## Name
Name chosen by Jakob (2026-11-23); earlier working name `live-layout-check`. Web check 2026-11-24: see `measure-ui.netz.md`. No skill exactly `measure-ui` found; `ui-verify` (suggested by two reviewers) is taken by at least four skills with other jobs; `ux-measure` and `design-measure` are near in wording. Jakob decided on 2026-11-24 in this session's chat: `measure-ui` stays.

## Open questions
- Should the skill ship a small JS snippet that prints the rects of a list of selectors as a table? Left out: it would be tool-specific and untested.
- "Visual tweak with a reference is the spec" is a taste rule of the owner; kept in step 3 as one sentence. Drop it if it feels too personal.

## Review prompt
`measure-ui.review-prompt.md` (full prompt with context, the five parts and the SKILL.md inside), 2026-11-24. To paste into Gemini, ChatGPT and Copilot. Regenerated after the Gemini/Copilot triage (current SKILL.md embedded, answered points listed). Second round on the revised text is for Jakob to start.
