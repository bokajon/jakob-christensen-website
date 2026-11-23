---
name: preflight
description: Check a skill folder before you share or publish it. Runs a bundled script that finds private words, absolute and home paths, email addresses, keys and tokens, wrong or missing SKILL.md fields and names that work in one tool only, then reports what to fix. Use when the user is about to share, publish or package a skill, or asks whether a skill is safe to release. Not for judging whether the skill's instructions are any good.
compatibility: Needs Python 3 and nothing else. The script uses only the standard library.
---

# Preflight

Goal: a skill leaves your machine without anything private in it and with a header that other tools accept. The script finds the mechanical problems. You read what it cannot judge.

## Steps

1. **Ask for the private words once.** Private words are names, projects, machine names and internal documents that must not appear in a public skill. If the user has a word list file, use it. Otherwise ask for the words, write them one per line into a temporary file outside the skill folder, and delete it after the run. If the user has none, run without `--words` and say that private names were not checked.
2. **Run the script** from this skill's folder, once per skill folder, or with several folders in one call:
   `python -I scripts/preflight.py <skill-folder> [--words <file>] [--no-dashes] [--english]`
   - `--no-dashes` also reports em and en dashes. Add it only when the user's style forbids them.
   - `--english` adds a hint when a file looks partly German. Add it only when the skill is meant to be English.
3. **Fix every `PROBLEM` line** in the skill folder, then run the script again. Repeat until it prints `OK`. Never edit the script's rules to make a problem disappear.
4. **Read the hints by hand.** Open each linked address and check that it is the intended source. Look at every binary file yourself. A hint never fails the run.
5. **Report in three lines:** the result (OK or the open problems), what you changed, and what the script does not cover (below).

## What the script does not cover

It does not judge whether the instructions are correct, whether a script in the skill is safe, or whether text is copied from someone else's work. Say that last point to the user when the skill came from a source you did not write.

## Exit codes

0: no problems. 1: problems found. 2: wrong call, the script prints its usage.
