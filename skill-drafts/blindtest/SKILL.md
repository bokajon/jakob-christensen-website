---
name: blindtest
description: Blind, countable evidence of whether a prompt, skill or agent change really does better than the old version and than a baseline without it, or an audit that calibrates blind readers on known bad and good examples before a clean result over many texts is trusted. Use when the user asks for a blind or counted test of whether a change helps, or wants many texts read by calibrated blind readers. Not for wording or typo fixes, plain diffs or changes that add no new logic.
compatibility: Needs a way to start independent agent runs in fresh contexts, and Node.js 18+ for scripts/anonymize.mjs. Judges should be a different model from the author where the tool offers one.
---

# Blindtest

Two modes. **Compare** answers "is the new version better than the old one and than no version at all". **Audit** answers "can the blind readers find what we need them to find", before a clean result over many texts is trusted.

## Principles

- The evidence is countable, blind and measured against a truth fixed before any answer is read. A general impression or a ranking by usefulness is never the verdict.
- Judges score only the counted criteria. Length is not a quality measure, so no judge prompt rewards brevity: "shorter is better" or "to the point" would make length count. Order counts: is the most important finding first?
- The author never judges their own work. Cases, solution lists and ratings come from another model that does not know what is being tested.
- At least 2 runs per variant and at least 2 blind judges, each reading every answer once in a different order. Never cut this. If the tool offers no other model, use same-model judges in fresh contexts and list it as a weakness. If it cannot start fresh-context runs at all, the formal test cannot run: say so.
- Record effort, cost and duration where the tool shows them, and mark every estimate.

## Choosing the test

- **No blind test**: corrections without new logic (contradictions, examples, wording).
- **Batched**: changes that can alter findings wait on a development branch and go into one test together.
- **Full blind test**: a new capability or a rebuild, before it goes live.

## Spending little

- **Fixed test set**: for each case keep the documents, the solution list and the saved runs of the baseline and the old version, each with model, effort and date; create missing ones once. Saved runs only hold for the same model and effort: after a change of either, create them again.
- **No tuning to the test set**: never read its solution lists while building or changing the prompt. Every full test brings one new case, which then joins the set.
- **Only the variants the question needs**: for "better than before" only the new version reruns, plus the old one where it is not saved.
- **Only the parts that changed**: rerun the changed component and everything that reads its output. Take the rest from saved runs, and list in the weaknesses that this can hide effects between parts.
- **Early stop**: part of Compare step 4. Run steps 4 to 7 on one case first. If the new version is worse in both runs and with both judges, stop and report a failed first check, not an overall loss. A win is never declared early: it needs all cases.

## Compare

1. **Name the setup and get the user's OK first**: what is compared, the biases that remain (the author rates their own prompts, hand-picked cases, unequal effort), the fairer option (another model or humans as judges, equal effort on both sides, real cases with real critique, several runs), and the cost (runs, judges, time). Also name which texts go to which model or provider, whether a web search for public cases is allowed, a cap on runs, and the folder `blindtest/<topic>/` if it will be created. Start nothing before the OK. Write down the ordered criteria, the margin that counts as a win, and the allowed verdicts including "inconclusive".
2. **Cases**: look in the project for an existing test folder or fixed set first, otherwise create `blindtest/<topic>/` and mark which variants are required. Take 2 to 4 cases with different kinds of flaw or different scenarios. For a new case, prefer a real public one with a published review, peer review or audit report that you can cite and find yourself, ideally published after the model's knowledge cutoff. Otherwise another model, which does not know what is tested, writes documents with several realistic flaws and lists them as the solution list.
3. **Fix the truth before reading any answer** (new cases only): real reviews are the solution list where they exist. Add a blind list from another model that reads only the document. Write your own list first only if you did not write the change, and name where it differs. If you wrote it, add only the points you dispute. The list also covers expert findings that are not visible in the document (law, responsibility, domain knowledge, typical mistakes of the field), but only those that matter for the task and have a checkable source.
4. **Runs**, each in a fresh context, at least 2 per variant, on the same model, only what is not saved. Run steps 4 to 7 on one case first (early stop). Give each variant its own run folder that holds only that variant's skill, installed as it would be used, and put no variant label in the prompt. Global or project skills and rules the tool loads on its own also reach the runs: check in each run's log which skills loaded, start the runs from a clean folder outside the project where the tool allows it, and list in the weaknesses what could not be switched off. The variants:
   - the new version and the old version, with the case as input.
   - the full setup (all its parts, not one part), when the question is whether the setup is worth having.
   - the baseline as one plain prompt with the task and the document and no skill text.
   - the baseline as a conversation: the same prompt plus as many follow-ups ("what am I still missing?") as the setup has passes.
