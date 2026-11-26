# Inca and Pict: what they need from the page around them

Inca (`inca.js`) and Pict (`pict.js`) carry their own styles (injected as `#inca-css` / `#pict-css`) and keep every browser-storage key in one `SK` object at the top of the file (the project .json files use these names, so they never change). What is left of the coupling to the handbook is the host object `window.sbhEgg`:

| Tool | Needs | Without it |
|---|---|---|
| Pict | `sbhEgg.tick` (sound, optional), `sbhEgg.props` (object library) | Draws, saves, exports and imports. "Would Become" and "Place Object" stay out. Proven by `pict.html`, which supplies only a no-op object. |
| Inca | `sbhEgg.muted`, `calm`, `found`, `emptySpot`, `tick`, and `sbhEgg.props` (about 30 members: load, rank, sprite, snap, place, motion, learn, ...) | Does not open: `E.muted is not a function`. |

`E.props` lives in `index.html` (around the line `E.props={size:...`) on top of the data in `props-lib.js`, mixed in with the handbook's game code.

Host-owned page hooks that remain on purpose: `html.inca-bare`, `html.inca-nonames`, `html.inca-mute` (Inca toggles them, the handbook hides things), `egg-carrying`, `egg-app-open`.

Next step to make Inca standalone: move `E.props` out of `index.html` into its own file, then give `inca.html` the same small host object as `pict.html`.

## Colors and storage (decoupling)

- Colors: both tools define their own tokens (`--ink`, `--surface`, `--line`, `--accent`, ... ) on `.egg-cube` / `.egg-pict`, dark by default, light under `data-theme="light"`. The page may hand over its theme through `--tool-ink`, `--tool-surface`, ... (the handbook does so in one `:root` rule in `index.html`, which keeps its light theme and high contrast working in the tools). Without them the tools look the same as in the handbook.
- Button position rule for `button.cp` now lives in each tool's own CSS.
- Storage: the tools' keys (`sbh-cube*`, `sbh-pict*`) are used by no handbook code and stay unchanged (no migration needed, saved projects keep working). The only handbook key (`sbh-eggs`) is no longer read by Inca directly: it asks `sbhEgg.foundIt(key)` from the host.
