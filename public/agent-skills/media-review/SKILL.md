---
name: media-review
license: MIT
description: Check media made by another model (images, music, voices, video) against the requirement before the user sees it or before more money is spent on it. Turns the requirement into measurable checks, runs them on the actual result and not on the prompt, and says up front which requirements cannot be measured. Use when generating or receiving generated media, running a batch of generations, or being asked whether a generated result is good enough. Not for taste-only critique.
metadata:
  author: "Jakob Christensen"
  copyright: "(c) 2026 Jakob Christensen"
  source: "https://jakobchristensen.com"
---

# Media review

Goal: the user sees only generated results that were checked against what they asked for, and knows before any paid run which parts nobody can check by machine. A prompt that was good says nothing about the result.

## Steps

1. **Write the requirement as checks.** From the request, list each requirement and mark it:
   - **Measurable**: a number or a rule a script or a careful look can verify (size, aspect ratio, transparent background, palette, duration, loudness, sample rate, tempo, silence at the end, language, word list spoken, file format, count of items).
   - **Judged**: needs a human ear or eye (mood, likeness, "sounds natural").
   Include the hard limits of where the asset goes (file size, dimensions, license, length).
2. **Get approval before spending.** Before you start a generation run that is paid or that you expect to take more than about 5 minutes, stop, even if every requirement is measurable. Tell the user the cost (your estimate, or "unknown"), which checks exist, which do not (judged requirements, or measurable ones you have no tool for), and who has to listen or look. End your turn with that message and a question: start with one small sample? Generate nothing until the user answers. An earlier "just do it" does not replace this answer, because the user did not yet know the cost or what cannot be checked.
3. **Generate one small sample first** when the run is paid or slow. Check it with step 4, show the user the sample and the verdict table, and wait for their go before you scale up.
4. **Check the result, not the prompt.** Open the produced file. Read sizes and formats from the file's own metadata. For PNG, JPEG, GIF and WebP, `scripts/check_image.py` next to this SKILL.md does that; call it by its full path: `<python> -I "<full path to scripts/check_image.py>" <file> [<file> ...] [--size WxH] [--ratio W:H] [--max-bytes N] [--format NAME] [--transparent] [--max-colors N]`. Each option is one requirement and gets PASS, FAIL or NOT MEASURED (exit 0, 1 or 3; 2 = unreadable file). The pixel checks (transparent background, number of colors) need the Pillow package: without it they come back NOT MEASURED, so say so and do not install it without asking. It also reports files that are byte for byte identical. It never replaces looking at the image. Measure audio with a tool already on the machine (for example ffprobe, sox, or Python's standard library, such as the wave module for WAV headers; check that it exists, and do not install tools without asking). Where no tool can do a check, mark that requirement "not measurable" and say so. Spoken words and language count as measurable only if a speech-to-text tool is available. Measure duration, peak and average level, clipping and silence. For images, open the file with a tool that shows it to you (for example the Read tool on a PNG) and say what you saw per requirement; if you cannot view images, mark content requirements "not measurable". Look at the image itself: do not infer content from the filename, the prompt or the model's own description of it. When you classify or sort images, read each from the image; a text search over captions is a hint, never the result you show. For video, read the stream metadata (resolution, frame rate, duration, audio streams) with a tool on the machine, and check visual content on frames you extract and view as images; if you cannot do either, mark those requirements "not measurable". Do not judge a clip from one frame.
5. **Compare against a known reference** where the requirement is relative (same scale as another asset, same palette, same voice). Put the reference and the result through the same measurement.
6. **Record the verdict per asset** in a small table: requirement, measured value, pass or fail, "not measurable". Rejected assets are named with the failed requirement, not silently dropped.
7. **Show the user the assets that passed**, plus the table covering every asset (failed ones with the failed requirement), and the list of what still needs their ear or eye. Say which results are unchecked.

## Rules

- Measure, then say "passes". "Looks fine" is not a result.
- A failed generation is a finding. Do not retry endlessly: after two failures on the same requirement, report it and suggest changing the prompt, the model or the requirement.
- If the result is only available as a link or in a web UI, ask before downloading it, and do not check a thumbnail as if it were the file.
- Keep the prompt, the settings and the model name with each accepted asset, so the result can be reproduced or explained.
- If the requirement involves a person's voice or likeness, a licensed style or a protected character, say so and stop for the user's decision before generating.
- Do not describe generated content as made by a person.

## Guardrails

Never start a paid batch without saying what cannot be checked. Never present an unchecked asset as checked. Never replace an accepted asset with a new generation; keep the new one under a different name.
