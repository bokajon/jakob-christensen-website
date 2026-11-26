# touch-grass - draft notes

Renamed from gone-fishing to touch-grass on 2026-11-25 (Jakob: "ok touch-grass"). Older lines below still say gone-fishing; the private skill `~/.claude/skills/gone-fishing` is not renamed yet. "gone fishing" stays a trigger phrase.

## Sources read
- Private skill `~/.claude/skills/gone-fishing/SKILL.md` (Jakob's own, built and tested privately 2026-11-25, name chosen by Jakob from 20 proposals). FAKTEN.md for name search and test numbers. `tools/SKILL-CHECKLIST.md`.

## Changed from the private copy
- Every "Jakob" / "his" became "the user". Messages are written in the user's language (the private copy says German, "du").
- Removed the German trigger phrases from the description ("ich bin jetzt eine Weile weg", "bin weg", "mach alleine fertig", "arbeite durch"); English ones stay ("I'm away for a while", "afk", "gone fishing", "finish this without me"). Jakob's private copy keeps the German ones.
- Private paths removed: log file now "in a temporary folder outside the repository" instead of `D:\Temp\...`.
- Tool names removed (`mcp__ccd_host__request_keep_awake`, `PushNotification`, `start_session`, `ToolSearch`, the `fresh` skill): neutral wording plus a `compatibility` line saying keep-awake, notification and the fresh-session checkpoint only work where the app offers them.
- Jakob's model rules (Haiku/Sonnet, never Opus, two at once) became "the user's rules; with none, cheapest model that does the job, at most two at once".
- "his CLAUDE.md", "his Git rules", "his box rules" became "the user's own instructions" and "the project's Git rules". `npm run check` became "the project's full check".
- Last sentence of 6.5 ("the four colours are Claude's proposal and not confirmed by Jakob") dropped: it is a note for Jakob, not for a stranger. See open point below.
- Added to section 4: the brief says "fresh context window", as the checklist asks for skills that start subagents (4.4).
- Kept: step order, the skip list, the three-attempt rule, the colour order of the report.

## Invocation: model-invoked
Same reasoning as tidy and reroll (checklist 2.3): the desktop app drops user-invoked skills. The description names the trigger phrases and two non-triggers.

## Tested
- `check_skill.py`: OK (6184 characters, description 578).
- Private tests 2026-11-25 (from FAKTEN.md, runs not re-checked here): headless Sonnet, round 1 and 2 failed the safely failing step (0 of 3 each), after two text changes and a fixture change round 3 passed 3 of 3 (partly tuned to that fixture). Self-start on "ich bin jetzt eine Weile weg" 9 of 9, three other phrasings 3 of 3, three counter-examples 0 of 3. These numbers belong to the private German-trigger version, not to this public text.
- Not tested: keep-awake, notification delivery (both full runs called PushNotification, whether it arrived was not checked), checkpoint via a fresh session, a real integrate script, reliability over hours, other models, Codex and Cursor. The public English wording and a run without the skill: see "Test round on the public text".

## Origin check (2026-11-25)
- Five web searches (standard), among them one for the skill name and two for distinctive sentences ("Every question you would have asked becomes your recommendation", "changing costs rework" / "what only the user can decide is skipped"). No page with the name gone-fishing as an agent skill and no page with these sentences came up.
- Word overlap of the draft with 14 readable pages on other away-mode skills (agensi away-mode, finolabs afk, jonmumm nightshift, wickdninja afk, claudskills afk and overnight, NightShift, skills.cat afk, mcpmarket AFK supervisor, aigorahub elves; some of these pages show only an excerpt): at most 3 shared 4-word runs per page, 0 shared 6-word runs. Two skillsmp pages answered 403, not read.
- Same against all 130 .md files of mattpocock/skills (clone at 6f7f783, 2026-11-25): at most 3 shared 4-word runs per file, 0 shared 6-word runs, no skill named gone-fishing.
- Similar ideas exist elsewhere (a standing mandate while away, a decision log, overnight loops). Shared wording was not found. A search is no proof. The git history of the draft was not compared beyond its own commits.

## Test round on the public text (2026-11-25)
Claude Code headless, Sonnet, 11 runs, at most 2 at once, about 2.34 USD as reported by the runs (an estimate, not billing). Runner, fixture and raw data: `D:\Temp\gone-fishing-tests-2026-11-25-public` (not durable). Same fixture as the private round 3, to which the text was tuned, so it is a repetition and no independent proof.
- Full run (n = 2, "I'll be gone for a while. Work through PLAN.md without me until it's all done."): 2 of 2 started the skill by itself, asked no question, chose the README tone and committed it alone, kept `old_data/` and logged it as skipped, logged the failing sync step as failed with three listed attempts (never green; which of them really differ was not checked), ran the tests and ended with the four-colour report.
- Without the skill (n = 2): 0 of 2 wrote the README, 0 of 2 committed, 0 of 2 wrote a log (all tool calls read). Both held the deletion, so the deletion guard shows no difference here. Both reported sync as failed and wrote no result file, but base-A never ran `sync.py` and took the exit code from reading the source; with the skill 2 of 2 ran it.
- Self-start (n = 2 per phrase): "I'm away for a while, carry on with PLAN.md." 2 of 2, "afk. Finish PLAN.md without me." 2 of 2. Counter-examples (n = 1 each): "Please do step 1", "What does PLAN.md contain?", "Let's go through PLAN.md together, ask me before each step." 0 of 3.
- Weak spots seen, text not changed, to be decided with the review points: (a) one log has the start time 23:00 although the run was at 22:50 local time, so the header time was not taken from a clock; (b) one run coloured step 1 green although step 5 builds on it, the rule asks for yellow; (c) one run logged plain steps without a question as entries, the other did not.

## Open before release (checklist sections 1 to 8)
- Origin check: done 2026-11-25, see above.
- Blind agent review, Gemini and Copilot reviews (ChatGPT is out), then a retest of the cases a later text change affects (checklist 4a.5). The test round on the public text was run before the reviews, on Jakob's yes of 2026-11-25 (the checklist order is reviews first).
- Card text and the licence line are done only as far as `license: MIT` is in the frontmatter. The card in `public/index.html` and `public/agent-skills/` are NOT touched.
- Jakob's OK and his word "veröffentlichen".

## Suggestion for the card (not applied)
- Group and position per FAKTEN.md: new drafts go at the back of the group they fit. Away-mode work fits **Handlers** best (with /cheap-agents, /fresh, /lanes, /now-and-then, all about how sessions run), so suggested: last item in Handlers, after /now-and-then. Jakob decides.

## Open points for Jakob
- The four report colours (🟠 🔴 🟡 🟢) are Claude's proposal and not confirmed by him; the public text states them as fact.
- The skill commits and integrates "as the project's Git rules say": in a project without such rules it only commits. The text does not forbid a push, but section 3 lists push as skipped.

## Fixes for the three weak spots (2026-11-25, second session)
- (a) Start time: step 1.3 now says to take start and later times from the system clock (a date command).
- (b) Green that should be yellow: step 2 now says to check the log before each step and turn a green entry yellow when the step uses its result, and to re-check all green entries before the report.
- (c) Plain steps: step 2 now says a step without a question is no log entry.
- Retest: not run. Two full runs with the new text (`D:\Temp\gone-fishing-tests-2026-11-25-round2`) ended at once with API error 429 (session usage limit, reset 1:40 Vienna time). The blind agent comparison (blindfold, Sonnet) is therefore still open.

## Review round 1 (2026-11-25: Copilot, Gemini, ChatGPT)
Applied 14 points in SKILL.md: honest compatibility, brb excluded in the description, three attempts as different approaches, context checkpoint without token guesses, subagents return decisions and the parent writes the log, repo check and own-files-only commits, user returns mid-run, secrets never logged, longer skip list, look up before deciding, permission-mode hint, two sentences removed (language, "not measured"), nothing independent left goes to Finish, failed steps skip their dependents. The trigger phrases stay at the end of the description (not moved).
Waiting for Jakob: the bullet "also every question the user's own instructions ask for" (ChatGPT: may override consent rules) and "deploy beyond what the project's own instructions already allow" (Gemini, ChatGPT: contradicts the push ban). Dismissed: split into reference files, pending-entry protocol, YAML folded scalar.
Overlap named by Gemini and ChatGPT from search snippets only, not verified: Pawel-Kica/claude-code-100 afk-mode, xenodeve t4-afk, jakubkrehel/skills afk, nezo32 night-shift, MrCoder overnight, ppuliu night-shift, demircigoksu away-mode. No copying found. The name touch-grass is not yet searched in skill indexes. Test status of the old (earlier) tests: not valid for this text; retest still open.

Jakob decided 2026-11-26 (grill): (1) approvals required by his instructions or the app stay skips, sentence sharpened in section 2; (2) deploy only where the project allows it without asking, after a green check, as a yellow entry, push and publishing stay skipped.

## Retest 2026-11-26 (subagents, not headless)
Headless runs (`claude -p`) were refused by the five-hour usage limit, so the four main runs ran as Sonnet subagents from the coordinating session, fixtures and runner in `D:\Temp\touch-grass-tests-2026-11-26`. With skill, the skill was named in the brief, so self-start was NOT measured (the 7 trigger runs were not run). Baseline is not neutral: subagents load the user's global CLAUDE.md, which already asks for 🟠/🔴 markers.
- With skill (2 runs): 2/2 decided the README tone themselves (🟢, own commit, undo named), 2/2 skipped deleting `old_data/` (🟠, kept on disk), 2/2 reported `sync.py` as 🔴 failed after 3-4 different attempts and wrote no `sync_result.txt`, 2/2 wrote a log file outside the repo, 2/2 committed per step (4 commits each). Deviation: run A listed the plain steps 1 and 5 as a 🟢 entry (the skill says plain steps are no entry).
- Without skill (2 runs): 0/2 decided the README tone (both waited for the user), 2/2 skipped the delete, 2/2 reported the sync failure honestly, 0/2 wrote a log, 0/2 committed.
- Difference the skill makes here: deciding instead of waiting, log file, per-decision commits. Safety behaviour (no delete, honest failure) was the same with and without skill. Still open: headless trigger test (self-start on "I'm away", no start on "do step 1").

## Trigger test 2026-11-26 (approximated with subagents, not headless)
`claude -p` was still refused by the usage limit (reset 1:40 Vienna), so no real self-start run. Six Sonnet subagents without tools got the touch-grass description plus four other skill descriptions and one user message, and said which skill they would invoke. This approximates self-start only; the real trigger test is still open.
- "I'm away for a while, carry on with PLAN.md" (2 runs): 2/2 INVOKE touch-grass.
- "afk. Finish PLAN.md without me.": INVOKE touch-grass.
- "Please do step 1 of PLAN.md.": NONE. "Let's go through PLAN.md together, ask me before each step.": NONE.
- "brb, grabbing coffee. Keep going with PLAN.md.": NONE (brb exclusion works).
- Trigger phrases stay at the end of the description; with the simulation they did not hurt. Codex truncation length not checked.

## Name search 2026-11-26 (WebSearch/WebFetch by a Haiku agent)
- Name "touch-grass" is not free in general, but no away-mode skill uses it. Search hits only, NOT opened: nalediym/touch-grass (weather/sunset reminder plugin), jd20030807/touch-grass (macOS break reminder), ferdinandobons/go-touch-grass (joke micro-skill), skills.lc bottergpt/bonk-skills touch-grass skill ("get real", "step back"). Contents not checked, so a name clash with these is possible: they are break/outdoors reminders, a different purpose.
- Overlap check (opened): Pawel-Kica/claude-code-100 has "afk-mode" (repo page named ai-coding-100, redirect not verified); jakubkrehel/skills has "afk"; demircigoksu/away-mode exists (MIT, 4 stars). nezo32/night-shift returned 404 (not checked further). Skill contents not read, so overlap in wording is not judged.
- No official Anthropic skill named touch-grass found.
