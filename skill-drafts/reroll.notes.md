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
- Not tested: `different`, a count of 2 or 3, a named model, the clipboard route outside the desktop app, description triggering. Not checked: whether `different` really gives other ideas.

## Open before release (checklist sections 1 to 8)
- Name not checked against the web (`/reroll`).
- Blind agent review and the other reviews, one full test round per tool the card will name.
- Card text: say that the separate-session route works only in the Claude Code desktop app.
- Jakob's OK.

## Ideas for later (from IDEEN.md F)
- Compare or merge the answers afterwards (only after both exist, otherwise the blindness is gone).
- Reroll with another vendor's model (needs to start an external program, much more effort).
