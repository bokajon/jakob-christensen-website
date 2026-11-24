---
name: measure-ui
description: Check the layout and behavior of a web page in a real browser with measured numbers instead of judging by eye. Sets the viewport first, reports element sizes and positions as numbers, switches between items in more than one order, and keeps one tab open for before and after comparisons. Use after a visual or interaction change to a page, when the user says something looks off or asks whether a layout works, or before you say a UI change is done. Not for unit tests (they do no layout), backend-only or API changes, or code review without a rendered page.
compatibility: Needs an agent tool that can open a page in a real browser and run JavaScript in it.
---

# Measure UI

Goal: a statement about how a page looks or behaves rests on numbers read from the running page, so a reader can compare them with what was wanted.

## Steps

0. **Check the tool.** Without a real browser tool, stop and say the check was not run. With a browser that cannot run JavaScript, report only what screenshots show, label those numbers "read from screenshot" and write "not checked" for scroll width, computed styles, element counts and anything else that needs the DOM.
1. **Fix the viewport first.**
   - Set an explicit width and height in CSS pixels before measuring. If the user gave a target (a phone, a screenshot), use its CSS-pixel size (a screenshot's pixel width divided by the pixel ratio if known, else its pixel width, and say which). Otherwise check 375 x 812 and 1280 x 800 and name them.
   - Read back `document.documentElement.clientWidth`, `innerHeight` and `devicePixelRatio`, report them and note any difference from what you set (on an emulated phone, `innerWidth` can exceed the set width when content overflows).
   - If the read-back size is 0 x 0 (a hidden or collapsed browser view), bring the view to the front or resize it and set the size again. Do not measure until the read-back is non-zero.
   - At every size compare `document.documentElement.scrollWidth` with `clientWidth`: larger means horizontal overflow, a fail unless the user asked for it.
2. **Open the page and wait for it to settle.**
   - Load the page from the dev server that serves the code you changed. Find its command in the project's launch config or `package.json` scripts. If no server runs, start that command in the background, wait until it answers, say which port it uses and leave it running. If you cannot tell which command, ask the user. Use the deployed address only when the question is about the deployed state, and say which one you measured.
   - Confirm that the page that answered is the one you meant (address, title or one known element). Another project's server may hold the port. A login or consent wall is the wrong page: do not sign in.
   - Wait on a condition, not a fixed pause: `await document.fonts.ready`, the images the layout depends on complete, the target element present and in its expected state (a framework can render after those signals).
   - Read the target's rect twice, 250 ms apart. If the two reads differ, repeat the pair, at most 3 pairs in total. If they still differ, report the element as unstable and follow step 7.
3. **Write down what is wanted as numbers** before you measure: a size, a gap, a position, an order, an alignment, or "no horizontal scroll". If the request has no measurable target ("make it look centered"), derive the smallest set of checks that answers it and label them "derived checks". If the user gave a reference (a screenshot plus "like this"), it is the spec: take it literally, list the viewport and any condition the screenshot does not show as assumptions, and do not ask design questions that the reference already answers.
4. **Measure with the page's own geometry.**
   - Rects: for each element directly related to the user's request, run in the page `el.getBoundingClientRect()` and report `x`, `y`, `width`, `height` in px (rounded). Rects are relative to the viewport: scroll to a known position first (for example `scrollTo(0, 0)`) and report `scrollX` and `scrollY` next to them. Add any value the wanted result depends on (computed font size, the number of items in a row). A rect of 0 x 0, or a missing element, means hidden or absent: report a failed check, not a size.
   - Special contexts: for an element in an iframe or an open shadow root, measure inside that document; write "not checked" for a cross-origin iframe or a closed shadow root. For an infinite list, measure only the first loaded batch and write "not checked" for the rest.
   - Reachability: for an element a user must reach, scroll it into view, then check that `elementFromPoint` at its center (`shadowRoot.elementFromPoint` inside a shadow root) returns it or a descendant, so a fixed header or banner is not covering it.
   - Themes and motion: if the change touches them, emulate `prefers-color-scheme` and `prefers-reduced-motion` and repeat the measurement, or write "not checked" if the tool cannot emulate them.
   - Report numbers, not adjectives. Take a screenshot only when the user should look at something, and say what to look at.
5. **Exercise the behavior, not only the first state.** A page that switches between items (tabs, cards, a carousel, an accordion, routes) is checked by switching between at least two items (with many items include the first, the last and one with long content found by inspection), and in more than one order: A then B, B then A, and a repeat of the same item. Measure after each switch and compare with the first state. Check opening and closing, resize, and keyboard focus where the change touches them. Click only controls that switch views (tabs, cards, toggles, menus), and read the control first (`tagName`, `type`, `href`, whether it sits in a form); if you cannot tell what it does, do not click it and write "not clicked". Never click anything that changes state or starts a write request or an auth or checkout flow (submit, save, publish, deploy, approve, archive, reset, sign out, delete, buy, send), treat icon-only or unclear buttons as "not clicked", and on a deployed page change no data.
6. **For a before and after comparison, measure in one tab.** List the tabs before you start and treat every existing tab as the user's. Measure in one tab you opened, close only tabs you opened, and leave the user's tabs alone. Measure before the change, make the change, reload the same tab, and measure again with the same viewport and the same steps. If you measured timing or frame rate and the user has other tabs of the same site open, write "other tabs open, numbers may be skewed" in the report (other tabs may compete for CPU or share a renderer process; browser-dependent, not verified here, and not expected to change layout sizes).
7. **Mind animation.** Running animations and transitions move rects between reads: wait for them to finish or pause them and say you did. If you replace `requestAnimationFrame` or timers with a stand-in to make a measurement steady, the stand-in must honor `cancelAnimationFrame` and `clearTimeout`. Otherwise loops of unmounted elements keep running and the numbers drift.
8. **Report** in a short table: what was wanted, what was measured, at which viewport, pass or fail. Name every check you did not run (a size, a browser, a switching order) as "not checked".

## Guardrails

Do not change the code under test in a way that alters the number you are measuring, such as adding styles to make an element visible. Do not sign in to accounts for the check.
