---
name: project-state
license: MIT
description: Keep a project's decisions in DECISIONS.md, a decision log that every session reads first - names, assignments and choices the user has stated, append only, each line dated with its source - next to a short STATE.md for the current state and open points (overwritten). Use at the start of a session in a project that has these files, when the user fixes something that should outlive the current task (a name, an assignment, a rule, a choice between options, or a correction they had to repeat), and at the end of a session that changed the state. A choice that only concerns the current edit is not a decision. Also use to set the two files up in a new project.
---

# Decision log

Goal: the decisions the user has made are recorded where every session reads them, so the user never has to say the same thing twice, and the current state sits next to them. What the next session must know is in two short files in the project, so no session starts from a guess. Two files are enough; more files drift apart.

- `STATE.md`: where the project stands now. Rewritten, never a log.
- `DECISIONS.md`: what the user has decided or fixed (names, assignments, rules, choices between options). Only appended to.

Keep both at the project root, or in the folder the project's instruction file names for them. If the project's instruction file says where project notes live, follow it. Before creating a file, look for an existing status or decisions file (a status file, a facts file, DECISIONS.md, ADRs); if one exists, use it and do not create a second.

## Start of a session

1. Read both files, if they exist, before you do anything else. Read `STATE.md` in full. Read `DECISIONS.md` in full if it is under 200 lines; otherwise read its last 100 lines and search the rest for the topic you work on.
2. Check the claims in `STATE.md` that your task depends on against the real state (branch, files, running jobs) before you build on them. The file says what was true when it was written.
3. If neither file exists and the project is more than a quick experiment, offer once to set them up (below). Do not create them without a yes.

## When the user states a decision

A decision is a name, an assignment ("X is Y"), a choice between options, a rule for this project, or a correction the user had to repeat. If `DECISIONS.md` exists, write it there immediately, in the same turn, not at the end of the session and never only in the chat. If it does not exist, do not create it: mention the decision once in your reply.

One line per entry, appended at the end:

`- YYYY-MM-DD; <topic>: <the decision in one sentence>; source: chat` (or `commit <hash>`, `file <path>`). Take the date from the system, never from memory.

Rules for entries:

- Only final decisions: log it when the user stated it as settled or repeated it. A preference the user is still weighing, or your own suggestion, is not an entry. When unsure, ask one short question: "Record this as decided?"
- Use the user's words where a name or wording matters.
- Never edit or delete an old line, except to remove a secret or personal data written by mistake (say so in your reply). When a decision changes, append a new line that says `replaces <date> <topic>`. The history stays readable.
- Never put secrets, tokens or personal data in either file.

## If an entry and the user's current instruction disagree

The user's current instruction decides. Do what they ask now, say in one sentence which entry it contradicts, and ask whether the entry should be changed (by appending a replacing line). Do not follow the old entry against the instruction, and do not change the entry without asking. If an entry and the code or another document disagree and the user has not spoken, the entry wins as the record of what the user decided: report the conflict, and do not fix it silently.

## End of a session that changed the state

Before rewriting, run `git log -3 -- STATE.md` and `git status --short STATE.md`; if it changed since you read it, merge that change instead of overwriting it. Rewrite `STATE.md` so it is true now. Keep it to these headings, each as short bullets:

- **Now**: what exists and works, in a few lines, and the branch or place where the latest work lives.
- **Open**: unfinished work and promises, each with its next step. Delete a point when it is done.
- **Parked**: ideas set aside on purpose, one line each.
- **Where things live**: only what a newcomer would not find by searching the project.

Then check that no sentence in it contradicts `DECISIONS.md`, and that nothing in the session's work is missing from it. Stage and commit only these files, on the branch you are on (never on main if the project forbids it), with a message that says what changed in the state.

## Keeping it short

`STATE.md` stays under about one screen, because it is rewritten. If `DECISIONS.md` grows past a few hundred lines, offer to move old, still valid entries into a second section titled "Older", without changing a word, and run the nothing-lost check (the file at `HEAD` as old, the edited file as new) before committing. Never delete entries to make it shorter.

## Setting the files up

1. Create `STATE.md` with the four headings and `DECISIONS.md` with one line of explanation at the top (what it is, the entry format, that it is append only).
2. Fill `STATE.md` from what you can verify now. Fill `DECISIONS.md` only with decisions the user confirms or that a commit or file records. Do not invent history.
3. Tell the user in two lines what each file is for and when you will touch it.

## Guardrails

Never write a decision the user did not make. Never silently resolve a contradiction between the user and an entry.
