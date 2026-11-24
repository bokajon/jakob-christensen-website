I am about to publish the agent skill below under my own name on my personal website, as a free download. Review it like a strict senior reviewer before release. Open the sources listed here yourself and cite the exact file or page for every comparison or factual claim. If you cannot open a source, say so instead of answering from memory.

Context
- Skill: numbers-skeptic. (Formerly `retest`; the name is under review, see part 2.) What it does: before an agent reports a performance, timing, size or share claim as true, it must measure it with a tool, warm up and repeat the run, report median and spread with the machine's load, take runtime values from the running app and not from test fixtures, compute sizes, shares and "largest" instead of estimating them, and trace every kind of reference before saying something is "unused" or dead code.
- It must work in: Claude Code, Codex, Cursor and similar agents with a shell. No tool-specific features are used.
- Origin: written by me from my own working rules (state only what was checked; one run is not a reproduction). Part 1 is there to catch anything that slipped in from other people's skills anyway.
- Decided by me. Do not argue these, but flag one if it makes the skill unsafe or broken: model-invoked (no disable-model-invocation); no bundled script; "at least five measured repetitions" as the default for timing (an untuned starting value I chose, tell me if it is a bad default and for which kinds of measurement); the report table; the rule that a fixed fact read directly needs one command and no repetition.
- Already answered in an earlier review round, do not raise again unless the new text brings the problem back: three reviewers said the name sounds like planning, one asked for warm-up, median and spread (both are now in the text).
- Known from my own checks, you need not repeat them, but tell me what the text still allows: (a) Web search on 2026-11-24: the former name `retest` was already used by other skills with another job: skills.rest/skill/retest (mindfortai/security-skills, re-checks reported security findings), skills.cat thitic9203/ols-qa retest-bug-workflow (Jira bug retest after a fix), a `retest` from bromso/metapowers (content not seen), and `/retest` is the jpsim/retest GitHub Action comment that re-runs failed CI. Nearest in content: obra/superpowers verification-before-completion (claims need fresh evidence, nothing seen about repetition or spread), the `bench` skill of godmode (N runs, mean, median, stdev, retry on high variance), claude-corps `benchmark`, `check-benchmark` (caizongyuan/skills). Only partly read (page middles were cut off). (b) Test run on 2026-11-24 with a small fixture (see the notes file of the project; numbers are not part of this prompt).

Sources
- Agent Skills specification: https://agentskills.io/specification
- Anthropic, Skill authoring best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Anthropic's public skills: https://github.com/anthropics/skills (folder skills/)
- Matt Pocock's skills: https://github.com/mattpocock/skills (every folder under skills/, including deprecated, in-progress and misc)
- OpenAI's Codex skills catalog: https://github.com/openai/skills (marked deprecated, still readable)
- Tool docs: Claude Code https://code.claude.com/docs/en/skills, Codex https://learn.chatgpt.com/docs/build-skills, Cursor https://cursor.com/docs/skills
- Possible overlaps to read: https://github.com/obra/superpowers (skills/verification-before-completion), https://skills.rest/skill/retest, https://skills.cat/skills/thitic9203/ols-qa/retest-bug-workflow, https://www.claudepluginhub.com/skills/arbazkhan971-godmode/bench, https://www.claudepluginhub.com/skills/josephneumann-claude-corps/benchmark, https://www.skills.sh/caizongyuan/skills/check-benchmark

Do all six parts:
1. Origin and overlap. Name every skill in those repositories that does the same job or a large part of it. Quote overlapping sentences side by side. Flag any sentence of mine that looks copied or closely paraphrased. Say what mine does that those do not, or say plainly that it adds nothing.
2. Name. Is `numbers-skeptic` a good name for this job? Jakob chose it after `retest` clashed (see above); two web searches found no skill with exactly this name, but near ones: skills.sh argahv/novelty-skills/skeptic ("every claim false until proven"), openskillindex skeptic-pass, skills.sh backnotprop/pstack principle-explain-the-number (pages not read). Search for further skills with that name or a confusable one, and say what a user expects from `/numbers-skeptic`. Propose up to three alternatives, only if you find a real problem, and check each one against skills.sh, GitHub and the repositories above; say which you could not check.
3. Professional standard. Check against the specification and the best-practices page: frontmatter fields and limits; whether the description says what the skill does and when to use it, so an agent picks it at the right moment and not otherwise (for example when the user only wants a fixed fact like a line count, or when planning work); whether each step says what to do rather than what to avoid; length and what should move into a separate file; sentences that change nothing because a current model does that anyway; vague words an agent cannot act on (for example "high load", "wide spread", "like with like").
4. Agent behaviour. Walk through the skill as the agent running it, step by step: where would it skip the warm-up, report the mean, treat one run as enough, stop a process it should not stop, run something expensive or unsafe, measure something that is not deterministic in a way the skill does not cover (network, GPU, a UI, a flaky test), or ask the user something it could find out itself? Which common case is missing (a measurement that takes 10 minutes per run, a claim that cannot be measured locally, comparing two versions, a claim about a UI)? Is five repetitions a sensible default?
5. Safety and tool claims. Anything it allows without asking that spends resources, changes things outside the current project, loads a shared or paid service, or kills processes. For every factual claim in the text (for example the Windows load command, "over 50 percent CPU counts as high"): confirmed by a source (cite) or unverified.
6. Worth. Would an experienced user of these tools install it, or is it redundant with a built-in feature, a benchmark tool (hyperfine, a bundle analyzer) or an existing skill? One honest paragraph.

