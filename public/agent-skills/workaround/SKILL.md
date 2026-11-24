---
name: workaround
license: MIT
description: Find another working route when the direct one is blocked by something outside your control (a tool fails or is missing, an API or feature is unavailable, a bug you cannot fix directly). Use when the user asks for a workaround or to get around a blocker, or when the direct route has failed for such a reason. Not for ordinary errors you can simply debug, and never for getting around a permission, an approval or a security check.
---

# Workaround

Goal: reach the original goal by another route, without hiding that the direct route failed.

1. Name the blocker in one line: what failed, the exact error message if one exists, and whether the cause is shown (in the output or reproduced) or only "probably". If the failure looks transient (a timeout, a dropped connection) and repeating the operation is safe and cannot duplicate side effects, retry once, but only after step 2 has shown the blocker is not a guard.
2. Decide whether the blocker is a guard: something put there on purpose to stop this action (a permission rule, a refused approval, a sandbox restriction, a security or safety check, a policy, an account limit or license restriction). A guard is never worked around with another tool or command: tell the user what was blocked and ask how to go on. A failing test, lint or build is not a guard, but skipping or weakening it is never the workaround either.
3. Otherwise collect up to 4 alternative routes (another tool, another API, a script, a manual step, or with the user's OK a smaller scope). Look at them one at a time with read-only checks where possible and make no exploratory changes with irreversible or external effects; stop collecting once one route is clearly safe, stays inside the project and can be verified; step 4 then picks among the routes found. Never use credentials, accounts or paid services the user has not already provided or approved.
4. Pick the route that keeps every change inside the project first, then the cheapest and closest to the original goal. A route that reaches beyond the project (a global install, PATH, shell configuration, services, package-manager state, system settings) or deletes or overwrites something that cannot be restored (uncommitted changes, git history already pushed to a shared branch) is put to the user first: ask and wait for the answer before doing it. A throwaway folder that only this task uses (for example a temporary virtual environment) counts as inside the project; remove it when the task is done, but keep anything the user needs and say so.
5. Do it, then verify that the result really works.
6. If none of the collected routes works, stop and say what you tried. Do not move on to riskier routes without the user's OK.
7. Report: blocker, chosen workaround, what it costs, changes or leaves out, what part of the goal was reached if only a part, and whether the real fix should be noted somewhere (an issue, a to-do, a line for the user).
