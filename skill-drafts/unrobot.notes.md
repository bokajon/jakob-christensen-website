# unrobot - draft notes

## Sources read
- Private skill `~/.claude/skills/unrobot/` (rewritten in new wording on 2026-11-24, backup of the old text outside the repo). Its ideas come from Wikipedia "Signs of AI writing" (WikiProject AI Cleanup, CC BY-SA 4.0), blader/humanizer v4.0.0 (MIT, Siqi Chen), BooleSystems/BooleOS de-ai-writing (MIT, TheShannonDev, commit 0fa5933, 2026-09-26) and a private game-text check. The scanner script was written in a session of the author on 2026-11-23; only its sign word lists come from the catalogue.

## Origin check (checklist section 1)
Verbatim overlap measured with shared 6-word runs, 2026-11-24. Before the rewrite: private signs.md 32 % from BooleOS de-ai-writing (longest run 40 words), 4 % from humanizer; SKILL.md 18 % from BooleOS; 0 % from Wikipedia. After the rewrite: at most 4 % per file and source, the rest only watch-word lists, sign titles, headings, the Wikipedia title and URL; longest run 11 words (heading plus sign title). All example sentences are new.

## Changed from the private copy
- `scripts/check_ai_signs.py`: byte for byte, only line endings changed to LF (later changed by the blind-read batch, see below).
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

## Blind read 2026-11-24
A fresh Sonnet agent read the public draft blind and found 15 points. Verdicts, applied in the same commit to the draft and both private copies (2026-11-24). Scanner cases marked "reproduced" were run with the draft script.
1. No check-only mode: accepted. New "Mode" section: a check request runs steps 1, 2, 5, changes no file, lists each hit with file, line, sign and a proposed replacement; unclear requests get the report plus an offer to rewrite.
2. "Done means: no marked sign left" unreachable (reproduced: curly quotes in a quotation hit 3.7, "rather than" hits 2.4): accepted. Done now means every remaining hit is judged clean or kept on purpose and named; one pass, one re-scan, no loop to zero; exit 1 only means hits.
3. 4.1 deletes real requests in emails: accepted. Emails and letters to a real recipient keep courtesy and real requests, only content-free boilerplate goes; 4.1 always goes for pasted chat replies. Changed in signs.md 4.1 and the closing paragraph of section 6.
4. Output rule: accepted in part. Pasted text gets the full rewrite in the reply, no file; files edited in place only on request; generated-only input: find the source by a distinctive sentence, else report and stop. Rejected: mandatory `git status` check, `.unrobot.<ext>` side copies.
5 and 13. Wording fixed on purpose and overlays: accepted. Only in a repo; read CLAUDE.md or AGENTS.md and the notes or facts files they name; skip for pasted text; one collected question at the end. Rejected: fixed list of file names, `git log -S` rule.
6. Dash rule ambiguous: accepted. A sign is an em dash or a spaced en dash used as a break; ranges, quotations, titles, URLs and code stay; "writing sample" means a different text by the same author. The scanner's 3.4 pattern already left unspaced ranges alone, only the text was unclear.
7. Format vs structure fixes: accepted. In a site or app, anchor targets, nav labels, page titles and buttons keep their wording; structure changes only in prose documents handed over, else reported.
8. Scanner inputs (reproduced: a folder and a missing file raised tracebacks with exit 1, same as "hits"; JSX `className="vibrant"` is a hit): accepted. Script: a folder or missing file prints one line on stderr and exits 2. SKILL.md: pass files as arguments, JSX/TSX/JSON false alarms, stdin or temp file for pasted text, `python3` or `py -3` fallback, scan by eye without Python.
9. Non-English (reproduced: German text, 0 hits): accepted. Scanner is English only; apply structural signs by reading, say so in the report, a zero means nothing checked.
10. Long input: accepted, shortened. From about 10 files run `--summary`, go file by file by hit count, name untouched files. "Strongest first" removed. Rejected: page priority list, definition of "strongest".
11. Thresholds: accepted. Step 2 points to the thresholds at the end of signs.md section 6.
12. "Each claim survives" vs 1.5 "or delete it": accepted. 1.5 now says name the source or keep the bare claim and flag it; step 3 says never delete a vague claim.
14. Eye-check list: accepted. Scanner sees 2.4, 3.4, 6.5, 6.7 (of the signs named); by eye 2.5, 2.6, 3.2, 3.3, 6.1, 6.2, 6.3, 6.6.
15. Report counts: accepted. Scanner hits before and after; judgement signs fixed listed by number, labelled "by reading".

