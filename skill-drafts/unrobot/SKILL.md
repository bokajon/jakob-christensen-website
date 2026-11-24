---
name: unrobot
description: Turn text into prose that carries no marks of machine writing, based on the Wikipedia "Signs of AI writing" catalogue plus further prose tics (dramatic one-line closers, deep-sounding sayings, repeated sentence starts, "not X, but Y", inflated significance, brochure tone, vague attribution, em dashes, bold-label bullets, chatbot leftovers). Use when text should be de-AI'd, humanised, made "less robotic", or checked for AI tells before publishing: blog posts, web copy, emails, docs, game text, whole sites. Also use when the user says a draft sounds like AI.
---

# Unrobot

The goal is text that reads as if a person who knows the subject wrote it. The catalogue (signs, watch words, a remedy for each) is `references/signs.md`; read it once per session before the first rewrite.

Treat the signs as symptoms. A model drifts toward the commonest phrasing, and in doing so it turns concrete facts into grand, generic statements. A synonym for a flagged word only hides the symptom. Repair what the sentence does (inflating, hedging, rebutting a view nobody held), not just the word the scanner caught.

## Mode

A request to rewrite, fix or humanise runs all five steps. A request to check or review ("look over our copy before launch") runs steps 1, 2 and 5 only: it changes no file, and the report lists each hit with file, line, sign number and a proposed replacement. If it is unclear which one the user wants, give the check report first and offer the rewrite.

## Workflow

1. **Get the text.** The input may be pasted text, a file, a folder or a built site. In a codebase, edit where the copy is written (data files, templates), never generated output. If only generated output (dist, build, .next, out) is given, find the source by searching for a distinctive sentence; if none turns up, report and stop. Pasted text gets the complete rewritten text in the reply, then the report, and no file is written. Files are edited in place only when the user asked for fixes.
2. **Mark each sign** by its number from `references/signs.md`, and look at the shape of the paragraphs too. Weak signs and informal text count only under the thresholds at the end of its section 6. Run the scanner first for a baseline. It matches word and phrase patterns only, so the rest needs your own reading:
   ```bash
   python -I "<full path to scripts/check_ai_signs.py>" <files>   # .txt .md .html, "-" = stdin
   python -I "<full path to scripts/check_ai_signs.py>" <files> --summary
   ```
   The scanner is `scripts/check_ai_signs.py` next to this SKILL.md; call it by its full path. It needs Python 3 and nothing else. List the files first and pass them as arguments; a folder or a missing file stops with exit 2. Exit 1 only means hits. Pasted text goes through `-` (stdin) or a temp file outside the repo. If `python` is missing, try `python3` or `py -3`; without Python, scan by eye and say so in the report. In JSX, TSX and JSON, hits inside tags, props and code are false alarms. The scanner and its word lists are English only: in another language apply the structural signs by reading, say in the report that the scanner could not check it, and read a zero as "nothing checked". From about 10 files, run `--summary` over all of them, work file by file starting with the most hits, and name untouched files in the report. Inside a code file, touch prose only. Code, commands, paths, YAML keys, data and link targets stay as they are.
3. **Rewrite** every marked spot under these constraints:
   - Each name, number, date, link, fact and claim survives. Padding goes; facts stay. Never make up a fact to fill the hole a puffed-up phrase leaves, and never delete a vague claim (see 1.5). If a concrete detail is missing, write the plain version without it, or ask.
   - Keep the author's voice, person, spelling (UK or US), format (Markdown, HTML, JSX) and length limits (SEO title about 60 characters, meta description about 155, button labels).
   - Quotations, titles of works and legal text are never altered.
   - Wording the author fixed on purpose is off limits. Evidence is a phrase recorded in the project's notes or facts file, a commit message saying they picked or restored it, or a line they wrote back after an earlier edit. Check this only in a repo: read CLAUDE.md or AGENTS.md and the notes or facts files they name before rewriting; with pasted text skip the check. If such wording shows a sign, leave it and mention it in the report. Collect doubts into one question at the end, never one per phrase.
   - Dashes: a sign is an em dash or a spaced en dash used as a break. Use a full stop, comma, colon or " - " instead, unless the author's own writing sample (a different text by the same author, not the text being edited) uses them. Ranges (2020-2024), quotations, titles, URLs and code stay.
   - Gaps in knowledge get one concrete statement that tells the reader what to do ("Opening times aren't posted, so call first").
   - Format and structure: in a site or app, a heading that is an anchor target, nav label, page title or button keeps its wording. Change structure (headings, bold labels, tables, rules) only in prose documents the user handed over; elsewhere report it.
   - Clean sentences stay untouched (see "Not signs" in the reference).
4. **Compare and re-read.** Set the result beside the original: each fact, name, number, date, quote and ranking is present, nothing new has appeared. Scan again, then check by eye what the scanner cannot see: 2.5, 2.6, 3.2, 3.3, 6.1, 6.2, 6.3, 6.6 (it sees 2.4, 3.4, 6.5 and 6.7). Read it aloud once; a line that still sounds generated gets another pass.
5. **Report briefly.** Give scanner hits before and after, list the judgement signs you fixed by number (labelled "by reading"), add two or three before/after pairs, and whatever stayed on purpose (a quotation, a literal use of "landscape", a proper noun, wording the author settled).

Done means: every scanner hit still left is judged clean (a quotation, a literal use) or kept on purpose and named in the report; no fact lost, no fact invented. One rewrite pass and one re-scan; do not loop until the scanner shows zero.

## Project overlays

A project may layer its own rules over this skill, and the more specific rule wins. Example: a game project can run this skill over player-facing text and add its own tone rules (deadpan, one joke per line, rumours that may stay deliberately vague).

## Sources

Ideas and the sign catalogue build on Wikipedia, "Signs of AI writing" (WikiProject AI Cleanup, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), blader/humanizer v4.0.0 (https://github.com/blader/humanizer, MIT) and BooleSystems/BooleOS de-ai-writing (https://github.com/BooleSystems/BooleOS, MIT). The wording here is new.
