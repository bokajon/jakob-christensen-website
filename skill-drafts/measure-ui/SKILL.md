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
