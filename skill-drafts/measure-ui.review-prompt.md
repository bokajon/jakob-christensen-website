I am about to publish the agent skill below under my own name on my personal website, as a free download. Review it like a strict senior reviewer before release. Open the sources listed here yourself and cite the exact file or page for every comparison or factual claim. If you cannot open a source, say so instead of answering from memory.

Context
- Skill: measure-ui. What it does: when an agent changes or judges a web page's look or behaviour, it checks the running page in a real browser and reports measured numbers (viewport set first, `getBoundingClientRect` values, several switching orders for tabs and cards, one tab kept open for before and after) instead of judging by eye, and ends with a pass/fail table that lists what was not checked.
- It must work in: any agent tool that can open a page in a real browser and run JavaScript in it (Claude Code with a browser pane or MCP browser, Codex or Cursor with a browser tool). Without such a tool it must say the check was not run.
- Origin: written by me from my own working rules for checking UI work (the private rules are not public). Part 1 is there to catch anything that slipped in from other people's skills anyway.
- Decided by me. Do not argue these, but flag one if it makes the skill unsafe or broken: model-invoked (no disable-model-invocation); no bundled script or JavaScript snippet; the name measure-ui stays for this round; the rule that a user's reference screenshot is taken literally as the spec stays; the guardrail not to click submit, delete, buy or send stays.
- Already answered in an earlier review round, do not raise again unless the new text brings the problem back: none, first round. (An earlier mini-review by four reviewers on the idea only said "keep" and suggested the name ui-verify twice; I checked that name, at least four other skills use it.)
- Known from my own checks, you need not repeat them, but tell me where the text still allows a mistake: (a) Web search on 2026-11-24 found no skill called exactly measure-ui; nearest in content: autonomous-ui-inspection (fixed viewport example, getBoundingClientRect metrics, before and after screenshots), design-measure (turns a screenshot claim into numbers); none seen with the switching orders, the one-tab rule or the "not checked" list, but several pages were cut off when I read them. (b) One real run on 2026-11-24 in the Claude Code desktop app browser pane on a small local page (3 tabs, 375 x 812 and 1280 x 800, 7 switching steps, one CSS tweak, before and after): all steps worked, the numbers were reproducible (7 of 7 steps identical on repeat visits). It also showed a gap: the first load hit another project's server on the same port and measured the wrong page; step 2 does not say to confirm it is the intended page. Not tested: a hidden pane reporting 0 x 0, the animation stand-in step, several tabs of one site, keyboard focus, a start by description, other browsers or tools.

Sources
- Agent Skills specification: https://agentskills.io/specification
- Anthropic, Skill authoring best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Anthropic's public skills: https://github.com/anthropics/skills (folder skills/)
- Matt Pocock's skills: https://github.com/mattpocock/skills (every folder under skills/, including deprecated, in-progress and misc)
- OpenAI's Codex skills catalog: https://github.com/openai/skills (marked deprecated, still readable)
- Tool docs: Claude Code https://code.claude.com/docs/en/skills, Codex https://learn.chatgpt.com/docs/build-skills, Cursor https://cursor.com/docs/skills
- Possible overlaps to read: https://claudskills.com/skills/autonomous-ui-inspection/SKILL.md, https://raw.githubusercontent.com/makieali/claude-code-engineer/main/skills/frontend-verify/SKILL.md, https://skills.sh/hixuanxuan/browser-automation/visual-verify, https://www.skillsdirectory.com/skills/hkamkar-design-measure, https://tessl.io/registry/skills/github/mthines/agent-skills/ui-verify, https://www.skills.sh/jonmumm/skills/verify-ui

