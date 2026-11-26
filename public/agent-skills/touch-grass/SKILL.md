---
name: touch-grass
license: MIT
description: Away mode. The user leaves for a longer while and the session works through the existing plan alone to the end, answers every question with its own recommendation, skips what only the user can decide, and ends with a colour-coded report of what was decided for them and what waits. Use when the user says they are away or unreachable ("I'm away for a while", "I'll be gone for a while", "afk for a while", "touch grass", "gone fishing", "finish this without me", "work through the rest without me") or types /touch-grass. Not for brief pauses ("brb", "back in a minute"), not for a single task the user is watching, and not when no plan or task list exists to work through.
compatibility: Needs an agent that can run shell commands, read the system clock and write files outside the repository; uses git where the project is a git repository. Keep-awake, push notification and the fresh-session checkpoint use tools that only some apps offer (for example the Claude Code desktop app); where a tool is missing the skill says so and carries on.
---

# Touch grass

The user is away. Work the plan alone to the end. Every question you would have asked becomes your recommendation plus a log entry; what only the user can decide is skipped; when they are back they see in one minute what was decided and what waits.

## 1. Start (the user is still here)

1. **Plan.** Write the steps from the conversation (task list, spec, brief) as a task list; take only work the user asked for, never an idea that was only discussed. If there is none, say so in one line and stop; invent nothing.
   Then check the repository: is it a git repository, which uncommitted changes exist (note them in the log; they are the user's and are never staged or committed), and which command is the project's full check (none: log "no automated check").
2. **Keep the machine awake.** If a keep-awake tool exists (load it first if it is deferred), call it so the machine stays on until the session is idle; it may need the user's one-time approval, so call it right after the plan exists, before the first step. Where no such tool exists, say the machine is not kept awake.
3. **Log file.** Create a log file in a temporary folder outside the repository, named `touch-grass-<project>-<date>-<time>.md`, with a header (project, start time, the plan, the line "away mode on"). Take the start time and every later time from the system clock (run a date command), never from memory or a guess. Never write secrets, tokens, passwords or .env values into the log, a handoff, a notification or an agent brief, and never stage or commit .env or credential files.
4. **Announce** briefly, in the language the user uses: what comes up, where you already expect something to wait for the user, and whether the app's permission mode would still stop the run at a prompt (then say so, so the user can change it before leaving). Then start at once; do not wait for an answer.

## 2. Decide instead of asking

A question that would be a box or a prompt (also every question the user's own instructions ask for) is not asked; an approval that the user's instructions or the app's permission rules require for an action (push, deleting, publishing, a permission prompt) is no such question and stays a skip under section 3. First look the answer up in the conversation and the project's own files; log a decision only when a real choice remains. Take your recommendation, build it as its own commit (stage only the files of this decision) so it can be reverted alone; outside a git repository record the changed file paths and the manual undo steps instead of a commit, and in the same moment append one entry to the log: number, question, options, choice, reason in one sentence, commit, how to undo. Taste is yours to decide here; the recommendation stands. A plain step that raised no question is not an entry: the task list shows it.

Colour each entry when you write it: 🟢 easy to undo and nothing builds on it; 🟡 later steps build on it. Before you start a step, check the log: if it uses the result of a 🟢 entry, change that entry to 🟡 first. Before the report, check every 🟢 entry once more against the later steps.

## 3. Skip, never decide

Skip a step, and every step that depends on it, only when it is one of these:

- Not reversible or reaching outside: deleting data that is not in a git commit or another restorable backup, deleting anything remote, publishing, push, messages, renaming something public, changes outside the project folder (other than the log and handoff files), migrations against remote or shared databases, credentials and access settings.
- Deploy, unless the project's own instructions name it as allowed while the user is away (a line such as "also when the user is away" or "also in touch-grass"; a plain "deploy without asking" is not enough). Even then only if all three hold: the full check is green, the log holds the exact command that undoes the deploy, and a check after the deploy confirms the live result (the project's own way, for example comparing a file's hash; none known: skip). Log it as a 🟡 entry with how to undo it.
- Costs money.
- Needs a more expensive model than the user's rules allow, or more agents or sessions at once than they allow (with no such rules: more than two).
- Needs the user's eyes, ears or hands: signing in, a step known to need a permission prompt, a refused command (never retried in another form).
- Is another session's work.

Log it as 🟠 with the step's name, the dependent steps skipped, and the exact link or command the user needs. Then continue with everything independent; if nothing independent is left, go straight to section 6. Anything outside this list you decide yourself, as long as it stays local to the project and changes no requirement, security setting, cost or outside system.

## 4. Delegate

Follow the user's model rules; with none, give each agent the cheapest model that does its job, and run at most two at once. Each brief is written for a fresh context window (some tools fork the whole conversation by default) and states: commit the finished part and report what is open; start no session of your own; do not publish, deploy, rename or integrate; do not write to the log file: return each decision in the entry fields of section 2, and the parent numbers and appends them.

**Context checkpoint.** When the app shows the context size and it passes half the window, or after the context was compacted once, write a handoff file outside the repository with the log path, "away mode on" and the line "obey sections 3 and 5 of touch-grass: skip list, no secrets, no push" in it. Then, where the app can start a fresh session for you, start one with the handoff as its brief and end your turn; that session writes the report below and you show it when its note arrives. If the app refuses or only shows a card, do not wait for a click: keep working here, since the context is compacted automatically and the log file carries the state. Without a context figure, start no fresh session.

## 5. Keep going

You are done only when every item is done, skipped or failed. A step whose command exits non-zero, or whose stated result is not reached, has failed, even if you saved the output or can explain the error; a failure that the user's eyes or hands would not fix (a dead service, a missing dependency) is such a failure, not a skip. It gets at most three attempts, each a different approach (another fix, another tool, another dependency), never the same command again; then log it as 🔴 with what was tried, skip the steps that need its result, and go on with the independent ones (never 🟢). After each checked step, commit locally and integrate as the project's Git rules say (integrating means only what those rules call it, usually a local merge into the default branch; never a push or a pull request), so an abort by a usage limit costs nothing and "continue" resumes from the log file and the Git state. A permission prompt stops the session and cannot be avoided: the log shows where it stopped.

## 6. Finish

1. Run the project's full check once and write its result into the log.
2. Send a notification where a notification tool exists.
3. Start with the plain steps done, from the task list in one line, then build the report of decisions from the log file only, never from memory, in this order, one numbered line per entry, colour first, each with its logged details (🟡 and 🟢: question, choice, reason, commit), so "undo number 3" works without a question:
   - 🟠 skipped, I need you (decision or action, with link or exact command)
   - 🔴 failed (what was tried)
   - 🟡 decided by me, other things build on it (look at these first, changing costs rework)
   - 🟢 decided by me, easy to undo
4. Then ask each 🟠 decision as a question the user can answer in one click or line.
5. If something stopped the run early (a permission prompt, a usage limit), say where it stopped.

## 7. End

Away mode ends with the report, or as soon as the user writes again. If the user writes mid-run, start no new work, finish the action in progress, show the report of the log so far, and ask questions normally again.
