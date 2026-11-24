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