5. **Anonymize**: copy all answers into one flat folder named `<case>_<variant>_<run>.md`, then run `node <skill-folder>/scripts/anonymize.mjs <runs-folder> <blind-folder> <key-file>`, where `<skill-folder>` is the folder that holds this SKILL.md. Use short variant codes such as `v1`, `v2`, `base0`, so that a leak warning is a real one. Add `--strip-fence`, `--strip-title` or `--strip-line <regex>` to remove framing that gives the variant away, and read its leak warnings. The script refuses a non-empty blind folder and an existing key file, and prints what stripping did. Skim the answers for model names, paths and signatures before judging. Keep the key file in a folder outside the judges' reach, hand the judges only the answer texts, and copy the key into the README only after judging ends.
6. **Pool of extra findings**: collect every finding from any side that is not on the solution list, and merge equal findings into one entry. A blind judge rates each one: correct or not, visible in the document or expert knowledge, significant or not. An expert finding counts only with a checkable source (a law, a standard, literature), which the judge verifies.
7. **Blind judges** (another model, random ids, 2 judges, each reading once in a different order). Tell them to ignore length and format. Count per answer:
   - hits against the solution list (yes 1, partly 0.5).
   - **coverage**: the share of the correct baseline findings that the setup under test also has (target 100 percent), with every missing one listed.
   - **extra**: correct findings only the setup has, and how many of them are expert knowledge from outside the document.
   - false alarms (criticizes what is correctly in the document).
   - invented or unmarked claims.
   - order: is the most important finding in the first lines?
8. **Spot check**: verify yourself against the run every point where the two judges count differently, and at least one point where they agree.
9. **Verdict** in the order of criteria fixed in step 1, using only what step 7 counted. State the weaknesses of the setup openly: all models from one family, number of runs, training data, recognizable structure of a variant, and a prompt that asks for what is then counted.
10. **Store** the setup, result and weaknesses, and the key after judging, in a README in the project's test folder, with the cases, prompts, runs and ratings beside it. Where the project keeps a log of test results, add the result there; where it tracks open items, tell the user which item this closes and change the tracker only after the user agrees.

## Audit

Use before trusting that a clean result over many texts really means nothing is there.

1. **Name the setup and the cost first and get the user's OK**: what is read and the live source (read only), which biases remain, how many readers, which model and which provider receives which texts, and the corpus size in characters and in tokens (a marked estimate), per reader and pass. Run the calibration alone first.
2. **Calibration set, built by script and not read by you**: earlier versions that held a known violation (known bad), mixed with their fixed versions and untouched entries (known good), shuffled, under random ids. Never put the bad and the fixed version of the same entry into one reader's batch, or the reader can spot the difference. With no history of violations, another model that does not know the reader prompt writes entries with planted violations of the rule, and the labels stay in a key the readers cannot reach.
3. **Fix the pass mark before any reader runs and write it down.** Default: at least 80 percent of the known violations found and at most 1 false alarm per 5 clean entries, on a set of at least 10 known violations and 25 clean entries. These numbers are set, not measured. Change them only by a logged decision before a new run, never after seeing results. Below the mark, fix the reader prompt and calibrate again.
4. **Readers** run in a fresh context, know nothing about the calibration, are at least 2 and read in different entry order. They get only the rule text and the entries, and judge wording and logic only. Their opinion about outside facts is not a source. Per finding: location, exact quote, rule broken, and why it matters. Whoever wrote or fixed the texts is not a reader.
5. **Count per reader**: hits out of all known violations, misses, and false alarms out of all clean entries. Below the pass mark, stop and report: the corpus is not run.
6. **Corpus run** in batches. All findings of both readers go into one queue, each marked with whether one or both readers found it.
7. **Check every finding against the live source**, never an export or backup. Reject what does not hold and count the rejections. A finding stays unconfirmed where the live source cannot be read.
8. **Fixes** start only after the user approves an exact list. Follow the project's normal rules: back up first, tell the user the backup path, and leave texts that already say it correctly alone. On a large corpus, check a sample of the changed texts afterwards.
9. **Log the counts**, including what was not covered. Where the project tracks open items, tell the user which one this closes and change the tracker only after the user agrees.

Known limits, always stated in the log: all readers are one model family, and the calibration set holds only violations that earlier keyword searches found, so a good score says little about violations without marker words. New findings from the corpus run are the only evidence for those.
