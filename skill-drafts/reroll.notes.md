# reroll - draft notes

## Sources read
- Private skill `~/.claude/skills/reroll/SKILL.md` (Jakob's own, built 2026-11-23, name chosen by Jakob). Already generic; the draft is a copy with the changes below.
- `skill-drafts/IDEEN.md` section F, `FAKTEN.md` (reroll is Jakob's own; skill text and messages in English).

## Changed from the private copy
- Added the `compatibility` field: the separate-session route needs the Claude Code desktop app's `start_session` tool; anywhere else the skill copies the prompt to the clipboard or prints it.
- Tool name written without the `mcp__ccd_session__` prefix, ToolSearch remark made tool-neutral.
- Home path `~/.claude/projects` replaced by "the `projects` folder of the Claude config directory" (`check_skill.py` flags home paths).
- No private words, paths or project names were in the copy. No em or en dashes.

## Invocation: model-invoked
Same reasoning as tidy (checklist 2.3): the desktop app drops user-invoked skills, and the skill's main route works only there. The description names the phrases ("reroll", "ask a fresh chat") and one non-trigger.

## Tested
- Private run 2026-11-23: handover correct, no leak of the earlier answer (from IDEEN.md F, run details not kept).
- `check_skill.py`: OK.
- Netz-Abgleich 2026-11-24: see `NETZ-ABGLEICH.md` Teil 3. No skill named reroll found; the name exists for two other skills (`buddy-reroll`, `webup-buddy-reroll`, they reroll the /buddy companion).
- Test run 2026-11-24, Claude Code desktop app, 2 real sessions started with `start_session` (`initiation: user_asked`, `context: fresh`, `use_worktree: false`, current model). Request (German, 1 message): "5 name ideas for a small bakery in the mountains, names only, each with a half sentence". The "rejected answer" was written by the testing session before the runs (Gipfelbrot, Almkruste, Huettenlaib, Sonnenseite, Die Bergbaeckerei); it was not a real earlier answer to a real user.
  - A (plain): prompt = request + footer. Handed-over text exact, 0 tool calls, 0 transcript reads, 1 turn. Names: Almrausch, Zum Steinofen, Gipfelbrot, Die Bergbaeckerin, Sennerlaib. Repeats of the earlier answer: 1 exact (Gipfelbrot), 2 close in idea (Die Bergbaeckerin, Sennerlaib).
  - B (`different`): same prompt plus the sentence that an earlier answer was rejected, content withheld. 0 tool calls, 0 transcript reads, 1 turn. Names: Gipfelbrot, Zur Steilen Kruste, Almsemmel, Bergbaeck Anni, Teig & Tal. Repeats: 1 exact (Gipfelbrot), 3 close in idea (Kruste, Alm-, Bergbaeck).
  - Both runs repeated the same name (Gipfelbrot) as the earlier answer and as each other. So `different` did not keep the rejected names out and did not give clearly more varied ideas in this run. n = 1 per case, one request, no repeat run: not a result about `different`, only a first observation.
  - The app adds a line "Shared notes folder for this group of sessions" to every started session. The footer forbids reading it, neither session did.
- Not tested: count 2 or 3, a named model, the clipboard route (Codex, Cursor, a chat app), the do-not-open file list, step 1 on a real message sequence (a "yes" or a click as the last message, a request spread over several messages, a message lost to compaction), images, description triggering.

## Review prompt
`reroll.review-prompt.md` (full prompt with context, the five parts and the SKILL.md inside), 2026-11-24. To paste into Gemini, ChatGPT and Copilot.

## Open before release (checklist sections 1 to 8)
- Name: checked 2026-11-24 (Teil 3), Jakob decides whether `reroll` stays next to the two `buddy-reroll` skills.
- Blind agent review and the other reviews (prompt is ready), then a second test round on the revised text, `different` with more than one run, and the other tools.
- Card text: say that the separate-session route works only in the Claude Code desktop app.
- Jakob's OK.

## Ideas for later (from IDEEN.md F)
- Compare or merge the answers afterwards (only after both exist, otherwise the blindness is gone).
- Reroll with another vendor's model (needs to start an external program, much more effort).

## Review round 1 (2026-11-24, Gemini + Copilot; ChatGPT out of usage)
Applied (Jakob approved 1-8): non-/reroll last message and same-message request; "probably" removed; count only on typed number (default 1 when model-invoked); clipboard via powershell.exe plus print fallback; start_session fallback to copy route; do-not-open list from own tool calls anywhere, omitted if unclear; transcript recovery limited to this session; description/compatibility in third person; background text fixed also for `different`.
Not applied: reference file for recovery, removing the why-sentence, same-chat retry, vague Copilot P9/P10. Open for Jakob: license field (no draft has one), redundancy vs /rewind.
Both reviewers could not open the GitHub folders: overlap check (part 1) still open for the blind read.
