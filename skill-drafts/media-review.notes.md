# media-review - draft notes

## Sources read
- Private rule, section "Honesty", the point on anything another model generates (music, images, voice) and on classifying images (read from the images, not from description text). Material to generalize, not copied.
- `skill-drafts/IDEEN.md` idea 5 and the dropped project-bound ideas (art pipeline, audio takes), whose general core is meant to live here. `REVIEW-AUSWERTUNG.md` (all four: keep, one of the clearest). `NETZ-ABGLEICH.md` (nearest: ai-media-quality-review, used only to delimit).

## Generalized
- Kept the core: check the result, not the prompt; measure against the requirement before the user sees it; where it cannot be measured, say so before spending money; classify images from the images.
- Added by me, not in the private rule: measurable versus judged marking, small paid sample first, verdict table, stop after two failures on the same requirement, keep prompt and model with each asset, never overwrite an accepted asset, stop for a decision on voice or likeness of a person. Jakob confirmed the likeness guardrail 2026-11-23; the other additions in this line were not part of the question.
- Dropped: every project-specific pipeline, tool and file name from the source projects.
- No tool names. No script is bundled: which measurement tool exists depends on the media and the machine.

## Tested
- Not tested in any agent, no generation run was done, no measurement script was run. `check_skill.py skill-drafts/media-review`: OK (SKILL.md 4141 characters, description 464, 2026-11-24).
- Test run 2026-11-24 (Jakob approved the headless start), Claude Code headless, Sonnet, throwaway folder per run, `--setting-sources project`, 2 runs `/media-review ...` (A1, A2), 1 run without the skill (B1). Fixture: `logo.png` 512x384 RGB without alpha, 2443 bytes; `jingle.wav` 22.05 kHz mono, 61740 frames = 2.8 s (2.0 s tone, clipped, plus 0.8 s digital silence). Requirements given: logo 512x512, transparent, under 50 KB; jingle 3 s, 44.1 kHz, peak below -1 dBFS, no trailing silence, upbeat. My own re-measurement: 61740 frames, 22050 Hz, 21760 samples at full scale (35.2 percent), matches both A runs.
- Result: A1 and A2 got every measurable value right (size 512x384, RGB no alpha, 2.4 KB, 2.8 s, 22.05 kHz, peak about 0 dBFS, 35 percent clipped, trailing silence), marked "upbeat" as not measurable, said ffprobe/sox were missing and that they used Python stdlib and Pillow, opened the image, recommended regenerating. Neither started a generation, so steps 2, 3 and the stop-after-two-failures rule were not exercised (nothing paid, no retry).
- Baseline B1 (no skill) found the same measurable failures and called "upbeat" unverified. So in this case the skill showed no measurable gain in correctness. Differences seen: the A runs gave a table per requirement with the "not measurable" label and the missing-tool note; B1 gave tables too. One run (A2) wrote a sloppy sentence ("fails every measurable requirement except peak"), a flaw in the report, not in the numbers.
- Not tested: paid or slow batch (step 2 and 3), result only available as a link (ask before download), voice or likeness guardrail, image classification from the images, never overwrite an accepted asset, a machine with no audio tool at all. Whether the skill was loaded in the A runs is not checked (a `/name` start leaves no trace in stream-json). Codex not tested. Two runs, one fixture: weak evidence.

## Name
Name chosen by Jakob (2026-11-23); earlier working name `generated-asset-check`. Web check 2026-11-24 (two searches, "media-review" agent skill SKILL.md and skills.sh media-review): no skill with exactly this name found. Nearest names: media-reviewer (https://smithery.ai/skills/memorysaver/media-reviewer, analyzes content and narrative, other job), media-judge (https://clawhub.ai/vargai/skills/media-judge, reviews AI videos), ai-media-quality-review (https://www.skills.sh/magichourhq/skills/ai-media-quality-review, checks a file against its brief with a bundled script, needs FFmpeg), media-patch-review (Firefox, code review). Only search snippets read, not the pages; "no exact match" is not proof of none. Name is close to media-reviewer: Jakob decides whether that is acceptable.

## Open questions
- Which measurements should the skill name for audio and images? Left generic so no tool is promised that the user may not have. A small bundled script (image size and transparency, audio duration and peak) could be added if Jakob wants one; it would need a library for audio, so probably not standard-library only.
- Decided (Jakob 2026-11-23): the "likeness of a person" guardrail stays, although it is my addition.

## Name proposals (2026-11-24, Jakob asked for 20)
Not web-checked except `media-review` above. Recommendation first: `result-check` (short, says what is checked; the skill checks the result, not the prompt).
1 result-check, 2 asset-check, 3 asset-gate (the review notes' own suggestion), 4 media-check, 5 output-check, 6 measure-media, 7 generation-check, 8 verify-generated, 9 genmedia-check, 10 media-qa, 11 asset-qa, 12 check-before-show, 13 measure-first, 14 spec-check, 15 deliverable-check, 16 inspect-media, 17 render-check, 18 media-audit, 19 generated-media-check, 20 not-by-prompt.
Names to avoid: media-judge, media-reviewer, ai-media-quality-review (exist, see above). Several of the 20 (asset-gate, media-check, asset-check) were already named by reviewers in `REVIEW-AUSWERTUNG.md`; their availability is not checked.
