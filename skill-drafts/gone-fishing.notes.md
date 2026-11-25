# gone-fishing - draft notes

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
- Not tested: the public English wording as a whole, keep-awake, notification, checkpoint via a fresh session, a real integrate script, reliability over hours, comparison against a run without the skill, Codex and Cursor.

## Open before release (checklist sections 1 to 8)
- Origin check (section 1.3): web search for distinctive sentences not done in this draft. Name search so far: only the skills.sh API on 2026-11-25 (0 hits, not proof).
- Blind agent review, Gemini and Copilot reviews (ChatGPT is out), one full test round on the public text.
- Card text and the licence line are done only as far as `license: MIT` is in the frontmatter. The card in `public/index.html` and `public/agent-skills/` are NOT touched.
- Jakob's OK and his word "veröffentlichen".

## Suggestion for the card (not applied)
- Group and position per FAKTEN.md: new drafts go at the back of the group they fit. Away-mode work fits **Handlers** best (with /cheap-agents, /fresh, /lanes, /now-and-then, all about how sessions run), so suggested: last item in Handlers, after /now-and-then. Jakob decides.

## Open points for Jakob
- The four report colours (🟠 🔴 🟡 🟢) are Claude's proposal and not confirmed by him; the public text states them as fact.
- The skill commits and integrates "as the project's Git rules say": in a project without such rules it only commits. The text does not forbid a push, but section 3 lists push as skipped.
