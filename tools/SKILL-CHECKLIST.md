# Checklist for writing and publishing a skill

Work through this list for every skill before it goes on the Agent Skills page. Each rule says where it comes from:

- **Matt** = checked line in the original mattpocock/skills repo, version 1.3.2, downloaded and read 2026-11-22 (paths relative to that repo).
- **Test** = measured in our own headless runs (method in section 7).
- **Ours** = our own decision, not taken from anyone.

## 1. Origin

1. Read `~/.claude/FAKTEN.md` first. A skill listed there as someone else's is never published under Jakob's name, however much it was adapted. (Ours)
2. When a rule is "how Matt does it", read Matt's original repo, never Jakob's local adapted copy of a Matt skill. A claim like "Matt never/always does X" needs a search over all his skills first. (Ours, after two wrong claims on 2026-11-22: see section 9)

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

## 5. Side effects

1. Every change that reaches outside the current project (global package install, PATH, system settings, global config files, accounts, paid services) is put to the user first. (Ours. Matt is not consistent here: `git-guardrails-claude-code/SKILL.md:22-24` asks "this project or all projects", `setup-pre-commit/SKILL.md:81-83` installs and commits without asking)
2. Reason: with `/workaround` loaded, Sonnet still ran a global `pip install csvkit` without asking in 2 of 2 runs, because "reversible first" let it through. (Test, 2026-11-22)
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

## 8. Page and release

1. Show Jakob his original next to the public draft plus the test results. Nothing goes public without his OK. (Ours)
2. Page content, following Matt's docs pattern (Matt: `.agents/writing-docs.md`): what it does, when to use it with the invocation mode stated honestly (e.g. "start with /workaround"), what it needs, the steps, common questions, how you see that it worked.
3. Card title "Jakob's Agent Skills", no subtitle. (Jakob, 2026-11-22)

## 9. Mistakes from 2026-11-22 this list is meant to prevent

- Recommended making `workaround` user-invoked from Jakob's adapted copy of `writing-for-agents`, without knowing that the desktop app hides user-invoked skills. Fixed by sections 1.2 and 2.3.
- Claimed Matt's descriptions never contain a "not for" part. `wizard` has one. Fixed by section 1.2.
- Said four of Jakob's skills were hidden in the desktop app. It was five. Count from the list, never from memory.
