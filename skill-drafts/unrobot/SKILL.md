---
name: unrobot
description: Turn text into prose that carries no marks of machine writing, based on the Wikipedia "Signs of AI writing" catalogue plus further prose tics (dramatic one-line closers, deep-sounding sayings, repeated sentence starts, "not X, but Y", inflated significance, brochure tone, vague attribution, em dashes, bold-label bullets, chatbot leftovers). Use when text should be de-AI'd, humanised, made "less robotic", or checked for AI tells before publishing: blog posts, web copy, emails, docs, game text, whole sites. Also use when the user says a draft sounds like AI.
---

# Unrobot

The goal is text that reads as if a person who knows the subject wrote it. The catalogue (signs, watch words, a remedy for each) is `references/signs.md`; read it once per session before the first rewrite.

Treat the signs as symptoms. A model drifts toward the commonest phrasing, and in doing so it turns concrete facts into grand, generic statements. A synonym for a flagged word only hides the symptom. Repair what the sentence does (inflating, hedging, rebutting a view nobody held), not just the word the scanner caught.

## Workflow

1. **Get the text.** The input may be pasted text, a file, a folder or a built site. In a codebase, edit where the copy is written (data files, templates), never generated output.
2. **Mark each sign** by its number from `references/signs.md`, strongest first, and look at the shape of the paragraphs too. Run the scanner first for a baseline. It matches word and phrase patterns only, so rule of three, elegant variation, deep sayings and run-ups need your own reading:
   ```bash
   python -I "<full path to scripts/check_ai_signs.py>" <files>   # .txt .md .html, "-" = stdin
   python -I "<full path to scripts/check_ai_signs.py>" <files> --summary
   ```
   The scanner is `scripts/check_ai_signs.py` next to this SKILL.md; call it by its full path. It needs Python 3 and nothing else. Inside a code file, touch prose only. Code, commands, paths, YAML keys, data and link targets stay as they are.
3. **Rewrite** every marked spot under these constraints:
   - Each name, number, date, link, fact and claim survives. Padding goes; facts stay. Never make up a fact to fill the hole a puffed-up phrase leaves. If a concrete detail is missing, write the plain version without it, or ask.
   - Keep the author's voice, person, spelling (UK or US), format (Markdown, HTML, JSX) and length limits (SEO title about 60 characters, meta description about 155, button labels).
   - Quotations, titles of works and legal text are never altered.
   - Wording the author fixed on purpose is off limits. Evidence is a phrase recorded in the project's notes or facts file, a commit message saying they picked or restored it, or a line they wrote back after an earlier edit. Check for this before rewriting. If such wording shows a sign, leave it and mention it in the report.
   - Dashes: no em dash or en dash as punctuation, unless the author's own writing sample uses them. Use a full stop, comma, colon or " - " instead.
   - Gaps in knowledge get one concrete statement that tells the reader what to do ("Opening times aren't posted, so call first").
   - Clean sentences stay untouched (see "Not signs" in the reference).
4. **Compare and re-read.** Set the result beside the original: each fact, name, number, date, quote and ranking is present, nothing new has appeared. Scan again, then check by eye the signs that tend to survive: 2.4, 6.1, 2.5, 3.4, 3.2/3.3. Read it aloud once; a line that still sounds generated gets another pass.
5. **Report briefly.** Give sign counts before and after, two or three before/after pairs, and whatever stayed on purpose (a quotation, a literal use of "landscape", a proper noun, wording the author settled).

Done means: no marked sign left, no fact lost, no fact invented.

## Project overlays

A project may layer its own rules over this skill, and the more specific rule wins. Example: a game project can run this skill over player-facing text and add its own tone rules (deadpan, one joke per line, rumours that may stay deliberately vague).

## Sources

Ideas and the sign catalogue build on Wikipedia, "Signs of AI writing" (WikiProject AI Cleanup, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), blader/humanizer v4.0.0 (https://github.com/blader/humanizer, MIT) and BooleSystems/BooleOS de-ai-writing (https://github.com/BooleSystems/BooleOS, MIT). The wording here is new.
