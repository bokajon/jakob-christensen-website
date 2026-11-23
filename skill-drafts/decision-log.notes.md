# decision-log - draft notes

## Sources read
- Private rules: section "Rules and documents" (split project notes: current state, open commitments, deferred ideas, map, append-only log; end-of-session update) and the pinned-facts rule at the top of the global instruction file (a file of fixed facts that every session reads first, entries written at once, "in a contradiction the file wins, the contradiction is reported"). Material to generalize, not copied. The owner's own facts file was read for the format idea only (one line per fact with a date); none of its content is used.
- `skill-drafts/IDEEN.md` ideas 10 and 11, `REVIEW-AUSWERTUNG.md` (project-docs: all four say five files drift, cut to one or two, ChatGPT 1 suggests STATE.md and DECISIONS.md; pinned-facts: split, three see overlap with project-docs, instruction files or built-in memory; ChatGPT 2 wants date, source and "the current instruction wins"), `NETZ-ABGLEICH.md` (similar: wrap-session, agent-memory-discipline; used only to delimit).

## The cut (suggested by the task, kept)
Two files: `STATE.md` (overwritten) and `DECISIONS.md` (append only, each line with date and source). Reason: the five-file split (state, open commitments, ideas, map, log) puts the same fact in several places and they drift. In the draft the headings "Now", "Open", "Parked", "Where things live" inside STATE.md cover what four of the five files held. The append-only log became the git history plus DECISIONS.md. I did not find a better cut, so I did not change the suggestion. One addition: the "replaces <date> <topic>" line instead of editing an entry, so the history stays readable.

## Generalized
- Dropped all names of the owner's files and projects. "Read first in every session" became step 1 of "Start of a session". "Write it in the same turn, never only in the chat" kept as the central rule.
- Added by me: check the state claims against the real state before building on them, offer setup only once and only with a yes, the "Keeping it short" paragraph, entry format with a source field.

## Decided (Jakob 2026-11-23): which rule wins in a contradiction
Jakob chose the draft default: the user's current instruction wins and the agent asks whether to change the entry. The rule text in SKILL.md is unchanged. The options below are kept as the reasoning.

- **Draft (default text in SKILL.md):** the user's current instruction wins. The agent says which entry it contradicts and asks whether the entry should be changed (by appending a replacing line). Only when the user has not spoken and an entry disagrees with code or another document, the entry wins and the conflict is reported.
- **Jakob's own wording:** "in a contradiction the file wins, the contradiction is reported" (FAKTEN.md: "Widerspricht ein Dokument oder Code einem Fakt hier, gilt der Fakt; den Widerspruch melden."). Note that his rule is about a document or code against a fact, not about the user's live instruction against a fact. The draft keeps that part (entry beats code or document).
- **Reviewer's objection (ChatGPT 2, in REVIEW-AUSWERTUNG):** a stale file could overrule the current instruction, which is dangerous. Hence the draft's default, which Jakob chose. To switch to "file wins" the file to win even against a live instruction, change the section "If an entry and the user's current instruction disagree".
- A middle way not built: the live instruction wins for this turn only, and the agent asks at once whether to change the entry.

## Tested
- Not run in any project, no agent followed it, the description was not tested for triggering. check_skill.py: see commit.
- Not checked: whether built-in memory features of some tools make the file redundant (reviewers' point).

## Name
Name chosen by Jakob (2026-11-23); earlier working name `project-state`. Name not checked against the web.

## Other open questions
- Should the files sit at the project root or in a folder? The draft says root or "the folder the project's instruction file names".
- "DECISIONS.md stays short" is a guess: the limit of "a few hundred lines" is not measured.