Answer format: one table with the columns ID (P1, P2, ...), Part (1-6), Exact sentence (quoted, or "missing"), Problem, Proposed rewrite (full text, ready to paste), Source (URL plus file or section, or "none"), Confidence (high, medium, low). Then the paragraph for part 6. No praise, no summary, no rewrite of the whole skill.

--- SKILL.md (paste starts here; the file is inside the code block below, its first line is the frontmatter) ---

````markdown
---
name: numbers-skeptic
compatibility: Needs a shell to run the measurement commands.
description: Measures performance, timing, size, share, ranking and "unused" or dead-code claims itself, with a warm-up, repeated runs, median and spread, a machine-load check and runtime values taken from the running app and not from test fixtures. Use it before reporting a speed-up, a regression, a frame rate, a load time, a ranking, a share, a bundle size or unused code. A single fixed fact that can be read directly (a line count, one file's size) needs one command and no repetition. It does not review other people's claims or reports.
---

# Numbers skeptic

Goal: every number in a report was measured by you, repeated where it varies, and comes from the thing that actually runs. A single run is an anecdote, and a guess from names or sizes is not a measurement.

## Steps

1. **Name the claim and the unit** in one line: "p95 request time under 200 ms", "bundle is 40 percent smaller", "folder X is the largest". Decide which command or tool will measure it. If it cannot be measured here (no GPU, no credentials, production-only traffic, no runnable build), write verdict "not checked" with the missing prerequisite and do not build a proxy benchmark.
2. **Take the value from the real thing.** A runtime value (a scale, a size, a speed, a limit) comes from the function or setting the running app uses, never from a test fixture, a default or a mock. If you build a mock-up or a comparison on such a value, check it against one known ratio from the live app before anyone sees it.
3. **Check the machine first.** Note what else runs: other builds, servers, browsers, indexing, a battery or power-saver mode. Close what you started and can close. Read the load with one command: on Linux or macOS `uptime` next to the core count (`nproc` or `sysctl -n hw.ncpu`), on Windows `(Get-CimInstance Win32_Processor | Measure-Object -Property LoadPercentage -Average).Average`. A load above half the cores (Windows: above 50 percent) counts as high; this threshold is a rule of thumb. If the load is high, say so next to the result; if you could not read it, write "load not measured". Note the PID of every process you start and stop only those PIDs, never by name (no `pkill`, `killall`, `taskkill /IM`); a dev server that was already running stays running.
4. **Warm up, then repeat.** Discard the first run or two (caches, JIT, cold disk). Run at least five measured repetitions for anything timing-based, with the same inputs and settings in the same order. Add runs (up to 20) while (max - min) / median is above 0.10; if it is still above 0.10, report the result as noisy. For runs over 10 seconds use 3 repetitions; if one run takes over 2 minutes or the series would take over 10 minutes, ask the user first or run once and mark the verdict "seen once". Deterministic values (sizes, counts) are read once.
5. **Report median and spread**, not the best run and not the mean alone: median, minimum and maximum, and the number of runs, computed with a tool (an inline one-liner is enough, no helper file left in the repository), not by hand. Write the machine and its load state in one line.
6. **Call it reproduced only after a repeat run.** The repetitions of step 4 are one run; a second, separate series (a new process, load checked again) that gives the same verdict is the repeat. One run that shows an effect is "seen once". A cause counts as shown when the code shows it or a controlled change toggles the effect; until then write "probably". A difference smaller than the larger of the two spreads is "no difference measured".
7. **Use the same conditions on both sides.** Before and after use the same inputs, the same build mode, the same cache state (cold or warm), the same dependency lockfile, the same machine state, and, where it is a UI, the same viewport and the same single open tab. Record the git commit or version of each side. Change one thing at a time.
8. **Measure sizes, shares and rankings, do not estimate them.**
   - Sizes: count or sum with a tool (`du`, a file listing, a bundle analyzer), not from folder names.
   - Shares and "most" or "largest": compute the total and each part, show the numbers, then rank.
   - "Unused", "dead" or "never called": trace every reference (imports, routes, entry points, config, dynamic lookups, scripts) before you say it. If you cannot trace one kind of reference, say which.
   - The benefit a recommendation promises: measure each claimed effect briefly, or mark it "not checked" in the table.
9. **Report** a table: claim, how measured, runs, median, spread, machine state, verdict (confirmed, seen once, not reproduced, not checked). Never merge "not checked" into "fine".

## Guardrails

Never report the best run as the result. Never state a percentage, a size or a ranking you did not compute. Never present a fixture value as the app's real value. Never leave a measurement tool or load generator you started running afterwards. Never load-test, benchmark or repeat-run a command that calls a shared, remote or paid service (cloud database, paid API): mock it locally or mark "not checked".
````
