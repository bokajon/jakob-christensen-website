I am about to publish the agent skill below under my own name on my personal website, as a free download. Review it like a strict senior reviewer before release. Open the sources listed here yourself and cite the exact file or page for every comparison or factual claim. If you cannot open a source, say so instead of answering from memory.

Context
- Skill: touch-grass. What it does: "away mode". The user says they are leaving for a while; the agent then works through the existing plan alone to the end. It turns every question it would have asked into its own recommendation plus a log entry (each as its own commit, colour-coded by how much later work builds on it), skips only what must not be decided alone (irreversible or outside-reaching steps, costs money, needs the user's hands, another session's work), keeps going after failures (three different attempts, then a red log entry), and ends with a colour-coded report built from the log file: orange = skipped, I need you; red = failed; yellow = decided by me and other things build on it; green = decided by me and easy to undo.
- It must work in: Claude Code (desktop app and CLI), Codex and Cursor where the agent can run shell commands and write files. Keep-awake, push notification and the fresh-session checkpoint depend on tools only some apps offer; the skill says to skip them when missing.
- Origin: written by me from my own working habit (away work needs a decision log and a skip list, not silence). Part 1 is there to catch anything that slipped in from other people's skills anyway.
- Decided by me. Do not argue these, but flag one if it makes the skill unsafe or broken: model-invoked (no disable-model-invocation); no bundled script; the name touch-grass (renamed from gone-fishing); the four report colours and their order; "decide instead of asking" as the core rule; the skip list in section 3 as a closed list; the log file outside the repository.
- Already answered in an earlier review round, do not raise again unless the new text brings the problem back: none, first round.
- Known from my own checks, you need not repeat them, but tell me where the text still allows a failure: (a) Name search on 2026-11-25 via the skills.sh API: no skill called gone-fishing (the new name touch-grass is not yet searched) (index only, not proof). The name afk was dropped because at least 8 skills have exactly that name. (b) Private headless tests with Sonnet on an earlier German-trigger version: the step that must fail safely failed in rounds 1 and 2 (0 of 3 each) and passed 3 of 3 after two text changes and a changed fixture (so partly tuned to that fixture); self-start on "I am away for a while" 9 of 9, on three other phrasings 3 of 3, on three counter-examples 0 of 3. Not tested: keep-awake, notification, the fresh-session checkpoint, a real integrate script, reliability over hours, a run without the skill for comparison, Codex, Cursor, and this public English wording.

Sources
- Agent Skills specification: https://agentskills.io/specification
- Anthropic, Skill authoring best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Anthropic's public skills: https://github.com/anthropics/skills (folder skills/)
- Matt Pocock's skills: https://github.com/mattpocock/skills (every folder under skills/, including deprecated, in-progress and misc)
- OpenAI's Codex skills catalog: https://github.com/openai/skills (marked deprecated, still readable)
- Tool docs: Claude Code https://code.claude.com/docs/en/skills, Codex https://learn.chatgpt.com/docs/build-skills, Cursor https://cursor.com/docs/skills
- Possible overlaps to read: skills named afk, e.g. https://github.com/jakubkrehel/skills; search skills.sh and GitHub for skills about autonomous or unattended or overnight runs, away mode, "work while I'm away", decision logs for agents

Do all five parts:
1. Origin and overlap. Name every skill in those places that does the same job or a large part of it. Quote overlapping sentences side by side. Flag any sentence of mine that looks copied or closely paraphrased. Say what mine does that those do not, or say plainly that it adds nothing.
2. Professional standard. Check against the specification and the best-practices page: frontmatter fields and limits (including the `compatibility` field); whether the description says what the skill does and when to use it, so an agent picks it at the right moment and not otherwise (for example when the user only says "brb" for a minute, or has no plan); whether each step says what to do rather than what to avoid; length and what should move into a separate file; sentences that change nothing because a current model does that anyway; vague words an agent cannot act on ("large context", "really different attempts", "at most ten lines").
3. Agent behaviour. Walk through the skill as the agent running it, step by step: where would it misread the user, start without a plan, skip a step, loop, stop too early, decide something it should have skipped, or ask the user something it could find out itself? Which common case is missing (a plan that depends on a decision only the user can make at step 1, the user returning mid-run, the usage limit hitting, two sessions running away mode in one repository, a repository without tests or a check)?
4. Safety and tool claims. Anything it allows without asking that starts work or spends money or usage (delegating to agents, starting a fresh session, committing and integrating on its own, "deploy beyond what the project's own instructions already allow"), changes things outside the current project, or could leak secrets into the log file or the notification. Is the skip list in section 3 complete and safe enough for an unattended run? For every claim about how a tool behaves (keep-awake, a notification tool, starting a fresh session): confirmed by that tool's own docs (cite) or unverified.
5. Worth. Would an experienced user of these tools install it, or is it redundant with a built-in feature (auto mode, background or headless runs, scheduled tasks, plan mode, a project instruction file) or an existing skill? One honest paragraph.

Answer format: one table with the columns ID (P1, P2, ...), Part (1-5), Exact sentence (quoted, or "missing"), Problem, Proposed rewrite (full text, ready to paste), Source (URL plus file or section, or "none"), Confidence (high, medium, low). Then the paragraph for part 5. No praise, no summary, no rewrite of the whole skill.

--- SKILL.md (paste starts here; the file is inside the code block below, its first line is the frontmatter) ---

````markdown
---
name: touch-grass
license: MIT
description: Away mode. The user leaves for a while and the session works through the existing plan alone to the end, answers every question with its own recommendation, skips what only the user can decide, and ends with a colour-coded report of what was decided for them and what waits. Use when the user says they are away or unreachable ("I'm away for a while", "I'll be gone", "afk", "touch grass", "gone fishing", "finish this without me", "work through the rest without me") or types /touch-grass. Not for a single task the user is watching, and not when no plan or task list exists to work through.
compatibility: Works in any agent that can run shell commands and write files. Keep-awake, push notification and the fresh-session checkpoint use tools that only some apps offer (for example the Claude Code desktop app); where a tool is missing the skill says so and carries on.
---

# Touch grass

The user is away. Work the plan alone to the end. Every question you would have asked becomes your recommendation plus a log entry; what only the user can decide is skipped; when they are back they see in one minute what was decided and what waits. Write messages to the user in the language they use with you, short.

## 1. Start (the user is still here)

1. **Plan.** Write the steps from the conversation (task list, spec, brief) as a task list. If there is none, say so in one line and stop; invent nothing.
2. **Keep the machine awake.** If a keep-awake tool exists (load it first if it is deferred), call it so the machine stays on until the session is idle; it may need the user's one-time approval, so it comes first. Where no such tool exists, say the machine is not kept awake.
3. **Log file.** Create a log file in a temporary folder outside the repository, named `touch-grass-<project>-<date>-<time>.md`, with a header (project, start time, the plan, the line "away mode on"). Take the start time and every later time from the system clock (run a date command), never from memory or a guess.
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
````
