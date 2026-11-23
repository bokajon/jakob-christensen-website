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
- Not tested in any agent, no generation run was done, no measurement script was run. check_skill.py: see commit.

## Name
Name chosen by Jakob (2026-11-23); earlier working name `generated-asset-check`. Name not checked against the web.

## Open questions
- Which measurements should the skill name for audio and images? Left generic so no tool is promised that the user may not have. A small bundled script (image size and transparency, audio duration and peak) could be added if Jakob wants one; it would need a library for audio, so probably not standard-library only.
- Decided (Jakob 2026-11-23): the "likeness of a person" guardrail stays, although it is my addition.
