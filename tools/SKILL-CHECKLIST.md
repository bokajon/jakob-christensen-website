# Checklist for writing and publishing a skill

Work through this list for every skill before it goes on the Agent Skills card of the homepage. Each rule says where it comes from:

- **Matt** = checked line in the original mattpocock/skills repo, version 1.3.2, downloaded and read 2026-11-22 (paths relative to that repo).
- **Test** = measured in our own headless runs (method in section 7).
- **Ours** = our own decision, not taken from anyone.

## 0. Order of work

Follow this order. In the workaround release (2026-11-22) text changes and test rounds alternated, so every change needed a new test round; collecting all review points first and testing once saves most of that time. (Ours)

1. Origin check (section 1).
2. Public draft from Jakob's private copy: back up the private copies into a dated folder, remove private words, paths and project docs, `check_skill.py` green (section 6).
3. One pass over sections 2 to 5. They already hold the lessons from reading Matt Pocock's skills, each with its line reference; open his repo only for a question they do not answer (section 1.2).
4. All reviews (section 4a): blind agent first, then Gemini and ChatGPT through Jakob. Triage every point, Jakob approves, apply the approved changes in one batch to the public draft and both private copies.
5. One full test round (section 7) in every tool the page will name. Record the numbers in this file.
6. Show Jakob the final text and all numbers; after his OK add the skill to the card, merge, deploy (section 8).

## 1. Origin

1. Read `~/.claude/FAKTEN.md` first. A skill listed there as someone else's is never published under Jakob's name, however much it was adapted. (Ours)
2. When a rule is "how Matt does it", read Matt's original repo, never Jakob's local adapted copy of a Matt skill. A claim like "Matt never/always does X" needs a search over all his skills first. (Ours, after two wrong claims on 2026-11-22: see section 9)
3. Search the web for two or three distinctive sentences of the draft and compare with mattpocock/skills and the file's git history. For workaround the wording was found nowhere; similar ideas exist elsewhere without shared wording. (Ours, 2026-11-22)

## 2. Invocation mode

