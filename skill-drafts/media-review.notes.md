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
- Test run NOT done (2026-11-24): the headless start of `claude.cmd -p "/media-review ..."` (3 runs: 2 with the skill, 1 without) was refused by the auto-mode classifier, so no number exists. Prepared and ready: fixture generator (a 512x384 RGB PNG without alpha against a "512x512 transparent" requirement; a 2.0 s + 0.8 s silence, 22.05 kHz mono WAV with a clipped 440 Hz tone against "3 s, 44.1 kHz, peak below -1 dBFS, no trailing silence, upbeat"). Known truth: logo fails size and transparency, jingle fails duration, sample rate, clipping and trailing silence; "upbeat" is judged. On this machine ffprobe and sox are missing, Python 3 with Pillow 13.0.0 exists, so a good run should say how it measured and mark "upbeat" as not measurable.

## Name
Name chosen by Jakob (2026-11-23); earlier working name `generated-asset-check`. Web check 2026-11-24 (two searches, "media-review" agent skill SKILL.md and skills.sh media-review): no skill with exactly this name found. Nearest names: media-reviewer (https://smithery.ai/skills/memorysaver/media-reviewer, analyzes content and narrative, other job), media-judge (https://clawhub.ai/vargai/skills/media-judge, reviews AI videos), ai-media-quality-review (https://www.skills.sh/magichourhq/skills/ai-media-quality-review, checks a file against its brief with a bundled script, needs FFmpeg), media-patch-review (Firefox, code review). Only search snippets read, not the pages; "no exact match" is not proof of none. Name is close to media-reviewer: Jakob decides whether that is acceptable.

## Open questions
- Which measurements should the skill name for audio and images? Left generic so no tool is promised that the user may not have. A small bundled script (image size and transparency, audio duration and peak) could be added if Jakob wants one; it would need a library for audio, so probably not standard-library only.
- Decided (Jakob 2026-11-23): the "likeness of a person" guardrail stays, although it is my addition.
