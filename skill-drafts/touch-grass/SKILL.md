---
name: gone-fishing
license: MIT
description: Away mode. The user leaves for a while and the session works through the existing plan alone to the end, answers every question with its own recommendation, skips what only the user can decide, and ends with a colour-coded report of what was decided for them and what waits. Use when the user says they are away or unreachable ("I'm away for a while", "I'll be gone", "afk", "gone fishing", "finish this without me", "work through the rest without me") or types /gone-fishing. Not for a single task the user is watching, and not when no plan or task list exists to work through.
compatibility: Works in any agent that can run shell commands and write files. Keep-awake, push notification and the fresh-session checkpoint use tools that only some apps offer (for example the Claude Code desktop app); where a tool is missing the skill says so and carries on.
---

# Gone fishing

The user is away. Work the plan alone to the end. Every question you would have asked becomes your recommendation plus a log entry; what only the user can decide is skipped; when they are back they see in one minute what was decided and what waits. Write messages to the user in the language they use with you, short.

## 1. Start (the user is still here)

1. **Plan.** Write the steps from the conversation (task list, spec, brief) as a task list. If there is none, say so in one line and stop; invent nothing.
2. **Keep the machine awake.** If a keep-awake tool exists (load it first if it is deferred), call it so the machine stays on until the session is idle; it may need the user's one-time approval, so it comes first. Where no such tool exists, say the machine is not kept awake.
3. **Log file.** Create a log file in a temporary folder outside the repository, named `gone-fishing-<project>-<date>-<time>.md`, with a header (project, start time, the plan, the line "away mode on"). Take the start time and every later time from the system clock (run a date command), never from memory or a guess.
4. **Announce** in at most ten lines: what comes up, and where you already expect something to wait for the user. Then start at once; do not wait for an answer.

## 2. Decide instead of asking

A question that would be a box or a prompt (also every question the user's own instructions ask for) is not asked. Take your recommendation, build it as its own commit so it can be reverted alone, and in the same moment append one entry to the log: number, question, options, choice, reason in one sentence, commit, how to undo. Taste is yours to decide here; the recommendation stands. A plain step that raised no question is not an entry: the task list shows it.

Colour each entry when you write it: 🟢 easy to undo and nothing builds on it; 🟡 later steps build on it. Before you start a step, check the log: if it uses the result of a 🟢 entry, change that entry to 🟡 first. Before the report, check every 🟢 entry once more against the later steps.

## 3. Skip, never decide

Skip a step, and every step that depends on it, only when it is one of these:

- Not reversible or reaching outside: deleting without a backup, publishing, push, deploy beyond what the project's own instructions already allow, messages, renaming something public.
- Costs money.
- Needs a more expensive model than the user's rules allow, or more agents or sessions at once than they allow (with no such rules: more than two).
- Needs the user's eyes, ears or hands: signing in, a permission prompt, a refused command (never retried in another form).
- Is another session's work.

Log it as 🟠 with the step's name, the dependent steps skipped, and the exact link or command the user needs. Then continue with everything independent. Anything outside this list you decide yourself.

## 4. Delegate

Follow the user's model rules; with none, give each agent the cheapest model that does its job, and run at most two at once. Each brief is written for a fresh context window (some tools fork the whole conversation by default) and states: commit the finished part and report what is open; start no session of your own; do not publish, deploy, rename or integrate; append decisions to the log file at its full path in the entry format of section 2.

**Context checkpoint.** When the context is large (about 150k tokens, or half the window), write a handoff file outside the repository with the log path and "away mode on" in it. Then, where the app can start a fresh session for you, start one with the handoff as its brief and end your turn; that session writes the report below and you show it when its note arrives. If the app refuses or only shows a card, do not wait for a click: keep working here, since the context is compacted automatically and the log file carries the state. This route is not measured in a real app.

## 5. Keep going

You are done only when every item is done, skipped or failed. A step whose command exits non-zero, or whose stated result is not reached, has failed, even if you saved the output or can explain the error; a failure that the user's eyes or hands would not fix (a dead service, a missing dependency) is such a failure, not a skip. It gets at most three really different attempts; then log it as 🔴 with what was tried and go on (never 🟢). After each checked step, commit and integrate as the project's Git rules say, so an abort by a usage limit costs nothing and "continue" resumes from the log file and the Git state. A permission prompt stops the session and cannot be avoided: the log shows where it stopped.

## 6. Finish

1. Run the project's full check once and write its result into the log.
2. Send a notification where a notification tool exists.
3. Build the report from the log file only, never from memory, in this order, one numbered line per entry, colour first, each with question, choice, reason and commit, so "undo number 3" works without a question:
   - 🟠 skipped, I need you (decision or action, with link or exact command)
   - 🔴 failed (what was tried)
   - 🟡 decided by me, other things build on it (look at these first, changing costs rework)
   - 🟢 decided by me, easy to undo
4. Then ask each 🟠 decision as a question the user can answer in one click or line.
5. Name the open points: a permission prompt, a usage limit, and how reliably "do not stop" holds over hours are limits this skill cannot remove.

## 7. End

Away mode ends with the report, or as soon as the user writes again. From then on questions are asked normally again.
