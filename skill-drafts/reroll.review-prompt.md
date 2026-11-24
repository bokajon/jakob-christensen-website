I am about to publish the agent skill below under my own name on my personal website, as a free download. Review it like a strict senior reviewer before release. Open the sources listed here yourself and cite the exact file or page for every comparison or factual claim. If you cannot open a source, say so instead of answering from memory.

Context
- Skill: reroll. What it does: when the user is unhappy with an answer (ideas, brainstorm, tips, a plan), it hands the user's own request word for word to a brand-new session that has never seen the rejected answer, so the user gets an independent second attempt. Optional arguments: a model name, a count of 2 or 3 parallel sessions, `different` (tell the new session that an earlier answer was rejected, never what it said), and free text added as a note.
- It must work in: the Claude Code desktop app (separate session through its `start_session` tool). In Claude Code without that tool, Codex, Cursor and any chat app it only copies the prompt to the clipboard or prints it, and the user pastes it into a new chat.
- Origin: written by me from my own working habit (a second attempt must not be anchored on the first answer). Part 1 is there to catch anything that slipped in from other people's skills anyway.
- Decided by me. Do not argue these, but flag one if it makes the skill unsafe or broken: model-invoked (no disable-model-invocation); no bundled script; the name reroll is kept; the skill never summarizes or comments on the rejected answer; it asks the user only when the request cannot be understood without assistant text; the tip line for `different` or another model stays; the cap of 3 sessions stays.
- Already answered in an earlier review round, do not raise again unless the new text brings the problem back: none, first round.
- Known from my own checks, you need not repeat them, but tell me where the text still allows a leak: (a) Web search for the name on 2026-11-24 found no skill called reroll; the name exists for two other skills (buddy-reroll, which rerolls the /buddy companion), nearest in idea are razorback claude-cli, the /reinspect blog post, Trail of Bits second-opinion, all different in flow (no verbatim handover, no `different`, no count). (b) Two real runs in the desktop app on 2026-11-24 with the request "5 name ideas for a small bakery in the mountains": the handed-over text was exact, neither new session called any tool or read any transcript, both answered in one turn. One session (plain) and one session (`different`) each repeated one name from the earlier answer, so `different` did not keep the earlier names out. Not tested: count 2 or 3, a named model, the clipboard route, the do-not-open file list.

Sources
- Agent Skills specification: https://agentskills.io/specification
- Anthropic, Skill authoring best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Anthropic's public skills: https://github.com/anthropics/skills (folder skills/)
- Matt Pocock's skills: https://github.com/mattpocock/skills (every folder under skills/, including deprecated, in-progress and misc)
- OpenAI's Codex skills catalog: https://github.com/openai/skills (marked deprecated, still readable)
- Tool docs: Claude Code https://code.claude.com/docs/en/skills, Codex https://learn.chatgpt.com/docs/build-skills, Cursor https://cursor.com/docs/skills
- Possible overlaps to read: https://www.skills.sh/anortham/razorback/claude-cli, https://trailofbits.com/skills/second-opinion/, https://yunjeongiya.github.io/posts/071-en/, https://www.skills.sh/webup/skills-cc/webup-buddy-reroll

Do all five parts:
1. Origin and overlap. Name every skill in those repositories that does the same job or a large part of it. Quote overlapping sentences side by side. Flag any sentence of mine that looks copied or closely paraphrased. Say what mine does that those do not, or say plainly that it adds nothing.
2. Professional standard. Check against the specification and the best-practices page: frontmatter fields and limits (including the `compatibility` field); whether the description says what the skill does and when to use it, so an agent picks it at the right moment and not otherwise (for example when the user only wants a factual correction); whether each step says what to do rather than what to avoid; length and what should move into a separate file; sentences that change nothing because a current model does that anyway; vague words an agent cannot act on.
3. Agent behaviour. Walk through the skill as the agent running it, step by step: where would it misread the user's message, pick the wrong text to hand over, skip a step, loop, stop too early, or ask the user something it could find out itself? Which common case is missing (a request that includes attachments, a request spread over several messages, a session started by /reroll itself, a user who wants the new answer inside the same chat)?
4. Safety and tool claims. Anything it allows without asking that starts work or spends usage (sessions cost usage; is a count of 3 without asking acceptable?), changes things outside the current project, or leaks the rejected answer to the new session (the do-not-open list, the shared notes folder the app offers, transcripts). For every claim about how a tool behaves (the `start_session` arguments, what a new session can read): confirmed by that tool's own docs (cite) or unverified.
5. Worth. Would an experienced user of these tools install it, or is it redundant with a built-in feature (/rewind, editing and resending a message, branching a chat, a new chat) or an existing skill? One honest paragraph.

Answer format: one table with the columns ID (P1, P2, ...), Part (1-5), Exact sentence (quoted, or "missing"), Problem, Proposed rewrite (full text, ready to paste), Source (URL plus file or section, or "none"), Confidence (high, medium, low). Then the paragraph for part 5. No praise, no summary, no rewrite of the whole skill.

--- SKILL.md (paste starts here; the file is inside the code block below, its first line is the frontmatter) ---

