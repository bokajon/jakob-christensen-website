# tidy - draft notes

## Sources read
- `C:\Users\fhs30332\.claude\skills\tidy\SKILL.md` (current), packaged plugin repo `D:\claude-skills` (`skills/productivity/tidy/SKILL.md`, one commit 6c700c3 "Add tidy skill as MIT plugin repo (0.1.0)", README/CHANGELOG/LICENSE not copied), backup `D:\Niagarama-Backup\...\tidy\SKILL.md` (identical to current).
- The plugin version was already mostly generic. The draft starts from it.

## Generalized
- "Jakob", "Fertig.", German report and the orange emoji marker removed. Report is in the conversation's language with a "Needs your attention" line.
- Git checks use the detected default branch (origin HEAD, then main, then master) instead of master.
- Added step 0 (stop if the session tools are missing) and the compatibility field.
- Tool names written without the mcp__ prefix.
- "typed /tidy" became "the user's request to tidy", since the skill can start without the slash command.

## Rules kept / changed / dropped
- Kept: archiving restores the session but not uncommitted worktree changes (desktop docs, Archive a session), so the step 3 dirty check carries the safety and nothing is asked, settled/live definitions, verify claims in git or the successor session, claimed merge missing from default branch makes the session live, parallel list_events with limit 8, archive in one batch, "already archived" is success, never archive the current session, never delete.
- Dropped: "when the call comes back with a hook-rewritten input (it adds a `session` field), resend once with exactly that input". It describes one specific hook in Jakob's setup, a stranger has no such hook. Recommendation: keep it only in his private copy.
- Changed: "ended with Fertig." became "a clear done or final report".

## Invocation: model-invoked
Checklist 2.3: the desktop app drops user-invoked skills, and tidy works only there, so a user-invoked tidy could never be started. Narrow description ("Use only when the user asks to tidy up ... Not for deleting ...") limits accidental starts, and the session can be restored (uncommitted worktree changes cannot, so step 3 checks them).

## Open questions
- Is a model-started archive acceptable without the explicit slash command? Recommendation: yes, the session is restorable, the dirty check guards the worktree and the description is narrow.
- Does a plain agent tool that lacks the session tools show it anyway? Not a concern: step 0 stops.

## Tested
- check_skill.py: exit 0. Not tested live (it would archive Jakob's real sessions).

## Overview (2026-11-23, merged from the idea "Session-Übersicht")
- Before archiving, tidy now shows every session in five groups (waiting for you, working or waiting for a result, unmerged or uncommitted work, stopped and should continue, settled), first match wins. The old "only asks what would be archived" path (step 4/5) is the same mode: overview only, group 5 headed "Would archive". A question about one group shows that group in full.
- Steps 4 to 7 are new (sort, show, archive, report); steps 0 to 3 unchanged. The goal text, the dry-run wording in step 1 and the description changed.
- Private copies (Claude and Codex): same new part in German, still user-invoked. `/tidy Übersicht` only shows the overview. Open for Jakob: because they are user-invoked, a plain question like "welche Sessions warten auf Antwort" does not start them.
- Tested: see `tools/SKILL-CHECKLIST.md` 8d (addendum).
