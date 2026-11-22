---
name: blindtest
description: Blind, countable proof of whether a prompt, skill or agent change really does better than the old version and than a baseline without it, or an audit that calibrates blind readers on known bad and good examples before a clean result over many texts is trusted. Use when the user asks whether a change helps, wants to compare versions or prompts, or wants a read over many texts checked by blind readers. Not for wording fixes, typo fixes or changes that add no new logic.
compatibility: Needs a way to start independent agent runs in fresh contexts, and Node.js 18+ for scripts/anonymize.mjs. Judges should be a different model from the author where the tool offers one.
---

# Blindtest

Two modes. **Compare** answers "is the new version better than the old one and than no version at all". **Audit** answers "can the blind readers find what we need them to find", before a clean result over many texts is trusted.

## Principles

- The evidence is countable, blind and measured against a truth fixed before any answer is read. A general impression or a ranking by usefulness is never the verdict.
- Length is not a quality measure and appears in no judge prompt as a criterion. Do not write "shorter is better" or "to the point" either: it makes length count. Weight counts only as order: is the most important finding first?
- The author never judges their own work. Cases, solution lists and ratings come from another model that does not know what is being tested.
- At least 2 runs per variant and at least 2 blind judges who read in a different order. Never cut this: a judge varies on the same answer.
- Look up numbers such as effort, cost and duration where the project or tool knows them, and mark every estimate as an estimate.

## Choosing the test

- **No blind test**: corrections without new logic (contradictions, examples, wording).
- **Batched**: changes that can alter findings wait on a development branch and go into one test together.
- **Full blind test**: a new capability or a rebuild, before it goes live.

## Spending little

- **Fixed test set**: for each case keep the documents, the solution list and the saved runs of the baseline and the old version, each with model and date. Create them once. Saved runs only hold for the same model: after a model change, create them again.
- **No tuning to the test set**: never read its solution lists while building or changing the prompt. Every full test brings one new case, which then joins the set.
- **Only the variants the question needs**: for "better than before" only the new version reruns, plus the old one where it is not saved.
- **Only the parts that changed**: rerun the changed component and everything that reads its output. Take the rest from saved runs.
- **Early stop**: run and rate one case first. If the new version is worse in both runs and with both judges, stop. A win is never declared early: it needs all cases.

## Compare

1. **Name the setup and get the user's OK first**: what is compared, the biases that remain (the author rates their own prompts, hand-picked cases, unequal effort), the fairer option (another model or humans as judges, equal effort on both sides, real cases with real critique, several runs), and the cost (runs, judges, time). Start nothing before the OK.
2. **Cases**: 2 to 4 from the fixed set, covering different areas. For a new case, prefer a real public one with real expert critique that you find yourself, ideally published after the model's knowledge cutoff, such as a published report with its review, a public peer review or an audit report. Otherwise another model writes realistic documents of average quality without knowing what is tested. The user may approve the case choice, nothing more is needed from them.
3. **Fix the truth before reading any answer** (new cases only): real reviews are the solution list where they exist. Add a blind list from another model that reads only the document. Write your own list first and name where it differs. The list also covers expert findings that are not visible in the document (law, responsibility, domain knowledge, typical mistakes of the field).
4. **Runs**, each in a fresh context, at least 2 per variant, on the same model, only what is not saved:
   - the new version and the old version, with the case as input;
   - the full setup (all its parts, not one part), when the question is whether the setup is worth having;
   - the baseline as a single, well-phrased plain question;
   - the baseline as a conversation with follow-ups ("what am I still missing?") at the same effort as the setup.
5. **Anonymize**: `node scripts/anonymize.mjs <runs-folder> <blind-folder> <key-file>`. Name the files `<case>_<variant>_<run>.md`. Add `--strip-fence`, `--strip-title` or `--strip-line <regex>` to remove framing that gives the variant away, and read its leak warnings. Keep the key file outside the project and out of the judges' reach until judging ends.
6. **Pool of extra findings**: collect every finding from any side that is not on the solution list. A blind judge rates each one: correct or not, visible in the document or expert knowledge, significant or not. An expert finding counts only with a checkable source (a law, a standard, literature), which the judge verifies.
7. **Blind judges** (another model, random ids, two passes in different reading order). Count per answer:
   - hits against the solution list (yes 1, partly 0.5);
   - **coverage**: the share of the correct baseline findings that the setup under test also has (target 100 percent), with every missing one listed;
   - **extra**: correct findings only the setup has, and how many of them are expert knowledge from outside the document;
   - false alarms (criticizes what is correctly in the document);
   - invented or unmarked claims;
   - order: is the most important finding in the first lines?
8. **Spot check**: verify at least one judge statement yourself against the run.
9. **Verdict** in the order of criteria fixed in step 1 (accuracy, closeness to reality, then order is a sensible default). State the weaknesses of the setup openly: all models from one family, number of runs, training data, recognizable structure of one variant, and a prompt that asks for what is then counted (an advantage there proves little).
10. **Store** the setup, key, result and weaknesses in a README in the project's test folder, with the cases, prompts, runs and ratings beside it, and record the result where the project keeps test results.

## Audit

Use before trusting that a clean result over many texts really means nothing is there.

1. **Name the setup and the cost first and get the user's OK**: what is read, which biases remain, how many readers, which model, and the corpus size (about 4 characters per token, an estimate, per reader and pass). Run the calibration alone first.
2. **Calibration set, built by script and not read by you**: earlier versions that held a known violation (known bad), mixed with their fixed versions and untouched entries (known good), shuffled, under random ids.
3. **Fix the pass mark before any reader runs and write it down.** Default: at least 80 percent of the known violations found and at most 1 false alarm per 5 clean entries. These numbers are set, not measured: revisit them after the first run.
4. **Readers** run in a fresh context, know nothing about the calibration, are at least 2 and read in different entry order. They get only the rule text and the entries, and judge wording and logic only. Their opinion about outside facts is not a source. Per finding: location, exact quote, rule broken, and why it matters. Whoever wrote or fixed the texts is not a reader.
5. **Count per reader**: hits, misses, false alarms. Below the pass mark, stop and report: the corpus is not run.
6. **Corpus run** in batches. A finding from both readers goes on the main list, a finding from one reader on a second list.
7. **Check every finding against the live source**, never an export or backup. Reject what does not hold and count the rejections.
8. **Fixes** follow the project's normal rules: back up first, and leave texts that already say it correctly alone.
9. **Log the counts**, including what was not covered, and close the related open item.

Known limits, always stated in the log: all readers are one model family, and the calibration set holds only violations that earlier keyword searches found, so a good score says little about violations without marker words. New findings from the corpus run are the only evidence for those.