## External reviews 2026-11-24 (Gemini G, Copilot C)

Triaged by Jakob's choice "Batch 12 Punkte". Applied in my words, checked with fixtures:
- C6, C7, G3: step 4 is one rhythm pass, fix catalogue signs in it, then stop (no "read aloud", no loop).
- C5, G2: description says not for proofreading, grammar, translation or tone changes unless AI tells are the concern (description 667 characters).
- C8: in a repo, find the copy files yourself before asking for paths.
- C10, G11: scanner does not parse JSX, TSX or JSON; `--summary` counts can be inflated; JSON keys are code.
- C17, C18: python order "python, python3, py -3" (availability on other tools: not checked).
- G4: "10 files up"; report lists 0-hit and skipped files.
- G5: step 5 has a rewrite-mode and a check-only-mode report.
- G6: stripped blocks keep their newlines, so line numbers stay true (fixture: fenced block, hit on line 8 reported as line 8).
- G7: 3.7 is now a file-level check: only mixed straight and curly quotes hit (fixtures: mixed = 1 hit, all curly = 0).
- G8: 6.7 matches "might possibly" (fixture).
- G9: 1.7 only on the first sentence of a text (fixture: "This flag refers to the cache." on line 2 gives no hit).
- G10: " -- " named in the dash rule and in signs.md 3.4 (fixture: hit).
- G12: temp file for pasted text is deleted afterwards.

Answered, nothing changed: C4 (SKILL.md is workflow only), C9 (`--summary` already prints per-file counts), C11, C12, C13 and Copilot P11-P13 (paste artifacts), C14, C15, C16 (legal text is never altered, stated already), C20, G13 and G14 (not checked), C2, C3, G1 (origin: measured overlap about 4 % per file and source, see "Origin check"). C1 and C19 left to Jakob, not chosen.

## External reviews round 3, 2026-11-24 (Copilot C, Gemini G on the rebuilt prompt)

Applied (Jakob chose "Batch 7 Punkte"), each reproduced with a fixture first:
- G5: patterns starting with a group had no word boundary ("visits only", "monkey role", "unfeatured in" matched); fixed, fixture gives 0 hits.
- G6: "rather than" is no longer scanned per sentence (signs.md 2.4 means overuse); left to the reading pass.
- G7: 1.7 skipped Markdown files with a title; now checked on the first sentence that is not a heading.
- G8: stdin text now goes through the Markdown stripper (fenced code gave false hits).
- G2, C-P8: step 2 names what "shape of the paragraphs" means (repeated starts, uniform lengths, one-line closers).
- G3: step 4 rhythm pass also fixes any remaining catalogue sign.
- G10, C-P10, C-P11: 0-hit files stated as read or not read; check-only on 10+ files gives the summary table plus the five worst files; one search pass for copy files, then report and stop.
- C-P9: a bare "check" request without AI wording gets a one-line scope note.

Not applied: G4 (a "syntax error" in the script), C-P13, C-P14, C-P15 (paste artifacts: the script compiles and runs); G9 CRLF frontmatter (not reproduced, a CRLF fixture with front matter gives 0 hits); G11 (git history as evidence: contradicts the decided no-`git log` rule); C-P5 (description 667 characters, already excludes proofreading), C-P6, C-P7, C-P12, C-P16, C-P17 (no problem shown or already stated); C-P18 and G12 (Python availability: not checked, fallback already in step 3); C-P19 (compatibility field: not checked against the spec); C-P1 to C-P4, C-P20, G1 (the reviewer could not open the sources; origin answered by the measured overlap).

## Invocation: model-invoked
The description names the triggers: de-AI, humanise, "less robotic", checking for AI tells before publishing, and "sounds like AI".

## Tested
- `check_skill.py`: OK (exit 0). Three hints only: links to check by hand (Wikipedia, blader/humanizer, BooleOS).
- Scanner run on the draft SKILL.md with `--summary`: ran without error. After the blind-read batch: folder and missing file give one line and exit 2, hits give 1, stdin works; the three script copies are identical after line-ending normalisation.
- Blind read by a fresh Sonnet agent: done, see above.

- Gemini and Copilot batch: folder and missing file exit 2, hits exit 1, SKILL.md scan 2 hits (both are the skill quoting signs), `check_skill.py` OK; the three script copies identical after line-ending normalisation.

Not yet: second review round (the review prompt still embeds the pre-batch SKILL.md, signs.md and script and must be rebuilt first), test round, Netz-Abgleich.