1. Default is **model-invoked**: the agent or the user can start it. Keep it that way if the agent could usefully reach for the skill on its own. (Matt: `.agents/invocation.md:6`)
2. **User-invoked** means two settings together: `disable-model-invocation: true` in `SKILL.md` (Claude Code) and `policy.allow_implicit_invocation: false` in `agents/openai.yaml` (Codex). Both or neither. (Matt: `.agents/invocation.md:5,10`, `CLAUDE.md:19`)
3. Known bug: the Claude desktop and web apps drop user-invoked skills from the list entirely, so they cannot be reached there at all (mattpocock/skills#693 and anthropics/claude-code#82237, both closed as not planned). Seen in Jakob's desktop app on 2026-11-22: five of his user-invoked skills were missing. Matt made `wizard` model-invoked partly for this reason (Matt: `CHANGELOG.md`, `wizard` entry under 1.2.0). So choose user-invoked only when the agent starting the skill on its own would do harm, and say on the page that it does not work in the desktop app.
4. In Codex the policy line hides the skill from the model completely; only an explicit `$name` mention starts it. Matt removed it from `writing-for-agents` for that reason. (Matt: `CHANGELOG.md` 1.2.2)

## 3. Description

1. Model-invoked: written for the agent. What the skill does, then "Use when ..." with the concrete trigger cases. One explicit non-trigger is fine. (Matt: `.agents/invocation.md:6`; `skills/.../wizard/SKILL.md:3` ends with a non-trigger)
2. User-invoked: written for a person scrolling slash commands, one line, no trigger list. (Matt: `.agents/invocation.md:5`)
3. Spec limits: name max 64 characters, lowercase and hyphens, equal to the folder name; description max 1024 characters. `tools/check_skill.py` checks this. (agentskills.io specification)
4. A good description does not prove the skill fires. `workaround` loaded on its own in 0 of 6 headless runs, even when the prompt said "find a workaround". Claim auto-triggering on the page only after measuring it. (Test, 2026-11-22)

## 4. Body

1. Say what to do, not what to avoid. A prohibition only where it is a hard guardrail that cannot be said positively, and then next to the positive target. (Matt: `skills/productivity/writing-for-agents/SKILL.md:74`)
2. Delete sentences the model already follows without them (no-ops). Decide by running the skill against a run without it, not by opinion. (Matt: same file `:81`) A hard guardrail may stay even if today's model already follows it, but say in the review that it is one. (Ours: the guard step of `workaround` was followed in the run without the skill too)
3. No em dashes or en dashes as punctuation. (Matt: `CLAUDE.md:25`; Jakob's global rule)
4. A skill that starts a subagent says to start it with a fresh context window, because some tools (Codex) fork the whole conversation by default. (Matt: `CLAUDE.md:27`)
5. To use another skill, Matt writes "call the Skill tool with X", and for a user-invoked one "tell the user to run /x". (Matt: `skills/engineering/implement/SKILL.md:11,15`, `code-review/SKILL.md:13`) For a public skill meant for several tools, `check_skill.py` flags "Skill tool" as Claude-only: use a neutral wording or add a note. (Ours)
6. A step where taste or scope is the user's call gets an explicit "ask the user" step with the question spelled out. (Matt: `skills/engineering/tdd/SKILL.md:22`)

## 4a. Reviews (before the first full test round)

1. Blind read: a fresh agent (fresh context, Sonnet is enough) gets only the public SKILL.md and is asked where an agent following it would go wrong, misread or skip a step, or do something unsafe. For workaround it found 7 points, 6 were applied. (Ours, 2026-11-22)
2. Other models: Jakob pastes the public draft into Gemini and ChatGPT with the prompt below. For workaround this led to three approved changes: retry once on a transient failure, take a clearly safe route without checking the rest, ask before deleting something that cannot be restored. (Ours, 2026-11-22)
3. Triage every point before changing anything. A factual claim (install paths, tool behaviour) counts only after a first-party doc confirms it: Gemini's install paths were right, ChatGPT's "loads automatically in Claude Code" was wrong (0 of 6 measured). A behaviour claim is tested (section 7). Taste is Jakob's call. Show Jakob the list with a verdict per point, then apply what he approves in one batch.
4. Jakob's private copies (`~/.claude/skills/<name>/`, `~/.agents/skills/<name>/`) differ from the public draft only in deliberate private spots (trigger words, private docs). Every approved change goes into all three, after a backup; the private copies are never committed.
5. After the full test round, a later text change needs only the test cases it can affect (for example a change to the install rule: the install and destructive cases).

Review prompt (Jakob pastes it, then the SKILL.md below it):

```
Review this agent skill (SKILL.md, open Agent Skills format) before I publish it. It must work in Claude Code, Codex and Cursor. List concrete problems only, each with the exact sentence and a proposed rewrite: steps an agent could misread or skip, unsafe actions it would allow, missing cases, sentences that change nothing, wrong claims about tools. Say which points you are unsure of. No praise, no summary.
```

## 5. Side effects

1. Every change that reaches outside the current project (global package install, PATH, system settings, global config files, accounts, paid services) is put to the user first. (Ours. Matt is not consistent here: `git-guardrails-claude-code/SKILL.md:22-24` asks "this project or all projects", `setup-pre-commit/SKILL.md:81-83` installs and commits without asking)
2. Reason: with `/workaround` loaded, Sonnet still ran a global `pip install csvkit` without asking in 2 of 2 runs, because "reversible first" let it through. After step 4 named the project boundary: 0 global installs in 4 runs; every run installed into a throwaway venv in its own session scratchpad instead, without asking, and said so in its report. (Test, 2026-11-22)
3. A test run can change the real machine. Undo it after each run (e.g. `pip uninstall -y csvkit`) and check at the end that it is gone. (Test: run A1 installed csvkit globally on Jakob's machine)

## 6. Mechanical rules go into a check

1. A rule a script can check (forbidden words, paths, frontmatter, dashes) goes into `tools/check_skill.py`, not only into prose. (Matt: `skills/.../retro/SKILL.md:19` asks for a deterministic check for every mechanical violation)
2. Matt's own CI only checks that the frontmatter parses and that name and description are not empty (Matt: `scripts/check-frontmatter.mjs`). Our check goes further: private words, paths, emails, keys, tool-only names, spec fields.
3. Run `python -I tools/check_skill.py public/agent-skills/<name>` before every commit that touches a public skill.

## 7. Testing

1. Throwaway folder per run, the skill copied to `.claude/skills/<name>/SKILL.md`, then:
   `claude.cmd -p "<prompt>" --model sonnet --output-format stream-json --verbose --max-turns 20 --setting-sources project --allowedTools "Bash,Read,Glob,Grep,Skill,Write,Edit,PowerShell"`
2. Pitfalls seen on 2026-11-22: in PowerShell call `claude.cmd`, because `claude.ps1` is blocked. An untrusted folder ignores `permissions.allow` from its `.claude/settings.json` (deny rules still apply), so pass the allow list with `--allowedTools`.
3. Run three kinds of prompt and count them separately: without the skill (baseline, finds no-ops), a natural prompt (does it start on its own?), and `/name ...` (does the content work?).
4. For a guard: a deny rule on a file holding a canary string. Pass = the canary appears nowhere in the transcript.
5. At least two runs per case before a result counts as reproduced. `analyze_wtests.py` does not see a `/name` start, so check those transcripts by hand.
6. The page says "tested in" only for the tools a run actually happened in.
7. Test fixtures must give the same result in every run. Python's `hash()` is randomized per process, use `hashlib`. (Test: the first retry runs were invalid for this reason, 2026-11-22)
8. Codex also loads Jakob's private `~/.agents/skills` (a HOME or USERPROFILE override is ignored), so the test copy gets another name (`<name>-test`, started with `$<name>-test`). Never run Codex tests with `-s danger-full-access`: the auto-mode reviewer refuses it. Use `-s workspace-write`. (Test, 2026-11-22) Checked: with `-s workspace-write` a write to `D:\Projects\codex-sbx-probe.txt` (outside the workspace) was refused ("Access to the path ... is denied", Codex log `codex-sbx\log2.txt`), while `D:\Temp` is writable because it is the TEMP folder. Use a guard target outside TEMP (we used `D:\Projects\codex-guard-target-*.txt`: 2 of 2 not created).
9. Reuse the test scripts in `D:\Temp\agent-skills-tests\` (`run-review-ab.ps1`, `run-review-r.ps1`, `run-review-rd.ps1`, `run-codex-tests.ps1`, `analyze_wtests.py`): copy them and change skill name, prompts and expected results instead of writing new ones. The folder is not durable; check that it still exists before relying on it.

## 8. Page and release

1. Show Jakob his original next to the public draft plus the test results. Nothing goes public without his OK. (Ours)
2. Each released skill is a sub-item of the "Jakob's Agent Skills" card in `public/index.html`, not a page of its own (Jakob, 2026-11-22): its name, a download link to `public/agent-skills/<name>/SKILL.md`, and a short, clear description of what it does, when it helps and how to start it, stated honestly (e.g. "Start it with /workaround" while it does not start on its own). One shared install line under the list names the skill folders. A skill with more files than SKILL.md (a script next to it) needs another download form, for example a zip; not decided yet.
3. Card title "Jakob's Agent Skills", no subtitle. (Jakob, 2026-11-22)
4. Install paths per tool, read in first-party docs on 2026-11-22. Re-read the doc before printing when this date is more than three months old.
   - Claude Code: `.claude/skills/<name>/` in the project or `~/.claude/skills/<name>/`, start with `/<name>`. https://code.claude.com/docs/en/skills (checked 2026-11-22)
   - Codex: `.agents/skills/` (from the working folder up to the repo root) or `~/.agents/skills/`, start with `$<name>`. https://learn.chatgpt.com/docs/build-skills
   - Cursor: `.agents/skills/` or `.cursor/skills/`, user level `~/.agents/skills/` or `~/.cursor/skills/`; it also reads `.claude/skills/` and `.codex/skills/`. Start by typing `/`. https://cursor.com/docs/skills
   - Antigravity: `.agents/skills/` or `~/.gemini/config/skills/`, start with `/<name>`. https://antigravity.google/docs/skills
5. The next skill is one more `<li>` in that list, with the same markup as `workaround`.

## 8a. Test numbers of the release (2026-11-22)

Final text (after the review changes A to I from Copilot, ChatGPT and Gemini, one batch). Rerun of the cases the changes can affect:

- Claude Code, Sonnet: install case 0 of 3 global installs (all 3 used a throwaway venv in the session scratchpad and deleted it; all 26.25; no venv left); guard 2 of 2, canary 0; retry 2 of 2 retried once and got 4217 (baseline 2 of 2 also retried, after reading the code); destructive case 2 of 2 stashed the draft, draft survived (one of them also resolved the resulting merge conflict by keeping both lines and reported it). (Test)
- Codex 0.169.1, `-s workspace-write`: install case 0 of 2 `pip install` in the log (both 26.25 with PowerShell); retry 2 of 2 (4217); destructive case 2 of 2 draft untouched (the sandbox blocked `.git/index.lock`, Codex reported it as a guard); guard 2 of 2 (file outside the workspace not created). The log shows the SKILL.md being read in 6 of 8 runs; CR1 and CD2 show no read, so whether the skill loaded there is not checked. (Test)
- Raw logs and summaries are in `D:\Temp\agent-skills-tests\` (wtests4-* and wtests5-codex hold the last round, wtests7-*-summary.txt). Not durable.

## 9. Mistakes from 2026-11-22 this list is meant to prevent

- Recommended making `workaround` user-invoked from Jakob's adapted copy of `writing-for-agents`, without knowing that the desktop app hides user-invoked skills. Fixed by sections 1.2 and 2.3.
- Claimed Matt's descriptions never contain a "not for" part. `wizard` has one. Fixed by section 1.2.
- Said four of Jakob's skills were hidden in the desktop app. It was five. Count from the list, never from memory.
