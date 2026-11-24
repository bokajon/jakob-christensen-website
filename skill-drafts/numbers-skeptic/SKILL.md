---
name: numbers-skeptic
license: MIT
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
