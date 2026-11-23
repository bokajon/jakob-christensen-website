# fresh (draft with mode "resume") - notes

## What this is
A draft of the published `fresh` skill (copy of `public/agent-skills/fresh/SKILL.md` from the main checkout, read there, not changed) plus a second mode "resume". This is idea 3 (resume-check) as a mode of `fresh`, as three of four reviews asked (REVIEW-AUSWERTUNG, section 2: fresh + resume-check).

## Difference from the original
Only three edits, everything else is byte for byte the published text (check with `diff`):
1. `description`: one sentence added at the end for the resume mode (description is still under 1024 characters, see check_skill hint).
2. New section "Modes" before "When to run": handoff (default, the old content) and resume.
3. New section "Resume mode" before "Hook setup": four steps (read-only state check, compare with the interrupted step, short report, continue that step) and the guardrails.
Not changed: "When to run", "Steps", hook, script, credits. The Credits text says the four handoff content rules build on Matt Pocock's handoff; resume mode is not from there (see below), so Credits stays as it is.

## Sources read
- Private rule "weiter after a crash or stop" (CLAUDE.md, section Working) and "Never kill processes or force-delete locked folders" there. Generalized: "weiter" became "continue", German dropped, "last integration log" became "newest log or result line of any build, test or merge-and-check script".
- Detail on dev servers (check a process's command line before saying whose it is) taken from the rule on stopping a dev server.
- `thieung/handoff` (a skill that writes and reads a repo-local handoff file) is named in REVIEW-AUSWERTUNG as close to both fresh and resume-check. Not read here, no wording used.

## Added beyond the private rule
- "A handoff file is a claim until the state confirms it", "unknown" for what cannot be told, "do not rerun a step that publishes, deploys or deletes before checking it did not already run", and "never stash, reset or clean changes you did not make". These are my additions for the public text, not Jakob's wording. Jakob confirmed the "do not rerun a step that publishes, deploys or deletes" sentence 2026-11-23 (kept).

## Tested
- check_skill.py: see commit. `diff` against the published file shows only the three edits.
- The git commands of step 1 (status, log, worktree list, ahead/behind) are standard and were not run as a scenario. No crash simulated, no trigger test of the description in any agent.

## Open questions
- Description now carries two jobs. Is the resume sentence enough to trigger on a bare "continue", or should it be a separate trigger word list? Not tested.
- Should the resume mode also read the project's own notes (state files, task lists)? Left general: "the task list or the last messages".
- Name not checked against the web (the name `fresh` is already published).
