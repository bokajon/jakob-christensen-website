# Notes: blindtest

## Read
- D:\Choir\gec-prompt-tools\.claude\skills\blindtest\SKILL.md (commits 4cb0258 2026-11-01, 4791cd0 2026-11-04), tests\blindtest\anonym.mjs, tests\ziele\README.md.
- D:\NiagaraUI\.claude\skills\blind-audit\SKILL.md (one commit, 9ce762db 2026-11-05). The history of blindtest has only the two commits above, the second added "choosing the test" and "spending little". No other corrections found.

## Generalized
- One skill, two modes: compare (from blindtest) and audit (from blind-audit).
- Choir wording removed (personas, score, pkg_base.js, ELIAS, dump and full commands, golden rule, test folder names). "Choir versus chat" became "setup under test versus baseline".
- anonym.mjs became scripts/anonymize.mjs: arguments runs folder, blind folder, key file. File name pattern <case>_<variant>_<run>.md. Framing removal is now optional flags (--strip-fence, --strip-title, --strip-line, --ext). Added: fair shuffle with crypto, refusal when the key file lies inside the blind folder, leak warning when an answer contains a variant name.

## Original rules
- Kept: truth fixed before reading answers. Countable and blind. Length never a criterion (with the original lesson that "shorter is better" makes length count). Author never judges own work. At least 2 runs and 2 judges in different order, never cut. Look up numbers (now: mark estimates). No blind test for wording fixes, batching, full test for new capabilities. Fixed test set with saved runs per model. No tuning to the set, one new case per full test. Only needed variants and changed parts. Early stop and no early win. Setup, biases, fairer option and cost named first with OK. Real public cases or other-model cases. Blind solution list plus own list with differences plus expert findings. Fresh-context runs, baseline as single question and as conversation at equal effort. Anonymizing with key kept away. Pool of extra findings with checkable sources. Counts (hits, coverage, extra, false alarms, invented, order). Spot check. Verdict order and open weaknesses. Storage in a README.
- Kept from blind-audit: setup and cost OK, calibration set built by script and unread, pass mark fixed first (80 percent, 1 false alarm per 5, flagged as set not measured), readers fresh and blind, counting, stop below the pass mark, batches with main and second list, check against live source, backups before fixes, log with limits.
- Changed: "Jakob has no time, everything without him" became "the user approves only the case choice". Verdict order "golden rule" became "criteria fixed in step 1, accuracy then closeness to reality then order as default". The Choir list of real case sources (accreditation reports, planning documents) became generic examples.
- Dropped as project-specific: Choir test folders, the branch name of the code test case, memory file entry, "no university one-sidedness", "reads in pkg_base.js", the 775 KB corpus size, commit hashes and CLAUDE.md section references of the audit, the open-items entry.
- Dropped: the original "judge varies by about 8 points" figure, because its scale is not stated in the source. The rule stays without the number.

## Open questions (Jakob's taste)
- Two modes in one skill or two skills? Recommendation: one, as the audit is a calibration step before reader-based tests.
- Default pass mark 80 percent and 1 false alarm per 5 is unmeasured in the source. Recommendation: keep as default, revisit after the first real run.
- Does the description make the skill start on its own? Not measured (checklist 3.4). Recommendation: claim nothing about auto-start on the page.

## Tested
- node --check scripts/anonymize.mjs: ok.
- Smoke test in D:\Temp\skill-draft-tests\blindtest: three dummy runs (case1_new_1, case1_old_1, case1_chat_1) with --strip-fence --strip-title: exit 0, three files Answer_<random letter>.md, fence and title removed, key.json maps ids to original names and word counts. The leak warning fired for variant names appearing in text ("old", "chat"). A key file inside the blind folder is refused (exit 1).
- python -I tools/check_skill.py skill-drafts/blindtest: exit 0.
- Not checked: a real blind test run with the skill, whether an agent follows the steps, behaviour in Codex or Antigravity, groups of more than 26 answers (the script refuses them).
