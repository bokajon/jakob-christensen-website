---
name: workaround
description: Find another working route when the direct one is blocked by something outside your control (a tool fails or is missing, an API or feature is unavailable, a bug you cannot fix directly). Use when the user asks for a workaround or to get around a blocker, or when the direct route has failed for such a reason. Not for ordinary errors you can simply debug, and never for getting around a permission, an approval or a security check.
---

# Workaround

Goal: reach the original goal by another route, without hiding that the direct route failed.

1. Name the blocker in one line: what failed, the exact error, and whether the cause is shown (in the output or reproduced) or only "probably".
2. Decide whether the blocker is a guard: something put there on purpose to stop this action (a permission rule, a refused approval, a sandbox restriction, a security or safety check, a policy). A guard is never worked around with another tool or command: tell the user what was blocked and ask how to go on. A failing test, lint or build is not a guard, but skipping or weakening it is never the workaround either.
3. Otherwise collect 2-4 alternative routes (another tool, another API, a script, a manual step, a smaller scope). Check each one quickly without changing anything. Never use credentials, accounts or paid services the user has not already provided or approved, and get the user's OK before shrinking the scope.
4. Pick the route that is reversible first, then cheapest and closest to the original goal.
5. Do it, then verify that the result really works.
6. If none of the collected routes works, stop and say what you tried. Do not move on to riskier routes.
7. Report: blocker, chosen workaround, what it costs, changes or leaves out, and whether the real fix should be noted somewhere (an issue, a to-do, a line for the user).