Do all five parts:
1. Origin and overlap. Name every skill in those repositories that does the same job or a large part of it. Quote overlapping sentences side by side. Flag any sentence of mine that looks copied or closely paraphrased. Say what mine does that those do not, or say plainly that it adds nothing.
2. Professional standard. Check against the specification and the best-practices page: frontmatter fields and limits (including the `compatibility` field); whether the description says what the skill does and when to use it, so an agent picks it at the right moment and not otherwise (for example when the user only changes backend code or asks for a unit test); whether each step says what to do rather than what to avoid; length and what should move into a separate file; sentences that change nothing because a current model does that anyway; vague words an agent cannot act on.
3. Agent behaviour. Walk through the skill as the agent running it, step by step: where would it measure the wrong page or element, skip the viewport, report adjectives instead of numbers, loop, stop too early, or ask the user something it could find out itself? Which common case is missing (a page behind a login, a framework page that renders after load, an element inside an iframe or shadow DOM, a page with infinite scroll, dark mode or reduced motion, a tool that cannot run JavaScript but can take screenshots)? Is the "other tabs open, numbers may be skewed" claim in step 6 supported by any browser documentation (cite) or unverified?
4. Safety and tool claims. Anything it allows without asking that changes data, signs in, clicks something destructive, closes the user's tabs, starts a long-running dev server, or measures a deployed site. Is the guardrail text enough ("never click submit, delete, buy or send")? For every claim about how a browser tool behaves (a hidden view reporting 0 x 0, tabs sharing a renderer process): confirmed by that tool's own docs (cite) or unverified.
5. Worth. Would an experienced user of these tools install it, or is it redundant with a built-in feature (Playwright or DevTools MCP tools, a project's own visual tests) or an existing skill? One honest paragraph.

Answer format: one table with the columns ID (P1, P2, ...), Part (1-5), Exact sentence (quoted, or "missing"), Problem, Proposed rewrite (full text, ready to paste), Source (URL plus file or section, or "none"), Confidence (high, medium, low). Then the paragraph for part 5. No praise, no summary, no rewrite of the whole skill.

--- SKILL.md (paste starts here; the file is inside the code block below, its first line is the frontmatter) ---

````markdown
---
name: measure-ui
description: Check the layout and behavior of a web page in a real browser with measured numbers instead of judging by eye. Sets the viewport first, reports element sizes and positions as numbers, switches between items in more than one order, and keeps one tab open for before and after comparisons. Use after a visual or interaction change to a page, when the user says something looks off or asks whether a layout works, or before you say a UI change is done. Not for unit tests, which do no layout.
compatibility: Needs an agent tool that can open a page in a real browser and run JavaScript in it. Without one, say the check was not run.
---

# Measure UI

Goal: a statement about how a page looks or behaves rests on numbers read from the running page, so a reader can compare them with what was wanted. A unit test in a simulated DOM does no layout and confirms nothing visual.

## Steps

1. **Fix the viewport first.** Set an explicit width and height before measuring. A hidden or background browser view can report 0 x 0, and every number is then meaningless. If the user gave a target (a phone, a screenshot), use its size. Otherwise check at least one narrow and one wide size and name them.
2. **Open the page and wait for it to settle.** Load the page from the dev server that serves the code you changed (check the project's launch config or `package.json` scripts, start it if none runs and leave it running). Use the deployed address only when the question is about the deployed state, and say which one you measured. Wait until fonts and images the layout depends on have loaded, or the numbers move on the next read.
3. **Write down what is wanted as numbers** before you measure: a size, a gap, a position, an order, an alignment, or "no horizontal scroll". If the user gave a reference (a screenshot plus "like this"), take it literally: that is the spec. Build to it and show the result, do not ask design questions that the reference already answers.
4. **Measure with the page's own geometry.** For each element that matters, run in the page `el.getBoundingClientRect()` and report `x`, `y`, `width`, `height` (rounded), plus any value the wanted result depends on (scroll width against client width, computed font size, the number of items in a row). Report numbers, not adjectives. Take a screenshot only when the user should look at something, and say what to look at.
5. **Exercise the behavior, not only the first state.** A page that switches between items (tabs, cards, a carousel, an accordion, routes) is checked by switching between at least two items (with many items include the first, the last and the one with the longest content), and in more than one order: A then B, B then A, and a repeat of the same item. Measure after each switch and compare with the first state. Check opening and closing, resize, and keyboard focus where the change touches them. Click only controls that switch views (tabs, cards, toggles, menus); never click submit, delete, buy or send, and on a deployed page change no data.
6. **For a before and after comparison, keep only the tab you opened for the measurement.** Close tabs you opened, never the user's. Several tabs of the same local site can share one renderer process, so a second running tab skews timing and sizes: if the user has other tabs of the site open, leave them and write "other tabs open, numbers may be skewed" in the report. Measure before the change, make the change, reload the same tab, measure again with the same viewport and the same steps.
7. **Mind animation loops.** If you replace `requestAnimationFrame` or timers with a stand-in to make a measurement steady, the stand-in must honor `cancelAnimationFrame` and `clearTimeout`. Otherwise loops of unmounted elements keep running and the numbers drift.
8. **Report** in a short table: what was wanted, what was measured, at which viewport, pass or fail. Name every check you did not run (a size, a browser, a switching order) as "not checked".

## Guardrails

Do not change the code under test in a way that alters the number you are measuring, such as adding styles to make an element visible. Do not close the user's own tabs or sign in to accounts for the check.
````
