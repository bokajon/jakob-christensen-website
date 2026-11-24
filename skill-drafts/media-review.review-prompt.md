I am about to publish the agent skill below under my own name on my personal website, as a free download. Review it like a strict senior reviewer before release. Open the sources listed here yourself and cite the exact file or page for every comparison or factual claim. If you cannot open a source, say so instead of answering from memory.

Context
- Skill: media-review. What it does: before the user sees media made by another model (images, music, voices, video) or before more money is spent on it, it turns the requirement into measurable checks, measures the actual result file instead of trusting the prompt, says up front which requirements nobody can measure by machine, and stops to ask before a paid or slow batch.
- It must work in: Claude Code, Codex and Cursor.
- Origin: written by me from my own working rules and projects (my rule that anything another model generates is checked against the requirement on the result, not the prompt). Part 1 is there to catch anything that slipped in from other people's skills anyway.
- Decided by me. Do not argue these, but flag one if it makes the skill unsafe or broken: model-invoked (no disable-model-invocation); no bundled script, no tool is promised (ffprobe or sox only as examples, Python's standard library is enough for WAV headers); the guardrail about a person's voice or likeness stays, although it goes beyond my own rule; the name media-review is kept. If one of these makes the skill unsafe or broken, say so.
- Already answered in an earlier review round, do not raise again unless the new text brings the problem back: none, first round. Test results so far (2 headless runs measured a PNG and a WAV correctly; step 2 was sharpened after 2 of 2 runs spent 4.80 USD without stopping, then 3 of 3 stopped and asked) are mine; you need not repeat them, but tell me if the text still allows a paid run without asking.

Sources
- Agent Skills specification: https://agentskills.io/specification
- Anthropic, Skill authoring best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Anthropic's public skills: https://github.com/anthropics/skills (folder skills/)
- Matt Pocock's skills: https://github.com/mattpocock/skills (every folder under skills/, including deprecated, in-progress and misc)
- OpenAI's Codex skills catalog: https://github.com/openai/skills (marked deprecated, still readable)
- Tool docs: Claude Code https://code.claude.com/docs/en/skills, Codex https://learn.chatgpt.com/docs/build-skills, Cursor https://cursor.com/docs/skills

Do all five parts:
1. Origin and overlap. Name every skill in those repositories that does the same job or a large part of it. Quote overlapping sentences side by side. Flag any sentence of mine that looks copied or closely paraphrased. Say what mine does that those do not, or say plainly that it adds nothing.
2. Professional standard. Check against the specification and the best-practices page: frontmatter fields and limits; whether the description says what the skill does and when to use it, so an agent picks it at the right moment and not otherwise; whether each step says what to do rather than what to avoid; length and what should move into a separate file; sentences that change nothing because a current model does that anyway; vague words an agent cannot act on.
3. Agent behaviour. Walk through the skill as the agent running it, step by step: where would it misread, skip a step, loop, stop too early, or ask the user something it could find out itself? Which common case is missing?
4. Safety and tool claims. Actions it allows without asking that change things outside the current project, publish work, delete or overwrite data, or cost money. For every claim about how a tool behaves: confirmed by that tool's own docs (cite) or unverified.
5. Worth. Would an experienced user of these tools install it, or is it redundant with a built-in feature or an existing skill? One honest paragraph.

Answer format: one table with the columns ID (P1, P2, ...), Part (1-5), Exact sentence (quoted, or "missing"), Problem, Proposed rewrite (full text, ready to paste), Source (URL plus file or section, or "none"), Confidence (high, medium, low). Then the paragraph for part 5. No praise, no summary, no rewrite of the whole skill.

--- SKILL.md (paste starts here) ---

---
name: media-review
description: Check media made by another model (images, music, voices, video) against the requirement before the user sees it or before more money is spent on it. Turns the requirement into measurable checks, runs them on the actual result and not on the prompt, and says up front which requirements cannot be measured. Use when you generate or receive generated assets, run a batch of generations, or are asked whether a generated result is good enough. Not for judging taste.
---

# Media review

Goal: the user sees only generated results that were checked against what they asked for, and knows before any paid run which parts nobody can check by machine. A prompt that was good says nothing about the result.

## Steps

1. **Write the requirement as checks.** From the request, list each requirement and mark it:
   - **Measurable**: a number or a rule a script or a careful look can verify (size, aspect ratio, transparent background, palette, duration, loudness, sample rate, tempo, silence at the end, language, word list spoken, file format, count of items).
   - **Judged**: needs a human ear or eye (mood, likeness, "sounds natural").
   Include the hard limits of where the asset goes (file size, dimensions, license, length).
2. **Say what cannot be measured before spending.** If a requirement is "judged", or you have no tool to measure a "measurable" one, tell the user before you start a generation run that is paid or that you expect to take more than about 5 minutes: which checks exist, which do not, and who has to listen or look. End your turn with that message and a question: start with one small sample, at what cost? Generate nothing until the user answers. An earlier "just do it" does not replace this answer, because the user did not yet know what cannot be checked.
3. **Generate a small sample first** when the run is paid or slow. Check it with step 4, then scale up.
4. **Check the result, not the prompt.** Open the produced file. Read sizes and formats from the file's own metadata. Measure audio with a tool already on the machine (for example ffprobe or sox; check that it exists, and do not install tools without asking). If none exists, mark every audio requirement "not measurable" and say so. Spoken words and language count as measurable only if a speech-to-text tool is available. Measure duration, peak and average level, clipping and silence. For images, open the file with a tool that shows it to you (for example the Read tool on a PNG) and say what you saw per requirement; if you cannot view images, mark content requirements "not measurable". Look at the image itself: do not infer content from the filename, the prompt or the model's own description of it. When you classify or sort images, read each from the image; a text search over captions is a hint, never the result you show.
5. **Compare against a known reference** where the requirement is relative (same scale as another asset, same palette, same voice). Put the reference and the result through the same measurement.
6. **Record the verdict per asset** in a small table: requirement, measured value, pass or fail, "not measurable". Rejected assets are named with the failed requirement, not silently dropped.
7. **Show the user only what passed**, plus the table, and the list of what still needs their ear or eye. Say which results are unchecked.

## Rules

- Measure, then say "passes". "Looks fine" is not a result.
- A failed generation is a finding. Do not retry endlessly: after two failures on the same requirement, report it and suggest changing the prompt, the model or the requirement.
- If the result is only available as a link or in a web UI, ask before downloading it, and do not check a thumbnail as if it were the file.
- Keep the prompt, the settings and the model name with each accepted asset, so the result can be reproduced or explained.
- If the requirement involves a person's voice or likeness, a licensed style or a protected character, say so and stop for the user's decision before generating.
- Do not describe generated content as made by a person.

## Guardrails

Never start a paid batch without saying what cannot be checked. Never present an unchecked asset as checked. Never overwrite an accepted asset with a new generation; save the new one beside it.
