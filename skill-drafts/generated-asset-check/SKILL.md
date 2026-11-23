---
name: generated-asset-check
description: Check media made by another model (images, music, voices, video) against the requirement before the user sees it or before more money is spent on it. Turns the requirement into measurable checks, runs them on the actual result and not on the prompt, and says up front which requirements cannot be measured. Use when you generate or receive generated assets, run a batch of generations, or are asked whether a generated result is good enough. Not for judging taste.
---

# Generated asset check

Goal: the user sees only generated results that were checked against what they asked for, and knows before any paid run which parts nobody can check by machine. A prompt that was good says nothing about the result.

## Steps

1. **Write the requirement as checks.** From the request, list each requirement and mark it:
   - **Measurable**: a number or a rule a script or a careful look can verify (size, aspect ratio, transparent background, palette, duration, loudness, sample rate, tempo, silence at the end, language, word list spoken, file format, count of items).
   - **Judged**: needs a human ear or eye (mood, likeness, "sounds natural").
   Include the hard limits of where the asset goes (file size, dimensions, license, length).
2. **Say what cannot be measured before spending.** If a requirement is "judged", or you have no tool to measure a "measurable" one, tell the user before you start a generation run that costs money or time: which checks exist, which do not, and who has to listen or look. Offer a small sample first. Do not start the batch on a hope.
3. **Generate a small sample first** when the run is paid or slow. Check it with step 4, then scale up.
4. **Check the result, not the prompt.** Open the produced file. Read sizes and formats from the file's own metadata. Measure audio with a tool (duration, peak and average level, clipping, silence). For images, look at the image itself: do not infer content from the filename, the prompt or the model's own description of it. When you classify or sort images, read each from the image; a text search over captions is a hint, never the result you show.
5. **Compare against a known reference** where the requirement is relative (same scale as another asset, same palette, same voice). Put the reference and the result through the same measurement.
6. **Record the verdict per asset** in a small table: requirement, measured value, pass or fail, "not measurable". Rejected assets are named with the failed requirement, not silently dropped.
7. **Show the user only what passed**, plus the table, and the list of what still needs their ear or eye. Say which results are unchecked.

## Rules

- Measure, then say "passes". "Looks fine" is not a result.
- A failed generation is a finding. Do not retry endlessly: after two failures on the same requirement, report it and suggest changing the prompt, the model or the requirement.
- Keep the prompt, the settings and the model name with each accepted asset, so the result can be reproduced or explained.
- If the requirement involves a person's voice or likeness, a licensed style or a protected character, say so and stop for the user's decision before generating.
- Do not describe generated content as made by a person.

## Guardrails

Never start a paid batch without saying what cannot be checked. Never present an unchecked asset as checked. Never overwrite an accepted asset with a new generation; save the new one beside it.
