# unrobot - draft notes

## Sources read
- Private skill `~/.claude/skills/unrobot/` (rewritten in new wording on 2026-11-24, backup of the old text outside the repo). Its ideas come from Wikipedia "Signs of AI writing" (WikiProject AI Cleanup, CC BY-SA 4.0), blader/humanizer v4.0.0 (MIT, Siqi Chen), BooleSystems/BooleOS de-ai-writing (MIT, TheShannonDev, commit 0fa5933, 2026-09-26) and a private game-text check. The scanner script was written in a session of the author on 2026-11-23; only its sign word lists come from the catalogue.

## Origin check (checklist section 1)
Verbatim overlap measured with shared 6-word runs, 2026-11-24. Before the rewrite: private signs.md 32 % from BooleOS de-ai-writing (longest run 40 words), 4 % from humanizer; SKILL.md 18 % from BooleOS; 0 % from Wikipedia. After the rewrite: at most 4 % per file and source, the rest only watch-word lists, sign titles, headings, the Wikipedia title and URL; longest run 11 words (heading plus sign title). All example sentences are new.

## Changed from the private copy
- `scripts/check_ai_signs.py`: byte for byte, only line endings changed to LF.
- SKILL.md description: private names removed ("Jakob's text-check", "Jakob says"), `check_skill.py` flags private names.
- SKILL.md step 2: scanner called by "<full path to scripts/check_ai_signs.py>" instead of a home path (`check_skill.py` flags home paths); one sentence added saying where the scanner is and that it needs Python 3.
- SKILL.md step 3, settled wording: "facts file (such as `FAKTEN.md`)" became "the project's notes or facts file" (private file name).
- SKILL.md step 3, dashes: no longer "Jakob's global rule"; the rule now yields to the author's own writing sample.
- SKILL.md project overlays: the NiagaraUI `text-check` example became a generic game-project example (private project name).
- SKILL.md sources: the NiagaraUI `text-check` skill removed from the list (private).
- `references/signs.md` intro: section 6 now credits blader/humanizer and reviewing game and web text instead of "text-check".
- `references/signs.md` heading 6: "Further prose tics" (no private name).
- `references/signs.md` sign 3.4: personal rule replaced by "This skill uses no dash as punctuation at all, unless the author's own sample does."
- `references/signs.md` closing paragraph: the personal no-dash exception removed, so the writing sample overrides the catalogue, dashes included.

## Invocation: model-invoked
The description names the triggers: de-AI, humanise, "less robotic", checking for AI tells before publishing, and "sounds like AI".

## Tested
- `check_skill.py`: OK (exit 0). Three hints only: links to check by hand (Wikipedia, blader/humanizer, BooleOS).
- Scanner run on the draft SKILL.md with `--summary`: ran without error.

Not yet: blind review, Gemini and Copilot reviews, test round, Netz-Abgleich.