````markdown
---
name: reroll
description: Reroll the last answer blind. Use with /reroll, or when the user says "reroll", "ask a fresh chat" or "try again without seeing your answer", or wants an unanchored second attempt at an answer they disliked (ideas, brainstorm, tips, a plan). Not for fixing a factual error in the answer (just fix it) and not for continuing work.
compatibility: Starts a separate session through the Claude Code desktop app's start_session tool. In any other tool it copies the prompt to the clipboard or prints it, and you paste it into a new chat yourself.
---

# Reroll

Goal: give the user a second attempt at their own request from a brand-new session that has never seen the rejected answer. This session only copies. Anything it writes about its earlier answer is already coloured by that answer, so it never summarizes, rephrases or comments on it.

Arguments (all optional, any text after `/reroll`, any language):
- A model name (`sonnet`, `haiku`, `opus` or a full model id) sets the new session's model (pass the full current id of that model, as the environment info names it). Default is the current model. `start_session` only accepts the same or a cheaper model and ignores a higher one. If the user asks for a higher model, use the copy route of step 4 and say why in one line, never start a weaker session silently.
- `2` or `3` starts that many independent blind sessions in parallel. A higher number is capped at 3 and the reply says so. All get the identical prompt.
- `different` (also "anders") tells the new session that an earlier answer existed and was rejected, never what it said. Without the word the new session gets no hint of an earlier answer.
- Any other text goes into the request as the user's own words under a line `Additional note from me:`.

1. Pick the text to hand over. Only the user's own words go, verbatim.
   - Normal case: the user message directly before `/reroll`, including pasted blocks and file paths.
   - If it refers to earlier context ("do that for the game", "the same for B"), add the earlier user messages it depends on, in order.
   - If the last message was only a reaction (a "yes", "again", a click in a question box), walk back to the user message that asked for the rejected answer and hand over that one, plus the context above if needed.
   - If the request cannot be understood without assistant text (the user's "B" answers the assistant's options), ask once, quoting exactly the assistant sentences that would go along, and offer to send without them. This is the only case where the skill asks before acting.
   - If the message is no longer verbatim in context (compaction or summary), recover it from the saved transcript (Claude Code: the session's `.jsonl` file in the `projects` folder of the Claude config directory, or the app's transcript export tool). If it cannot be recovered verbatim, say so and ask the user to paste it. Never rebuild it from memory.
   - Images or attachments probably cannot be passed. Say in the reply which image to paste again in the new session, and pass a file path if the image exists as a file.
   - If this session was itself started by `/reroll`, strip the `[reroll]` footer first so the wrapper is never doubled.
2. Leak check. In a git repo run `git status --short`. Files the rejected answer created or changed (judge from this session's own tool calls in that answer) go into the do-not-open list of the prompt. A chat-only answer gives an empty list, which is left out. Never write anything about the request or the earlier answer into a shared notes folder the app offers for linked sessions.
3. Build the prompt:
```
<the user's request, verbatim; several messages separated by a blank line, "---" and a blank line>

[reroll] This request was handed over by /reroll from another session. Answer it as the first message of this conversation. Do not read or search session transcripts or other sessions (no transcript search, export or event tools, no session transcript files such as the `.jsonl` files in the Claude config directory's `projects` folder). Do not message other sessions and do not read the shared side-session notes folder. <with `different` only: An earlier answer to this request was rejected by the user, its content is deliberately withheld.> <if the list is not empty: Do not open these files, they hold the earlier answer: `a`, `b`.>
```
4. Start the session(s).
   - Claude Code desktop (tool `start_session`, load it first if it is deferred): call it with `initiation: "user_asked"`, `context: "fresh"`, `use_worktree: false` (if the tool refuses that here, call it again without `use_worktree`), `title: "reroll: <topic in 3-5 words>"`, `model` only if the user named one, and the prompt from step 3. `background` (required, at least 80 characters) is neutral: "The user wants an independent answer to the request in the prompt, written without knowledge of any earlier attempt. Work in this project folder with the usual project rules." It never says the user was unhappy (unless `different`) and holds no assistant text. For a count of 2 or 3, make that many identical calls in one message, titled "reroll 1/3: <topic>" and so on.
   - Anywhere else (Codex, a CLI without that tool, claude.ai, another chat app): with a shell, put the prompt on the clipboard (Windows `Set-Clipboard`, macOS `pbcopy`, Linux `wl-copy` or `xclip`) and say "Copied. Open a new chat and paste it." Without a shell, print it in one fenced block and say "Open a new chat and paste this block." Never claim a session was started when none was.
5. Reply in the old session with at most three short lines in the user's language: the link to each new session (desktop: `[title](#local_<id>)`, id from the tool result), the exact text handed over in a collapsed or fenced block, and any note (image to re-paste, model or count capped). Unless the user already gave `different` or a model, end with the tip "For more variety: `/reroll different`, or name another model, e.g. `/reroll <a model cheaper than the current one>`." (the same model with the same prompt tends to return the same ideas). No comment on the earlier answer, no comparison, no apology. Do not archive or close the old session.

Done when every requested session is started (or the prompt is on the clipboard or printed) and the reply holds the link or instruction plus the handed-over text.
````
