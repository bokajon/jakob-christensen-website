I am about to publish the agent skill below under my own name on my personal website, as a free download. Review it like a strict senior reviewer before release. Open the sources listed here yourself and cite the exact file or page for every comparison or factual claim. If you cannot open a source, say so instead of answering from memory.

Context
- Skill: unrobot. What it does: rewrites text so it carries no marks of machine writing (inflated significance, brochure tone, vague attribution, "not X, but Y", dramatic one-line closers, em dashes, bold-label bullets, chatbot leftovers). Input is pasted text, files, a folder or a site. It has a rewrite mode and a check-only mode. A bundled Python scanner (`scripts/check_ai_signs.py`) finds the word and phrase patterns; the rest is judged by reading against `references/signs.md`.
- It must work in: Claude Code, Codex and Cursor.
- Origin: the sign catalogue and the ideas build on Wikipedia "Signs of AI writing" (WikiProject AI Cleanup), blader/humanizer v4.0.0 (MIT) and BooleSystems/BooleOS de-ai-writing (MIT). The wording is new: I rewrote it on 2026-11-24, and a 6-word-run overlap check afterwards found at most about 4 % per file and source, the rest only watch-word lists, sign titles and headings. The scanner script was written by Claude in my own sessions; only its sign word lists come from the catalogue. Part 1 is there to catch anything that slipped in from other people's skills anyway.
- Decided by me. Do not argue these, but flag one if it makes the skill unsafe or broken: no dash as punctuation by default (an em dash or a spaced en dash used as a break is a sign; the author's own writing sample, meaning a different text by the same author, overrides this); the skill is model-invoked (no disable-model-invocation); the scanner stays a bundled script, English only, and a non-English text is handled by reading plus a note in the report; no mandatory `git status` check and no `.unrobot.<ext>` side copies; no fixed list of note-file names to read (CLAUDE.md or AGENTS.md and the files they name are enough) and no `git log -S` rule; no page priority list for long inputs and no definition of "strongest sign"; the skill never loops until the scanner shows zero (one rewrite pass, one re-scan); the name unrobot stays.
- Already answered in an earlier review round, do not raise again unless the new text brings the problem back: a fresh Sonnet agent read the public SKILL.md blind on 2026-11-24 and found 15 points. All were applied in my own words, points 4 and 10 in a shortened form. The verdict per point is in `skill-drafts/unrobot.notes.md`, section "Blind read 2026-11-24". In short: (1) check-only mode added; (2) "done" no longer means zero scanner hits, it means every remaining hit is judged clean or kept on purpose and named in the report; (3) emails and letters to a real recipient keep ordinary courtesy and real requests; (4) output rule for pasted text, in-place edits only on request, generated-only input leads to the source or a stop; (5, 13) wording fixed on purpose is checked only in a repo, doubts collected into one question; (6) dash rule made precise; (7) site headings that are anchors, nav labels, page titles or buttons keep their wording; (8) scanner stops with exit 2 on a folder or missing file, JSX/TSX/JSON false alarms, stdin, python fallback; (9) non-English text; (10) long inputs use `--summary`, file by file; (11) thresholds pointed to; (12) no claim is deleted, a vague one is flagged; (14) eye-check list; (15) report counts scanner hits and names judgement signs "by reading". Rejected in that round: a mandatory `git status` check, `.unrobot.<ext>` side copies, a fixed list of note-file names, a `git log -S` rule, a page priority list, a definition of "strongest".
- Known from my own checks: the scanner was run on a German text (0 hits, so it is English only) and on a JSX file (a `className="vibrant"` prop is a hit, a known false alarm). Not yet tested: the full rewrite flow on real sites, the check-only mode, Codex and Cursor.

Sources
- Agent Skills specification: https://agentskills.io/specification
- Anthropic, Skill authoring best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Anthropic's public skills: https://github.com/anthropics/skills (folder skills/)
- Matt Pocock's skills: https://github.com/mattpocock/skills (every folder under skills/, including deprecated, in-progress and misc)
- OpenAI's Codex skills catalog: https://github.com/openai/skills (marked deprecated, still readable)
- Tool docs: Claude Code https://code.claude.com/docs/en/skills, Codex https://learn.chatgpt.com/docs/build-skills, Cursor https://cursor.com/docs/skills
- Possible overlaps to read: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing, https://github.com/blader/humanizer, https://github.com/BooleSystems/BooleOS (skill de-ai-writing)

Do all five parts:
1. Origin and overlap. Name every skill in those repositories that does the same job or a large part of it. Quote overlapping sentences side by side, for SKILL.md and references/signs.md. Flag any sentence of mine that looks copied or closely paraphrased, and any sign title or watch-word list that is more than a plain list of facts from the Wikipedia page. Say what mine does that those do not, or say plainly that it adds nothing.
2. Professional standard. Check against the specification and the best-practices page: frontmatter fields and limits; whether the description says what the skill does and when to use it, so an agent picks it at the right moment and not otherwise (for example when someone only asks for proofreading or translation); whether each step says what to do rather than what to avoid; length and what should move into a separate file; sentences that change nothing because a current model does that anyway; vague words an agent cannot act on.
3. Agent behaviour. Walk through the skill as the agent running it, step by step, on four inputs: a pasted blog paragraph, an email to a client, a folder of 30 HTML or JSX files, and a request "check our copy before launch". Where would it misread, skip a step, loop, stop too early, or ask the user something it could find out itself? Which common case is missing? Also read the scanner: do its patterns, exit codes and input handling match what SKILL.md promises?
4. Safety and tool claims. Anything it allows without asking that changes files outside the text the user named, rewrites quotations, legal text or facts, runs code, or touches generated output. For every claim about how a tool behaves or about Python availability: confirmed by that tool's own docs (cite) or unverified.
5. Worth. Would an experienced user of these tools install it, or is it redundant with a built-in feature, a plain prompt or an existing skill (humanizer, de-ai-writing)? One honest paragraph.

Answer format: one table with the columns ID (P1, P2, ...), Part (1-5), Exact sentence (quoted, or "missing"), Problem, Proposed rewrite (full text, ready to paste), Source (URL plus file or section, or "none"), Confidence (high, medium, low). Then the paragraph for part 5. No praise, no summary, no rewrite of the whole skill.

--- Files (paste starts here; each file is inside its own code block, SKILL.md first, then references/signs.md, then scripts/check_ai_signs.py) ---

SKILL.md


````markdown
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
````

references/signs.md

````markdown
# Signs of AI writing: catalogue and fixes

This catalogue follows the Wikipedia list of AI-writing signs and arranges each entry for the editor: how it shows up, which words to watch, what a person would write instead. Wikipedia-markup signs are omitted. Section 6 adds further prose tics from blader/humanizer and from reviewing game and web text.

## 1. Content

**1.1 Undue significance and legacy.** A plain fact gets an extra sentence explaining its importance. Watch: testament, indelible mark, stands/serves as, reminder, setting the stage, focal point, pivotal/crucial/vital/key role or moment, underscores, reflects broader, enduring/lasting, evolving landscape, key turning point. Fix: cut that sentence, or swap in a concrete fact.
Before: "The harbour crane went up in 1962, a defining moment for local shipping." After: "The harbour crane was installed in 1962. It lifted 40 tonnes, twice what the old one managed."

**1.2 Canned notability.** Importance argued through a list of press mentions: featured in, profiled in, independent coverage, active social media presence. Fix: state what the subject is or did.

**1.3 Superficial -ing analysis.** A trailing participle phrase that comments and tells nothing: ", highlighting its importance", ", ensuring", ", reflecting", symbolising, fostering, showcasing, valuable insights. Fix: drop the phrase, or give it its own sentence backed by evidence.
Before: "The bakery opens at five, showcasing its commitment to early risers." After: "The bakery opens at five."

**1.4 Promotional tone.** Brochure vocabulary. Watch: stunning, breathtaking, world-class, renowned, groundbreaking, seamless, vibrant, profound, boasts, rich (heritage), diverse array, state-of-the-art, in the heart of, nestled. Fix: give the fact that would justify the adjective, or leave the adjective out.

**1.5 Vague attribution.** Authority without a name: experts say, observers note, industry reports, studies show, widely regarded, several sources (when it is one or two). Fix: name the source, or keep the bare claim and flag it in the report.

**1.6 Challenges formula.** A template of "Despite its X, it faces challenges... Despite these challenges, it continues to thrive." Fix: describe the real problem once, where it belongs, without the upbeat ending.

**1.7 Title-defining lead.** An opening that defines the subject's own name: "X refers to...". Fix: begin with what the subject is or does.

**1.8 Paired headings.** Two-part headings like "Awards and recognition". Keep a heading only when the section needs one.

## 2. Language and grammar

**2.1 AI vocabulary.** A word or two is normal; several close together is a strong tell. Watch: delve, tapestry, intricate, meticulous, pivotal, vibrant, crucial, additionally (opening a sentence), align with, bolstered, emphasising, enduring, enhance, fostering, garner, highlighting, interplay, showcasing, testament, underscore, valuable, key (adjective), landscape (abstract). Fix: the everyday word, or nothing. A bare synonym swap is no fix.

**2.2 Copula avoidance.** A fancy verb where "is" or "has" would do: serves as, stands as, functions as, represents, boasts/features/offers/maintains (meaning "has"), "began his career as". Fix: is, are, has.

**2.3 Vague association.** "associated with" or "in connection with" when the actual relation is known. Fix: state the relation.

**2.4 Negative parallelism.** Framing a point against its denial: "Not X, but Y", "It's not just X, it's Y", "Not only... but also", "No X, no Y, just Z", plus a "rather than" used too often. Fix: make the positive claim once. Keep a contrast only if readers would truly assume the opposite.
Before: "The recipe isn't about speed, it's about patience." After: "The recipe needs patience."

**2.5 Rule of three.** Triplets added for rhythm: "fast, reliable and secure". Fix: keep the one that is true and specific, or two real ones.

**2.6 Elegant variation.** A fresh synonym each time one noun recurs (the author, the novelist, the wordsmith). Fix: reuse the noun or a pronoun.

## 3. Style and formatting

**3.1 Title Case headings.** Sentence case is the default, unless house style says else.
**3.2 Boldface everywhere.** No bold in body prose, at most a term where it is defined.
**3.3 Bold-label bullets.** "**Speed:** The tool runs..." Turn them into prose, a plain list or a proper table.
**3.4 Em dash overuse.** Recast with a comma, colon, parentheses or full stop. An en dash is no substitute, and a spaced en dash used as a break is a sign too. Ranges (2020-2024), quotations, titles, URLs and code stay. (This skill uses no dash as punctuation at all, unless the author's own sample does.)
**3.5 Emoji as formatting.** Strip them from headings and bullets.
**3.6 Tiny tables.** A table of two or three rows that a sentence serves better.
**3.7 Mixed curly and straight quotes.** Follow the convention of the surrounding text.
**3.8 Rules between every section.** Delete them unless the format needs them.

## 4. Chat leftovers

**4.1 Collaboration talk.** "Great question", "Certainly!", "Let me know if", "I hope this helps", "Here is a...". Delete them in chat output and in text pasted from a chat reply. In an email or letter to a real recipient keep ordinary courtesy and real requests ("Let me know if Tuesday works"); remove only content-free boilerplate.
**4.2 Cutoff disclaimers and gap speculation.** "As of my last update", "not widely documented", "based on available information". If a thing is unknown, admit it once, specifically, with the reader's next step. Never fill the gap with guesses.
**4.3 Placeholders.** "[Your Name]", "INSERT_URL", "2025-XX-XX". Fill them in or remove them.

## 5. Older-model habits

**5.1 Didactic disclaimers.** "keep in mind", "worth noting", "may vary", "It's important to note". Give the fact itself: "The ferry stops running in November."
**5.2 Section summaries.** "In summary", "In conclusion", "Overall", "Ultimately". Finish on the last new piece of information.

## 6. Further prose tics

**6.1 One-line closers and dramatic fragments.** A clipped sentence attached to make the paragraph feel finished. Tic: "She leaves the lamp lit. Waiting is hard." Fix: stop on the concrete detail: "She leaves the lamp lit in the hallway."
**6.2 Sayings that sound deep.** A sweeping sentence that claims much and shows nothing. Tic: "Every road is a kind of promise." Fix: name the specific thing: "The road to the quarry was paved the year he promised to come back."
**6.3 Repeated sentence starts.** Three or more consecutive lines that begin alike ("She packs. She locks up. She leaves.") unless the repetition is the joke. Fix: merge them, or open with the object.
**6.4 Vague relation in fiction and dialogue.** "Somehow linked to the old mill." This is taste: rumours may be vague deliberately. Flag it only where the vagueness serves no purpose, and name the link.
**6.5 Staged run-up.** A drumroll before the point: "Here's the thing.", "Let's be clear:". Fix: start with the point.
**6.6 Arguing with no one.** Rebutting an objection that nobody made: "This isn't mostly about price." Fix: say what it is about. (Related to 2.4, but with no "but".)
**6.7 Stacked qualifiers** (weak alone). "might possibly be considered". Fix: a single hedge, placed where the doubt is real.
**6.8 Hyphenated pairs everywhere** (weak alone). A compound modifier hyphenated even after the noun: "The service is first-rate." Fix: "The service is excellent", or drop the hyphen.
**6.9 Hidden actor** (weak alone). A passive or missing subject where the doer matters: "Backups are made nightly." Fix: say who or what does it.
**6.10 Heading repeated in the first line.** "## Pricing" followed by "Pricing matters." Fix: open with the first real fact.
**6.11 Writing about the document.** Narrating how the text or code came about rather than the subject itself: "This section was written to replace the earlier draft." Fix: say what it covers or does.
**6.12 Re-explaining what the reader knows.** A reply that rebuilds the background before reaching the decision. Fix: decision first, background on request.

"Weak alone" signs count only in company with other signs. Informal text (chat, rants, reviews) stays unless two unrelated signs appear together; chatbot leftovers (4.1) go when the text came from a chat reply, but in emails and letters to a real recipient only content-free boilerplate goes. An author's writing sample (a different text by the same author, not the text being edited) overrides this catalogue, dashes included.

## 7. What human writing does instead

Simple is/has sentences and short everyday words: used rather than utilised, before rather than prior to, tried for attempted, moved for relocated, wrote for authored, to for in order to. Direct claims where true ("the only", "the first"), ordinary hedges ("very", "perhaps", "tends to"), and the odd particular detail in place of the generic one.

## 8. Not signs: leave these alone

Perfect grammar, casual and formal register side by side, prose that is merely formal or bland, long words as such, one lone transition word, a claim without a source, and correct formatting are all fine. Anything quoted, be it a real person's words, a title or a source, stays as written.
````

scripts/check_ai_signs.py

````python
"""Scan text for pattern-matchable signs of AI writing.

Sign numbers match references/signs.md. Only word and phrase patterns are
caught; judgement signs (rule of three, elegant variation, deep sayings,
run-ups) need a human read.

Usage:
    python -I check_ai_signs.py <file> [<file> ...] [--summary]
    python -I check_ai_signs.py -            # read stdin
Files: .txt, .md, .html (tags, scripts and styles are stripped).
Exit code: 0 if no hits, 1 if hits, 2 on usage error, a folder or a missing file
(one line on stderr, nothing is scanned).
"""
import html
import os
import re
import sys

W = r"\b"

SIGNS = {
    "1.1 undue significance": [
        r"stands as", r"serves as a (?:testament|reminder)", r"(?:is|was|remains) a testament",
        r"testament to", r"(?:pivotal|crucial|vital|significant|key) (?:role|moment)",
        r"underscor\w*", r"reflects? (?:the )?broader", r"enduring legacy", r"lasting legacy",
        r"setting the stage", r"turning point", r"evolving landscape", r"focal point",
        r"indelible mark", r"deeply rooted", r"marking a", r"shaping the",
    ],
    "1.2 canned notability": [
        r"independent coverage", r"(?:local|national) media outlets", r"trade publications",
        r"(?:featured|profiled) in", r"active social media presence",
    ],
    "1.3 superficial -ing analysis": [
        r",\s+(?:highlighting|underscoring|emphasi[sz]ing|ensuring|reflecting|symboli[sz]ing|"
        r"contributing to|cultivating|fostering|encompassing|enhancing|showcasing)\b",
        r"valuable insights?", r"resonates? with", r"aligns? with",
    ],
    "1.4 promotional tone": [
        r"boasts?", r"vibrant", r"rich (?:cultural |)(?:culture|heritage|history|tapestry)",
        r"nestled", r"in the heart of", r"groundbreaking", r"renowned", r"diverse array",
        r"breathtaking", r"stunning", r"world-class", r"seamless(?:ly)?", r"state-of-the-art",
        r"natural beauty", r"commitment to", r"exemplif\w+",
    ],
    "1.5 vague attribution": [
        r"experts (?:say|argue|believe|agree)", r"observers (?:have )?(?:noted|cited|note)",
        r"industry reports", r"studies (?:show|suggest)", r"widely regarded",
        r"some critics argue", r"many believe",
    ],
    "1.6 challenges formula": [r"despite (?:these|its|the) challenges", r"faces (?:several |many )?challenges"],
    "1.7 title-defining lead": [r"^\s*[\w\s]{1,40} refers to"],
    "2.1 AI vocabulary": [
        r"^additionally", r"(?<=[.!?]\s)additionally", r"bolster\w*", r"crucial", r"delv\w+",
        r"garner\w*", r"intricac\w+", r"intricate", r"interplay", r"meticulous\w*", r"pivotal",
        r"tapestry", r"enhanc\w+", r"foster\w*", r"robust", r"landscape", r"showcas\w+",
        r"leverag\w+", r"realm", r"embark\w*", r"navigat\w+ the",
    ],
    "2.2 copula avoidance": [
        r"serves as", r"functions as", r"operates as", r"stands as", r"began (?:his|her|their) career as",
    ],
    "2.3 vague association": [r"(?:is|was|were|are) associated with", r"in connection with"],
    "2.4 negative parallelism": [
        r"not only\b.{0,80}\bbut", r"(?:it'?s|it is|this is|this isn'?t|isn'?t|is not|it'?s not|it is not|this is not) (?:just|merely|simply|only) ",
        r"\bnot\b[^.!?]{1,40}, but\b", r"\bno \w+, no \w+, just\b", r"rather than",
    ],
    "3.4 em/en dash": [r"\u2014", r"\s\u2013\s", r"\s--\s"],
    "3.5 emoji": [r"[\U0001F300-\U0001FAFF\u2600-\u27bf\u2b50\u2705]"],
    "3.7 curly quotes": [r"[\u201c\u201d\u2018\u2019]"],
    "4.1 chat leftovers": [
        r"i hope this helps", r"^certainly!", r"great question", r"let me know if",
        r"would you like me to", r"^here is (?:a|an|the) ", r"in this (?:section|article), we will",
        r"feel free to",
    ],
    "4.2 cutoff disclaimer": [
        r"as of my (?:last|latest) (?:update|knowledge)", r"not widely (?:documented|disclosed|known)",
        r"based on available information", r"maintains? a low profile", r"while specific details",
        r"not publicly available",
    ],
    "4.3 placeholder": [r"\[(?:your|insert|describe)[^\]]*\]", r"INSERT_\w+", r"\b\d{4}-XX-XX\b"],
    "5.1 didactic disclaimer": [
        r"it'?s important to (?:note|remember|consider)", r"it is important to (?:note|remember)",
        r"(?:it is|it'?s) worth noting", r"may vary", r"keep in mind",
    ],
    "5.2 section summary": [r"^(?:in summary|in conclusion|overall|ultimately|to sum up)\b"],
    "6.5 staged run-up": [
        r"here'?s (?:what|the thing|why)", r"let'?s be (?:honest|clear)", r"the truth is",
        r"let that sink in",
    ],
    "6.7 stacked qualifiers": [r"(?:could|may|might) potentially", r"potentially (?:possibly|perhaps)"],
}

COMPILED = {
    name: [re.compile(p if p.startswith(("^", "(?<=")) else W + p if p[0].isalpha() else p, re.I | re.M) for p in pats]
    for name, pats in SIGNS.items()
}


def strip_html(text):
    text = re.sub(r"(?is)<(script|style|code|pre)\b.*?</\1>", " ", text)
    text = re.sub(r"(?s)<!--.*?-->", " ", text)
    text = re.sub(r"(?i)<br\s*/?>|</(?:p|div|li|h\d|tr|section|article)>", "\n", text)
    text = re.sub(r"<[^>]+>", " ", text)
    return html.unescape(text)


def strip_markdown(text):
    text = re.sub(r"(?s)```.*?```", " ", text)
    text = re.sub(r"`[^`]*`", " ", text)
    text = re.sub(r"(?s)\A---\n.*?\n---\n", "", text)  # front matter
    return text


def sentences(text):
    for line_no, line in enumerate(text.splitlines(), 1):
        line = line.strip()
        if not line:
            continue
        for s in re.split(r"(?<=[.!?])\s+(?=[A-Z\"'\u201c])", line):
            if s.strip():
                yield line_no, s.strip()


def scan(text):
    hits = []
    for line_no, s in sentences(text):
        for name, pats in COMPILED.items():
            for p in pats:
                m = p.search(s)
                if m:
                    hits.append((name, line_no, m.group(0), s))
                    break
    return hits


def load(path):
    if path == "-":
        return sys.stdin.read()
    with open(path, encoding="utf-8", errors="replace") as f:
        raw = f.read()
    low = path.lower()
    if low.endswith((".html", ".htm")):
        return strip_html(raw)
    if low.endswith((".md", ".markdown")):
        return strip_markdown(raw)
    return raw


def main(argv):
    summary = "--summary" in argv
    paths = [a for a in argv if a != "--summary"]
    if not paths:
        print(__doc__)
        return 2
    for path in paths:
        if path != "-" and not os.path.isfile(path):
            kind = "is a folder, pass its files as arguments" if os.path.isdir(path) else "not found"
            print(f"check_ai_signs: {path} {kind}", file=sys.stderr)
            return 2
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except AttributeError:
        pass
    total = 0
    for path in paths:
        hits = scan(load(path))
        total += len(hits)
        print(f"== {path}: {len(hits)} hit(s)")
        by_sign = {}
        for h in hits:
            by_sign.setdefault(h[0], []).append(h)
        for name in SIGNS:
            if name not in by_sign:
                continue
            print(f"  [{name}] {len(by_sign[name])}")
            if summary:
                continue
            for _, line_no, match, s in by_sign[name]:
                snippet = s if len(s) <= 160 else s[:157] + "..."
                print(f"    line {line_no} '{match}': {snippet}")
    print(f"Total: {total}")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
````
