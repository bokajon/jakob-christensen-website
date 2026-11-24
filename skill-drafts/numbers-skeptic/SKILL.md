---
name: numbers-skeptic
description: Verify a performance, timing, size or share claim by measuring it, repeating the measurement and reporting the spread, before calling it reproduced or true. Repeats a run, reports median and spread, checks the machine's load, takes runtime values from the running app and not from test fixtures, and measures sizes, shares, "largest" and "unused" instead of estimating them. Use before you report a speed-up, a regression, a frame rate, a load time, a ranking, a share, a bundle size or dead code. A fixed fact you read directly (a line count, one file's size) needs one command and no repetition. Measures the numbers itself; it does not review other people's claims or reports.
---

# Numbers skeptic

Goal: every number in a report was measured by you, repeated where it varies, and comes from the thing that actually runs. A single run is an anecdote, and a guess from names or sizes is not a measurement.

## Steps

1. **Name the claim and the unit** in one line: "p95 request time under 200 ms", "bundle is 40 percent smaller", "folder X is the largest". Decide which command or tool will measure it.
2. **Take the value from the real thing.** A runtime value (a scale, a size, a speed, a limit) comes from the function or setting the running app uses, never from a test fixture, a default or a mock. If you build a mock-up or a comparison on such a value, check it against one known ratio from the live app before anyone sees it.
3. **Check the machine first.** Note what else runs: other builds, servers, browsers, indexing, a battery or power-saver mode. Close what you started and can close. Read the load with one command (for example `uptime`, or on Windows `Get-Counter '\Processor(_Total)\% Processor Time'`); over 50 percent CPU before the run counts as high. If the load is high or unknown, say so next to the result. Stop only processes you started in this session; a dev server that was already running stays running.
4. **Warm up, then repeat.** Discard the first run or two (caches, JIT, cold disk). Run at least five measured repetitions for anything timing-based, with the same inputs and settings in the same order. More if the spread is wide. Deterministic values (sizes, counts) are read once.
5. **Report median and spread**, not the best run and not the mean alone: median, minimum and maximum, and the number of runs, computed with a script and not by hand. Write the machine and its load state in one line.
6. **Call it reproduced only after a repeat run.** The repetitions of step 4 are one run; a second, separate series (a new process, load checked again) that gives the same verdict is the repeat. One run that shows an effect is "seen once". A cause counts as shown when the code shows it or a controlled change toggles the effect; until then write "probably". A difference smaller than the spread is "no difference measured".
7. **Compare like with like.** Before and after use the same inputs, the same build mode, the same machine state, and, where it is a UI, the same viewport and the same single open tab. Change one thing at a time.
8. **Measure sizes, shares and rankings, do not estimate them.**
   - Sizes: count or sum with a tool (`du`, a file listing, a bundle analyzer), not from folder names.
   - Shares and "most" or "largest": compute the total and each part, show the numbers, then rank.
   - "Unused", "dead" or "never called": trace every reference (imports, routes, entry points, config, dynamic lookups, scripts) before you say it. If you cannot trace one kind of reference, say which.
   - The benefit a recommendation promises: measure each claimed effect briefly, or mark it "not checked" in the table.
9. **Report** a table: claim, how measured, runs, median, spread, machine state, verdict (confirmed, seen once, not reproduced, not checked). Never merge "not checked" into "fine".

## Guardrails

Never report the best run as the result. Never state a percentage, a size or a ranking you did not compute. Never present a fixture value as the app's real value. Never leave a measurement tool or load generator you started running afterwards. Never load-test or benchmark a shared, remote or paid service: measure locally or mark "not checked".
