/* Inca, the small 3D program (Jakob, 18.10.2026): loaded by the handbook only when it is needed (see the loader in index.html).
   Its styles come first and are added to the page when the file runs. Edit this file; tools/lazy_stamp.py updates its version in index.html. */
(function(){ var st=document.createElement("style"); st.id="inca-css"; st.textContent=".egg-cube{position:fixed;inset:0;z-index:9500;pointer-events:none;opacity:0;transition:opacity .35s;--cg:#f2c14e;font:600 0.874rem/1.3 ui-monospace,Menlo,Consolas,monospace;color:var(--ink)}\n"
  +".egg-cube.in{opacity:1}\n"
  +".egg-cube canvas.cube-gl,.egg-cube canvas.cube-ov{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}\n"
  +".egg-cube .cube-ui{pointer-events:auto;background:var(--surface);border:1px solid var(--cg);border-radius:14px;box-shadow:0 0 0 .5px var(--cg),0 18px 48px rgba(0,0,0,.5),0 4px 12px rgba(0,0,0,.3);box-sizing:border-box}\n"
  +".egg-cube button{all:unset;cursor:pointer;box-sizing:border-box;padding:7px 11px;border-radius:9px;color:var(--ink);font:inherit;font-weight:700;line-height:1.2;white-space:nowrap}\n"
  +".egg-cube button:hover,.egg-cube button:focus-visible{background:var(--surface-2)}\n"
  +".egg-cube button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}\n"
  +".egg-cube button:disabled{opacity:.4;cursor:default;background:none}\n"
  +".egg-cube button[aria-pressed=\"true\"]{background:color-mix(in srgb,var(--cg) 22%,var(--surface));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--cg) 70%,transparent)}\n"
  +"html.egg-cube-drag,html.egg-cube-drag *{-webkit-user-select:none!important;user-select:none!important}\n"
  +"html.egg-cube-alt,html.egg-cube-alt *{cursor:all-scroll!important}\n"
  +"html.egg-cube-hot,html.egg-cube-hot *{cursor:move!important}\n"
  +"html.egg-cube-hot-face,html.egg-cube-hot-face *{cursor:copy!important}\n"
  +"html.egg-cube-paint body,html.egg-cube-paint main *{cursor:crosshair!important}\n"
  +"html.egg-cube-paint .egg-cube .cube-ui,html.egg-cube-paint .egg-cube .cube-ui *{cursor:auto!important}\n"
  +"html.egg-cube-paint .egg-cube .cube-ui button{cursor:pointer!important}\n"
  +".egg-cube .cube-bar{position:absolute;left:0;right:0;margin:auto;width:max-content;bottom:calc(16px + env(safe-area-inset-bottom,0px));display:flex;flex-wrap:wrap;justify-content:center;align-items:center;max-width:calc(100vw - 24px);gap:2px;padding:5px}\n"
  +".egg-cube .cube-bar button{padding:7px 9px}\n"
  +".egg-cube .cube-bar .cb-sep{margin:0 3px}\n"
  +".egg-cube .cb-sep{display:inline-block;width:1px;height:20px;margin:0 4px;background:var(--line)}\n"
  +".egg-cube .cb-mode,.egg-cube .cb-shade{display:inline-flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in srgb,var(--line) 40%,transparent)}\n"
  +".egg-cube .cb-save.dirty{color:var(--amber)}\n"
  +".egg-cube .cb-turn[aria-pressed=\"false\"]{color:var(--ink-mute)}\n"
  +".egg-cube .cb-del:hover:not(:disabled),.egg-cube .cb-close:hover,.egg-cube .cb-close:focus-visible{background:#e2574c;color:#fff}\n"
  +".egg-cube .cube-tl{position:absolute;left:0;right:0;margin:auto;bottom:calc(74px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;gap:8px;width:min(720px,calc(100vw - 24px));padding:6px 10px}\n"
  +".egg-cube .tl-pb{display:inline-flex;gap:1px;padding:2px;border-radius:10px;background:color-mix(in srgb,var(--line) 40%,transparent)}\n"
  +".egg-cube .tl-pb button{display:inline-grid;place-items:center;width:34.5px;padding:6px 0}\n"
  +".egg-cube .tl-pb svg{width:17px;height:17px;fill:currentColor}\n"
  +"/* Play forwards stands out a little from the other seven (Jakob, 19.10.2026): a touch wider, a larger icon, a warm gold tint; same height, so nothing shifts */\n"
  +".egg-cube .tl-pb .tl-play{width:38px!important;padding:4.5px 0!important;background:color-mix(in srgb,#f2c14e 34%,var(--surface))!important;color:var(--ink)!important;box-shadow:inset 0 0 0 1px color-mix(in srgb,#f2c14e 75%,transparent)}\n"
  +".egg-cube .tl-pb .tl-play svg{width:20px;height:20px}\n"
  +".egg-cube .tl-pb .tl-play:hover{background:color-mix(in srgb,#f2c14e 50%,var(--surface))!important}\n"
  +".egg-cube .tl-pb .tl-play[aria-pressed=true]{background:#f2c14e!important;color:#1b1f2a!important;box-shadow:inset 0 0 0 1px #c79a2a}\n"
  +".egg-cube .tl-auto{margin-left:4px}\n"
  +".egg-cube .cube-wipbox{position:fixed!important;right:auto!important;margin:0!important;transform:none!important;z-index:60!important;width:min(340px,calc(100vw - 16px))!important;max-height:none!important;padding:12px 14px!important;border-radius:12px;font-size:.8rem;line-height:1.5;color:var(--ink-soft)}\n"
  +".egg-cube .cube-wipbox[hidden]{display:none!important}\n"
  +".egg-cube .cube-wipbox p{margin:0 0 6px}\n"
  +".egg-cube .cube-wipbox .ca-h{font-weight:800;font-size:.9rem;color:var(--ink)}\n"
  +".egg-cube .cube-mm{z-index:40}\n"
  +".egg-cube.mm-open .cube-tip{opacity:0!important;pointer-events:none!important}\n"
  +".egg-cube .cube-mm .mm-list{position:absolute;left:0;top:66px;transform:translateX(-50%);display:flex;flex-direction:column;min-width:156px;padding:4px;border-radius:10px;background:var(--surface);border:2px solid var(--cg);box-shadow:0 8px 22px rgba(0,0,0,.35)}\n"
  +".egg-cube .cube-mm .mm-list.up{top:auto;bottom:66px}\n"
  +".egg-cube .cube-mm .mm-list button{position:static!important;transform:none!important;left:auto;border:0!important;box-shadow:none!important;background:none!important;text-align:left;justify-content:flex-start;padding:4px 10px!important;border-radius:6px;font-size:.78rem;color:var(--ink)}\n"
  +".egg-cube .cube-mm .mm-list button.on{background:var(--cg)!important;color:#1b1f2a!important}\n"
  +".egg-cube .cube-mm .mm-list button:disabled{opacity:.38}\n"
  +".egg-cube .cube-mm .mm-sep{display:block;height:1px;margin:3px 6px;background:color-mix(in srgb,var(--line) 80%,transparent)}\n"
  +".egg-cube .cube-head .cb-paint{display:inline-flex!important;align-items:center;gap:6px}\n"
  +".egg-cube .cube-head .cb-paint svg{width:17px;height:17px;fill:currentColor;flex:none}\n"
  +".egg-cube.icons .cube-head .cb-paint .cbp-t{display:none}\n"
  +".egg-cube .cube-head .cb-ui{background:color-mix(in srgb,#f2c14e 20%,var(--surface))!important;box-shadow:inset 0 0 0 1px color-mix(in srgb,#f2c14e 70%,transparent)!important;height:35px!important;min-height:35px;box-sizing:border-box;display:inline-flex!important;align-items:center;align-self:center}\n"
  +".egg-cube .cube-tip.on{pointer-events:auto}\n"
  +".egg-cube .ol-ren{flex:1;min-width:0;font:inherit;font-weight:700;color:var(--ink);background:var(--surface);border:1px solid #f2c14e;border-radius:6px;padding:2px 6px;margin:0;outline:none;box-shadow:0 0 0 2px color-mix(in srgb,#f2c14e 30%,transparent)}\n"
  +".egg-cube .sw-pbar{display:flex;gap:6px;margin-top:6px}\n"
  +".egg-cube .sw-pbar>button{flex:1 1 0;min-width:0;justify-content:center;white-space:nowrap}\n"
  +".egg-cube .sw-pbar .sw-auto{margin:0!important}\n"
  +".egg-cube section.cube-keys{width:min(1060px,calc(100vw - 24px))!important;padding:0!important;display:flex!important;flex-direction:column;max-height:calc(100vh - 48px)!important;overflow:hidden!important}\n"
  +".egg-cube .cube-keys[hidden]{display:none!important}\n"
  +".egg-cube .cube-keys .ck-top{flex:none;display:flex!important;align-items:center;gap:10px;padding:14px 18px 12px;margin:0!important;border-bottom:1px solid var(--line)}\n"
  +".egg-cube .cube-keys .ck-top h3{font-size:1rem!important;font-weight:800;letter-spacing:0!important;text-transform:none!important;color:var(--ink)!important;margin:0}\n"
  +".egg-cube .ck-q{flex:1;min-width:0;max-width:380px;margin-left:10px;padding:7px 12px;border-radius:9px;border:1px solid var(--line);background:color-mix(in srgb,var(--ink) 5%,transparent);color:var(--ink);font:600 .8rem/1.2 ui-monospace,Menlo,Consolas,monospace}\n"
  +".egg-cube .ck-q:focus{outline:2px solid #f2c14e;outline-offset:1px}\n"
  +".egg-cube .ck-all{margin-left:auto!important;padding:5px 10px!important;font-size:.72rem!important;white-space:nowrap}\n"
  +".egg-cube .cube-keys .ck-top .ck-x{margin-left:2px!important}\n"
  +".egg-cube .cube-keys .ck-grid{overflow:auto;padding:14px 18px 18px;columns:2 420px!important;column-gap:22px!important;overscroll-behavior:contain}\n"
  +".egg-cube .cube-keys .ck-sec{break-inside:avoid;margin:0 0 12px!important;border:1px solid color-mix(in srgb,var(--line) 75%,transparent)!important;border-radius:10px;background:color-mix(in srgb,var(--ink) 3%,transparent)!important;overflow:hidden}\n"
  +".egg-cube .ck-head{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:9px;width:100%;padding:9px 12px;cursor:pointer;font:700 .72rem/1 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft)}\n"
  +".egg-cube .ck-head:hover{background:color-mix(in srgb,var(--ink) 6%,transparent)}\n"
  +".egg-cube .ck-head:focus-visible{outline:2px solid #f2c14e;outline-offset:-2px}\n"
  +".egg-cube .ck-chev{flex:none;width:6px;height:6px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg);margin:-3px 2px 0 2px;transition:transform .15s}\n"
  +".egg-cube .ck-sec.shut .ck-chev{transform:rotate(-45deg);margin:0 2px 0 0}\n"
  +".egg-cube .ck-n{margin-left:auto;font-size:.64rem;letter-spacing:0;color:var(--ink-mute);padding:3px 7px;border-radius:999px;background:color-mix(in srgb,var(--line) 55%,transparent)}\n"
  +".egg-cube .ck-rows{border-top:1px solid color-mix(in srgb,var(--line) 60%,transparent)}\n"
  +".egg-cube .ck-sec.shut .ck-rows{display:none}\n"
  +".egg-cube .cube-keys.searching .ck-sec .ck-rows{display:block}\n"
  +".egg-cube .cube-keys.searching .ck-sec .ck-chev{opacity:.3}\n"
  +".egg-cube .cube-keys .ck-row{display:grid!important;grid-template-columns:minmax(150px,38%) 1fr;gap:12px;align-items:center;padding:6px 12px;border-bottom:1px solid color-mix(in srgb,var(--line) 32%,transparent)}\n"
  +".egg-cube .cube-keys .ck-row:last-child{border-bottom:0}\n"
  +".egg-cube .cube-keys .ck-row:hover{background:color-mix(in srgb,#f2c14e 9%,transparent)}\n"
  +".egg-cube .ck-k{display:flex;align-items:center;gap:3px;flex-wrap:wrap;font-weight:700}\n"
  +".egg-cube .ck-d{color:var(--ink-soft);font-weight:600;font-size:.8rem;line-height:1.4}\n"
  +".egg-cube .cube-keys .ck-row[hidden],.egg-cube .cube-keys .ck-sec[hidden]{display:none!important}\n"
  +".egg-cube .ck-none{margin:0;padding:22px;text-align:center;color:var(--ink-mute);font-weight:600}\n"
  +".egg-cube .sw-hrow{flex-wrap:wrap;row-gap:4px}\n"
  +".egg-cube .sw-hrow .sw-h{white-space:nowrap}\n"
  +".egg-cube .cube-head .cb-2d,.egg-cube .cube-head .cb-bare{height:35px!important;min-height:35px;box-sizing:border-box;display:inline-flex!important;align-items:center;align-self:center}\n"
  +".egg-cube .sw-hrow{display:flex;align-items:center;justify-content:space-between;gap:6px}\n"
  +".egg-cube .sw-hrow .sw-h{margin:0}\n"
  +".egg-cube .sw-colsw{padding:3px 8px!important;font-size:.62rem!important;border-radius:999px!important;flex:none}\n"
  +".egg-cube .sw-colsw[aria-pressed=true]{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important}\n"
  +".egg-cube .mt-row .mt-swap{flex:none;width:30px;padding:0!important;font-size:1rem;line-height:1}\n"
  +".egg-cube .mt-uvh{display:flex;align-items:center;justify-content:space-between;margin:10px 0 2px;padding-top:8px;border-top:1px solid color-mix(in srgb,var(--line) 70%,transparent)}\n"
  +".egg-cube .mt-uvh span{font:700 .66rem/1 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .mt-auto{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important;font-weight:800;padding:4px 10px!important}\n"
  +".egg-cube .mt-uv{display:block;width:100%;max-width:200px;aspect-ratio:1;margin:8px auto 2px;border-radius:8px;background:color-mix(in srgb,var(--ink) 6%,transparent)}\n"
  +".egg-cube .mt-uvn{margin:0 0 4px;font-size:.66rem;line-height:1.4;color:var(--ink-mute);text-align:center}\n"
  +".egg-cube .cb-bare{background:var(--accent-soft,#172a4c)!important;color:var(--accent,#78b2ff)!important;border-color:color-mix(in srgb,var(--accent,#78b2ff) 60%,transparent)!important;font-weight:800}\n"
  +".egg-cube .cb-bare:hover{background:color-mix(in srgb,var(--accent,#78b2ff) 22%,var(--accent-soft,#172a4c))!important;border-color:var(--accent,#78b2ff)!important}\n"
  +".egg-cube .cb-bare[aria-pressed=true]{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important}\n"
  +".egg-cube.icons .cb-bare{display:inline-flex!important;flex-direction:row;align-items:center;width:auto!important;padding:0 11px 0 8px!important;gap:6px}\n"
  +".egg-cube.icons .cb-bare .bt{position:static;width:auto;height:auto;margin:0;clip:auto;overflow:visible;font-size:0.828rem;font-weight:800}\n"
  +".egg-cube .cb-trial[hidden]{display:none!important}\n"
  +".egg-cube .cube-bar .cb-trial,.egg-cube .cb-trial{all:unset;font-size:.62rem!important;width:auto!important;height:auto!important;cursor:pointer;font:600 .62rem/1 ui-monospace,Menlo,Consolas,monospace;color:var(--ink-mute);opacity:.55;padding:4px 6px;margin-left:4px}\n"
  +".egg-cube .cb-trial:hover,.egg-cube .cb-trial:focus-visible{opacity:1}\n"
  +".egg-cube.compact:has(.cube-tutbox:not([hidden])) .cube-sheetbar,.egg-cube.compact:has(.cube-keys:not([hidden])) .cube-sheetbar{display:none}\n"
  +".egg-cube.compact .tl-row1{min-width:0;width:100%;max-width:100%}\n"
  +".egg-cube.compact .tl-row1 .tl-wrap{flex:1 1 0!important;min-width:0!important;width:auto!important}\n"
  +".egg-cube.compact .tl-row1>:not(.tl-wrap){flex:none}\n"
  +".egg-cube .cube-sheetbar{display:none}\n"
  +".egg-cube.compact .cube-sheetbar{display:flex;gap:6px;position:absolute;left:8px;z-index:6;pointer-events:auto}\n"
  +".egg-cube.compact .cube-sheetbar button{font:700 .78rem/1 ui-monospace,Menlo,Consolas,monospace;color:var(--ink);background:var(--surface);border:2px solid #f2c14e;border-radius:10px;padding:8px 12px;cursor:pointer}\n"
  +".egg-cube.compact .cube-sheetbar button[aria-pressed=true]{background:#f2c14e;color:#1b1f2a}\n"
  +".egg-cube.compact .cube-shelf,.egg-cube.compact .cube-modes{width:auto!important;max-width:none!important;overflow-x:auto;scrollbar-width:none;touch-action:pan-x}\n"
  +".egg-cube.compact .cube-left,.egg-cube.compact .cube-right{display:none!important}\n"
  +".egg-cube.compact.sheet-l .cube-left,.egg-cube.compact.sheet-r .cube-right{display:flex!important;position:fixed;left:8px!important;right:8px!important;width:auto!important;top:var(--sheet-top)!important;bottom:var(--sheet-bot);max-height:none!important;overflow-y:auto;overscroll-behavior:contain;pointer-events:auto;z-index:7;padding:2px;touch-action:pan-y}\n"
  +".egg-cube.compact.sheet-l .cube-left>.cube-ui,.egg-cube.compact.sheet-r .cube-right>.cube-ui{flex:none!important;max-height:none!important}\n"
  +".egg-cube.compact .cube-bar{left:8px;right:8px;width:auto;max-width:none;flex-wrap:nowrap;justify-content:flex-start;overflow-x:auto;scrollbar-width:none;touch-action:pan-x}\n"
  +".egg-cube.compact .cube-bar>*{flex:none}\n"
  +".egg-cube.compact .cube-tl{left:8px!important;right:8px!important;width:auto!important}\n"
  +".egg-cube.compact .tl-row2{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;touch-action:pan-x}\n"
  +".egg-cube.compact .tl-row2>*{flex:none}\n"
  +".egg-cube.compact .cube-tip{max-width:calc(100vw - 32px);font-size:.72rem}\n"
  +".egg-cube .sw-place{position:sticky!important;bottom:0;z-index:2;box-shadow:0 -10px 12px -6px var(--surface)}\n"
  +".egg-cube .cb-snd .snd-x{display:none}\n"
  +".egg-cube .cb-snd.off .snd-x{display:inline}\n"
  +".egg-cube .cb-snd.off .snd-w{display:none}\n"
  +".egg-cube .cb-snd.off{color:var(--ink-mute)}\n"
  +".egg-cube .cube-ui.cube-tl.min>.tl-row2.tl-row2.tl-row2{display:flex!important}\n"
  +".egg-cube .cube-tl.min>.tl-row1{display:none!important}\n"
  +".egg-cube .tl-row2 .pn-min{position:static;flex:none;margin-left:4px}\n"
  +".egg-cube .nav-min{position:fixed;z-index:4;pointer-events:auto}\n"
  +".egg-cube .cube-nav.min{visibility:hidden;height:30px!important}\n"
  +".egg-cube .cb-tut.cap-hint{border-color:#f2c14e!important;background:color-mix(in srgb,#f2c14e 22%,var(--surface))!important;animation:cap-hint 1.1s ease-in-out infinite}\n"
  +"@media (prefers-reduced-motion:reduce){.egg-cube .cb-tut.cap-hint{animation:none;box-shadow:0 0 0 2px #f2c14e}}\n"
  +".egg-cube .cube-about .ca-legal{margin:8px 0 0;padding-top:6px;border-top:1px solid color-mix(in srgb,var(--line) 70%,transparent);font-size:.68rem;line-height:1.4;color:var(--ink-mute)}\n"
  +".egg-cube .sw-body{grid-template-columns:minmax(0,1fr)}\n"
  +".egg-cube .sw-view span{font-size:.66rem;margin:0 2px 0 0;line-height:1;align-self:center;display:inline-flex;align-items:center}\n"
  +".egg-cube .cube-modes{position:absolute;width:max-content;display:flex;align-items:center;gap:8px;padding:4px 6px 4px 10px}\n"
  +".egg-cube .cube-modes .cb-mode{display:inline-flex;gap:4px}\n"
  +".egg-cube .cb-2d{background:#9a3f24!important;color:#fbe7c6!important;border-color:#f2c14e!important;font-weight:800}\n"
  +".egg-cube .cb-2d:hover{background:#a54a29!important}\n"
  +".egg-cube.icons .cb-2d{display:inline-flex!important;flex-direction:row;align-items:center;width:auto!important;padding:0 11px 0 8px!important;gap:6px}\n"
  +".egg-cube.icons .cb-2d .bt{position:static;width:auto;height:auto;margin:0;clip:auto;overflow:visible;font-size:0.828rem;font-weight:800}\n"
  +".egg-cube .sw-place{position:relative;justify-self:stretch;justify-content:center;background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important;font-weight:800;width:auto!important;height:auto!important;padding:6px 10px!important}\n"
  +".egg-cube .sw-place:disabled{opacity:.45}\n"
  +".egg-cube .sw-it{cursor:pointer;background:transparent!important;width:auto!important;height:auto!important;padding:4px 2px!important}\n"
  +".egg-cube .sw-it:hover{border-color:color-mix(in srgb,var(--ink-mute) 60%,transparent)!important}\n"
  +".egg-cube .sw-it.pinned{box-shadow:inset 0 0 0 1px #f2c14e}\n"
  +".egg-cube .sw-pick{position:absolute;inset:0;z-index:6;display:flex;flex-direction:column;gap:6px;padding:10px;background:var(--surface);border-radius:inherit}\n"
  +".egg-cube .sw-pick[hidden]{display:none}\n"
  +".egg-cube .sw-ph{display:flex;align-items:center;justify-content:space-between;font-size:.8rem}\n"
  +".egg-cube .sw-px{width:24px!important;height:22px!important;padding:0!important}\n"
  +".egg-cube .sw-q{box-sizing:border-box;width:100%;padding:4px 7px;border-radius:7px;border:1px solid var(--line);background:color-mix(in srgb,var(--line) 25%,var(--surface));color:var(--ink);font:inherit;font-size:.76rem}\n"
  +".egg-cube .sw-grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(48px,1fr));gap:4px;align-content:start}\n"
  +".egg-cube .sw-g{display:grid!important;justify-items:center;gap:1px;padding:3px 1px!important;width:auto!important;height:auto!important;border-radius:8px!important;background:transparent!important;border:1px solid transparent!important}\n"
  +".egg-cube .sw-g:hover{border-color:color-mix(in srgb,var(--ink-mute) 60%,transparent)!important}\n"
  +".egg-cube .sw-g.on{border-color:#f2c14e!important;background:color-mix(in srgb,#f2c14e 12%,transparent)!important}\n"
  +".egg-cube .sw-g .sw-spr{height:28px}\n"
  +".egg-cube .sw-g small{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.56rem;color:var(--ink-soft)}\n"
  +".egg-cube .sw-none{margin:6px 0;font-size:.74rem;color:var(--ink-mute)}\n"
  +".egg-cube .sw-auto,.egg-cube .sw-all{align-self:flex-start;padding:4px 10px!important;font-size:.74rem!important;width:auto!important;height:auto!important;font-family:inherit!important;font-weight:700!important}\n"
  +".egg-cube .sw-all[aria-pressed=true]{background:color-mix(in srgb,#f2c14e 20%,var(--surface))!important;border-color:#f2c14e!important}\n"
  +".egg-cube .cube-silw{margin-top:10px;padding:12px;position:relative;display:flex;flex-direction:column}\n"
  +".egg-cube .cube-silw[hidden]{display:none}\n"
  +".egg-cube .cube-silw>h3{padding-right:34px}\n"
  +".egg-cube .cube-silw{min-height:0;overflow:hidden}\n"
  +".egg-cube .sw-body{display:grid;gap:6px;min-height:0;overflow:auto}\n"
  +".egg-cube .sw-cv{width:100%;max-width:140px;height:auto;aspect-ratio:7/5;justify-self:center;border-radius:8px;background:color-mix(in srgb,var(--line) 30%,transparent)}\n"
  +".egg-cube .sw-info{margin:0;font-size:.72rem;line-height:1.35;color:var(--ink-soft);text-align:center}\n"
  +".egg-cube .sw-info.sw-ghost{font-size:.92rem;font-weight:800;line-height:1.4;color:var(--ink);padding:18px 10px}\n"
  +".egg-cube .sw-view{display:flex;align-items:center;gap:2px;flex-wrap:nowrap;min-width:0;font-size:.72rem;font-weight:700;color:var(--ink-mute)}\n"
  +".egg-cube .sw-view span{margin-right:2px}\n"
  +".egg-cube .sw-view button{flex:1 1 auto;min-width:0;padding:3px 2px!important;font-size:.66rem!important;display:inline-flex!important;align-items:center;justify-content:center!important;text-align:center;font-size:.72rem;width:auto!important;height:auto!important}\n"
  +".egg-cube .sw-h{margin:2px 0 0;font-size:.66rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .sw-sug{display:grid;gap:4px}\n"
  +".egg-cube .sw-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:3px}\n"
  +".egg-cube .sw-names{font-size:.68rem;line-height:1.35;color:var(--ink-soft);text-align:center}\n"
  +".egg-cube .sw-names b{color:var(--ink)}\n"
  +".egg-cube .sw-it{display:grid;justify-items:center;gap:2px;padding:4px 2px;border-radius:8px;border:1px solid transparent}\n"
  +".egg-cube .sw-it.first{border-color:color-mix(in srgb,#f2c14e 60%,transparent);background:color-mix(in srgb,#f2c14e 10%,transparent)}\n"
  +".egg-cube .sw-spr{display:grid;place-items:center;width:100%;max-width:40px;height:32px}\n"
  +".egg-cube .sw-spr svg{max-width:100%;max-height:100%}\n"
  +".egg-cube .sw-it small{font-size:.62rem;font-weight:700;color:var(--ink-soft);text-align:center;line-height:1.2;hyphens:auto;-webkit-hyphens:auto;overflow-wrap:break-word;max-width:100%}\n"
  +".egg-cube .cube-gen{position:fixed;z-index:25;display:grid;gap:8px;width:250px;padding:12px;border-radius:12px}\n"
  +".egg-cube .cube-gen[hidden]{display:none}\n"
  +".egg-cube .gen-hint{margin:0;font-size:.74rem;line-height:1.4;color:var(--ink-soft)}\n"
  +".egg-cube .gen-row{display:grid;grid-template-columns:60px 1fr;align-items:center;gap:8px;font-size:.78rem;font-weight:700;color:var(--ink-soft)}\n"
  +".egg-cube .gen-row input{width:100%;accent-color:#f2c14e}\n"
  +".egg-cube .gen-go{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important;font-weight:800;width:auto!important;height:auto!important;padding:6px 12px!important}\n"
  +".egg-cube .cube-ol,.egg-cube .cube-attr,.egg-cube .cube-gal,.egg-cube .cube-mats{position:relative}\n"
  +".egg-cube .cube-attr{display:flex;flex-direction:column;overflow:hidden!important}\n"
  +".egg-cube .cube-attr .at-body{flex:1 1 auto;min-height:0;overflow:auto}\n"
  +".egg-cube .cube-mats{display:flex;flex-direction:column;overflow:hidden}\n"
  +".egg-cube .cube-mats .mt-body{flex:1 1 auto;min-height:0;overflow:auto}\n"
  +".egg-cube .wm-h{position:absolute;z-index:4;pointer-events:auto;touch-action:none}\n"
  +".egg-cube .wm-h[data-d=n]{top:0;left:12px;right:12px;height:6px;cursor:ns-resize}\n"
  +".egg-cube .wm-h[data-d=s]{bottom:0;left:12px;right:12px;height:6px;cursor:ns-resize}\n"
  +".egg-cube .wm-h[data-d=e]{right:0;top:12px;bottom:12px;width:6px;cursor:ew-resize}\n"
  +".egg-cube .wm-h[data-d=w]{left:0;top:12px;bottom:12px;width:6px;cursor:ew-resize}\n"
  +".egg-cube .wm-h[data-d=ne]{top:0;right:0;width:12px;height:12px;cursor:nesw-resize}\n"
  +".egg-cube .wm-h[data-d=nw]{top:0;left:0;width:12px;height:12px;cursor:nwse-resize}\n"
  +".egg-cube .wm-h[data-d=se]{bottom:0;right:0;width:12px;height:12px;cursor:nwse-resize}\n"
  +".egg-cube .wm-h[data-d=sw]{bottom:0;left:0;width:12px;height:12px;cursor:nesw-resize}\n"
  +".egg-cube .cube-ol>h3,.egg-cube .cube-attr>h3,.egg-cube .cube-gal>h3,.egg-cube .cube-mats>h3,.egg-cube .ge-top{cursor:grab}\n"
  +".egg-cube .wm-float{position:fixed!important;right:auto!important;bottom:auto!important;margin:0!important;max-height:none!important;min-height:0!important;z-index:9;pointer-events:auto}\n"
  +".egg-cube .wm-float.min{height:auto!important}\n"
  +".egg-cube .wm-float .ol-list,.egg-cube .wm-float .gl-list{flex:1 1 auto;min-height:0}\n"
  +".egg-cube .wm-btns{display:inline-flex;gap:2px;align-items:center}\n"
  +".egg-cube .wm-btns.wm-abs{position:absolute;top:4px;right:8px;z-index:5}\n"
  +".egg-cube .wm-btns.wm-abs-min{right:34px}\n"
  +".egg-cube .wm-btns button{width:24px!important;height:22px!important;padding:0!important;display:grid!important;place-items:center;border-radius:7px!important;color:var(--ink-mute);background:transparent!important;border:0!important}\n"
  +".egg-cube .wm-btns button:hover{color:var(--ink);background:color-mix(in srgb,var(--line) 40%,transparent)!important}\n"
  +".egg-cube .wm-btns svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\n"
  +".egg-cube .wm-btns button[hidden]{display:none!important}\n"
  +".egg-cube .wm-pop.wm-hint{color:#f2c14e;box-shadow:inset 0 0 0 1px color-mix(in srgb,#f2c14e 60%,transparent)!important}\n"
  +".egg-cube .tl-row2 .wm-btns{margin-left:2px}\n"
  +".egg-cube .cube-ol>h3,.egg-cube .cube-attr>h3,.egg-cube .cube-gal>h3{padding-right:62px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"
  +".egg-cube .cube-mats>h3{padding-right:34px}\n"
  +".egg-cube-pop{position:fixed;inset:0}\n"
  +".egg-cube.egg-cube-pop>.cube-ui.cube-ui{position:absolute!important;inset:0!important;width:auto!important;height:auto!important;max-height:none!important;min-height:0!important;margin:0!important;border-radius:0!important;border:0!important;box-shadow:none!important;pointer-events:auto;transform:none!important}\n"
  +".egg-cube-pop .wm-h{display:none}\n"
  +".egg-cube-pop .ol-list,.egg-cube-pop .gl-list{flex:1 1 auto;min-height:0}\n"
  +".egg-cube-pop>.cube-ui>h3,.egg-cube-pop .ge-top{cursor:default}\n"
  +".egg-cube .at-row.locked input{opacity:.45;pointer-events:none}\n"
  +".egg-cube .at-row.locked .at-lab{opacity:.6}\n"
  +".egg-cube .at-rebuild{margin-top:6px;padding:4px 10px!important;font-size:.74rem;width:auto!important;height:auto!important}\n"
  +".egg-cube .ch-brand{cursor:help;border-radius:8px;outline-offset:3px}\n"
  +".egg-cube .cube-about{position:fixed;z-index:60;width:min(496px,calc(100vw - 16px));padding:12px 14px;border-radius:12px;font-size:.8rem;line-height:1.5;color:var(--ink-soft)}\n"
  +".egg-cube .cube-about[hidden]{display:none}\n"
  +".egg-cube .cube-about p{margin:0 0 6px}\n"
  +".egg-cube .cube-about .ca-h{font-weight:800;font-size:1.08rem;color:var(--ink)}\n"
  +".egg-cube .cube-about li b.ca-pict{color:color-mix(in srgb,#ccaf80 74%,var(--ink))}\n"
  +".egg-cube .cube-about ul{margin:0 0 8px;padding-left:18px}\n"
  +".egg-cube .cube-about li{margin:2px 0}\n"
  +".egg-cube .cube-about li b{color:var(--ink)}\n"
  +".egg-cube .cube-about .ca-f{margin:0;font-size:.74rem;color:var(--ink-mute)}\n"
  +".egg-cube .cube-tl{flex-direction:column;align-items:stretch!important;gap:6px!important}\n"
  +".egg-cube .tl-row1,.egg-cube .tl-row2{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n"
  +".egg-cube .tl-row1{flex-wrap:nowrap}\n"
  +".egg-cube .tl-row1 .tl-wrap{flex:1}\n"
  +".egg-cube .tl-sp{flex:1}\n"
  +".egg-cube .cube-io{position:fixed;z-index:25;display:grid;gap:4px;width:240px;padding:10px;border-radius:12px}\n"
  +".egg-cube .cube-io[hidden]{display:none}\n"
  +".egg-cube .io-h{margin:0 2px 2px;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .cube-io button{display:flex!important;align-items:baseline;gap:8px;width:100%!important;height:auto!important;padding:7px 10px!important;border-radius:8px!important;text-align:left;background:transparent!important;border:1px solid transparent!important}\n"
  +".egg-cube .cube-io button:hover,.egg-cube .cube-io button:focus-visible{background:color-mix(in srgb,#f2c14e 14%,transparent)!important;border-color:color-mix(in srgb,#f2c14e 45%,transparent)!important}\n"
  +".egg-cube .cube-io b{min-width:36px;font-size:.84rem}\n"
  +".egg-cube .cube-io small{font-size:.72rem;color:var(--ink-mute)}\n"
  +".egg-cube .io-what{margin:4px 2px 0;font-size:.72rem;line-height:1.4;color:var(--ink-soft)}\n"
  +".egg-cube .cube-mats{margin-top:10px;padding:12px 12px 12px}\n"
  +".egg-cube .cube-mats[hidden]{display:none}\n"
  +".egg-cube .mt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(58px,1fr));gap:6px;margin:6px 0 10px}\n"
  +".egg-cube .mt-sw,.egg-cube .mt-new{position:relative;display:flex!important;flex-direction:column;align-items:center;gap:3px;padding:5px 2px!important;border-radius:10px!important;border:1px solid transparent!important;background:transparent!important;cursor:grab;width:auto!important;height:auto!important}\n"
  +".egg-cube .mt-sw img{width:40px;height:40px;pointer-events:none;-webkit-user-drag:none}\n"
  +".egg-cube .mt-sw span{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.66rem;font-weight:700;color:var(--ink-soft)}\n"
  +".egg-cube .mt-sw.on{border-color:#f2c14e!important;background:color-mix(in srgb,#f2c14e 12%,transparent)!important}\n"
  +".egg-cube .mt-sw:hover{background:color-mix(in srgb,var(--line) 35%,transparent)!important}\n"
  +".egg-cube .mt-cur{position:absolute;top:4px;right:6px;width:8px;height:8px;border-radius:50%;background:#5bb46a;box-shadow:0 0 0 2px var(--surface)}\n"
  +".egg-cube .mt-new{justify-content:center;font-size:1.4rem!important;font-weight:400;color:var(--ink-mute);cursor:pointer;border:1px dashed var(--line)!important;min-height:58px}\n"
  +".egg-cube .mt-ed{display:grid;gap:5px;border-top:1px solid var(--line);padding-top:9px}\n"
  +".egg-cube .mt-row{display:grid;grid-template-columns:minmax(58px,34%) minmax(0,1fr) auto;align-items:center;gap:6px;font-size:.74rem;font-weight:600;color:var(--ink-soft)}\n"
  +".egg-cube .mt-row>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"
  +".egg-cube .mt-row input[type=text],.egg-cube .mt-row select{box-sizing:border-box;width:100%;padding:4px 6px;border-radius:7px;border:1px solid var(--line);background:color-mix(in srgb,var(--line) 25%,var(--surface));color:var(--ink);font:inherit;font-size:.78rem}\n"
  +".egg-cube .mt-row input[type=color]{width:100%;height:26px;padding:1px 2px;border-radius:7px;border:1px solid var(--line);background:transparent;cursor:pointer}\n"
  +".egg-cube .mt-row input[type=range]{width:100%;accent-color:#f2c14e}\n"
  +".egg-cube .mt-row b{min-width:34px;text-align:right;font-size:.74rem;color:var(--ink)}\n"
  +".egg-cube .mt-row button{justify-self:start;padding:3px 10px!important;font-size:.76rem}\n"
  +".egg-cube .mt-acts{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}\n"
  +".egg-cube .mt-acts button{padding:5px 10px!important;font-size:.74rem;width:auto!important;height:auto!important}\n"
  +".egg-cube .mt-assign{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important;font-weight:800}\n"
  +".egg-cube .cube-lib[hidden]{display:none}\n"
  +".egg-cube .cube-lib{position:fixed;z-index:25;display:flex;flex-direction:column;gap:6px;width:min(420px,calc(100vw - 16px));height:min(380px,calc(100vh - 120px));padding:10px;border-radius:12px}\n"
  +".egg-cube .cube-lib .lb-n{font-size:.72rem;color:var(--ink-mute);margin-left:auto;margin-right:8px}\n"
  +".egg-cube .cube-lib .lb-x{width:26px!important;height:26px!important;padding:0!important;min-height:0}\n"
  +".egg-cube .cube-lib .lb-hint{margin:0;font-size:.68rem;color:var(--ink-mute)}\n"
  +".egg-cube .cube-lib .sw-grid{grid-template-columns:repeat(auto-fill,minmax(62px,1fr))}\n"
  +".egg-cube.compact .cube-shelf .sh-l{order:-3}\n"
  +".egg-cube.compact .cube-shelf .cb-lib{order:-2;margin-right:4px}\n"
  +".egg-cube.compact .cube-shelf .lib-sep{display:none}\n"
  +".egg-cube .bt.twin{display:inline-grid}\n"
  +".egg-cube .bt.twin>span{grid-area:1/1;text-align:center;white-space:nowrap}\n"
  +".egg-cube .bt.twin:not(.on)>.tb,.egg-cube .bt.twin.on>.ta{visibility:hidden}\n"
  +".egg-cube .cube-tutbox.intro .tut-x{display:none!important}\n"
  +"/* polish pass (Jakob, 19.10.2026) */\n"
  +".egg-cube .ch-more{display:inline-flex;flex:none}\n"
  +".egg-cube .ch-menu{position:fixed;z-index:40;display:flex;flex-direction:column;gap:2px;min-width:190px;padding:6px;border-radius:12px;background:var(--surface);border:1px solid var(--line);box-shadow:0 14px 34px rgba(0,0,0,.28)}\n"
  +".egg-cube .ch-menu[hidden]{display:none}\n"
  +".egg-cube .ch-menu button{display:flex;justify-content:flex-start;align-items:center;min-height:34px;width:100%!important;height:auto!important;padding:8px 10px!important;border-radius:8px!important;text-align:left;font-size:.8rem!important;background:transparent!important;border-color:transparent!important}\n"
  +".egg-cube .cube-head .ch-menu .cb-ui,.egg-cube .ch-menu button[aria-pressed]{background:transparent!important;box-shadow:none!important;height:auto!important;min-height:34px!important;align-items:center!important;justify-content:flex-start!important;align-self:stretch;padding:8px 10px!important;display:flex!important}\n"
  +".egg-cube .ch-menu button:hover,.egg-cube .ch-menu button:focus-visible,.egg-cube .cube-head .ch-menu .cb-ui:hover{background:color-mix(in srgb,var(--line) 55%,transparent)!important}\n"
  +".egg-cube .ch-menu .cb-lreset{margin-bottom:6px;position:relative}.egg-cube .ch-menu .cb-lreset::after{content:\"\";position:absolute;left:8px;right:8px;bottom:-4px;border-top:1px solid var(--line)}\n"
  +".egg-cube .cube-left>.cube-silw{flex-shrink:0}\n"
  +"@media (max-height:860px){.egg-cube .sw-cv{max-width:112px}.egg-cube .cube-left>.cube-ol.cube-ol{min-height:118px!important}}\n"
  +".egg-cube .mt-assign{background:var(--surface)!important;color:var(--ink)!important;border-color:var(--line)!important;font-weight:700}\n"
  +".egg-cube .sw-place{min-height:40px;font-size:.88rem!important;letter-spacing:.01em;box-shadow:0 4px 14px rgba(242,193,78,.35),inset 0 0 0 1px #c79a2a}\n"
  +".egg-cube .cb-mode [data-m=object]{min-width:40px}.egg-cube .cb-mode [data-m=object]{position:relative;margin-right:9px;min-width:44px;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,#f2c14e 75%,transparent);background:color-mix(in srgb,#f2c14e 13%,var(--surface))}.egg-cube .cb-mode [data-m=object]::after{content:\"\";position:absolute;right:-6px;top:20%;bottom:20%;width:1.5px;border-radius:1px;background:color-mix(in srgb,var(--ink-mute) 45%,transparent);pointer-events:none}.egg-cube .cb-mode [data-m=object][aria-pressed=true]{background:#f2c14e!important;color:#1b1f2a!important;box-shadow:0 0 0 2px color-mix(in srgb,#f2c14e 40%,transparent)}.egg-cube .cb-mode [data-m=object][aria-pressed=true] svg{color:#1b1f2a}\n"
  +".egg-cube .cube-head .cb-names{height:35px!important;min-height:35px;box-sizing:border-box;display:inline-flex!important;align-items:center;align-self:center;background:var(--accent-soft,#172a4c)!important;color:var(--accent,#78b2ff)!important;border-color:color-mix(in srgb,var(--accent,#78b2ff) 60%,transparent)!important;font-weight:800}\n"
  +".egg-cube .cube-head .cb-names:hover{background:color-mix(in srgb,var(--accent,#78b2ff) 22%,var(--accent-soft,#172a4c))!important;border-color:var(--accent,#78b2ff)!important}\n"
  +".egg-cube .cube-head .cb-names[aria-pressed=true]{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important}\n"
  +".egg-cube.icons .cube-head .cb-names{flex-direction:row;width:auto!important;padding:0 11px 0 8px!important;gap:6px}\n"
  +".egg-cube.icons .cb-names .bt{position:static;width:auto;height:auto;margin:0;clip:auto;overflow:visible;font-size:0.828rem;font-weight:800}\n"
  +"@media (max-width:1439px){.egg-cube.icons .cube-head .cb-bare,.egg-cube.icons .cube-head .cb-names{padding:0 9px!important}.egg-cube.icons .cube-head .cb-bare .bt,.egg-cube.icons .cube-head .cb-names .bt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}}\n"
  +".egg-cube .cube-bar{gap:7px!important}\n"
  +".egg-cube .cube-tip{max-width:min(92vw,680px)!important}.egg-cube .cube-bar .cb-g{display:inline-flex;align-items:center;gap:2px;padding:2px;border-radius:11px;background:color-mix(in srgb,var(--line) 32%,transparent)}\n"
  +".egg-cube .cube-bar .cb-g .cb-shade{background:none;padding:0}\n"
  +".egg-cube .cube-btip{position:fixed;z-index:45;max-width:280px;border:1px solid rgba(255,255,255,.12);padding:8px 11px;border-radius:10px;background:#1b1f2a;color:#f4f1ea;box-shadow:0 10px 26px rgba(0,0,0,.35);font-size:.78rem;line-height:1.4;pointer-events:none;opacity:0;transform:translateY(4px);transition:opacity .12s,transform .12s}\n"
  +".egg-cube .cube-btip.in{opacity:1;transform:none}.egg-cube .cube-btip[hidden]{display:none}\n"
  +".egg-cube .cube-btip small{display:block;margin-bottom:2px;font-size:.62rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#f2c14e}\n"
  +".egg-cube .cube-btip .bt-l{display:flex;align-items:center;gap:4px;flex-wrap:wrap}.egg-cube .cube-btip b{margin-right:6px;font-weight:800}\n"
  +".egg-cube .cube-btip kbd{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:5px;border:1px solid #5b6475;border-bottom-width:2px;font:700 .68rem ui-monospace,Menlo,Consolas,monospace;color:#f4f1ea}.egg-cube .cube-btip i{font-style:normal;color:#9aa3b2;font-size:.7rem}\n"
  +".egg-cube .cube-btip .bt-d{display:block;margin-top:3px;color:#c9ced8;font-weight:500}\n"
  +".egg-cube.compact .cube-sheetbar button.sh-place{background:#f2c14e;color:#1b1f2a;border-color:#c79a2a}\n"
  +".egg-cube .cube-mats>h3,.egg-cube .cube-silw>h3{margin:0 0 6px 4px;font:inherit;font-size:0.759rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .mt-ghost{position:fixed;z-index:30;width:44px;height:44px;margin:-22px 0 0 -22px;pointer-events:none;filter:drop-shadow(0 6px 12px rgba(0,0,0,.4))}\n"
  +".egg-cube .tut-pp{display:block}\n"
  +".egg-cube .tut-pp+.tut-pp{margin-top:.5em}\n"
  +".egg-cube .tut-p .tut-pp{text-wrap:pretty}\n"
  +".egg-cube .cube-tutbox{max-width:calc(100vw - 24px)}\n"
  +".egg-cube .tut-key{display:inline;margin:0 1px;padding:1px 5px;border-radius:5px;font:inherit;font-weight:800;line-height:inherit;-webkit-box-decoration-break:clone;box-decoration-break:clone;color:var(--ink);background:color-mix(in srgb,#f2c14e 22%,var(--surface));box-shadow:inset 0 0 0 1px color-mix(in srgb,#f2c14e 60%,transparent)}\n"
  +".egg-cube .tut-hl{font-weight:800;color:#9a3f24}\n"
  +"@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]) .egg-cube .tut-hl{color:#e4d6bd}}\n"
  +":root[data-theme=\"dark\"] .egg-cube .tut-hl{color:#e4d6bd}\n"
  +".egg-cube .ge-tools button,.egg-cube .ge-wt{padding:4px 9px;font-size:.72rem}\n"
  +".egg-cube .ge-stat{display:inline-flex;align-items:center;gap:5px;font-size:.68rem;font-weight:700;color:var(--ink-mute);letter-spacing:.03em}\n"
  +".egg-cube .ge-stat input{box-sizing:border-box;width:70px;padding:3px 6px;border-radius:7px;border:1px solid var(--line);background:color-mix(in srgb,var(--line) 25%,var(--surface));color:var(--ink);font:inherit;font-size:.78rem;font-weight:700;text-align:right}\n"
  +".egg-cube .ge-stat input:disabled{opacity:.45}\n"
  +".egg-cube .ge-stat input::placeholder{color:var(--ink-mute);font-weight:600}\n"
  +".egg-cube .ge-edit{position:absolute;z-index:6;width:76px;box-sizing:border-box;padding:4px 7px;border-radius:7px;border:2px solid #f2c14e;background:var(--surface);color:var(--ink);font:700 .8rem ui-monospace,Menlo,Consolas,monospace;text-align:right;box-shadow:0 6px 18px rgba(0,0,0,.35)}\n"
  +".egg-cube .ge-top{flex-wrap:wrap;row-gap:6px}\n"
  +".egg-cube .at-row.keyed input{background:color-mix(in srgb,#e2574c 22%,var(--surface))!important;border-color:color-mix(in srgb,#e2574c 45%,var(--line))!important}\n"
  +".egg-cube .at-row.keyed.now input{background:color-mix(in srgb,#e2574c 38%,var(--surface))!important}\n"
  +".egg-cube .at-lab-s{display:block;padding:3px 6px;margin:0 0 0 -6px;font-weight:600;font-size:.805rem;color:var(--ink-soft)}\n"
  +".egg-cube .at-vis{box-sizing:border-box;width:56px;padding:3px 6px!important;border-radius:7px!important;text-align:right;font:inherit;font-weight:700;font-size:.805rem}\n"
  +".egg-cube .at-vis[aria-pressed=\"false\"]{color:var(--ink-mute)}\n"
  +".egg-cube .at-row .at-vis,.egg-cube .at-row .at-vis[aria-pressed]{padding:4px 6px!important;border:1px solid var(--line)!important;background:color-mix(in srgb,var(--line) 25%,var(--surface))!important;box-shadow:none!important;color:var(--ink);font-weight:inherit;font-size:16px;line-height:1.3!important;height:auto!important}\n"
  +"@media (min-width:641px){.egg-cube .at-row .at-vis,.egg-cube .at-row .at-vis[aria-pressed]{font-size:0.874rem}}\n"
  +".egg-cube .at-row .at-vis[aria-pressed=\"false\"]{color:var(--ink-mute)}\n"
  +".egg-cube .at-row .at-vis:hover{border-color:var(--ink-mute)!important}\n"
  +"@media (max-width:700px){.egg-cube .at-row .at-vis,.egg-cube .at-row .at-vis[aria-pressed]{min-height:44px}}\n"
  +".egg-cube .at-sec{margin:10px 0 2px;padding-top:8px;border-top:1px solid var(--line);font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .at-node{margin-top:0}\n"
  +".egg-cube .cube-attr .at-row{margin:2px 0}\n"
  +".egg-cube .cube-head .cb-close{margin-left:2px;position:sticky;right:0;z-index:2;background:var(--surface)!important;box-shadow:-8px 0 8px -2px var(--surface)}\n"
  +".egg-cube .cube-head .cb-close:hover,.egg-cube .cube-head .cb-close:focus-visible{background:#e2574c!important;color:#fff!important;box-shadow:none}   /* the header keeps the button's background fixed with !important, which also hid the hover (Jakob, 20.10.2026) */\n"
  +".egg-cube .cube-head .cb-close .bi{display:block!important}\n"
  +".egg-cube .cube-head .cb-close svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round}\n"
  +".egg-cube .tut-stage .t4-bar{fill:var(--surface);stroke:#f2c14e;stroke-width:1.6}\n"
  +".egg-cube .tut-stage .t4-lab{font:800 7px ui-monospace,Menlo,Consolas,monospace;letter-spacing:.06em;fill:var(--ink-mute);text-anchor:middle}\n"
  +".egg-cube .ge-sp{flex:1}\n"
  +".egg-cube .ge-q{width:24px;height:24px;padding:0!important;border-radius:50%!important;font-weight:800;font-size:.8rem;line-height:1;color:var(--ink-mute)}\n"
  +".egg-cube .ge-q[aria-expanded=\"true\"]{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important}\n"
  +".egg-cube .ge-tips{position:absolute;right:10px;top:44px;z-index:5;width:min(300px,calc(100% - 20px));padding:10px 12px;border-radius:10px;background:var(--surface);border:1.5px solid var(--cg);box-shadow:0 10px 26px rgba(0,0,0,.35)}\n"
  +".egg-cube .ge-tips[hidden]{display:none}\n"
  +".egg-cube .ge-tips p{margin:0;padding:3px 0;font-size:.8rem;line-height:1.4;color:var(--ink-soft)}\n"
  +".egg-cube .ge-tips p+p{border-top:1px solid var(--line)}\n"
  +".egg-cube .tut-skip{margin-left:auto;padding:3px 8px!important;background:none!important;border:0!important;box-shadow:none!important;color:var(--ink-mute);font-size:.74rem;text-decoration:underline;text-underline-offset:3px}\n"
  +".egg-cube .tut-skip:hover{color:var(--ink)}\n"
  +".egg-cube .tut-skip:not([hidden])+.tut-x{margin-left:4px}\n"
  +".egg-cube .cube-tutbox.intro .tut-n{color:#f2c14e;font-weight:800}\n"
  +".egg-cube .cube-tutbox.intro:not([hidden]){display:flex;flex-direction:column}\n"
  +"@media (max-width:520px){.egg-cube .tl-first,.egg-cube .tl-last,.egg-cube .tl-pfr,.egg-cube .tl-nfr,.egg-cube .tl-tan,.egg-cube .tl-row2 > .tl-sep{display:none!important}.egg-cube .tl-graph .bt{display:none}}\n"   /* phones: the play row fits (it was 721 px in a 357 px window, the right half cut off); previous and next key, play, Set Key, Graph Editor and Auto Key stay (21.10.2026) */
  +"@media (max-width:700px) and (max-height:740px){.egg-cube .cube-tip{font-size:.68rem;line-height:1.3;padding:3px 9px}}\n"   /* short phones: a compact hint, more room for the 3D view */
  +".egg-cube .cube-tutbox.intro:not([hidden]){animation:tut-in .45s ease-out}@keyframes tut-in{from{opacity:0}to{opacity:1}}html.rm .egg-cube .cube-tutbox.intro{animation:none}@media (prefers-reduced-motion:reduce){.egg-cube .cube-tutbox.intro{animation:none}}\n"
  +".egg-cube .cube-tutbox.intro .tut-stage{display:grid;place-items:center}\n"
  +".egg-cube .cube-tutbox.intro .tut-stage svg{width:100%;height:100%;min-height:0}\n"
  +".egg-cube .tut-fine{margin:-4px 0 12px;font-size:.74rem;color:var(--ink-mute);font-style:italic}.egg-cube .cube-tutbox.intro .tut-p,.egg-cube .cube-tutbox.intro .tut-fine{max-width:none}\n"
  +".egg-cube .tut-intro-btns{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px}\n"
  +".egg-cube .tut-start{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important}\n"
  +".egg-cube .tut-know{background:transparent!important;border:1.5px solid color-mix(in srgb,var(--ink-mute) 60%,transparent)!important;color:var(--ink-soft)!important}\n"
  +".egg-cube .tut-know:hover{border-color:var(--ink-mute)!important;color:var(--ink)!important}\n"
  +".egg-cube .tut-know.sure{border-color:#e6a08c!important;color:#e6a08c!important}\n"
  +".egg-cube .tut-intro-logo{animation:ti-bob 2.6s ease-in-out infinite alternate}\n"
  +".egg-cube .cube-tutbox [hidden]{display:none!important}\n"
  +".egg-cube .ti-sun{transform-box:fill-box;transform-origin:center;animation:ti-sun 2.6s ease-in-out infinite alternate}\n"
  +"@media (prefers-reduced-motion:reduce){.egg-cube .tut-intro-logo,.egg-cube .ti-sun{animation:none}}\n"
  +".egg-cube .ch-space{display:inline-flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in srgb,var(--line) 32%,transparent)}\n"
  +".egg-cube .ch-space button{padding:4px 8px;font-size:.78rem;font-weight:700}\n"
  +".egg-cube .cb-tut.hl{animation:tut-hl 1.8s ease-in-out 3}\n"
  +".egg-cube .tut-again{position:absolute;transform:translate(-50%,-4px);width:max-content;max-width:260px;padding:6px 11px;border-radius:9px;background:#f2c14e;color:#1b1f2a;font-weight:700;font-size:.92rem;box-shadow:0 8px 20px rgba(0,0,0,.35);opacity:0;transition:opacity .25s,transform .25s;pointer-events:none;z-index:6}\n"
  +".egg-cube .tut-again.in{opacity:1;transform:translate(-50%,0)}\n"
  +".egg-cube .tut-again::before{content:\"\";position:absolute;left:50%;top:-6px;margin-left:-6px;border:6px solid transparent;border-top:0;border-bottom-color:#f2c14e}\n"
  +"@media (prefers-reduced-motion:reduce){.egg-cube .cb-tut.hl{animation:none;background:#f2c14e!important;color:#1b1f2a!important}}\n"
  +".egg-cube .ol-fold{width:16px;padding:6px 0;flex:none;text-align:center;color:var(--ink-mute);font-size:0.805rem;line-height:1}\n"
  +".egg-cube .ol-fold-sp{width:16px;flex:none}\n"
  +".egg-cube .ol-list{position:relative}\n"
  +".egg-cube .ol-list.dragging{cursor:grabbing}\n"
  +".egg-cube .ol-list.dragging *{cursor:grabbing!important}\n"
  +".egg-cube .ol-it.dz-onto{box-shadow:inset 0 0 0 2px #f2c14e}\n"
  +".egg-cube .ol-it.dz-before{box-shadow:inset 0 2px 0 #f2c14e}\n"
  +".egg-cube .ol-it.dz-after{box-shadow:inset 0 -2px 0 #f2c14e}\n"
  +".egg-cube .ol-list.dz-world{box-shadow:inset 0 0 0 2px color-mix(in srgb,#f2c14e 55%,transparent);border-radius:8px}\n"
  +".egg-cube .ol-it{user-select:none}\n"
  +".egg-cube .cube-shelf{position:absolute;left:0;right:0;margin:auto;top:calc(80px + env(safe-area-inset-top,0px));width:max-content;max-width:calc(100vw - 24px);display:flex;align-items:center;gap:8px;padding:4px 6px 4px 10px;overflow-x:auto;scrollbar-width:none;touch-action:pan-x}\n"
  +".egg-cube .cube-shelf::-webkit-scrollbar{display:none}\n"
  +".egg-cube .cube-shelf>*{flex:none}\n"
  +".egg-cube .sh-l{font-size:0.713rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .cube-wipbox,.egg-cube .cube-tutask{top:var(--below,132px)!important}\n"
  +".egg-cube .tl-sep{width:1px;align-self:stretch;margin:2px 2px;background:var(--line)}\n"
  +".egg-cube .tl-end{box-sizing:border-box;width:46px;padding:3px 5px;border-radius:7px;border:1px solid var(--line);background:color-mix(in srgb,var(--line) 25%,var(--surface));color:var(--ink);font:inherit;font-weight:700;font-variant-numeric:tabular-nums;text-align:right}\n"
  +".egg-cube .tl-end:focus{outline:2px solid var(--accent);outline-offset:0}\n"
  +".egg-cube .tl-pb button{width:32px!important}\n"
  +".egg-cube.ge-docked .cube-ge{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom-width:0!important;box-shadow:none!important}\n"
  +".egg-cube.ge-docked .cube-tl{border-top-left-radius:0!important;border-top-right-radius:0!important;border-top:1px solid var(--line)!important}\n"
  +".egg-cube .ge-grp{display:inline-flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in srgb,var(--line) 40%,transparent)}\n"
  +".egg-cube .ge-grp button{padding:4px 9px;font-size:0.782rem}\n"
  +".egg-cube .ge-loop{border:0!important;padding:2px!important;border-radius:10px!important;background:color-mix(in srgb,var(--line) 40%,transparent)}\n"
  +".egg-cube .ge-loop button{padding:4px 7px!important}\n"
  +".egg-cube .ge-help{font-size:0.736rem!important}\n"
  +".egg-cube .ge-side{background:none!important;padding:0 4px 0 0!important;border-right:1px solid var(--line);border-radius:0!important}\n"
  +".egg-cube .gs-ch[aria-pressed=\"true\"]{background:color-mix(in srgb,var(--line) 55%,transparent)!important;color:var(--ink)!important}\n"
  +".egg-cube .gs-ch:hover{color:var(--ink)}\n"
  +".egg-cube .ge-plot{background:none!important;border-radius:0!important}\n"
  +".egg-cube .cube-tutask{position:absolute;left:0;right:0;margin:auto;top:calc(76px + env(safe-area-inset-top,0px));width:min(380px,calc(100vw - 24px));padding:12px 14px;z-index:4;opacity:0;transform:translateY(-6px);transition:opacity .25s,transform .25s}\n"
  +".egg-cube .cube-tutask.in{opacity:1;transform:none}\n"
  +".egg-cube .cube-tutask p{margin:0 0 10px;font-weight:600;line-height:1.45;color:var(--ink-soft)}\n"
  +".egg-cube .cube-tutask b{color:var(--ink)}\n"
  +".egg-cube .ta-btns{display:flex;justify-content:flex-end;gap:8px}\n"
  +".egg-cube .ta-yes{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important}\n"
  +".egg-cube .cube-right{position:absolute;right:12px;top:calc(200px + env(safe-area-inset-top,0px));width:min(253px,calc(100vw - 24px));max-height:calc(100vh - 340px);display:flex;flex-direction:column;gap:10px;pointer-events:none}\n"
  +".egg-cube .cube-right>.cube-ui{flex:0 3 auto;min-height:96px;margin:0;pointer-events:auto}\n"
  +".egg-cube .cube-right>.cube-attr{flex-shrink:1;min-height:120px}\n"
  +".egg-cube .ch-prims{display:inline-flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in srgb,var(--line) 32%,transparent)}\n"
  +".egg-cube .ch-prims button{padding:4px 8px;font-weight:600;font-size:0.828rem}\n"
  +".egg-cube.icons .ch-prims button{width:34.5px;height:34.5px;padding:0!important;display:inline-grid;place-items:center}\n"
  +".egg-cube .ol-it{padding-left:calc(var(--d,0) * 14px)}\n"
  +".egg-cube .ol-it.grp .ol-name{font-weight:800}\n"
  +".egg-cube .ol-g{width:13px;height:13px;margin-right:5px;vertical-align:-2px;fill:none;stroke:currentColor;stroke-width:2}\n"
  +".egg-cube .cube-tl .tl-graph{border:0!important;background:color-mix(in srgb,var(--line) 40%,transparent)!important;border-radius:10px!important;font-weight:700;color:var(--ink)}\n"
  +".egg-cube .cube-tl .tl-graph[aria-pressed=\"true\"]{background:color-mix(in srgb,#f2c14e 24%,var(--surface))!important;box-shadow:inset 0 0 0 1px color-mix(in srgb,#f2c14e 55%,transparent)!important}\n"
  +".egg-cube.icons .cube-tl .tl-graph{width:auto!important;display:inline-flex!important;align-items:center;gap:8px;padding:0 14px 0 11px!important}\n"
  +".egg-cube.icons .tl-graph .bi{width:22px;height:22px}\n"
  +".egg-cube.icons .tl-graph .bt{position:static;width:auto;height:auto;margin:0;clip:auto;overflow:visible;font-size:0.828rem}\n"
  +".egg-cube.icons .cube-head .cb-ui{width:auto!important;display:inline-flex!important;align-items:center;gap:7px;padding:0 13px 0 10px!important;white-space:nowrap}\n"
  +".egg-cube.icons .cb-ui .bt{position:static;width:auto;height:auto;margin:0;clip:auto;overflow:visible;font-size:0.828rem;font-weight:700}\n"
  +".egg-cube .cube-keys{width:min(980px,calc(100vw - 24px))!important;padding:14px 20px 18px!important}\n"
  +".egg-cube .ck-top{gap:10px;justify-content:flex-start!important}\n"
  +".egg-cube .ck-sub{color:var(--ink-mute);font-size:0.805rem;font-weight:600}\n"
  +".egg-cube .ck-top .ck-x{margin-left:auto}\n"
  +".egg-cube .ck-grid{columns:3 270px;column-gap:30px}\n"
  +".egg-cube .ck-sec{break-inside:avoid;margin:0 0 16px;padding:0;border:0;background:none;box-shadow:none}\n"
  +".egg-cube .ck-sec h4{margin:0 0 6px;padding-bottom:4px;border-bottom:1px solid var(--line);font-size:0.759rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .cube-keys dl{display:grid!important;grid-template-columns:max-content 1fr;column-gap:12px;row-gap:5px;margin:0;align-items:center}\n"
  +".egg-cube .ck-row{display:contents}\n"
  +".egg-cube .ck-row dt{display:flex;align-items:center;gap:3px;flex-wrap:nowrap;font-weight:700;white-space:nowrap}\n"
  +".egg-cube .ck-row dd{margin:0!important;text-align:left;color:var(--ink-soft);font-weight:600;font-size:0.828rem;line-height:1.35}\n"
  +".egg-cube .cube-keys kbd{display:inline-grid;place-items:center;min-width:25px;height:25px;padding:0 7px;border-radius:6px;border:1px solid var(--line);border-bottom-width:2px;background:var(--surface);font:700 0.782rem ui-monospace,Menlo,Consolas,monospace;color:var(--ink)}\n"
  +".egg-cube .ck-act{font-size:0.782rem;font-weight:700;color:var(--ink-soft);padding:2px 7px;border-radius:999px;background:color-mix(in srgb,var(--line) 45%,transparent);white-space:nowrap}\n"
  +".egg-cube .ck-plus{font-style:normal;color:var(--ink-mute);font-size:0.759rem}\n"
  +".egg-cube .cube-tutbox{position:absolute;left:0;right:0;top:50%;margin:auto;transform:translateY(-50%);width:min(600px,calc(100vw - 24px));padding:14px 16px 14px;z-index:4}   /* wider (Jakob, 20.10.2026): key combinations and last words stay on their line */\n"
  +".egg-cube .cube-tutbox[hidden]{display:none}\n"
  +".egg-cube .tut-top{display:flex;align-items:center;gap:10px}\n"
  +".egg-cube .tut-n{font-size:0.782rem;letter-spacing:.06em;color:var(--ink-mute)}\n"
  +".egg-cube .tut-x{margin-left:auto;width:28px;height:28px;padding:0}\n"
  +".egg-cube .cube-tutbox h3{margin:4px 0 8px;font-size:1.15rem;letter-spacing:0;text-transform:none;color:var(--ink)}\n"
  +".egg-cube .tut-stage{border-radius:12px;background:color-mix(in srgb,var(--line) 32%,var(--surface));overflow:hidden}\n"
  +".egg-cube .tut-stage svg{display:block;width:100%;height:auto}\n"
  +".egg-cube .tut-p{margin:10px 0 12px;font-weight:600;line-height:1.5;color:var(--ink-soft);min-height:4.5em}\n"
  +".egg-cube .tut-nav{display:flex;align-items:center;gap:8px}\n"
  +".egg-cube .tut-dots{display:flex;gap:6px;margin:0 auto}\n"
  +".egg-cube .tut-dots button{width:9px;height:9px;padding:0;border-radius:50%;background:var(--line);border:0}\n"
  +".egg-cube .tut-dots button[aria-current=\"step\"]{background:#f2c14e;width:22px;border-radius:5px}\n"
  +".egg-cube .tut-next{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important}\n"
  +".egg-cube .tut-stage .tf-top{fill:#c9d3e0}\n"
  +".egg-cube .tut-stage .tf-l{fill:#9aa3b2}\n"
  +".egg-cube .tut-stage .tf-r{fill:#7d8696}\n"
  +".egg-cube .tut-stage .tf-top,.egg-cube .tut-stage .tf-l,.egg-cube .tut-stage .tf-r{stroke:#2b313c;stroke-width:1;stroke-linejoin:round}\n"
  +".egg-cube .tut-stage .t-sel{fill:none;stroke:#f2c14e;stroke-width:2.6;stroke-linejoin:round}\n"
  +".egg-cube .tut-stage .t-face{fill:#f2c14e;fill-opacity:.85;stroke:#c99a2a;stroke-linejoin:round}\n"
  +".egg-cube .tut-stage .gx{stroke:#e2574c;stroke-width:3}\n"
  +".egg-cube .tut-stage .gx-h{fill:#e2574c}\n"
  +".egg-cube .tut-stage .gy{stroke:#5bb46a;stroke-width:3}\n"
  +".egg-cube .tut-stage .gy-h{fill:#5bb46a}\n"
  +".egg-cube .tut-stage .gc{fill:#f4f1ea;stroke:#1b1f2a}\n"
  +".egg-cube .tut-stage .tcur-p{fill:#fff;stroke:#1b1f2a;stroke-width:1.2;stroke-linejoin:round}\n"
  +".egg-cube .tut-stage text{font:700 9px ui-monospace,Menlo,Consolas,monospace;text-anchor:middle;fill:var(--ink)}\n"
  +".egg-cube .tut-stage .mm-l rect,.egg-cube .tut-stage .t2-pick rect,.egg-cube .tut-stage .t3-keys rect,.egg-cube .tut-stage .t4-in>rect,.egg-cube .tut-stage .t5-tag rect,.egg-cube .tut-stage .t4-icons rect{fill:var(--surface);stroke:var(--line);stroke-width:1.2}\n"
  +".egg-cube .tut-stage .mm-c{fill:none;stroke:var(--ink-mute)}\n"
  +".egg-cube .tut-stage .t2-pick rect{stroke:#f2c14e;stroke-width:2}\n"
  +".egg-cube .tut-stage .ti{fill:none;stroke:var(--ink-soft);stroke-width:1.5;stroke-linejoin:round}\n"
  +".egg-cube .tut-stage .tw{fill:none;stroke:#2b313c;stroke-width:.9}\n"
  +".egg-cube .tut-stage .tl{font-size:7.5px;text-anchor:start;fill:var(--ink-mute)}\n"
  +".egg-cube .tut-stage .t4-f{fill:color-mix(in srgb,var(--line) 50%,transparent)}\n"
  +".egg-cube .tut-stage .t-rows rect{fill:var(--ink-mute);opacity:.45}\n"
  +".egg-cube .tut-stage .t-rows line{stroke:var(--line);stroke-width:1.2}\n"
  +".egg-cube .tut-stage .px1{fill:#b07a42}\n"
  +".egg-cube .tut-stage .px2{fill:#8a5a2c}\n"
  +".egg-cube .tut-stage .px3{stroke:#8a5a2c;stroke-width:2.4}\n"
  +".egg-cube .tut-stage .t5-ln{stroke:#f2c14e;stroke-width:3;stroke-linecap:round}\n"
  +".egg-cube .tut-stage .t5-tag rect{stroke:#f2c14e;stroke-width:1.5}\n"
  +".egg-cube .tut-stage .t5-tag text{font-size:7.5px}\n"
  +".egg-cube .tut-stage svg *{transform-box:fill-box}\n"
  +".egg-cube .tut-stage .t5-cube>g{transform-box:view-box}\n"
  +".egg-cube .tut-stage .t1-cur,.egg-cube .tut-stage .t2-cur,.egg-cube .tut-stage .t3-cur,.egg-cube .tut-stage .t4-cur,.egg-cube .tut-stage .t5-cur,.egg-cube .tut-stage .t6-cur,.egg-cube .tut-stage .t1-obj,.egg-cube .tut-stage .t5-px,.egg-cube .tut-stage .t6-obj,.egg-cube .tut-stage .t3-up{animation-timing-function:ease-in-out}\n"
  +".egg-cube .tut-stage .px-tree{fill:#4caf50}\n"
  +".egg-cube .tut-stage .px-roof{fill:#c0473a}\n"
  +".egg-cube .tut-stage .px-wall{fill:#efe3c8}\n"
  +".egg-cube .tut-stage .t6-keys rect{fill:var(--surface);stroke:var(--line);stroke-width:1.2}\n"
  +".egg-cube .tut-stage .t6-lab{font:700 7.5px ui-monospace,Menlo,Consolas,monospace;fill:var(--ink-soft);text-anchor:start}\n"
  +".egg-cube .tut-stage .t6-lab2{font:600 6.5px ui-monospace,Menlo,Consolas,monospace;fill:var(--ink-mute);text-anchor:start}\n"
  +".egg-cube .tut-stage .t6-tag rect{fill:var(--surface);stroke:#f2c14e;stroke-width:1.5}\n"
  +".egg-cube .tut-stage .t6-tag text{font-size:7.5px}\n"
  +".egg-cube .tut-stage /* tutorial step 7: have fun (18.10.2026) */\n"
  +".tut-s7 .t7-conf rect{animation:t7f 3.2s linear infinite}\n"
  +".egg-cube .tut-stage .t6-cube{transform-origin:50% 50%}\n"
  +".egg-cube .tut-stage .t6-cube>g{transform-box:view-box}\n"
  +"@media (prefers-reduced-motion:reduce){.egg-cube .tut-stage *{animation:none!important}}\n"
  +"html.rm .egg-cube .tut-stage *{animation:none!important}\n"
  +".egg-cube .bi{display:none;width:20.5px;height:20.5px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}\n"
  +".egg-cube .cb-ui .bi{display:block}\n"
  +".egg-cube .cb-ui{display:inline-flex;align-items:center;gap:6px}\n"
  +".egg-cube.icons .bi{display:block}\n"
  +".egg-cube.icons .bt{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n"
  +".egg-cube.icons .cube-bar button,.egg-cube.icons .cube-tl button,.egg-cube.icons .ch-wip,.egg-cube.icons .cb-add,.egg-cube.icons .cb-ui,.egg-cube.icons .ol-add button,.egg-cube.icons .gl-add button,.egg-cube.icons .gl-act button:not(.gl-x){position:relative;display:inline-grid;place-items:center;width:39px;height:39px;padding:0!important}\n"
  +".egg-cube.icons .cube-tl .tl-pb button{width:34.5px}\n"
  +".egg-cube.icons .ch-wip{width:auto;padding:0 9px!important;height:30px}\n"
  +".egg-cube.icons .ch-wip .bi{width:37px;height:37px;margin:-3.5px 0}\n"
  +".egg-cube.icons .ch-wip .bi svg{width:100%;height:100%;overflow:visible}\n"
  +".egg-cube.icons .tl-auto::before{width:14px;height:14px}\n"
  +".egg-cube.icons .ol-add{gap:2px}\n"
  +".egg-cube.icons .ol-add span{display:none}\n"
  +".egg-cube.icons .gl-add{justify-content:center}\n"
  +".egg-cube.icons .gl-add button{flex:none}\n"
  +".egg-cube.icons .gl-act button:not(.gl-x){width:32px;height:32px}\n"
  +".egg-cube.icons .gl-act button .bi{width:18.5px;height:18.5px}\n"
  +".egg-cube.icons .cube-bar{gap:3px;padding:6px}\n"
  +".egg-cube.icons .cube-bar .cb-sep{height:27.5px;margin:0 4px}\n"
  +".egg-cube.icons .cube-tl{gap:6px}\n"
  +".egg-cube.icons button[aria-pressed=\"true\"] .bi,.egg-cube.icons .cb-save.dirty .bi{stroke:currentColor}\n"
  +".egg-cube .cube-ol,.egg-cube .cube-attr,.egg-cube .cube-gal{position:relative}\n"
  +".egg-cube .pn-min{position:absolute;top:4px;right:6px;width:24px;height:22px;padding:0;display:grid;place-items:center;border-radius:7px;font-size:1.035rem;line-height:1;color:var(--ink-mute)}\n"
  +".egg-cube .cube-ge .pn-min{position:static;margin-left:auto}\n"
  +".egg-cube .cube-ui.min{min-height:0!important;flex:none!important;padding-bottom:6px}\n"
  +".egg-cube .cube-ui.min>*:not(h3):not(.pn-min):not(.ge-top){display:none!important}\n"
  +".egg-cube .cube-ge.min{height:auto!important}\n"
  +".egg-cube .cube-ge.min .ge-top{margin-bottom:0}\n"
  +".egg-cube .cube-ge.min .ge-body,.egg-cube .cube-ge.min .ge-help,.egg-cube .cube-ge.min .ge-all,.egg-cube .cube-ge.min .ge-loop{display:none!important}\n"
  +".egg-cube .cube-ui.min h3{margin-bottom:0}\n"
  +".egg-cube .cube-keys{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,calc(100vw - 24px));max-height:calc(100vh - 40px);overflow:auto;padding:10px 14px 14px;z-index:3}\n"
  +".egg-cube .cube-keys[hidden]{display:none}\n"
  +".egg-cube .ck-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}\n"
  +".egg-cube .ck-top h3{margin:0;font:inherit;font-size:0.759rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .cube-keys dl{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;margin:0}\n"
  +".egg-cube .cube-keys dt{font-weight:700;white-space:nowrap}\n"
  +".egg-cube .cube-keys dd{margin:0;color:var(--ink-soft);font-weight:600}\n"
  +"@media (max-width:420px){.egg-cube .cube-keys dl{grid-template-columns:1fr}\n"
  +".egg-cube .cube-keys dd{margin-bottom:4px}}\n"
  +".egg-cube .tl-tan{display:inline-flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in srgb,var(--line) 40%,transparent)}\n"
  +".egg-cube .tl-tan button{padding:5px 8px}\n"
  +".egg-cube .cube-ge{position:absolute;left:0;right:0;margin:auto;width:min(980px,calc(100vw - 24px));height:min(280px,38vh);display:flex;flex-direction:column;padding:6px 8px 8px}\n"
  +".egg-cube .cube-ge[hidden]{display:none}\n"
  +".egg-cube .ge-top{display:flex;align-items:center;gap:8px;margin-bottom:4px}\n"
  +".egg-cube .ge-top h3{margin:0 4px;font:inherit;font-size:0.759rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .ge-chs{display:inline-flex;gap:2px}\n"
  +".egg-cube .ge-ch{padding:3px 9px}\n"
  +".egg-cube .ge-ch[data-c=\"x\"]{color:#e2574c}\n"
  +".egg-cube .ge-ch[data-c=\"y\"]{color:#5bb46a}\n"
  +".egg-cube .ge-ch[data-c=\"z\"]{color:#4a8fe7}\n"
  +".egg-cube .ge-ch[aria-pressed=\"false\"]{opacity:.4;box-shadow:none;background:none}\n"
  +".egg-cube .ge-loop{display:inline-flex;align-items:center;gap:1px;padding:1px;border-radius:9px;border:1px solid var(--line)}\n"
  +".egg-cube .ge-loop button{padding:2px 7px;font-size:0.943rem;line-height:1;min-width:0}\n"
  +".egg-cube .ge-loop-l{font-size:0.713rem;font-weight:700;letter-spacing:.04em;color:var(--ink-mute);padding:0 3px}\n"
  +".egg-cube .ge-all{padding:3px 9px;font-size:0.759rem}\n"
  +".egg-cube .ge-body{display:flex;gap:6px;flex:1;min-height:0}\n"
  +".egg-cube .ge-side{width:132px;flex:none;overflow:auto;display:flex;flex-direction:column;gap:1px;padding:2px;border-radius:8px;background:color-mix(in srgb,var(--line) 18%,var(--surface));scrollbar-width:thin}\n"
  +".egg-cube .gs-obj{text-align:left;padding:4px 7px!important;font-weight:800;font-size:0.805rem;color:var(--ink);border-radius:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"
  +".egg-cube .gs-ch{display:flex;align-items:center;gap:6px;text-align:left;padding:2px 7px 2px 10px!important;font-size:0.759rem;font-weight:600;color:var(--ink-mute);border-radius:6px;box-shadow:none!important;background:none}\n"
  +".egg-cube .gs-ch.keyed{color:var(--ink-soft)}\n"
  +".egg-cube .gs-ch[aria-pressed=\"true\"]{background:color-mix(in srgb,#f2c14e 22%,transparent);color:var(--ink)}\n"
  +".egg-cube .gs-sw{width:12px;height:0;border-top:2px solid var(--c);flex:none}\n"
  +".egg-cube .gs-sw.gs-r{border-top-style:dashed}\n"
  +".egg-cube .gs-sw.gs-s{border-top-style:dotted;border-top-width:3px}\n"
  +".egg-cube .gs-ch:not(.keyed) .gs-sw{opacity:.35}\n"
  +".egg-cube .gs-none{margin:6px;color:var(--ink-mute);font-size:0.759rem}\n"
  +".egg-cube .ge-help{flex:1;color:var(--ink-mute);font-weight:600;font-size:0.759rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"
  +".egg-cube .ge-x{padding:3px 9px}\n"
  +".egg-cube .ge-plot{position:relative;flex:1;min-height:0;border-radius:8px;background:color-mix(in srgb,var(--line) 18%,var(--surface))}\n"
  +".egg-cube .ge-cv{position:absolute;inset:0;width:100%;height:100%;cursor:crosshair;touch-action:none}\n"
  +".egg-cube .ge-empty{position:absolute;inset:0;display:grid;place-items:center;color:var(--ink-mute);font-weight:600;pointer-events:none}\n"
  +".egg-cube .ge-empty[hidden]{display:none}\n"
  +".egg-cube .cube-tl{width:min(980px,calc(100vw - 24px))!important;flex-wrap:wrap}\n"
  +"@media (min-width:900px){.egg-cube .cube-ge,.egg-cube .cube-tl{width:min(980px,calc(100vw - 500px))!important}}\n"
  +".egg-cube .tl-auto{display:inline-flex;align-items:center;gap:6px}\n"
  +".egg-cube .tl-auto::before{content:\"\";width:9px;height:9px;border-radius:50%;border:1.5px solid currentColor;box-sizing:border-box}\n"
  +".egg-cube .tl-auto,.egg-cube .tl-auto[aria-pressed=\"true\"]{color:var(--ink-mute);background:none!important;border-color:transparent!important;box-shadow:none!important;font-size:.72rem;opacity:.8}\n"
  +".egg-cube .tl-auto:hover{opacity:1;color:var(--ink)}\n"
  +".egg-cube .tl-auto[aria-pressed=\"true\"]::before{background:color-mix(in srgb,#e2574c 75%,transparent);border-color:transparent}\n"
  +".egg-cube.icons .tl-auto{width:28px!important;height:28px!important}\n"
  +".egg-cube.icons .tl-auto::before{width:9px!important;height:9px!important}\n"
  +".egg-cube .tl-wrap{position:relative;flex:1;height:44px;min-width:120px}\n"
  +".egg-cube .tl-track{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}\n"
  +".egg-cube .tl-track::before{content:\"\";position:absolute;left:0;right:0;top:19px;height:6px;border-radius:3px;background:color-mix(in srgb,var(--line) 70%,transparent)}\n"
  +".egg-cube .tl-key{position:absolute;top:22px;width:8px;height:8px;margin:-4px 0 0 -4px;z-index:1;transform:rotate(45deg);background:#e2574c;border:1px solid var(--surface);box-sizing:border-box}\n"
  +".egg-cube .tl-head{position:absolute;top:15px;height:16px;width:2px;margin-left:-1px;background:var(--cg);z-index:2}\n"
  +".egg-cube .tl-cur{position:absolute;bottom:100%;left:0;margin-bottom:1px;padding:0 5px;border-radius:5px;background:var(--cg);color:#1b1f2a;font-size:.72rem;font-weight:800;line-height:15px;font-variant-numeric:tabular-nums;white-space:nowrap}\n"
  +".egg-cube .tl-tick{position:absolute;top:27px;width:1px;height:3px;margin-left:-.5px;background:color-mix(in srgb,var(--ink-mute) 55%,transparent)}\n"
  +".egg-cube .tl-tick.mj{height:5px;background:var(--ink-mute)}\n"
  +".egg-cube .tl-tick span{position:absolute;top:5px;left:0;transform:translateX(-50%);font-size:.62rem;line-height:1;color:var(--ink-mute);font-variant-numeric:tabular-nums}\n"
  +".egg-cube .tl-tick:first-child span{transform:none}\n"
  +".egg-cube .tl-tick.mj[style=\"left:100%\"] span{transform:translateX(-100%)}\n"
  +".egg-cube .tl-scrub{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}\n"
  +".egg-cube .tl-frame{min-width:26px;text-align:right;font-variant-numeric:tabular-nums}\n"
  +".egg-cube .tl-of{color:var(--ink-mute)}\n"
  +".egg-cube .cube-tip{position:absolute;left:0;right:0;margin:auto;bottom:calc(130px + env(safe-area-inset-bottom,0px));width:max-content;max-width:min(92vw,480px);padding:6px 12px;border-radius:9px;background:var(--surface);color:var(--ink);border:2px solid var(--ink);text-align:center;text-wrap:balance;transition:opacity .6s;pointer-events:none}\n"
  +".egg-cube .cube-left{position:absolute;left:12px;top:calc(84px + env(safe-area-inset-top,0px));width:253px;max-height:calc(100vh - 226px);display:flex;flex-direction:column;gap:10px;pointer-events:none}\n"
  +".egg-cube .cube-left>.cube-ui{flex:0 3 auto;min-height:96px;margin:0}\n"
  +".egg-cube .cube-left>.cube-attr{flex-shrink:1;min-height:120px}\n"
  +".egg-cube .cube-ol{display:flex;flex-direction:column;padding:8px;overflow:hidden;min-height:176px!important}\n"
  +".egg-cube .cube-ol .ol-list{max-height:22vh;min-height:30px;flex:1 1 auto}\n"
  +".egg-cube .cube-ol .ol-add,.egg-cube .cube-gal .gl-add{flex:none}\n"
  +".egg-cube .cube-gal{display:flex;flex-direction:column;padding:8px;overflow:hidden;min-height:118px!important}\n"
  +".egg-cube .cube-gal .gl-list{max-height:20vh;min-height:30px;flex:1 1 auto}\n"
  +".egg-cube .cube-attr{padding:8px 10px 10px;overflow:auto}\n"
  +".egg-cube .cube-attr h3{margin:0 0 6px;font:inherit;font-size:0.759rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .at-name{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin:0 0 6px}\n"
  +".egg-cube .at-name b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"
  +".egg-cube .at-name small{color:var(--ink-mute);font-size:0.759rem}\n"
  +".egg-cube .at-row{display:grid;grid-template-columns:minmax(0,1fr) 56px;align-items:center;gap:6px;margin:3px 0;font-weight:600;font-size:0.805rem;color:var(--ink-soft)}\n"
  +".egg-cube .at-row span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"
  +".egg-cube .at-row input{box-sizing:border-box;width:56px;padding:4px 6px;border-radius:7px;border:1px solid var(--line);background:color-mix(in srgb,var(--line) 25%,var(--surface));color:var(--ink);font:inherit;font-size:16px;text-align:right}\n"
  +"@media (min-width:641px){.egg-cube .at-row input{font-size:0.874rem}}\n"
  +".egg-cube .at-row input:focus{outline:2px solid var(--accent);outline-offset:0}\n"
  +".egg-cube .at-row input:not(:focus){cursor:ew-resize;user-select:none}\n"
  +".egg-cube .at-row input::selection{background:color-mix(in srgb,var(--accent) 45%,transparent)}\n"
  +".egg-cube .at-lab{display:block;width:100%;text-align:left;padding:3px 6px!important;margin:0 0 0 -6px;font:inherit;font-weight:600;font-size:0.805rem;color:var(--ink-soft);background:none;border:0;border-radius:6px;box-shadow:none!important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}\n"
  +".egg-cube .at-lab:hover{color:var(--ink)}\n"
  +".egg-cube .at-lab:not([aria-pressed=\"true\"]){background:none!important}\n"
  +".egg-cube .at-lab[aria-pressed=\"true\"]{background:color-mix(in srgb,#f2c14e 30%,transparent);color:var(--ink)}\n"
  +".egg-cube .at-note{margin:6px 0 0;color:var(--ink-mute);font-weight:600;font-size:0.782rem;line-height:1.35}\n"
  +".egg-cube .cube-gal h3{margin:0 0 6px 4px;font:inherit;font-size:0.759rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .gl-list{list-style:none;margin:0;padding:0;overflow:auto;flex:1;min-height:40px;display:grid;gap:4px}\n"
  +".egg-cube .gl-it{display:grid;grid-template-columns:44px minmax(0,1fr);gap:4px 8px;align-items:center;padding:3px;border-radius:9px}\n"
  +".egg-cube .gl-it:hover{background:color-mix(in srgb,var(--line) 40%,transparent)}\n"
  +".egg-cube .gl-th{width:44px;height:44px;border-radius:7px;border:1px solid var(--line);background:var(--surface);object-fit:cover;cursor:zoom-in;transition:transform .15s}\n"
  +".egg-cube .gl-th:hover{transform:scale(1.08)}\n"
  +".egg-cube .gl-txt{display:flex;flex-direction:column;min-width:0}\n"
  +".egg-cube .gl-txt small{color:var(--ink-mute);font-size:0.713rem;padding-left:4px}\n"
  +".egg-cube .gl-name{padding:2px 4px;overflow:hidden;text-overflow:ellipsis;text-align:left}\n"
  +".egg-cube .gl-act{grid-column:1/-1;display:flex;gap:2px}\n"
  +".egg-cube .gl-act button{padding:4px 8px;font-weight:600;font-size:0.782rem}\n"
  +".egg-cube .gl-x{margin-left:auto;color:var(--ink-mute)}\n"
  +".egg-cube .gl-x:hover{background:#e2574c;color:#fff}\n"
  +".egg-cube .gl-empty{padding:6px 4px;color:var(--ink-mute);font-weight:600}\n"
  +".egg-cube .gl-add{display:flex;gap:3px;margin-top:6px;padding-top:6px;border-top:1px solid var(--line)}\n"
  +".egg-cube .gl-add button{flex:1;text-align:center;padding:6px 6px;font-weight:600}\n"
  +".egg-cube .gl-preview{position:fixed;width:220px;height:220px;border-radius:14px;border:2px solid var(--cg);background:var(--surface);box-shadow:0 14px 40px rgba(0,0,0,.4);pointer-events:none;z-index:2;object-fit:cover}\n"
  +".egg-cube .gl-preview[hidden]{display:none}\n"
  +".egg-cube .cube-ol h3{margin:0 0 6px 4px;font:inherit;font-size:0.759rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-cube .ol-list{list-style:none;margin:0;padding:0;overflow:auto;flex:1;min-height:40px}\n"
  +".egg-cube .ol-it{display:flex;align-items:center;gap:2px;border-radius:8px}\n"
  +".egg-cube .ol-it.on{background:color-mix(in srgb,var(--cg) 22%,var(--surface))}\n"
  +".egg-cube .ol-it.hid .ol-name{color:var(--ink-mute);text-decoration:line-through}\n"
  +".egg-cube .ol-eye{width:24px;padding:6px 0;text-align:center;color:var(--ink-mute)}\n"
  +".egg-cube .ol-name{flex:1;padding:6px 6px;overflow:hidden;text-overflow:ellipsis}\n"
  +".egg-cube .ol-k{color:#e2574c;font-size:0.736rem;padding-right:6px}\n"
  +".egg-cube .ol-empty{padding:8px 6px;color:var(--ink-mute)}\n"
  +".egg-cube .ol-add{display:flex;flex-wrap:wrap;gap:3px;align-items:center;margin-top:6px;padding-top:6px;border-top:1px solid var(--line)}\n"
  +".egg-cube .ol-add span{color:var(--ink-mute);padding:0 4px;font-size:0.759rem;letter-spacing:.08em;text-transform:uppercase}\n"
  +".egg-cube .ol-add button{padding:5px 8px;font-weight:600}\n"
  +".egg-cube .cube-nav{position:absolute;inset:auto;top:calc(84px + env(safe-area-inset-top,0px));right:24px;width:104px;height:104px;cursor:grab;touch-action:none}\n"
  +".egg-cube .cube-nav.corner{top:auto;right:auto;width:84px;height:84px}\n"
  +".egg-cube .cube-mm{position:absolute;width:0;height:0;border:0;background:none;box-shadow:none;pointer-events:none}\n"
  +".egg-cube .cube-mm .mm-c{position:absolute;left:0;top:0;transform:translate(-50%,-50%);white-space:nowrap;padding:4px 8px;border-radius:999px;background:var(--surface);border:2px solid var(--cg);font-size:0.736rem;color:var(--ink-mute)}\n"
  +".egg-cube .cube-mm button{position:absolute;left:0;transform:translateX(-50%);white-space:nowrap;background:var(--surface);border:2px solid var(--cg);box-shadow:0 6px 18px rgba(0,0,0,.3)}\n"
  +".egg-cube .cube-mm .mm-up{top:-30px;transform:translate(-50%,-100%)}\n"
  +".egg-cube .cube-mm .mm-dn{top:30px}\n"
  +".egg-cube .cube-mm button.on{background:var(--cg);color:#1b1f2a}\n"
  +".egg-cube .cube-head{position:absolute;left:0;right:0;margin:auto;top:calc(16px + env(safe-area-inset-top,0px));width:max-content;max-width:calc(100vw - 24px);display:flex;align-items:center;gap:12px;padding:5px 8px 5px 10px}\n"
  +".egg-cube .cube-head{overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch;touch-action:pan-x;scrollbar-width:none}\n"
  +".egg-cube .cube-head::-webkit-scrollbar{display:none}\n"
  +".egg-cube .cube-head>*{flex:none}\n"
  +".egg-cube .ch-brand{display:inline-flex;align-items:center;gap:8px}\n"
  +".egg-cube .ch-logo{width:34.5px;height:34.5px;flex:none}\n"
  +".egg-cube .ch-brand b{font-family:\"Plus Jakarta Sans\",system-ui,sans-serif;font-size:1.208rem;letter-spacing:-.01em}\n"
  +".egg-cube .ch-brand small{color:var(--ink-mute);font-weight:600;font-size:0.759rem}\n"
  +".egg-cube .ch-wip{padding:4px 9px;border-radius:999px;font-size:0.759rem;letter-spacing:.04em;color:#1b1f2a;background:#f2c14e;box-shadow:inset 0 0 0 1px rgba(0,0,0,.25)}\n"
  +".egg-cube .ch-wip:hover,.egg-cube .ch-wip:focus-visible{background:#f6cd6a}\n"
  +".egg-cube .ch-wip[aria-expanded=\"true\"]{box-shadow:inset 0 0 0 2px #1b1f2a}\n"
  +".egg-cube .cube-wipbox{position:absolute;left:0;right:0;margin:auto;top:calc(72px + env(safe-area-inset-top,0px));width:min(380px,calc(100vw - 24px));padding:10px 14px 12px;z-index:3}\n"
  +".egg-cube .cube-wipbox[hidden]{display:none}\n"
  +".egg-cube .cube-wipbox p{margin:6px 0 0;font-weight:600;line-height:1.45;color:var(--ink-soft)}\n"
  +".egg-cube .cube-wipbox a{color:var(--link);font-weight:700;white-space:nowrap}\n"
  +".egg-cube .ch-tools{display:inline-flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in srgb,var(--line) 40%,transparent)}\n"
  +".egg-cube .ch-tools button{display:inline-flex;align-items:center;gap:5px;padding:6px 9px}\n"
  +".egg-cube .ch-tools svg{width:18.5px;height:18.5px;fill:currentColor}\n"
  +".egg-cube .ch-tools kbd{font:inherit;font-size:0.759rem;color:var(--ink-mute)}\n"
  +".egg-cube .cube-mm .mm-n{top:-30px;transform:translate(-50%,-100%)}\n"
  +".egg-cube .cube-mm .mm-s{top:30px}\n"
  +".egg-cube .cube-mm .mm-w{top:0;transform:translate(calc(-100% - var(--mmx,34px)),-50%)}\n"
  +".egg-cube .cube-mm .mm-e{top:0;transform:translate(var(--mmx,34px),-50%)}\n"
  +".egg-cube .cube-mm .mm-sw{top:34px;transform:translate(calc(-100% - 24px),0)}\n"
  +".egg-cube .cube-mm .mm-ne{top:-38px;transform:translate(54px,-100%)}\n"
  +".egg-cube .cube-mm .mm-se{top:38px;transform:translate(54px,0)}\n"
  +"@media (max-width:640px){.egg-cube .cube-left{width:min(253px,calc(100vw - 24px));max-height:52vh}\n"
  +".egg-cube .cube-ol .ol-list{max-height:16vh}\n"
  +".egg-cube .cube-gal .gl-list{max-height:14vh}\n"
  +".egg-cube .gl-preview{width:150px;height:150px}\n"
  +".egg-cube .cube-nav.corner{width:72px;height:72px}}\n"
  +"@media (pointer:coarse){.egg-cube button{padding:9px 12px}}\n"
  +"/* no sideways scrolling (20.10.2026): bars never scroll; what does not fit goes into the More menu */\n"
  +".egg-cube .cube-head,.egg-cube .cube-bar,.egg-cube .cube-shelf{overflow-x:hidden!important;touch-action:manipulation!important}\n"
  +".egg-cube .cb-ovf{flex:none;min-width:36px;font-weight:800;font-size:1.1rem;line-height:1;letter-spacing:.04em}\n"
  +".egg-cube .fit-empty{display:none!important}\n"
  +".egg-cube .fit-empty+.cb-sep{display:none!important}\n"
  +".egg-cube .cb-ovf-menu{position:fixed!important;z-index:80;display:flex;flex-wrap:wrap;align-items:center;gap:6px;width:max-content;max-width:min(92vw,440px);padding:8px;border-radius:12px;box-shadow:0 12px 32px rgba(0,0,0,.35)}\n"
  +".egg-cube .cb-ovf-menu[hidden]{display:none!important}\n"
  +".egg-cube .cb-ovf-menu>*{flex:none}\n"
  +".egg-cube.compact .tl-row2{overflow-x:visible!important}.egg-cube.compact .tl-row2>*{flex-shrink:1;min-width:0}\n"
  +"/* touch (Jakob, 19.10.2026): the small space buttons are taller, and the tiny corner buttons get a larger invisible tap area */\n"
  +"@media (pointer:coarse){.egg-cube .ch-space button{min-height:30px}.egg-cube .pn-min::after,.egg-cube .wm-pop::after,.egg-cube .tl-auto::after{content:\"\";position:absolute;inset:-7px}}\n"
  +"@media print{.egg-cube{display:none!important}}\n"
  +".egg-cube .sw-place{display:flex!important;align-items:center;justify-content:center!important;text-align:center}"; document.head.appendChild(st); })();

/* Default Cube (Jakob, 17.10.2026; third version, a small modeling scene): five clicks on empty space open it. Objects: cube, sphere, cylinder, cone, torus, plane, disk;
   Object Mode moves a whole object, Multi mode moves vertices, edges and faces (Shift + drag on a face extrudes it); right-drag opens a marking menu to switch modes.
   Outliner with visibility, rename and duplicate; S sets a key for the selected object, a timeline with a play button plays the keys back. Undo, Redo, Save (kept in this browser).
   WebGL with a depth buffer; full-screen canvases that let every click through except on the models. Camera: turntable switch, view cube, Alt + mouse like Maya, F frames the selection. */
(function(){ var E=window.sbhEgg; if(!E) return;
  var root=document.documentElement, cnt=0, last=0, KEY="sbh-cube", FRAMES=120, FPS=24;
  E.cubeIsOpen=function(){ return !!wrap; };   /* the empty-space test and the five-click trigger live in the page loader (18.10.2026) */
  function empty(e){ return E.emptySpot?E.emptySpot(e):false; }   /* the page's test, for onDown */

  /* ---- the scene: objects with vertices V, polygons F (counter-clockwise from outside), keys per frame; a selection, a mode and a frame ---- */
  var S=null, ry=.6, rx=.42, D=6, pan=[0,0,0], undo=[], redo=[], nextId=1;
  function obj(name,V,F){ return {id:nextId++,name:name,G:V,V:V.map(function(v){ return v.slice(); }),F:F,vis:true,T:{t:[0,0,0],r:[0,0,0],s:[1,1,1],p:boxC(V)},K:{},par:null}; }   /* the shape starts in the world; the pivot sits in its middle */
  /* primitives with inputs, like Maya's construction history (Jakob, 17.10.2026): every new shape keeps its type and inputs in o.prim; the Inputs panel rebuilds it */
  var PDEF={cube:{w:1,h:1,d:1,sw:1,sh:1,sd:1},sphere:{r:1,sa:14,sh:8},cylinder:{r:1,h:2,sa:16,sh:1},cone:{r:1,h:2,sa:16,sh:1},torus:{r:1,sr:.4,sa:18,sh:10},plane:{w:1,h:1,sw:4,sh:4},disk:{r:1.2,sa:20}};
  var PFIELDS={cube:[["w","Width"],["h","Height"],["d","Depth"],["sw","Subdivisions Width",1,30],["sh","Subdivisions Height",1,30],["sd","Subdivisions Depth",1,30]],
    sphere:[["r","Radius"],["sa","Subdivisions Axis",3,64],["sh","Subdivisions Height",2,64]],
    cylinder:[["r","Radius"],["h","Height"],["sa","Subdivisions Axis",3,64],["sh","Subdivisions Height",1,40]],
    cone:[["r","Radius"],["h","Height"],["sa","Subdivisions Axis",3,64],["sh","Subdivisions Height",1,40]],
    torus:[["r","Radius"],["sr","Section Radius"],["sa","Subdivisions Axis",3,64],["sh","Subdivisions Height",3,48]],
    plane:[["w","Width"],["h","Height"],["sw","Subdivisions Width",1,40],["sh","Subdivisions Height",1,40]],
    disk:[["r","Radius"],["sa","Subdivisions",3,64]]};
  var PNODE={cube:"polyCube",sphere:"polySphere",cylinder:"polyCylinder",cone:"polyCone",torus:"polyTorus",plane:"polyPlane",disk:"polyDisk"};
  function prm(kind,p){ var d=PDEF[kind], o={}; Object.keys(d).forEach(function(k){ o[k]=p&&p[k]!=null?p[k]:d[k]; }); return o; }
  var PRIM={
    cube:function(p){ p=prm("cube",p); var L={x:p.w,y:p.h,z:p.d}, N={x:p.sw,y:p.sh,z:p.sd}, AI={x:0,y:1,z:2}, V=[], F=[], idx={}, w=p.w/2, h=p.h/2, d=p.d/2;
      function vid(q){ var k=q.map(function(x){ return x.toFixed(5); }).join(","); if(idx[k]==null){ idx[k]=V.length; V.push(q); } return idx[k]; }
      [[[w,-h,-d],"y","z"],[[-w,-h,-d],"z","y"],[[-w,h,-d],"z","x"],[[-w,-h,-d],"x","z"],[[-w,-h,d],"x","y"],[[-w,-h,-d],"y","x"]].forEach(function(fc){   /* u x v points out of the box, so each quad is counter-clockwise from outside */
        var u=fc[1], v=fc[2], nu=N[u], nv=N[v], g=[], ii, jj; for(ii=0;ii<=nu;ii++){ g.push([]); for(jj=0;jj<=nv;jj++){ var q=fc[0].slice(); q[AI[u]]+=L[u]*ii/nu; q[AI[v]]+=L[v]*jj/nv; g[ii].push(vid(q)); } }
        for(ii=0;ii<nu;ii++) for(jj=0;jj<nv;jj++) F.push([g[ii][jj],g[ii+1][jj],g[ii+1][jj+1],g[ii][jj+1]]); }); return {V:V,F:F}; },
    sphere:function(p){ p=prm("sphere",p); var V=[],F=[],n=p.sa,m=p.sh,r=p.r,i,j; V.push([0,r,0]); for(i=1;i<m;i++){ var ph=Math.PI*i/m; for(j=0;j<n;j++){ var th=2*Math.PI*j/n; V.push([r*Math.sin(ph)*Math.cos(th),r*Math.cos(ph),-r*Math.sin(ph)*Math.sin(th)]); } } V.push([0,-r,0]); var bot=V.length-1;
      for(j=0;j<n;j++) F.push([0,1+j,1+(j+1)%n]); for(i=0;i<m-2;i++) for(j=0;j<n;j++){ var a=1+i*n+j,b=1+i*n+(j+1)%n; F.push([a,a+n,b+n,b]); } for(j=0;j<n;j++){ var a2=1+(m-2)*n+j,b2=1+(m-2)*n+(j+1)%n; F.push([a2,bot,b2]); } return {V:V,F:F}; },
    cylinder:function(p){ p=prm("cylinder",p); var V=[],F=[],n=p.sa,m=p.sh,k,j; for(k=0;k<=m;k++){ var y=-p.h/2+p.h*k/m; for(j=0;j<n;j++){ var th=2*Math.PI*j/n; V.push([p.r*Math.cos(th),y,-p.r*Math.sin(th)]); } }
      for(k=0;k<m;k++) for(j=0;j<n;j++) F.push([k*n+j,k*n+(j+1)%n,(k+1)*n+(j+1)%n,(k+1)*n+j]); var top=[],bo=[]; for(j=0;j<n;j++){ top.push(m*n+j); bo.push(n-1-j); } F.push(top); F.push(bo); return {V:V,F:F}; },
    cone:function(p){ p=prm("cone",p); var V=[],F=[],n=p.sa,m=p.sh,k,j; for(k=0;k<m;k++){ var y=-p.h/2+p.h*k/m, rr=p.r*(1-k/m); for(j=0;j<n;j++){ var th=2*Math.PI*j/n; V.push([rr*Math.cos(th),y,-rr*Math.sin(th)]); } } var ap=V.length; V.push([0,p.h/2,0]);
      for(k=0;k<m-1;k++) for(j=0;j<n;j++) F.push([k*n+j,k*n+(j+1)%n,(k+1)*n+(j+1)%n,(k+1)*n+j]); for(j=0;j<n;j++) F.push([(m-1)*n+j,(m-1)*n+(j+1)%n,ap]); var bo=[]; for(j=0;j<n;j++) bo.push(n-1-j); F.push(bo); return {V:V,F:F}; },
    torus:function(p){ p=prm("torus",p); var V=[],F=[],n=p.sa,m=p.sh,R0=p.r,r0=p.sr,i,j; for(i=0;i<n;i++){ var u=2*Math.PI*i/n; for(j=0;j<m;j++){ var v=2*Math.PI*j/m; V.push([(R0+r0*Math.cos(v))*Math.cos(u),r0*Math.sin(v),-(R0+r0*Math.cos(v))*Math.sin(u)]); } }
      for(i=0;i<n;i++) for(j=0;j<m;j++){ var a=i*m+j,b=((i+1)%n)*m+j,c=((i+1)%n)*m+(j+1)%m,d=i*m+(j+1)%m; F.push([a,b,c,d]); } return {V:V,F:F}; },
    plane:function(p){ p=prm("plane",p); var V=[],F=[],nx=p.sw,nz=p.sh,i,j; for(i=0;i<=nz;i++) for(j=0;j<=nx;j++) V.push([-p.w/2+p.w*j/nx,0,-p.h/2+p.h*i/nz]); for(i=0;i<nz;i++) for(j=0;j<nx;j++){ var a=i*(nx+1)+j; F.push([a,a+nx+1,a+nx+2,a+1]); } return {V:V,F:F}; },   /* counter-clockwise seen from above: faces up */
    disk:function(p){ p=prm("disk",p); var V=[],F=[],n=p.sa,j; for(j=0;j<n;j++){ var th=2*Math.PI*j/n; V.push([p.r*Math.cos(th),0,-p.r*Math.sin(th)]); } V.push([0,0,0]); for(j=0;j<n;j++) F.push([j,(j+1)%n,n]); return {V:V,F:F}; } };
  var PRIM_NAMES={cube:"Cube",sphere:"Sphere",cylinder:"Cylinder",cone:"Cone",torus:"Torus",plane:"Plane",disk:"Disk"}, MNAME={cube:"pCube",sphere:"pSphere",cylinder:"pCylinder",cone:"pCone",torus:"pTorus",plane:"pPlane",disk:"pDisc"};   /* object names like Maya's: pCube1, pSphere1 (Jakob, 18.10.2026) */
  function fresh(){ var p=PRIM.cube(); nextId=1; var o=obj("pCube1",p.V,p.F); o.prim={t:"cube",p:prm("cube"),n:1}; FRAMES=120; return {objs:[o],sel:1,mode:"object",frame:1,frames:120}; }
  function snap(){ return JSON.stringify(S); } function load(j){ gdirty=true; gsel=[]; S=JSON.parse(j); if(S._sel){ osel=S._sel.o||[]; csel=S._sel.c||{}; if(S._sel.s!=null) S.sel=S._sel.s; delete S._sel; } if(S.mode==="multi"||S.mode==="object"||S.mode==="vert"||S.mode==="edge"||S.mode==="face"){} else S.mode="multi"; setTimeout(function(){ if(S) { cleanSel(); } },0); if(S.V&&S.F){ S={objs:[{id:1,name:"pCube1",V:S.V,F:S.F,vis:true,keys:{}}],sel:1,mode:"multi",frame:1}; } S.objs.forEach(function(o){ if(o.vis==null) o.vis=true; migrate(o); }); refreshAll(); nextId=S.objs.reduce(function(m,o){ return Math.max(m,o.id+1); },1); if(!S.mode) S.mode="multi"; if(!S.frame) S.frame=1; S.objs.forEach(function(o){ if(o.name==="Default Cube"&&!S.objs.some(function(x){ return x.name==="pCube1"; })) o.name="pCube1"; });   /* the first cube is pCube1, also in scenes saved before (18.10.2026) */ FRAMES=Math.max(2,Math.min(2000,+S.frames||120)); S.frames=FRAMES; }
  function saved(){ try{ var j=localStorage.getItem(KEY); if(j){ var m=JSON.parse(j); if(m&&((m.objs&&m.objs.length)||(m.V&&m.F))) return j; } }catch(e){} return null; }
  function sel(){ for(var i=0;i<S.objs.length;i++) if(S.objs[i].id===S.sel) return S.objs[i]; return null; }
  /* the selection is part of undo, like in Maya (Jakob, 18.10.2026): every undo step keeps it, and a change of only the selection is a step of its own */
  function selState(){ return {o:osel.slice(),c:JSON.parse(JSON.stringify(csel)),s:S.sel}; }
  function snapU(sel){ S._sel=sel||selState(); var j=JSON.stringify(S); delete S._sel; return j; }
  var selLast=null, selMarked=false;
  function selSig(st){ return JSON.stringify(st||selState()); }
  function selSync(){ selLast=selState(); selMarked=false; }
  function selCommit(){ if(!wrap||!S) return; var now=selState(); if(!selLast){ selLast=now; return; } if(selSig(now)===selSig(selLast)){ selMarked=false; return; }
    if(!selMarked){ undo.push(snapU(selLast)); if(undo.length>80) undo.shift(); redo=[]; paintBar(); }   /* only the selection changed: the state before it becomes a step */
    selLast=now; selMarked=false; }
  function mark(){ undo.push(snapU()); if(undo.length>80) undo.shift(); redo=[]; gdirty=true; autoDirty=true; autoT=performance.now(); selMarked=true; }
  function uniqueName(base){ if(!S.objs.some(function(o){ return o.name===base; })) return base; var stem=String(base).replace(/\d+$/,""), hi=0, re=new RegExp("^"+stem.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(\\d+)$");
    S.objs.forEach(function(o){ var m=re.exec(o.name); if(m) hi=Math.max(hi,+m[1]); }); return stem+(hi+1); }   /* taken: the next number, like Maya (pCube1, pCube2) */
  function add(kind){ mark(); var p=PRIM[kind](), o=obj(uniqueName(MNAME[kind]+"1"),p.V,p.F); o.prim={t:kind,p:prm(kind),n:S.objs.filter(function(x){ return x.prim&&x.prim.t===kind; }).length+1}; var k=S.objs.length, ox=2.8*Math.ceil(k/2)*(k%2?1:-1); o.T.t=[ox,0,0]; worldV(o);   /* new shapes land beside the others, alternating right and left */ S.objs.push(o); S.sel=o.id; if(S.mode==="object") osel=[o.id]; hover=null; snd(500); paintAll(); }   /* the new shape is the selection, like Maya */
  /* copies exactly in place, for Shift + drag with the move tool; one undo step with the move that follows */
  function dupInPlace(){ var list=osel.map(objById).filter(function(o){ return o&&!o.grp; }); if(!list.length) return false; mark(); var made=[];
    list.forEach(function(o){ var c=obj(uniqueName(o.name),o.G.map(function(v){ return v.slice(); }),o.F.map(function(f2){ return f2.slice(); })); c.T=JSON.parse(JSON.stringify(trOf(o))); c.par=o.par; worldV(c);
      if(o.prim) c.prim=JSON.parse(JSON.stringify(o.prim)); if(o.mat) c.mat=o.mat; if(o.fm) c.fm=JSON.parse(JSON.stringify(o.fm)); if(o.pick2d) c.pick2d=o.pick2d; S.objs.splice(S.objs.indexOf(o)+1,0,c); made.push(c.id); });
    S.sel=made[made.length-1]; osel=made.slice(); snd(520); toast(made.length===1?"Duplicated: "+objById(made[0]).name+".":made.length+" objects duplicated."); return true; }
  function duplicate(){ var list=(typeof osel!=="undefined"&&S.mode==="object"&&osel.length)?osel.map(objById).filter(Boolean):[sel()].filter(Boolean); list=list.filter(function(o){ return !o.grp; }); if(!list.length) return; mark(); var made=[];
    list.forEach(function(o){ var c=obj(uniqueName(o.name),o.G.map(function(v){ return v.slice(); }),o.F.map(function(f){ return f.slice(); })); c.T=JSON.parse(JSON.stringify(trOf(o))); c.par=o.par;
      var dl=mVec(mInv(mParent(o)),[.8,0,-.8]); c.T.t=[c.T.t[0]+dl[0],c.T.t[1]+dl[1],c.T.t[2]+dl[2]]; worldV(c); if(o.prim) c.prim=JSON.parse(JSON.stringify(o.prim)); if(o.mat) c.mat=o.mat; if(o.fm) c.fm=JSON.parse(JSON.stringify(o.fm)); if(o.pick2d) c.pick2d=o.pick2d; S.objs.splice(S.objs.indexOf(o)+1,0,c); made.push(c.id); });
    S.sel=made[made.length-1]; osel=made.slice(); snd(520); paintAll(); }
  function removeSel(){ if(S.mode!=="object"&&Object.keys(csel).length){ mark(); var drop={}; Object.keys(csel).forEach(function(k){ var it=csel[k], o=objById(it.id); if(!o) return; (drop[it.id]=drop[it.id]||{});
        o.F.forEach(function(fc,fi){ if((it.t==="f"&&fi===it.i)||(it.t==="v"&&fc.indexOf(it.i)>=0)||(it.t==="e"&&fc.indexOf(it.a)>=0&&fc.indexOf(it.b)>=0)) drop[it.id][fi]=1; }); });
      Object.keys(drop).forEach(function(id){ var o=objById(+id); o.F=o.F.filter(function(fc,fi){ return !drop[id][fi]; }); if(o.prim) o.prim.edited=true; }); csel={}; hover=null; snd(260); toast("Faces deleted."); paintAll(); return; }   /* parts selected: delete their faces */
    var ids=S.mode==="object"&&osel.length?osel.slice():(sel()?[S.sel]:[]); if(!ids.length) return; mark(); var gone={};   /* deleting a parent deletes what is below it, like Maya */
    ids.forEach(function(id){ var o=objById(id); if(!o) return; gone[o.id]=1; desc(o).forEach(function(c){ gone[c.id]=1; }); }); S.objs=S.objs.filter(function(o){ return !gone[o.id]; }); osel=[]; S.sel=S.objs.length?S.objs[0].id:null; hover=null; snd(260); paintAll(); }

  /* ---- maths ---- */
  function rot(p){ var cy=Math.cos(ry), sy=Math.sin(ry), cx=Math.cos(rx), sx=Math.sin(rx); var x=p[0]*cy+p[2]*sy, z=-p[0]*sy+p[2]*cy, y=p[1]; return [x, y*cx-z*sx, y*sx+z*cx]; }
  function unrot(d){ var cy=Math.cos(ry), sy=Math.sin(ry), cx=Math.cos(rx), sx=Math.sin(rx); var y=d[1]*cx+d[2]*sx, z=-d[1]*sx+d[2]*cx, x=d[0]; return [x*cy-z*sy, y, x*sy+z*cy]; }
  function sub(a,b){ return [a[0]-b[0],a[1]-b[1],a[2]-b[2]]; } function cross(a,b){ return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]; } function dot(a,b){ return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]; }
  function norm(a){ var l=Math.hypot(a[0],a[1],a[2])||1; return [a[0]/l,a[1]/l,a[2]/l]; }
  var LIGHT=norm([-.45,.65,.65]);
  /* Lit (7), like Maya's lit mode (Jakob, 18.10.2026): three lights fixed in the scene (a key light from above, a softer fill from the side, a rim light from behind),
     a highlight from the key light, and smooth shading where faces meet at less than 40 degrees, so round shapes look round and edges stay sharp */
  var LITS=[[-.5,.85,.55,.78],[.85,.3,.4,.3],[.2,.5,-1,.34]], litL=null, litN={};
  function litStart(){ var c0=camP([0,0,0]); litL=LITS.map(function(d){ var w=norm([d[0],d[1],d[2]]), p=camP(w); return {d:norm([p[0]-c0[0],p[1]-c0[1],p[2]-c0[2]]),k:d[3]}; }); litN={}; }
  function litNormals(o,oi,C){ var ln=litN[oi]; if(ln) return ln; var fn=o.F.map(function(fc){ return faceN(C,fc); }), adj=[]; o.F.forEach(function(fc,fi){ fc.forEach(function(k){ (adj[k]=adj[k]||[]).push(fi); }); });
    return (litN[oi]={fn:fn,adj:adj}); }
  function litFace(o,oi,fi,fc,C,mm,mf,objHov,oSel){ var ln=litNormals(o,oi,C), nf=ln.fn[fi], p0=C[fc[0]], front=dot(nf,[-p0[0],-p0[1],D-p0[2]])>=0, out=[0,0,0,1];
    out.corners=fc.map(function(k){ var n=[nf[0],nf[1],nf[2]]; (ln.adj[k]||[]).forEach(function(f2){ if(f2===fi) return; var m2=ln.fn[f2]; if(dot(m2,nf)>.766){ n[0]+=m2[0]; n[1]+=m2[1]; n[2]+=m2[2]; } }); n=norm(n); if(!front) n=[-n[0],-n[1],-n[2]];
      var c, sp=0; if(mf.glow) c=.745; else { var p=C[k], v=norm([-p[0],-p[1],D-p[2]]), I=.2; litL.forEach(function(L,i){ var d=Math.max(0,dot(n,L.d)); I+=L.k*d; if(i===0&&d>0){ var h=norm([L.d[0]+v[0],L.d[1]+v[1],L.d[2]+v[2]]); sp=Math.pow(Math.max(0,dot(n,h)),40)*.42; } }); c=Math.min(1,.1+.72*I)*(front?1:.82); }
      var r=Math.min(1,c*mm[0]+sp), g=Math.min(1,c*mm[1]+sp), b=Math.min(1,c*mm[2]+.015+sp);
      if(objHov&&!oSel) return [Math.min(1,r+.09),Math.min(1,g+.08),Math.max(0,b+.01),1];
      if(oSel){ var hb=objHov?.05:0; return [Math.min(1,r*.82+.1+hb),Math.min(1,g*.86+.12+hb),Math.min(1,b*.9+.22+hb),1]; }
      return [r,g,b,1]; });
    return out; }
  /* display mode like Maya's viewport: 4 wireframe, 5 unshaded, 6 shaded (Jakob, 17.10.2026; remembered) */
  var dmode="shade"; try{ dmode=localStorage.getItem("sbh-cube-shade")||"shade"; }catch(e){}
  function inkRGB(){ var t=document.createElement("i"); t.style.color="var(--ink)"; document.body.appendChild(t); var m=getComputedStyle(t).color.match(/[\d.]+/g)||[200,200,200]; t.remove(); return [m[0]/255,m[1]/255,m[2]/255,1]; }
  /* tumbling turns around the point in the middle of the screen (where F framed), not around the world center */
  function orbit(fn){ var C=unrot([-pan[0],-pan[1],-pan[2]]); fn(); var rc=rot(C); pan=[-rc[0],-rc[1],-rc[2]]; }
  function camO(o){ return o.V.map(function(v){ var c=rot(v); return [c[0]+pan[0],c[1]+pan[1],c[2]+pan[2]]; }); }
  function scr(c){ var w=D-c[2]; return [W/2+f*c[0]/w, H/2-f*c[1]/w, w]; }
  function faceN(C,fc){ var n=[0,0,0]; for(var i=0;i<fc.length;i++){ var a=C[fc[i]], b=C[fc[(i+1)%fc.length]]; n[0]+=(a[1]-b[1])*(a[2]+b[2]); n[1]+=(a[2]-b[2])*(a[0]+b[0]); n[2]+=(a[0]-b[0])*(a[1]+b[1]); } return norm(n); }   /* Newell: fine for any polygon */

  /* ---- WebGL: faces (flat shade), lines, points, and an id pass for picking ---- */
  var wrap=null, cv=null, ov=null, gl=null, g2=null, prog=null, buf=null, fb=null, W=0, H=0, R=1, f=0, raf=0, hover=null, drag=null, still=false, lastT=0, aP, aC, uS, uZ;
  var VS="attribute vec3 p;attribute vec4 c;uniform vec3 s;uniform float z;varying vec4 vc;void main(){float w=s.z-p.z;gl_Position=vec4(s.x*p.x,s.y*p.y,((w-1.0)/399.0*2.0-1.0)*w,w);gl_PointSize=z;vc=c;}";
  var FS="precision mediump float;varying vec4 vc;void main(){gl_FragColor=vc;}";
  function setup(){ gl=cv.getContext("webgl",{antialias:true,alpha:true,premultipliedAlpha:true}); if(!gl) return false;
    function sh(t,src){ var o=gl.createShader(t); gl.shaderSource(o,src); gl.compileShader(o); return o; }
    prog=gl.createProgram(); gl.attachShader(prog,sh(gl.VERTEX_SHADER,VS)); gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,FS)); gl.linkProgram(prog); if(!gl.getProgramParameter(prog,gl.LINK_STATUS)) return false;
    gl.useProgram(prog); aP=gl.getAttribLocation(prog,"p"); aC=gl.getAttribLocation(prog,"c"); uS=gl.getUniformLocation(prog,"s"); uZ=gl.getUniformLocation(prog,"z"); buf=gl.createBuffer(); setupTex(); return true; }
  function size(){ R=Math.min(2,devicePixelRatio||1); W=Math.round(innerWidth*R); H=Math.round(innerHeight*R); cv.width=ov.width=W; cv.height=ov.height=H; f=(W/2)/Math.tan(27*Math.PI/180);   /* a 54 degree view across the width, like Maya's default 35 mm camera (Jakob, 17.10.2026: it was far too wide, about 110 degrees) */
    if(gl){ gl.viewport(0,0,W,H); if(fb){ gl.deleteFramebuffer(fb.f); gl.deleteTexture(fb.t); gl.deleteRenderbuffer(fb.d); }
      var t=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,t); gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,W,H,0,gl.RGBA,gl.UNSIGNED_BYTE,null); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
      var d=gl.createRenderbuffer(); gl.bindRenderbuffer(gl.RENDERBUFFER,d); gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,W,H);
      var fr=gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER,fr); gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,t,0); gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,d); gl.bindFramebuffer(gl.FRAMEBUFFER,null); fb={f:fr,t:t,d:d}; } placeAll(); }
  /* ---- materials and textures (Jakob, 18.10.2026), like Maya: lambert1 for everything, more materials with a color, a pattern or an image,
     projected onto the object in its own space (so the texture sticks when it moves), assigned to objects or to single faces ---- */
  var MAT_DEF={id:1,name:"lambert1",col:"#cccccc",pat:"none",col2:"#3a3f4b",scale:2,rot:0,proj:"box",glow:false,img:null};
  var PATS=[["none","Plain Color"],["checker","Checker"],["stripes","Stripes"],["dots","Dots"],["bricks","Bricks"],["noise","Noise"],["gradient","Gradient"],["uvgrid","UV Checker"],["image","Image"]];
  var PROJS=[["face","Per face"],["box","Box"],["px","Planar X"],["py","Planar Y"],["pz","Planar Z"],["cyl","Cylinder"],["sph","Sphere"]];
  var GDIRS=[["y","Bottom to top"],["x","Left to right"],["z","Back to front"]];
  var matEdit=1, texCache={}, matsOpen=true; try{ matsOpen=localStorage.getItem("sbh-cube-mats")!=="0"; }catch(e){}
  function mats(){ if(!S.mats||!S.mats.length) S.mats=[JSON.parse(JSON.stringify(MAT_DEF))]; return S.mats; }
  function matById(id){ var m=mats(); for(var i=0;i<m.length;i++) if(m[i].id===id) return m[i]; return m[0]; }
  function faceMat(o,fi){ return matById(o.fm&&o.fm[fi]!=null?o.fm[fi]:(o.mat||1)); }
  function hexRGB(h){ h=String(h||"#cccccc").replace("#",""); return [parseInt(h.substr(0,2),16)/255,parseInt(h.substr(2,2),16)/255,parseInt(h.substr(4,2),16)/255]; }
  function textured(m){ return m.pat&&m.pat!=="none"&&(m.pat!=="image"||m.img); }
  /* the color a face's shading is multiplied with: lambert1's gray keeps the old look; a textured face lets the texture bring the color */
  function matMul(o,fi){ var m=faceMat(o,fi); if(textured(m)) return [1.3,1.3,1.3]; var c=hexRGB(m.col); return [c[0]/.8,c[1]/.8,c[2]/.8]; }
  /* a pattern on a 256 x 256 canvas: one repeat of the texture */
  function patCanvas(m,done){ var N=256, cv2=document.createElement("canvas"); cv2.width=cv2.height=N; var g=cv2.getContext("2d"), A=m.col, B=m.col2||"#3a3f4b", x, y;
    g.fillStyle=A; g.fillRect(0,0,N,N); g.fillStyle=B;
    if(m.pat==="checker"){ for(y=0;y<2;y++) for(x=0;x<2;x++) if((x+y)%2) g.fillRect(x*N/2,y*N/2,N/2,N/2); }
    else if(m.pat==="stripes"){ for(x=0;x<4;x++) g.fillRect(x*N/4,0,N/8,N); }
    else if(m.pat==="dots"){ for(y=0;y<2;y++) for(x=0;x<2;x++){ g.beginPath(); g.arc((x+.5)*N/2,(y+.5)*N/2,N/7,0,7); g.fill(); } }
    else if(m.pat==="bricks"){ g.fillStyle=B; g.fillRect(0,0,N,N); g.fillStyle=A; var bh=N/4; for(y=0;y<4;y++){ var off=y%2?N/4:0; for(x=-1;x<3;x++) g.fillRect(off+x*N/2+3,y*bh+3,N/2-6,bh-6); } }
    else if(m.pat==="noise"){ var id=g.getImageData(0,0,N,N), ca=hexRGB(A), cb=hexRGB(B), G2=16, rnd=[], seed=m.id*977+3; for(var i=0;i<G2*G2;i++){ seed=(seed*16807)%2147483647; rnd.push(seed/2147483647); }
      var at=function(ix,iy){ return rnd[((iy%G2+G2)%G2)*G2+((ix%G2+G2)%G2)]; };
      for(y=0;y<N;y++) for(x=0;x<N;x++){ var fx=x/N*G2, fy=y/N*G2, ix=Math.floor(fx), iy=Math.floor(fy), tx=fx-ix, ty=fy-iy; tx=tx*tx*(3-2*tx); ty=ty*ty*(3-2*ty);
        var v=(at(ix,iy)*(1-tx)+at(ix+1,iy)*tx)*(1-ty)+(at(ix,iy+1)*(1-tx)+at(ix+1,iy+1)*tx)*ty, o4=(y*N+x)*4; for(var k=0;k<3;k++) id.data[o4+k]=Math.round((ca[k]*(1-v)+cb[k]*v)*255); }
      g.putImageData(id,0,0); }
    else if(m.pat==="uvgrid"){ var n4=4, cw=N/n4; for(y=0;y<n4;y++) for(x=0;x<n4;x++){ g.fillStyle="hsl("+(x*90+15)+",62%,"+(68-y*11)+"%)"; g.fillRect(x*cw,y*cw,cw,cw); g.fillStyle=(x+y)%2?"rgba(255,255,255,.28)":"rgba(0,0,0,.12)"; g.fillRect(x*cw+cw/2,y*cw,cw/2,cw/2); g.fillRect(x*cw,y*cw+cw/2,cw/2,cw/2);
        g.fillStyle="#1b1f2a"; g.font="bold "+Math.round(cw*.34)+"px ui-monospace,Menlo,Consolas,monospace"; g.textAlign="center"; g.textBaseline="middle"; g.fillText(String.fromCharCode(65+x)+(n4-y),x*cw+cw/2,y*cw+cw/2); }
      g.strokeStyle="#1b1f2a"; g.lineWidth=2; g.strokeRect(1,1,N-2,N-2); g.beginPath(); g.moveTo(N*.08,N*.2); g.lineTo(N*.08,N*.06); g.lineTo(N*.03,N*.11); g.moveTo(N*.08,N*.06); g.lineTo(N*.13,N*.11); g.stroke(); }   /* UV checker (18.10.2026): letters and numbers show stretching and turning, the arrow shows up */
    else if(m.pat==="gradient"){ var gr=g.createLinearGradient(0,0,0,N); gr.addColorStop(0,A); gr.addColorStop(1,B); g.fillStyle=gr; g.fillRect(0,0,N,N); }
    else if(m.pat==="image"&&m.img){ var im=new Image(); im.onload=function(){ g.drawImage(im,0,0,N,N); if(done) done(cv2); }; im.src=m.img; return cv2; }
    if(done) done(cv2); return cv2; }
  function matSig(m){ return [m.pat,m.col,m.col2,m.img?m.img.length+m.img.slice(-40):""].join("|"); }
  /* the GL texture of a material, made again when the pattern changes; an image arrives a moment later */
  function matTex(m){ var c=texCache[m.id], sig=matSig(m); if(c&&c.sig===sig) return c.ready?c.t:null; if(c&&c.t) gl.deleteTexture(c.t);
    var e={sig:sig,t:gl.createTexture(),ready:false}; texCache[m.id]=e;
    patCanvas(m,function(cv2){ if(texCache[m.id]!==e) return; gl.bindTexture(gl.TEXTURE_2D,e.t); gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,cv2); gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,m.pat==="gradient"?gl.CLAMP_TO_EDGE:gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR); e.ready=true; });
    return e.ready?e.t:null; }
  /* texture coordinates, projected in the object's own space: box picks the side a face looks at; cylinder and sphere wrap around Y */
  function faceUV(o,fc,m){ var G=o.G||o.V, P=fc.map(function(k){ return G[k]||[0,0,0]; }), n=faceN(P,fc.map(function(_,i){ return i; })), ax=m.proj, uv;
    if(m.pat==="gradient"){ var gd=m.gdir||"y", lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; G.forEach(function(v){ for(var i=0;i<3;i++){ lo[i]=Math.min(lo[i],v[i]); hi[i]=Math.max(hi[i],v[i]); } }); var ce=[(lo[0]+hi[0])/2,(lo[1]+hi[1])/2,(lo[2]+hi[2])/2], rr=Math.hypot(hi[0]-ce[0],hi[1]-ce[1],hi[2]-ce[2])||1, k3=gd==="x"?0:gd==="z"?2:1;
      return P.map(function(p){ var t=gd==="r"?Math.hypot(p[0]-ce[0],p[1]-ce[1],p[2]-ce[2])/rr:(p[k3]-lo[k3])/((hi[k3]-lo[k3])||1); return [.5,1-Math.max(0,Math.min(1,t))]; }); }   /* gradient directions (18.10.2026) */
    if(ax==="face"){ var up=Math.abs(n[1])>.9?[0,0,-1]:[0,1,0], uu=[up[1]*n[2]-up[2]*n[1],up[2]*n[0]-up[0]*n[2],up[0]*n[1]-up[1]*n[0]], ul=Math.hypot(uu[0],uu[1],uu[2])||1; uu=[uu[0]/ul,uu[1]/ul,uu[2]/ul]; var vv=[n[1]*uu[2]-n[2]*uu[1],n[2]*uu[0]-n[0]*uu[2],n[0]*uu[1]-n[1]*uu[0]];
      var raw=P.map(function(p){ return [p[0]*uu[0]+p[1]*uu[1]+p[2]*uu[2],p[0]*vv[0]+p[1]*vv[1]+p[2]*vv[2]]; }), mu=Math.min.apply(null,raw.map(function(q){ return q[0]; })), xu=Math.max.apply(null,raw.map(function(q){ return q[0]; })), mv=Math.min.apply(null,raw.map(function(q){ return q[1]; })), xv=Math.max.apply(null,raw.map(function(q){ return q[1]; }));
      uv=raw.map(function(q){ return [(q[0]-mu)/((xu-mu)||1),(q[1]-mv)/((xv-mv)||1)]; }); }   /* Per face (Auto UV): the whole texture once on every face, upright */
    else if(ax==="box"){ var an=[Math.abs(n[0]),Math.abs(n[1]),Math.abs(n[2])]; ax=an[0]>=an[1]&&an[0]>=an[2]?"px":an[1]>=an[2]?"py":"pz"; }
    if(ax==="face"){} else if(ax==="px") uv=P.map(function(p){ return [p[2]*(n[0]>=0?-1:1),p[1]]; }); else if(ax==="py") uv=P.map(function(p){ return [p[0],-p[2]*(n[1]>=0?1:-1)]; }); else if(ax==="pz") uv=P.map(function(p){ return [p[0]*(n[2]>=0?1:-1),p[1]]; });
    else { var bc=boxC(G); uv=P.map(function(p){ var x=p[0]-bc[0], y=p[1]-bc[1], z=p[2]-bc[2], u=Math.atan2(z,x)/(2*Math.PI)+.5; return [u*4,ax==="sph"?(1-Math.acos(Math.max(-1,Math.min(1,y/(Math.hypot(x,y,z)||1))))/Math.PI)*2:y]; });
      var us=uv.map(function(q){ return q[0]; }), mx=Math.max.apply(null,us), mn=Math.min.apply(null,us); if(mx-mn>2) uv.forEach(function(q){ if(q[0]<2) q[0]+=4; }); }   /* across the seam: no smear */
    var sc=m.scale||1, r=(m.rot||0)*Math.PI/180, cr=Math.cos(r), sr=Math.sin(r), ou=m.ou||0, ov=m.ov||0, pc=ax==="face"?.5:0;   /* per face turns around the middle of the face */
    return uv.map(function(q){ var u=(q[0]-pc)*sc, v=(q[1]-pc)*sc; return [u*cr-v*sr+pc+ou,1-(u*sr+v*cr+pc+ov)]; }); }   /* the texture counts its rows from the top: 1 - v keeps pictures upright (18.10.2026) */
  function boxBounds(G){ var lo=1e9, hi=-1e9; G.forEach(function(v){ lo=Math.min(lo,v[1]); hi=Math.max(hi,v[1]); }); return [lo,hi]; }
  /* the textured shader: the vertex color carries the light, the texture the color */
  var progT=null, aPT, aCT, aUT, uST, uTX, bufT;
  function setupTex(){ var VS2="attribute vec3 p;attribute vec4 c;attribute vec2 u;uniform vec3 s;varying vec4 vc;varying vec2 vu;void main(){float w=s.z-p.z;gl_Position=vec4(s.x*p.x,s.y*p.y,((w-1.0)/399.0*2.0-1.0)*w,w);vc=c;vu=u;}",
      FS2="precision mediump float;uniform sampler2D t;varying vec4 vc;varying vec2 vu;void main(){vec4 tx=texture2D(t,vu);gl_FragColor=vec4(vc.rgb*tx.rgb,vc.a);}";
    function sh(t,src){ var o=gl.createShader(t); gl.shaderSource(o,src); gl.compileShader(o); return o; }
    progT=gl.createProgram(); gl.attachShader(progT,sh(gl.VERTEX_SHADER,VS2)); gl.attachShader(progT,sh(gl.FRAGMENT_SHADER,FS2)); gl.linkProgram(progT); if(!gl.getProgramParameter(progT,gl.LINK_STATUS)){ progT=null; return; }
    aPT=gl.getAttribLocation(progT,"p"); aCT=gl.getAttribLocation(progT,"c"); aUT=gl.getAttribLocation(progT,"u"); uST=gl.getUniformLocation(progT,"s"); uTX=gl.getUniformLocation(progT,"t"); bufT=gl.createBuffer(); }
  function drawTex(groups){ if(!progT) return; var ids=Object.keys(groups); if(!ids.length) return; gl.useProgram(progT); gl.uniform3f(uST,2*f/W,2*f/H,D); gl.uniform1i(uTX,0); gl.activeTexture(gl.TEXTURE0);
    gl.disableVertexAttribArray(aP); gl.disableVertexAttribArray(aC);
    ids.forEach(function(id){ var g=groups[id]; if(!g.a.length) return; gl.bindTexture(gl.TEXTURE_2D,g.t); gl.bindBuffer(gl.ARRAY_BUFFER,bufT); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(g.a),gl.DYNAMIC_DRAW);
      gl.enableVertexAttribArray(aPT); gl.vertexAttribPointer(aPT,3,gl.FLOAT,false,36,0); gl.enableVertexAttribArray(aCT); gl.vertexAttribPointer(aCT,4,gl.FLOAT,false,36,12); gl.enableVertexAttribArray(aUT); gl.vertexAttribPointer(aUT,2,gl.FLOAT,false,36,28); gl.drawArrays(gl.TRIANGLES,0,g.a.length/9); });
    gl.disableVertexAttribArray(aPT); gl.disableVertexAttribArray(aCT); gl.disableVertexAttribArray(aUT); gl.useProgram(prog); }
  /* the faces, sorted: plain ones in one batch, textured ones per material; selected or hovered faces stay plain so they show */
  function trisM(color){ var plain=[], groups={}, g=0, Cs=S.objs.map(camO);
    S.objs.forEach(function(o,oi){ if(!o.vis) return; var C=Cs[oi]; o.F.forEach(function(fc,fi){ var col=color(oi,fi,fc,C,g++), m=faceMat(o,fi), hl=col[4];
      var t=(!hl&&textured(m))?matTex(m):null;
      if(t){ var gr=groups[m.id]||(groups[m.id]={t:t,a:[]}), uv=faceUV(o,fc,m); for(var k=1;k<fc.length-1;k++){ [0,k,k+1].forEach(function(j){ var p=C[fc[j]]; var cj=col.corners?col.corners[j]:col; gr.a.push(p[0],p[1],p[2],cj[0],cj[1],cj[2],cj[3],uv[j][0],uv[j][1]); }); } }
      else { var cc=function(j){ return col.corners?col.corners[j]:col; }; for(var k2=1;k2<fc.length-1;k2++){ push(plain,C[fc[0]],cc(0)); push(plain,C[fc[k2]],cc(k2)); push(plain,C[fc[k2+1]],cc(k2+1)); } } }); });
    return {plain:plain,groups:groups}; }
  /* ---- the Materials window ---- */
  var swCache={};
  function matSwatch(m,size){ var sig=matSig(m)+"|"+m.glow, sc0=swCache[m.id]; if(sc0&&sc0.sig===sig&&sc0.url) return sc0.url;   /* drawn once per look; an image is drawn when it has arrived */
    if(m.pat==="image"&&m.img&&!(sc0&&sc0.sig===sig)){ swCache[m.id]={sig:sig,url:null}; patCanvas(m,function(pc){ if(!swCache[m.id]||swCache[m.id].sig!==sig) return; swCache[m.id].url=ballOf(m,pc,size); var im=wrap&&wrap.querySelector('.mt-sw[data-id="'+m.id+'"] img'); if(im) im.src=swCache[m.id].url; }); return ballOf(m,null,size); }
    if(sc0&&sc0.sig===sig&&!sc0.url) return ballOf(m,null,size);
    var url=ballOf(m,textured(m)&&m.pat!=="image"?patCanvas(m):null,size); swCache[m.id]={sig:sig,url:url}; return url; }
  function ballOf(m,pc,size){ var N=size||56, c2=document.createElement("canvas"); c2.width=c2.height=N; var g=c2.getContext("2d"), r=N/2-2;
    g.save(); g.beginPath(); g.arc(N/2,N/2,r,0,7); g.clip(); g.fillStyle=m.col; g.fillRect(0,0,N,N); if(pc) g.drawImage(pc,0,0,N,N);
    if(!m.glow){ var gr=g.createRadialGradient(N*.36,N*.32,N*.04,N/2,N/2,r); gr.addColorStop(0,"rgba(255,255,255,.55)"); gr.addColorStop(.35,"rgba(255,255,255,0)"); gr.addColorStop(1,"rgba(0,0,0,.55)"); g.fillStyle=gr; g.fillRect(0,0,N,N); }
    g.restore(); return c2.toDataURL(); }   /* a little ball, lit from the upper left, like Maya's swatches */
  function matUsers(id){ return S.objs.filter(function(o){ return !o.grp&&((o.mat||1)===id||(o.fm&&Object.keys(o.fm).some(function(k){ return o.fm[k]===id; }))); }); }
  function paintMats(gridOnly){ if(!wrap) return; var p=q(".cube-mats"); if(!p) return; p.hidden=!matsOpen; var bt=q(".cb-mats"); if(bt) bt.setAttribute("aria-pressed",matsOpen?"true":"false"); if(!matsOpen) return;
    var ml=mats(), m=matById(matEdit); matEdit=m.id; var o=sel(), cur=o?(S.mode==="face"&&selFaces().length?faceMat(objById(selFaces()[0].id),selFaces()[0].i).id:(o.mat||1)):null;
    var gridH=ml.map(function(x){ return '<button type="button" class="mt-sw'+(x.id===m.id?' on':'')+'" data-id="'+x.id+'" title="'+x.name+': click to edit, drag onto an object to assign" aria-label="'+x.name+'"><img src="'+matSwatch(x)+'" alt=""><span>'+x.name+'</span>'+(x.id===cur?'<i class="mt-cur" title="On the selection"></i>':'')+'</button>'; }).join("")+'<button type="button" class="mt-new" title="New material">+</button>';
    var sel2=function(cls,list,val){ return '<select class="'+cls+'">'+list.map(function(z){ return '<option value="'+z[0]+'"'+(z[0]===val?' selected':'')+'>'+z[1]+'</option>'; }).join("")+'</select>'; }, pat=m.pat||"none", hasPat=pat!=="none";
    var ed=actEl()&&p.contains(actEl())&&/^(INPUT|SELECT)$/.test(actEl().tagName); if((ed||gridOnly)&&p._for===m.id){ p.querySelector(".mt-grid").innerHTML=gridH; paintUV(); return; } p._for=m.id;
    p.querySelector(".mt-body").innerHTML='<div class="mt-grid">'+gridH+'</div><div class="mt-ed">'
      +'<label class="mt-row"><span>Name</span><input type="text" class="mt-name" value="'+m.name.replace(/"/g,"&quot;")+'"'+(m.id===1?' disabled title="lambert1 keeps its name"':'')+'></label>'
      +'<label class="mt-row"><span>Color</span><input type="color" class="mt-col" value="'+m.col+'"></label>'
      +'<label class="mt-row"><span>Pattern</span>'+sel2("mt-pat",PATS,pat)+'</label>'
      +(hasPat&&pat!=="image"&&pat!=="uvgrid"?'<div class="mt-row"><span>Color 2</span><input type="color" class="mt-col2" value="'+(m.col2||"#3a3f4b")+'" aria-label="Color 2"><button type="button" class="mt-swap" title="Swap the two colors">\u21c4</button></div>':'')
      +(pat==="gradient"?'<label class="mt-row"><span>Direction</span>'+sel2("mt-gdir",GDIRS,m.gdir||"y")+'</label>':'')
      +(pat==="image"?'<div class="mt-row"><span>Image</span><button type="button" class="mt-img">'+(m.img?"Change image":"Load image")+'</button><input type="file" class="mt-file" accept="image/*" hidden></div>':'')
      +(hasPat&&pat!=="gradient"?'<div class="mt-uvh"><span>UV</span><button type="button" class="mt-auto" title="Auto UV: every face gets the whole texture once, upright">Auto UV</button></div><label class="mt-row"><span>Mapping</span>'+sel2("mt-proj",PROJS,m.proj||"box")+'</label><label class="mt-row"><span>Repeat</span><input type="range" class="mt-scale" min="0.25" max="12" step="0.25" value="'+(m.scale||1)+'"><b>'+(m.scale||1)+'</b></label><label class="mt-row"><span>Rotate</span><input type="range" class="mt-rot" min="0" max="360" step="5" value="'+(m.rot||0)+'"><b>'+(m.rot||0)+'°</b></label><label class="mt-row"><span>Move U</span><input type="range" class="mt-ou" min="0" max="1" step="0.05" value="'+(m.ou||0)+'"><b>'+(m.ou||0)+'</b></label><label class="mt-row"><span>Move V</span><input type="range" class="mt-ov" min="0" max="1" step="0.05" value="'+(m.ov||0)+'"><b>'+(m.ov||0)+'</b></label><canvas class="mt-uv" width="200" height="200" aria-label="UV layout of the selection"></canvas><p class="mt-uvn"></p>':'')
      +'<div class="mt-row"><span>Glow</span><button type="button" class="mt-glow" aria-pressed="'+(m.glow?"true":"false")+'" title="Ignores the light: always fully bright">'+(m.glow?"on":"off")+'</button></div>'
      +'<div class="mt-acts"><button type="button" class="mt-assign" title="Assign to the selected objects, or in Face mode to the selected faces">Assign to Selection</button><button type="button" class="mt-users" title="Select the objects that use this material">Select Users</button><button type="button" class="mt-dup">Duplicate</button>'+(m.id!==1?'<button type="button" class="mt-del">Delete</button>':'')+'</div></div>'; paintUV(); }
  /* the UV layout (18.10.2026): the faces of the selected objects with this material, in texture space, over the texture (one tile is the bright square) */
  var uvTok=0;
  function paintUV(){ var p=q(".cube-mats"); if(!p) return; var cv=p.querySelector(".mt-uv"), note=p.querySelector(".mt-uvn"); if(!cv) return; var m=matById(matEdit), g=cv.getContext("2d"), W=cv.width, H=cv.height, polys=[];
    (osel||[]).map(objById).filter(Boolean).forEach(function(o){ (o.F||[]).forEach(function(fc,fi){ if(faceMat(o,fi).id===m.id) polys.push(faceUV(o,fc,m)); }); });
    var lo=[0,0], hi=[1,1]; polys.forEach(function(pl){ pl.forEach(function(q2){ lo[0]=Math.min(lo[0],q2[0]); lo[1]=Math.min(lo[1],q2[1]); hi[0]=Math.max(hi[0],q2[0]); hi[1]=Math.max(hi[1],q2[1]); }); });
    var span=Math.max(hi[0]-lo[0],hi[1]-lo[1],1), sc=(W-16)/span, ox=8-lo[0]*sc+((span-(hi[0]-lo[0]))*sc)/2, oy=8-lo[1]*sc+((span-(hi[1]-lo[1]))*sc)/2, tok=++uvTok;   /* oy: where t = 0 (the texture's top row) lies */
    note.textContent=polys.length?polys.length+" face"+(polys.length>1?"s":"")+" in texture space. The bright square is one copy of the texture.":"Select an object with this material to see its UVs.";
    patCanvas(m,function(tex){ if(tok!==uvTok) return; g.clearRect(0,0,W,H); var pt=g.createPattern(tex,"repeat"); if(pt&&pt.setTransform) pt.setTransform(new DOMMatrix([sc/tex.width,0,0,sc/tex.height,ox,oy]));
      g.save(); g.fillStyle=pt||"#555"; g.globalAlpha=.4; g.fillRect(0,0,W,H); g.globalAlpha=1; g.beginPath(); g.rect(ox,oy,sc,sc); g.clip(); g.fillRect(0,0,W,H); g.restore();
      g.strokeStyle="#f2c14e"; g.lineWidth=1.5; g.strokeRect(ox,oy,sc,sc); g.strokeStyle="rgba(255,255,255,.95)"; g.lineWidth=1.2; g.lineJoin="round";
      polys.forEach(function(pl){ g.beginPath(); pl.forEach(function(q2,i){ var x=ox+q2[0]*sc, y=oy+q2[1]*sc; if(i) g.lineTo(x,y); else g.moveTo(x,y); }); g.closePath(); g.stroke(); }); }); }
  function matChanged(m,quiet){ delete texCache[m.id]; if(!quiet) paintMats(); if(colMatch) setTimeout(function(){ paintSil(); },0); }   /* with Match colors on, a new color changes the suggestions at once */
  function newMat(from){ var ml=mats(), id=Math.max.apply(null,ml.map(function(x){ return x.id; }))+1, base=from?JSON.parse(JSON.stringify(from)):{col:"#d9604a",pat:"none",col2:"#f5f1e6",scale:2,rot:0,proj:"box",glow:false,img:null};
    var nm=from?from.name.replace(/\d+$/,""):"lambert", n=1; while(ml.some(function(x){ return x.name===nm+n; })) n++; base.id=id; base.name=nm+n; ml.push(base); return base; }
  function assignMat(id,targetObj,face){ var fs=S.mode!=="object"?selFaces():[], list;
    if(targetObj){ mark(); if(face!=null){ targetObj.fm=targetObj.fm||{}; targetObj.fm[face]=id; } else { targetObj.mat=id; delete targetObj.fm; } }
    else if(fs.length){ mark(); fs.forEach(function(x){ var o=objById(x.id); o.fm=o.fm||{}; o.fm[x.i]=id; }); }
    else { list=S.mode==="object"?osel.map(objById).filter(Boolean):[sel()].filter(Boolean); list=list.filter(function(o){ return !o.grp; }); if(!list.length){ toast("Select objects or faces first, or drag the ball onto an object."); return false; } mark(); list.forEach(function(o){ o.mat=id; delete o.fm; }); }
    snd(600); toast(matById(id).name+" assigned."); paintMats(); return true; }
  function matsEvents(){ var p=q(".cube-mats"), body=p.querySelector(".mt-body"), m=function(){ return matById(matEdit); }, marked=false;
    var once=function(){ if(!marked){ mark(); marked=true; } }; body.addEventListener("pointerdown",function(){ marked=false; },true); body.addEventListener("focusin",function(){ marked=false; });
    body.addEventListener("input",function(e){ var t=e.target, mm=m();
      if(t.classList.contains("mt-col")){ once(); mm.col=t.value; matChanged(mm,true); paintMats(true); }   /* only the swatches: the color picker keeps its field (18.10.2026) */
      else if(t.classList.contains("mt-col2")){ once(); mm.col2=t.value; matChanged(mm,true); paintMats(true); }
      else if(t.classList.contains("mt-ou")||t.classList.contains("mt-ov")){ once(); mm[t.classList.contains("mt-ou")?"ou":"ov"]=+t.value; t.nextElementSibling.textContent=+t.value; paintUV(); }
      else if(t.classList.contains("mt-scale")){ once(); mm.scale=+t.value; t.nextElementSibling.textContent=mm.scale; }
      else if(t.classList.contains("mt-rot")){ once(); mm.rot=+t.value; t.nextElementSibling.textContent=mm.rot+"°"; } });
    body.addEventListener("change",function(e){ var t=e.target, mm=m();
      if(t.classList.contains("mt-name")){ var v=t.value.trim().slice(0,30); if(v&&v!==mm.name){ mark(); mm.name=v; } paintMats(); }
      else if(t.classList.contains("mt-pat")){ mark(); mm.pat=t.value; if(mm.pat==="image") mm.scale=1;   /* your own image once per face, not tiled (18.10.2026) */ matChanged(mm); if(mm.pat==="image"&&!mm.img) setTimeout(function(){ var f2=p.querySelector(".mt-file"); if(f2) f2.click(); },60); }
      else if(t.classList.contains("mt-proj")){ mark(); mm.proj=t.value; paintUV(); }
      else if(t.classList.contains("mt-gdir")){ mark(); mm.gdir=t.value; }
      else if(t.classList.contains("mt-file")&&t.files&&t.files[0]){ var rd=new FileReader(); rd.onload=function(){ var im=new Image(); im.onload=function(){ var c3=document.createElement("canvas"); c3.width=c3.height=256; c3.getContext("2d").drawImage(im,0,0,256,256); mark(); mm.img=c3.toDataURL("image/jpeg",.86); matChanged(mm); snd(600); toast("Image loaded into "+mm.name+"."); }; im.onerror=function(){ toast("That image could not be read."); }; im.src=rd.result; }; rd.readAsDataURL(t.files[0]); }
      else if(t.classList.contains("mt-col")||t.classList.contains("mt-col2")||t.classList.contains("mt-scale")||t.classList.contains("mt-rot")) paintMats(); });
    body.addEventListener("click",function(e){ var t=e.target.closest("button"); if(!t) return; var mm=m();
      if(t.classList.contains("mt-sw")){ if(t._dragged){ t._dragged=false; return; } matEdit=+t.getAttribute("data-id"); snd(520); paintMats(); }
      else if(t.classList.contains("mt-new")){ mark(); var nm=newMat(); matEdit=nm.id; snd(600); paintMats(); }
      else if(t.classList.contains("mt-dup")){ mark(); var dm=newMat(mm); matEdit=dm.id; snd(600); paintMats(); }
      else if(t.classList.contains("mt-del")&&mm.id!==1){ mark(); S.objs.forEach(function(o){ if(o.mat===mm.id) o.mat=1; if(o.fm) Object.keys(o.fm).forEach(function(k){ if(o.fm[k]===mm.id) delete o.fm[k]; }); }); S.mats=mats().filter(function(x){ return x.id!==mm.id; }); delete texCache[mm.id]; matEdit=1; snd(300); toast(mm.name+" deleted; its objects use lambert1."); paintMats(); }
      else if(t.classList.contains("mt-assign")) assignMat(mm.id);
      else if(t.classList.contains("mt-users")){ var us=matUsers(mm.id); if(!us.length){ toast("Nothing uses "+mm.name+"."); return; } if(S.mode!=="object") setMode("object"); osel=us.map(function(o){ return o.id; }); S.sel=osel[osel.length-1]; snd(560); toast(us.length+" object"+(us.length>1?"s":"")+" with "+mm.name+"."); paintAll(); }
      else if(t.classList.contains("mt-img")){ var f3=p.querySelector(".mt-file"); if(f3) f3.click(); }
      else if(t.classList.contains("mt-swap")){ var mw=m(); mark(); var c0=mw.col; mw.col=mw.col2||"#3a3f4b"; mw.col2=c0; matChanged(mw); }
      else if(t.classList.contains("mt-auto")){ var ma=m(); mark(); ma.proj="face"; ma.scale=1; ma.rot=0; ma.ou=0; ma.ov=0; matChanged(ma); toast("Auto UV: every face gets the whole texture once, upright."); }
      else if(t.classList.contains("mt-glow")){ mark(); mm.glow=!mm.glow; matChanged(mm); } });
    /* drag a ball onto an object in the viewport to assign it; in Face mode onto a face */
    body.addEventListener("pointerdown",function(e){ var sw=e.target.closest(".mt-sw"); if(!sw||e.button!==0) return; var id=+sw.getAttribute("data-id"), x0=e.clientX, y0=e.clientY, ghost=null;
      var mv=function(ev){ if(!ghost&&Math.hypot(ev.clientX-x0,ev.clientY-y0)<6) return; if(!ghost){ ghost=document.createElement("img"); ghost.className="mt-ghost"; ghost.src=sw.querySelector("img").src; wrap.appendChild(ghost); sw._dragged=true; } ghost.style.left=ev.clientX+"px"; ghost.style.top=ev.clientY+"px"; };
      var up=function(ev){ removeEventListener("pointermove",mv,true); removeEventListener("pointerup",up,true); if(!ghost) return; ghost.remove(); if(inUI(ev)) return; var h=pick(ev.clientX,ev.clientY);
        if(!h){ toast("Drop it on an object."); return; } var o=S.objs[h.o]; if(!o) return; if(S.mode==="face"&&h.t==="face") assignMat(id,o,h.i); else assignMat(id,o); paintAll(); };
      addEventListener("pointermove",mv,true); addEventListener("pointerup",up,true); });
  }
  function setMatsOpen(v){ if(!v&&pops.mats) popBack("mats",true); matsOpen=v; try{ localStorage.setItem("sbh-cube-mats",v?"1":"0"); }catch(e){} paintMats(); placeAll(); snd(v?560:420); }
  /* ---- import and export (Jakob, 18.10.2026): OBJ (a .zip with .mtl and the textures as PNG), FBX (ASCII 7.4), USD (.usda, with the hierarchy and the keys);
     import: OBJ (with its .mtl and images, picked together), USD (.usda) and FBX (three.js's reader, loaded only when needed) ---- */
  /* the name and the logo: what Inca is, on hover, focus or click (Jakob, 18.10.2026) */
  function aboutEvents(){ var br=q(".ch-brand"), pop=q(".cube-about"), pinned=false, tm=null; wrap.appendChild(pop); if(window.sbhMailCopy) window.sbhMailCopy(pop);   /* the copy button beside the contact link (18.10.2026) */
    var show=function(v){ clearTimeout(tm); pop.hidden=!v; br.setAttribute("aria-expanded",v?"true":"false"); if(v){ var r=br.getBoundingClientRect(); pop.style.left=Math.round(Math.max(8,Math.min(innerWidth-pop.offsetWidth-8,r.left)))+"px"; var ph=pop.offsetHeight; pop.style.top=Math.round(r.bottom+8+ph<=innerHeight-8?r.bottom+8:Math.max(8,r.top-8-ph))+"px"; } };
    var later=function(){ clearTimeout(tm); tm=setTimeout(function(){ if(!pinned) show(false); },180); };
    br.addEventListener("pointerenter",function(){ show(true); }); br.addEventListener("pointerleave",later); pop.addEventListener("pointerenter",function(){ clearTimeout(tm); }); pop.addEventListener("pointerleave",later);
    br.addEventListener("focus",function(){ show(true); }); br.addEventListener("blur",function(){ if(!pinned) later(); });
    br.addEventListener("click",function(){ pinned=!pinned||pop.hidden; show(pinned); if(pinned) snd(560); });
    br.addEventListener("keydown",function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); br.click(); } });
    wrap.addEventListener("pointerdown",function(e){ if(!pop.hidden&&!e.target.closest(".cube-about,.ch-brand")){ pinned=false; show(false); } },true);
    wrap._about=function(){ if(pop.hidden) return false; pinned=false; show(false); return true; }; }
  function dlBlob(name,blob){ var a=document.createElement("a"), u=URL.createObjectURL(blob); a.href=u; a.download=name; document.body.appendChild(a); a.click(); setTimeout(function(){ a.remove(); URL.revokeObjectURL(u); },1500); }
  function crc32(u8){ var t=crc32.t; if(!t){ t=crc32.t=new Uint32Array(256); for(var n=0;n<256;n++){ var c=n; for(var k=0;k<8;k++) c=c&1?0xEDB88320^(c>>>1):c>>>1; t[n]=c>>>0; } } var c2=0xFFFFFFFF; for(var i=0;i<u8.length;i++) c2=t[(c2^u8[i])&255]^(c2>>>8); return (c2^0xFFFFFFFF)>>>0; }
  /* a plain ZIP (stored, not compressed): enough for a model, its .mtl and a few PNGs */
  function zipStore(files){ var enc=new TextEncoder(), parts=[], central=[], off=0;
    files.forEach(function(f){ var nm=enc.encode(f.name), d=f.data, crc=crc32(d), h=new DataView(new ArrayBuffer(30)), c=new DataView(new ArrayBuffer(46));
      h.setUint32(0,0x04034b50,true); h.setUint16(4,20,true); h.setUint16(12,0x21,true); h.setUint32(14,crc,true); h.setUint32(18,d.length,true); h.setUint32(22,d.length,true); h.setUint16(26,nm.length,true);
      c.setUint32(0,0x02014b50,true); c.setUint16(4,20,true); c.setUint16(6,20,true); c.setUint16(14,0x21,true); c.setUint32(16,crc,true); c.setUint32(20,d.length,true); c.setUint32(24,d.length,true); c.setUint16(28,nm.length,true); c.setUint32(42,off,true);
      parts.push(new Uint8Array(h.buffer),nm,d); central.push(new Uint8Array(c.buffer),nm); off+=30+nm.length+d.length; });
    var cs=central.reduce(function(a,b){ return a+b.length; },0), e=new DataView(new ArrayBuffer(22)); e.setUint32(0,0x06054b50,true); e.setUint16(8,files.length,true); e.setUint16(10,files.length,true); e.setUint32(12,cs,true); e.setUint32(16,off,true);
    return new Blob(parts.concat(central,[new Uint8Array(e.buffer)]),{type:"application/zip"}); }
  /* what is exported: the selection with everything below it, or the whole scene */
  function expList(){ var base=S.mode==="object"&&osel.length?osel.map(objById).filter(Boolean):[], out=[]; if(!base.length) return S.objs.slice();
    base.forEach(function(o){ [o].concat(desc(o)).forEach(function(x){ if(out.indexOf(x)<0) out.push(x); }); }); return S.objs.filter(function(x){ return out.indexOf(x)>=0; }); }
  function safeName(n,used){ var s2=String(n||"obj").replace(/[^A-Za-z0-9_]/g,"_"); if(!/^[A-Za-z_]/.test(s2)) s2="_"+s2; var b=s2, i=1; while(used&&used[s2]) s2=b+"_"+(i++); if(used) used[s2]=1; return s2; }
  function fmt(v){ return (Math.abs(v)<1e-9?0:+v.toFixed(6))+""; }
  function uvsOf(o,fi,fc){ var m=faceMat(o,fi); return faceUV(o,fc,textured(m)?m:{pat:"none",proj:"box",scale:1,rot:0}); }
  function usedMats(list){ var ids={}; list.forEach(function(o){ if(o.grp) return; o.F.forEach(function(_,fi){ ids[faceMat(o,fi).id]=1; }); }); return mats().filter(function(m){ return ids[m.id]; }); }
  function pngOf(m){ return new Promise(function(res){ patCanvas(m,function(cv2){ cv2.toBlob(function(b){ b.arrayBuffer().then(function(ab){ res(new Uint8Array(ab)); }); },"image/png"); }); }); }
  function baseName(){ return "inca-"+(S.mode==="object"&&osel.length===1&&objById(osel[0])?safeName(objById(osel[0]).name):"scene"); }
  /* OBJ: world positions, texture coordinates from the mapping, one material per face; .mtl and textures beside it, in a .zip */
  function exportOBJ(){ var list=expList().filter(function(o){ return !o.grp&&o.F.length; }); if(!list.length){ toast("Nothing to export."); return; } var nm=baseName(), L=["# Inca, the 3D program in the FH Salzburg Student Handbook","mtllib "+nm+".mtl"], vb=0, tb=0, used={};
    list.forEach(function(o){ L.push("o "+safeName(o.name,used)); o.V.forEach(function(v){ L.push("v "+fmt(v[0])+" "+fmt(v[1])+" "+fmt(v[2])); }); var tl=[], cur=null, fl=[];
      o.F.forEach(function(fc,fi){ var uv=uvsOf(o,fi,fc), m=faceMat(o,fi), ix=[]; fc.forEach(function(k,j){ tl.push("vt "+fmt(uv[j][0])+" "+fmt(uv[j][1])); ix.push((vb+k+1)+"/"+(tb+tl.length)); }); if(m.name!==cur){ fl.push("usemtl "+safeName(m.name)); cur=m.name; } fl.push("f "+ix.join(" ")); });
      L=L.concat(tl,fl); vb+=o.V.length; tb+=tl.length; });
    var ms=usedMats(list), M=["# Inca materials"], tex=[];
    ms.forEach(function(m){ var c=hexRGB(m.col), t=textured(m); M.push("newmtl "+safeName(m.name),"Ka 0 0 0","Kd "+(t?"1 1 1":c.map(fmt).join(" ")),"Ks 0 0 0","illum 1"); if(m.glow) M.push("Ke "+c.map(fmt).join(" ")); if(t){ M.push("map_Kd textures/"+safeName(m.name)+".png"); tex.push(m); } M.push(""); });
    var enc=new TextEncoder(); Promise.all(tex.map(pngOf)).then(function(pngs){ var files=[{name:nm+".obj",data:enc.encode(L.join("\n")+"\n")},{name:nm+".mtl",data:enc.encode(M.join("\n"))}]; tex.forEach(function(m,i){ files.push({name:"textures/"+safeName(m.name)+".png",data:pngs[i]}); });
      dlBlob(nm+"-obj.zip",zipStore(files)); snd(660); toast("Exported "+list.length+" object"+(list.length>1?"s":"")+" as OBJ (with .mtl"+(tex.length?" and "+tex.length+" texture"+(tex.length>1?"s":""):"")+", in a .zip)."); }); }
  /* USD: an Xform per object (with its transform, animated where it has keys) and a Mesh below it, like Maya; materials as UsdPreviewSurface */
  function usdM(M){ return "( ("+[M[0][0],M[1][0],M[2][0],0].map(fmt).join(", ")+"), ("+[M[0][1],M[1][1],M[2][1],0].map(fmt).join(", ")+"), ("+[M[0][2],M[1][2],M[2][2],0].map(fmt).join(", ")+"), ("+[M[0][3],M[1][3],M[2][3],1].map(fmt).join(", ")+") )"; }
  function exportUSD(){ var list=expList(); if(!list.length){ toast("Nothing to export."); return; } var ms=usedMats(list), mname={}, mu={}, L=[], ind=function(n){ return new Array(n+1).join("    "); };
    ms.forEach(function(m){ mname[m.id]=safeName(m.name,mu); });
    L.push("#usda 1.0","(",'    defaultPrim = "Inca"','    doc = "Exported from Inca, the 3D program in the FH Salzburg Student Handbook"',"    endTimeCode = "+FRAMES,"    metersPerUnit = 1","    startTimeCode = 1","    timeCodesPerSecond = 24",'    upAxis = "Y"',")","",'def Xform "Inca"',"{");
    L.push('    def Scope "Looks"',"    {");
    ms.forEach(function(m){ var c=hexRGB(m.col), p="/Inca/Looks/"+mname[m.id]; L.push('        def Material "'+mname[m.id]+'"',"        {","            token outputs:surface.connect = <"+p+"/Surface.outputs:surface>","",'            def Shader "Surface"',"            {",'                uniform token info:id = "UsdPreviewSurface"',"                color3f inputs:diffuseColor = ("+c.map(fmt).join(", ")+")","                float inputs:roughness = 0.6");
      if(m.glow) L.push("                color3f inputs:emissiveColor = ("+c.map(fmt).join(", ")+")"); L.push("                token outputs:surface","            }","        }"); });
    L.push("    }");
    var inList=function(o){ return list.indexOf(o)>=0; }, keyed=function(o){ return hasKeys(o); }, frames=function(o){ var ks=keyTimes(o); var a=[]; for(var fr=ks[0];fr<=ks[ks.length-1];fr++) a.push(fr); return a; };
    (function walk(parent,depth,used){ var ch=list.filter(function(o){ var p=parentOf(o); return parent?o.par===parent.id:(!p||!inList(p)); });
      ch.forEach(function(o){ var nm=safeName(o.name,used), i0=ind(depth); L.push(i0+'def Xform "'+nm+'"',i0+"{");
        if(keyed(o)){ var samples=frames(o).map(function(fr){ poseAt(o,fr); return i0+"        "+fr+": "+usdM(mLocal(o))+","; }); poseAt(o,S.frame); refresh(o); L.push(i0+"    matrix4d xformOp:transform.timeSamples = {"); L=L.concat(samples); L.push(i0+"    }"); }
        else L.push(i0+"    matrix4d xformOp:transform = "+usdM(mLocal(o)));
        L.push(i0+'    uniform token[] xformOpOrder = ["xformOp:transform"]');
        if(!o.grp&&o.F.length){ var cnt=[], idx=[], st=[], byMat={}; o.F.forEach(function(fc,fi){ cnt.push(fc.length); fc.forEach(function(k){ idx.push(k); }); uvsOf(o,fi,fc).forEach(function(q2){ st.push("("+fmt(q2[0])+", "+fmt(q2[1])+")"); }); var mid=faceMat(o,fi).id; (byMat[mid]=byMat[mid]||[]).push(fi); });
          var mids=Object.keys(byMat), main=+mids.slice().sort(function(a2,b2){ return byMat[b2].length-byMat[a2].length; })[0], mc=hexRGB(matById(main).col);   /* the mesh gets the material most of its faces have */
          L.push("",i0+'    def Mesh "'+nm+'Shape" (',i0+'        prepend apiSchemas = ["MaterialBindingAPI"]',i0+"    )",i0+"    {",i0+"        int[] faceVertexCounts = ["+cnt.join(", ")+"]",i0+"        int[] faceVertexIndices = ["+idx.join(", ")+"]",
            i0+"        point3f[] points = ["+o.G.map(function(v){ return "("+fmt(v[0])+", "+fmt(v[1])+", "+fmt(v[2])+")"; }).join(", ")+"]",
            i0+"        color3f[] primvars:displayColor = [("+mc.map(fmt).join(", ")+")] (",i0+'            interpolation = "constant"',i0+"        )",
            i0+"        texCoord2f[] primvars:st = ["+st.join(", ")+"] (",i0+'            interpolation = "faceVarying"',i0+"        )",
            i0+'        uniform token subdivisionScheme = "none"',i0+"        rel material:binding = </Inca/Looks/"+mname[main]+">"); if(mids.length>1) L.push(i0+'        uniform token subsetFamily:materialBind:familyType = "nonOverlapping"');
          if(mids.length>1) mids.forEach(function(mid){ L.push("",i0+'        def GeomSubset "'+mname[mid]+'" (',i0+'            prepend apiSchemas = ["MaterialBindingAPI"]',i0+"        )",i0+"        {",i0+'            uniform token elementType = "face"',i0+'            uniform token familyName = "materialBind"',i0+"            int[] indices = ["+byMat[mid].join(", ")+"]",i0+"            rel material:binding = </Inca/Looks/"+mname[mid]+">",i0+"        }"); });
          L.push(i0+"    }"); }
        walk(o,depth+1,{}); L.push(i0+"}"); }); })(null,1,{Looks:1});
    L.push("}");
    dlBlob(baseName()+".usda",new Blob([L.join("\n")+"\n"],{type:"text/plain"})); snd(660); toast("Exported "+list.filter(function(o){ return !o.grp; }).length+" object"+(list.length>1?"s":"")+" as USD (.usda)."); }
  /* FBX (ASCII 7.4): each object a Mesh model at its pivot, its corners around it in world orientation; materials per face */
  function exportFBX(){ var list=expList().filter(function(o){ return !o.grp&&o.F.length; }); if(!list.length){ toast("Nothing to export."); return; } var ms=usedMats(list), id=1000000, L=[], C=[], mid={}, nid=function(){ return ++id; }, arr=function(a){ return "*"+a.length+" {\n\t\t\ta: "+a.join(",")+"\n\t\t}"; };
    ms.forEach(function(m){ mid[m.id]=nid(); });
    L.push("; FBX 7.4.0 project file","; Exported from Inca, the 3D program in the FH Salzburg Student Handbook","FBXHeaderExtension:  {","\tFBXHeaderVersion: 1003","\tFBXVersion: 7400",'\tCreator: "Inca"',"}","GlobalSettings:  {","\tVersion: 1000","\tProperties70:  {",
      '\t\tP: "UpAxis", "int", "Integer", "",1','\t\tP: "UpAxisSign", "int", "Integer", "",1','\t\tP: "FrontAxis", "int", "Integer", "",2','\t\tP: "FrontAxisSign", "int", "Integer", "",1','\t\tP: "CoordAxis", "int", "Integer", "",0','\t\tP: "CoordAxisSign", "int", "Integer", "",1','\t\tP: "UnitScaleFactor", "double", "Number", "",1',"\t}","}");
    L.push("Definitions:  {","\tVersion: 100","\tCount: "+(1+list.length*2+ms.length),'\tObjectType: "GlobalSettings" {',"\t\tCount: 1","\t}",'\tObjectType: "Model" {',"\t\tCount: "+list.length,"\t}",'\tObjectType: "Geometry" {',"\t\tCount: "+list.length,"\t}",'\tObjectType: "Material" {',"\t\tCount: "+ms.length,"\t}","}","Objects:  {");
    var used={}; list.forEach(function(o){ var nm=safeName(o.name,used), gid=nid(), mdl=nid(), P=pivotW(o), vs=[], pv=[], nr=[], uvs=[], uvi=[], ml=[], om=[], omap={};
      o.V.forEach(function(v){ vs.push(fmt(v[0]-P[0]),fmt(v[1]-P[1]),fmt(v[2]-P[2])); });
      o.F.forEach(function(fc,fi){ var n=faceN(o.V,fc), uv=uvsOf(o,fi,fc), m=faceMat(o,fi); fc.forEach(function(k,j){ pv.push(j===fc.length-1?-(k+1):k); nr.push(fmt(n[0]),fmt(n[1]),fmt(n[2])); uvs.push(fmt(uv[j][0]),fmt(uv[j][1])); uvi.push(uvi.length); }); if(omap[m.id]==null){ omap[m.id]=om.length; om.push(m.id); } ml.push(omap[m.id]); });
      L.push('\tGeometry: '+gid+', "Geometry::'+nm+'", "Mesh" {',"\t\tVertices: "+arr(vs),"\t\tPolygonVertexIndex: "+arr(pv),"\t\tGeometryVersion: 124",
        "\t\tLayerElementNormal: 0 {","\t\t\tVersion: 101",'\t\t\tName: ""','\t\t\tMappingInformationType: "ByPolygonVertex"','\t\t\tReferenceInformationType: "Direct"',"\t\t\tNormals: "+arr(nr).replace(/\n\t\t/g,"\n\t\t\t"),"\t\t}",
        "\t\tLayerElementUV: 0 {","\t\t\tVersion: 101",'\t\t\tName: "map1"','\t\t\tMappingInformationType: "ByPolygonVertex"','\t\t\tReferenceInformationType: "IndexToDirect"',"\t\t\tUV: "+arr(uvs).replace(/\n\t\t/g,"\n\t\t\t"),"\t\t\tUVIndex: "+arr(uvi).replace(/\n\t\t/g,"\n\t\t\t"),"\t\t}",
        "\t\tLayerElementMaterial: 0 {","\t\t\tVersion: 101",'\t\t\tName: ""','\t\t\tMappingInformationType: "'+(om.length>1?"ByPolygon":"AllSame")+'"','\t\t\tReferenceInformationType: "IndexToDirect"',"\t\t\tMaterials: "+arr(om.length>1?ml:[0]).replace(/\n\t\t/g,"\n\t\t\t"),"\t\t}",
        "\t\tLayer: 0 {","\t\t\tVersion: 100",'\t\t\tLayerElement:  {','\t\t\t\tType: "LayerElementNormal"',"\t\t\t\tTypedIndex: 0","\t\t\t}",'\t\t\tLayerElement:  {','\t\t\t\tType: "LayerElementMaterial"',"\t\t\t\tTypedIndex: 0","\t\t\t}",'\t\t\tLayerElement:  {','\t\t\t\tType: "LayerElementUV"',"\t\t\t\tTypedIndex: 0","\t\t\t}","\t\t}","\t}");
      L.push('\tModel: '+mdl+', "Model::'+nm+'", "Mesh" {',"\t\tVersion: 232","\t\tProperties70:  {",'\t\t\tP: "Lcl Translation", "Lcl Translation", "", "A",'+P.map(fmt).join(","),"\t\t}","\t\tShading: T",'\t\tCulling: "CullingOff"',"\t}");
      C.push('\tC: "OO",'+mdl+",0",'\tC: "OO",'+gid+","+mdl); om.forEach(function(m2){ C.push('\tC: "OO",'+mid[m2]+","+mdl); }); });
    ms.forEach(function(m){ var c=hexRGB(m.col); L.push('\tMaterial: '+mid[m.id]+', "Material::'+safeName(m.name)+'", "" {',"\t\tVersion: 102",'\t\tShadingModel: "lambert"',"\t\tMultiLayer: 0","\t\tProperties70:  {",'\t\t\tP: "DiffuseColor", "Color", "", "A",'+c.map(fmt).join(","),'\t\t\tP: "Diffuse", "Vector3D", "Vector", "",'+c.map(fmt).join(",")+(m.glow?'\n\t\t\tP: "EmissiveColor", "Color", "", "A",'+c.map(fmt).join(","):""),"\t\t}","\t}"); });
    L.push("}","Connections:  {"); L=L.concat(C); L.push("}");
    dlBlob(baseName()+".fbx",new Blob([L.join("\n")+"\n"],{type:"application/octet-stream"})); snd(660); toast("Exported "+list.length+" object"+(list.length>1?"s":"")+" as FBX."); }
  /* ---- import ---- */
  var MAXF=40000;
  function addImported(parts,label){ var tot=parts.reduce(function(a,p){ return a+p.F.length; },0); if(!parts.length||!tot){ toast("No geometry found in "+label+"."); return; } if(tot>MAXF){ toast(label+" has "+tot+" faces; Inca takes up to "+MAXF+"."); return; }
    var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; parts.forEach(function(p){ p.V.forEach(function(v){ for(var i=0;i<3;i++){ lo[i]=Math.min(lo[i],v[i]); hi[i]=Math.max(hi[i],v[i]); } }); });
    var ext=Math.max(hi[0]-lo[0],hi[1]-lo[1],hi[2]-lo[2]), k=ext>40||ext<.05?4/ext:1, note="";   /* far too big or too small for the viewport: scaled to about 4 units */
    if(k!==1) note=" Scaled to fit (it was "+(+ext.toPrecision(3))+" units across)."; mark(); var made=[];
    parts.forEach(function(p){ var V=p.V.map(function(v){ return [v[0]*k,v[1]*k,v[2]*k]; }), o=obj(uniqueName(safeName(p.name||"imported")),V,p.F); if(p.mats&&p.mats.length){ var cnt={}; p.mats.forEach(function(x){ cnt[x]=(cnt[x]||0)+1; }); var main=+Object.keys(cnt).sort(function(a2,b2){ return cnt[b2]-cnt[a2]; })[0]; if(main!==1) o.mat=main; var fm2={}, any=false; p.mats.forEach(function(mi,fi){ if(mi!==main){ fm2[fi]=mi; any=true; } }); if(any) o.fm=fm2; }   /* the most used material for the object, the others per face */
      worldV(o); S.objs.push(o); made.push(o.id); });
    if(S.mode!=="object") setMode("object"); osel=made.slice(); S.sel=made[made.length-1]; hover=null; frame(); snd(660); toast("Imported "+made.length+" object"+(made.length>1?"s":"")+" from "+label+"."+note); paintAll(); }
  function matByName(name,col){ var ml=mats(), m=ml.filter(function(x){ return x.name===name; })[0]; if(m){ if(col){ m.col=col; delete texCache[m.id]; } return m; } m=newMat(); m.name=String(name).slice(0,30); if(col) m.col=col; return m; }
  function rgbHex(c){ return "#"+c.slice(0,3).map(function(x){ var v=Math.round(Math.max(0,Math.min(1,+x||0))*255).toString(16); return v.length<2?"0"+v:v; }).join(""); }
  function readImg(file,cb){ var rd=new FileReader(); rd.onload=function(){ var im=new Image(); im.onload=function(){ var c3=document.createElement("canvas"); c3.width=c3.height=256; c3.getContext("2d").drawImage(im,0,0,256,256); cb(c3.toDataURL("image/jpeg",.86)); }; im.onerror=function(){ cb(null); }; im.src=rd.result; }; rd.readAsDataURL(file); }
  /* OBJ: v and f (any polygon, negative indices), o and g split objects, usemtl picks a material; a .mtl and images picked together give colors and textures */
  function parseOBJ(txt){ var v=[], out=[], cur=null, mtl=null, start=function(n){ cur={name:n,F:[],M:[]}; out.push(cur); };
    txt.split(/\r?\n/).forEach(function(line){ var t=line.trim().split(/\s+/), k=t[0]; if(k==="v") v.push([+t[1]||0,+t[2]||0,+t[3]||0]); else if(k==="o"||(k==="g"&&(!cur||cur.F.length))) start(t.slice(1).join("_")||"imported"); else if(k==="usemtl") mtl=t.slice(1).join(" ");
      else if(k==="f"){ if(!cur) start("imported"); var f2=t.slice(1).map(function(x){ var i=parseInt(x.split("/")[0],10); return i<0?v.length+i:i-1; }).filter(function(i){ return i>=0&&i<v.length; }); if(f2.length>=3){ cur.F.push(f2); cur.M.push(mtl); } } });
    return out.filter(function(o){ return o.F.length; }).map(function(o){ var map={}, V=[]; var F=o.F.map(function(f2){ return f2.map(function(i){ if(map[i]==null){ map[i]=V.length; V.push(v[i].slice()); } return map[i]; }); }); return {name:o.name,V:V,F:F,mnames:o.M}; }); }
  function parseMTL(txt){ var out={}, cur=null; txt.split(/\r?\n/).forEach(function(line){ var t=line.trim().split(/\s+/); if(t[0]==="newmtl"){ cur=out[t.slice(1).join(" ")]={}; } else if(cur&&t[0]==="Kd") cur.kd=[+t[1],+t[2],+t[3]]; else if(cur&&t[0]==="map_Kd") cur.map=t[t.length-1].split(/[\\\/]/).pop(); }); return out; }
  function importOBJ(objFile,mtlFile,imgs){ var rdText=function(f){ return f?f.text():Promise.resolve(""); };
    Promise.all([objFile.text(),rdText(mtlFile)]).then(function(r){ var parts=parseOBJ(r[0]), mtl=parseMTL(r[1]), pend=[];
      parts.forEach(function(p){ p.mats=p.mnames.map(function(nm){ if(!nm) return 1; var d=mtl[nm]||{}, m=matByName(nm,d.kd?rgbHex(d.kd):(mtl[nm]?null:null)); var img=d.map&&imgs.filter(function(f){ return f.name===d.map; })[0];
        if(img&&!m._loading){ m._loading=true; pend.push(new Promise(function(res){ readImg(img,function(u){ if(u){ m.pat="image"; m.img=u; m.proj="box"; m.scale=1; delete texCache[m.id]; } delete m._loading; res(); }); })); } return m.id; }); });
      Promise.all(pend).then(function(){ addImported(parts,objFile.name); }); }); }
  /* USD (.usda): a small reader for meshes and their transforms (translate, rotate, scale, matrix, pivots), through the hierarchy; Z-up files are turned to Y-up */
  function usdTokens(src){ var T=[], i=0, n=src.length; while(i<n){ var ch=src[i];
      if(ch==="#"){ while(i<n&&src[i]!=="\n") i++; continue; } if(/\s/.test(ch)){ i++; continue; }
      if(ch==='"'||ch==="'"){ var q3=src.substr(i,3)===ch+ch+ch, j; if(q3){ j=src.indexOf(ch+ch+ch,i+3); T.push({s:src.slice(i+3,j)}); i=j+3; continue; } j=i+1; while(j<n&&src[j]!==ch){ if(src[j]==="\\") j++; j++; } T.push({s:src.slice(i+1,j)}); i=j+1; continue; }
      if(ch==="@"){ var j2=src.indexOf("@",i+1); T.push({s:src.slice(i+1,j2)}); i=j2+1; continue; } if(ch==="<"){ var j3=src.indexOf(">",i); T.push({p:src.slice(i+1,j3)}); i=j3+1; continue; }
      if("()[]{}=,:".indexOf(ch)>=0){ T.push({c:ch}); i++; continue; }
      var m2=/^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?/.exec(src.slice(i,i+40)); if(m2&&(ch!=="-"||/[\d.]/.test(src[i+1]))){ T.push({n:+m2[0]}); i+=m2[0].length; continue; }
      var m3=/^[A-Za-z_!][A-Za-z0-9_:.!\[\]]*/.exec(src.slice(i,i+200)); if(m3){ var w=m3[0]; if(/\[\]$/.test(w)) w=w; T.push({w:w}); i+=w.length; continue; } i++; }
    return T; }
  function parseUSDA(src){ var T=usdTokens(src), i=0, peek=function(){ return T[i]||{}; }, isC=function(c){ return T[i]&&T[i].c===c; }, root={kids:[],props:{},meta:{}};
    var skipBal=function(open,close){ var d=0; do{ if(isC(open)) d++; else if(isC(close)) d--; i++; } while(i<T.length&&d>0); };
    var val=function(){ var t=T[i]; if(!t) return null; if(t.c==="["){ i++; var a=[]; while(i<T.length&&!isC("]")){ if(isC(",")){ i++; continue; } a.push(val()); } i++; return a; }
      if(t.c==="("){ i++; var tp=[]; while(i<T.length&&!isC(")")){ if(isC(",")){ i++; continue; } tp.push(val()); } i++; return tp; }
      if(t.c==="{"){ i++; var d={}; while(i<T.length&&!isC("}")){ if(isC(",")){ i++; continue; } var key=T[i]; i++; if(isC(":")) i++; d[key.n!=null?key.n:(key.s||key.w)]=val(); } i++; return d; }
      i++; return t.n!=null?t.n:t.s!=null?t.s:t.p!=null?{path:t.p}:t.w; };
    var body=function(node){ while(i<T.length&&!isC("}")){ var t=T[i];
        if(t.w==="def"||t.w==="over"||t.w==="class"){ i++; var type=T[i]&&T[i].w&&!T[i].s?T[i++].w:"", name=T[i]&&T[i].s!=null?T[i++].s:"prim", kid={type:type,name:name,kids:[],props:{}}; if(isC("(")) skipBal("(",")"); if(isC("{")){ i++; body(kid); i++; } node.kids.push(kid); continue; }
        if(t.w==="variantSet"){ while(i<T.length&&!isC("{")) i++; skipBal("{","}"); continue; }
        var words=[]; while(i<T.length&&T[i].w&&!isC("=")){ words.push(T[i].w); i++; if(isC("(")||isC("}")) break; }
        if(isC("=")){ i++; var nm=words[words.length-1]||"", v=val(); node.props[nm]=v; if(isC("(")) skipBal("(",")"); continue; }
        if(isC("(")){ skipBal("(",")"); continue; } if(!words.length) i++; }
    };
    if(T[0]&&T[0].w==="usda") i=2; if(isC("(")){ var m0=i; skipBal("(",")"); var metaT=src.match(/upAxis\s*=\s*"(\w)"/); root.up=metaT?metaT[1]:"Y"; } body(root); return root; }
  function usdLocal(node){ var P=node.props, order=P["xformOpOrder"]||[], M=[[1,0,0,0],[0,1,0,0],[0,0,1,0]], d=Math.PI/180, sample=function(v){ if(v&&typeof v==="object"&&!Array.isArray(v)){ var ks=Object.keys(v).map(Number).sort(function(a,b){ return a-b; }); return v[ks[0]]; } return v; };
    var get=function(nm){ var v=P[nm]; if(v===undefined) v=sample(P[nm+".timeSamples"]); return v; };
    var rot=function(ax,a){ var c=Math.cos(a*d), s=Math.sin(a*d); return ax==="x"?[[1,0,0,0],[0,c,-s,0],[0,s,c,0]]:ax==="y"?[[c,0,s,0],[0,1,0,0],[-s,0,c,0]]:[[c,-s,0,0],[s,c,0,0],[0,0,1,0]]; };
    order.forEach(function(op){ var inv=op.indexOf("!invert!")===0, nm=op.replace("!invert!",""), v=get(nm), A=null, kind=nm.split(":")[1]||""; if(v==null) return;
      if(/^translate/.test(kind)) A=[[1,0,0,v[0]],[0,1,0,v[1]],[0,0,1,v[2]]]; else if(/^scale/.test(kind)) A=[[v[0],0,0,0],[0,v[1],0,0],[0,0,v[2],0]];
      else if(/^rotate[XYZ]{3}$/.test(kind)){ var ord=kind.slice(6).toLowerCase(); A=MID; for(var j=0;j<3;j++) A=mMul(rot(ord[j],v["xyz".indexOf(ord[j])]),A); }
      else if(/^rotate[XYZ]$/.test(kind)) A=rot(kind[6].toLowerCase(),v); else if(/^transform/.test(kind)) A=[0,1,2].map(function(r){ return [v[0][r],v[1][r],v[2][r],v[3][r]]; });
      else if(/^orient/.test(kind)){ var w=v[0], x=v[1], y=v[2], z=v[3]; A=[[1-2*(y*y+z*z),2*(x*y-z*w),2*(x*z+y*w),0],[2*(x*y+z*w),1-2*(x*x+z*z),2*(y*z-x*w),0],[2*(x*z-y*w),2*(y*z+x*w),1-2*(x*x+y*y),0]]; }
      if(A){ if(inv) A=mInv(A); M=mMul(M,A); } });
    return M; }
  function importUSD(file){ file.text().then(function(src){ if(/^PXR-USDC/.test(src)){ toast("This USD file is binary (crate). Inca reads text USD (.usda); save it as .usda in your 3D program first."); return; }
    var root; try{ root=parseUSDA(src); }catch(e){ toast("This USD file could not be read."); return; } var parts=[], up=root.up==="Z"?[[1,0,0,0],[0,0,1,0],[0,-1,0,0]]:MID, looks={};
    (function scan(node,path){ node.kids.forEach(function(k){ var pp=path+"/"+k.name; if(k.type==="Material"){ var col=null; (function sh(n){ n.kids.forEach(function(c){ var d=c.props["inputs:diffuseColor"]; if(Array.isArray(d)&&!col) col=rgbHex(d); sh(c); }); })(k); looks[pp]={name:k.name,col:col}; } scan(k,pp); }); })(root,"");   /* materials first: path, name, color */
    var matOf=function(rel){ var pth=rel&&rel.path, lk=pth&&looks[pth]; if(Array.isArray(rel)) { pth=rel[0]&&rel[0].path; lk=pth&&looks[pth]; } return lk?matByName(lk.name,lk.col).id:null; };
    (function walk(node,M){ node.kids.forEach(function(k){ if(k.type==="Material"||k.type==="Shader"||k.type==="GeomSubset"||k.type==="Scope"&&/Looks|Materials/.test(k.name)) return; var Mk=mMul(M,usdLocal(k)), P=k.props;
      if(k.type==="Mesh"&&P.points&&P.faceVertexCounts&&P.faceVertexIndices){ var pts=P.points, cnt=P.faceVertexCounts, idx=P.faceVertexIndices, F=[], at=0; cnt.forEach(function(c){ F.push(idx.slice(at,at+c)); at+=c; });
        var dc=P["primvars:displayColor"], col=Array.isArray(dc)&&Array.isArray(dc[0])?rgbHex(dc[0]):null, mid=matOf(P["material:binding"]); if(mid==null){ mid=1; if(col&&col!=="#cccccc"){ mid=matByName((k.name||"usd")+"_color",col).id; } }
        var fmats=F.map(function(){ return mid; }); k.kids.forEach(function(c){ if(c.type!=="GeomSubset"||!Array.isArray(c.props.indices)) return; var sm=matOf(c.props["material:binding"]); if(sm!=null) c.props.indices.forEach(function(fi){ if(fi>=0&&fi<fmats.length) fmats[fi]=sm; }); });   /* per-face materials */
        var keep=F.map(function(f2){ return f2.length>=3; }); parts.push({name:k.name.replace(/Shape$/,"")||"usdMesh",V:pts.map(function(p){ return mApply(Mk,p); }),F:F.filter(function(_,i){ return keep[i]; }),mats:fmats.filter(function(_,i){ return keep[i]; })}); }
      walk(k,Mk); }); })(root,up);
    addImported(parts,file.name); }); }
  /* FBX: three.js's reader, loaded on first use (this site's copy, or the same version from jsDelivr in the preview); triangles are merged back where corners meet */
  var fbxLib=null;
  function loadFBXLib(){ if(fbxLib) return fbxLib; var tries=["./fbx-loader.js","https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/FBXLoader.js/+esm"];
    fbxLib=tries.reduce(function(p,u){ return p.catch(function(){ return import(u); }); },Promise.reject()).catch(function(e){ fbxLib=null; throw e; }); return fbxLib; }
  function importFBX(file){ toast("Reading "+file.name+"..."); Promise.all([loadFBXLib(),file.arrayBuffer()]).then(function(r){ var L=r[0], grp; try{ grp=new L.FBXLoader().parse(r[1],""); }catch(e){ toast("This FBX file could not be read."); return; }
      grp.updateMatrixWorld(true); var parts=[];
      grp.traverse(function(m){ if(!m.isMesh||!m.geometry||!m.geometry.attributes.position) return; var g=m.geometry, pos=g.attributes.position, ix=g.index, e=m.matrixWorld.elements, n=ix?ix.count:pos.count, keyMap={}, V=[], F=[], fm=[];
        var mats2=Array.isArray(m.material)?m.material:[m.material], mids=mats2.map(function(mt){ var c=mt&&mt.color?rgbHex([mt.color.r,mt.color.g,mt.color.b]):null; return matByName(mt&&mt.name||"fbxMaterial",c).id; });
        var groupOf=function(t){ var gs=g.groups||[]; for(var q4=0;q4<gs.length;q4++){ if(t*3>=gs[q4].start&&t*3<gs[q4].start+gs[q4].count) return gs[q4].materialIndex||0; } return 0; };
        var vi=function(k){ var x=pos.getX(k), y=pos.getY(k), z=pos.getZ(k), w=[e[0]*x+e[4]*y+e[8]*z+e[12],e[1]*x+e[5]*y+e[9]*z+e[13],e[2]*x+e[6]*y+e[10]*z+e[14]], key=w.map(function(c){ return Math.round(c*1e4); }).join(","); if(keyMap[key]==null){ keyMap[key]=V.length; V.push(w); } return keyMap[key]; };
        for(var t=0;t*3+2<n;t++){ var a=vi(ix?ix.getX(t*3):t*3), b=vi(ix?ix.getX(t*3+1):t*3+1), c=vi(ix?ix.getX(t*3+2):t*3+2); if(a!==b&&b!==c&&a!==c){ F.push([a,b,c]); fm.push(mids[groupOf(t)]||mids[0]); } }
        parts.push({name:m.name||"fbxMesh",V:V,F:F,mats:fm}); });
      addImported(parts,file.name); }).catch(function(){ toast("The FBX reader could not be loaded. Check the connection and try again."); }); }
  function importFiles(files){ files=[].slice.call(files||[]); var by=function(re){ return files.filter(function(f){ return re.test(f.name); }); }, objs=by(/\.obj$/i), mtl=by(/\.mtl$/i)[0], imgs=by(/\.(png|jpe?g|gif|webp|bmp)$/i), usds=by(/\.usda?$/i), fbxs=by(/\.fbx$/i);
    if(!objs.length&&!usds.length&&!fbxs.length){ toast("Pick an .obj (with its .mtl and textures, if you like), a .usda or an .fbx file."); return; }
    objs.forEach(function(f){ importOBJ(f,mtl,imgs); }); usds.forEach(importUSD); fbxs.forEach(importFBX); }
  /* the Export menu: three formats, for the selection or everything */
  function ioMenu(show){ var m=q(".cube-io"), bt=q(".cb-exp"); if(show==null) show=m.hidden; m.hidden=!show; bt.setAttribute("aria-expanded",show?"true":"false"); if(!show) return;
    var n=S.mode==="object"&&osel.length?expList().filter(function(o){ return !o.grp; }).length:0; m.querySelector(".io-what").textContent=n?"Exports the selection ("+n+" object"+(n>1?"s":"")+").":"Exports the whole scene. Select objects to export only those.";
    var r=bt.getBoundingClientRect(); m.style.left=Math.round(Math.max(8,Math.min(innerWidth-m.offsetWidth-8,r.left)))+"px"; var mh=m.offsetHeight; m.style.top=Math.round(r.bottom+8+mh<=innerHeight-8?r.bottom+8:Math.max(8,r.top-8-mh))+"px"; m.querySelector("button").focus(); }   /* above the button when the bar is at the bottom */
  function ioEvents(){ wrap.appendChild(q(".cube-io")); var fi=q(".io-file");   /* the menu lives at the top level, so it is placed on the screen, not inside a column */ q(".cb-imp").addEventListener("click",function(){ fi.value=""; fi.click(); }); fi.addEventListener("change",function(){ importFiles(fi.files); });
    q(".cb-exp").addEventListener("click",function(e){ e.stopPropagation(); ioMenu(); });
    [].forEach.call(qa(".cube-io [data-f]"),function(b){ b.addEventListener("click",function(){ ioMenu(false); var f2=b.getAttribute("data-f"); if(f2==="obj") exportOBJ(); else if(f2==="fbx") exportFBX(); else exportUSD(); }); });
    wrap.addEventListener("pointerdown",function(e){ var m=q(".cube-io"); if(!m.hidden&&!e.target.closest(".cube-io,.cb-exp")) ioMenu(false); },true);
    wrap.addEventListener("dragover",function(e){ if(e.dataTransfer&&[].some.call(e.dataTransfer.types||[],function(t){ return t==="Files"; })){ e.preventDefault(); } });
    wrap.addEventListener("drop",function(e){ if(!e.dataTransfer||!e.dataTransfer.files||!e.dataTransfer.files.length) return; e.preventDefault(); importFiles(e.dataTransfer.files); }); }   /* files can also be dropped onto Inca */
  /* ---- windows (Jakob, 18.10.2026): resize from every edge and corner like in Windows, move by the title, pop out into a browser window of their own
     (which can go to another monitor), save and reset the layout. A window becomes free (wm-float) as soon as it is moved or resized; a double-click
     on its title, or its dock button, puts it back in the automatic layout ---- */
  var WM=[["ge",".cube-ge","Graph Editor"],["tl",".cube-tl","Timeline"],["ol",".cube-ol","Outliner"],["attr",".cube-attr","Channel Box"],["gal",".cube-gal","Gallery"],["mats",".cube-mats","Materials"],["sil",".cube-silw","Silhouette"]], lay={}, popPoll=0;
  var POPI='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-8 8"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>', DOCKI='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 15h16"/></svg>';
  function wmKey(pn){ return pn&&pn.getAttribute("data-wm"); }
  function wmName(k){ var d=WM.filter(function(x){ return x[0]===k; })[0]; return d?d[2]:k; }
  function wmPanel(k){ var d=WM.filter(function(x){ return x[0]===k; })[0]; return d?q(d[1]):null; }
  function wmIsFree(pn){ return !!pn&&(pn.classList.contains("wm-float")||pn.classList.contains("wm-pop")); }
  function wmStyle(pn,p,v){ if(v==null) pn.style.removeProperty(p); else pn.style.setProperty(p,v,"important"); }
  function wmSet(pn,x,y,w,h){ var k=wmKey(pn), vw=innerWidth, vh=innerHeight, onlyX=k==="tl"; w=Math.max(onlyX?360:160,Math.min(vw-8,w)); if(!onlyX) h=Math.max(110,Math.min(vh-8,h));
    x=Math.max(60-w,Math.min(vw-60,x)); y=Math.max(0,Math.min(vh-36,y)); x=Math.round(x); y=Math.round(y); w=Math.round(w); h=Math.round(h);
    wmStyle(pn,"left",x+"px"); wmStyle(pn,"top",y+"px"); wmStyle(pn,"width",w+"px"); if(!onlyX) wmStyle(pn,"height",h+"px"); var st=lay[k]||(lay[k]={}); st.mode="float"; st.x=x; st.y=y; st.w=w; st.h=onlyX?null:h; }
  function wmAfter(pn){ if(wmKey(pn)==="ge"&&geOpen) setGraph(true); }
  function wmFloat(pn,r){ if(pn.classList.contains("wm-float")) return; r=r||pn.getBoundingClientRect(); pn.classList.add("wm-float"); wmSet(pn,r.left,r.top,r.width,r.height); wmBtns(pn); placeAll(); }
  function wmDock(pn,quiet){ if(!pn) return; pn.classList.remove("wm-float"); ["left","top","width","height"].forEach(function(p){ wmStyle(pn,p,null); }); var k=wmKey(pn); if(lay[k]) lay[k].mode="dock"; wmBtns(pn); placeAll(); wmAfter(pn); if(!quiet) snd(440); }
  function wmBtns(pn){ var b=pn.querySelector(".wm-btns"); if(!b) return; var dk=b.querySelector(".wm-dock"); if(dk) dk.hidden=!pn.classList.contains("wm-float"); var pp=b.querySelector(".wm-pop"); if(pp){ var on=pn.classList.contains("wm-pop"); pp.setAttribute("aria-pressed",on?"true":"false"); pp.title=on?"Back into Inca":"Pop out into its own window (it can go to another monitor)"; } }
  /* moving and resizing: the pointer is captured, so a fast drag never loses the window */
  function wmDrag(pn,e,mode){ if(e.button!==0||pn.classList.contains("wm-pop")) return; e.preventDefault(); e.stopPropagation(); var el=e.currentTarget; try{ el.setPointerCapture(e.pointerId); }catch(x){}
    var r0=pn.getBoundingClientRect(), x0=e.clientX, y0=e.clientY, moved=false; root.classList.add("egg-cube-drag");
    var mv=function(ev){ var dx=ev.clientX-x0, dy=ev.clientY-y0; if(!moved){ if(Math.hypot(dx,dy)<4) return; moved=true; wmFloat(pn,r0); }
      var x=r0.left, y=r0.top, w=r0.width, h=r0.height, minW=wmKey(pn)==="tl"?360:160;
      if(mode==="move"){ x+=dx; y+=dy; } else { if(mode.indexOf("e")>=0) w+=dx; if(mode.indexOf("s")>=0) h+=dy; if(mode.indexOf("w")>=0){ w=Math.max(minW,w-dx); x=r0.right-w; } if(mode.indexOf("n")>=0){ h=Math.max(110,h-dy); y=r0.bottom-h; } }
      wmSet(pn,x,y,w,h); if(mode!=="move") wmAfter(pn); };
    var up=function(){ el.removeEventListener("pointermove",mv); el.removeEventListener("pointerup",up); el.removeEventListener("pointercancel",up); root.classList.remove("egg-cube-drag"); if(moved){ snd(480); wmAfter(pn); } };
    el.addEventListener("pointermove",mv); el.addEventListener("pointerup",up); el.addEventListener("pointercancel",up); }
  function wmSetup(){ WM.forEach(function(d){ var pn=q(d[1]); if(!pn||pn.getAttribute("data-wm")) return; pn.setAttribute("data-wm",d[0]);
      (d[0]==="tl"?["e","w"]:["n","s","e","w","ne","nw","se","sw"]).forEach(function(dir){ var h=document.createElement("i"); h.className="wm-h"; h.setAttribute("data-d",dir); h.setAttribute("aria-hidden","true"); pn.appendChild(h); h.addEventListener("pointerdown",function(e){ wmDrag(pn,e,dir); }); });
      var bx=document.createElement("span"); bx.className="wm-btns"; bx.innerHTML='<button type="button" class="wm-dock" hidden title="Back into the layout" aria-label="Back into the layout">'+DOCKI+'</button><button type="button" class="wm-pop" aria-pressed="false" title="Pop out into its own window (it can go to another monitor)" aria-label="Pop out '+d[2]+'">'+POPI+'</button>';
      if(d[0]==="ge"){ var t=pn.querySelector(".ge-top"); t.insertBefore(bx,t.querySelector(".pn-min")||t.querySelector(".ge-x")); } else if(d[0]==="tl") pn.querySelector(".tl-row2").appendChild(bx); else { bx.classList.add("wm-abs"); if(pn.querySelector(".pn-min")) bx.classList.add("wm-abs-min"); pn.appendChild(bx); }
      bx.querySelector(".wm-dock").addEventListener("click",function(){ wmDock(pn); }); bx.querySelector(".wm-pop").addEventListener("click",function(){ if(pn.classList.contains("wm-pop")) popBack(d[0]); else popOut(d[0]); });
      var grips=d[0]==="ge"?[pn.querySelector(".ge-top")]:d[0]==="tl"?[pn,pn.querySelector(".tl-row1"),pn.querySelector(".tl-row2")]:[pn.querySelector("h3")];
      grips.forEach(function(g){ if(!g) return; g.addEventListener("pointerdown",function(e){ if(e.target.closest("button,input,select,textarea,label,a,canvas,.tl-wrap,.wm-h")) return; if(d[0]==="tl"&&e.target!==g) return; wmDrag(pn,e,"move"); });
        g.addEventListener("dblclick",function(e){ if(e.target.closest("button,input,select,textarea,label,a,canvas,.tl-wrap")) return; if(pn.classList.contains("wm-float")) wmDock(pn); }); }); });
    wmLoad();
    /* short phones: the timeline starts minimized (its play row stays), so the 3D view gets about 50 px more; not when a layout of one's own is saved (21.10.2026) */
    try{ if(matchMedia("(max-width:700px) and (max-height:740px)").matches&&!localStorage.getItem("sbh-cube-layout")) setTimeout(function(){ var mb=wrap&&wrap.querySelector(".cube-tl .tl-row2 .pn-min"); if(mb&&!wrap.querySelector(".cube-tl.min")) mb.click(); },0); }catch(e){} }
  /* the layout: saved by the button, applied when Inca opens */
  function wmSnap(){ var out={}; WM.forEach(function(d){ var pn=wmPanel(d[0]), st=lay[d[0]]||{}, o={mode:pn&&pn.classList.contains("wm-pop")?"pop":pn&&pn.classList.contains("wm-float")?"float":"dock"};
      if(st.x!=null){ o.x=st.x; o.y=st.y; o.w=st.w; o.h=st.h; } var p=pops[d[0]]; if(p&&p.win&&!p.win.closed){ try{ st.px=p.win.screenX; st.py=p.win.screenY; st.pw=p.win.innerWidth; st.ph=p.win.innerHeight; }catch(e){} }
      if(st.px!=null){ o.px=st.px; o.py=st.py; o.pw=st.pw; o.ph=st.ph; } out[d[0]]=o; }); return out; }
  function wmSave(){ try{ localStorage.setItem("sbh-cube-layout",JSON.stringify(wmSnap())); snd(660); toast("Layout saved: Inca opens like this next time."); }catch(e){ toast("The layout could not be saved in this browser."); } }
  function wmLoad(){ var L=null; try{ L=JSON.parse(localStorage.getItem("sbh-cube-layout")||"null"); }catch(e){} if(!L) return; var popped=[];
    Object.keys(L).forEach(function(k){ var o=L[k], pn=wmPanel(k); if(!pn) return; lay[k]={mode:o.mode==="pop"?"dock":o.mode,x:o.x,y:o.y,w:o.w,h:o.h,px:o.px,py:o.py,pw:o.pw,ph:o.ph};
      if(o.mode==="float"&&o.x!=null){ pn.classList.add("wm-float"); wmSet(pn,o.x,o.y,o.w,o.h||pn.getBoundingClientRect().height); wmBtns(pn); }
      if(o.mode==="pop"){ popped.push(wmName(k)); var pb=pn.querySelector(".wm-pop"); if(pb) pb.classList.add("wm-hint"); } });
    placeAll(); if(popped.length) setTimeout(function(){ toast("Your layout has "+popped.join(", ")+" popped out. Browsers only open windows on a click: its pop-out button opens it where it was."); },900); }
  /* the saved layout, now (Jakob, 18.10.2026): every window back in its place first, then as saved */
  function wmLoadNow(){ var L=null; try{ L=JSON.parse(localStorage.getItem("sbh-cube-layout")||"null"); }catch(e){} if(!L){ toast("No layout saved yet. Save layout keeps the one you have now."); return; }
    Object.keys(pops).forEach(function(k){ if(!L[k]||L[k].mode!=="pop") popBack(k,true); }); WM.forEach(function(d){ var pn=wmPanel(d[0]); if(pn&&!pn.classList.contains("wm-pop")) wmDock(pn,true); }); lay={};
    wmLoad(); snd(600); toast("Layout loaded."); }
  function wmReset(){ Object.keys(pops).forEach(function(k){ popBack(k,true); }); WM.forEach(function(d){ var pn=wmPanel(d[0]); if(pn){ wmDock(pn,true); var pb=pn.querySelector(".wm-pop"); if(pb) pb.classList.remove("wm-hint"); } }); lay={};
    try{ localStorage.removeItem("sbh-cube-layout"); }catch(e){} placeAll(); snd(420); toast("Layout reset: every window is back in its place. Save layout keeps a new one."); }
  /* popping out: the window moves, live, into a browser window of its own; closing that window brings it back */
  function popOut(k){ var pn=wmPanel(k); if(!pn||pops[k]) return; if(k==="ge"&&!geOpen) setGraph(true); var r=pn.getBoundingClientRect(), st=lay[k]||{}, w=Math.round(st.pw||Math.max(360,r.width)), h=Math.round(st.ph||Math.max(160,r.height));
    var chrome=Math.max(0,(window.outerHeight||0)-innerHeight), left=st.px!=null?st.px:Math.round((window.screenX||0)+r.left+30), top=st.py!=null?st.py:Math.round((window.screenY||0)+chrome+r.top+30), win=null;
    try{ win=window.open("","inca-"+k,"popup=yes,width="+w+",height="+h+",left="+left+",top="+top); }catch(e){ win=null; }
    if(!win){ toast("The browser blocked the pop-out window. Allow pop-ups for this page, then try again."); return; }
    var d=win.document; d.open(); d.write('<!doctype html><html><head><meta charset="utf-8"><title>Inca: '+wmName(k)+'</title></head><body class="egg-pop-body"></body></html>'); d.close();
    var base=d.createElement("base"); base.href=location.href; d.head.appendChild(base); [].forEach.call(document.querySelectorAll('style,link[rel="stylesheet"]'),function(s2){ d.head.appendChild(d.importNode(s2,true)); });
    popSync(d); var host=d.createElement("div"); host.className=wrap.className+" egg-cube-pop"; d.body.appendChild(host);
    pn._home={parent:pn.parentNode,next:pn.nextSibling,free:pn.classList.contains("wm-float")}; host.appendChild(pn); pn.classList.add("wm-pop");
    var p=pops[k]={win:win,host:host,pn:pn};
    win.addEventListener("keydown",function(e){ altKeys(e); key(e); },true); win.addEventListener("keyup",altKeys,true); host.addEventListener("pointerdown",pressSnd,true);   /* the shortcuts work in the popped-out window too */
    win.addEventListener("resize",function(){ wmAfter(pn); }); win.addEventListener("pagehide",function(){ setTimeout(function(){ if(pops[k]===p) popBack(k,true); },0); });
    if(!popPoll) popPoll=setInterval(function(){ Object.keys(pops).forEach(function(kk){ if(pops[kk].win.closed) popBack(kk,true); }); if(!Object.keys(pops).length){ clearInterval(popPoll); popPoll=0; } },700);
    var pb=pn.querySelector(".wm-pop"); if(pb) pb.classList.remove("wm-hint"); wmBtns(pn); placeAll(); setTimeout(function(){ wmAfter(pn); },60); snd(600); toast(wmName(k)+" popped out. Close its window to bring it back."); }
  function popBack(k,quiet){ var p=pops[k]; if(!p) return; delete pops[k]; var pn=p.pn, st=lay[k]||(lay[k]={});
    try{ if(!p.win.closed){ st.px=p.win.screenX; st.py=p.win.screenY; st.pw=p.win.innerWidth; st.ph=p.win.innerHeight; } }catch(e){}
    var hm=pn._home; pn.classList.remove("wm-pop"); if(hm&&hm.parent&&hm.parent.isConnected) hm.parent.insertBefore(pn,hm.next&&hm.next.parentNode===hm.parent?hm.next:null); else if(wrap) wrap.appendChild(pn);
    try{ if(!p.win.closed) p.win.close(); }catch(e){} st.mode=pn.classList.contains("wm-float")?"float":"dock"; wmBtns(pn); placeAll(); setTimeout(function(){ wmAfter(pn); },30); if(!quiet) snd(440); }
  /* the popped-out windows follow the page's look: dark or light, high contrast, magic mode */
  function popSync(d){ var de=document.documentElement; [].forEach.call(de.attributes,function(a){ try{ d.documentElement.setAttribute(a.name,a.value); }catch(e){} }); }
  var popMO=new MutationObserver(function(){ Object.keys(pops).forEach(function(k){ try{ popSync(pops[k].win.document); pops[k].host.className=wrap.className+" egg-cube-pop"; }catch(e){} }); }); popMO.observe(document.documentElement,{attributes:true});
  addEventListener("pagehide",function(){ Object.keys(pops).forEach(function(k){ try{ pops[k].win.close(); }catch(e){} }); });
  /* ---- test objects (Jakob, 18.10.2026): a random shape to try the 3D-to-2D conversion with. Three sliders: Outline (how wavy and jagged the silhouette is),
     Detail (how many polygons), Parts (how many pieces stick out). Extruded (like a cookie cutter) or turned (like a vase), every face pointing outwards ---- */
  var genSeed=1, genSet={o:.5,d:.4,p:.3}; try{ var gs0=JSON.parse(localStorage.getItem("sbh-cube-gen")||"null"); if(gs0) genSet=gs0; }catch(e){}
  function rng(seed){ var s2=seed>>>0||1; return function(){ s2=(s2*1664525+1013904223)>>>0; return s2/4294967296; }; }
  function genShape(set,seed){ var R=rng(seed), V=[], F=[], H=1+Math.round(set.o*9), amp=.06+set.o*.42, harm=[];
    for(var k=1;k<=H;k++) harm.push({k:k+Math.floor(R()*2),a:amp*(R()*.8+.2)/Math.sqrt(k),ph:R()*6.283});
    var rad=function(t){ var r=1; harm.forEach(function(h){ r+=h.a*Math.sin(h.k*t+h.ph); }); return Math.max(.28,r); };
    var orient=function(fc,want){ var n=faceN(V,fc); if(n[0]*want[0]+n[1]*want[1]+n[2]*want[2]<0) fc.reverse(); return fc; };
    var N=Math.round(8+set.d*120), S=Math.round(1+set.d*10), lathe=R()<.5;
    if(!lathe){ var dep=.35+R()*.5, rings=[]; for(var j=0;j<=S;j++){ var z=-dep/2+dep*j/S, ring=[]; for(var i=0;i<N;i++){ var t=i/N*6.283, r=rad(t); ring.push(V.length); V.push([r*Math.cos(t),r*Math.sin(t),z]); } rings.push(ring); }
      for(var j2=0;j2<S;j2++) for(var i2=0;i2<N;i2++){ var a=rings[j2][i2], b=rings[j2][(i2+1)%N], c=rings[j2+1][(i2+1)%N], d=rings[j2+1][i2], tt=(i2+.5)/N*6.283; F.push(orient([a,b,c,d],[Math.cos(tt),Math.sin(tt),0])); }
      [[0,-1],[S,1]].forEach(function(cp){ var ci=V.length; V.push([0,0,cp[0]===0?-dep/2:dep/2]); var rg=rings[cp[0]]; for(var i3=0;i3<N;i3++) F.push(orient([ci,rg[i3],rg[(i3+1)%N]],[0,0,cp[1]])); }); }
    else { var L=Math.round(6+set.d*30), hgt=1.4+R()*1.2, prof=function(u){ return .25+.75*Math.sin(Math.PI*(.08+u*.84))*rad(u*6.283*.5+1.3)*.9; }, rr=[];
      for(var jj=0;jj<=L;jj++){ var u=jj/L, y=-hgt/2+hgt*u, pr=prof(u), ring2=[]; for(var ii=0;ii<N;ii++){ var th=ii/N*6.283; ring2.push(V.length); V.push([pr*Math.cos(th),y,pr*Math.sin(th)]); } rr.push(ring2); }
      for(var j4=0;j4<L;j4++) for(var i4=0;i4<N;i4++){ var th2=(i4+.5)/N*6.283; F.push(orient([rr[j4][i4],rr[j4][(i4+1)%N],rr[j4+1][(i4+1)%N],rr[j4+1][i4]],[Math.cos(th2),0,Math.sin(th2)])); }
      [[0,-1],[L,1]].forEach(function(cp){ var ci2=V.length; V.push([0,cp[0]===0?-hgt/2:hgt/2,0]); var rg2=rr[cp[0]]; for(var i5=0;i5<N;i5++) F.push(orient([ci2,rg2[i5],rg2[(i5+1)%N]],[0,cp[1],0])); }); }
    /* parts: blobs and boxes sticking out of the surface */
    var nP=Math.round(set.p*6), bb=boxBounds3(V);
    for(var pI=0;pI<nP;pI++){ var ang=R()*6.283, base=lathe?[Math.cos(ang)*(bb.r*.9),bb.lo[1]+(bb.hi[1]-bb.lo[1])*(.15+R()*.7),Math.sin(ang)*(bb.r*.9)]:[Math.cos(ang)*rad(ang)*.95,Math.sin(ang)*rad(ang)*.95,0], sz=.18+R()*.35, g2=R()<.5?PRIM.sphere({r:1,sa:Math.max(6,Math.round(6+set.d*16)),sh:Math.max(4,Math.round(4+set.d*10))}):PRIM.cube({w:1,h:1,d:1,sw:1+Math.round(set.d*3),sh:1+Math.round(set.d*3),sd:1+Math.round(set.d*3)}), off=V.length, st=[sz*(R()<.5?1:1.8),sz,sz];
      g2.V.forEach(function(v){ V.push([base[0]+v[0]*st[0],base[1]+v[1]*st[1],base[2]+v[2]*st[2]]); }); g2.F.forEach(function(fc){ F.push(fc.map(function(x){ return x+off; })); }); }
    return {V:V,F:F}; }
  function boxBounds3(V){ var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; V.forEach(function(v){ for(var i=0;i<3;i++){ lo[i]=Math.min(lo[i],v[i]); hi[i]=Math.max(hi[i],v[i]); } }); return {lo:lo,hi:hi,r:Math.max(hi[0]-lo[0],hi[2]-lo[2])/2}; }
  /* ---- models (Jakob, 18.10.2026): five things that exist as 2D objects, built from the primitives into one editable mesh each, to check the conversion
     against a known answer: Fir tree, Mushroom, Snowman, House, Rocket. They land in the scene like a primitive ---- */
  function part(acc,kind,p,sc,tr,ry){ var g=PRIM[kind](Object.assign({},PDEF[kind],p||{})), off=acc.V.length, c=Math.cos((ry||0)*Math.PI/180), s2=Math.sin((ry||0)*Math.PI/180);
    g.V.forEach(function(v){ var x=v[0]*sc[0], y=v[1]*sc[1], z=v[2]*sc[2], xr=x*c+z*s2, zr=-x*s2+z*c; acc.V.push([xr+tr[0],y+tr[1],zr+tr[2]]); }); g.F.forEach(function(fc){ acc.F.push(fc.map(function(i){ return i+off; })); }); }
  var MODELS={
    tree:["pFirTree",function(a){ part(a,"cylinder",{sa:10},[.14,.3,.14],[0,.3,0]); part(a,"cone",{sa:14},[1,1,1],[0,1.3,0]); part(a,"cone",{sa:14},[.8,.9,.8],[0,2.05,0]); part(a,"cone",{sa:14},[.58,.8,.58],[0,2.7,0]); }],
    mushroom:["pMushroom",function(a){ part(a,"cylinder",{sa:12},[.32,.55,.32],[0,.55,0]); part(a,"sphere",{sa:18,sh:9},[1.1,.6,1.1],[0,1.15,0]); }],
    snowman:["pSnowman",function(a){ part(a,"sphere",{},[.9,.85,.9],[0,.85,0]); part(a,"sphere",{},[.65,.62,.65],[0,2.05,0]); part(a,"sphere",{sa:14,sh:8},[.45,.43,.45],[0,2.9,0]); part(a,"cylinder",{sa:16},[.5,.04,.5],[0,3.28,0]); part(a,"cylinder",{sa:16},[.32,.25,.32],[0,3.55,0]); }],
    house:["pHouse",function(a){ part(a,"cube",{},[2,1.3,1.6],[0,.65,0]); part(a,"cone",{sa:4,sh:1},[1.55,.5,1.55],[0,1.8,0],45); part(a,"cube",{},[.22,.5,.22],[.55,2.0,-.35]); }],
    rocket:["pRocket",function(a){ part(a,"cylinder",{sa:16},[.4,1.1,.4],[0,1.45,0]); part(a,"cone",{sa:16},[.4,.45,.4],[0,2.9,0]); [0,120,240].forEach(function(r){ part(a,"cube",{},[.08,.75,.5],[0,.55,.45],r); }); }] };
  function addModel(k){ var m=MODELS[k]; if(!m) return; mark(); var acc={V:[],F:[]}; m[1](acc); var o=obj(uniqueName(m[0]+"1"),acc.V,acc.F); o.model=k; o.mdlSig=shapeSig(o); var n=S.objs.length, ox=2.8*Math.ceil(n/2)*(n%2?1:-1); o.T.t=[ox,0,0]; worldV(o); S.objs.push(o); S.sel=o.id; if(S.mode==="object") osel=[o.id]; hover=null; snd(500); paintAll(); }
  /* Voxel models for every 2D object (Jakob, 19.10.2026): the pixel picture of a library object becomes a voxel mesh, one cube per pixel, thicker towards the middle so it is not a flat plate
     (the depth is the distance to the outline, capped). Each voxel's faces get a plain material in the pixel's color (one material per color, shared). Used by the Library in the Create bar and by
     the way back from the Handbook for objects without a 3D copy; the five hand-built models are used where there is one (HAND) */
  var HAND={conifer:"tree",tree:"tree",mushroom:"mushroom",snowman:"snowman",house:"house",rocket:"rocket"};
  function voxelMesh(k){ return voxelMeshG(E.props.grid?E.props.grid(k):null); }
  /* the same for any pixel grid {w,h,g}, so a drawing from Pict can become a voxel model too (Jakob, 19.10.2026) */
  function voxelMeshG(g){ if(!g) return null; var w=g.w, h=g.h, G=g.g, cap=Math.max(2,Math.round(Math.min(w,h)/4));
    var on=function(x,y){ return x>=0&&y>=0&&x<w&&y<h&&!!G[y][x]; }, D=[], y, x;   /* distance to the nearest empty pixel, 4-neighbours, by rounds */
    for(y=0;y<h;y++){ D.push([]); for(x=0;x<w;x++) D[y].push(on(x,y)?(on(x-1,y)&&on(x+1,y)&&on(x,y-1)&&on(x,y+1)?0:1):0); }
    for(var d=1;d<cap;d++){ var again=false; for(y=0;y<h;y++) for(x=0;x<w;x++) if(on(x,y)&&D[y][x]===0){ var n=Math.min(D[y][x-1]||1e9,D[y][x+1]||1e9,(D[y-1]||[])[x]||1e9,(D[y+1]||[])[x]||1e9); if(n===d){ D[y][x]=d+1; again=true; } } if(!again) break; }
    for(y=0;y<h;y++) for(x=0;x<w;x++) if(on(x,y)&&D[y][x]===0) D[y][x]=cap;   /* the middle of a big shape */
    var u=2.5/h, V=[], F=[], C=[], idx={}, vx=function(a,b,c){ var key=a+","+b+","+c, i2=idx[key]; if(i2==null){ i2=V.length; idx[key]=i2; V.push([(a-w/2)*u,b*u,(c)*u]); } return i2; };
    var depth=function(x,y){ return on(x,y)?Math.min(D[y][x],cap):0; };
    for(y=0;y<h;y++) for(x=0;x<w;x++){ if(!on(x,y)) continue; var t=depth(x,y), z0=-t+1, z1=t, yy=h-1-y, col=G[y][x];   /* thickness 2t-1, centred on z=.5 */
      var add=function(a,b,c,d2){ F.push([a,b,c,d2]); C.push(col); };
      for(var z=z0;z<z1;z++){ if(!(on(x+1,y)&&z>=-depth(x+1,y)+1&&z<depth(x+1,y))) add(vx(x+1,yy,z),vx(x+1,yy+1,z),vx(x+1,yy+1,z+1),vx(x+1,yy,z+1));
        if(!(on(x-1,y)&&z>=-depth(x-1,y)+1&&z<depth(x-1,y))) add(vx(x,yy,z+1),vx(x,yy+1,z+1),vx(x,yy+1,z),vx(x,yy,z));
        if(!(on(x,y-1)&&z>=-depth(x,y-1)+1&&z<depth(x,y-1))) add(vx(x,yy+1,z),vx(x,yy+1,z+1),vx(x+1,yy+1,z+1),vx(x+1,yy+1,z));
        if(!(on(x,y+1)&&z>=-depth(x,y+1)+1&&z<depth(x,y+1))) add(vx(x,yy,z+1),vx(x,yy,z),vx(x+1,yy,z),vx(x+1,yy,z+1)); }
      add(vx(x,yy,z1),vx(x+1,yy,z1),vx(x+1,yy+1,z1),vx(x,yy+1,z1));   /* front */
      add(vx(x,yy+1,z0),vx(x+1,yy+1,z0),vx(x+1,yy,z0),vx(x,yy,z0));   /* back */ }
    return {V:V,F:F,C:C,n:F.length}; }
  function voxMat(col){ var ml=mats(), c=String(col).toLowerCase(); for(var i=0;i<ml.length;i++){ var m=ml[i]; if((m.pat==="none"||!m.pat)&&!m.glow&&String(m.col).toLowerCase()===c) return m.id; } var nm=newMat(null); nm.col=c; nm.name="color"+c.replace("#",""); return nm.id; }
  function voxName(k){ var n=E.props.name(k).replace(/^an? /,""); return "p"+n.split(/[\s-]+/).map(function(w2){ return w2.charAt(0).toUpperCase()+w2.slice(1); }).join("")+"1"; }
  function voxelObj(k){ var g=E.props.grid?E.props.grid(k):null; if(!g) return null; return voxelObjG(g,voxName(k),k); }
  function voxelObjG(g,name,k){ var m=voxelMeshG(g); if(!m) return null; var o=obj(uniqueName(name),m.V,m.F); if(k){ o.vox=k; o.pick2d=k; } o.fm={}; var ids={}; m.C.forEach(function(c,fi){ if(ids[c]==null) ids[c]=voxMat(c); o.fm[fi]=ids[c]; }); return o; }
  function handObj(k){ var hk=HAND[k]; if(!hk||!MODELS[hk]) return null; var acc={V:[],F:[]}; MODELS[hk][1](acc); var o=obj(uniqueName(MODELS[hk][0]+"1"),acc.V,acc.F); o.model=hk; o.mdlSig=shapeSig(o); o.pick2d=k; return o; }
  function addVoxel(k){ if(!E.props.ready){ E.props.load(function(){ addVoxel(k); }); return; } mark(); var o=handObj(k)||voxelObj(k); if(!o){ toast("That object has no picture yet."); return; }
    var mx=-Infinity; S.objs.forEach(function(x){ if(x.vis!==false) x.V.forEach(function(v){ if(v[0]>mx) mx=v[0]; }); }); var w2=0; o.G.forEach(function(v){ if(Math.abs(v[0])>w2) w2=Math.abs(v[0]); });   /* beside the others, to the right, with a gap */
    o.T.t=[isFinite(mx)?mx+w2+.6:0,0,0]; worldV(o); S.objs.push(o); S.sel=o.id; if(S.mode!=="object") setMode("object"); osel=[o.id]; csel={}; hover=null; snd(500); paintAll();
    toast(o.name+" added"+(o.vox?": "+o.F.length+" faces of voxels.":".")); frame(false,1.5);   /* the camera goes to the new object, with room around it so that the timeline does not cover it (19.10.2026) */ }
  /* the Library (Create bar): every object of the Handbook, A to Z, with a search; a click adds its voxel model (or the hand-built one) */
  function libOut(e){ var p=q(".cube-lib"); if(p&&!p.hidden&&!e.target.closest(".cube-lib,.cb-lib")) libPanel(false); }   /* a press anywhere else closes it (the scene's presses land on the page, not on Inca's frame) */
  function libPanel(v){ var p=q(".cube-lib"), bt=q(".cb-lib"); if(!p) return; if(v==null) v=p.hidden; p.hidden=!v; bt.setAttribute("aria-expanded",v?"true":"false"); document.removeEventListener("pointerdown",libOut,true); if(!v) return; document.addEventListener("pointerdown",libOut,true);
    var r=bt.getBoundingClientRect(); p.style.left=Math.round(Math.max(8,Math.min(innerWidth-p.offsetWidth-8,r.left-p.offsetWidth/2+r.width/2)))+"px"; p.style.top=Math.round(r.bottom+8)+"px";
    if(!E.props.ready){ p.querySelector(".sw-grid").innerHTML='<p class="sw-none">Loading the objects\u2026</p>'; E.props.load(function(){ if(!p.hidden) libDraw(); }); } else libDraw(); setTimeout(function(){ p.querySelector(".sw-q").focus(); },30); }
  function libDraw(){ var p=q(".cube-lib"); if(!p||!E.props.ready) return; var nm=function(k){ return E.props.name(k).replace(/^an? /,""); }, qs=p.querySelector(".sw-q").value.trim().toLowerCase();
    var ks=E.props.kinds.filter(function(k){ return !qs||(k+" "+nm(k)).toLowerCase().indexOf(qs)>=0; }).sort(function(x,y){ return nm(x).localeCompare(nm(y)); });
    p.querySelector(".lb-n").textContent=ks.length+(qs?" of "+E.props.kinds.length:"")+" objects"; p.querySelector(".sw-grid").innerHTML=ks.length?ks.map(function(k){ return '<button type="button" class="sw-g" data-k="'+k+'" title="Add '+nm(k)+(HAND[k]?" (hand-built model)":" as a voxel model")+'"><span class="sw-spr">'+E.props.sprite(k)+'</span><small>'+nm(k)+'</small></button>'; }).join(""):'<p class="sw-none">Nothing called that.</p>'; }
  function libEvents(){ var p=q(".cube-lib"); if(!p) return; wrap.appendChild(p); q(".cb-lib").addEventListener("click",function(e){ e.stopPropagation(); libPanel(); });
    p.querySelector(".sw-q").addEventListener("input",libDraw); p.querySelector(".lb-x").addEventListener("click",function(){ libPanel(false); });
    p.querySelector(".sw-q").addEventListener("keydown",function(e){ if(e.key==="Escape"){ e.stopPropagation(); libPanel(false); } });
    p.addEventListener("click",function(e){ var b2=e.target.closest(".sw-g"); if(!b2) return; addVoxel(b2.getAttribute("data-k")); if(!e.shiftKey) libPanel(false); });   /* closed after adding, so it does not cover the new object; Shift keeps it open */
  }
  E.cubeVoxel=function(k){ return voxelMesh(k); };
  /* ---- the Silhouette window (Jakob, 18.10.2026): the outline Inca compares for the selection, live, with what it would become; the view it is taken from ---- */
  var silOpen=true, silSig="", silT=0; try{ silOpen=localStorage.getItem("sbh-cube-silw")!=="0"; }catch(e){}
  function selUnits(){ var objs=S.mode==="object"?osel.map(objById).filter(Boolean):(sel()?[sel()]:[]), out=[]; objs.forEach(function(o){ (o.grp?desc(o):[o]).forEach(function(x){ if(!x.grp&&x.vis&&x.F&&x.F.length&&out.indexOf(x)<0) out.push(x); }); }); return out.length?assemblies(out):[]; }
  function silXform(o){ var out="", n=0; for(var p=o;p&&n<20;p=parentOf(p),n++){ var T=p.T; if(T) out+=[T.t,T.r,T.s,T.p].map(function(v){ return v?v.map(function(x){ return (+x).toFixed(3); }).join(","):""; }).join("|")+(p.piv?"p"+p.piv.join(","):"")+">"; } return out; }   /* move, rotate, scale and pivot of the object and its parents also change the outline (18.10.2026) */
  /* the primitive's type for the 2D match (18.10.2026): with "!" while it is still the plain primitive (not edited, the default proportions, scaled evenly), so its family comes first */
  var PROP_DIMS={cube:["w","h","d"],sphere:["r"],cylinder:["r","h"],cone:["r","h"],torus:["r","sr"],plane:["w","h"],disk:["r"]};
  function shapeSig(o){ var t=o.V.length*7.1; for(var i=0;i<o.V.length;i++) t+=o.V[i][0]*1.3+o.V[i][1]*2.7+o.V[i][2]*3.1; return t.toFixed(3); }
  /* Match colors in Inca (Jakob, 18.10.2026), like Pict: the materials' colors of a unit as shares of the color families, weighted by face area (a pattern's second color counts half) */
  var colMatch=false; try{ colMatch=localStorage.getItem("sbh-cube-colmatch")==="1"; }catch(e){}
  function hexRGB2(h){ h=(h||"#888888").replace("#",""); return [parseInt(h.substr(0,2),16)||0,parseInt(h.substr(2,2),16)||0,parseInt(h.substr(4,2),16)||0]; }
  function unitHist(u){ var H=new Array(51).fill(0), tot=0; u.forEach(function(o){ var P=o.W||o.V; (o.F||[]).forEach(function(fc,fi){ var ar=0; for(var k=1;k<fc.length-1;k++){ var A=P[fc[0]],B=P[fc[k]],C=P[fc[k+1]]; if(!A||!B||!C) continue; var ux=B[0]-A[0],uy=B[1]-A[1],uz=B[2]-A[2],vx=C[0]-A[0],vy=C[1]-A[1],vz=C[2]-A[2]; ar+=Math.hypot(uy*vz-uz*vy,uz*vx-ux*vz,ux*vy-uy*vx)/2; }
      var m=faceMat(o,fi), add=function(hex,w){ var c=hexRGB2(hex); H[E.props.colBin(c[0],c[1],c[2])]+=w; tot+=w; }; add(m.col,ar); if(m.pat&&m.pat!=="none"&&m.pat!=="image") add(m.col2||"#3a3f4b",ar*.5); }); }); if(tot) for(var i=0;i<51;i++) H[i]/=tot; return H; }
  function rankUnit(u,sl,fam,n,edd,M,hint){ if(!colMatch||!E.props.colSim) return (E.props.rank(sl,fam,n,edd,M,hint)||[]).slice(); var rk=E.props.rank(sl,fam,Math.max(60,n),edd,M,hint)||[], Hh=unitHist(u), fl=rk.flip, ar=rk.ar;
    var out=rk.map(function(k,i){ return {k:k,v:i/60+.85*(1-E.props.colSim(Hh,k))}; }).sort(function(x,y){ return x.v-y.v; }).map(function(x){ return x.k; }).slice(0,n); out.flip=fl; out.ar=ar; out.asp=rk.asp; return out; }
  /* the introduction to the silhouette feature: until the camera is moved, the untouched default cube shows a crate first (E.props.intro, read by the ranking); once the reader orbits, pans or zooms, the shape decides (Jakob, 19.10.2026) */
  var cam0=null, camMoved=false;
  function camIntro(){ if(!cam0||camMoved) return false; if(ry!==cam0[0]||rx!==cam0[1]||D!==cam0[2]||pan[0]!==cam0[3]||pan[1]!==cam0[4]||pan[2]!==cam0[5]) camMoved=true; return !camMoved; }
  function famKey(o){ if(o&&o.model&&!o.prim){ var ss0=o.T&&o.T.s||[1,1,1], a0=Math.max(Math.abs(ss0[0]),Math.abs(ss0[1]),Math.abs(ss0[2])), b0=Math.min(Math.abs(ss0[0]),Math.abs(ss0[1]),Math.abs(ss0[2])); return b0>0&&a0/b0<=1.06&&o.mdlSig===shapeSig(o)?"m_"+o.model+"!":null; }   /* an unchanged model from the Create bar: its own family */
    if(!o||!o.prim) return null; var t=o.prim.t; if(o.prim.edited) return t; var ss=o.T&&o.T.s||[1,1,1], mx=Math.max(Math.abs(ss[0]),Math.abs(ss[1]),Math.abs(ss[2])), mn=Math.min(Math.abs(ss[0]),Math.abs(ss[1]),Math.abs(ss[2])); if(mn<=0||mx/mn>1.06) return famStretched(o);
    var d=PDEF[t], p=o.prim.p||{}, ks=PROP_DIMS[t]||[], k0=null; for(var i=0;i<ks.length;i++){ var r=(+p[ks[i]]||d[ks[i]])/d[ks[i]]; if(k0==null) k0=r; else if(Math.abs(r/k0-1)>.06) return famStretched(o); } return t+"!"; }
  /* a stretched primitive: the family its proportions suggest now (a flat cylinder is a disc, a flat cube a plane), only a gentle nudge */
  function famStretched(o){ var t=o.prim.t, p=o.prim.p||{}, d=PDEF[t]||{}, ss=o.T&&o.T.s||[1,1,1], v=function(k){ return +p[k]||d[k]||1; }, X, Y, Z;
    if(t==="cube"){ X=v("w")*Math.abs(ss[0]); Y=v("h")*Math.abs(ss[1]); Z=v("d")*Math.abs(ss[2]); }
    else if(t==="cylinder"||t==="cone"){ X=2*v("r")*Math.abs(ss[0]); Z=2*v("r")*Math.abs(ss[2]); Y=v("h")*Math.abs(ss[1]); }
    else if(t==="sphere"){ X=2*v("r")*Math.abs(ss[0]); Y=2*v("r")*Math.abs(ss[1]); Z=2*v("r")*Math.abs(ss[2]); } else return t;
    var mx=Math.max(X,Y,Z); if(Y<.3*Math.min(X,Z)) return (t==="cube"?"plane":"disk")+"~"; if(Math.min(X,Y,Z)<.3*mx&&t==="cube") return "plane~"; return t+"~"; }
  function silHash(units){ var h=silView+"|"+S.mode+"|"; units.forEach(function(u){ u.forEach(function(o){ var t=0; for(var i=0;i<o.V.length;i+=Math.max(1,Math.floor(o.V.length/40))) t+=o.V[i][0]*1.3+o.V[i][1]*2.7+o.V[i][2]*3.1; h+=o.id+":"+o.V.length+":"+t.toFixed(3)+":"+o.name+":"+silXform(o)+(colMatch?":"+(o.F||[]).map(function(fc,fi){ var m=faceMat(o,fi); return m.id+m.col+(m.col2||"")+(m.pat||""); }).filter(function(v,i,a){ return a.indexOf(v)===i; }).join(","):"")+";"; }); h+="/"; });   /* with Match colors on, the colors count too */ h+=camIntro()?"i":"m"; if(silView==="camera") h+=ry.toFixed(3)+","+rx.toFixed(3)+","+D.toFixed(2); return h; }   /* Front, Side and Top do not depend on the camera */   /* the front view follows the side you look from */
  function paintSil(force){ var p=q(".cube-silw"); if(!p) return; p.hidden=!silOpen; var bt=q(".cb-sil"); if(bt) bt.setAttribute("aria-pressed",silOpen?"true":"false"); if(!silOpen||!E.props||!E.props.ready) return;
    var pk0=p.querySelector(".sw-pick"); if(!force&&(p.matches(":hover")||(pk0&&!pk0.hidden))) return;   /* held still while you point at it or choose (the turntable would keep changing it) */
    var units=selUnits(), sig=silHash(units); if(!force&&sig===silSig) return; silSig=sig; var body=p.querySelector(".sw-body"), cv=p.querySelector(".sw-cv"), info=p.querySelector(".sw-info"), sug=p.querySelector(".sw-sug"); info.classList.remove("sw-ghost");
    [].forEach.call(p.querySelectorAll(".sw-view button"),function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-v")===silView?"true":"false"); });
    var g=cv.getContext("2d"), W=cv.width, H=cv.height; g.clearRect(0,0,W,H);
    var pb=p.querySelector(".sw-place"); if(pb) pb.disabled=!units.length;
    if(!units.length){ info.textContent="Select an object to see its outline."; info.classList.add("sw-ghost"); sug.innerHTML=""; return; }
    var u=units[0], sl=silOf(u), lead=leadOf(u), one=u.length===1, fam=one?famKey(lead):null, edd=!one||!!(lead.prim&&lead.prim.edited), M=E.props.motion?E.props.motion(animOf(lead)):null, hint=hintOf(u);
    var ink=getComputedStyle(p).getPropertyValue("--ink")||"#e8ecf4", sc=Math.min((W-8)/sl.w,(H-8)/sl.h), ox=(W-sl.w*sc)/2, oy=(H-sl.h*sc)/2; g.fillStyle=ink.trim()||"#e8ecf4";
    for(var y=0;y<sl.h;y++) for(var x=0;x<sl.w;x++) if(sl.M[y*sl.w+x]) g.fillRect(Math.floor(ox+x*sc),Math.floor(oy+y*sc),Math.ceil(sc),Math.ceil(sc));
    info.textContent=units.length>1?units.length+" separate objects: shaking them gives a scene. Shown: the first one ("+lead.name+(u.length>1?" and "+(u.length-1)+" more piece"+(u.length>2?"s":""):"")+").":u.length>1?lead.name+" and "+(u.length-1)+" more piece"+(u.length>2?"s":"")+" touching: one object.":lead.name;
    var rk=rankUnit(u,sl,fam,30,edd,M,hint), pin=lead.pick2d&&E.props.kinds.indexOf(lead.pick2d)>=0?lead.pick2d:null; p._rank=rk.slice(); p._unit=u; p._sil=sl;
    if(pin){ rk=[pin].concat(rk.filter(function(k){ return k!==pin; })); } rk=rk.slice(0,3);   /* your choice first */
    var nm=function(k){ return E.props.name(k).replace(/^an? /,""); };
    var fl=p._rank.flip||{};
    var html='<span class="sw-row">'+rk.map(function(k,i){ return '<button type="button" class="sw-it'+(i?"":" first")+(i===0&&pin?" pinned":"")+'" data-k="'+k+'" title="'+nm(k)+(i===0?(pin?" (your choice)":" (what it becomes)"):"")+': click to choose from more">'+'<span class="sw-spr">'+E.props.sprite(k,!!fl[k])+'</span></button>'; }).join("")+'</span><span class="sw-names">'+rk.map(function(k,i){ return i?nm(k):"<b>"+nm(k)+"</b>"+(pin?" (your choice)":""); }).join(" \u00b7 ")+'</span>'; if(sug.innerHTML!==html) sug.innerHTML=html; }   /* the buttons only change when the suggestions do */
  /* the picker: the 30 best suggestions for this outline, or any object by name; a choice becomes this object's own (Jakob, 18.10.2026) */
  function silPick(open){ var p=q(".cube-silw"); if(!p) return; var pk=p.querySelector(".sw-pick"); if(!open){ if(pk) pk.hidden=true; return; } if(!p._unit) return;
    var lead=leadOf(p._unit), nm=function(k){ return E.props.name(k).replace(/^an? /,""); };
    var list=function(qs){ var all=pk&&pk._all; if(!qs&&!all) return p._rank.slice(0,30); var ks=E.props.kinds.filter(function(k){ return !qs||(k+" "+nm(k)).toLowerCase().indexOf(qs)>=0; }).sort(function(x,y){ return nm(x).localeCompare(nm(y)); }); return all?ks:ks.slice(0,80); };   /* Show all (18.10.2026): every object, A to Z */
    var draw=function(){ var qs=pk.querySelector(".sw-q").value.trim().toLowerCase(), ks=list(qs); pk.querySelector(".sw-grid").innerHTML=ks.length?ks.map(function(k){ return '<button type="button" class="sw-g'+(lead.pick2d===k?" on":"")+'" data-k="'+k+'" title="'+nm(k)+'"><span class="sw-spr">'+E.props.sprite(k)+'</span><small>'+nm(k)+'</small></button>'; }).join(""):'<p class="sw-none">Nothing called that.</p>'; };
    if(!pk){ pk=document.createElement("div"); pk.className="sw-pick"; pk.innerHTML='<div class="sw-ph"><b>What it becomes</b><button type="button" class="sw-px" aria-label="Close">\u00d7</button></div><input type="search" class="sw-q" placeholder="Search all objects" aria-label="Search all objects"><div class="sw-grid"></div><div class="sw-pbar"><button type="button" class="sw-auto">Automatic</button></div>'; p.appendChild(pk);
      pk.querySelector(".sw-q").addEventListener("input",draw); pk.querySelector(".sw-px").addEventListener("click",function(){ silPick(false); });
      pk.querySelector(".sw-auto").addEventListener("click",function(){ var ld=leadOf(p._unit); if(ld.pick2d){ mark(); delete ld.pick2d; } silPick(false); toast("Automatic again: the outline decides."); paintSil(true); });
      pk.addEventListener("click",function(e){ var b2=e.target.closest(".sw-g"); if(!b2) return; var k=b2.getAttribute("data-k"), ld=leadOf(p._unit); mark(); ld.pick2d=k; if(E.props.learn&&p._sil) E.props.learn(p._sil,k); silPick(false); toast(ld.name+" becomes "+E.props.name(k)+" when you bring it to the Handbook."); paintSil(true); }); }
    pk.hidden=false; pk.querySelector(".sw-q").value=""; pk._all=false; draw(); setTimeout(function(){ pk.querySelector(".sw-q").focus(); },30); }   /* the sprites in a row, their names in one line below */
  /* Place (Jakob, 18.10.2026): the selection into the Handbook without dragging, as what it would become; the same drop as a shake, at the first free spot */
  function placeSel(){ if(!sel()||carry){ toast("Select an object to place."); return; } if(!E.props||!E.props.ready){ if(E.props) E.props.load(); toast("One moment: the objects are still loading."); return; }
    E.props.freePoint(80,function(pt){ if(!pt){ toast("No free spot in the Handbook right now: remove something there first."); return; } var ev={clientX:pt.x,clientY:pt.y}; startCarry(ev); if(!carry) return; carry.click=true; drawGhost(); moveCarry(ev); }); }   /* in the hand at a free spot: it follows the mouse, a click places it (18.10.2026) */
  function cancelCarry(){ var c=carry; if(!c) return; carry=null; root.classList.remove("egg-carrying"); if(E.props.dropHint) E.props.dropHint(); c.g.remove(); c.ln.remove(); c.objs.forEach(function(o){ o.vis=true; }); toast("Canceled: still in the scene."); paintAll(); paintSil(true); }   /* refreshed now, even with the pointer still on the window */
  function setSilView(v){ silView=v; try{ localStorage.setItem("sbh-cube-silview",v); }catch(e){} snd(600); toast({front:"Matching from the front.",side:"Matching from the side.",top:"Matching from the top.",camera:"Matching from your camera: the view you have now is what counts."}[v]); paintSil(true); }
  function setSilOpen(v){ silOpen=v; try{ localStorage.setItem("sbh-cube-silw",v?"1":"0"); }catch(e){} paintSil(true); placeAll(); }
  function makeTest(){ mark(); genSeed=(Date.now()&0xffff)+Math.floor(Math.random()*1e6); var g=genShape(genSet,genSeed), o=obj(uniqueName("pTest1"),g.V,g.F), k=S.objs.length; o.T.t=[2.8*Math.ceil(k/2)*(k%2?1:-1),0,0]; worldV(o); S.objs.push(o);
    if(S.mode!=="object") setMode("object"); osel=[o.id]; S.sel=o.id; hover=null; snd(620); toast(o.name+": "+g.F.length+" faces. Shake it while dragging to bring it into the Handbook."); paintAll(); }
  function genPanel(v){ var p=q(".cube-gen"), bt=q(".cb-gen"); if(v==null) v=p.hidden; p.hidden=!v; bt.setAttribute("aria-expanded",v?"true":"false"); if(!v) return; var r=bt.getBoundingClientRect(); p.style.left=Math.round(Math.max(8,Math.min(innerWidth-p.offsetWidth-8,r.left-p.offsetWidth/2+r.width/2)))+"px"; p.style.top=Math.round(r.bottom+8)+"px"; }
  function genEvents(){ var p=q(".cube-gen"); wrap.appendChild(p); q(".cb-gen").addEventListener("click",function(e){ e.stopPropagation(); genPanel(); });
    [].forEach.call(p.querySelectorAll("input[type=range]"),function(inp){ inp.value=Math.round(genSet[inp.getAttribute("data-g")]*100); inp.addEventListener("input",function(){ genSet[inp.getAttribute("data-g")]=inp.value/100; try{ localStorage.setItem("sbh-cube-gen",JSON.stringify(genSet)); }catch(x){} }); });
    p.querySelector(".gen-go").addEventListener("click",makeTest);
    wrap.addEventListener("pointerdown",function(e){ if(!p.hidden&&!e.target.closest(".cube-gen,.cb-gen")) genPanel(false); },true); }
  function push(arr,c,col){ arr.push(c[0],c[1],c[2],col[0],col[1],col[2],col[3]); }
  function drawArr(arr,mode){ if(!arr.length) return; gl.bindBuffer(gl.ARRAY_BUFFER,buf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(arr),gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(aP); gl.vertexAttribPointer(aP,3,gl.FLOAT,false,28,0); gl.enableVertexAttribArray(aC); gl.vertexAttribPointer(aC,4,gl.FLOAT,false,28,12); gl.drawArrays(mode,0,arr.length/7); }
  function faceList(){ var out=[]; S.objs.forEach(function(o,oi){ if(!o.vis) return; o.F.forEach(function(fc,fi){ out.push({o:oi,f:fi}); }); }); return out; }
  function tris(color){ var a=[], g=0, Cs=S.objs.map(camO); S.objs.forEach(function(o,oi){ if(!o.vis) return; var C=Cs[oi]; o.F.forEach(function(fc,fi){ var col=color(oi,fi,fc,C,g++); for(var k=1;k<fc.length-1;k++){ push(a,C[fc[0]],col); push(a,C[fc[k]],col); push(a,C[fc[k+1]],col); } }); }); return a; }
  function render(){ gl.useProgram(prog); gl.uniform3f(uS,2*f/W,2*f/H,D);
    gl.bindFramebuffer(gl.FRAMEBUFFER,null); gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT); gl.enable(gl.DEPTH_TEST); gl.depthFunc(gl.LEQUAL);
    gl.disable(gl.CULL_FACE); gl.enable(gl.POLYGON_OFFSET_FILL);   /* both sides: the depth buffer hides the back of closed shapes anyway */ gl.polygonOffset(1.5,2);
    var so=sel(), si=so?S.objs.indexOf(so):-1;
    if(dmode==="lit") litStart(); if(dmode!=="wire"){ var TM=trisM(function(oi,fi,fc,C){   /* materials (18.10.2026): the shading is multiplied with the face's material; a 5th value marks a highlighted face, which stays plain */
      var o=S.objs[oi], mm=matMul(o,fi), mf=faceMat(o,fi), objHov=S.mode==="object"&&hover&&hover.o===oi, fHov=S.mode!=="object"&&hover&&hover.t==="face"&&hover.o===oi&&hover.i===fi, oSel=S.mode==="object"&&osel.indexOf(o.id)>=0, fSel=S.mode!=="object"&&csel[o.id+":f:"+fi];
      var tint=function(c){ return [Math.min(1,c*mm[0]),Math.min(1,c*mm[1]),Math.min(1,c*mm[2]+.015)]; };
      if(dmode==="flat"){ var u=.62, bu=tint(mf.glow?.745:u); if(fHov) return [u+.16,u+.12,u-.08,1,1]; if(fSel) return [.86,.5,.2,1,1]; if(objHov&&!oSel) return [Math.min(1,bu[0]+.1),Math.min(1,bu[1]+.08),Math.max(0,bu[2]-.02),1]; if(oSel) return [Math.min(1,bu[0]+.03),Math.min(1,bu[1]+.05),Math.min(1,bu[2]+.14),1]; return [bu[0],bu[1],bu[2],1]; }   /* unshaded: no light */
      if(dmode==="lit"&&!fHov&&!fSel) return litFace(o,oi,fi,fc,C,mm,mf,objHov,oSel);
      var n=faceN(C,fc), cc=C[fc[0]], front=dot(n,[-cc[0],-cc[1],D-cc[2]])>=0; if(!front) n=[-n[0],-n[1],-n[2]]; var l=.38+.62*Math.max(0,dot(n,LIGHT)), c=mf.glow?.745:(70+120*l)/255*(front?1:.82), bc=tint(c);   /* a back side is a little darker, as in Maya; a glowing material ignores the light */
      if(fHov) return [Math.min(1,c+.16),Math.min(1,c+.12),Math.max(0,c-.08),1,1];
      if(fSel) return [c*.55+.45*.96,c*.55+.45*.55,c*.55+.45*.2,1,1];   /* selected faces: orange, as in Maya */
      if(objHov&&!oSel) return [Math.min(1,bc[0]+.09),Math.min(1,bc[1]+.08),Math.max(0,bc[2]+.01),1];
      if(oSel){ var hb=objHov?.05:0; return [Math.min(1,bc[0]*.82+.1+hb),Math.min(1,bc[1]*.86+.12+hb),Math.min(1,bc[2]*.9+.22+hb),1]; }   /* selected objects in Object Mode: tinted blue */
      return [bc[0],bc[1],bc[2],1]; }); drawArr(TM.plain,gl.TRIANGLES); drawTex(TM.groups); }
    if(showGrid){ var GL2=[], NG=10, gc=inkCol; for(var gi=-NG;gi<=NG;gi++){ var al=gi===0?.6:.26, gcol=[gc[0]*al,gc[1]*al,gc[2]*al,al];   /* the floor grid, like Maya's: the middle lines stronger */
        push(GL2,camP([gi,0,-NG]),gcol); push(GL2,camP([gi,0,NG]),gcol); push(GL2,camP([-NG,0,gi]),gcol); push(GL2,camP([NG,0,gi]),gcol); }
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA); gl.depthMask(false); drawArr(GL2,gl.LINES); gl.depthMask(true); gl.disable(gl.BLEND); }
    gl.disable(gl.POLYGON_OFFSET_FILL); gl.disable(gl.CULL_FACE); var wire=dmode==="wire", wc=inkCol; if(wire) gl.disable(gl.DEPTH_TEST);   /* wireframe: every edge, also the ones behind, like Maya */
    var L=[], LS=[], P=[], PS=[], OR=[1,.55,.16,1]; S.objs.forEach(function(o,oi){ if(!o.vis) return; var C=camO(o), seen={}, osl=S.mode==="object"&&osel.indexOf(o.id)>=0, lc=osl?(wire?[.95,.76,.31,1]:[.16,.22,.36,1]):wire?wc:[.08,.09,.11,1], comp=S.mode!=="object", sf={};
      if(comp) o.F.forEach(function(fc,fi){ if(csel[o.id+":f:"+fi]) fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length]; sf[Math.min(k,m)+"_"+Math.max(k,m)]=1; }); });
      o.F.forEach(function(fc){ fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length], key=k<m?k+"_"+m:m+"_"+k; if(seen[key]) return; seen[key]=1; var on=comp&&(csel[o.id+":e:"+key]||(wire&&sf[key])); push(on?LS:L,C[k],on?OR:lc); push(on?LS:L,C[m],on?OR:lc); }); });
      if(S.mode==="multi"||S.mode==="vert") o.V.forEach(function(v,k){ if(csel[o.id+":v:"+k]) push(PS,C[k],OR); else push(P,C[k],wire?wc:[.08,.09,.11,1]); }); });
    drawArr(L,gl.LINES); drawArr(LS,gl.LINES); gl.uniform1f(uZ,4.5*R); drawArr(P,gl.POINTS); gl.uniform1f(uZ,7*R); drawArr(PS,gl.POINTS); gl.enable(gl.DEPTH_TEST);
    if(S.mode==="object"&&osel.length){ if(wire) gl.disable(gl.DEPTH_TEST); drawArr(selOutline(),gl.LINES); gl.enable(gl.DEPTH_TEST); }   /* the gold outline, hidden by whatever is in front of it (Jakob, 18.10.2026) */
    g2.clearRect(0,0,W,H);
    if(hover&&hover.t==="edge"&&(S.mode==="multi"||S.mode==="edge")){ var C1=camO(S.objs[hover.o]), a=scr(C1[hover.a]), b=scr(C1[hover.b]); g2.beginPath(); g2.moveTo(a[0],a[1]); g2.lineTo(b[0],b[1]); g2.lineWidth=3.4*R; g2.strokeStyle="#f2c14e"; g2.lineCap="round"; g2.stroke(); }
    if(hover&&hover.t==="vert"&&(S.mode==="multi"||S.mode==="vert")){ var C2=camO(S.objs[hover.o]), q=scr(C2[hover.i]); g2.beginPath(); g2.arc(q[0],q[1],5.5*R,0,7); g2.fillStyle="#f2c14e"; g2.fill(); g2.lineWidth=1.5*R; g2.strokeStyle="#1b1f2a"; g2.stroke(); }
    if(box&&box.moved){ var bx0=Math.min(box.x0,box.x1)*R, by0=Math.min(box.y0,box.y1)*R, bw=Math.abs(box.x1-box.x0)*R, bh=Math.abs(box.y1-box.y0)*R; g2.fillStyle="rgba(127,198,230,.12)"; g2.fillRect(bx0,by0,bw,bh); g2.setLineDash([6*R,4*R]); g2.strokeStyle="#7fc6e6"; g2.lineWidth=1.3*R; g2.strokeRect(bx0,by0,bw,bh); g2.setLineDash([]); }
    drawGizmo(); drawPivot(); drawCut(); drawBrush(); }
  /* Object Mode: a selected object gets a gold outline around its whole silhouette (the edges between its faces stay quiet) */
  /* while the pivot is edited: a gold ring with a dot at the pivot */
  function drawPivot(){ if(!pivMode||S.mode!=="object") return; var o=leadObj(); if(!o) return; var c=camP(pivotW(o)); if(D-c[2]<=1.05) return; var p2=scr(c);
    g2.beginPath(); g2.arc(p2[0],p2[1],9*R,0,7); g2.strokeStyle="#f2c14e"; g2.lineWidth=2.2*R; g2.stroke(); g2.beginPath(); g2.arc(p2[0],p2[1],2.6*R,0,7); g2.fillStyle="#f2c14e"; g2.fill(); }
  /* the outline as 3D lines: five 1 px lines a pixel apart make it about 3 px wide (WebGL draws lines 1 px wide), and the depth test hides what is behind something */
  function selOutline(){ var out=[], GOLD=[.949,.757,.306,1], offs=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];
    S.objs.forEach(function(o){ if(!o.vis||osel.indexOf(o.id)<0) return; var C=camO(o), EF={};
      o.F.forEach(function(fc){ var n=faceN(C,fc), cc=C[fc[0]], front=dot(n,[-cc[0],-cc[1],D-cc[2]])>=0; fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length], key=k<m?k+"_"+m:m+"_"+k; (EF[key]=EF[key]||[]).push(front); }); });
      Object.keys(EF).forEach(function(key){ var fl=EF[key]; if(!(fl.length===1||fl.some(Boolean)&&fl.some(function(x){ return !x; }))) return; var ab=key.split("_").map(Number), A=C[ab[0]], B=C[ab[1]], ka=(D-A[2])/f*1.15*R, kb=(D-B[2])/f*1.15*R;
        offs.forEach(function(d){ push(out,[A[0]+d[0]*ka,A[1]-d[1]*ka,A[2]],GOLD); push(out,[B[0]+d[0]*kb,B[1]-d[1]*kb,B[2]],GOLD); }); }); });
    return out; }
  function drawSelOutline(){ var ids=osel.slice(); if(!ids.length) return; S.objs.forEach(function(o){ if(!o.vis||ids.indexOf(o.id)<0) return; var C=camO(o), P=C.map(scr), EF={};
      o.F.forEach(function(fc){ var n=faceN(C,fc), cc=C[fc[0]], front=dot(n,[-cc[0],-cc[1],D-cc[2]])>=0; fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length], key=k<m?k+"_"+m:m+"_"+k; (EF[key]=EF[key]||[]).push(front); }); });
      g2.beginPath(); Object.keys(EF).forEach(function(key){ var f=EF[key]; if(f.length===1||f.some(Boolean)&&f.some(function(x){ return !x; })){ var ab=key.split("_").map(Number); g2.moveTo(P[ab[0]][0],P[ab[0]][1]); g2.lineTo(P[ab[1]][0],P[ab[1]][1]); } });
      g2.strokeStyle="#f2c14e"; g2.lineWidth=2.6*R; g2.lineCap="round"; g2.lineJoin="round"; g2.stroke(); }); }   /* silhouette: edges between a face turned towards the camera and one turned away, plus open borders */
  function idPass(){ gl.bindFramebuffer(gl.FRAMEBUFFER,fb.f); gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT); gl.enable(gl.DEPTH_TEST); gl.disable(gl.CULL_FACE);
    drawArr(tris(function(oi,fi,fc,C,g){ var n=g+1; return [(n&255)/255,((n>>8)&255)/255,0,1]; }),gl.TRIANGLES); gl.disable(gl.CULL_FACE); }
  function readId(px,py,r){ var x0=Math.max(0,Math.round(px-r)), y0=Math.max(0,Math.round(H-py-r)), w=Math.min(W-x0,2*r+1), h=Math.min(H-y0,2*r+1); if(w<=0||h<=0) return null; var d=new Uint8Array(w*h*4); gl.readPixels(x0,y0,w,h,gl.RGBA,gl.UNSIGNED_BYTE,d); return {x0:x0,y0:y0,w:w,h:h,d:d}; }
  function idAt(b,px,py){ var x=Math.round(px)-b.x0, y=Math.round(H-py)-b.y0; if(x<0||y<0||x>=b.w||y>=b.h) return -2; var o=(y*b.w+x)*4; if(b.d[o+3]===0) return -1; return b.d[o]+(b.d[o+1]<<8)-1; }
  function seenAt(b,p,own){ if(dmode==="wire") return true; var hit=false; [[0,0],[3,0],[-3,0],[0,3],[0,-3]].forEach(function(dd){ var id=idAt(b,p[0]+dd[0]*R,p[1]+dd[1]*R); if(id===-2) return; if(id===-1||own.indexOf(id)>=0) hit=true; }); return hit; }
  function segDist(p,a,b){ var dx=b[0]-a[0], dy=b[1]-a[1], l=dx*dx+dy*dy||1, t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/l)); return [Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy),t]; }
  var touch=false;
  function pick(cx,cy){ if(!gl||!S) return null; var px=cx*R, py=cy*R, rv=(touch?24:10)*R, re=(touch?16:6)*R; idPass(); var b=readId(px,py,Math.ceil(rv+6*R)); gl.bindFramebuffer(gl.FRAMEBUFFER,null); if(!b) return null;
    var FL=faceList(), base={}; FL.forEach(function(x,g){ if(base[x.o]==null) base[x.o]=g; });
    var id=idAt(b,px,py), faceHit=id>=0?{t:"face",o:FL[id].o,i:FL[id].f}:null;
    if(S.mode==="object"||S.mode==="face") return faceHit;   /* Object Mode: anything on an object picks the object; Face: the face under the pointer */
    var wantV=S.mode==="multi"||S.mode==="vert", wantE=S.mode==="multi"||S.mode==="edge"; if(S.mode==="edge") re*=1.6;
    var best=null, bd=1e9;
    S.objs.forEach(function(o,oi){ if(!o.vis) return; var C=camO(o), Sc=C.map(scr), own=function(k){ var r=[]; o.F.forEach(function(fc,fi){ if(fc.indexOf(k)>=0) r.push(base[oi]+fi); }); return r; };
      if(wantV) o.V.forEach(function(v,k){ var d=Math.hypot(Sc[k][0]-px,Sc[k][1]-py); if(d<rv&&d<bd&&seenAt(b,Sc[k],own(k))){ bd=d; best={t:"vert",o:oi,i:k}; } });
      if(best||!wantE) return;
      var seen={}; o.F.forEach(function(fc){ fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length], key=k<m?k+"_"+m:m+"_"+k; if(seen[key]) return; seen[key]=1; var sd=segDist([px,py],Sc[k],Sc[m]);
        if(sd[0]<re&&sd[0]<bd){ var q=[Sc[k][0]+(Sc[m][0]-Sc[k][0])*sd[1],Sc[k][1]+(Sc[m][1]-Sc[k][1])*sd[1]], ok=own(k).filter(function(x){ return own(m).indexOf(x)>=0; }); if(seenAt(b,q,ok)){ bd=sd[0]; best={t:"edge",o:oi,a:k,b:m}; } } }); }); });
    return best||(S.mode==="multi"?faceHit:null); }
  function extrude(o,fi){ var fc=o.F[fi], nv=fc.map(function(k){ o.V.push(o.V[k].slice()); return o.V.length-1; }); fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length]; o.F.push([k,m,nv[(j+1)%fc.length],nv[j]]); }); o.F[fi]=nv; return nv; }
  function moveBy(o,ids,dx,dy){ var C=camO(o), d=0; ids.forEach(function(k){ d+=(D-C[k][2])/ids.length; }); var w=unrot([dx*R*d/f,-dy*R*d/f,0]); ids.forEach(function(k){ o.V[k]=[o.V[k][0]+w[0],o.V[k][1]+w[1],o.V[k][2]+w[2]]; }); }
  /* sounds (Jakob, 18.10.2026): one soft click for everything, its pitch a little higher or lower by what happened; a button plays it when pressed,
     not when let go, and the action it starts adds no second sound; the end of a drag still clicks on release */
  /* only the interface clicks (Jakob, 18.10.2026): a press on a button or another control, and the keys that change the interface (tools, modes, display,
     grid, manipulator size); moving, rotating, scaling, extruding, cutting or carrying objects is silent */
  var bare=false;   /* Hide page (Jakob, 18.10.2026): only Inca on the page's background */
  /* Hide Names (Jakob, 19.10.2026): the people\u2019s names and their tasks on the Who to Ask card go invisible (the rows keep their size, so placed objects stay where they are); only while Inca is open */
  var noNames=false; function setNames(v){ noNames=!!v; root.classList.toggle("inca-nonames",noNames); var b=q(".cb-names"); if(b){ b.setAttribute("aria-pressed",noNames?"true":"false"); twinSet(b,noNames,TWIN[".cb-names"]); b.title=noNames?"Show the text on the Who to Ask card again":"Hide the text on the Who to Ask card";   /* "Hide Text" since 19.10.2026 (was Hide Names) */ } }
  function setBare(v){ bare=!!v; root.classList.toggle("inca-bare",bare); var b=q(".cb-bare"); if(b){ b.setAttribute("aria-pressed",bare?"true":"false"); twinSet(b,bare,TWIN[".cb-bare"]); b.title=bare?"Show the page again":"Hide the page: only Inca on the background"; } }
  new MutationObserver(function(){ if(bare&&root.classList.contains("egg-carrying")) setBare(false); }).observe(root,{attributes:true,attributeFilter:["class"]});   /* picking something up needs Who to Ask: the page comes back */
  var sndQuiet=0, sndUI=0, sndOn=true; try{ sndOn=localStorage.getItem("sbh-cube-sound")!=="0"; }catch(e){}   /* Inca's own sound switch (18.10.2026) */
  function pageMuted(){ return root.classList.contains("quiet")||root.classList.contains("mute"); }
  function paintSound(){ var want=!!wrap&&!sndOn; if(root.classList.contains("inca-mute")!==want) root.classList.toggle("inca-mute",want);   /* Inca's switch off: the whole handbook is silent while Inca is open (Jakob, 19.10.2026); the page's audio() and its sound engine watch this class */
    if(!wrap) return; var b=q(".cb-snd"); if(!b) return;   /* Inca closed: nothing to show */ var on=sndOn&&!pageMuted(); b.setAttribute("aria-pressed",on?"true":"false"); btnText(b,on?"Sounds: on":pageMuted()?"Sounds: off (the page is muted)":"Sounds: off"); b.classList.toggle("off",!on); }
  function setSound(v,init){ sndOn=v; if(!init) try{ localStorage.setItem("sbh-cube-sound",v?"1":"0"); }catch(e){} paintSound(); if(v&&!init&&E.tick) E.tick(900,.045); }
  new MutationObserver(paintSound).observe(root,{attributes:true,attributeFilter:["class"]});   /* the page's Mute silences Inca too, and the switch shows it (18.10.2026) */
  function snd(fq){ if(!sndOn||Date.now()<sndQuiet||Date.now()>sndUI) return; sndUI=0; if(E.tick) E.tick(Math.max(480,Math.min(1250,(fq||600)*1.55)),.05); }
  function pressSnd(e){ if(e.button!==0) return; var b=e.target.closest&&e.target.closest("button,select,[role=button],.ol-it,.mt-sw,.gs-ch"); if(!b||b.disabled||b.getAttribute("aria-disabled")==="true") return; if(b.classList.contains("cb-snd")) return; if(sndOn&&E.tick) E.tick(900,.045); sndQuiet=Date.now()+650; }

  /* ---- selection, tools and pointer (Jakob, 17.10.2026: "Inca") ----
     Modes: Object, Multi, Vertex, Edge, Face (bar, marking menu, F8 to F11). Click selects; Shift toggles, Ctrl removes, Ctrl+Shift adds, like Maya;
     a press on empty page space (not on text or links) and a drag draws a selection box; a click there clears the selection.
     Tools: Q select, W move, E rotate, R scale, with a manipulator at the selection; Shift + drag on the move manipulator with faces selected extrudes them.
     With W, E or R, dragging straight on a selected part moves it in the screen plane. The canvases still let every other click through to the page. */
  var pending=null, camDrag=null, swallow=false, menu=null, tool="move", osel=[], csel={}, box=null, gzDrag=null, gzHover=null;
  var hotNow=false, shiftDown=false, ctxUntil=0;
  function hot(on){ hotNow=on; var pt=tool==="paint"&&!!wrap; root.classList.toggle("egg-cube-hot",!!on&&!pt); root.classList.toggle("egg-cube-hot-face",false); root.classList.toggle("egg-cube-paint",pt); }   /* painting: a crosshair over the whole viewport */
  function inUI(e){ return e.target&&e.target.closest&&e.target.closest(".egg-cube .cube-ui,.egg-cube .cube-sheetbar,.egg-prop"); }
  function objById(id){ for(var i=0;i<S.objs.length;i++) if(S.objs[i].id===id) return S.objs[i]; return null; }
  function ckey(it){ return it.id+":"+it.t+":"+(it.t==="e"?it.a+"_"+it.b:it.i); }
  function itemOf(h){ var o=S.objs[h.o]; if(S.mode==="object") return {id:o.id,t:"o"}; if(h.t==="vert") return {id:o.id,t:"v",i:h.i};
    if(h.t==="edge") return {id:o.id,t:"e",a:Math.min(h.a,h.b),b:Math.max(h.a,h.b)}; return {id:o.id,t:"f",i:h.i}; }
  function isSel(it){ return it.t==="o"?osel.indexOf(it.id)>=0:!!csel[ckey(it)]; }
  function setSel(it,on){ if(it.t==="o"){ var i=osel.indexOf(it.id); if(on&&i<0) osel.push(it.id); if(!on&&i>=0) osel.splice(i,1); } else { var k=ckey(it); if(on) csel[k]=it; else delete csel[k]; } }
  var addMode=false;   /* the "Add" switch in the bar: every click behaves like Shift + click, for selecting several objects without a keyboard (Jakob, 17.10.2026) */
  function howOf(e){ var c=e.ctrlKey||e.metaKey; return c&&e.shiftKey?"add":c?"remove":e.shiftKey||addMode?"toggle":"replace"; }
  function setAdd(v){ addMode=v; var bt=wrap&&wrap.querySelector(".cb-add"); if(bt) bt.setAttribute("aria-pressed",v?"true":"false"); }
  /* ---- paint select (Jakob, 18.10.2026), like Maya's: drag over the model and every visible part under the brush is added; Ctrl paints them off;
     B + drag left or right sets the brush size; a click on empty space clears the selection ---- */
  var brushR=24, paintS=null, ptr=null, bKey=false, bAdj=null;
  function paintAt(a2,b2,how){ var r=brushR*R, A=[a2[0]*R,a2[1]*R], B=[b2[0]*R,b2[1]*R], inside=function(p){ return segDist(p,A,B)[0]<=r; };
    idPass(); var buf=readRect(Math.min(A[0],B[0])-r-4*R,Math.min(A[1],B[1])-r-4*R,Math.max(A[0],B[0])+r+4*R,Math.max(A[1],B[1])+r+4*R); gl.bindFramebuffer(gl.FRAMEBUFFER,null); if(!buf) return 0;
    var FL=faceList(), base={}, items=[], seenF={}; FL.forEach(function(x,g){ if(base[x.o]==null) base[x.o]=g; });
    if(S.mode==="face"||S.mode==="object"){ for(var yy=0;yy<buf.h;yy++) for(var xx=0;xx<buf.w;xx++){ var px=buf.x0+xx, py=H-(buf.y0+yy); if(!inside([px,py])) continue; var o4=(yy*buf.w+xx)*4; if(buf.d[o4+3]===0) continue; var id=buf.d[o4]+(buf.d[o4+1]<<8)-1; if(id<0||seenF[id]||!FL[id]) continue; seenF[id]=1;
        var ob=S.objs[FL[id].o]; if(S.mode==="object"){ if(!items.some(function(x){ return x.id===ob.id; })) items.push({id:ob.id,t:"o"}); } else items.push({id:ob.id,t:"f",i:FL[id].f}); } }   /* faces seen under the brush */
    else S.objs.forEach(function(o,oi){ if(!o.vis||!o.F.length) return; var Sc=camO(o).map(scr), own=function(k){ var rr=[]; o.F.forEach(function(fc,fi){ if(fc.indexOf(k)>=0) rr.push(base[oi]+fi); }); return rr; };
      if(S.mode==="vert"||S.mode==="multi") Sc.forEach(function(p,k){ if(inside(p)&&seenAt(buf,p,own(k))) items.push({id:o.id,t:"v",i:k}); });
      if(S.mode==="edge"){ var seen={}; o.F.forEach(function(fc){ fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length], lo=Math.min(k,m), hi=Math.max(k,m), key=lo+"_"+hi; if(seen[key]) return; seen[key]=1;
        var mid=[(Sc[lo][0]+Sc[hi][0])/2,(Sc[lo][1]+Sc[hi][1])/2]; if(inside(mid)&&seenAt(buf,mid,own(lo).filter(function(x){ return own(hi).indexOf(x)>=0; }))) items.push({id:o.id,t:"e",a:lo,b:hi}); }); }); } });
    items=items.filter(function(it){ return how==="remove"?isSel(it):!isSel(it); }); if(items.length) selApply(items,how); return items.length; }
  E.cubePaintDbg=function(a2,b2){ var r=brushR*R, A=[a2[0]*R,a2[1]*R], B=[b2[0]*R,b2[1]*R], o=S.objs[S.objs.length-1], Sc=camO(o).map(scr), n=0; Sc.forEach(function(p){ if(segDist(p,A,B)[0]<=r) n++; }); return {inside:n,R:R,brush:brushR,mode:S.mode,vis:o.vis,first:Sc[0]}; };
  function drawBrush(){ if(tool!=="paint"||!ptr||camDrag||menu) return; var c=bAdj?[bAdj.cx,bAdj.cy]:ptr, rm=paintS?paintS.how==="remove":ctrlDown; g2.beginPath(); g2.arc(c[0]*R,c[1]*R,brushR*R,0,7);
    g2.strokeStyle=rm?"#e6a08c":"#f2c14e"; g2.lineWidth=(bAdj?2.4:1.6)*R; g2.setLineDash(bAdj?[]:[5*R,4*R]); g2.stroke(); g2.setLineDash([]); g2.beginPath(); g2.arc(c[0]*R,c[1]*R,1.6*R,0,7); g2.fillStyle=g2.strokeStyle; g2.fill(); }
  function selApply(items,how){ extr=null; if(how==="replace"){ if(S.mode==="object") osel=[]; else csel={}; }
    items.forEach(function(it){ var on=isSel(it); setSel(it,how==="remove"?false:how==="toggle"?!on:true); if(it.t==="o"&&isSel(it)) S.sel=it.id; else if(it.t!=="o"&&isSel(it)) S.sel=it.id; });
    if(S.mode==="object"&&osel.length&&osel.indexOf(S.sel)<0) S.sel=osel[osel.length-1]; paintAll(); }
  function anySel(){ return S.mode==="object"?osel.length>0:Object.keys(csel).length>0; }
  function cleanSel(){ osel=osel.filter(objById); Object.keys(csel).forEach(function(k){ var it=csel[k], o=objById(it.id);
      if(!o||(it.t==="v"&&it.i>=o.V.length)||(it.t==="f"&&it.i>=o.F.length)||(it.t==="e"&&(it.a>=o.V.length||it.b>=o.V.length))) delete csel[k]; }); }
  function selVerts(){ var m={}; function add(id,k){ (m[id]=m[id]||{})[k]=1; }
    if(S.mode==="object") osel.forEach(function(id){ var o=objById(id); if(o&&o.vis) o.V.forEach(function(v,k){ add(id,k); }); });
    else Object.keys(csel).forEach(function(k){ var it=csel[k], o=objById(it.id); if(!o||!o.vis) return; if(it.t==="v") add(it.id,it.i); else if(it.t==="e"){ add(it.id,it.a); add(it.id,it.b); } else if(o.F[it.i]) o.F[it.i].forEach(function(j){ add(it.id,j); }); });
    var out={}; Object.keys(m).forEach(function(id){ out[id]=Object.keys(m[id]).map(Number); }); return out; }
  function selCentre(sv){ var c=[0,0,0], n=0; Object.keys(sv).forEach(function(id){ var o=objById(+id); sv[id].forEach(function(k){ var v=o.V[k]; c[0]+=v[0]; c[1]+=v[1]; c[2]+=v[2]; n++; }); }); return n?[c[0]/n,c[1]/n,c[2]/n]:null; }
  function camP(p){ var c=rot(p); return [c[0]+pan[0],c[1]+pan[1],c[2]+pan[2]]; }
  function readRect(x0,y0,x1,y1){ var ax=Math.max(0,Math.round(Math.min(x0,x1))), ay=Math.max(0,Math.round(H-Math.max(y0,y1))), w=Math.min(W-ax,Math.round(Math.abs(x1-x0))+1), h=Math.min(H-ay,Math.round(Math.abs(y1-y0))+1);
    if(w<=0||h<=0) return null; var d=new Uint8Array(w*h*4); gl.readPixels(ax,ay,w,h,gl.RGBA,gl.UNSIGNED_BYTE,d); return {x0:ax,y0:ay,w:w,h:h,d:d}; }

  /* ---- the manipulator: arrows (move), rings (rotate), boxes (scale); X red, Y green, Z blue, the active handle gold ---- */
  var AX={x:[1,0,0],y:[0,1,0],z:[0,0,1]}, AXC={x:"#e2574c",y:"#5bb46a",z:"#4a8fe7"};
  var pivMode=false, pivLock=false;   /* D held, or Insert to switch it on and off: edit the pivot, like Maya */
  /* ---- manipulator space, plane handles, the extrude handle (Jakob, 18.10.2026) ----
     World, Local (the object's own axes) or Component (the selected parts' normal), like Maya; squares between two axes move or scale in that plane */
  var gspace="world"; try{ gspace=localStorage.getItem("sbh-cube-space")||"world"; }catch(e){}
  function setSpace(v){ gspace=v; try{ localStorage.setItem("sbh-cube-space",v); }catch(e){} if(wrap) [].forEach.call(qa(".ch-space button"),function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-sp")===v?"true":"false"); }); }
  function colsOf(M){ return ["x","y","z"].reduce(function(acc,a,i){ var v=[M[0][i],M[1][i],M[2][i]], l=Math.hypot(v[0],v[1],v[2])||1; acc[a]=[v[0]/l,v[1]/l,v[2]/l]; return acc; },{}); }
  function compAxes(){ var n=[0,0,0], ids={}; Object.keys(csel).forEach(function(k){ var it=csel[k], o=objById(it.id); if(!o) return; ids[it.id]=1;
      var add=function(fi){ var fn=faceN(o.V,o.F[fi]); n[0]+=fn[0]; n[1]+=fn[1]; n[2]+=fn[2]; };
      if(it.t==="f"&&o.F[it.i]) add(it.i); else o.F.forEach(function(fc,fi){ if((it.t==="v"&&fc.indexOf(it.i)>=0)||(it.t==="e"&&fc.indexOf(it.a)>=0&&fc.indexOf(it.b)>=0)) add(fi); }); });
    if(Math.hypot(n[0],n[1],n[2])<1e-9) return null; var Z=norm(n), ref=Math.abs(Z[1])<.9?[0,1,0]:[1,0,0], X=norm(cross(ref,Z)), Y=cross(Z,X); return {x:X,y:Y,z:Z}; }
  /* Gimbal (Jakob, 18.10.2026), like Maya: the rotate rings follow the rotation channels (order X, Y, Z), so a ring changes only its own channel */
  function gimbalAxes(o){ var T=trOf(o), P=mParent(o), rz=m3Rot([0,0,T.r[2]]), ryz=m3Rot([0,T.r[1],T.r[2]]), loc={x:[ryz[0][0],ryz[1][0],ryz[2][0]],y:[rz[0][1],rz[1][1],rz[2][1]],z:[0,0,1]}, out={};
    Object.keys(loc).forEach(function(k){ var v=loc[k]; out[k]=norm([P[0][0]*v[0]+P[0][1]*v[1]+P[0][2]*v[2],P[1][0]*v[0]+P[1][1]*v[1]+P[1][2]*v[2],P[2][0]*v[0]+P[2][1]*v[1]+P[2][2]*v[2]]); }); return out; }
  function spaceAxes(lead,gt){ var objLocal=function(o){ return o?colsOf(mWorld(o)):null; };
    if(S.mode==="object"&&gt==="rotate"&&gspace==="gimbal"&&lead) return gimbalAxes(lead);
    if(S.mode==="object"){ if(gt==="scale"||gspace!=="world") return objLocal(lead)||AX; return AX; }   /* whole objects always scale along their own axes */
    if(gspace==="comp") return compAxes()||AX;
    if(gspace==="local"){ var k=Object.keys(csel)[0], o=k?objById(csel[k].id):null; return objLocal(o)||AX; } return AX; }
  /* the mouse as a ray into the scene, and where it meets a plane */
  function rayAt(cx,cy){ var px=cx*R, py=cy*R, d=[(px-W/2)/f,-(py-H/2)/f,-1], E=[-pan[0],-pan[1],D-pan[2]]; return {o:unrot(E),d:norm(unrot(d))}; }
  function hitPlane(ray,C,N){ var dn=dot(ray.d,N); if(Math.abs(dn)<.04) return null; var t=dot(sub(C,ray.o),N)/dn; return [ray.o[0]+ray.d[0]*t,ray.o[1]+ray.d[1]*t,ray.o[2]+ray.d[2]*t]; }
  function inQuad(p,q){ var s=0; for(var i=0;i<4;i++){ var a=q[i], b=q[(i+1)%4], c=(b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0]); if(c!==0){ if(s===0) s=c>0?1:-1; else if((c>0?1:-1)!==s) return false; } } return true; }
  /* ---- Keep faces together (on by default, like Maya): neighboring selected faces extrude as one block; off, every face on its own ---- */
  var keepTog=true; try{ keepTog=localStorage.getItem("sbh-cube-keep")!=="0"; }catch(e){}
  function setKeep(v){ keepTog=v; try{ localStorage.setItem("sbh-cube-keep",v?"1":"0"); }catch(e){} var b=wrap&&q(".cb-keep"); if(b){ b.setAttribute("aria-pressed",v?"true":"false"); btnText(b,v?"Keep Faces together: on":"Keep Faces together: off"); } }
  function regionExtrude(o,fis){ var set={}, nv={}, cnt={}; fis.forEach(function(fi){ set[fi]=1; });
    fis.forEach(function(fi){ var fc=o.F[fi]; fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length], key=Math.min(k,m)+"_"+Math.max(k,m); cnt[key]=(cnt[key]||0)+1; }); });
    fis.forEach(function(fi){ o.F[fi].forEach(function(k){ if(nv[k]==null){ o.V.push(o.V[k].slice()); nv[k]=o.V.length-1; } }); });
    fis.forEach(function(fi){ var fc=o.F[fi]; fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length], key=Math.min(k,m)+"_"+Math.max(k,m); if(cnt[key]===1) o.F.push([k,m,nv[m],nv[k]]); }); });   /* walls only on the outline of the block */
    fis.forEach(function(fi){ o.F[fi]=o.F[fi].map(function(k){ return nv[k]; }); }); }
  /* extrude the selected faces; returns what the thickness handle needs: for every new corner where it starts and which way it goes */
  function extrudeFaces(fs){ var by={}; fs.forEach(function(it){ (by[it.id]=by[it.id]||[]).push(it.i); }); var items=[];
    Object.keys(by).forEach(function(id){ var o=objById(+id); if(!o) return; var fis=by[id].filter(function(fi){ return o.F[fi]; }); if(!fis.length) return;
      if(keepTog) regionExtrude(o,fis); else fis.forEach(function(fi){ extrude(o,fi); }); if(o.prim) o.prim.edited=true;
      var acc={}; fis.forEach(function(fi){ var n=faceN(o.V,o.F[fi]); o.F[fi].forEach(function(k){ var a=acc[k]||(acc[k]=[0,0,0]); a[0]+=n[0]; a[1]+=n[1]; a[2]+=n[2]; }); });
      var dirs={}, base={}; Object.keys(acc).forEach(function(k){ dirs[k]=norm(acc[k]); base[k]=o.V[k].slice(); }); items.push({id:o.id,fis:fis,dirs:dirs,base:base}); });
    return items; }
  var extr=null;   /* after Ctrl+E: the thickness handle, until the selection, the tool or the mode changes */
  function extrHandle(){ if(!extr||S.mode==="object") return null; var n=[0,0,0], c=[0,0,0], m=0, faces=[];
    extr.items.forEach(function(it){ var o=objById(it.id); if(!o) return; it.fis.forEach(function(fi){ var fc=o.F[fi]; if(!fc) return; var fn=faceN(o.V,fc), fc0=cen(fc.map(function(k){ return o.V[k]; })); n=[n[0]+fn[0],n[1]+fn[1],n[2]+fn[2]]; c=[c[0]+fc0[0],c[1]+fc0[1],c[2]+fc0[2]]; m++; faces.push({c:fc0,n:fn}); }); });
    if(!m) return null; return {C:[c[0]/m,c[1]/m,c[2]/m],N:Math.hypot(n[0],n[1],n[2])>1e-9?norm(n):faces[0].n,faces:faces}; }
  /* show or hide the grid (Jakob, 18.10.2026; on by default, like Maya) */
  var showGrid=false; try{ showGrid=localStorage.getItem("sbh-cube-grid2")==="1"; }catch(e){}   /* off by default (Jakob, 18.10.2026: too intrusive) */
  function setGrid(v){ showGrid=v; try{ localStorage.setItem("sbh-cube-grid2",v?"1":"0"); }catch(e){} var bt=wrap&&q(".cb-grid"); if(bt){ bt.setAttribute("aria-pressed",v?"true":"false"); btnText(bt,v?"Grid: on":"Grid: off"); bt.title=(v?"Grid: on":"Grid: off")+" (G)"; } }
  /* the manipulator's size, + and - like Maya (Jakob, 18.10.2026) */
  var gzSize=1; try{ gzSize=Math.max(.5,Math.min(2.5,+localStorage.getItem("sbh-cube-gizmo")||1)); }catch(e){}
  function sizeGizmo(d){ gzSize=Math.max(.5,Math.min(2.5,Math.round(gzSize*(d>0?1.15:1/1.15)*100)/100)); try{ localStorage.setItem("sbh-cube-gizmo",gzSize); }catch(e){} snd(d>0?620:480); toast("Manipulator size "+Math.round(gzSize*100)+" %."); }
  /* pickwalk, like Maya: up to the parent, down to the first child, left and right to the neighbors */
  function pickwalk(dir){ var o=sel(); if(S.mode!=="object"||!o) return false; var t=null;
    if(dir==="up") t=parentOf(o); else if(dir==="down") t=kids(o)[0]||null; else { var sib=o.par!=null&&objById(o.par)?kids(objById(o.par)):S.objs.filter(function(x){ return x.par==null||!objById(x.par); }), i=sib.indexOf(o); t=sib[i+(dir==="right"?1:-1)]||null; }
    if(!t){ snd(260); return true; } osel=[t.id]; S.sel=t.id; hover=null; snd(500); paintAll(); return true; }
  /* keys on only Translate, Rotate or Scale: Shift + W, E, R, like Maya */
  function setKeyCh(which){ var ts=targets(); if(!ts.length){ toast("Nothing selected."); return; } var chs={w:["tx","ty","tz"],e:["rx","ry","rz"],r:["sx","sy","sz"]}[which], nm={w:"Translate",e:"Rotate",r:"Scale"}[which];
    mark(); ts.forEach(function(o){ setKeyAt(o,S.frame,chs); }); gdirty=true; snd(620); toast("Key set for "+(ts.length===1?ts[0].name:ts.length+" objects")+" at frame "+S.frame+": "+nm+"."); paintAll(); }
  /* Ctrl + H hides, Shift + H shows the selection, like Maya (H still switches) */
  function setVisSel(v){ var list=S.mode==="object"?osel.map(objById).filter(Boolean):(sel()?[sel()]:[]); if(!list.length){ toast("Select something first."); return; } mark(); list.forEach(function(o){ o.vis=v; desc(o).forEach(function(c){ c.vis=v; }); }); hover=null; snd(v?560:420); toast(list.length===1?list[0].name+(v?" shown.":" hidden."):list.length+" objects "+(v?"shown.":"hidden.")); paintAll(); }
  /* the Graph Editor: F frames the selected keys, A everything, like Maya */
  function geFrameSel(){ var o=sel(), ks=geSelKeys(o); if(!ks.length){ gView=null; gdirty=true; return; } var f0=Math.min.apply(null,ks.map(function(x){ return x.f; })), f1=Math.max.apply(null,ks.map(function(x){ return x.f; })), v0=Math.min.apply(null,ks.map(function(x){ return x.v; })), v1=Math.max.apply(null,ks.map(function(x){ return x.v; }));
    var fs=Math.max(8,f1-f0), vs=Math.max(.4,v1-v0); gView={f0:(f0+f1)/2-fs*.65,f1:(f0+f1)/2+fs*.65,v0:(v0+v1)/2-vs*.7,v1:(v0+v1)/2+vs*.7}; gdirty=true; }
  function gtool(){ return pivMode&&S.mode==="object"?"move":tool; }   /* D held or Insert: the pivot is moved with the move manipulator */
  function leadObj(){ var o=sel(); if(o&&osel.indexOf(o.id)>=0) return o; return osel.length?objById(osel[osel.length-1]):null; }
  function tops(){ var list=osel.map(objById).filter(function(o){ return o&&o.vis!==false; }); return list.filter(function(o){ return !list.some(function(p2){ return p2!==o&&isDesc(o,p2); }); }); }
  function rotM(A,th){ var c=[[1,0,0],[0,1,0],[0,0,1]].map(function(e){ return rodrigues(e,A,th); }); return [0,1,2].map(function(i){ return [c[0][i],c[1][i],c[2][i],0]; }); }
  function gizmo(){ var gt=gtool(); if(gt==="select"||gt==="cut"||gt==="paint"||!anySel()||box) return null; var lead=S.mode==="object"?leadObj():null, Cw;
    var eh=gt==="move"&&!pivMode?extrHandle():null;
    if(eh){ var C0=eh.C, cc0=camP(C0), w0=D-cc0[2]; if(w0<=1.05) return null; var sc0=scr(cc0), G0=85*R*gzSize, L0=G0*w0/f, tip=scr(camP([C0[0]+eh.N[0]*L0,C0[1]+eh.N[1]*L0,C0[2]+eh.N[2]*L0]));
      return {ex:true,Cw:C0,sc:sc0,w:w0,len:L0,G:G0,e:tip,N:eh.N,faces:eh.faces.map(function(fa){ var a2=scr(camP(fa.c)), b2=scr(camP([fa.c[0]+fa.n[0]*L0*.35,fa.c[1]+fa.n[1]*L0*.35,fa.c[2]+fa.n[2]*L0*.35])); return [a2,b2]; }),ax:{x:{e:tip,ring:[]},y:{e:tip,ring:[]},z:{e:tip,ring:[]}},A:AX}; }   /* after Ctrl+E: one thickness arrow, and a small one on every extruded face */
    if(gzDrag){ Cw=gzDrag.Cw; if(gt==="move"&&gzDrag.mvNow) Cw=[Cw[0]+gzDrag.mvNow[0],Cw[1]+gzDrag.mvNow[1],Cw[2]+gzDrag.mvNow[2]]; } else if(S.mode==="object") Cw=lead?pivotW(lead):null; else Cw=selCentre(selVerts()); if(!Cw) return null;
    var cc=camP(Cw), w=D-cc[2]; if(w<=1.05) return null; var AXS=gzDrag?gzDrag.A:spaceAxes(lead,gt);
    var sc=scr(cc), G=85*R*gzSize, len=G*w/f, g={Cw:Cw,sc:sc,w:w,len:len,G:G,ax:{},A:AXS,pl:{},piv:pivMode&&S.mode==="object"};
    ["x","y","z"].forEach(function(a){ var A=AXS[a], e=scr(camP([Cw[0]+A[0]*len,Cw[1]+A[1]*len,Cw[2]+A[2]*len])), ring=[];
      if(gt==="rotate"){ var U=norm(cross(A,Math.abs(A[1])<.9?[0,1,0]:[1,0,0])), V2=cross(A,U); for(var t=0;t<=64;t++){ var th=t/64*Math.PI*2, dv=[0,1,2].map(function(i){ return Math.cos(th)*U[i]+Math.sin(th)*V2[i]; }), p=[0,1,2].map(function(i){ return Cw[i]+len*dv[i]; }), sp=scr(camP(p)); sp.front=rot(dv)[2]>-.04; ring.push(sp); } }   /* like Maya: only the half facing you counts */
      g.ax[a]={e:e,ring:ring}; });
    if(gt==="move"||gt==="scale") ["x","y","z"].forEach(function(n){ var o2=["x","y","z"].filter(function(k){ return k!==n; }), B1=AXS[o2[0]], B2=AXS[o2[1]], s0=.74*len, s1=.94*len;   /* twice as far from the center as before (Jakob, 20.10.2026), same size */
      g.pl[n]=[[s0,s0],[s1,s0],[s1,s1],[s0,s1]].map(function(uv){ return scr(camP([0,1,2].map(function(i){ return Cw[i]+B1[i]*uv[0]+B2[i]*uv[1]; }))); }); });   /* squares between two axes: move or scale in that plane; the color is the axis they do not touch, like Maya */
    return g; }
  function gizmoHit(g,px,py){ if(!g) return null; var gt=gtool(), best=null, bd=11*R;   /* generous, and checked before the objects, so a handle is grabbed even over a shape */
    if(g.ex){ var sd0=segDist([px,py],g.sc,g.e); return (sd0[0]<11*R||Math.hypot(px-g.e[0],py-g.e[1])<14*R)?"n":null; }
    if(gt!=="rotate"&&Math.hypot(px-g.sc[0],py-g.sc[1])<12*R) return "c";
    /* the squares: inside, or within 9 px of the outline (Jakob, 21.10.2026: seen at an angle a square is a thin sliver and was nearly impossible to hit); the nearest wins */
    if(g.pl){ var pb=null, pd=9*R; for(var n in g.pl){ var q=g.pl[n]; if(!q) continue; if(inQuad([px,py],q)) return "p"+n; for(var qi=0;qi<4;qi++){ var dq=segDist([px,py],q[qi],q[(qi+1)%4])[0]; if(dq<pd){ pd=dq; pb=n; } } } if(pb) return "p"+pb; }
    ["x","y","z"].forEach(function(a){ var d;
      if(gt==="rotate"){ var rg=g.ax[a].ring; for(var i=1;i<rg.length;i++){ if(!rg[i].front||!rg[i-1].front) continue; d=segDist([px,py],rg[i-1],rg[i])[0]; if(d<bd){ bd=d; best=a; } } }
      else { var sd=segDist([px,py],g.sc,g.ax[a].e); if(sd[1]>.08&&sd[0]<bd){ bd=sd[0]; best=a; } var e2=g.ax[a].e, de=Math.hypot(px-e2[0],py-e2[1]); if(de<13*R&&de<bd){ bd=de; best=a; } } });
    if(!best&&gt==="rotate"&&Math.abs(Math.hypot(px-g.sc[0],py-g.sc[1])-g.G*1.25)<9*R) best="v";
    if(!best&&gt==="rotate"&&Math.hypot(px-g.sc[0],py-g.sc[1])<g.G*.96) best="b";   /* inside the ball: free rotation, like Maya's trackball */
    return best; }
  function drawGizmo(){ var g=gizmo(); if(!g) return; var act=gzDrag?gzDrag.h:gzHover;
    if(g.ex){ g.faces.forEach(function(f2){ g2.beginPath(); g2.moveTo(f2[0][0],f2[0][1]); g2.lineTo(f2[1][0],f2[1][1]); g2.strokeStyle="rgba(127,198,230,.9)"; g2.lineWidth=1.6*R; g2.stroke(); g2.beginPath(); g2.arc(f2[1][0],f2[1][1],2.4*R,0,7); g2.fillStyle="rgba(127,198,230,.95)"; g2.fill(); });   /* where every face will go */
      var on=act==="n", dx0=g.e[0]-g.sc[0], dy0=g.e[1]-g.sc[1], l0=Math.hypot(dx0,dy0)||1, ux0=dx0/l0, uy0=dy0/l0, s9=11*R; g2.beginPath(); g2.moveTo(g.sc[0],g.sc[1]); g2.lineTo(g.e[0],g.e[1]); g2.strokeStyle=on?"#f2c14e":"#4a8fe7"; g2.lineWidth=(on?3.4:2.6)*R; g2.stroke();
      g2.beginPath(); g2.moveTo(g.e[0]+ux0*s9,g.e[1]+uy0*s9); g2.lineTo(g.e[0]-uy0*s9*.55,g.e[1]+ux0*s9*.55); g2.lineTo(g.e[0]+uy0*s9*.55,g.e[1]-ux0*s9*.55); g2.closePath(); g2.fillStyle=on?"#f2c14e":"#4a8fe7"; g2.fill(); return; }
    function hot(a){ var pa=act&&act.length===2&&act.charAt(0)==="p"?act.charAt(1):null; return a===act||(!!pa&&"xyz".indexOf(a)>=0&&a!==pa); }   /* a square between two axes lights up the two arrows it moves (Jakob, 20.10.2026) */
  function col(a){ return hot(a)?"#f2c14e":a==="c"?"#f5f0d8":a==="v"?"#7fc6e6":AXC[a]; }
    g2.lineCap="round"; g2.lineJoin="round";
    if(gtool()==="rotate"){ var bh=act==="b";   /* the ball: a faint disc you can grab for free rotation */
      g2.beginPath(); g2.arc(g.sc[0],g.sc[1],g.G,0,7); g2.fillStyle=bh?"rgba(242,193,78,.10)":"rgba(160,170,190,.07)"; g2.fill(); g2.strokeStyle=bh?"rgba(242,193,78,.55)":"rgba(160,170,190,.35)"; g2.lineWidth=1*R; g2.stroke();
      var dg=gzDrag&&gzDrag.thNow!=null&&gzDrag.h!=null?gzDrag:null;
      if(dg&&(dg.h==="v"||dg.screenAng)){ g2.beginPath(); g2.moveTo(g.sc[0],g.sc[1]); var a0=dg.a0, a1=a0+dg.dScr; g2.arc(g.sc[0],g.sc[1],g.G*.94,a0,a1,dg.dScr<0); g2.closePath(); g2.fillStyle="rgba(242,193,78,.22)"; g2.fill(); g2.strokeStyle="rgba(242,193,78,.7)"; g2.lineWidth=1*R; g2.stroke(); }   /* the turned angle, like Maya's pie */
      ["x","y","z"].forEach(function(a){ var rg=g.ax[a].ring; g2.beginPath(); var pen=false; rg.forEach(function(p,i){ if(!p.front){ pen=false; return; } if(pen) g2.lineTo(p[0],p[1]); else { g2.moveTo(p[0],p[1]); pen=true; } }); g2.strokeStyle=col(a); g2.lineWidth=(a===act?3.4:2.4)*R; g2.stroke(); });
      g2.beginPath(); g2.arc(g.sc[0],g.sc[1],g.G*1.25,0,7); g2.strokeStyle=col("v"); g2.lineWidth=("v"===act?3:1.8)*R; g2.stroke();
      if(dg){ var deg=dg.thNow*180/Math.PI, tx=(deg>=0?"+":"")+deg.toFixed(1)+"\u00b0"; g2.font="700 "+Math.round(12*R)+"px ui-monospace,Menlo,Consolas,monospace"; var tw=g2.measureText(tx).width+10*R, bx=g.sc[0]+g.G*1.3, by=g.sc[1]-g.G*1.1;
        g2.fillStyle="rgba(27,31,42,.85)"; g2.fillRect(bx,by-10*R,tw,20*R); g2.fillStyle="#f2c14e"; g2.textAlign="left"; g2.textBaseline="middle"; g2.fillText(tx,bx+5*R,by); }   /* how far it turned, in degrees */
      return; }
    ["x","y","z"].forEach(function(a){ var e=g.ax[a].e, dx=e[0]-g.sc[0], dy=e[1]-g.sc[1], l=Math.hypot(dx,dy)||1, ux=dx/l, uy=dy/l;
      g2.beginPath(); g2.moveTo(g.sc[0],g.sc[1]); g2.lineTo(e[0],e[1]); g2.strokeStyle=col(a); g2.lineWidth=(hot(a)?3.2:2.2)*R; g2.stroke(); g2.fillStyle=col(a);
      if(gtool()==="move"){ var s=10*R; g2.beginPath(); g2.moveTo(e[0]+ux*s,e[1]+uy*s); g2.lineTo(e[0]-uy*s*.5,e[1]+ux*s*.5); g2.lineTo(e[0]+uy*s*.5,e[1]-ux*s*.5); g2.closePath(); g2.fill(); }
      else { var b=5*R; g2.fillRect(e[0]-b,e[1]-b,2*b,2*b); } });
    if(g.pl) Object.keys(g.pl).forEach(function(n){ var qd=g.pl[n], hn=act==="p"+n; g2.beginPath(); qd.forEach(function(p,i){ if(i) g2.lineTo(p[0],p[1]); else g2.moveTo(p[0],p[1]); }); g2.closePath(); g2.globalAlpha=hn?.9:.6; g2.fillStyle=hn?"#f2c14e":AXC[n]; g2.fill(); g2.globalAlpha=1; g2.strokeStyle=hn?"#f2c14e":AXC[n]; g2.lineWidth=1.3*R; g2.stroke(); });
    var cb=6*R; if(gtool()==="move"){ var cb2=7*R; g2.strokeStyle="rgba(20,22,30,.55)"; g2.lineWidth=3.4*R; g2.strokeRect(g.sc[0]-cb2,g.sc[1]-cb2,2*cb2,2*cb2); g2.strokeStyle=act==="c"?"#f2c14e":"#f5f0d8"; g2.lineWidth=(act==="c"?2.4:1.7)*R; g2.strokeRect(g.sc[0]-cb2,g.sc[1]-cb2,2*cb2,2*cb2); return; }   /* move: an open square, like Maya, so it is not taken for the scale box */
    g2.fillStyle=col("c"); g2.strokeStyle="#1b1f2a"; g2.lineWidth=1.2*R; g2.fillRect(g.sc[0]-cb,g.sc[1]-cb,2*cb,2*cb); g2.strokeRect(g.sc[0]-cb,g.sc[1]-cb,2*cb,2*cb); }
  function rodrigues(v,A,th){ var c=Math.cos(th), s=Math.sin(th), d=dot(A,v), x=cross(A,v); return [v[0]*c+x[0]*s+A[0]*d*(1-c),v[1]*c+x[1]*s+A[1]*d*(1-c),v[2]*c+x[2]*s+A[2]*d*(1-c)]; }
  /* middle-drag anywhere drives the handle used last, like Maya (Jakob, 18.10.2026); with none yet: free in the screen plane for Move, evenly for Scale */
  var lastH={};
  var noMark=false;
  /* Shift + middle-drag (Maya, Jakob 21.10.2026): with Move or Scale, the axis that best matches the direction you start dragging in, anywhere in the view */
  function shiftMid(gm,e0){ var x0=e0.clientX, y0=e0.clientY, fake={clientX:x0,clientY:y0,button:1,shiftKey:false,altKey:false,ctrlKey:false,metaKey:false,preventDefault:function(){},stopPropagation:function(){}};
    function off(){ removeEventListener("pointermove",mv,true); removeEventListener("pointerup",up,true); }
    function mv(ev){ var dx=ev.clientX-x0, dy=ev.clientY-y0; if(Math.hypot(dx,dy)<6) return; off(); var best=null, bc=-1;
      ["x","y","z"].forEach(function(a){ var v0=gm.ax[a].e[0]-gm.sc[0], v1=gm.ax[a].e[1]-gm.sc[1], L=Math.hypot(v0,v1); if(L<3*R) return; var c=Math.abs(v0*dx+v1*dy)/(L*Math.hypot(dx,dy)); if(c>bc){ bc=c; best=a; } });
      if(best) startGizmo(best,gm,fake); else root.classList.remove("egg-cube-drag"); }
    function up(){ off(); root.classList.remove("egg-cube-drag"); }
    addEventListener("pointermove",mv,true); addEventListener("pointerup",up,true); }   /* pointer events: Inca cancels the press, so no mouse events follow */
  function startGizmo(h,g,e,it,was){ if(!noMark) mark(); noMark=false; var gt=gtool(); if(h&&h!=="n"&&!it) lastH[gt]=h; var info={h:h,x0:e.clientX,y0:e.clientY,Cw:g.Cw,sc:g.sc,w:g.w,len:g.len,G:g.G,A:g.A,it:it||null,was:!!was};
    if(h==="x"||h==="y"||h==="z"){ var ev=g.ax[h].e, dx=ev[0]-g.sc[0], dy=ev[1]-g.sc[1], l=Math.hypot(dx,dy)||1; info.u=[dx/l,dy/l]; info.ppu=l/g.len; info.zc=rot(g.A[h])[2]; }
    if(h==="n"){ var ex0=g.e[0]-g.sc[0], ey0=g.e[1]-g.sc[1], l1=Math.hypot(ex0,ey0)||1; info.u=[ex0/l1,ey0/l1]; info.ppu=l1/g.len; info.ex=true; info.t0=extr.t||0; gzDrag=info; return; }   /* the thickness: every corner along its own direction */
    if(h.charAt(0)==="p"&&h.length===2){ info.pn=g.A[h.charAt(1)]; info.P0=hitPlane(rayAt(e.clientX,e.clientY),g.Cw,info.pn); }
    info.a0=Math.atan2(e.clientY*R-g.sc[1],e.clientX*R-g.sc[0]);
    if(S.mode==="object"){ info.obj=true; info.piv=g.piv; info.gimbal=gt==="rotate"&&gspace==="gimbal"; info.tops=(g.piv?[leadObj()]:tops()).filter(Boolean).map(function(o){ return {o:o,M0:mWorld(o),T0:JSON.parse(JSON.stringify(trOf(o))),P0:pivotW(o)}; }); gzDrag=info; return; }
    var sv=selVerts();
    if(e.shiftKey&&gt==="move"){ var faces=Object.keys(csel).map(function(k){ return csel[k]; }).filter(function(x){ return x.t==="f"; });
      if(faces.length){ extrudeFaces(faces); sv=selVerts(); snd(330); toast("Extruded."); info.ext=true; } }   /* Shift + drag the move manipulator: extrude, like Maya */
    var base={}; Object.keys(sv).forEach(function(id){ var o=objById(+id); base[id]={}; sv[id].forEach(function(k){ base[id][k]=o.V[k].slice(); }); }); info.base=base; gzDrag=info; }
  function moveGizmo(e){ var d=gzDrag, dx=(e.clientX-d.x0)*R, dy=(e.clientY-d.y0)*R, C=d.Cw, h=d.h, gt=gtool(), fn, mv, A2, th, k, ctl=e.ctrlKey||e.metaKey;
    if(d.ex){ var tt=d.t0+(dx*d.u[0]+dy*d.u[1])/d.ppu; extr.t=tt; extr.items.forEach(function(it){ var o=objById(it.id); if(!o) return; Object.keys(it.dirs).forEach(function(kk){ var b0=it.base[kk], dr=it.dirs[kk]; o.V[kk]=[b0[0]+dr[0]*tt,b0[1]+dr[1]*tt,b0[2]+dr[2]*tt]; }); }); return; }
    var plane=h&&h.charAt(0)==="p"&&h.length===2;
    if(gt==="move"){ if(plane){ var P1=d.P0&&hitPlane(rayAt(e.clientX,e.clientY),C,d.pn); mv=P1?sub(P1,d.P0):unrot([dx*d.w/f,-dy*d.w/f,0]); if(!P1) mv=sub(mv,d.pn.map(function(c2){ return c2*dot(mv,d.pn); })); }   /* exactly under the mouse, in the plane */
      else if(h==="c") mv=unrot([dx*d.w/f,-dy*d.w/f,0]); else { var t=(dx*d.u[0]+dy*d.u[1])/d.ppu, A=d.A[h]; mv=[A[0]*t,A[1]*t,A[2]*t]; } d.mvNow=mv; fn=function(v){ return [v[0]+mv[0],v[1]+mv[1],v[2]+mv[2]]; }; }   /* the manipulator travels along (d.mvNow), like Maya */
    else if(gt==="rotate"){ if(h==="b"){ var ml=Math.hypot(dx,dy); A2=ml>1e-6?norm(unrot([dy,dx,0])):unrot([0,1,0]); th=ml/d.G; d.screenAng=false; }   /* the trackball: the ball rolls the way you drag */
      else { A2=h==="v"?unrot([0,0,1]):d.A[h]; var z=rot(A2)[2];
        if(h==="v"||Math.abs(z)>.25){ var a1=Math.atan2(e.clientY*R-d.sc[1],e.clientX*R-d.sc[0]), da=a1-d.a0; while(da>Math.PI) da-=2*Math.PI; while(da<-Math.PI) da+=2*Math.PI; if(d.dPrev!=null){ while(da-d.dPrev>Math.PI) da-=2*Math.PI; while(da-d.dPrev<-Math.PI) da+=2*Math.PI; } d.dPrev=da; d.dScr=da; th=-da*(z<0?-1:1); d.screenAng=true; }
        else { var pu=[-d.u[1],d.u[0]]; th=(dx*pu[0]+dy*pu[1])/d.G; d.screenAng=false; } }
      if(jDown&&h!=="b"){ var stp=Math.PI/12; th=Math.round(th/stp)*stp; if(d.screenAng) d.dScr=-th*(rot(A2)[2]<0?-1:1); }   /* J held: 15 degree steps, like Maya */
      d.thNow=th;
      fn=function(v){ var r=rodrigues([v[0]-C[0],v[1]-C[1],v[2]-C[2]],A2,th); return [C[0]+r[0],C[1]+r[1],C[2]+r[2]]; }; }
    else { if(plane){ k=Math.max(.02,1+(dx-dy)/(2*d.G)); var pa=["x","y","z"].filter(function(q2){ return q2!==h.charAt(1); }).map(function(q2){ return d.A[q2]; });
        fn=function(v){ var rel=[v[0]-C[0],v[1]-C[1],v[2]-C[2]], out=v.slice(); pa.forEach(function(B2){ var al=rel[0]*B2[0]+rel[1]*B2[1]+rel[2]*B2[2]; for(var i=0;i<3;i++) out[i]+=B2[i]*al*(k-1); }); return out; }; }   /* the two axes of that plane */
      else if(h==="c"){ k=Math.max(.02,1+(dx-dy)/(2*d.G)); fn=function(v){ return [C[0]+(v[0]-C[0])*k,C[1]+(v[1]-C[1])*k,C[2]+(v[2]-C[2])*k]; }; }
      else { k=Math.max(.02,1+(dx*d.u[0]+dy*d.u[1])/d.G); var B=d.A[h];
        fn=function(v){ var rel=[v[0]-C[0],v[1]-C[1],v[2]-C[2]], al=rel[0]*B[0]+rel[1]*B[1]+rel[2]*B[2];
          if(ctl) return [0,1,2].map(function(i){ return C[i]+al*B[i]+(rel[i]-al*B[i])*k; });   /* Ctrl: the other two axes, like Maya */
          return [v[0]+B[0]*al*(k-1),v[1]+B[1]*al*(k-1),v[2]+B[2]*al*(k-1)]; }; } }
    if(d.obj){ d.tops.forEach(function(x){ var o=x.o; o.T=JSON.parse(JSON.stringify(x.T0));
        if(d.piv) setPivotW(o,fn(x.P0));   /* only the pivot moves */
        else if(gt==="move"){ var dl=mVec(mInv(mParent(o)),mv); o.T.t=[x.T0.t[0]+dl[0],x.T0.t[1]+dl[1],x.T0.t[2]+dl[2]]; }
        else if(gt==="rotate"&&d.gimbal&&"xyz".indexOf(h)>=0&&x===d.tops[0]){ o.T.r["xyz".indexOf(h)]=x.T0.r["xyz".indexOf(h)]+th*180/Math.PI; }   /* Gimbal: only that channel changes, so the curve stays clean */
        else if(gt==="rotate"){ var Cm=[[1,0,0,C[0]],[0,1,0,C[1]],[0,0,1,C[2]]], Ci=[[1,0,0,-C[0]],[0,1,0,-C[1]],[0,0,1,-C[2]]]; fromWorld(o,mMul(Cm,mMul(rotM(A2,th),mMul(Ci,x.M0)))); }
        else { var ai=h==="c"?-1:plane?"xyz".indexOf(h.charAt(1)):"xyz".indexOf(h); o.T.s=x.T0.s.map(function(sv2,i){ return (ai<0||(plane||ctl?i!==ai:i===ai))?sv2*k:sv2; }); }
        refresh(o); }); return; }
    Object.keys(d.base).forEach(function(id){ var o=objById(+id); Object.keys(d.base[id]).forEach(function(kk){ o.V[kk]=fn(d.base[id][kk]); }); }); }
  /* Extrude (button or Ctrl+E, like Maya; Jakob 17.10.2026): every selected face gets new side walls and stays selected, and the move tool comes up,
     so the next drag on the manipulator pulls the faces out */
  function selFaces(){ return Object.keys(csel).map(function(k){ return csel[k]; }).filter(function(it){ return it.t==="f"; }); }
  function extrudeSel(){ var fs=selFaces(); if(S.mode==="object"||!fs.length){ toast("Select faces to extrude (Face or Multi mode)."); return; } mark(); var items=extrudeFaces(fs);
    if(!items.length){ undo.pop(); return; } if(tool!=="move") setTool("move",true); extr={items:items,t:0}; var n=fs.length; snd(330);
    toast("Extruded "+n+" face"+(n>1?"s":"")+(n>1?(keepTog?", kept together":", each on its own"):"")+". Drag the blue arrow: every face goes out along its own direction."); paintAll(); }
  function endEdit(kind){ if(S.mode==="object") tops().forEach(function(o){ autoKeyFor(o); });
    else { var sv=selVerts(); Object.keys(sv).forEach(function(id){ var o=objById(+id); bake(o); if(o.prim) o.prim.edited=true; }); }   /* parts were edited in the world: back into the object's own space */
    snd(520); gdirty=true; paintBar(); paintAttr(); paintTimeline(); }
  /* ---- shake an object out of Inca into the Handbook (Jakob, 17.10.2026): in Object Mode, shaking the mouse left-right-left-right while dragging
     shrinks the object to one row of Who to Ask; it follows the pointer and sits on the row line under it; on release it turns into a pixel object
     picked from its silhouette (E.props on the students' side). Outside the card it comes back. ---- */
  var shk=null, carry=null;
  function shakeReset(){ shk={dir:0,start:null,ext:null,turns:[],lx:null}; }
  function shakeCheck(e){ if(S.mode!=="object"||!E.props) return false; if(!shk) shakeReset(); var x=e.clientX, dx=shk.lx===null?0:x-shk.lx; if(shk.lx===null){ shk.start=shk.ext=x; } shk.lx=x; if(Math.abs(dx)<2) return false;
    var d=dx>0?1:-1, now=performance.now();   /* a turn counts when the sweep that just ended was at least 18 px long; four turns within 1.5 s */
    if(shk.dir===0||d===shk.dir){ shk.dir=d; shk.ext=x; }
    else { if(Math.abs(shk.ext-shk.start)>=18) shk.turns.push(now); shk.start=shk.ext; shk.ext=x; shk.dir=d; }
    shk.turns=shk.turns.filter(function(t){ return now-t<1500; }); return shk.turns.length>=4; }
  /* the outline the 2D object is matched against (Jakob, 18.10.2026): a front view, the way pixel art draws things: from the side you look at it from,
     at eye level and without perspective. Looking steeply from above (over 50 degrees) keeps that view, so a ring seen from the top still shows its hole */
  /* the views the outline is taken from (Jakob, 18.10.2026), fixed like Maya's cameras, so they never change when the camera turns:
     Front from +Z (right is +X), Side from +X (right is -Z), Top from +Y looking down (down on screen is +Z); Camera is the view you have */
  var silView="camera"; try{ var sv0=localStorage.getItem("sbh-cube-silview");   /* the camera by default (18.10.2026); a view chosen before stays */ if(/^(front|side|top|camera)$/.test(sv0||"")) silView=sv0; }catch(e){}
  function viewP(v){ if(silView==="side") return [-v[2],-v[1]]; if(silView==="top") return [v[0],v[2]]; return [v[0],-v[1]]; }
  function silhouette(o){ var P=o.V.map(silView==="camera"?function(v){ return scr(camP(v)); }:viewP), lo=[1e9,1e9], hi=[-1e9,-1e9];   /* front view at eye level, or your camera (the Silhouette window's switch) */ P.forEach(function(p){ lo[0]=Math.min(lo[0],p[0]); lo[1]=Math.min(lo[1],p[1]); hi[0]=Math.max(hi[0],p[0]); hi[1]=Math.max(hi[1],p[1]); });
    var N=64, sx=Math.max(1e-6,hi[0]-lo[0]), sy=Math.max(1e-6,hi[1]-lo[1]), sc=(N-1)/Math.max(sx,sy), gw=Math.max(2,Math.round(sx*sc)+1), gh=Math.max(2,Math.round(sy*sc)+1), M=new Uint8Array(gw*gh);
    function tri(a,b,c){ var x0=Math.max(0,Math.floor(Math.min(a[0],b[0],c[0]))), x1=Math.min(gw-1,Math.ceil(Math.max(a[0],b[0],c[0]))), y0=Math.max(0,Math.floor(Math.min(a[1],b[1],c[1]))), y1=Math.min(gh-1,Math.ceil(Math.max(a[1],b[1],c[1])));
      var ar=(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]); if(Math.abs(ar)<1e-9) return;
      for(var y=y0;y<=y1;y++) for(var x=x0;x<=x1;x++){ var px=x+.5, py=y+.5, w0=(b[0]-px)*(c[1]-py)-(b[1]-py)*(c[0]-px), w1=(c[0]-px)*(a[1]-py)-(c[1]-py)*(a[0]-px), w2=(a[0]-px)*(b[1]-py)-(a[1]-py)*(b[0]-px);
        if((w0>=0&&w1>=0&&w2>=0)||(w0<=0&&w1<=0&&w2<=0)) M[y*gw+x]=1; } }
    var Q=P.map(function(p){ return [(p[0]-lo[0])*sc,(p[1]-lo[1])*sc]; }); o.F.forEach(function(fc){ for(var k=1;k<fc.length-1;k++) tri(Q[fc[0]],Q[fc[k]],Q[fc[k+1]]); });
    var ed={}; o.F.forEach(function(fc){ fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length]; ed[Math.min(k,m)+"_"+Math.max(k,m)]=(ed[Math.min(k,m)+"_"+Math.max(k,m)]||0)+1; }); });
    var ek=Object.keys(ed), closed=ek.every(function(k){ return ed[k]===2; }), used={}; o.F.forEach(function(fc){ fc.forEach(function(k){ used[k]=1; }); });
    var ring=closed&&Object.keys(used).length-ek.length+o.F.length===0;   /* a closed shape with a hole through it (Euler characteristic 0), even when the hole is hidden from this angle */
    return {M:M,w:gw,h:gh,box:[lo[0],lo[1],sx,sy],ring:ring}; }
  /* the ten kinds from the silhouette: holes, tall and thin, a waist, a pointed top, a heavy top, straight sides, flat and wide, round */
  function classify(sil){ var M=sil.M, w=sil.w, h=sil.h, area=0, rows=[], lefts=[], i, x, y;
    for(y=0;y<h;y++){ var l=-1, r=-1, n=0; for(x=0;x<w;x++) if(M[y*w+x]){ if(l<0) l=x; r=x; n++; } rows.push(l<0?0:r-l+1); lefts.push(l); area+=n; }
    var holes=0; for(y=1;y<h-1;y++){ var a0=-1, b0=-1; for(x=0;x<w;x++) if(M[y*w+x]){ if(a0<0) a0=x; b0=x; } if(a0<0) continue; for(x=a0;x<=b0;x++) if(!M[y*w+x]){ var up=false, dn=false; for(var yy=y-1;yy>=0&&!up;yy--) if(M[yy*w+x]) up=true; for(yy=y+1;yy<h&&!dn;yy++) if(M[yy*w+x]) dn=true; if(up&&dn) holes++; } }
    var asp=h/w, fill=area/(w*h), band=function(f0,f1){ var s=0, c=0; for(var yy=Math.floor(f0*h);yy<Math.max(Math.floor(f0*h)+1,Math.floor(f1*h));yy++){ s+=rows[yy]; c++; } return s/Math.max(1,c)/w; },
        top=band(0,.22), mid=band(.4,.6), bot=band(.78,1), rights=rows.map(function(v,k){ return lefts[k]<0?-1:lefts[k]+v-1; }), fl=lefts.filter(function(v){ return v>=0; }), fr=rights.filter(function(v){ return v>=0; }), mnL=Math.min.apply(null,fl), mxR=Math.max.apply(null,fr),
        sideL=fl.filter(function(v){ return v<=mnL+1; }).length/fl.length, sideR=fr.filter(function(v){ return v>=mxR-1; }).length/fr.length, straight=sideL>.3&&sideR>.3;   /* straight sides: many rows reach the widest point (a box or a cylinder); a ball only touches it for a few rows */
    var sm=rows.map(function(v,k){ return (rows[k-1]||v)/4+v/2+(rows[k+1]||v)/4; }), waist=false; for(i=Math.floor(h*.25);i<Math.floor(h*.75);i++){ var above=Math.max.apply(null,sm.slice(0,i)), below=Math.max.apply(null,sm.slice(i)); if(sm[i]<.78*Math.min(above,below)&&above>w*.35&&below>w*.35) waist=true; }
    if(holes>area*.05||sil.ring) return "donut";
    if(asp>2.3) return "lamp";
    if(waist&&asp>1.05) return "snowman";
    if(top<.42*bot&&asp>.75) return "conifer";
    if(top>1.25*bot&&mid<top) return asp>1.15?"tree":"mushroom";
    if(asp<.55) return "car";
    if(straight) return asp>1.15?"tower":"house";
    if(asp>1.4) return fill>.8?"tower":"tree";
    return "boulder"; }
  function snapshot(o){ var keep=S.objs.map(function(x){ return x.vis; }); S.objs.forEach(function(x){ x.vis=x===o; }); var hv=hover; hover=null; render(); hover=hv;
    var C=camO(o).map(scr), lo=[1e9,1e9], hi=[-1e9,-1e9]; C.forEach(function(p){ lo[0]=Math.min(lo[0],p[0]); lo[1]=Math.min(lo[1],p[1]); hi[0]=Math.max(hi[0],p[0]); hi[1]=Math.max(hi[1],p[1]); });
    var pad=3*R, x0=Math.max(0,lo[0]-pad), y0=Math.max(0,lo[1]-pad), w=Math.min(W,hi[0]+pad)-x0, h=Math.min(H,hi[1]+pad)-y0, t=document.createElement("canvas"), url="";
    t.width=Math.max(1,Math.round(w)); t.height=Math.max(1,Math.round(h)); try{ t.getContext("2d").drawImage(cv,x0,y0,w,h,0,0,t.width,t.height); url=t.toDataURL("image/png"); }catch(e){}
    S.objs.forEach(function(x,i){ x.vis=keep[i]; }); return {url:url,ar:w/Math.max(1,h)}; }
  /* carrying (Jakob, 17.10.2026): the ghost already shows the pixel object it will become; scroll or Q/E cycle through the suggestions.
     Several selected objects travel together and become one of ten scenes, one pixel object per 3D object, side by side in their left-to-right order. */
  /* assemblies (Jakob, 18.10.2026): pieces that touch or overlap, or that are grouped or parented together, count as one object when carried: one outline,
     one 2D object. Separate things standing apart stay separate, so a row of cones is still a scene */
  function assemblies(objs){ var n=objs.length, par=objs.map(function(_,i){ return i; }), find=function(i){ while(par[i]!==i){ par[i]=par[par[i]]; i=par[i]; } return i; }, join=function(i,j){ par[find(i)]=find(j); };
    var bb=objs.map(function(o){ var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; (o.V||[]).forEach(function(v){ for(var k=0;k<3;k++){ lo[k]=Math.min(lo[k],v[k]); hi[k]=Math.max(hi[k],v[k]); } }); return {lo:lo,hi:hi,sz:Math.max(hi[0]-lo[0],hi[1]-lo[1],hi[2]-lo[2])}; });
    var up=function(o){ var s2=[], q2=o; while(q2){ s2.push(q2.id); q2=parentOf(q2); } return s2; };
    for(var i=0;i<n;i++) for(var j=i+1;j<n;j++){ var A=bb[i], B=bb[j], eps=.02+.06*Math.min(A.sz,B.sz), touch=[0,1,2].every(function(k){ return A.lo[k]-eps<=B.hi[k]&&B.lo[k]-eps<=A.hi[k]; });
      var ui=up(objs[i]), uj=up(objs[j]), related=ui.indexOf(objs[j].id)>=0||uj.indexOf(objs[i].id)>=0||(objs[i].par!=null&&objs[i].par===objs[j].par);
      if(touch||related) join(i,j); }
    var groups={}, order=[]; objs.forEach(function(o,i){ var r=find(i); if(!groups[r]){ groups[r]=[]; order.push(r); } groups[r].push(o); }); return order.map(function(r){ return groups[r]; }); }
  function silOf(unit){ if(unit.length===1) return silhouette(unit[0]); var V=[], F=[]; unit.forEach(function(o){ var off=V.length; o.V.forEach(function(v){ V.push(v); }); o.F.forEach(function(fc){ F.push(fc.map(function(k){ return k+off; })); }); }); return silhouette({V:V,F:F}); }
  /* the name as a hint: the group the pieces share, and the biggest piece */
  function hintOf(unit){ var lead=leadOf(unit), names=[lead.name], g=unit.map(function(o){ return o.par; }); if(g.every(function(x){ return x!=null&&x===g[0]; })){ var gp=objById(g[0]); if(gp) names.unshift(gp.name); } return names.join(" "); }
  function leadOf(unit){ var sz=function(o){ var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; o.V.forEach(function(v){ for(var k=0;k<3;k++){ lo[k]=Math.min(lo[k],v[k]); hi[k]=Math.max(hi[k],v[k]); } }); return (hi[0]-lo[0])*(hi[1]-lo[1])*(hi[2]-lo[2]); }; return unit.slice().sort(function(x,y){ return sz(y)-sz(x); })[0]; }   /* the biggest piece names the assembly */
  function startCarry(e){ var lead=sel(); if(!lead) return; if(!E.props.ready){ E.props.load(); shk=null; toast("One moment: the objects are still loading."); return; }   /* the library comes with Inca; on a very slow connection the first shake may be early */ var objs=S.mode==="object"&&osel.length>1&&osel.indexOf(lead.id)>=0?osel.map(objById).filter(function(o){ return o&&o.vis; }):[lead];
    objs=objs.map(function(o){ var C=camO(o).map(scr), x=0; C.forEach(function(p){ x+=p[0]/C.length; }); return {o:o,x:x}; }).sort(function(a,b){ return a.x-b.x; }).map(function(z){ return z.o; });
    var units=assemblies(objs), sils=units.map(silOf), leads=units.map(leadOf), anims=leads.map(animOf), mots=anims.map(function(a){ return E.props.motion?E.props.motion(a):null; }), opts;   /* how each object moves counts too (18.10.2026) */
    var hints=units.map(hintOf);
    if(units.length===1){ var lu=leads[0], one=units[0].length===1, fam=one?famKey(lu):null, edd=!one||!!(lu.prim&&lu.prim.edited); var rk=E.props.rank?rankUnit(units[0],sils[0],fam,E.props.kinds.length,edd,mots[0],hints[0]):[];   /* every 2D object, best match first (Jakob, 20.10.2026: was 30) */ if(lu.pick2d&&E.props.kinds.indexOf(lu.pick2d)>=0){ var pf=rk.flip, pa=rk.ar; rk=[lu.pick2d].concat(rk.filter(function(k){ return k!==lu.pick2d; })); rk.flip=pf||{}; rk.ar=pa||{}; }   /* the object's own choice (Silhouette window) first */ opts=rk.map(function(k){ return {kinds:[k],label:E.props.name(k).replace(/^an? /,""),fl:[!!(rk.flip&&rk.flip[k])],ar:[rk.ar&&rk.ar[k]||1]}; });
      if(!opts.length) opts=[{kinds:[classify(sils[0])],label:""}]; }
    else { var fams=units.map(function(u){ var o=u[0]; return u.length===1&&o.prim&&!o.prim.edited?o.prim.t:null; }), best=E.props.best?E.props.best(sils,fams,mots,hints):null; if(!best) best=units.map(function(u,i){ return classify(sils[i]); }); best=best.map(function(k,i){ var ld=leadOf(units[i]); return ld.pick2d&&E.props.kinds.indexOf(ld.pick2d)>=0?ld.pick2d:k; });
      opts=[{kinds:best,label:"Best match"}].concat((E.props.scenes?E.props.scenes(sils,mots,fams,hints):[]).map(function(sc){ return {kinds:sc.kinds,label:sc.n}; }));   /* look-alikes stay alike; the best match first, then the themed scenes */ }
    opts.forEach(function(op){ if(op.fl||!E.props.fit) return; var ft=op.kinds.map(function(k,i){ return E.props.fit(sils[i],k); }); op.fl=ft.map(function(x){ return x.fl; }); op.ar=ft.map(function(x){ return x.ar; }); });   /* scenes: mirrored and proportioned per object too */
    var g=document.createElement("div"); g.className="egg-prop-ghost"; g.innerHTML='<span class="pg-row"></span><span class="pg-lab"></span>'; var ln=document.createElement("div"); ln.className="egg-prop-line"; ln.hidden=true;
    document.body.appendChild(g); document.body.appendChild(ln); objs.forEach(function(o){ o.vis=false; });
    carry={objs:objs,units:units,sils:sils,opts:opts,idx:0,g:g,ln:ln,sn:null,lastE:e,wheelT:0,sc:1,anims:anims,t0:performance.now()}; root.classList.add("egg-carrying"); if(wrap&&wrap.classList.contains("compact")&&(wrap.classList.contains("sheet-l")||wrap.classList.contains("sheet-r"))){ wrap.classList.remove("sheet-l","sheet-r"); [].forEach.call(qa(".cube-sheetbar button"),function(b){ b.setAttribute("aria-pressed","false"); }); }   /* phones: an open sheet closes, so Who to Ask is free */ toggleT=performance.now(); drag=null; gzDrag=null; hover=null; shk=null; snd(700); drawGhost(); moveCarry(e); paintAll();
    if(E.props.showAsk) E.props.showAsk(function(){ if(carry&&carry.lastE) moveCarry(carry.lastE); }); }   /* Who to Ask out of sight: the page goes there (18.10.2026) */
  /* changed your mind while carrying: shake again (or press Tab) and it is the 3D object again, under the cursor, still in your hand (Jakob, 18.10.2026) */
  var toggleT=0;
  function uncarry(e){ if(E.props.dropHint) E.props.dropHint(); var c=carry; if(!c) return; carry=null; root.classList.remove("egg-carrying"); c.g.remove(); c.ln.remove(); c.objs.forEach(function(o){ o.vis=true; });
    osel=c.objs.map(function(o){ return o.id; }); S.sel=c.objs[0].id; var lead=leadObj()||c.objs[0], cc=camP(pivotW(lead)), w=D-cc[2], sp=scr(cc);
    if(w>1.05){ var mv=unrot([(e.clientX*R-sp[0])*w/f,-(e.clientY*R-sp[1])*w/f,0]); tops().forEach(function(o){ var M=mWorld(o); M[0][3]+=mv[0]; M[1][3]+=mv[1]; M[2][3]+=mv[2]; fromWorld(o,M); refresh(o); }); }
    toggleT=performance.now(); shk=null; snd(600); toast("Back in 3D. Shake again or press Tab for 2D.");
    if(tool==="move"){ var g=gizmo(); if(g) startGizmo("c",g,e); } else { mark(); drag={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,moved:true,sv:selVerts()}; } paintAll(); }
  function ghostKinds(){ return carry.opts[carry.idx].kinds; }
  /* an object with keys: its outline over the keyed frames as seen now (where its bottom center goes, how wide and tall it gets), relative to the first key */
  function animOf(o){ var ks=keyTimes(o); if(ks.length<2) return null; var k0=ks[0], k1=ks[ks.length-1], step=Math.max(1,Math.round((k1-k0)/60)), f=[], ref=null, T0=JSON.parse(JSON.stringify(trOf(o))), useY=true;
    for(var fr=k0;fr<=k1;fr+=step){ poseAt(o,fr); var M=mWorld(o), P=pivotW(o), ps=scr(camP(P)), ex=scr(camP([P[0]+M[0][0],P[1]+M[1][0],P[2]+M[2][0]])), ey=scr(camP([P[0]+M[0][1],P[1]+M[1][1],P[2]+M[2][1]])),
        vx=[ex[0]-ps[0],ex[1]-ps[1]], vy=[ey[0]-ps[0],ey[1]-ps[1]], lx=Math.hypot(vx[0],vx[1]), ly=Math.hypot(vy[0],vy[1]), wx=Math.hypot(M[0][0],M[1][0],M[2][0]), wy=Math.hypot(M[0][1],M[1][1],M[2][1]);   /* the size comes from the object's own scale (wx, wy), so turning or moving it in depth never makes the 2D object bigger or smaller (Jakob, 18.10.2026) */
      if(!ref){ worldV(o); var lo=1e9, hi=-1e9; o.V.forEach(function(v){ var q2=scr(camP(v)); lo=Math.min(lo,q2[1]); hi=Math.max(hi,q2[1]); }); useY=ly>=lx*.35; ref={ps:ps,lx:lx||1,ly:ly||1,wx:wx||1,wy:wy||1,a:useY?Math.atan2(vy[1],vy[0]):Math.atan2(vx[1],vx[0]),h:Math.max(1,hi-lo)}; }
      var a=useY?Math.atan2(vy[1],vy[0]):Math.atan2(vx[1],vx[0]), da=(a-ref.a)*180/Math.PI; if(f.length){ var pa=f[f.length-1][5]; while(da-pa>180) da-=360; while(da-pa<-180) da+=360; }
      f.push([(fr-k0)/Math.max(1,k1-k0),(ps[0]-ref.ps[0])/ref.h,(ps[1]-ref.ps[1])/ref.h,wx/ref.wx,wy/ref.wy,da]); if(fr+step>k1&&fr!==k1) fr=k1-step; }
    o.T=T0; refresh(o);   /* rotation and scale stay rotation and scale in the 2D view (Jakob, 18.10.2026) */
    var moves=f.some(function(q2){ return Math.abs(q2[1])>.02||Math.abs(q2[2])>.02||Math.abs(q2[3]-1)>.02||Math.abs(q2[4]-1)>.02||Math.abs(q2[5])>1; }); if(!moves) return null;
    f.forEach(function(q2){ for(var i=1;i<6;i++) q2[i]=+q2[i].toFixed(3); q2[0]=+q2[0].toFixed(4); }); f[f.length-1][0]=1; return {d:Math.round((k1-k0)/FPS*1000),f:f}; }
  function drawGhost(){ var c=carry, ks=ghostKinds(), o=c.opts[c.idx], lab=c.g.querySelector(".pg-lab");
    c.g.querySelector(".pg-row").innerHTML=ks.map(function(k,i){ return '<span class="pg-it" data-k="'+k+'">'+E.props.sprite(k,!!(o.fl&&o.fl[i]))+'</span>'; }).join(""); c.animH=null;
    [].forEach.call(c.g.querySelectorAll(".pg-it svg"),function(sv,i){ if(o.ar&&o.ar[i]&&o.ar[i]!==1) sv.setAttribute("preserveAspectRatio","none"); });
    var K=function(k){ return '<kbd>'+k+'</kbd>'; }, row=function(keys,act){ return '<span class="pg-k">'+keys+'</span><span class="pg-a">'+act+'</span>'; };   /* a name, a counter, then each key once with what it does (Jakob, 20.10.2026) */
    lab.innerHTML='<span class="pg-h"><b>'+(o.label||"")+'</b>'+(c.opts.length>1?'<span class="pg-n">'+(c.idx+1)+'\u00a0/\u00a0'+c.opts.length+'</span>':'')+'</span>'+(ks.length>1?'<i class="pg-set">'+(function(){ var cnt={}, ord=[]; ks.forEach(function(k){ if(!cnt[k]){ cnt[k]=0; ord.push(k); } cnt[k]++; }); return ord.map(function(k){ var nm=E.props.name(k).replace(/^an? /,""); return cnt[k]>1?cnt[k]+" \u00d7 "+nm:nm; }).join(", "); })()+'</i>':'')+'<span class="pg-keys">'+(c.opts.length>1?row(K("Q")+K("E")+'<em>or scroll</em>','another look')+row(K("R"),'back to the first'):'')+row(K("Shift")+'<em>+ scroll</em>','size '+Math.round(c.sc*100)+'\u00a0%'+(c.anims.some(Boolean)?', animated':''))+row(K("D"),'duplicate')+(c.click?row(K("Click"),'place')+row(K("Esc"),'cancel'):row('<em>shake or</em>'+K("Tab"),'back to 3D'))+'</span>'; }
  function scaleCarry(d){ if(!carry) return; carry.sc=Math.max(.4,Math.min(2.5,Math.round((carry.sc*(d>0?1.3:1/1.3))*100)/100)); carry.animH=null; drawGhost(); moveCarry(carry.lastE); snd(d>0?700:500); }   /* Shift + scroll or Shift + Q/E: 40 % to 250 % of the default size */
  function cycleCarry(d){ if(!carry||carry.opts.length<2) return; carry.idx=(carry.idx+d+carry.opts.length)%carry.opts.length; drawGhost(); moveCarry(carry.lastE); snd(d>0?660:560); }
  function moveCarry(e){ var c=carry; c.lastE={clientX:e.clientX,clientY:e.clientY}; var ks=ghostKinds(), base=E.props.snap(e.clientX,e.clientY,null), rowH=base?base.h:48, gap=Math.round(rowH*.12), its=c.g.querySelectorAll(".pg-it"), W=0, maxH=0, sizes=[];
    ks.forEach(function(k,i){ var sv=its[i]&&its[i].querySelector("svg"), vb=sv?sv.getAttribute("viewBox").split(" ").map(Number):[0,0,1,1], h=Math.round(rowH*(E.props.size?E.props.size(k):1)*c.sc), w=Math.round(h*vb[2]/vb[3]*((c.opts[c.idx].ar&&c.opts[c.idx].ar[i])||1));
      sizes.push([w,h]); if(its[i]){ its[i].style.width=w+"px"; its[i].style.height=h+"px"; } W+=w+(i?gap:0); maxH=Math.max(maxH,h); });
    if(c.animH!==rowH&&E.props.play){ c.animH=rowH; ks.forEach(function(k,i){ if(its[i]) E.props.play(its[i].querySelector("svg"),c.anims[i],sizes[i][1]); }); }
    var sn=base?E.props.snap(e.clientX,e.clientY,W):null; c.sn=sn; c.sizes=sizes; c.gap=gap; c.W=W; c.g.classList.toggle("snap",!!sn); c.g.querySelector(".pg-row").style.height=maxH+"px"; c.g.querySelector(".pg-row").style.gap=gap+"px"; c.g.style.width=W+"px";
    if(sn){ c.g.style.left=sn.left+"px"; c.g.style.top=(sn.lineY-maxH)+"px"; c.ln.hidden=false; c.ln.style.left=(sn.left-8)+"px"; c.ln.style.width=(W+16)+"px"; c.ln.style.top=(sn.lineY-1)+"px"; }
    else { c.g.style.left=(e.clientX-W/2)+"px"; c.g.style.top=(e.clientY-maxH/2)+"px"; c.ln.hidden=true; }
    if(E.props.labelOnScreen) E.props.labelOnScreen(c.g.querySelector(".pg-lab"));
    if(E.props.dropHint){ var lb=sn?null:c.g.querySelector(".pg-lab"), yb=sn?0:Math.max(c.g.getBoundingClientRect().bottom,lb&&!lb.hidden?lb.getBoundingClientRect().bottom:0)+8; E.props.dropHint(e.clientX,yb,sn?null:(c.click?"Not in the chapter \u201cWho to Ask\u201d. Click on a line, or press Esc.":"Not in the chapter \u201cWho to Ask\u201d. Let go and it goes back to Inca.")); } }   /* says why nothing lands (18.10.2026) */
  /* the carried object into the Handbook at its snap point: by a click (endCarry) or as a copy by D (dupCarry) */
  function placeFrom(c,o){ var cw=E.props.cardW()||1, off=0, names=[];
      o.kinds.forEach(function(k,i){ var unit=c.units?c.units[i]:[c.objs[i]], ob=leadOf(unit), r4=function(V){ return V.map(function(v){ return [+v[0].toFixed(4),+v[1].toFixed(4),+v[2].toFixed(4)]; }); }, src;
          if(unit.length>1){ var V=[], F=[]; unit.forEach(function(u){ var off=V.length; u.V.forEach(function(v){ V.push(v); }); u.F.forEach(function(fc){ F.push(fc.map(function(q2){ return q2+off; })); }); }); src=JSON.parse(JSON.stringify({name:ob.name,G:r4(V),F:F,T:{t:[0,0,0],r:[0,0,0],s:[1,1,1],p:boxC(V)},K:{},prim:null})); }   /* an assembly travels as one mesh */
          else src=JSON.parse(JSON.stringify(ob.par==null?{name:ob.name,G:r4(ob.G),F:ob.F,T:ob.T,K:ob.K||{},inf:ob.inf||null,prim:ob.prim||null}:{name:ob.name,G:r4(ob.V),F:ob.F,T:{t:[0,0,0],r:[0,0,0],s:[1,1,1],p:pivotW(ob)},K:{},prim:ob.prim||null}));   /* 4 decimals: invisible, and about a third of the size */   /* the 3D copy travels with the 2D object, so a shake can bring it back */
        names.push(E.props.place(k,c.sn.free?E.props.freeShift(c.sn,off+c.sizes[i][0]/2-(c.W||0)/2):{l:c.sn.l,fx:c.sn.fx+off/cw},c.sc,c.anims[i],src,{fl:!!(o.fl&&o.fl[i]),ar:(o.ar&&o.ar[i])||1})); off+=c.sizes[i][0]+c.gap; }); return names; }
  /* D while carrying (Jakob, 18.10.2026): a copy lands here, and another one stays in the hand */
  function dupCarry(){ var c=carry; if(!c) return; if(!c.sn){ toast("Over a line in the Handbook first: then D leaves a copy there."); return; } var names=placeFrom(c,c.opts[c.idx]); snd(560); toast("A copy: "+names[0]+" in the Handbook. Another one is still in your hand."); if(c.lastE) moveCarry(c.lastE); }
  function endCarry(){ if(E.props.dropHint) E.props.dropHint(); var c=carry; carry=null; root.classList.remove("egg-carrying"); c.g.remove(); c.ln.remove(); var o=c.opts[c.idx];
    if(c.sn){ var names=placeFrom(c,o);
      c.objs.forEach(function(ob){ kids(ob).forEach(function(ch){ var Mw=mWorld(ch); ch.par=ob.par; fromWorld(ch,Mw); }); var i=S.objs.indexOf(ob); if(i>=0) S.objs.splice(i,1); }); osel=osel.filter(function(id){ return !c.objs.some(function(ob){ return ob.id===id; }); }); S.sel=S.objs.length?S.objs[0].id:null; snd(520);
      if(c.idx>0&&E.props.learn&&c.sils) o.kinds.forEach(function(k,i){ if(c.sils[i]) E.props.learn(c.sils[i],k); });   /* not the first suggestion: remembered for outlines like these */
      var nu=c.units?c.units.length:c.objs.length, where=" in the Handbook."; toast(nu>1?o.label+": "+nu+" objects"+where:(c.objs.length>1?leadOf(c.objs).name+" and "+(c.objs.length-1)+" more piece"+(c.objs.length>2?"s":"")+" became "+names[0]+where:c.objs[0].name+" became "+names[0]+where)); }
    else { c.objs.forEach(function(ob){ ob.vis=true; }); toast("Not on a line in the Handbook: "+(c.objs.length>1?"they are":"it is")+" back in the scene."); }
    paintAll(); }
  function onWheel(e){ if(!wrap) return;
    if(!carry){ if(inUI(e)||!(hover||gzHover||bare)) return; e.preventDefault(); var dd=e.deltaY||e.deltaX; if(!dd) return; D=Math.max(2,Math.min(400,D*(1+Math.sign(dd)*Math.min(.3,Math.abs(dd)/500+.03)))); snapA=null; return; }   /* over a shape or the manipulator: the wheel dollies, like Alt + right drag (Jakob, 18.10.2026) */ e.preventDefault(); var now=performance.now(); if(now-carry.wheelT<140||Math.abs(e.deltaY)+Math.abs(e.deltaX)<1) return; carry.wheelT=now; var dd=(e.deltaY||e.deltaX)>0?1:-1; if(e.shiftKey) scaleCarry(-dd); else cycleCarry(-dd); }   /* the wheel cycles the other way (Jakob, 21.10.2026): up like E, down like Q */   /* with Shift the wheel scales (up = bigger); browsers turn Shift + wheel into a sideways scroll, deltaX covers that */   /* one step per notch, also on trackpads */
  /* ---- edge loops and the Multi-Cut tool (Jakob, 17.10.2026) ----
     edgeLoop(): from an edge, straight on through every corner with four edges, both ways (double-click an edge to select it, like Maya).
     ringCut(): the edge ring across quads, cut at the same fraction on every edge (Multi-Cut with Ctrl: a new edge loop, like Maya).
     cutPath(): points on edges, joined face by face (Multi-Cut clicks; Enter finishes, Esc drops them). */
  function ekey(x,y){ return Math.min(x,y)+"_"+Math.max(x,y); }
  function edgeFaces(o){ var m={}; o.F.forEach(function(fc,fi){ fc.forEach(function(k,j){ var n=fc[(j+1)%fc.length], key=ekey(k,n); (m[key]=m[key]||[]).push(fi); }); }); return m; }
  function nbrs(o){ var m={}; o.F.forEach(function(fc){ fc.forEach(function(k,j){ var n=fc[(j+1)%fc.length]; (m[k]=m[k]||{})[n]=1; (m[n]=m[n]||{})[k]=1; }); }); return m; }
  function edgeLoop(o,a,b){ var EF=edgeFaces(o), NB=nbrs(o), first=ekey(a,b), seen={}, out=[first]; seen[first]=1;
    function walk(u,v){ for(var g=0;g<4000;g++){ var ns=Object.keys(NB[v]||{}).map(Number); if(ns.length!==4) return; var inF={}; (EF[ekey(u,v)]||[]).forEach(function(fi){ o.F[fi].forEach(function(k){ inF[k]=1; }); });
        var w=ns.filter(function(n){ return n!==u&&!inF[n]; }); if(w.length!==1) return; var k2=ekey(v,w[0]); if(seen[k2]) return; seen[k2]=1; out.push(k2); u=v; v=w[0]; } }
    walk(a,b); walk(b,a); return out; }
  /* the ring: each step crosses a quad from an edge to the opposite one, keeping the cut on the same side */
  function ringOf(o,a,b,t){ var EF=edgeFaces(o), start=ekey(a,b), edges=[{a:a,b:b,t:t}], seenE={}, seenF={}, splits=[], closed=false; seenE[start]=1;
    function walk(a,b,t,fi){ for(var g=0;g<4000;g++){ if(fi==null||seenF[fi]) return; var fc=o.F[fi]; if(fc.length!==4) return; seenF[fi]=1;
        var i=-1; for(var k=0;k<4;k++){ var p=fc[k], q=fc[(k+1)%4]; if((p===a&&q===b)||(p===b&&q===a)){ i=k; break; } } if(i<0) return;
        var P0=fc[i], P1=fc[(i+1)%4], P2=fc[(i+2)%4], P3=fc[(i+3)%4], f0=P0===a?t:1-t; splits.push({fi:fi,P:[P0,P1,P2,P3],f:f0});
        var nk=ekey(P3,P2); if(nk===start){ closed=true; return; } if(seenE[nk]) return; seenE[nk]=1; edges.push({a:P3,b:P2,t:f0});
        var nx=(EF[nk]||[]).filter(function(x){ return x!==fi; }); a=P3; b=P2; t=f0; fi=nx.length?nx[0]:null; } }
    var fs=EF[start]||[]; walk(a,b,t,fs[0]); if(!closed&&fs[1]!=null) walk(a,b,t,fs[1]); return {edges:edges,splits:splits,closed:closed}; }
  function pt(o,e){ if(e.v!=null) return o.V[e.v]; var A=o.V[e.a], B=o.V[e.b]; return [A[0]+(B[0]-A[0])*e.t,A[1]+(B[1]-A[1])*e.t,A[2]+(B[2]-A[2])*e.t]; }   /* a point on an edge, or a corner (e.v) */
  /* put a new corner on edge a-b of every face that has that edge (no gaps left in the neighbors) */
  function insertOnEdge(o,a,b,t,made){ var key=ekey(a,b); if(made[key]!=null) return made[key]; var n=o.V.length; o.V.push(pt(o,{a:a,b:b,t:t})); made[key]=n;
    o.F.forEach(function(fc,fi){ for(var j=0;j<fc.length;j++){ var p=fc[j], q=fc[(j+1)%fc.length]; if((p===a&&q===b)||(p===b&&q===a)){ fc.splice(j+1,0,n); break; } } }); return n; }
  function splitAt(o,fi,n1,n2){ var fc=o.F[fi], i=fc.indexOf(n1), j=fc.indexOf(n2); if(i<0||j<0||i===j) return false; var A=[], B=[], k;
    for(k=i;;k=(k+1)%fc.length){ A.push(fc[k]); if(k===j) break; } for(k=j;;k=(k+1)%fc.length){ B.push(fc[k]); if(k===i) break; }
    if(A.length<3||B.length<3) return false; o.F[fi]=A; o.F.push(B); return true; }
  function ringCut(o,a,b,t){ var R=ringOf(o,a,b,t); if(!R.splits.length) return 0; var made={}, nv={};
    R.edges.forEach(function(e){ nv[ekey(e.a,e.b)]=insertOnEdge(o,e.a,e.b,e.t,made); });
    R.splits.forEach(function(sp){ var n1=nv[ekey(sp.P[0],sp.P[1])], n2=nv[ekey(sp.P[3],sp.P[2])]; if(n1!=null&&n2!=null) splitAt(o,sp.fi,n1,n2); });
    if(o.prim) o.prim.edited=true; return R.splits.length; }
  var cutPts=[], cutHover=null;
  function faceHas(fc,e){ if(e.v!=null) return fc.indexOf(e.v)>=0; for(var j=0;j<fc.length;j++){ var p=fc[j], q2=fc[(j+1)%fc.length]; if((p===e.a&&q2===e.b)||(p===e.b&&q2===e.a)) return true; } return false; }
  function shareFace(o,e1,e2){ for(var fi=0;fi<o.F.length;fi++){ var fc=o.F[fi]; if(faceHas(fc,e1)&&faceHas(fc,e2)) return fi; } return -1; }
  /* finishing a cut (18.10.2026): first every point becomes a corner (an edge point gets one, a snapped corner is used as it is), then each pair of
     neighboring points splits the face that has both, so a cut can run corner to corner without leaving n-gons */
  function cutFinish(){ if(cutPts.length<2){ cutPts=[]; return; } var o=objById(cutPts[0].id); if(!o){ cutPts=[]; return; } mark(); var made={}, done=0;
    var ids=cutPts.map(function(p){ return p.id!==o.id?null:p.v!=null?p.v:insertOnEdge(o,p.a,p.b,p.t,made); });
    for(var i=1;i<ids.length;i++){ var a2=ids[i-1], b2=ids[i]; if(a2==null||b2==null||a2===b2) continue; var fi=-1;
      for(var k=0;k<o.F.length&&fi<0;k++){ var fc=o.F[k], ia=fc.indexOf(a2), ib=fc.indexOf(b2); if(ia<0||ib<0) continue; var gap=Math.abs(ia-ib); if(gap!==1&&gap!==fc.length-1) fi=k; }   /* a face with both, not already joined by an edge */
      if(fi>=0&&splitAt(o,fi,a2,b2)) done++; }
    cutPts=[]; if(done){ if(o.prim) o.prim.edited=true; csel={}; snd(560); toast("Cut through "+done+" face"+(done>1?"s":"")+"."); paintAll(); } else { undo.pop(); toast("Nothing to cut: each point has to share a face with the one before."); } }
  /* where a Multi-Cut click lands: a point already set in this cut, a corner of the mesh (both within 10 px), or a point on an edge */
  function cutPick(cx,cy,noSnap){ var px=cx*R, py=cy*R, SN=10*R;
    if(!noSnap) for(var i=cutPts.length-1;i>=0;i--){ var cp=cutPts[i], co=objById(cp.id); if(!co) continue; var sp2=scr(camP(pt(co,cp))); if(Math.hypot(sp2[0]-px,sp2[1]-py)<SN) return cp; }   /* the very same point again */
    var m0=S.mode; S.mode="edge"; var h=pick(cx,cy); S.mode=m0; if(!h||h.t!=="edge") return null; var o=S.objs[h.o], Sc=camO(o).map(scr), sd=segDist([px,py],Sc[h.a],Sc[h.b]), t=Math.max(.02,Math.min(.98,sd[1]));
    if(!noSnap){ var da=Math.hypot(Sc[h.a][0]-px,Sc[h.a][1]-py), db=Math.hypot(Sc[h.b][0]-px,Sc[h.b][1]-py); if(Math.min(da,db)<SN) return {id:o.id,v:da<=db?h.a:h.b,a:h.a,b:h.b,t:t}; }   /* a corner: snap to it */
    return {id:o.id,a:h.a,b:h.b,t:t}; }
  function drawCut(){ if(tool!=="cut") return; g2.lineCap="round"; var G="#5bd16a";
    function sp(o,e){ return scr(camP(pt(o,e))); }
    var pts=cutPts.map(function(c){ var o=objById(c.id); return o?sp(o,c):null; }).filter(Boolean);
    if(pts.length>1){ g2.beginPath(); pts.forEach(function(p,i){ if(i) g2.lineTo(p[0],p[1]); else g2.moveTo(p[0],p[1]); }); g2.strokeStyle=G; g2.lineWidth=2.4*R; g2.stroke(); }
    if(cutHover){ var o=objById(cutHover.id); if(!o) return;
      if(ctrlDown){ var Rg=ringOf(o,cutHover.a,cutHover.b,cutHover.t); g2.beginPath(); Rg.splits.forEach(function(sq){ var e1={a:sq.P[0],b:sq.P[1],t:sq.f}, e2={a:sq.P[3],b:sq.P[2],t:sq.f}, p1=sp(o,e1), p2=sp(o,e2); g2.moveTo(p1[0],p1[1]); g2.lineTo(p2[0],p2[1]); });
        g2.setLineDash([7*R,4*R]); g2.strokeStyle=G; g2.lineWidth=2.4*R; g2.stroke(); g2.setLineDash([]); }   /* Ctrl: the whole loop it would add */
      else { var hp=sp(o,cutHover); if(pts.length){ var l=pts[pts.length-1]; g2.beginPath(); g2.moveTo(l[0],l[1]); g2.lineTo(hp[0],hp[1]); g2.setLineDash([5*R,4*R]); g2.strokeStyle=G; g2.lineWidth=1.8*R; g2.stroke(); g2.setLineDash([]); }
        var snapped=cutHover.v!=null||cutPts.indexOf(cutHover)>=0; g2.beginPath(); g2.arc(hp[0],hp[1],(snapped?7:4.5)*R,0,7);
        if(snapped){ g2.lineWidth=2.4*R; g2.strokeStyle=G; g2.stroke(); g2.beginPath(); g2.arc(hp[0],hp[1],2*R,0,7); g2.fillStyle=G; g2.fill(); } else { g2.fillStyle=G; g2.fill(); } } }   /* snapped: a ring with a dot */
    pts.forEach(function(p){ g2.beginPath(); g2.arc(p[0],p[1],4*R,0,7); g2.fillStyle="#fff"; g2.fill(); g2.lineWidth=2*R; g2.strokeStyle=G; g2.stroke(); }); }
  var ctrlDown=false;
  function onDbl(e){ if(!wrap||inUI(e)||tool==="cut") return; if(S.mode!=="edge"&&S.mode!=="multi") return; var c=cutPick(e.clientX,e.clientY); if(!c) return; var o=objById(c.id);
    e.preventDefault(); e.stopPropagation(); var items=edgeLoop(o,c.a,c.b).map(function(k){ var ab=k.split("_").map(Number); return {id:o.id,t:"e",a:ab[0],b:ab[1]}; });
    var how=howOf(e); selApply(items,how==="replace"?"replace":how); snd(500); toast("Edge loop: "+items.length+" edge"+(items.length>1?"s":"")+"."); }   /* double-click an edge: its whole loop */
  /* ---- box select ---- */
  function boxSelect(b){ var x0=Math.min(b.x0,b.x1)*R, x1=Math.max(b.x0,b.x1)*R, y0=Math.min(b.y0,b.y1)*R, y1=Math.max(b.y0,b.y1)*R, inside=function(p){ return p[0]>=x0&&p[0]<=x1&&p[1]>=y0&&p[1]<=y1; };
    idPass(); var buf=readRect(x0-4*R,y0-4*R,x1+4*R,y1+4*R); gl.bindFramebuffer(gl.FRAMEBUFFER,null);
    var FL=faceList(), base={}; FL.forEach(function(x,g){ if(base[x.o]==null) base[x.o]=g; }); var items=[];
    S.objs.forEach(function(o,oi){ if(!o.vis) return; var Sc=camO(o).map(scr), own=function(k){ var r=[]; o.F.forEach(function(fc,fi){ if(fc.indexOf(k)>=0) r.push(base[oi]+fi); }); return r; }, ok=function(p,ow){ return !buf||seenAt(buf,p,ow); };
      if(S.mode==="object"){ if(Sc.some(inside)) items.push({id:o.id,t:"o"}); return; }
      if(S.mode==="vert"||S.mode==="multi") Sc.forEach(function(p,k){ if(inside(p)&&ok(p,own(k))) items.push({id:o.id,t:"v",i:k}); });
      if(S.mode==="edge"){ var seen={}; o.F.forEach(function(fc){ fc.forEach(function(k,j){ var m=fc[(j+1)%fc.length], a=Math.min(k,m), bb=Math.max(k,m), key=a+"_"+bb; if(seen[key]) return; seen[key]=1;
        var mid=[(Sc[a][0]+Sc[bb][0])/2,(Sc[a][1]+Sc[bb][1])/2]; if(inside(mid)&&ok(mid,own(a).filter(function(x){ return own(bb).indexOf(x)>=0; }))) items.push({id:o.id,t:"e",a:a,b:bb}); }); }); }
      if(S.mode==="face") o.F.forEach(function(fc,fi){ var c=[0,0]; fc.forEach(function(k){ c[0]+=Sc[k][0]/fc.length; c[1]+=Sc[k][1]/fc.length; }); if(inside(c)&&ok(c,[base[oi]+fi])) items.push({id:o.id,t:"f",i:fi}); }); });
    selApply(items,b.how); }

  function onMove(e){ if(!wrap) return; touch=e.pointerType==="touch"; ptr=inUI(e)?null:[e.clientX,e.clientY];
    if(bAdj){ e.preventDefault(); brushR=Math.max(4,Math.min(140,bAdj.r0+(e.clientX-bAdj.x)*.5)); return; }
    if(paintS){ e.preventDefault(); if(Math.hypot(e.clientX-paintS.last[0],e.clientY-paintS.last[1])>2) paintS.moved=true; var now=performance.now(); if(now-paintS.t<24) return; paintS.t=now;   /* the whole stretch since the last move, so fast strokes leave no gaps */
      paintS.hit+=paintAt(paintS.last,[e.clientX,e.clientY],paintS.how); paintS.last=[e.clientX,e.clientY]; return; } if(atDrag&&!atDrag.src){ e.preventDefault(); atMove(e); return; }
    if(menu){ menuHover(e); return; }
    if(camDrag){ e.preventDefault(); if(pinch) return; var dx=e.clientX-camDrag.x, dy=e.clientY-camDrag.y; camDrag.x=e.clientX; camDrag.y=e.clientY; if(camDrag.touch&&!camDrag.moved){ if(Math.hypot(e.clientX-camDrag.x0,e.clientY-camDrag.y0)<6) return; camDrag.moved=true; }
      if(camDrag.b===0){ orbit(function(){ ry+=dx*.008*(Math.cos(rx)<0?-1:1); rx+=dy*.008; }); } else if(camDrag.b===1){ var k=R*D/f; pan=[pan[0]+dx*k,pan[1]-dy*k,pan[2]]; } else { D=Math.max(2,Math.min(400,D*(1-(dx-dy)*.004))); } return; }
    if(carry){ e.preventDefault(); moveCarry(e); if(performance.now()-toggleT>500&&shakeCheck(e)) uncarry(e); return; }   /* a pause after each switch, so one shake does not switch twice */
    if(gzDrag){ e.preventDefault(); if(!gzDrag.moved&&Math.hypot(e.clientX-gzDrag.x0,e.clientY-gzDrag.y0)<2) return; gzDrag.moved=true; moveGizmo(e); if(tool==="move"&&performance.now()-toggleT>500&&shakeCheck(e)) startCarry(e); return; }
    if(box){ e.preventDefault(); box.x1=e.clientX; box.y1=e.clientY; if(Math.hypot(box.x1-box.x0,box.y1-box.y0)>3) box.moved=true;
      if(box.it&&tool==="select"&&box.how==="replace"&&performance.now()-toggleT>500&&shakeCheck(e)){ var it9=box.it; box=null; selApply([it9],"replace"); startCarry(e); }   /* Q: a shake on an object places it too, like W (Jakob, 19.10.2026) */
      return; }
    if(drag){ e.preventDefault(); if(!drag.moved&&Math.hypot(e.clientX-drag.sx,e.clientY-drag.sy)<3) return;
      if(!drag.moved){ drag.moved=true; mark(); drag.sv=selVerts(); paintBar(); }
      Object.keys(drag.sv).forEach(function(id){ moveBy(objById(+id),drag.sv[id],e.clientX-drag.x,e.clientY-drag.y); }); drag.x=e.clientX; drag.y=e.clientY; if(performance.now()-toggleT>500&&shakeCheck(e)) startCarry(e); return; }
    if(inUI(e)){ hover=null; gzHover=null; hot(false); return; }
    pending=[e.clientX,e.clientY]; }
  function onDown(e){ if(!wrap) return;
    if(carry&&carry.click){ if(e.button!==0) return; e.preventDefault(); e.stopPropagation(); swallow=true; moveCarry(e); if(carry.sn){ endCarry(); paintSil(true); } else if(E.props.dropHint){ var hd=document.querySelector(".egg-drop-hint"); if(hd){ hd.classList.remove("flash"); void hd.offsetWidth; hd.classList.add("flash"); } } return; }   /* placing with a click */
    if(inUI(e)) return;
    if(tool==="paint"&&e.button===0&&!e.altKey){ e.preventDefault(); e.stopPropagation(); swallow=true; root.classList.add("egg-cube-drag"); try{ getSelection().removeAllRanges(); }catch(x){}
      if(bKey){ bAdj={x:e.clientX,r0:brushR,cx:e.clientX,cy:e.clientY}; return; }   /* B + drag: the brush size */
      paintS={last:[e.clientX,e.clientY],how:(e.ctrlKey||e.metaKey)?"remove":"add",hit:0,moved:false,t:0}; paintS.hit+=paintAt(paintS.last,paintS.last,paintS.how); return; }
    if(e.button===1&&!e.altKey&&atPick){ var oa=sel(); if(oa&&atField(oa,atPick)){ e.preventDefault(); e.stopPropagation(); swallow=true; atStart(oa,atPick,e.clientX,e,null); return; } }   /* a highlighted input: middle-drag anywhere changes it, like Maya */
    if(e.button===1&&!e.altKey&&(tool==="move"||tool==="scale"||tool==="rotate")){ var gm=gizmo(); if(gm){ e.preventDefault(); e.stopPropagation(); swallow=true; root.classList.add("egg-cube-drag"); try{ getSelection().removeAllRanges(); }catch(x){} if(e.shiftKey&&tool!=="rotate"){ shiftMid(gm,e); return; } var hh=lastH[gtool()]||(tool==="rotate"?"v":"c"); startGizmo(hh,gm,e); return; } }   /* middle-drag: the last used handle, anywhere, like Maya */
    if(e.altKey&&e.pointerType!=="touch"){ e.preventDefault(); e.stopPropagation(); swallow=true; camDrag={b:e.button,x:e.clientX,y:e.clientY}; root.classList.add("egg-cube-drag"); try{ getSelection().removeAllRanges(); }catch(x){} if(turn&&e.button===0) setTurn(false); snapA=null; hover=null; hot(false); return; }
    var fae=document.activeElement; if(fae&&fae!==document.body&&/^(INPUT|TEXTAREA|SELECT)$/.test(fae.tagName)&&fae.closest&&fae.closest(".egg-cube")) fae.blur();   /* a press in the scene ends typing in a field, so Q, E and the other keys work again (18.10.2026) */
    touch=e.pointerType==="touch"; if(touch&&!e.isPrimary) return;   /* a second finger belongs to the pinch */ var g=gizmo(), gh=e.button===0?gizmoHit(g,e.clientX*R,e.clientY*R):null, h=gh?null:pick(e.clientX,e.clientY);
    if(touch&&e.button===0&&!gh&&!h&&tool!=="paint"&&tool!=="cut"){ e.preventDefault(); e.stopPropagation(); swallow=true; camDrag={b:0,x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY,touch:true,moved:false}; snapA=null; hover=null; return; }   /* touch (Jakob, 18.10.2026): a finger on empty space turns the camera */
    if(e.button===2){ var m0=S.mode; S.mode="object"; var ho=pick(e.clientX,e.clientY); S.mode=m0; if(!ho) return; e.preventDefault(); e.stopPropagation(); swallow=true; openMenu(e.clientX,e.clientY); return; }   /* right-drag anywhere on an object, in every mode: the marking menu */
    if(e.button>0) return;
    if(tool==="cut"&&!e.altKey){ var c=cutPick(e.clientX,e.clientY,e.ctrlKey||e.metaKey); if(!c) return; e.preventDefault(); e.stopPropagation(); swallow=true;
      if(e.ctrlKey||e.metaKey){ var o=objById(c.id); mark(); var n=ringCut(o,c.a,c.b,c.t); if(n){ csel={}; snd(560); toast("Edge loop added through "+n+" face"+(n>1?"s":"")+"."); paintAll(); } else undo.pop(); return; }
      var last=cutPts[cutPts.length-1]; if(last&&(last.id!==c.id||shareFace(objById(c.id),last,c)<0)){ cutFinish(); }
      cutPts.push(c); snd(620); return; }
    function grab(){ e.preventDefault(); e.stopPropagation(); swallow=true; root.classList.add("egg-cube-drag"); try{ getSelection().removeAllRanges(); }catch(x){} hint(); shakeReset(); }
    if(gh){ grab(); if(e.shiftKey&&tool==="move"&&S.mode==="object"&&!pivMode&&!g.ex&&dupInPlace()){ g=gizmo(); noMark=true; }
      else if(e.shiftKey&&g.ex&&gh==="n"){ extrudeSel(); var g4=gizmo(); if(g4&&g4.ex){ g=g4; noMark=true; } }   /* Shift on the thickness arrow: a new extrusion, like Maya (one undo step) */
      startGizmo(gh,g,e); return; }   /* Shift + drag: duplicate and move the copies, like Maya */
    var how=howOf(e);
    if(h){ grab(); var it=itemOf(h); hover=h;
      if(how==="replace"&&tool!=="select"){ var was=isSel(it); if(!was) selApply([it],"replace"); var g3=gizmo(); if(g3){ startGizmo(tool==="rotate"?"v":"c",g3,e,it,was); return; }   /* W, E, R work on the first click and drag: move freely, turn, scale */
        drag={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,moved:false,it:it,was:was}; return; }
      shakeReset(); box={x0:e.clientX,y0:e.clientY,x1:e.clientX,y1:e.clientY,how:how,it:it,moved:false}; return; }
    if(empty(e)){ grab(); box={x0:e.clientX,y0:e.clientY,x1:e.clientX,y1:e.clientY,how:how,it:null,moved:false}; } }   /* empty page space: a selection box (a click clears the selection) */
  function onUp(e){ var done=function(){ e.preventDefault(); e.stopPropagation(); root.classList.remove("egg-cube-drag"); setTimeout(function(){ swallow=false; },0); };
    if(atDrag&&!atDrag.src){ atEnd(); done(); return; }
    if(bAdj){ bAdj=null; toast("Brush size "+Math.round(brushR*2)+" px."); done(); return; }
    if(paintS){ var ps=paintS; paintS=null; ps.hit+=paintAt(ps.last,[e.clientX,e.clientY],ps.how); if(!ps.hit&&!ps.moved&&ps.how==="add"){ if(S.mode==="object") osel=[]; else csel={}; paintAll(); } done(); return; }   /* a click on empty space clears */
    if(menu){ ctxUntil=Date.now()+800; closeMenu(true); done(); return; }
    if(camDrag){ var cd=camDrag; if(cd.b===2) ctxUntil=Date.now()+800; camDrag=null; if(cd.touch&&!cd.moved&&!pinch){ osel=[]; S.sel=null; csel={}; hover=null; paintAll(); } done(); return; }   /* a tap on empty space clears the selection */
    if(carry){ if(carry.click){ done(); return; } endCarry(); done(); return; }   /* letting go places only after a shake, not after Place */
    if(gzDrag){ var gd=gzDrag, mv=gd.moved, kd=tool==="move"&&!gd.ext?"gzmove":"gz"; gzDrag=null; if(mv) endEdit(kd); else { undo.pop(); if(gd.it&&gd.was) selApply([gd.it],"replace"); } done(); return; }
    if(box){ var b=box; box=null; if(b.moved) boxSelect(b); else if(b.it) selApply([b.it],b.how); else if(b.how==="replace"){ osel=[]; csel={}; paintAll(); } done(); return; }
    if(drag){ var d=drag; drag=null; if(d.moved) endEdit("move"); else if(d.was) selApply([d.it],"replace"); if(e.pointerType==="touch"){ hover=null; hot(false); } done(); return; } }
  function onClick(e){ if(swallow){ e.preventDefault(); e.stopPropagation(); swallow=false; } }
  function onCtx(e){ if(wrap&&(e.altKey||camDrag||swallow||menu||Date.now()<ctxUntil)) e.preventDefault(); }   /* also right after the marking menu closes: some systems send the context menu after the button is released */
  function onMouse(e){ if(wrap&&(e.altKey||atPick)&&e.button===1&&!inUI(e)) e.preventDefault(); }   /* no browser auto-scroll on a middle press */
  var jDown=false;
  function altKeys(e){ if(!wrap) return; if((e.key==="j"||e.key==="J")&&!(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))) jDown=e.type==="keydown"; if(e.type==="blur") jDown=false; if((e.key==="b"||e.key==="B")&&!e.ctrlKey&&!e.metaKey&&!(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))) bKey=e.type==="keydown"; if((e.key==="d"||e.key==="D")&&!carry&&!e.ctrlKey&&!e.metaKey&&!(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))){ var was=pivMode; pivMode=e.type==="keydown"||pivLock; if(was!==pivMode&&S.mode==="object") toast(pivMode?"Pivot: drag the manipulator to move the pivot only.":"Pivot set."); } root.classList.toggle("egg-cube-alt",e.type==="keydown"&&e.key==="Alt"||(e.type!=="keyup"&&!!e.altKey)); ctrlDown=e.type==="blur"?false:e.type==="keydown"?(e.key==="Control"||e.key==="Meta"||e.ctrlKey||e.metaKey):(e.ctrlKey||e.metaKey)&&e.key!=="Control"&&e.key!=="Meta"; }
  var pinch=null;
  function onTouch(e){ if(!wrap||!e.touches) return; var t=e.touches[0]; if(t&&t.target&&t.target.closest&&t.target.closest(".egg-cube .cube-ui,.egg-cube .cube-sheetbar")) return; touch=true;
    if(e.touches.length===2&&!carry){ if(drag||gzDrag){ if(undo.length) load(undo.pop()); drag=null; gzDrag=null; shk=null; root.classList.remove("egg-cube-drag"); hover=null; paintAll(); }   /* the first finger had grabbed an object: two fingers mean the camera, so the object goes back */
      var a2=e.touches[0], b2=e.touches[1]; camDrag=null; pinch={d0:Math.hypot(a2.clientX-b2.clientX,a2.clientY-b2.clientY)||1,D0:D,mx:(a2.clientX+b2.clientX)/2,my:(a2.clientY+b2.clientY)/2}; e.preventDefault(); return; }   /* two fingers: pan and pinch-zoom (18.10.2026) */
    if(e.touches.length===1) e.preventDefault(); }   /* the page under Inca does not scroll */
  function onTouchMove(e){ if(!wrap||!pinch||!e.touches||e.touches.length!==2) return; e.preventDefault(); var a2=e.touches[0], b2=e.touches[1], d=Math.hypot(a2.clientX-b2.clientX,a2.clientY-b2.clientY)||1, mx=(a2.clientX+b2.clientX)/2, my=(a2.clientY+b2.clientY)/2;
    D=Math.max(2,Math.min(400,pinch.D0*pinch.d0/d)); var k=R*D/f; pan=[pan[0]+(mx-pinch.mx)*k,pan[1]-(my-pinch.my)*k,pan[2]]; pinch.mx=mx; pinch.my=my; snapA=null; }
  function onTouchEnd(e){ if(pinch&&(!e.touches||e.touches.length<2)){ pinch=null; camDrag=null; } }

  /* ---- the marking menu (right-drag on an object): Object Mode up, Vertex left, Edge right, Face down, Multi down-left ---- */
  var MM={n:"edge",ne:"object",w:"vert",e:"multi",s:"face"},   /* the layout of Maya's marking menu (Jakob, 18.10.2026); Multi-Cut where Maya has UV */ MODE_NAME={object:"Object Mode",multi:"Multi",vert:"Vertex",edge:"Edge",face:"Face",cut:"Multi-Cut"};
  /* the list below the ring, like Maya's (Jakob, 18.10.2026): Multi-Cut and the modeling actions; each one is available when its button in the bar is */
  var MM_LIST=[["cut","Multi-Cut",null],["ext","Extrude",".cb-ext"],"-",["merge","Merge",".cb-merge"],["mergec","Merge to Center",".cb-mergec"],"-",["comb","Combine",".cb-comb"],["sepa","Separate",".cb-sepa"],["dup","Duplicate",".cb-dup"],"-",["cpiv","Center Pivot",".cb-cpiv"]];
  function openMenu(x,y){ paintBar(); menu=document.createElement("div"); menu.className="cube-ui cube-mm"; menu.style.left=x+"px"; menu.style.top=y+"px";
    menu.innerHTML=Object.keys(MM).map(function(d){ return '<button type="button" class="mm-'+d+'" data-m="'+MM[d]+'">'+MODE_NAME[MM[d]]+'</button>'; }).join("")
      +'<div class="mm-list">'+MM_LIST.map(function(it){ if(it==="-") return '<i class="mm-sep"></i>'; var bb=it[2]&&q(it[2]), off=!!(bb&&bb.disabled); return '<button type="button" class="mm-a" data-m="a:'+it[0]+'"'+(off?' disabled':'')+'>'+it[1]+'</button>'; }).join("")+'</div>';
    wrap.appendChild(menu); menu._pick=null;
    var ls=menu.querySelector(".mm-list"), lr=ls.getBoundingClientRect(); if(lr.bottom>innerHeight-8) ls.classList.add("up");
    wrap.classList.add("mm-open"); }   /* the message line steps aside; no mode name in the middle (18.10.2026) */   /* no room below: the list opens above the ring */
  function menuListPick(e){ var hit=null; [].forEach.call(menu.querySelectorAll(".mm-a"),function(b){ var r=b.getBoundingClientRect(); if(!b.disabled&&e.clientX>=r.left-6&&e.clientX<=r.right+6&&e.clientY>=r.top&&e.clientY<=r.bottom) hit=b.getAttribute("data-m"); }); return hit; }
  function menuHover(e){ var cx=parseFloat(menu.style.left), cy=parseFloat(menu.style.top), dx=e.clientX-cx, dy=e.clientY-cy, pk=null, lr=menu.querySelector(".mm-list").getBoundingClientRect(), inList=e.clientX>=lr.left-8&&e.clientX<=lr.right+8&&e.clientY>=lr.top-4&&e.clientY<=lr.bottom+4;
    if(inList) pk=menuListPick(e);   /* over the list: its entries, not the ring */
    else if(Math.hypot(dx,dy)>18){ var a=Math.round(Math.atan2(dy,dx)/(Math.PI/4)); pk=({"0":"e","1":"se","2":"s","3":"sw","-2":"n","-1":"ne","4":"w","-4":"w","-3":"nw"})[a]||null; pk=pk&&MM[pk]; }
    [].forEach.call(menu.querySelectorAll("button"),function(b){ b.classList.toggle("on",b.getAttribute("data-m")===pk); }); menu._pick=pk; }
  function closeMenu(apply){ if(!menu) return; var p=menu._pick; menu.remove(); menu=null; wrap.classList.remove("mm-open"); if(!apply||!p) return;
    if(p==="a:cut"||p==="cut"){ setTool("cut"); return; }
    if(p.indexOf("a:")===0){ var it=MM_LIST.filter(function(x){ return x!=="-"&&x[0]===p.slice(2); })[0], bb=it&&it[2]&&q(it[2]); if(bb&&!bb.disabled){ var MM_DO={ext:extrudeSel,merge:function(){ mergeVerts(false); },mergec:function(){ mergeVerts(true); },dup:duplicate,comb:combineSel,sepa:separateSel,cpiv:centerPivot}; if(MM_DO[it[0]]) MM_DO[it[0]](); } return; }   /* the same action as its button in the bar, called directly (a click would be swallowed after the drag) */
    if(p!==S.mode) setMode(p); }
  var inkCol=[.85,.87,.9,1];
  function setShade(m,quiet){ dmode=m; try{ localStorage.setItem("sbh-cube-shade",m); }catch(e){} inkCol=inkRGB(); hover=null;
    if(wrap) [].forEach.call(qa(".cb-shade button"),function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-s")===m?"true":"false"); });
    if(!quiet){ snd(m==="wire"?360:m==="flat"?440:m==="lit"?600:520); toast(m==="wire"?"Wireframe (4)":m==="flat"?"Unshaded (5)":m==="lit"?"Lit (7): lights fixed in the scene":"Shaded (6)"); } }
  function setMode(m){ var was=S.mode; S.mode=m; hover=null;
    if(m==="object"&&was!=="object"){ var ids={}; Object.keys(csel).forEach(function(k){ ids[csel[k].id]=1; }); var l=Object.keys(ids).map(Number); if(l.length) osel=l; }   /* the parts' objects become the selection */
    else if(m!=="object"&&m!=="multi") Object.keys(csel).forEach(function(k){ var t=csel[k].t; if((m==="vert"&&t!=="v")||(m==="edge"&&t!=="e")||(m==="face"&&t!=="f")) delete csel[k]; });
    snd(m==="object"?420:480); toast(MODE_NAME[m]+(m==="object"?": click objects to select them.":m==="multi"?": corners, edges and faces.":"s.")); paintAll(); }
  var TOOL_NAME={select:"Select (Q)",move:"Move (W)",rotate:"Rotate (E)",scale:"Scale (R)",cut:"Multi-Cut: click edges or corners (they snap), Enter finishes; Ctrl + click adds an edge loop",paint:"Paint select: paint over parts to select them. Ctrl + paint deselects, B + drag changes the brush size."};
  function setTool(t,quiet){ extr=null; if(tool==="cut"&&t!=="cut") cutFinish(); cutHover=null; tool=t; gzHover=null; if(wrap) [].forEach.call(qa(".ch-tools button,.cube-head .cb-paint"),function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-t")===t?"true":"false"); }); if(!quiet){ snd(t==="select"?380:t==="move"?460:t==="rotate"?520:580); toast(TOOL_NAME[t]); } hot(hotNow); }

  /* ---- keys and the timeline ---- */
  var playing=false, playT0=0, playF0=1, autoKey=true, curTan="auto", gdirty=true;
  /* Auto key, as in Maya: when an object that already has keys is changed, a key is set at the current frame by itself; objects without keys are left alone (Jakob, 17.10.2026; on by default) */
  /* ---- transforms (Jakob, 18.10.2026): like Maya, every object has its own Translate, Rotate (degrees, rotate order XYZ) and Scale and a pivot, keyed per channel
     (o.K[channel][frame] = {v, t: auto|linear|step|user, m: slope of a dragged tangent}); its shape o.G is stored in its own space and o.V is that shape in the world,
     which is what is drawn and picked. Groups (o.grp) have no shape. o.par is the parent's id. Editing parts changes o.V and is baked back into o.G ---- */
  var CH=["tx","ty","tz","rx","ry","rz","sx","sy","sz"], CHN={tx:"Translate X",ty:"Translate Y",tz:"Translate Z",rx:"Rotate X",ry:"Rotate Y",rz:"Rotate Z",sx:"Scale X",sy:"Scale Y",sz:"Scale Z"};
  function trOf(o){ if(!o.T) o.T={t:[0,0,0],r:[0,0,0],s:[1,1,1],p:[0,0,0]}; return o.T; }
  function chArr(o,c){ var T=trOf(o); return c[0]==="t"?T.t:c[0]==="r"?T.r:T.s; }
  function chGet(o,c){ return chArr(o,c)["xyz".indexOf(c[1])]; }
  function chSet(o,c,v){ chArr(o,c)["xyz".indexOf(c[1])]=v; }
  function m3Rot(r){ var d=Math.PI/180, cx=Math.cos(r[0]*d), sx=Math.sin(r[0]*d), cy=Math.cos(r[1]*d), sy=Math.sin(r[1]*d), cz=Math.cos(r[2]*d), sz=Math.sin(r[2]*d);
    return [[cy*cz,cz*sx*sy-cx*sz,cx*cz*sy+sx*sz],[cy*sz,cx*cz+sx*sy*sz,-cz*sx+cx*sy*sz],[-sy,cy*sx,cx*cy]]; }
  function eulerOf(Rm,prev){ var d=180/Math.PI, P=prev||[0,0,0], sols=[], ry=Math.asin(Math.max(-1,Math.min(1,-Rm[2][0])));
    if(Math.abs(Math.cos(ry))>1e-6){ [ry,Math.PI-ry].forEach(function(y){ var cy=Math.cos(y); sols.push([Math.atan2(Rm[2][1]/cy,Rm[2][2]/cy)*d,y*d,Math.atan2(Rm[1][0]/cy,Rm[0][0]/cy)*d]); }); }
    else sols.push([Math.atan2(-Rm[1][2],Rm[1][1])*d,ry*d,0]);
    var best=null, bd=1e9; sols.forEach(function(sv){ var w=sv.map(function(a,i){ while(a-P[i]>180) a-=360; while(a-P[i]<-180) a+=360; return a; }), dd=Math.abs(w[0]-P[0])+Math.abs(w[1]-P[1])+Math.abs(w[2]-P[2]); if(dd<bd){ bd=dd; best=w; } });
    return best; }   /* of the two equivalent angle sets, the one closest to the old angles, so curves stay smooth and readable */
  function mLocal(o){ var T=trOf(o), Rm=m3Rot(T.r); return [0,1,2].map(function(i){ var row=[Rm[i][0]*T.s[0],Rm[i][1]*T.s[1],Rm[i][2]*T.s[2]]; return [row[0],row[1],row[2],T.t[i]+T.p[i]-(row[0]*T.p[0]+row[1]*T.p[1]+row[2]*T.p[2])]; }); }
  function mMul(A,B){ return [0,1,2].map(function(i){ return [0,1,2,3].map(function(j){ var v=A[i][0]*B[0][j]+A[i][1]*B[1][j]+A[i][2]*B[2][j]; return j===3?v+A[i][3]:v; }); }); }
  function mApply(M,v){ return [M[0][0]*v[0]+M[0][1]*v[1]+M[0][2]*v[2]+M[0][3],M[1][0]*v[0]+M[1][1]*v[1]+M[1][2]*v[2]+M[1][3],M[2][0]*v[0]+M[2][1]*v[1]+M[2][2]*v[2]+M[2][3]]; }
  function mVec(M,v){ return [M[0][0]*v[0]+M[0][1]*v[1]+M[0][2]*v[2],M[1][0]*v[0]+M[1][1]*v[1]+M[1][2]*v[2],M[2][0]*v[0]+M[2][1]*v[1]+M[2][2]*v[2]]; }
  function mInv(M){ var a=M[0][0],b=M[0][1],c=M[0][2],d=M[1][0],e=M[1][1],f2=M[1][2],g=M[2][0],h=M[2][1],k=M[2][2], det=a*(e*k-f2*h)-b*(d*k-f2*g)+c*(d*h-e*g); if(Math.abs(det)<1e-12) det=det<0?-1e-12:1e-12;
    var I=[[(e*k-f2*h)/det,(c*h-b*k)/det,(b*f2-c*e)/det],[(f2*g-d*k)/det,(a*k-c*g)/det,(c*d-a*f2)/det],[(d*h-e*g)/det,(b*g-a*h)/det,(a*e-b*d)/det]], t=[M[0][3],M[1][3],M[2][3]];
    return I.map(function(row){ return [row[0],row[1],row[2],-(row[0]*t[0]+row[1]*t[1]+row[2]*t[2])]; }); }
  var MID=[[1,0,0,0],[0,1,0,0],[0,0,1,0]];
  function parentOf(o){ return o&&o.par!=null?objById(o.par):null; }
  function mWorld(o){ var M=mLocal(o), p=parentOf(o), guard=0; while(p&&guard++<64){ M=mMul(mLocal(p),M); p=parentOf(p); } return M; }
  function mParent(o){ var p=parentOf(o); return p?mWorld(p):MID; }
  function kids(o){ return S.objs.filter(function(c){ return c.par===o.id; }); }
  function desc(o){ var out=[]; (function walk(n,d){ if(d>64) return; kids(n).forEach(function(c){ out.push(c); walk(c,d+1); }); })(o,0); return out; }
  function isDesc(a,b){ return desc(b).indexOf(a)>=0; }   /* is a below b? */
  function worldV(n){ if(n.grp){ n.V=[]; return; } var M=mWorld(n); n.V=n.G.map(function(v){ return mApply(M,v); }); }
  function refresh(o){ worldV(o); desc(o).forEach(worldV); }
  function refreshAll(){ S.objs.forEach(worldV); }
  function bake(o){ if(!o||o.grp) return; var Mi=mInv(mWorld(o)); o.G=o.V.map(function(v){ return mApply(Mi,v); }); }
  function pivotW(o){ var T=trOf(o); return mApply(mParent(o),[T.t[0]+T.p[0],T.t[1]+T.p[1],T.t[2]+T.p[2]]); }
  function boxC(P){ if(!P.length) return [0,0,0]; var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; P.forEach(function(v){ for(var i=0;i<3;i++){ lo[i]=Math.min(lo[i],v[i]); hi[i]=Math.max(hi[i],v[i]); } }); return [(lo[0]+hi[0])/2,(lo[1]+hi[1])/2,(lo[2]+hi[2])/2]; }
  function worldPts(o){ var P=o.V.slice(); desc(o).forEach(function(c){ P=P.concat(c.V); }); return P; }
  /* a world matrix back into Translate, Rotate, Scale; the pivot stays */
  function fromWorld(o,Mw){ var L=mMul(mInv(mParent(o)),Mw), T=trOf(o), s=[0,1,2].map(function(j){ return Math.hypot(L[0][j],L[1][j],L[2][j])||1e-9; });
    var det=L[0][0]*(L[1][1]*L[2][2]-L[1][2]*L[2][1])-L[0][1]*(L[1][0]*L[2][2]-L[1][2]*L[2][0])+L[0][2]*(L[1][0]*L[2][1]-L[1][1]*L[2][0]); if(det<0) s[0]=-s[0];
    var Rm=[0,1,2].map(function(i){ return [L[i][0]/s[0],L[i][1]/s[1],L[i][2]/s[2]]; }), Ap=[0,1,2].map(function(i){ return L[i][0]*T.p[0]+L[i][1]*T.p[1]+L[i][2]*T.p[2]; });
    T.r=eulerOf(Rm,T.r); T.s=s; T.t=[0,1,2].map(function(i){ return L[i][3]-T.p[i]+Ap[i]; }); }
  /* move the pivot without moving the object: world pivot goes to Pw */
  function setPivotW(o,Pw){ var T=trOf(o), Rm=m3Rot(T.r), RS=[0,1,2].map(function(i){ return [Rm[i][0]*T.s[0],Rm[i][1]*T.s[1],Rm[i][2]*T.s[2]]; }), cur=pivotW(o), Mi=mInv(mParent(o)), dw=mVec(Mi,[Pw[0]-cur[0],Pw[1]-cur[1],Pw[2]-cur[2]]);
    var RSi=mInv(RS.map(function(r){ return [r[0],r[1],r[2],0]; })), dp=mVec(RSi,dw), Idp=[0,1,2].map(function(i){ return dp[i]-(RS[i][0]*dp[0]+RS[i][1]*dp[1]+RS[i][2]*dp[2]); });
    T.p=[T.p[0]+dp[0],T.p[1]+dp[1],T.p[2]+dp[2]]; T.t=[T.t[0]-Idp[0],T.t[1]-Idp[1],T.t[2]-Idp[2]]; }
  /* old scenes (every corner keyed) become transforms: the motion between keys is fitted with translate, rotate and uniform scale (Horn's method) */
  function eig4(N){ var a=N.map(function(r){ return r.slice(); }), v=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
    for(var sw=0;sw<40;sw++){ var off=0, p, q, k; for(p=0;p<4;p++) for(q=p+1;q<4;q++) off+=a[p][q]*a[p][q]; if(off<1e-16) break;
      for(p=0;p<3;p++) for(q=p+1;q<4;q++){ if(Math.abs(a[p][q])<1e-18) continue; var th=(a[q][q]-a[p][p])/(2*a[p][q]), t=(th>=0?1:-1)/(Math.abs(th)+Math.sqrt(th*th+1)), c=1/Math.sqrt(t*t+1), s=t*c;
        for(k=0;k<4;k++){ var akp=a[k][p], akq=a[k][q]; a[k][p]=c*akp-s*akq; a[k][q]=s*akp+c*akq; } for(k=0;k<4;k++){ var apk=a[p][k], aqk=a[q][k]; a[p][k]=c*apk-s*aqk; a[q][k]=s*apk+c*aqk; }
        for(k=0;k<4;k++){ var vkp=v[k][p], vkq=v[k][q]; v[k][p]=c*vkp-s*vkq; v[k][q]=s*vkp+c*vkq; } } }
    var bi=0; for(var i=1;i<4;i++) if(a[i][i]>a[bi][bi]) bi=i; return [v[0][bi],v[1][bi],v[2][bi],v[3][bi]]; }
  function fitTRS(A,B,ca){ var cb=cen(B), Sm=[[0,0,0],[0,0,0],[0,0,0]], na=0, nb=0;
    A.forEach(function(p,i){ var a=[p[0]-ca[0],p[1]-ca[1],p[2]-ca[2]], b=[B[i][0]-cb[0],B[i][1]-cb[1],B[i][2]-cb[2]]; na+=a[0]*a[0]+a[1]*a[1]+a[2]*a[2]; nb+=b[0]*b[0]+b[1]*b[1]+b[2]*b[2]; for(var r=0;r<3;r++) for(var c=0;c<3;c++) Sm[r][c]+=a[r]*b[c]; });
    var s=na>1e-12?Math.sqrt(nb/na):1, X=Sm, N=[[X[0][0]+X[1][1]+X[2][2],X[1][2]-X[2][1],X[2][0]-X[0][2],X[0][1]-X[1][0]],[X[1][2]-X[2][1],X[0][0]-X[1][1]-X[2][2],X[0][1]+X[1][0],X[2][0]+X[0][2]],
      [X[2][0]-X[0][2],X[0][1]+X[1][0],-X[0][0]+X[1][1]-X[2][2],X[1][2]+X[2][1]],[X[0][1]-X[1][0],X[2][0]+X[0][2],X[1][2]+X[2][1],-X[0][0]-X[1][1]+X[2][2]]], qv=eig4(N), w=qv[0], x=qv[1], y=qv[2], z=qv[3];
    var Rm=[[1-2*(y*y+z*z),2*(x*y-w*z),2*(x*z+w*y)],[2*(x*y+w*z),1-2*(x*x+z*z),2*(y*z-w*x)],[2*(x*z-w*y),2*(y*z+w*x),1-2*(x*x+y*y)]];
    return {t:[cb[0]-ca[0],cb[1]-ca[1],cb[2]-ca[2]],r:eulerOf(Rm),s:s}; }
  function migrate(o){ if(o.G&&o.T){ o.K=o.K||{}; if(o.par===undefined) o.par=null; return; } var V=o.V||[]; o.K={}; o.par=null; o.T={t:[0,0,0],r:[0,0,0],s:[1,1,1],p:boxC(V)};
    var ks=o.keys?Object.keys(o.keys).map(Number).sort(function(a,b){ return a-b; }):[];
    if(ks.length&&o.keys[ks[0]].length){ var base=o.keys[ks[0]], ca=cen(base), prev=[0,0,0]; o.G=base.map(function(v){ return v.slice(); }); o.T.p=ca;
      ks.forEach(function(k){ var B=o.keys[k]; if(!B||B.length!==base.length) return; var ft=fitTRS(base,B,ca), r=eulerOf(m3Rot(ft.r),prev), tan=(o.tan&&o.tan[k])||"auto"; prev=r; if(tan==="user") tan="auto";
        [["tx",ft.t[0]],["ty",ft.t[1]],["tz",ft.t[2]],["rx",r[0]],["ry",r[1]],["rz",r[2]],["sx",ft.s],["sy",ft.s],["sz",ft.s]].forEach(function(cv){ (o.K[cv[0]]=o.K[cv[0]]||{})[k]={v:cv[1],t:tan,m:null}; }); }); }
    else o.G=V.map(function(v){ return v.slice(); });
    delete o.keys; delete o.tan; delete o.tw; worldV(o); }
  /* ---- keys per channel ---- */
  function chFrames(o,c){ return o.K&&o.K[c]?Object.keys(o.K[c]).map(Number).sort(function(a,b){ return a-b; }):[]; }
  function hasKeys(o){ return !!o&&!!o.K&&CH.some(function(c){ return o.K[c]&&Object.keys(o.K[c]).length>0; }); }
  function chVals(o,c,ks){ return ks.map(function(k){ return o.K[c][k].v; }); }
  function keySlope(o,c,ks,i){ var kk=o.K[c][ks[i]]; if(kk.m!=null) return kk.m; if(kk.t==="step") return 0;
    if(kk.t==="linear"){ if(i<ks.length-1) return (o.K[c][ks[i+1]].v-kk.v)/(ks[i+1]-ks[i]); if(i>0) return (kk.v-o.K[c][ks[i-1]].v)/(ks[i]-ks[i-1]); return 0; } return slopeAt(ks,chVals(o,c,ks),i); }
  function evalCh(o,c,fr){ var ks=chFrames(o,c); if(!ks.length) return null; var n=ks.length, inf=o.inf||{}, span=ks[n-1]-ks[0], K=o.K[c];
    if(span>0){ if(fr<ks[0]&&inf.pre==="cycle") fr=ks[n-1]-((ks[0]-fr)%span); else if(fr>ks[n-1]&&inf.post==="cycle") fr=ks[0]+((fr-ks[0])%span); }   /* Loop before and after, like Maya's Cycle */
    if(fr<=ks[0]) return K[ks[0]].v; if(fr>=ks[n-1]) return K[ks[n-1]].v; var i=0; while(i<n-2&&ks[i+1]<=fr) i++;
    var a=ks[i], b=ks[i+1], A=K[a], B=K[b], ty=A.t||"auto"; if(fr===a) return A.v; if(ty==="step") return A.v; var t=(fr-a)/(b-a); if(ty==="linear") return A.v+(B.v-A.v)*t;
    var h=b-a, t2=t*t, t3=t2*t, ma=A.m!=null?A.m:slopeAt(ks,chVals(o,c,ks),i), mb=B.m!=null?B.m:(B.t==="linear"?(B.v-A.v)/h:slopeAt(ks,chVals(o,c,ks),i+1));
    if(o.KW&&o.KW[c]){ var wa=A.wo!=null?A.wo:1/3, wb=B.wi!=null?B.wi:1/3, X1=a+wa*h, X2=b-wb*h, Y1=A.v+ma*wa*h, Y2=B.v-mb*wb*h, lo=0, hi=1, u=t;   /* weighted tangents (Jakob, 18.10.2026): a Bezier segment whose handles can be longer or shorter */
      var bz=function(p0,p1,p2,p3,s2){ var r2=1-s2; return r2*r2*r2*p0+3*r2*r2*s2*p1+3*r2*s2*s2*p2+s2*s2*s2*p3; };
      for(var it=0;it<28;it++){ u=(lo+hi)/2; if(bz(a,X1,X2,b,u)<fr) lo=u; else hi=u; } return bz(A.v,Y1,Y2,B.v,(lo+hi)/2); }
    return (2*t3-3*t2+1)*A.v+(t3-2*t2+t)*h*ma+(-2*t3+3*t2)*B.v+(t3-t2)*h*mb; }
  function poseAt(o,fr){ if(!o.K) return; CH.forEach(function(c){ var v=evalCh(o,c,fr); if(v!=null) chSet(o,c,v); }); }
  function setKeyAt(o,fr,only){ o.K=o.K||{}; (only||CH).forEach(function(c){ var K=o.K[c]=o.K[c]||{}, old=K[fr]; K[fr]={v:chGet(o,c),t:old?old.t:curTan,m:null}; }); }
  function setAuto(v){ autoKey=v; try{ localStorage.setItem("sbh-cube-autokey",v?"1":"0"); }catch(e){} var b=wrap&&wrap.querySelector(".tl-auto"); if(b){ b.setAttribute("aria-pressed",v?"true":"false"); b.title=v?"Auto Key is on: changes to keyed objects set a key":"Auto Key is off"; } }
  function autoKeyFor(o){ if(!autoKey||!hasKeys(o)) return; var ch=CH.filter(function(c){ if(!chFrames(o,c).length) return false; var v=evalCh(o,c,S.frame); return v==null||Math.abs(v-chGet(o,c))>1e-7; }); if(ch.length){ setKeyAt(o,S.frame,ch); gdirty=true; paintAll(); } }   /* keyed attributes that changed get a key, like Maya */
  function targets(){ var ids=S.mode==="object"?osel.slice():Object.keys(selVerts()).map(Number); if(!ids.length&&S.sel) ids=[S.sel]; return ids.map(objById).filter(Boolean); }
  function setKey(){ var ts=targets(); if(!ts.length){ toast("Nothing selected."); return; } mark(); ts.forEach(function(o){ setKeyAt(o,S.frame); }); gdirty=true; snd(620); toast("Key set for "+(ts.length===1?ts[0].name:ts.length+" objects")+" at frame "+S.frame+": Translate, Rotate and Scale."); paintAll(); }
  function keyTimes(o){ var m={}; CH.forEach(function(c){ chFrames(o,c).forEach(function(f){ m[f]=1; }); }); return Object.keys(m).map(Number).sort(function(a,b){ return a-b; }); }   /* every frame with a key on any channel */
  function slopeAt(T,Y,k){ if(k<=0||k>=T.length-1) return 0; var d0=(Y[k]-Y[k-1])/(T[k]-T[k-1]), d1=(Y[k+1]-Y[k])/(T[k+1]-T[k]); if(d0*d1<=0) return 0; return 2/(1/d0+1/d1); }   /* flat at the ends and where the curve turns, so it never overshoots */
  function applyFrame(){ S.objs.forEach(function(o){ poseAt(o,S.frame); }); refreshAll(); }
  function gotoFrame(fr){ S.frame=Math.max(1,Math.min(FRAMES,Math.round(fr))); applyFrame(); paintTimeline(); }
  var playDir=1, ICO_FWD='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5v14l11-7z"/></svg>', ICO_REV='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 5v14L6 12z"/></svg>', ICO_PAUSE='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.4v14H7zM13.6 5H17v14h-3.4z"/></svg>';
  function play(on,dir){ playing=on; if(dir) playDir=dir; if(on){ playT0=performance.now(); playF0=S.frame; } if(!wrap) return;   /* forwards or backwards, like Maya's playback buttons; the running one turns into pause (Jakob, 17.10.2026) */
    var f=wrap.querySelector(".tl-play"), r=wrap.querySelector(".tl-rev"); if(!f) return;
    f.innerHTML=on&&playDir>0?ICO_PAUSE:ICO_FWD; f.setAttribute("aria-label",on&&playDir>0?"Pause":"Play forwards"); f.setAttribute("aria-pressed",on&&playDir>0?"true":"false");
    r.innerHTML=on&&playDir<0?ICO_PAUSE:ICO_REV; r.setAttribute("aria-label",on&&playDir<0?"Pause":"Play backwards"); r.setAttribute("aria-pressed",on&&playDir<0?"true":"false"); }

  /* ---- tangents and the graph editor (Jakob, 17.10.2026): one curve per axis for the selected object's position (the center of its shape at each key);
     drag a key up or down to move the object at that key, sideways to retime it; click or drag on empty space to scrub; Shift adds keys to the selection;
     Delete removes the selected keys; Auto, Linear and Stepped set the selected keys (or all keys of the object) and the type for new keys ---- */
  var geOpen=false, ge=null, gg=null, gsel=[], gcache=null, gdrag=null, gch={x:true,y:true,z:true}, GCOL={x:"#e2574c",y:"#5bb46a",z:"#4a8fe7"}, gRange=null, gHover=null;
  function cen(V){ var c=[0,0,0]; V.forEach(function(v){ c[0]+=v[0]; c[1]+=v[1]; c[2]+=v[2]; }); var n=V.length||1; return [c[0]/n,c[1]/n,c[2]/n]; }
  /* ---- Graph Editor (Jakob, 18.10.2026): like Maya, a sidebar with all nine attributes (click shows one, Shift or Ctrl adds, the name shows every keyed one);
     keys belong to one curve; drag on empty space for a marquee; "All Axes" selects the same frame on every shown curve; the frame numbers at the bottom scrub ---- */
  var gvis=null, gvisFor=null, gAll=false, gMarq=null, gHandles=[], GC={x:"#e2574c",y:"#5bb46a",z:"#4a8fe7"}, GDASH={t:[],r:[7,4],s:[2,4]};
  function gShown(o){ if(!o) return []; if(gvisFor!==o.id||!gvis){ gvisFor=o.id; var keyed=CH.filter(function(c){ return chFrames(o,c).length; }); gvis=keyed.length?keyed:CH.slice(); } return gvis; }
  function gData(){ var o=sel(); if(!o) return null; var sig=o.id+"|"+gShown(o).join(); if(gcache&&!gdirty&&gcache.sig===sig) return gcache; var cs={};
    gShown(o).forEach(function(c){ var ks=chFrames(o,c); if(!ks.length) return; var smp=[]; for(var fr=1;fr<=FRAMES;fr++) smp.push(evalCh(o,c,fr)); cs[c]={ks:ks,vals:chVals(o,c,ks),smp:smp}; });
    gdirty=false; gcache={sig:sig,id:o.id,cs:cs,any:Object.keys(cs).length>0}; return gcache; }
  function gBox(){ var w=ge.width, h=ge.height; return {L:44*R,T:12*R,Rr:12*R,B:22*R,w:w,h:h}; }
  function gRangeOf(d){ var lo=1e9, hi=-1e9; Object.keys(d.cs).forEach(function(c){ d.cs[c].smp.forEach(function(v){ lo=Math.min(lo,v); hi=Math.max(hi,v); }); }); if(lo>hi){ lo=-1; hi=1; }
    var sp=hi-lo; if(sp<.2){ var m=(lo+hi)/2; lo=m-.5; hi=m+.5; sp=1; } return [lo-sp*.15,hi+sp*.15]; }
  function gk(c,f){ return c+":"+f; } function gIsSel(c,f){ return gsel.indexOf(gk(c,f))>=0; }
  /* the Graph Editor's view (Jakob, 18.10.2026): Alt + Shift + right-drag zooms one axis, F over the Graph Editor shows everything again */
  var gView=null, geOver=false, geTool="move", gClip=null;
  function gF0(){ return gView?gView.f0:1; } function gF1(){ return gView?gView.f1:FRAMES; }
  function gX(fr,bx){ return bx.L+(fr-gF0())/(gF1()-gF0())*(bx.w-bx.L-bx.Rr); } function gFr(x,bx){ return gF0()+(x-bx.L)/(bx.w-bx.L-bx.Rr)*(gF1()-gF0()); }
  function gY(v,bx,rg){ return bx.T+(rg[1]-v)/(rg[1]-rg[0])*(bx.h-bx.T-bx.B); }
  var gSideSig="";
  function paintSide(){ var side=q(".ge-side"); if(!side) return; var o=sel(), sig=o?o.id+"|"+o.name+"|"+gShown(o).join()+"|"+CH.map(function(c){ return chFrames(o,c).length?1:0; }).join(""):"none"; if(sig===gSideSig) return; gSideSig=sig;
    if(!o){ side.innerHTML='<p class="gs-none">No object selected.</p>'; return; }
    side.innerHTML='<button type="button" class="gs-obj" title="Show every keyed attribute">'+o.name+'</button>'+CH.map(function(c){ var on=gShown(o).indexOf(c)>=0, k=chFrames(o,c).length;
      return '<button type="button" class="gs-ch'+(k?" keyed":"")+'" data-c="'+c+'" aria-pressed="'+(on?"true":"false")+'"><i class="gs-sw gs-'+c[0]+'" style="--c:'+GC[c[1]]+'"></i>'+CHN[c]+'</button>'; }).join(""); }
  function gSideEvents(){ q(".ge-side").addEventListener("click",function(e){ var b=e.target.closest("button"), o=sel(); if(!b||!o) return; gShown(o);
      if(b.classList.contains("gs-obj")){ var keyed=CH.filter(function(c){ return chFrames(o,c).length; }); gvis=keyed.length?keyed:CH.slice(); }
      else { var c=b.getAttribute("data-c"); if(e.shiftKey||e.ctrlKey||e.metaKey){ var at=gvis.indexOf(c); if(at>=0){ if(gvis.length>1) gvis.splice(at,1); } else gvis.push(c); } else gvis=[c]; gvis=CH.filter(function(x){ return gvis.indexOf(x)>=0; }); }
      gsel=gsel.filter(function(k){ return gvis.indexOf(k.split(":")[0])>=0; }); gRange=null; gdirty=true; snd(540); }); }
  function drawGraph(){ if(!geOpen||!ge) return; gHandles=[]; paintSide(); var bx=gBox(), d=gData(), cs=getComputedStyle(root), ink=cs.getPropertyValue("--ink-mute").trim()||"#888", line=cs.getPropertyValue("--line").trim()||"#ccc", surf=cs.getPropertyValue("--surface").trim()||"#fff";
    gg.clearRect(0,0,bx.w,bx.h); gg.font=Math.round(11.5*R)+"px ui-monospace,Menlo,Consolas,monospace"; gg.textBaseline="middle";
    var empty=q(".ge-empty"), o=sel(); if(!d||!d.any){ empty.hidden=false; empty.textContent=o?(hasKeys(o)?"Pick an attribute on the left to see its curve.":"No keys on "+o.name+" yet. Press S to set one."):"Select an object to see its curves."; return; } empty.hidden=true;
    var rg=gView?(gRange=[gView.v0,gView.v1]):(gdrag&&gRange?gRange:(gRange=gRangeOf(d))), st=niceStep(rg[1]-rg[0]), ppf=(bx.w-bx.L-bx.Rr)/(gF1()-gF0()), ppv=(bx.h-bx.T-bx.B)/(rg[1]-rg[0]);
    gg.strokeStyle=line; gg.lineWidth=1; gg.fillStyle=ink; gg.textAlign="right";
    for(var v=Math.ceil(rg[0]/st)*st; v<=rg[1]; v+=st){ var y=gY(v,bx,rg); gg.beginPath(); gg.moveTo(bx.L,y); gg.lineTo(bx.w-bx.Rr,y); gg.globalAlpha=Math.abs(v)<st/2?.9:.45; gg.stroke(); gg.globalAlpha=1; gg.fillText((Math.abs(v)<1e-9?0:+v.toFixed(2))+"",bx.L-6*R,y); }
    var fst=Math.max(1,Math.round(niceStep(gF1()-gF0()))); while(fst/(gF1()-gF0())*(bx.w-bx.L-bx.Rr)<34*R) fst*=2;   /* frame numbers that fit, whatever the zoom */
    gg.textAlign="center"; for(var fr=Math.max(1,Math.ceil(gF0()/fst)*fst);fr<=gF1();fr+=fst){ var x=gX(fr,bx); gg.globalAlpha=.35; gg.beginPath(); gg.moveTo(x,bx.T); gg.lineTo(x,bx.h-bx.B); gg.stroke(); gg.globalAlpha=1; gg.fillText(fr+"",x,bx.h-bx.B/2); }
    gg.save(); gg.beginPath(); gg.rect(bx.L-6*R,0,bx.w-bx.L-bx.Rr+12*R,bx.h-bx.B); gg.clip();   /* zoomed in: what is outside stays outside */
    gg.lineWidth=2*R; gg.strokeStyle="#f2c14e"; var fx=gX(S.frame,bx); gg.beginPath(); gg.moveTo(fx,bx.T-4*R); gg.lineTo(fx,bx.h-bx.B); gg.stroke();
    var ftx=String(S.frame); gg.font="700 "+Math.round(10.5*R)+"px ui-monospace,Menlo,Consolas,monospace"; var ftw=gg.measureText(ftx).width+8*R; gg.fillStyle="#f2c14e"; gg.beginPath(); if(gg.roundRect) gg.roundRect(fx-ftw/2,0,ftw,14*R,4*R); else gg.rect(fx-ftw/2,0,ftw,14*R); gg.fill(); gg.fillStyle="#1b1f2a"; gg.textAlign="center"; gg.fillText(ftx,fx,7.5*R); gg.font=Math.round(11.5*R)+"px ui-monospace,Menlo,Consolas,monospace";   /* the frame on a tab at the top, like Maya */
    Object.keys(d.cs).forEach(function(c){ var cd=d.cs[c], col=GC[c[1]]; gg.strokeStyle=col; gg.lineWidth=1.8*R; gg.setLineDash(GDASH[c[0]].map(function(x){ return x*R; })); gg.beginPath(); var py=0;
      cd.smp.forEach(function(val,i){ var fr2=i+1, x=gX(fr2,bx), y=gY(val,bx,rg), ki=cd.ks.indexOf(fr2); if(i&&ki>0&&(o.K[c][cd.ks[ki-1]].t||"auto")==="step") gg.lineTo(x,py); if(i) gg.lineTo(x,y); else gg.moveTo(x,y); py=y; }); gg.stroke(); gg.setLineDash([]);
      var wtd=!!(o.KW&&o.KW[c]);
      cd.ks.forEach(function(k,ki){ if(!gIsSel(c,k)) return; var kk=o.K[c][k]; if((kk.t||"auto")==="step") return; var m=keySlope(o,c,cd.ks,ki), kx=gX(k,bx), ky=gY(cd.vals[ki],bx,rg), vx=ppf, vy=-m*ppv, l=Math.hypot(vx,vy)||1, L=34*R; vx=vx/l*L; vy=vy/l*L;
        var hs={"-1":ki>0?k-cd.ks[ki-1]:0,"1":ki<cd.ks.length-1?cd.ks[ki+1]-k:0}, hv2=function(sd){ var hsd=hs[sd]; if(!wtd||!hsd) return [sd*vx,sd*vy]; var w=sd<0?(kk.wi!=null?kk.wi:1/3):(kk.wo!=null?kk.wo:1/3); return [sd*w*hsd*ppf,-sd*m*w*hsd*ppv]; };   /* weighted: the handle is as long as its weight */
        var hL=hv2(-1), hR=hv2(1); gg.strokeStyle=ink; gg.lineWidth=1.3*R; gg.beginPath(); gg.moveTo(kx+hL[0],ky+hL[1]); gg.lineTo(kx+hR[0],ky+hR[1]); gg.stroke();
        [-1,1].forEach(function(sd){ var hp=sd<0?hL:hR, hx=kx+hp[0], hy=ky+hp[1], hv=gHover&&gHover.handle&&gHover.c===c&&gHover.k===k&&gHover.side===sd; gg.beginPath(); gg.arc(hx,hy,(hv?4.2:3.2)*R,0,7); gg.fillStyle=hv?"#f2c14e":surf; gg.fill(); gg.strokeStyle=col; gg.lineWidth=1.4*R; gg.stroke();
          gHandles.push({handle:true,c:c,k:k,side:sd,x:hx,y:hy,kx:kx,ky:ky,ppf:ppf,ppv:ppv,wtd:wtd&&!!hs[sd],hs:hs[sd]}); }); });
      cd.ks.forEach(function(k,ki){ var x=gX(k,bx), y=gY(cd.vals[ki],bx,rg), on=gIsSel(c,k), hv=gHover&&!gHover.handle&&gHover.c===c&&gHover.k===k, r=(on||hv?4.5:3.5)*R;
        gg.fillStyle=on?"#f2c14e":surf; gg.strokeStyle=on?"#1b1f2a":col; gg.lineWidth=1.5*R; gg.beginPath(); gg.rect(x-r,y-r,2*r,2*r); gg.fill(); gg.stroke(); }); });
    if(gdrag&&gdrag.cur&&o.K[gdrag.cur.c]&&o.K[gdrag.cur.c][gdrag.cur.f]){ var cu=gdrag.cur, kv=o.K[cu.c][cu.f].v, lx=gX(cu.f,bx), ly=gY(kv,bx,rg), tx="frame "+cu.f+"  value "+(+kv.toFixed(3));   /* while dragging a key: where it is, like Maya */
      gg.font="700 "+Math.round(11*R)+"px ui-monospace,Menlo,Consolas,monospace"; var tw=gg.measureText(tx).width+12*R, ty=ly-16*R<bx.T+8*R?ly+16*R:ly-16*R, txx=Math.max(bx.L+tw/2,Math.min(bx.w-bx.Rr-tw/2,lx));
      gg.fillStyle="#1b1f2a"; gg.globalAlpha=.88; gg.fillRect(txx-tw/2,ty-9*R,tw,18*R); gg.globalAlpha=1; gg.fillStyle="#f2c14e"; gg.textAlign="center"; gg.fillText(tx,txx,ty); }
    gg.restore(); paintGeStats();
    if(gMarq){ gg.fillStyle="rgba(242,193,78,.12)"; gg.strokeStyle="#f2c14e"; gg.lineWidth=1.2*R; gg.setLineDash([4*R,3*R]); var mx=Math.min(gMarq.x0,gMarq.x1), my=Math.min(gMarq.y0,gMarq.y1); gg.fillRect(mx,my,Math.abs(gMarq.x1-gMarq.x0),Math.abs(gMarq.y1-gMarq.y0)); gg.strokeRect(mx,my,Math.abs(gMarq.x1-gMarq.x0),Math.abs(gMarq.y1-gMarq.y0)); gg.setLineDash([]); } }
  function gPos(e){ var r=ge.getBoundingClientRect(); return [(e.clientX-r.left)*ge.width/r.width,(e.clientY-r.top)*ge.height/r.height]; }
  function gHit(e){ var d=gData(), p=gPos(e), bx=gBox(); if(p[1]>bx.h-bx.B) return {ruler:true,p:p,bx:bx}; if(!d||!d.any) return {p:p,bx:bx}; var rg=gRange||gRangeOf(d), best=null, bd=9*R;
    for(var hi=0;hi<gHandles.length;hi++){ var hh=gHandles[hi]; if(Math.hypot(hh.x-p[0],hh.y-p[1])<8*R) return {handle:hh,p:p,bx:bx,rg:rg}; }
    Object.keys(d.cs).forEach(function(c){ var cd=d.cs[c]; cd.ks.forEach(function(k,ki){ var dd=Math.hypot(gX(k,bx)-p[0],gY(cd.vals[ki],bx,rg)-p[1]); if(dd<bd){ bd=dd; best={c:c,k:k}; } }); });
    return {key:best,p:p,bx:bx,rg:rg}; }
  function gInRect(m){ var d=gData(), bx=gBox(), rg=gRange||gRangeOf(d), x0=Math.min(m.x0,m.x1), x1=Math.max(m.x0,m.x1), y0=Math.min(m.y0,m.y1), y1=Math.max(m.y0,m.y1), out=[]; if(!d) return out;
    Object.keys(d.cs).forEach(function(c){ var cd=d.cs[c]; cd.ks.forEach(function(k,ki){ var x=gX(k,bx), y=gY(cd.vals[ki],bx,rg); if(x>=x0&&x<=x1&&y>=y0&&y<=y1) out.push(gk(c,k)); }); }); return out; }
  function gEvents(){ ge.addEventListener("contextmenu",function(e){ e.preventDefault(); });
    var gpanel=q(".cube-ge"); gpanel.addEventListener("pointerenter",function(){ geOver=true; }); gpanel.addEventListener("pointerleave",function(){ geOver=false; });
    ge.addEventListener("pointerdown",function(e){ e.preventDefault(); e.stopPropagation(); ge.setPointerCapture(e.pointerId); var h=gHit(e), o=sel(); if(!o) return; play(false);
      if(e.altKey&&(e.button===1||e.button===2)){ var d0=gData(); if(!d0||!d0.any) return; var bx0=gBox(), rg0=gView?[gView.v0,gView.v1]:(gRange||gRangeOf(d0)), vw={f0:gF0(),f1:gF1(),v0:rg0[0],v1:rg0[1]}, pf0=gFr(h.p[0],bx0), pv0=rg0[1]-(h.p[1]-bx0.T)/(bx0.h-bx0.T-bx0.B)*(rg0[1]-rg0[0]);
        if(e.button===1){ gdrag={pan:true,x0:e.clientX,y0:e.clientY,v:vw}; return; }   /* Alt + middle-drag: move around, like Maya */
        gdrag={zoom:true,both:!e.shiftKey,x0:e.clientX,y0:e.clientY,axis:e.shiftKey?null:"both",v:vw,pf:pf0,pv:pv0}; return; }   /* Alt + right-drag zooms both axes around where it started; with Shift only one */
      if(e.button!==0) return;
      if(h.ruler){ gdrag={scrub:true}; gotoFrame(gFr(h.p[0],h.bx)); return; }
      if(h.handle){ mark(); gdrag={handle:h.handle,o:o,moved:false}; gRange=h.rg; return; }
      if(h.key){ var hk=h.key, list=gAll?Object.keys(gData().cs).filter(function(c){ return o.K[c]&&o.K[c][hk.k]; }).map(function(c){ return gk(c,hk.k); }):[gk(hk.c,hk.k)];
        var defer=null; if(e.shiftKey){ if(list.every(function(k){ return gsel.indexOf(k)>=0; })) defer=list; else list.forEach(function(k){ if(gsel.indexOf(k)<0) gsel.push(k); }); }   /* Shift on a selected key: it only leaves the selection if there is no drag, so Shift + drag keeps one direction */ else if(e.ctrlKey||e.metaKey) gsel=gsel.filter(function(k){ return list.indexOf(k)<0; }); else if(!gIsSel(hk.c,hk.k)) gsel=list;
        var bxp=gBox(); gdrag={deselect:defer,x0:e.clientX,y0:e.clientY,moved:false,K:JSON.parse(JSON.stringify(o.K)),sel:gsel.slice(),o:o,pk:{c:hk.c,f:hk.k},scale:geTool==="scale",pf:gFr(h.p[0],bxp),pv:h.rg[1]-(h.p[1]-bxp.T)/(bxp.h-bxp.T-bxp.B)*(h.rg[1]-h.rg[0])}; gRange=h.rg; paintTan(); return; }
      if(Math.abs(h.p[0]-gX(S.frame,h.bx))<7*R){ gdrag={scrub:true}; return; }   /* the yellow time line: drag it, like Maya */
      gMarq={x0:h.p[0],y0:h.p[1],x1:h.p[0],y1:h.p[1],how:e.shiftKey?"add":(e.ctrlKey||e.metaKey)?"remove":"replace",base:gsel.slice(),moved:false}; gdrag={marq:true}; });   /* empty space: a marquee */
    ge.addEventListener("pointermove",function(e){ if(!gdrag){ var h=gHit(e); gHover=h.handle||h.key||null; var nearT=!gHover&&Math.abs(h.p[0]-gX(S.frame,h.bx||gBox()))<7*R; ge.style.cursor=h.ruler||nearT?"ew-resize":gHover?"pointer":"crosshair"; return; } e.preventDefault();
      var bx=gBox(); if(gdrag.scrub){ gotoFrame(gFr(gPos(e)[0],bx)); return; }
      if(gdrag.pan){ var rr=ge.getBoundingClientRect(), k2=ge.width/rr.width, pv=gdrag.v, fpp=(pv.f1-pv.f0)/((bx.w-bx.L-bx.Rr)/k2), vpp=(pv.v1-pv.v0)/((bx.h-bx.T-bx.B)/k2), mx=-(e.clientX-gdrag.x0)*fpp, my=(e.clientY-gdrag.y0)*vpp;
        gView={f0:pv.f0+mx,f1:pv.f1+mx,v0:pv.v0+my,v1:pv.v1+my}; gdirty=true; return; }
      if(gdrag.zoom&&gdrag.both){ var zb=((e.clientX-gdrag.x0)-(e.clientY-gdrag.y0)), kb=Math.exp(-zb*.006), vb=gdrag.v, nf0=gdrag.pf-(gdrag.pf-vb.f0)*kb, nf1=gdrag.pf+(vb.f1-gdrag.pf)*kb, nv0=gdrag.pv-(gdrag.pv-vb.v0)*kb, nv1=gdrag.pv+(vb.v1-gdrag.pv)*kb;
        if(nf1-nf0<4||nf1-nf0>FRAMES*4||nv1-nv0<1e-4||nv1-nv0>1e6) return; gView={f0:nf0,f1:nf1,v0:nv0,v1:nv1}; gdirty=true; return; }
      if(gdrag.zoom){ var zx=e.clientX-gdrag.x0, zy=e.clientY-gdrag.y0, v0=gdrag.v; if(!gdrag.axis&&Math.hypot(zx,zy)>4) gdrag.axis=Math.abs(zx)>=Math.abs(zy)?"x":"y"; if(!gdrag.axis) return;
        if(gdrag.axis==="x"){ var kf=Math.exp(-zx*.006), f0=gdrag.pf-(gdrag.pf-v0.f0)*kf, f1=gdrag.pf+(v0.f1-gdrag.pf)*kf; if(f1-f0<4||f1-f0>FRAMES*4) return; gView={f0:f0,f1:f1,v0:v0.v0,v1:v0.v1}; }
        else { var kv=Math.exp(zy*.006), a0=gdrag.pv-(gdrag.pv-v0.v0)*kv, a1=gdrag.pv+(v0.v1-gdrag.pv)*kv; if(a1-a0<1e-4||a1-a0>1e6) return; gView={f0:v0.f0,f1:v0.f1,v0:a0,v1:a1}; } gdirty=true; return; }
      if(gdrag.marq){ var p=gPos(e); gMarq.x1=p[0]; gMarq.y1=p[1]; if(Math.hypot(gMarq.x1-gMarq.x0,gMarq.y1-gMarq.y0)>4*R) gMarq.moved=true; if(!gMarq.moved) return; var inR=gInRect(gMarq);
        gsel=gMarq.how==="add"?gMarq.base.concat(inR.filter(function(k){ return gMarq.base.indexOf(k)<0; })):gMarq.how==="remove"?gMarq.base.filter(function(k){ return inR.indexOf(k)<0; }):inR; paintTan(); return; }
      if(gdrag.handle){ var hd=gdrag.handle, p2=gPos(e), vx=hd.side*(p2[0]-hd.kx), vy=hd.side*(p2[1]-hd.ky); if(vx<2*R) vx=2*R; var kk=gdrag.o.K[hd.c][hd.k]; kk.m=-(vy/hd.ppv)/(vx/hd.ppf); kk.t="user";
        if(hd.wtd) kk[hd.side<0?"wi":"wo"]=Math.max(.02,Math.min(1,(vx/hd.ppf)/hd.hs));   /* weighted: the length is the weight */ gdrag.moved=true; gdirty=true; applyFrame(); return; }   /* the slope follows the handle */
      var r=ge.getBoundingClientRect(), dx=e.clientX-gdrag.x0, dy=e.clientY-gdrag.y0; if(!gdrag.moved&&Math.hypot(dx,dy)<3) return; if(!gdrag.moved){ gdrag.moved=true; mark(); }
      var sx=r.width/ge.width, ppf=(bx.w-bx.L-bx.Rr)*sx/(gF1()-gF0()), df=Math.round(dx/ppf), dv=-dy/((bx.h-bx.T-bx.B)*sx)*(gRange[1]-gRange[0]), o=gdrag.o;
      if(e.shiftKey){ if(!gdrag.lock&&Math.hypot(dx,dy)>6) gdrag.lock=Math.abs(dx)>=Math.abs(dy)?"x":"y"; if(gdrag.lock==="x"){ dv=0; dy=0; } else if(gdrag.lock==="y"){ df=0; dx=0; } } else gdrag.lock=null;   /* Shift: only sideways or only up and down, whichever way it started (Jakob, 18.10.2026) */
      if(gdrag.scale){ var fx=Math.max(.05,1+dx/150), fy=Math.max(.05,1-dy/150), NKs=JSON.parse(JSON.stringify(gdrag.K)), okS=true, by2={};   /* the scale tool: frames and values spread out from where the drag started */
        gdrag.sel.forEach(function(k){ var c=k.split(":")[0], f2=+k.split(":")[1]; (by2[c]=by2[c]||[]).push(f2); });
        var map={}; Object.keys(by2).forEach(function(c){ var used={}; by2[c].forEach(function(f2){ var nf=Math.max(1,Math.min(FRAMES,Math.round(gdrag.pf+(f2-gdrag.pf)*fx))); if(used[nf]||(gdrag.K[c][nf]&&by2[c].indexOf(nf)<0)) okS=false; used[nf]=1; map[c+":"+f2]=nf; }); });
        Object.keys(by2).forEach(function(c){ var moved2={}; by2[c].forEach(function(f2){ var kk3=JSON.parse(JSON.stringify(gdrag.K[c][f2])); kk3.v=gdrag.pv+(kk3.v-gdrag.pv)*fy; moved2[okS?map[c+":"+f2]:f2]=kk3; delete NKs[c][f2]; }); Object.keys(moved2).forEach(function(n){ NKs[c][n]=moved2[n]; }); });
        o.K=NKs; gsel=gdrag.sel.map(function(k){ var c=k.split(":")[0], f2=+k.split(":")[1]; return gk(c,okS?map[k]:f2); }); gdrag.cur={c:gdrag.pk.c,f:okS?map[gk(gdrag.pk.c,gdrag.pk.f)]:gdrag.pk.f}; gdirty=true; applyFrame(); paintTimeline(); return; }
      var bySel={}; gdrag.sel.forEach(function(k){ var c=k.split(":")[0], f2=+k.split(":")[1]; (bySel[c]=bySel[c]||[]).push(f2); });
      var ok=Object.keys(bySel).every(function(c){ return bySel[c].every(function(f2){ var n=f2+df; return n>=1&&n<=FRAMES&&(!gdrag.K[c][n]||bySel[c].indexOf(n)>=0); }); }); if(!ok) df=0;
      var NK=JSON.parse(JSON.stringify(gdrag.K)); Object.keys(bySel).forEach(function(c){ var moved={}; bySel[c].forEach(function(f2){ var kk2=JSON.parse(JSON.stringify(gdrag.K[c][f2])); kk2.v+=dv; moved[f2+df]=kk2; delete NK[c][f2]; }); Object.keys(moved).forEach(function(n){ NK[c][n]=moved[n]; }); });
      o.K=NK; gsel=gdrag.sel.map(function(k){ var c=k.split(":")[0], f2=+k.split(":")[1]; return gk(c,f2+df); }); if(gdrag.pk) gdrag.cur={c:gdrag.pk.c,f:gdrag.pk.f+df}; gdirty=true; applyFrame(); paintTimeline(); });
    ge.addEventListener("pointerup",function(){ if(gdrag&&(gdrag.zoom||gdrag.pan)){ gdrag=null; return; } if(gdrag) gdrag.cur=null; if(gdrag&&gdrag.deselect&&!gdrag.moved){ gsel=gsel.filter(function(k){ return gdrag.deselect.indexOf(k)<0; }); paintTan(); } if(gdrag&&gdrag.marq){ if(!gMarq.moved&&gMarq.how==="replace") gsel=[]; gMarq=null; paintTan(); } else if(gdrag&&gdrag.handle&&!gdrag.moved) undo.pop(); else if(gdrag&&gdrag.moved){ snd(520); paintAll(); paintTan(); } gdrag=null; gdirty=true; });
    ge.addEventListener("pointerleave",function(){ gHover=null; });
    ge.addEventListener("dblclick",function(e){ var h=gHit(e); if(h.key) geEdit(h.key); });
    ge.addEventListener("auxclick",function(e){ if(e.button===1) e.preventDefault(); });
    ge.addEventListener("wheel",function(e){ var d=gData(); if(!d||!d.any) return; e.preventDefault(); e.stopPropagation(); var bx=gBox(), p=gPos(e), rg=gView?[gView.v0,gView.v1]:(gRange||gRangeOf(d));   /* the wheel zooms towards the cursor, like Maya */
      var pf=gFr(p[0],bx), pv=rg[1]-(p[1]-bx.T)/(bx.h-bx.T-bx.B)*(rg[1]-rg[0]), k=Math.exp(Math.max(-1,Math.min(1,(e.deltaY||0)/100))*.18), f0=gF0(), f1=gF1();
      var n={f0:pf-(pf-f0)*k,f1:pf+(f1-pf)*k,v0:pv-(pv-rg[0])*k,v1:pv+(rg[1]-pv)*k}; if(n.f1-n.f0<4||n.f1-n.f0>FRAMES*4||n.v1-n.v0<1e-4||n.v1-n.v0>1e6) return; gView=n; gdirty=true; },{passive:false});
    [].forEach.call(qa(".ge-tools button"),function(bt){ bt.addEventListener("click",function(){ setGeTool(bt.getAttribute("data-gt")); }); });
    q(".ge-wt").addEventListener("click",geWeighted);
    q(".ge-fr").addEventListener("change",function(){ geStatSet("f",this.value); }); q(".ge-val").addEventListener("change",function(){ geStatSet("v",this.value); });
    [".ge-fr",".ge-val"].forEach(function(sl){ var inp=q(sl); inp.addEventListener("focus",function(){ setTimeout(function(){ inp.select(); },0); }); inp.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); inp.blur(); } else if(e.key==="Escape"){ e.preventDefault(); e.stopPropagation(); inp.dataset.skip="1"; inp.blur(); paintGeStats(true); } }); });
    q(".ge-all").addEventListener("click",function(){ gAll=!gAll; q(".ge-all").setAttribute("aria-pressed",gAll?"true":"false"); snd(gAll?600:420); toast(gAll?"All Axes: a click selects the key on every shown curve.":"All Axes off: a click selects one curve's key."); });
    q(".ge-x").addEventListener("click",function(){ setGraph(false); }); gSideEvents();
    [["pre",".ge-pre"],["post",".ge-post"]].forEach(function(d){ q(d[1]).addEventListener("click",function(){ var o=sel(); if(!o){ toast("Select an object first."); return; } mark(); o.inf=o.inf||{}; o.inf[d[0]]=o.inf[d[0]]==="cycle"?"constant":"cycle";
      gdirty=true; applyFrame(); paintTan(); snd(o.inf[d[0]]==="cycle"?600:420); toast("Loop "+(d[0]==="pre"?"before the first key":"after the last key")+" "+(o.inf[d[0]]==="cycle"?"on":"off")+" for "+o.name+"."); }); }); }
  function setGraph(v){ if(!v&&pops.ge) popBack("ge",true); geOpen=v; var p=q(".cube-ge"); p.hidden=!v; q(".tl-graph").setAttribute("aria-pressed",v?"true":"false"); if(v){ var r=p.querySelector(".ge-plot").getBoundingClientRect(); ge.width=Math.max(10,Math.round(r.width*R)); ge.height=Math.max(10,Math.round(r.height*R)); gdirty=true; gRange=null; gSideSig=""; } placeAll(); }
  /* double-click a key: type its value (Jakob, 18.10.2026) */
  function geEdit(hk){ var o=sel(); if(!o||!o.K[hk.c]||!o.K[hk.c][hk.k]) return; var old=q(".ge-edit"); if(old) old.remove(); var bx=gBox(), rg=gRange||gRangeOf(gData()), r=ge.getBoundingClientRect(), pr=q(".cube-ge").getBoundingClientRect(), k2=r.width/ge.width;
    var inp=document.createElement("input"); inp.type="text"; inp.inputMode="decimal"; inp.className="ge-edit"; inp.setAttribute("aria-label","Value of the key at frame "+hk.k); inp.value=+o.K[hk.c][hk.k].v.toFixed(4);
    inp.style.left=Math.round(r.left-pr.left+gX(hk.k,bx)*k2+10)+"px"; inp.style.top=Math.round(r.top-pr.top+gY(o.K[hk.c][hk.k].v,bx,rg)*k2-12)+"px"; q(".cube-ge").appendChild(inp); inp.focus(); inp.select(); var done=false;
    var fin=function(keep){ if(done) return; done=true; var v=parseFloat(String(inp.value).replace(",",".")); inp.remove(); if(keep&&isFinite(v)&&o.K[hk.c]&&o.K[hk.c][hk.k]&&o.K[hk.c][hk.k].v!==v){ mark(); o.K[hk.c][hk.k].v=v; gdirty=true; applyFrame(); paintAll(); snd(560); } };
    inp.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); fin(true); } else if(e.key==="Escape"){ e.preventDefault(); e.stopPropagation(); fin(false); } }); inp.addEventListener("blur",function(){ fin(true); }); }
  /* the Graph Editor's move and scale tools (W, R while the pointer is over it) */
  function setGeTool(t){ geTool=t; [].forEach.call(qa(".ge-tools button"),function(bt){ bt.setAttribute("aria-pressed",bt.getAttribute("data-gt")===t?"true":"false"); }); snd(t==="move"?460:580); toast(t==="move"?"Graph Editor: move keys.":"Graph Editor: scale keys. Drag to spread them out or pull them together; Shift keeps one direction."); }
  /* copy, cut and paste keys (Ctrl+C, Ctrl+X, Ctrl+V); pasted keys land at the current frame */
  function geClip(k){ var o=sel(); if(!o) return;
    if(k==="v"){ if(!gClip){ toast("Copy keys first (Ctrl+C)."); return; } mark(); var off=S.frame-gClip.minF, ns=[]; gClip.keys.forEach(function(x){ var f2=x.f+off; if(f2<1||f2>FRAMES) return; o.K=o.K||{}; o.K[x.c]=o.K[x.c]||{}; o.K[x.c][f2]=JSON.parse(JSON.stringify(x.k)); ns.push(gk(x.c,f2)); });
      gsel=ns; gdirty=true; applyFrame(); paintAll(); snd(560); toast("Pasted "+ns.length+" key"+(ns.length===1?"":"s")+" at frame "+S.frame+"."); return; }
    var list=gsel.map(function(g2){ var c=g2.split(":")[0], f2=+g2.split(":")[1]; return o.K[c]&&o.K[c][f2]?{c:c,f:f2,k:JSON.parse(JSON.stringify(o.K[c][f2]))}:null; }).filter(Boolean); if(!list.length){ toast("Select keys to copy."); return; }
    gClip={keys:list,minF:Math.min.apply(null,list.map(function(x){ return x.f; }))};
    if(k==="x"){ delKeys(); toast("Cut "+list.length+" key"+(list.length===1?"":"s")+"."); } else { snd(520); toast("Copied "+list.length+" key"+(list.length===1?"":"s")+". Ctrl+V pastes them at the current frame."); } }
  /* weighted tangents, per curve (default off): the handles can also change length */
  function geCurves(o){ var cs={}; if(gsel.length) gsel.forEach(function(g2){ cs[g2.split(":")[0]]=1; }); else gShown(o).forEach(function(c){ if(chFrames(o,c).length) cs[c]=1; }); return Object.keys(cs); }
  function geWeighted(){ var o=sel(); if(!o){ toast("Select an object first."); return; } var cs=geCurves(o); if(!cs.length){ toast("No curves to change."); return; } var on=!cs.every(function(c){ return o.KW&&o.KW[c]; }); mark(); o.KW=o.KW||{};
    cs.forEach(function(c){ if(on) o.KW[c]=true; else delete o.KW[c]; }); gdirty=true; applyFrame(); paintGeStats(true); snd(on?600:420); toast(on?"Weighted tangents for "+cs.length+" curve"+(cs.length===1?"":"s")+": drag a handle longer or shorter.":"Weighted tangents off for "+cs.length+" curve"+(cs.length===1?"":"s")+"."); }
  /* the selected keys' frame and value, shown and typed in the header */
  function geSelKeys(o){ return o?gsel.map(function(g2){ var c=g2.split(":")[0], f2=+g2.split(":")[1]; return o.K[c]&&o.K[c][f2]?{c:c,f:f2,v:o.K[c][f2].v}:null; }).filter(Boolean):[]; }
  function paintGeStats(force){ if(!wrap) return; var o=sel(), ks=geSelKeys(o), fi=q(".ge-fr"), vi=q(".ge-val"), wb=q(".ge-wt"); if(!fi) return;
    [[fi,"f"],[vi,"v"]].forEach(function(z){ var inp=z[0]; if(!force&&actEl()===inp) return; inp.disabled=!ks.length; if(!ks.length){ inp.value=""; inp.placeholder=""; return; }
      var vals=ks.map(function(x){ return x[z[1]]; }), same=vals.every(function(v){ return Math.abs(v-vals[0])<1e-6; }); inp.value=same?String(z[1]==="f"?vals[0]:+vals[0].toFixed(3)):""; inp.placeholder=same?"":"several"; });
    if(wb){ var cs=o?geCurves(o):[]; wb.setAttribute("aria-pressed",cs.length&&cs.every(function(c){ return o.KW&&o.KW[c]; })?"true":"false"); } }
  function geStatSet(which,val){ var o=sel(), ks=geSelKeys(o), inp=q(which==="f"?".ge-fr":".ge-val"); if(inp&&inp.dataset.skip){ delete inp.dataset.skip; return; } if(!ks.length) return; var v=parseFloat(String(val).replace(",",".")); if(!isFinite(v)){ paintGeStats(true); return; }
    if(which==="v"){ mark(); ks.forEach(function(x){ o.K[x.c][x.f].v=v; }); gdirty=true; applyFrame(); paintAll(); snd(560); return; }
    v=Math.max(1,Math.min(FRAMES,Math.round(v))); var per={}; ks.forEach(function(x){ per[x.c]=(per[x.c]||0)+1; }); if(Object.keys(per).some(function(c){ return per[c]>1; })){ toast("Give one key per curve a new frame at a time."); paintGeStats(true); return; }
    if(ks.some(function(x){ return x.f!==v&&o.K[x.c][v]; })){ toast("There is already a key at frame "+v+"."); paintGeStats(true); return; }
    mark(); ks.forEach(function(x){ if(x.f===v) return; o.K[x.c][v]=o.K[x.c][x.f]; delete o.K[x.c][x.f]; }); gsel=ks.map(function(x){ return gk(x.c,v); }); gdirty=true; applyFrame(); paintAll(); snd(560); }
  function delKeys(){ var o=sel(); if(!o||!gsel.length) return false; mark(); gsel.forEach(function(k){ var c=k.split(":")[0], f2=k.split(":")[1]; if(o.K[c]){ delete o.K[c][f2]; if(!Object.keys(o.K[c]).length) delete o.K[c]; } }); gsel=[]; gdirty=true; applyFrame(); snd(260); toast("Keys deleted."); paintAll(); return true; }
  function tanTargets(o){ if(!o) return []; if(gsel.length) return gsel.map(function(k){ return [k.split(":")[0],+k.split(":")[1]]; }).filter(function(x){ return o.K[x[0]]&&o.K[x[0]][x[1]]; });
    var out=[]; (geOpen?gShown(o):CH).forEach(function(c){ chFrames(o,c).forEach(function(f2){ out.push([c,f2]); }); }); return out; }
  function setTan(t){ curTan=t; var o=sel(), ks=tanTargets(o); if(ks.length){ mark(); ks.forEach(function(x){ var kk=o.K[x[0]][x[1]]; kk.t=t; kk.m=null; }); gdirty=true; applyFrame(); }   /* also drops a dragged tangent */
    snd(t==="step"?300:t==="linear"?420:540); toast((t==="auto"?"Auto":t==="linear"?"Linear":"Stepped")+(ks.length?" for "+(gsel.length?gsel.length+" selected key"+(gsel.length>1?"s":""):"the keys of "+o.name)+", and for new keys.":" for new keys.")); paintTan(); }
  function paintTan(){ if(!wrap) return; var o=sel(), inf=o&&o.inf||{}; [["pre",".ge-pre"],["post",".ge-post"]].forEach(function(d){ var bt=q(d[1]); if(bt) bt.setAttribute("aria-pressed",inf[d[0]]==="cycle"?"true":"false"); });
    var types=o?gsel.map(function(k){ var c=k.split(":")[0], f2=k.split(":")[1]; return o.K[c]&&o.K[c][f2]?(o.K[c][f2].t==="user"?"auto":o.K[c][f2].t||"auto"):null; }).filter(Boolean):[], show=types.length&&types.every(function(t){ return t===types[0]; })?types[0]:(types.length?null:curTan);
    [].forEach.call(qa(".tl-tan button"),function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-t")===show?"true":"false"); }); }
  function niceStep(span){ var r=span/5, p=Math.pow(10,Math.floor(Math.log10(r))), m=r/p; return (m<1.5?1:m<3.5?2:m<7.5?5:10)*p; }
  /* the slope a key's tangent shows: a dragged one, the auto slope, or for a linear key the straight line to the next key */
  /* ---- camera extras ---- */
  var turn=true, nav=null, ng=null, navDrag=null, snapA=null, navHover=null;
  function setTurn(v,init){ turn=v; if(!init) try{ localStorage.setItem("sbh-cube-turn2",v?"1":"0"); }catch(e){}   /* remembered only when chosen; the old key was written on every opening (18.10.2026) */ var b=wrap&&wrap.querySelector(".cb-turn"); if(b){ b.setAttribute("aria-pressed",v?"true":"false"); btnText(b,v?"Turntable: on":"Turntable: off"); } }
  var NAVF=[{n:"FRONT",f:[4,5,6,7],ry:0,rx:0},{n:"BACK",f:[1,0,3,2],ry:Math.PI,rx:0},{n:"RIGHT",f:[5,1,2,6],ry:-Math.PI/2,rx:0},{n:"LEFT",f:[0,4,7,3],ry:Math.PI/2,rx:0},{n:"TOP",f:[7,6,2,3],ry:null,rx:Math.PI/2},{n:"BOTTOM",f:[0,1,5,4],ry:null,rx:-Math.PI/2}];
  var NV=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
  function navFaces(){ var Sz=nav.width, k=Sz*.21, P=NV.map(function(v){ var c=rot(v), w=5.2-c[2]; return [Sz/2+k*4.2*c[0]/w, Sz/2-k*4.2*c[1]/w, c]; });
    return NAVF.map(function(o){ var C=o.f.map(function(i){ return P[i][2]; }), n=norm(cross(sub(C[1],C[0]),sub(C[2],C[0]))), cen=[0,0,0]; C.forEach(function(c){ cen=[cen[0]+c[0]/4,cen[1]+c[1]/4,cen[2]+c[2]/4]; });
      return {o:o,pts:o.f.map(function(i){ return P[i]; }),n:n,vis:dot(n,sub([0,0,5.2],cen))>0,z:cen[2]}; }).filter(function(x){ return x.vis; }).sort(function(a,b){ return a.z-b.z; }); }
  function drawNav(){ if(!nav) return; var Sz=nav.width; ng.clearRect(0,0,Sz,Sz);
    navFaces().forEach(function(x){ var l=.45+.55*Math.max(0,dot(x.n,LIGHT)), c=Math.round(60+110*l), hov=navHover===x.o.n;
      ng.beginPath(); x.pts.forEach(function(p,j){ if(j) ng.lineTo(p[0],p[1]); else ng.moveTo(p[0],p[1]); }); ng.closePath();
      ng.fillStyle=hov?"rgb("+Math.min(255,c+60)+","+Math.min(255,c+50)+","+Math.max(0,c)+")":"rgb("+(c+20)+","+(c+20)+","+(c+26)+")"; ng.fill(); ng.lineWidth=1.3*R; ng.strokeStyle="rgba(15,17,22,.95)"; ng.stroke();
      var cx=0, cy=0; x.pts.forEach(function(p){ cx+=p[0]/4; cy+=p[1]/4; }); var a=Math.max(0,x.n[2]); if(a<.25) return;
      ng.save(); ng.translate(cx,cy); var ex=[(x.pts[1][0]-x.pts[0][0]),(x.pts[1][1]-x.pts[0][1])]; ng.rotate(Math.atan2(ex[1],ex[0])); ng.scale(1,a);
      ng.font="700 "+Math.round(Sz*.085)+"px ui-monospace,Menlo,Consolas,monospace"; ng.textAlign="center"; ng.textBaseline="middle"; ng.fillStyle="rgba(20,22,28,"+(.35+.6*a)+")"; ng.fillText(x.o.n,0,0); ng.restore(); }); }
  function navAt(e){ var r=nav.getBoundingClientRect(), x=(e.clientX-r.left)*nav.width/r.width, y=(e.clientY-r.top)*nav.height/r.height, hit=null;
    navFaces().forEach(function(fc){ var c=false, P=fc.pts; for(var i=0,j=P.length-1;i<P.length;j=i++){ if((P[i][1]>y)!==(P[j][1]>y)&&x<(P[j][0]-P[i][0])*(y-P[i][1])/(P[j][1]-P[i][1])+P[i][0]) c=!c; } if(c) hit=fc.o; }); return hit; }
  function navEvents(){ nav.addEventListener("pointerdown",function(e){ e.preventDefault(); e.stopPropagation(); nav.setPointerCapture(e.pointerId); navDrag={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,moved:false}; snapA=null; });
    nav.addEventListener("pointermove",function(e){ if(!navDrag){ var h=navAt(e); navHover=h&&h.n; nav.style.cursor=h?"pointer":"grab"; return; } e.preventDefault();
      if(!navDrag.moved&&Math.hypot(e.clientX-navDrag.sx,e.clientY-navDrag.sy)<3) return; if(!navDrag.moved){ navDrag.moved=true; if(turn) setTurn(false); nav.style.cursor="grabbing"; }
      orbit(function(){ ry+=(e.clientX-navDrag.x)*.012*(Math.cos(rx)<0?-1:1); rx+=(e.clientY-navDrag.y)*.012; }); navDrag.x=e.clientX; navDrag.y=e.clientY; });
    nav.addEventListener("pointerup",function(e){ if(!navDrag) return; var moved=navDrag.moved; navDrag=null; nav.style.cursor="grab"; if(moved) return; var h=navAt(e); if(!h) return; if(turn) setTurn(false);
      var tY=h.ry===null?ry:ry+((h.ry-ry)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI, tX=rx+((h.rx-rx)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI; snapA={y0:ry,x0:rx,y1:tY,x1:tX,t0:performance.now()}; snd(500); });
    nav.addEventListener("pointerleave",function(){ navHover=null; }); }
  /* the camera on opening (Jakob, 18.10.2026): the default cube 1.5 times bigger than before, every other scene in proportion (a big one further away, so it fits), aimed at its center */
  function openView(){ var base=f/(R*Math.min(440,Math.min(innerWidth,innerHeight)*.5)/3.75)/1.5, pts=[]; S.objs.forEach(function(o){ if(o.vis) pts=pts.concat(worldPts(o)); });
    if(!pts.length){ D=base; return; } var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; pts.forEach(function(v){ for(var i=0;i<3;i++){ lo[i]=Math.min(lo[i],v[i]); hi[i]=Math.max(hi[i],v[i]); } });
    var c=[(lo[0]+hi[0])/2,(lo[1]+hi[1])/2,(lo[2]+hi[2])/2], r=0; pts.forEach(function(v){ r=Math.max(r,Math.hypot(v[0]-c[0],v[1]-c[1],v[2]-c[2])); });
    D=Math.max(2,Math.min(400,base*Math.max(r,.2)/(Math.sqrt(3)/2))); var rc=rot(c); pan=[-rc[0],-rc[1],-rc[2]]; }   /* the default cube's corners lie sqrt(3)/2 from its center */
  function frame(all,room){ var sv=all?{}:selVerts(), pts=[]; if(all){} else if(S.mode==="object") osel.forEach(function(id){ var o=objById(id); if(o) pts=pts.concat(worldPts(o)); }); else Object.keys(sv).forEach(function(id){ var o=objById(+id); sv[id].forEach(function(k){ pts.push(o.V[k]); }); });
    if(!pts.length) S.objs.forEach(function(x){ if(x.vis) x.V.forEach(function(v){ pts.push(v); }); }); if(!pts.length) return; var lo=[1e9,1e9,1e9], hi=[-1e9,-1e9,-1e9]; pts.forEach(function(v){ for(var i=0;i<3;i++){ lo[i]=Math.min(lo[i],v[i]); hi[i]=Math.max(hi[i],v[i]); } });
    var c=[(lo[0]+hi[0])/2,(lo[1]+hi[1])/2,(lo[2]+hi[2])/2], r=0; pts.forEach(function(v){ r=Math.max(r,Math.hypot(v[0]-c[0],v[1]-c[1],v[2]-c[2])); }); r=Math.max(r,.5);   /* F frames the selection, or everything */
    var rc=rot(c), tD=Math.max(2,Math.min(400,r+(room||1)*f*r/(.36*Math.min(W,H))));   /* room: more space around it, e.g. 1.5 so that it stays clear of the timeline */ snapA={y0:ry,x0:rx,y1:ry,x1:rx,d0:D,d1:tD,p0:pan.slice(),p1:[-rc[0],-rc[1],-rc[2]],t0:performance.now()}; snd(560); }

  /* ---- undo, redo, save, reset ---- */
  function doUndo(){ if(!undo.length){ toast("Nothing to undo."); return; } redo.push(snapU()); load(undo.pop()); selSync(); hover=null; snd(300); paintAll(); }
  function doRedo(){ if(!redo.length){ toast(undo.length?"Nothing to redo.":"Redo what? Nothing has been undone yet."); return; } undo.push(snapU()); load(redo.pop()); selSync(); hover=null; snd(360); paintAll(); }
  var savedAt=null;
  function doSave(quiet){ try{ var j=snap(); localStorage.setItem(KEY,j); savedAt=j; if(!quiet) toast("Saved. It will be here next time."); }catch(e){ if(!quiet) toast("Could not save in this browser."); } if(!quiet) snd(660); paintBar(); }
  /* autosave (Jakob, 18.10.2026; on by default): a change is saved about a second after it, never in the middle of a drag; the switch is remembered */
  var autoSave=true, autoDirty=false, autoT=0; try{ autoSave=localStorage.getItem("sbh-cube-autosave")!=="0"; }catch(e){}
  function setAutoSave(v){ autoSave=v; try{ localStorage.setItem("sbh-cube-autosave",v?"1":"0"); }catch(e){} var bt=wrap&&q(".cb-asave"); if(bt){ bt.setAttribute("aria-pressed",v?"true":"false"); btnText(bt,v?"Autosave: on":"Autosave: off"); } if(v) autoDirty=true; }
  function autoTick(t){ if(!autoSave||!autoDirty||t-autoT<1000||gzDrag||drag||box||carry||camDrag||(typeof paintS!=="undefined"&&paintS)||(typeof atDrag!=="undefined"&&atDrag)) return; autoDirty=false; if(snap()!==savedAt) doSave(true); }
  function doReset(){ mark(); S=fresh(); hover=null; snd(260); toast("Back to one cube."); paintAll(); }

  /* ---- the gallery: objects and scenes kept in this browser, with a thumbnail (Jakob, 17.10.2026) ---- */
  var GKEY="sbh-cube-gallery", gallery=[];
  function gLoad(){ try{ gallery=JSON.parse(localStorage.getItem(GKEY)||"[]")||[]; }catch(e){ gallery=[]; } }
  function gStore(){ try{ localStorage.setItem(GKEY,JSON.stringify(gallery)); return true; }catch(e){ toast("The gallery is full for this browser. Delete something first."); return false; } }
  function thumb(objs){ /* a small picture of these objects, cut out of the drawn frame around their screen bounds */
    var lo=[1e9,1e9], hi=[-1e9,-1e9]; objs.forEach(function(o){ camO(o).forEach(function(c){ var p=scr(c); lo[0]=Math.min(lo[0],p[0]); lo[1]=Math.min(lo[1],p[1]); hi[0]=Math.max(hi[0],p[0]); hi[1]=Math.max(hi[1],p[1]); }); });
    var w=hi[0]-lo[0], h=hi[1]-lo[1], sz=Math.max(w,h)*1.25+24*R, cx=(lo[0]+hi[0])/2, cy=(lo[1]+hi[1])/2, t=document.createElement("canvas"); t.width=t.height=128; var g=t.getContext("2d");
    g.fillStyle=getComputedStyle(root).getPropertyValue("--surface").trim()||"#fff"; g.fillRect(0,0,128,128); var hv=hover; hover=null; render(); hover=hv;
    try{ g.drawImage(cv,cx-sz/2,cy-sz/2,sz,sz,0,0,128,128); return t.toDataURL("image/png"); }catch(e){ return ""; } }
  function gSave(kind){ var objs=kind==="object"?(sel()?[sel()].concat(desc(sel())):[]):S.objs.slice(); if(!objs[0]){ toast(kind==="object"?"Select an object first.":"Nothing to save."); return; }
    var name=kind==="object"?objs[0].name:"Scene "+(gallery.filter(function(g){ return g.kind==="scene"; }).length+1);
    gallery.unshift({id:Date.now(),kind:kind,name:name,at:new Date().toISOString().slice(0,10),thumb:thumb(objs),objs:objs.map(function(o){ return {name:o.name,G:o.G,F:o.F,T:o.T,K:o.K||{},inf:o.inf||null,prim:o.prim||null,grp:!!o.grp,vis:o.vis!==false,par:objs.indexOf(parentOf(o))}; })});
    if(gallery.length>40) gallery.length=40; if(gStore()){ snd(640); toast((kind==="object"?objs[0].name:name)+" is in the gallery."); } paintGallery(); }
  /* an object from saved data: the new form (shape, transform, keys) or an old one (every corner keyed), which is converted */
  function objFrom(d){ var o; if(d.G&&d.T){ o={id:nextId++,name:d.name,G:d.G.map(function(v){ return v.slice(); }),V:[],F:d.F.map(function(f){ return f.slice(); }),vis:d.vis!==false,T:JSON.parse(JSON.stringify(d.T)),K:JSON.parse(JSON.stringify(d.K||{})),par:null}; if(d.grp) o.grp=true; }
    else { o={id:nextId++,name:d.name,V:(d.V||[]).map(function(v){ return v.slice(); }),F:(d.F||[]).map(function(f){ return f.slice(); }),vis:true,keys:d.keys||{},tan:d.tan||{}}; migrate(o); }
    if(d.prim) o.prim=JSON.parse(JSON.stringify(d.prim)); if(d.inf) o.inf=JSON.parse(JSON.stringify(d.inf)); poseAt(o,S.frame||1); worldV(o); return o; }
  function gOpen(g){ mark(); nextId=1; S={objs:[],sel:null,mode:S.mode,frame:1}; var made=g.objs.map(function(d){ var o=objFrom(d); S.objs.push(o); return o; });
    g.objs.forEach(function(d,i){ if(d.par!=null&&d.par>=0&&made[d.par]) made[i].par=made[d.par].id; }); S.sel=S.objs.length?S.objs[0].id:null; hover=null; applyFrame(); snd(520); toast("Opened "+g.name+"."); paintAll(); }
  function gImport(g){ mark(); var k=S.objs.length, made=g.objs.map(function(d){ var o=objFrom(d); o.name=uniqueName(o.name); S.objs.push(o); return o; });
    g.objs.forEach(function(d,i){ if(d.par!=null&&d.par>=0&&made[d.par]) made[i].par=made[d.par].id; });
    made.forEach(function(o,i){ if(o.par!=null) return; var ox=2.8*Math.ceil((k+i)/2)*((k+i)%2?1:-1); o.T.t[0]+=ox; if(o.K.tx) Object.keys(o.K.tx).forEach(function(fr){ o.K.tx[fr].v+=ox; }); S.sel=o.id; });
    refreshAll(); hover=null; snd(560); toast(g.name+" added to the scene."); paintAll(); }
  function gDelete(g){ gallery.splice(gallery.indexOf(g),1); gStore(); snd(260); paintGallery(); }
  function paintGallery(){ if(!wrap) return; var ul=q(".gl-list"); ul.innerHTML=gallery.length?"":'<li class="gl-empty">Nothing saved yet. Save the selected object or the whole scene.</li>';
    gallery.forEach(function(g){ var li=document.createElement("li"); li.className="gl-it"; li.setAttribute("data-id",g.id);
      li.innerHTML='<img class="gl-th" alt="" src="'+g.thumb+'"><span class="gl-txt"><button type="button" class="gl-name" title="Double-click to rename">'+g.name+'</button><small>'+(g.kind==="object"?"Object":g.objs.length+" objects")+' · '+g.at+'</small></span><span class="gl-act"><button type="button" class="gl-open" title="'+(g.kind==="object"?"Open as a new scene":"Open this scene")+'">Open</button><button type="button" class="gl-imp" title="Add to the current scene">Import</button><button type="button" class="gl-x" aria-label="Delete '+g.name+' from the gallery">×</button></span>'; ul.appendChild(li); }); if(wrap) iconize(ul); }
  function galleryEvents(){ var ul=q(".gl-list"), pv=q(".gl-preview");
    ul.addEventListener("click",function(e){ var li=e.target.closest(".gl-it"); if(!li) return; var g=gallery.filter(function(x){ return x.id===+li.getAttribute("data-id"); })[0]; if(!g) return;
      if(e.target.closest(".gl-open")) gOpen(g); else if(e.target.closest(".gl-imp")) gImport(g); else if(e.target.closest(".gl-x")) gDelete(g); });
    ul.addEventListener("dblclick",function(e){ var li=e.target.closest(".gl-it"); if(!li||!e.target.closest(".gl-name")) return; var g=gallery.filter(function(x){ return x.id===+li.getAttribute("data-id"); })[0]; var n=prompt("Name",g.name); if(n&&n.trim()){ g.name=n.trim().slice(0,40); gStore(); paintGallery(); } });
    ul.addEventListener("pointerover",function(e){ var th=e.target.closest(".gl-th"); if(!th){ pv.hidden=true; return; } pv.src=th.src; pv.hidden=false; var r=th.getBoundingClientRect(), gr=q(".cube-gal").getBoundingClientRect(); pv.style.left=(gr.right+10)+"px"; pv.style.top=Math.max(8,Math.min(innerHeight-228,r.top+r.height/2-110))+"px"; });   /* the big preview floats beside the panel, so the panel's scroll box does not cut it */
    ul.addEventListener("pointerleave",function(){ pv.hidden=true; });
    q(".gl-save-obj").addEventListener("click",function(){ gSave("object"); }); q(".gl-save-scene").addEventListener("click",function(){ gSave("scene"); }); }

  /* ---- the Inputs panel: the selected shape's inputs; a change rebuilds it in place (its center stays) ---- */
  var atSess=false, atFor=null;
  /* inputs without losing edits (Jakob, 18.10.2026; unlike Maya): a size input (width, height, depth, radius) bends the space the shape sits in, so every
     edit after it, extrudes and cuts included, moves along in proportion; a subdivision input rebuilds the base and carries vertex moves over onto the new surface.
     Only after extrudes, cuts or merges are subdivisions locked, because those refer to faces that would no longer exist */
  function primOff(o,B){ if(o.prim.off) return o.prim.off; var gc=boxC(B.V), c=trOf(o).p; return [c[0]-gc[0],c[1]-gc[1],c[2]-gc[2]]; }
  function sameTopo(o,B){ if(!o.G||o.G.length!==B.V.length||o.F.length!==B.F.length) return false; for(var i=0;i<o.F.length;i++){ var a=o.F[i], b=B.F[i]; if(a.length!==b.length) return false; for(var j=0;j<a.length;j++) if(a[j]!==b[j]) return false; } return true; }
  function topoEdited(o){ if(!o||!o.prim||!o.prim.edited) return false; var sig=o.prim.t+JSON.stringify(o.prim.p)+"|"+o.F.length+"|"+(o.G?o.G.length:0); if(o._topoSig===sig) return o._topoVal; o._topoSig=sig; o._topoVal=!sameTopo(o,PRIM[o.prim.t](o.prim.p)); return o._topoVal; }
  /* how a point of the old base moves to the new base, for each primitive's size inputs; exact for the base itself */
  function sizeMap(t,P0,P1){ var r=function(a,b){ return P0[a]?P1[a]/P0[a]:1; };
    if(t==="cube") return function(v){ return [v[0]*r("w"),v[1]*r("h"),v[2]*r("d")]; };
    if(t==="plane") return function(v){ return [v[0]*r("w"),v[1],v[2]*r("h")]; };
    if(t==="sphere") return function(v){ var k=r("r"); return [v[0]*k,v[1]*k,v[2]*k]; };
    if(t==="cylinder"||t==="cone") return function(v){ var k=r("r"), kh=r("h"); return [v[0]*k,v[1]*kh,v[2]*k]; };
    if(t==="disk") return function(v){ var k=r("r"); return [v[0]*k,v[1],v[2]*k]; };
    if(t==="torus") return function(v){ var rho=Math.hypot(v[0],v[2]), ks=r("sr"); if(rho<1e-9) return [v[0],v[1]*ks,v[2]]; var rho2=P1.r+(rho-P0.r)*ks; return [v[0]/rho*rho2,v[1]*ks,v[2]/rho*rho2]; };   /* ring radius and tube thickness, each on its own */
    return function(v){ return v.slice(); }; }
  /* the closest point on a set of triangles, and where it lies in its triangle (for carrying vertex moves over) */
  function closestTri(p,T){ var best=null, bd=1e18;
    T.forEach(function(t){ var a=t[0], b=t[1], c=t[2], ab=[b[0]-a[0],b[1]-a[1],b[2]-a[2]], ac=[c[0]-a[0],c[1]-a[1],c[2]-a[2]], ap=[p[0]-a[0],p[1]-a[1],p[2]-a[2]];
      var d1=dot(ab,ap), d2=dot(ac,ap), w; if(d1<=0&&d2<=0) w=[1,0,0]; else { var bp=[p[0]-b[0],p[1]-b[1],p[2]-b[2]], d3=dot(ab,bp), d4=dot(ac,bp); if(d3>=0&&d4<=d3) w=[0,1,0]; else { var vc=d1*d4-d3*d2;
        if(vc<=0&&d1>=0&&d3<=0){ var v1=d1/(d1-d3); w=[1-v1,v1,0]; } else { var cp=[p[0]-c[0],p[1]-c[1],p[2]-c[2]], d5=dot(ab,cp), d6=dot(ac,cp); if(d6>=0&&d5<=d6) w=[0,0,1]; else { var vb=d5*d2-d1*d6;
          if(vb<=0&&d2>=0&&d6<=0){ var w2=d2/(d2-d6); w=[1-w2,0,w2]; } else { var va=d3*d6-d5*d4; if(va<=0&&(d4-d3)>=0&&(d5-d6)>=0){ var w3=(d4-d3)/((d4-d3)+(d5-d6)); w=[0,1-w3,w3]; } else { var dn=1/(va+vb+vc); w=[1-(vb+vc)*dn,vb*dn,vc*dn]; } } } } } }
      var q=[a[0]*w[0]+b[0]*w[1]+c[0]*w[2],a[1]*w[0]+b[1]*w[1]+c[1]*w[2],a[2]*w[0]+b[2]*w[1]+c[2]*w[2]], dd=(q[0]-p[0])*(q[0]-p[0])+(q[1]-p[1])*(q[1]-p[1])+(q[2]-p[2])*(q[2]-p[2]); if(dd<bd){ bd=dd; best={t:t,w:w}; } });
    return best; }
  function applyInput(o,k,v,live){ var fd=atField(o,k), src=o._snap||{G:o.G,F:o.F,p:JSON.parse(JSON.stringify(o.prim.p)),off:o.prim.off};
    if(o.prim.p[k]===v&&!o._snap) return false;
    if(!o.prim.edited){ o.prim.p[k]=v; rebuild(o); return true; }   /* nothing edited: simply built again */
    var t=o.prim.t, P0=src.p, P1=JSON.parse(JSON.stringify(P0)); P1[k]=v; var B0=PRIM[t](P0), off0=src.off||primOff(o,B0), gc0=boxC(B0.V);
    if(fd[2]==null){ var f=sizeMap(t,P0,P1), B1=PRIM[t](P1), gc1=boxC(B1.V), off1=[off0[0]+gc0[0]-gc1[0],off0[1]+gc0[1]-gc1[1],off0[2]+gc0[2]-gc1[2]];   /* a size: every corner moves along */
      o.G=src.G.map(function(g){ var m=f([g[0]-off0[0],g[1]-off0[1],g[2]-off0[2]]); return [m[0]+off1[0],m[1]+off1[1],m[2]+off1[2]]; }); o.F=src.F; o.prim.p[k]=v; o.prim.off=off1; worldV(o); gdirty=true; return true; }
    /* a subdivision: possible when the edits only moved corners; the moves are carried over onto the new surface */
    if(!sameTopo({G:src.G,F:src.F},B0)){ if(!live) toast("Subdivisions are locked after extrudes, cuts or merges. Sizes still work, or use Rebuild from inputs."); return false; }
    var B1b=PRIM[t](P1), gc1b=boxC(B1b.V), off1b=[off0[0]+gc0[0]-gc1b[0],off0[1]+gc0[1]-gc1b[1],off0[2]+gc0[2]-gc1b[2]], disp=src.G.map(function(g,i){ return [g[0]-off0[0]-B0.V[i][0],g[1]-off0[1]-B0.V[i][1],g[2]-off0[2]-B0.V[i][2]]; });
    var tris=[]; B0.F.forEach(function(fc){ for(var j=1;j<fc.length-1;j++){ var tr=[B0.V[fc[0]],B0.V[fc[j]],B0.V[fc[j+1]]]; tr.d=[disp[fc[0]],disp[fc[j]],disp[fc[j+1]]]; tris.push(tr); } });
    o.G=B1b.V.map(function(pv){ var h=closestTri(pv,tris), d=[0,0,0]; if(h) for(var j=0;j<3;j++){ d[0]+=h.t.d[j][0]*h.w[j]; d[1]+=h.t.d[j][1]*h.w[j]; d[2]+=h.t.d[j][2]*h.w[j]; } return [pv[0]+d[0]+off1b[0],pv[1]+d[1]+off1b[1],pv[2]+d[2]+off1b[2]]; });
    o.F=B1b.F; o.prim.p[k]=v; o.prim.off=off1b; delete o.fm; Object.keys(csel).forEach(function(kk){ if(csel[kk].id===o.id) delete csel[kk]; }); hover=null; worldV(o); gdirty=true; return true; }
  function rebuild(o){ var g=PRIM[o.prim.t](o.prim.p), gc=boxC(g.V), c=trOf(o).p; o.G=g.V.map(function(v){ return [v[0]-gc[0]+c[0],v[1]-gc[1]+c[1],v[2]-gc[2]+c[2]]; }); o.F=g.F; o.prim.edited=false; o.prim.off=[c[0]-gc[0],c[1]-gc[1],c[2]-gc[2]]; delete o.fm; worldV(o);
    Object.keys(csel).forEach(function(k){ if(csel[k].id===o.id) delete csel[k]; }); hover=null; gdirty=true; }
  function paintAttr(){ if(!wrap) return; var body=q(".at-body"), o=sel(); if(!body) return;
    if(o&&atFor===o.id&&body.contains(actEl())&&actEl().tagName==="INPUT") return;   /* do not rebuild the fields under the cursor while typing (a focused button is no reason to wait) */
    atFor=o?o.id:null; if(atPick&&!atField(o,atPick)) atPick=null;
    if(!o){ body.innerHTML='<p class="at-note">Select an object to see its channels.</p>'; return; }
    var row=function(k,lab,val,isInt,cls){ return '<div class="at-row'+(cls?" "+cls:"")+'"><button type="button" class="at-lab" data-k="'+k+'" aria-pressed="'+(atPick===k?"true":"false")+'" title="Click, then middle-drag in the viewport to change it">'+lab+'</button><input type="text" inputmode="'+(isInt?"numeric":"decimal")+'" data-k="'+k+'" value="'+val+'" aria-label="'+lab+'" title="Click to type, drag left or right to change (Ctrl finer, Shift bigger)"></div>'; };
    var h='<p class="at-name"><b>'+o.name+'</b></p>';
    CHB.forEach(function(c){ var ks=chFrames(o,c[0]), cls=ks.length?(ks.indexOf(S.frame)>=0?"keyed now":"keyed"):""; h+=row(c[0],c[1],+chGet(o,c[0]).toFixed(3),false,cls); });   /* keyed channels are tinted, like Maya's */
    h+='<div class="at-row"><span class="at-lab at-lab-s">Visibility</span><button type="button" class="at-vis" aria-pressed="'+(o.vis?"true":"false")+'" title="Show or hide (H)">'+(o.vis?"on":"off")+'</button></div>';
    h+='<p class="at-sec">Inputs</p>';
    if(!o.prim) h+='<p class="at-note">No inputs: this object has no construction history.</p>';
    else { var t=o.prim.t; h+='<p class="at-name at-node"><small>'+PNODE[t]+(o.prim.n||1)+'</small></p>';
      var locked=topoEdited(o); PFIELDS[t].forEach(function(fd){ h+=row(fd[0],fd[1],+o.prim.p[fd[0]].toFixed(3),fd[2]!=null,locked&&fd[2]!=null?"locked":""); });
      if(o.prim.edited) h+=locked?'<p class="at-note">Edited with extrudes, cuts or merges: sizes keep every change; subdivisions are locked, so nothing gets lost.</p><button type="button" class="at-rebuild" title="Starts over from these inputs and drops the edits (Ctrl+Z brings them back)">Rebuild from inputs</button>':'<p class="at-note">Edited: the inputs keep your changes.</p>'; }
    body.innerHTML=h; }
  /* live values while a manipulator drags or the animation plays */
  function liveAttr(){ var o=sel(); if(!o||atFor!==o.id) return; CHB.forEach(function(c){ var ci=q('.at-body input[data-k="'+c[0]+'"]'); if(!ci||actEl()===ci) return; var v=String(+chGet(o,c[0]).toFixed(3)); if(ci.value!==v) ci.value=v; }); }
  /* changing an input like in Maya (Jakob, 18.10.2026): a click selects the whole number, so typing replaces it; dragging left or right in the box changes it;
     click a name and middle-drag in the viewport to change it; Ctrl finer steps, Shift bigger ones */
  var atPick=null, atDrag=null;
  /* the channel box (Jakob, 18.10.2026), like Maya's: Translate, Rotate, Scale and Visibility on top, the inputs below */
  var CHB=[["tx","Translate X"],["ty","Translate Y"],["tz","Translate Z"],["rx","Rotate X"],["ry","Rotate Y"],["rz","Rotate Z"],["sx","Scale X"],["sy","Scale Y"],["sz","Scale Z"]], CHBN={}; CHB.forEach(function(c){ CHBN[c[0]]=c[1]; });
  function isCh(k){ return !!CHBN[k]; }
  function atField(o,k){ if(o&&isCh(k)) return [k,CHBN[k],null,null,"ch"]; return o&&o.prim?PFIELDS[o.prim.t].filter(function(x){ return x[0]===k; })[0]:null; }
  function atSet(o,k,v,live){ var fd=atField(o,k); if(!fd||!isFinite(v)) return;
    if(isCh(k)){ v=+(+v).toFixed(4); if(k[0]==="s"&&Math.abs(v)<1e-4) v=1e-4; if(chGet(o,k)===v) return; chSet(o,k,v); refresh(o); gdirty=true; var ci=q('.at-body input[data-k="'+k+'"]'); if(ci&&actEl()!==ci) ci.value=+v.toFixed(3); if(!live){ autoKeyFor(o); paintOutliner(); paintTimeline(); } return; }
    v=fd[2]!=null?Math.round(Math.max(fd[2],Math.min(fd[3],v))):Math.max(.01,Math.min(100,+v.toFixed(4)));
    if(o.prim.p[k]===v) return; var ok=applyInput(o,k,v,live); if(!ok) return; var inp=q('.at-body input[data-k="'+k+'"]'); if(inp&&actEl()!==inp) inp.value=+v.toFixed(3); if(!live) paintOutliner(); }
  function atRate(o,k,e){ var fd=atField(o,k), r=isCh(k)?(k[0]==="r"?.5:k[0]==="s"?.005:.01):fd&&fd[2]!=null?.12:.01; if(e.ctrlKey||e.metaKey) r*=.1; if(e.shiftKey) r*=10; return r; }   /* per pixel: whole numbers 1 step every 8 px, decimals 0.01; rotation half a degree, scale 0.005 */
  function atStart(o,k,x,e,src){ if(!isCh(k)&&o.prim&&o.prim.edited) o._snap={G:o.G.map(function(g){ return g.slice(); }),F:o.F,p:JSON.parse(JSON.stringify(o.prim.p)),off:o.prim.off}; atDrag={o:o,k:k,x0:x,v0:isCh(k)?chGet(o,k):o.prim.p[k],acc:0,lx:x,moved:false,src:src}; }
  function atMove(e){ var d=atDrag; if(!d) return; var dx=e.clientX-d.lx; d.lx=e.clientX; if(!d.moved&&Math.abs(e.clientX-d.x0)<3) return; if(!d.moved){ d.moved=true; mark(); root.classList.add("egg-cube-drag"); dx=e.clientX-d.x0; }   /* counted from where the drag started */
    d.acc+=dx*atRate(d.o,d.k,e); atSet(d.o,d.k,d.v0+d.acc,true); }   /* the rate is read on every move, so Ctrl and Shift can change mid-drag */
  function atEnd(){ var d=atDrag; atDrag=null; root.classList.remove("egg-cube-drag"); if(d&&d.o) delete d.o._snap; if(d&&d.moved){ snd(520); if(isCh(d.k)) autoKeyFor(d.o); paintOutliner(); paintBar(); paintTimeline(); } return d; }
  function attrEvents(){ var body=q(".at-body");
    body.addEventListener("pointerdown",function(e){ var inp=e.target.closest("input[data-k]"), o=sel(); if(!inp||!o||!atField(o,inp.getAttribute("data-k"))||e.button!==0) return; if(actEl()===inp) return;   /* already typing: the caret goes where clicked */
      e.preventDefault(); inp.setPointerCapture(e.pointerId); atStart(o,inp.getAttribute("data-k"),e.clientX,e,inp); });
    body.addEventListener("pointermove",function(e){ if(atDrag&&atDrag.src&&e.target.closest("input[data-k]")===atDrag.src) atMove(e); });
    body.addEventListener("pointerup",function(e){ if(!atDrag||!atDrag.src) return; var d=atEnd(); if(d&&!d.moved){ d.src.focus(); d.src.select(); } });   /* a click without a drag: the whole number is selected */
    body.addEventListener("click",function(e){ var lb=e.target.closest(".at-lab"); if(!lb) return; var k=lb.getAttribute("data-k"); atPick=atPick===k?null:k; if((e.ctrlKey||e.metaKey)&&atPick===k) atPick=null; if(!atPick) lb.blur();   /* Ctrl + click on a highlighted name: no highlight left (Jakob, 18.10.2026) */
      [].forEach.call(body.querySelectorAll(".at-lab"),function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-k")===atPick?"true":"false"); }); snd(atPick?560:420); if(atPick) toast("Middle-drag in the viewport to change "+lb.textContent+". Ctrl finer, Shift bigger."); });
    body.addEventListener("change",function(e){ var inp=e.target.closest("input[data-k]"), o=sel(); if(!inp||!o) return; var k=inp.getAttribute("data-k"); if(!atField(o,k)) return; var cur=function(){ return isCh(k)?chGet(o,k):o.prim.p[k]; };
      var v=parseFloat(String(inp.value).replace(",",".")); if(!isFinite(v)){ inp.value=+cur().toFixed(3); return; } mark(); atSet(o,k,v); inp.value=+cur().toFixed(3); });
    body.addEventListener("click",function(e){ if(e.target.closest(".at-rebuild")){ var or=sel(); if(or&&or.prim){ mark(); rebuild(or); snd(420); toast("Rebuilt from the inputs. Ctrl+Z brings the edits back."); paintAll(); } return; } if(!e.target.closest(".at-vis")) return; var o=sel(); if(!o) return; mark(); o.vis=!o.vis; desc(o).forEach(function(c){ c.vis=o.vis; }); hover=null; snd(o.vis?560:420); paintAll(); });
    body.addEventListener("focusout",function(e){ setTimeout(paintAttr,0); });
    body.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); e.target.blur(); } else if(e.key==="Escape"){ e.preventDefault(); e.stopPropagation(); var o=sel(); if(o&&o.prim&&e.target.matches("input[data-k]")) e.target.value=+o.prim.p[e.target.getAttribute("data-k")].toFixed(3); e.target.blur(); } }); }

  /* ---- the icon interface (Jakob, 17.10.2026): one switch in the title bar turns the text buttons into compact icon buttons; the words stay as tooltips
     and for screen readers. Remembered in sbh-cube-ui ---- */
  var IC={object:'<path d="M12 3 4 7.5v9L12 21l8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
    multi:'<path d="M12 3 4 7.5v9L12 21l8-4.5v-9z" opacity=".55"/><circle cx="12" cy="3.6" r="1.6" fill="currentColor"/><path d="M12 12v9" /><rect x="15.5" y="12.5" width="4" height="4" fill="currentColor" stroke="none" opacity=".8"/>',
    vert:'<path d="M5 18 12 6l7 12z" opacity=".45"/><circle cx="5" cy="18" r="2" fill="currentColor"/><circle cx="12" cy="6" r="2" fill="currentColor"/><circle cx="19" cy="18" r="2" fill="currentColor"/>',
    edge:'<path d="M5 18 12 6l7 12z" opacity=".35"/><path d="M5 18 12 6" stroke-width="3"/>',
    face:'<path d="M5 18 12 6l7 12z" fill="currentColor" fill-opacity=".55"/>',
    wire:'<path d="M12 3 4 7.5v9L12 21l8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9M4 16.5 12 12l8 4.5M12 3v9"/>',
    flat:'<rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" fill-opacity=".45"/>',
    shade:'<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16c3-2 4.5-5 4.5-8S15 6 12 4z" fill="currentColor" stroke="none"/>',
    lit:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.7.5 1 1.2 1 2.1h5c0-.9.3-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    names:'<circle cx="10" cy="8" r="3.2"/><path d="M3.5 19c.6-3.4 3.2-5.4 6.5-5.4 1.6 0 3 .5 4.1 1.3"/><path d="M15 15l6 6M21 15l-6 6"/>',
    bare:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.4 10.4 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4.1M6.6 6.6A17 17 0 0 0 2.5 12s3.5 7 9.5 7a9.6 9.6 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
    undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',   /* one connected arrow: the head meets the shaft (18.10.2026) */
    redo:'<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',
    extrude:'<path d="M5 15h14v5H5z" fill="currentColor" fill-opacity=".35"/><path d="M12 13V4M8.5 7.5 12 4l3.5 3.5"/>',
    dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    del:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    save:'<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>',
    reset:'<path d="M4 4v6h6"/><path d="M5 15a8 8 0 1 0 1.5-7.5L4 10"/>',
    turn:'<ellipse cx="12" cy="16" rx="8" ry="3"/><path d="M8 13V7l4-2 4 2v6"/><path d="m18 11 2 2-3 1"/>',
    keys:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
    close:'<path d="M6 6l12 12M18 6 6 18"/>',
    setkey:'<path d="M12 4 20 12 12 20 4 12z" fill="currentColor" fill-opacity=".5"/>',
    auto:'<path d="M3 18c4 0 5-12 9-12s5 12 9 12"/>', linear:'<path d="M3 18 12 6l9 12"/>', step:'<path d="M3 18h6V6h6v12h6"/>',
    graph:'<path d="M4 4v16h16"/><path d="M7 15c3-1 3-7 6-7s3 5 6 4"/>',
    wip:'<text x="12" y="15.4" text-anchor="middle" font-size="9.6" font-weight="900" letter-spacing=".2" fill="currentColor" stroke="none" font-family="system-ui,sans-serif">WIP</text>',
    add:'<path d="M4 4l6 15 2-6 6-2z"/><path d="M18 15v6M15 18h6"/>',
    asave:'<path d="M5 4h10l4 4v5"/><path d="M5 4v16h7M8 4v4h6V4"/><path d="M21 17a4 4 0 1 1-1.2-2.8"/><path d="M21 13v2.4h-2.4"/>',
    keep:'<path d="M3 15h8v5H3zM11 15h8v5h-8z"/><path d="M7 13V6M15 13V6M5 8l2-2 2 2M13 8l2-2 2 2"/>',
    merge:'<circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><path d="M6.5 8.5 12 15l5.5-6.5"/><circle cx="12" cy="17" r="2.4" fill="currentColor"/>',
    mergec:'<circle cx="4" cy="5" r="1.8"/><circle cx="20" cy="5" r="1.8"/><circle cx="4" cy="19" r="1.8"/><circle cx="20" cy="19" r="1.8"/><path d="M6 7l3.5 3.5M18 7l-3.5 3.5M6 17l3.5-3.5M18 17l-3.5-3.5"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/>',
    grid:'<path d="M3 8h18M3 16h18M8 3v18M16 3v18"/><rect x="3" y="3" width="18" height="18" rx="2"/>',
    mtree:'<path d="M12 3l5 6h-3l4 5h-3l4 5H5l4-5H6l4-5H7z"/><path d="M12 19v2.5"/>',
    mmushroom:'<path d="M4 12a8 6 0 0 1 16 0z"/><path d="M9 12v5.5a3 3 0 0 0 6 0V12"/>',
    msnowman:'<circle cx="12" cy="7" r="3"/><circle cx="12" cy="15.5" r="5"/><path d="M9.5 3.5h5"/>',
    mhouse:'<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>',
    mrocket:'<path d="M12 3c3 2 4 6 4 10l-4 3-4-3c0-4 1-8 4-10z"/><path d="M8 13l-3 3v3l3-2M16 13l3 3v3l-3-2"/><circle cx="12" cy="9" r="1.5"/>',
    sil:'<path d="M12 3a3.2 3.2 0 1 1 0 6.4A3.2 3.2 0 0 1 12 3z" fill="currentColor"/><path d="M6.5 21c0-4.5 2.2-9 5.5-9s5.5 4.5 5.5 9z" fill="currentColor"/>',
    "2d":'<path d="M4 20l4-1 10-10-3-3L5 16z"/><path d="M13 7l3 3"/>',
    gen:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>',
    lib:'<path d="M4 7h4v4H4zM10 7h4v4h-4zM16 7h4v4h-4zM4 13h4v4H4zM10 13h4v4h-4zM16 13h4v4h-4z"/>',
    lload:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/><path d="M16.5 11.5v6M14 15l2.5 2.5L19 15" stroke-width="2"/>',
    more:'<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    lsave:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/><path d="M14 13.5l2 2 3.5-4" stroke-width="2"/>',
    lreset:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/><path d="M16.5 17a3 3 0 1 0-2.4-4.8M14 11v1.6h1.6"/>',
    export:'<path d="M12 16V5M8 9l4-4 4 4"/><path d="M4 15v4h16v-4"/>',
    mats:'<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.9 0-1.4-1.3-1.8-1.3-3 0-1 .8-1.6 1.9-1.6H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.3" fill="currentColor"/><circle cx="10" cy="7" r="1.3" fill="currentColor"/><circle cx="15" cy="7.3" r="1.3" fill="currentColor"/>',
    selall:'<rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke-dasharray="3 2.4"/><path d="m8 12 3 3 5-6"/>',
    comb:'<rect x="3" y="5" width="11" height="11" rx="2"/><rect x="10" y="9" width="11" height="11" rx="2"/><path d="M10 9h4v7h-4z" fill="currentColor" fill-opacity=".45" stroke="none"/>',
    sepa:'<rect x="2" y="7" width="8" height="10" rx="2"/><rect x="14" y="7" width="8" height="10" rx="2"/><path d="M12 4v3M12 17v3" stroke-dasharray="1.5 2"/>',
    cpiv:'<circle cx="12" cy="12" r="6.5"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/>',
    grp:'<path d="M5 3.5H3v17h2M19 3.5h2v17h-2"/><rect x="7" y="7" width="5" height="5" rx="1"/><circle cx="15" cy="15.5" r="2.5"/>',
    ugrp:'<path d="M5 3.5H3v4M3 16.5v4h2M19 3.5h2v4M21 16.5v4h-2"/><rect x="7" y="7" width="5" height="5" rx="1"/><circle cx="15" cy="15.5" r="2.5"/>',
    par:'<circle cx="12" cy="5" r="2.4"/><circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="19" r="2.4"/><path d="M12 7.4V12M6 16.6V12h12v4.6"/>',
    upar:'<circle cx="12" cy="5" r="2.4"/><circle cx="12" cy="19" r="2.4"/><path d="M12 7.4v2.6M12 14v2.6"/><path d="M8 12h8" stroke-dasharray="1.6 2"/>',
    tut:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',
    snd:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path class="snd-w" d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11"/><path class="snd-x" d="M16 9.5l5 5M21 9.5l-5 5"/>',
    ui:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    pcube:'<path d="M12 3 4 7.5v9L12 21l8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>', psphere:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',
    pcylinder:'<ellipse cx="12" cy="6" rx="6" ry="2.5"/><path d="M6 6v12c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6"/>', pcone:'<path d="M12 3 5.5 18c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5z" fill="currentColor" fill-opacity=".28"/>',
    ptorus:'<ellipse cx="12" cy="12" rx="9" ry="5"/><ellipse cx="12" cy="11.5" rx="3.5" ry="1.6"/>', pplane:'<path d="M3 15 9 9h12l-6 6z"/>', pdisk:'<ellipse cx="12" cy="13" rx="9" ry="4"/>',
    saveobj:'<path d="M12 3 5 7v8l7 4 7-4V7z"/><path d="M12 9v7M9 13l3 3 3-3"/>', savescene:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M12 8v6M9 11l3 3 3-3M8 21h8"/>',
    open:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>', import:'<path d="M12 4v10M8 10l4 4 4-4"/><path d="M4 16v3h16v-3"/>'};
  var ICMAP=[[".cb-more","more"],[".cb-mode button[data-m=object]","object"],[".cb-mode button[data-m=multi]","multi"],[".cb-mode button[data-m=vert]","vert"],[".cb-mode button[data-m=edge]","edge"],[".cb-mode button[data-m=face]","face"],
    [".cb-shade button[data-s=wire]","wire"],[".cb-shade button[data-s=flat]","flat"],[".cb-shade button[data-s=shade]","shade"],[".cb-shade button[data-s=lit]","lit"],[".cb-undo","undo"],[".cb-redo","redo"],[".cb-ext","extrude"],[".cb-grid","grid"],[".cb-mats","mats"],[".cb-sil","sil"],[".cb-2d","2d"],[".cb-bare","bare"],[".cb-names","names"],[".cb-gen","gen"],[".cb-lib","lib"],[".ch-models button[data-mo=tree]","mtree"],[".ch-models button[data-mo=mushroom]","mmushroom"],[".ch-models button[data-mo=snowman]","msnowman"],[".ch-models button[data-mo=house]","mhouse"],[".ch-models button[data-mo=rocket]","mrocket"],[".cb-imp","import"],[".cb-exp","export"],[".cb-keep","keep"],[".cb-merge","merge"],[".cb-mergec","mergec"],[".cb-asave","asave"],[".cb-all","selall"],[".cb-comb","comb"],[".cb-sepa","sepa"],[".cb-cpiv","cpiv"],[".cb-grp","grp"],[".cb-ugrp","ugrp"],[".cb-par","par"],[".cb-upar","upar"],[".cb-dup","dup"],[".cb-del","del"],
    [".cb-save","save"],[".cb-reset","reset"],[".cb-turn","turn"],[".cb-keys","keys"],[".cb-close","close"],[".tl-key-btn","setkey"],[".tl-tan button[data-t=auto]","auto"],[".tl-tan button[data-t=linear]","linear"],
    [".tl-tan button[data-t=step]","step"],[".tl-graph","graph"],[".tl-auto",null],[".ch-wip","wip"],[".cb-tut","tut"],[".cb-add","add"],[".ch-prims button[data-p=cube]","pcube"],[".ch-prims button[data-p=sphere]","psphere"],
    [".ch-prims button[data-p=cylinder]","pcylinder"],[".ch-prims button[data-p=cone]","pcone"],[".ch-prims button[data-p=torus]","ptorus"],[".ch-prims button[data-p=plane]","pplane"],[".ch-prims button[data-p=disk]","pdisk"],
    [".gl-save-obj","saveobj"],[".gl-save-scene","savescene"],[".gl-open","open"],[".gl-imp","import"]];
  function iconize(scope){ ICMAP.forEach(function(m){ [].forEach.call((scope||wrap).querySelectorAll(m[0]),function(b){ if(b._ic) return; b._ic=1; var t=b.textContent.trim();
      b.innerHTML=(m[1]?'<svg class="bi" viewBox="0 0 24 24" aria-hidden="true">'+IC[m[1]]+'</svg>':'')+'<span class="bt">'+t.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</span>';
      if(!b.title) b.title=t; else if(b.title.indexOf(t)<0) b.title=t+": "+b.title; }); }); twinInit(); }
  /* buttons with two labels (Hide Page / Show Page, Hide Text / Show Text): both labels sit in the same place and the unused one is invisible, so the button never changes size when it toggles (Jakob, 19.10.2026) */
  var TWIN={".cb-bare":["Hide Page","Show Page"],".cb-names":["Hide Text","Show Text"]};
  function twinSet(b,on,pair){ var s=b.querySelector(".bt"); if(!s){ b.textContent=pair[on?1:0]; return; } if(!s.classList.contains("twin")){ s.classList.add("twin"); s.innerHTML='<span class="ta">'+pair[0]+'</span><span class="tb">'+pair[1]+'</span>'; } s.classList.toggle("on",!!on); }
  function twinInit(){ Object.keys(TWIN).forEach(function(sel){ var b=q(sel); if(b) twinSet(b,sel===".cb-bare"?!!bare:!!noNames,TWIN[sel]); }); }
  function btnText(b,t){ var s=b.querySelector(".bt"); if(s) s.textContent=t; else b.textContent=t; b.title=t; }
  var iconUI=true; try{ iconUI=localStorage.getItem("sbh-cube-ui")!=="text"; }catch(e){}   /* icon buttons unless text buttons were chosen (18.10.2026) */
  function setIconUI(v){ iconUI=v; clearTimeout(fitT); fitT=setTimeout(fitBars,60);   /* icons or text change every width: fit the bars again */ try{ localStorage.setItem("sbh-cube-ui",v?"icons":"text"); }catch(e){} if(!wrap) return; wrap.classList.toggle("icons",v); var b=q(".cb-ui"); if(b){ b.setAttribute("aria-pressed",v?"true":"false"); btnText(b,v?"Text UI":"Icon UI"); }
    placeAll(); if(geOpen) setGraph(true); }
  /* ---- the tutorial (Jakob, 17.10.2026): five steps with a small looping animation each; "Tutorial" in the title bar; arrows, Esc ---- */
  var CUBE='<polygon points="150,45 185,62 150,79 115,62" class="tf-top"/><polygon points="115,62 150,79 150,118 115,101" class="tf-l"/><polygon points="150,79 185,62 185,101 150,118" class="tf-r"/>';
  var CUR='<path d="M0 0 L0 16 L4.5 12 L7.5 19 L10 18 L7 11 L12.5 11 Z" class="tcur-p"/>';
  var LINES='<g class="t-rows"><rect x="20" y="101" width="90" height="5" rx="2"/><rect x="200" y="101" width="80" height="5" rx="2"/><line x1="16" y1="113" x2="284" y2="113"/><rect x="20" y="124" width="110" height="5" rx="2"/><rect x="210" y="124" width="70" height="5" rx="2"/><line x1="16" y1="136" x2="284" y2="136"/></g>';
  var TUT=[
    {t:"Select and move",p:"Click an object to select it.\n{W} moves, {E} rotates, {R} scales: drag the colored arrows, rings or boxes, or drag straight on an object.\n{Alt}\u00a0+\u00a0drag turns the camera, and {F} frames what you selected.",
     svg:'<g class="t1-obj">'+CUBE+'<polygon points="150,45 185,62 185,101 150,118 115,101 115,62" class="t-sel t1-sel"/><g class="t1-giz"><line x1="150" y1="82" x2="196" y2="82" class="gx"/><polygon points="196,77 205,82 196,87" class="gx-h"/><line x1="150" y1="82" x2="150" y2="40" class="gy"/><polygon points="145,40 150,31 155,40" class="gy-h"/><rect x="146" y="78" width="8" height="8" class="gc"/></g></g><g class="t1-cur">'+CUR+'</g>'},
    {t:"Choose what to edit",p:"Hold the right mouse button on an object and drag to a mode: Vertex, Edge, Face or Object Mode.\nIn Face mode, click a face to select just that face.",
     svg:CUBE+'<polygon points="150,79 185,62 185,101 150,118" class="t-face t2-face"/><g class="t2-menu"><circle cx="150" cy="82" r="5" class="mm-c"/><g class="mm-l"><rect x="130" y="40" width="40" height="16" rx="8"/><text x="150" y="51.5">Edge</text><rect x="180" y="46" width="72" height="16" rx="8"/><text x="216" y="57.5">Object Mode</text><rect x="80" y="74" width="40" height="16" rx="8"/><text x="100" y="85.5">Vertex</text><rect x="182" y="74" width="38" height="16" rx="8"/><text x="201" y="85.5">Multi</text><rect x="116" y="132" width="68" height="26" rx="5"/><text x="150" y="143.5">Multi-Cut</text></g><g class="t2-pick"><rect x="132" y="112" width="36" height="16" rx="8"/><text x="150" y="123.5">Face</text></g></g><g class="t2-cur">'+CUR+'</g>'},
    {t:"Extrude",p:"Select one or more faces, then press {Ctrl}\u00a0+\u00a0{E} or click Extrude in the bar.\nDrag the colored arrows to pull the new faces out. {Shift}\u00a0+\u00a0drag on an arrow extrudes in one go.",
     svg:'<polygon points="115,62 150,79 150,118 115,101" class="tf-l"/><polygon points="150,79 185,62 185,101 150,118" class="tf-r"/><g class="t3-walls"><path d="M115 32 L150 49 L150 79 L115 62 Z" class="tf-l t3-wl"/><path d="M150 49 L185 32 L185 62 L150 79 Z" class="tf-r t3-wr"/></g><g class="t3-up"><polygon points="150,45 185,62 150,79 115,62" class="t-face"/><line x1="150" y1="62" x2="150" y2="26" class="gy"/><polygon points="145,26 150,17 155,26" class="gy-h"/></g><g class="t3-keys"><rect x="214" y="30" width="34" height="22" rx="5"/><text x="231" y="45">Ctrl</text><rect x="252" y="30" width="22" height="22" rx="5"/><text x="263" y="45">E</text></g><g class="t3-cur">'+CUR+'</g>'},
    {t:"Add shapes",p:"Add a cube, sphere, cylinder and more from the Create bar at the top.\nThe Inputs change the size and the subdivisions of a shape.",
     svg:'<g class="t4-icons"><rect x="62" y="8" width="160" height="38" rx="9" class="t4-bar"/><text x="86" y="31" class="t4-lab">Create</text><rect x="112" y="14" width="26" height="26" rx="6"/><rect x="142" y="14" width="26" height="26" rx="6" class="t4-hit"/><rect x="172" y="14" width="26" height="26" rx="6"/><path d="M125 20 118 24v8l7 4 7-4v-8z M118 24l7 4 7-4 M125 28v8" class="ti"/><circle cx="155" cy="27" r="7" class="ti"/><ellipse cx="185" cy="21" rx="6" ry="2.4" class="ti"/><path d="M179 21v12c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4v-12" class="ti"/></g><g class="t4-sph"><circle cx="140" cy="94" r="30" class="tf-top"/><ellipse cx="140" cy="94" rx="30" ry="10" class="tw"/><ellipse cx="140" cy="94" rx="10" ry="30" class="tw"/><g class="t4-more"><ellipse cx="140" cy="83" rx="27" ry="8" class="tw"/><ellipse cx="140" cy="105" rx="27" ry="8" class="tw"/><ellipse cx="140" cy="94" rx="21" ry="30" class="tw"/></g></g><g class="t4-in"><rect x="214" y="58" width="70" height="44" rx="7"/><text x="222" y="73" class="tl">Subdivisions</text><rect x="222" y="80" width="54" height="14" rx="4" class="t4-f"/><text x="249" y="91" class="t4-a">8</text><text x="249" y="91" class="t4-b">16</text></g><g class="t4-cur">'+CUR+'</g>'},
    {t:"Bring it into the handbook",p:"In Object Mode, drag an object and shake it left and right: it turns into a pixel object.\nDrop it on a line in the Handbook.",
     svg:LINES+'<g class="t5-cube"><g transform="translate(0 -20) scale(.62) translate(92 0)">'+CUBE+'</g></g><g class="t5-px"><rect x="138" y="88" width="24" height="23" class="px1"/><rect x="138" y="88" width="24" height="3" class="px2"/><rect x="138" y="108" width="24" height="3" class="px2"/><path d="M141 92 159 107 M159 92 141 107" class="px3"/></g><line x1="124" y1="113" x2="176" y2="113" class="t5-ln"/><g class="t5-tag"><rect x="176" y="62" width="96" height="18" rx="6"/><text x="224" y="74.5">crate · Q/E or scroll</text></g><g class="t5-cur">'+CUR+'</g>'},
    {t:"Change it while you carry it",p:"While you still hold the pixel object, press {Q} / {E} or scroll for another suggestion, and hold {Shift} to make it bigger or smaller.\nIt works in reverse, too: drag a placed pixel object and shake it:\u2028it turns back into the 3D object it came from.",
     svg:LINES+'<g class="t6-obj"><g class="t6-a"><rect x="138" y="64" width="24" height="24" class="px1"/><rect x="138" y="64" width="24" height="3" class="px2"/><rect x="138" y="85" width="24" height="3" class="px2"/><path d="M141 68 159 84 M159 68 141 84" class="px3"/></g>'
      +'<g class="t6-b"><circle cx="150" cy="70" r="12" class="px-tree"/><rect x="147" y="80" width="6" height="8" class="px2"/></g><g class="t6-c"><polygon points="136,75 150,62 164,75" class="px-roof"/><rect x="139" y="75" width="22" height="13" class="px-wall"/><rect x="147" y="80" width="6" height="8" class="px2"/></g></g>'
      +'<g class="t6-cube"><g transform="scale(.55) translate(123 0)">'+CUBE+'</g></g>'
      +'<g class="t6-keys"><rect x="22" y="38" width="22" height="20" rx="5" class="t6-qk"/><text x="33" y="52" class="t6-qt">Q</text><rect x="48" y="38" width="22" height="20" rx="5" class="t6-ek"/><text x="59" y="52" class="t6-et">E</text><rect x="22" y="66" width="48" height="20" rx="5" class="t6-sh"/><text x="46" y="80" class="t6-st">Shift</text></g>'
      +'<g class="t6-labs"><text x="77" y="47" class="t6-lab">other look</text><text x="77" y="56" class="t6-lab2">or scroll</text><text x="77" y="79" class="t6-lab">bigger or</text><text x="77" y="88" class="t6-lab">smaller</text></g><g class="t6-cur">'+CUR+'</g>'},   /* the keys once, each with what it does (Jakob, 20.10.2026: they were shown twice) */
    {t:"That’s all. Go make something.",p:"You now know more than most people on day one in a 3D program.\nModel something, wiggle it into the Handbook, and if it turns into a toaster, call it a creative decision.\nPrefer flat things? Inca has a little sister: **Pict**, for drawing in 2D. The **Pict** button in the top bar opens it.\nHave fun. And save often: not because Inca crashes. Habit.",
     svg:'<defs><clipPath id="t7-clip"><rect width="40" height="40" rx="10"/></clipPath><clipPath id="t7-tile"><rect x="1" y="1" width="38" height="38" rx="9"/></clipPath></defs><g class="t7-conf"><rect x="40" y="-6" width="4" height="6" rx="1" fill="#f2c14e" style="animation-delay:0.0s"/><rect x="70" y="-6" width="4" height="6" rx="1" fill="#e2574c" style="animation-delay:0.6s"/><rect x="105" y="-6" width="4" height="6" rx="1" fill="#4a8fe7" style="animation-delay:1.2s"/><rect x="140" y="-6" width="4" height="6" rx="1" fill="#f2c14e" style="animation-delay:0.3s"/><rect x="190" y="-6" width="4" height="6" rx="1" fill="#5bb46a" style="animation-delay:0.9s"/><rect x="225" y="-6" width="4" height="6" rx="1" fill="#e2574c" style="animation-delay:1.5s"/><rect x="255" y="-6" width="4" height="6" rx="1" fill="#4a8fe7" style="animation-delay:0.4s"/><rect x="280" y="-6" width="4" height="6" rx="1" fill="#f2c14e" style="animation-delay:1.1s"/></g><g class="t7-inca" transform="translate(88 42) scale(1.5)"><rect x="1" y="1" width="38" height="38" rx="9" fill="#9a3f24"/><g clip-path="url(#t7-tile)"><circle cx="31" cy="9" r="3.6" fill="#f2c14e" class="t7-sun"/><path d="M16.5 15.5H23.5V20.1H27.5V25.3H31.5V31.3H35.5V41H4.5V31.3H8.5V25.3H12.5V20.1H16.5z" fill="#f2c14e"/></g><rect x="1" y="1" width="38" height="38" rx="9" fill="none" stroke="#5e2414" stroke-width="2"/></g><g class="t7-pict" transform="translate(152 42) scale(1.5)"><g class="t7-hop"><defs><clipPath id="pt-wall-t7"><rect width="40" height="40" rx="10"/></clipPath><filter id="pt-grain-t7" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" seed="7"/><feColorMatrix values="0 0 0 0 .52 0 0 0 0 .4 0 0 0 0 .25 1.7 0 0 0 -.72"/></filter><filter id="pt-grain-t7-m" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency=".22" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 .62 0 0 0 0 .5 0 0 0 0 .32 1.4 0 0 0 -.62"/></filter></defs><g clip-path="url(#pt-wall-t7)"><rect width="40" height="40" rx="10" fill="#f7ead3"/><ellipse cx="9" cy="8" rx="10" ry="5.5" fill="#fff8ea" opacity=".75"/><ellipse cx="33" cy="31" rx="10" ry="6.5" fill="#e7d4b1" opacity=".55"/><ellipse cx="18" cy="37" rx="17" ry="4.5" fill="#dfc8a0" opacity=".5"/><rect width="40" height="40" filter="url(#pt-grain-t7-m)" opacity=".22"/><rect width="40" height="40" filter="url(#pt-grain-t7)" opacity=".3"/><path d="M2.6 12.2c2.6.8 3.9 2.6 3.2 5.4M34 2.5c-.6 2.2-.1 3.6 1.6 4.6" fill="none" stroke="#c8b089" stroke-width=".6" stroke-linecap="round" opacity=".8"/><g fill="#c4a980" opacity=".55"><circle cx="15" cy="5" r=".4"/><circle cx="24" cy="33.5" r=".45"/><circle cx="37" cy="21" r=".35"/><circle cx="4.5" cy="30" r=".4"/></g><path d="M8.2 17.4c-1.6.9-2.6 3.1-2.9 6.2" fill="none" stroke="#1d1a17" stroke-width="1.7" stroke-linecap="round"/><path d="M8 19c0-4.5 5-6 11-5.5 4 .3 6.5-.5 8.5-2s4-1.9 6-1.1c2.1.8 3.1 2.4 2.9 4-.2 1.4-1.4 2-2.8 1.8-1.6-.2-2.8.4-3.6 1.8-1.2 2.4-3 4.6-6 5.6-4 1.4-10.5 1.4-13.5-.2C8.8 22.5 8 20.8 8 19z" fill="#a65f2a"/><path d="M11.2 22.2c3.6 1.6 9.4 1.8 13 .4-1.6 1.3-4 1.9-7 1.9-2.6 0-4.8-.6-6-2.3z" fill="#f0d3a5" opacity=".9"/><path d="M23.8 13.6c2.2-.6 4.8-2 6.8-3.6 1-.7 2-.8 2.8-.4" fill="none" stroke="#1d1a17" stroke-width="1.7" stroke-linecap="round"/><path d="M24.8 13.2l.5-2.2M26.4 12.5l.7-2.4M28 11.6l.6-2.4M29.6 10.6l.5-2.2" fill="none" stroke="#1d1a17" stroke-width="1" stroke-linecap="round"/><ellipse cx="35.3" cy="13.9" rx="1.5" ry="1.7" fill="#1d1a17" opacity=".92"/><g fill="none" stroke="#1d1a17" stroke-linecap="round" stroke-linejoin="round"><path d="M11.6 22.8c-1.5 1.9-3.5 4-5.9 6.2" stroke-width="1.4"/><path d="M14.6 24c-.2 2.4-.3 4.8-.9 7.2" stroke-width="1.3"/><path d="M27.2 22.4c.3 2.6.6 5.4.5 8.4" stroke-width="1.3"/><path d="M28.8 21c1.3 2.5 2.7 5.3 3.9 8.3" stroke-width="1.4"/></g><g fill="#1d1a17"><ellipse cx="5.4" cy="29.4" rx="1.1" ry=".7" transform="rotate(-38 5.4 29.4)"/><ellipse cx="13.5" cy="31.6" rx="1" ry=".65"/><ellipse cx="27.6" cy="31.2" rx="1" ry=".65"/><ellipse cx="32.9" cy="29.7" rx="1.1" ry=".7" transform="rotate(22 32.9 29.7)"/></g></g></g></g>'}];
  var tutI=0;
  /* the introduction before step 1 (Jakob, 18.10.2026): the first time Inca is unlocked (and after an egg reset) people don't know what they found,
     so it says so, with the handbook's humor; two choices: the tutorial or skip it. Each step then has a small "Skip tutorial" */
  var INTRO_LOGO='<defs><clipPath id="ti-clip"><rect x="1" y="1" width="38" height="38" rx="9"/></clipPath></defs><g transform="translate(96 21) scale(2.7)"><g class="tut-intro-logo"><rect x="1" y="1" width="38" height="38" rx="9" fill="#9a3f24"/><g clip-path="url(#ti-clip)"><circle cx="31" cy="9" r="3.6" fill="#f2c14e" class="ti-sun"/><path d="M16.5 15.5H23.5V20.1H27.5V25.3H31.5V31.3H35.5V41H4.5V31.3H8.5V25.3H12.5V20.1H16.5z" fill="#f2c14e"/></g><rect x="1" y="1" width="38" height="38" rx="9" fill="none" stroke="#5e2414" stroke-width="2"/></g></g>';
  function tutMode(b,intro){ b.classList.toggle("intro",intro); if(!intro){ b.style.minHeight=""; var sg=b.querySelector(".tut-stage"); if(sg){ sg.style.minHeight=""; sg.style.height=""; } } if(intro){ b.querySelector("h3").style.minHeight=""; b.querySelector(".tut-p").style.minHeight=""; } b.querySelector(".tut-intro-btns").hidden=!intro; b.querySelector(".tut-nav").hidden=intro; b.querySelector(".tut-skip").hidden=intro; b.querySelector(".tut-fine").hidden=!intro; }
  /* the introduction: on the first unlock by itself; also from Back on step 1 and from the Tutorial button (Jakob, 19.10.2026), then with the plain label "Inca" */
  function tutIntro(force){ var b=q(".cube-tutbox"); if(!b) return; var first=!tutOffered; tutOffered=true; if(!b.hidden&&!force) return;   /* the tutorial is already open: no introduction on top of it */ b.hidden=false; keysPanel(false); wipPanel(false); tutMode(b,true);
    b.querySelector(".tut-n").textContent="Inca"; b.querySelector("h3").textContent="You found a 3D program.";
    tutText(b.querySelector(".tut-p"),INTRO_P);   /* a line break before "Anything you build" (Jakob, 20.10.2026), none after the first sentence */
    b.querySelector(".tut-fine").textContent="Inca 2027. Not to be confused with the ancient civilization.";
    b.querySelector(".tut-stage").innerHTML='<svg viewBox="0 0 300 150" aria-hidden="true" class="tut-s0">'+INTRO_LOGO+'</svg>';
    tutMode(b,false); tutFit(b); tutSize(b); var sameH=b.offsetHeight; tutMode(b,true); b.style.width="";   /* the introduction keeps its own width (600 px), only the steps fit the widest line (Jakob, 21.10.2026) */ var stg=b.querySelector(".tut-stage"); stg.style.minHeight=""; stg.style.height=""; var extra=sameH-b.offsetHeight; if(extra>0) stg.style.minHeight=(stg.offsetHeight+extra)+"px"; else if(extra<0) stg.style.height=Math.max(90,stg.offsetHeight+extra)+"px"; b.style.minHeight=sameH+"px";   /* the picture takes up the difference both ways, so the introduction stays as tall as a step */   /* the room it needs to be as big as a step goes into the picture, not into a gap above the fine print (Jakob, 20.10.2026) */   /* the introduction is exactly as big as the tutorial steps (Jakob, 20.10.2026) */
    q(".cb-tut").setAttribute("aria-expanded","true"); b.querySelector(".tut-start").focus({preventScroll:true}); snd(560); }
  function tutBack(){ if(tutI===0) tutIntro(true); else { tutGo(tutI-1); snd(480); } }
  function tutOpen(i){ var b=q(".cube-tutbox"); b.hidden=false; keysPanel(false); wipPanel(false); tutGo(i||0); q(".cb-tut").setAttribute("aria-expanded","true"); b.querySelector(".tut-next").focus(); snd(560); }
  function tutClose(done){ var b=q(".cube-tutbox"); if(!b||b.hidden) return; b.hidden=true; q(".cb-tut").setAttribute("aria-expanded","false"); snd(420); if(done) tutAgain(); }
  /* after the last step: the Tutorial button glows for 4 seconds, with a note that it can be watched again (Jakob, 18.10.2026) */
  function tutAgain(){ var bt=q(".cb-tut"); if(!bt) return; var old=q(".tut-again"); if(old) old.remove(); bt.classList.add("hl"); try{ bt.scrollIntoView({block:"nearest",inline:"nearest"}); }catch(e){}
    var r=bt.getBoundingClientRect(), n=document.createElement("div"); n.className="tut-again"; n.setAttribute("role","status"); n.textContent="Watch the tutorial again any time here."; wrap.appendChild(n);
    n.style.left=Math.round(r.left+r.width/2)+"px"; n.style.top=Math.round(r.bottom+10)+"px"; requestAnimationFrame(function(){ n.classList.add("in"); });
    clearTimeout(tutAgain.t); tutAgain.t=setTimeout(function(){ bt.classList.remove("hl"); n.classList.remove("in"); setTimeout(function(){ n.remove(); },300); },5600); }   /* three calm pulses of 1.8 s */
  /* the box keeps one size on every step, so Next and Back stay under the pointer (Jakob, 18.10.2026): the heading and the text reserve the room of the longest step */
  /* a step's text, one short paragraph per topic */
  function addKeys(sp,x){ x.split(/\{([^}]+)\}/).forEach(function(t,k){ if(k%2){ var kb=document.createElement("kbd"); kb.className="tut-key"; kb.textContent=t; sp.appendChild(kb); } else if(t) sp.appendChild(document.createTextNode(t)); }); }   /* {W}: a key in the tutorial text, gently highlighted (Jakob, 20.10.2026) */
  function tutText(el,t){ el.innerHTML=""; String(t).split("\n").forEach(function(line){ line=line.replace(/ (\S+)$/,"\u00a0$1");   /* the last two words stay together: no paragraph ends on a single word */ var sp=document.createElement("span"); sp.className="tut-pp"; line.split("**").forEach(function(part,i){ if(i%2){ var b=document.createElement("b"); b.className="tut-hl"; b.textContent=part; sp.appendChild(b); } else part.split("\u2028").forEach(function(x,j){ if(j) sp.appendChild(document.createElement("br")); addKeys(sp,x); }); }); el.appendChild(sp); }); }   /* \u2028: a line break without the paragraph gap (Jakob, 19.10.2026) */   /* **word** stands out in Pict's color (Jakob, 19.10.2026) */
  var INTRO_P="Someone hid a whole 3D program inside this\u00a0handbook. It models, it animates and it hasn’t crashed yet. Anything you build can move into the “Who to Ask” chapter, where the students will have opinions about it.";
  /* the window is exactly as wide as the widest line of all steps and the introduction, measured in this browser's own font (Jakob, 20.10.2026: as thin as the longest line allows) */
  function tutFit(b){ b.style.width=""; var pp=b.querySelector(".tut-p"); if(!pp.clientWidth) return; var c=pp.cloneNode(false); c.style.cssText="position:absolute;visibility:hidden;left:0;top:0;min-height:0;width:"+pp.clientWidth+"px"; pp.parentNode.appendChild(c);
    var mx=0; TUT.map(function(st){ return st.p; }).concat([INTRO_P]).forEach(function(t){ tutText(c,t); var cl=c.getBoundingClientRect().left;
      [].forEach.call(c.querySelectorAll(".tut-pp"),function(sp){ var tw=document.createTreeWalker(sp,NodeFilter.SHOW_TEXT), n; while((n=tw.nextNode())){ var re=/[^\s\u00a0]+/g, m; while((m=re.exec(n.data))){ var rg=document.createRange(); rg.setStart(n,m.index); rg.setEnd(n,m.index+m[0].length);
        var kb=n.parentNode.closest&&n.parentNode.closest(".tut-key"); [].forEach.call(rg.getClientRects(),function(r){ var R=kb?kb.getBoundingClientRect().right:r.right; if(R-cl>mx) mx=R-cl; }); } } }); });
    c.remove(); var cs=getComputedStyle(b), pad=parseFloat(cs.paddingLeft)+parseFloat(cs.paddingRight)+parseFloat(cs.borderLeftWidth)+parseFloat(cs.borderRightWidth);
    if(mx>0) b.style.width=Math.min(b.getBoundingClientRect().width,Math.ceil(mx+pad+2))+"px"; }
  function tutSize(b){ var hh=b.querySelector("h3"), pp=b.querySelector(".tut-p"), mh=0, mp=0; if(!pp.clientWidth) return;
    [[hh,"t"],[pp,"p"]].forEach(function(z){ var el=z[0], c=el.cloneNode(false); c.style.cssText="position:absolute;visibility:hidden;left:0;top:0;min-height:0;width:"+el.clientWidth+"px"; el.parentNode.appendChild(c);
      TUT.forEach(function(st){ if(z[1]==="p") tutText(c,st.p); else c.textContent=st[z[1]]; var h=c.offsetHeight; if(z[1]==="t") mh=Math.max(mh,h); else mp=Math.max(mp,h); }); c.remove(); });
    hh.style.minHeight=mh+"px"; pp.style.minHeight=mp+"px"; }
  function tutGo(i){ tutI=Math.max(0,Math.min(TUT.length-1,i)); var b=q(".cube-tutbox"), st=TUT[tutI]; tutMode(b,false); tutFit(b); tutSize(b);
    b.querySelector(".tut-n").textContent="Step "+(tutI+1)+" of "+TUT.length; b.querySelector("h3").textContent=st.t; tutText(b.querySelector(".tut-p"),st.p);
    b.querySelector(".tut-stage").innerHTML='<svg viewBox="0 0 300 150" aria-hidden="true" class="tut-s'+(tutI+1)+'">'+st.svg+'</svg>';   /* inserted fresh, so each animation starts from its beginning */
    [].forEach.call(b.querySelectorAll(".tut-dots button"),function(d,j){ d.setAttribute("aria-current",j===tutI?"step":"false"); });
    b.querySelector(".tut-back").disabled=false;   /* on step 1 it goes back to the introduction (Jakob, 19.10.2026) */ btnText(b.querySelector(".tut-next"),tutI===TUT.length-1?"Done":"Next"); }
  function tutEvents(){ var b=q(".cube-tutbox");
    /* pointing at Skip tutorial lights up the Tutorial button in the title bar, where it can be reopened (18.10.2026) */
    var sk=b.querySelector(".tut-skip"), cap=function(v){ var c=q(".cb-tut"); if(c) c.classList.toggle("cap-hint",v); };
    sk.addEventListener("pointerenter",function(){ cap(true); }); sk.addEventListener("pointerleave",function(){ cap(false); }); sk.addEventListener("focus",function(){ cap(true); }); sk.addEventListener("blur",function(){ cap(false); }); sk.addEventListener("click",function(){ cap(false); }); q(".cb-tut").addEventListener("click",function(){ if(b.hidden) tutIntro(true); else if(b.classList.contains("intro")){ tutGo(0); snd(600); } else tutClose(); });   /* during the introduction it starts the tutorial */
    b.querySelector(".tut-x").addEventListener("click",function(){ tutClose(); });
    b.querySelector(".tut-start").addEventListener("click",function(){ tutGo(0); b.querySelector(".tut-next").focus({preventScroll:true}); snd(600); });
    var kn=b.querySelector(".tut-know");   /* skipping asks once more, so nobody skips by accident (Jakob, 18.10.2026) */
    kn.addEventListener("click",function(){ if(kn.classList.contains("sure")){ clearTimeout(kn._t); kn.classList.remove("sure"); btnText(kn,"I know what I’m doing"); tutClose(true); return; }
      kn.classList.add("sure"); btnText(kn,"Really? 3D is hard."); snd(380); if(!E.calm()) kn.animate([{transform:"translateX(0)"},{transform:"translateX(-3px)"},{transform:"translateX(3px)"},{transform:"translateX(0)"}],{duration:260});
      clearTimeout(kn._t); kn._t=setTimeout(function(){ kn.classList.remove("sure"); btnText(kn,"I know what I’m doing"); },4000); });   /* skipped: the Tutorial button shows where it lives */
    b.querySelector(".tut-skip").addEventListener("click",function(){ tutClose(true); }); b.querySelector(".tut-back").addEventListener("click",function(){ tutBack(); });
    b.querySelector(".tut-next").addEventListener("click",function(){ if(tutI===TUT.length-1) tutClose(true); else { tutGo(tutI+1); snd(600); } });
    [].forEach.call(b.querySelectorAll(".tut-dots button"),function(d,j){ d.addEventListener("click",function(){ tutGo(j); snd(540); }); }); }
  /* ---- group, parent, combine, separate, center pivot (Jakob, 18.10.2026), like Maya: the last selected object is the parent; groups sit at the origin;
     everything keeps its place in the world when it moves in the hierarchy ---- */
  /* select all (Jakob, 18.10.2026): every visible object in the scene, in Object Mode (button, Ctrl+A) */
  function selectAll(){ if(S.mode!=="object") setMode("object"); osel=S.objs.filter(function(o){ return o.vis!==false; }).map(function(o){ return o.id; }); csel={}; if(osel.length) S.sel=osel[osel.length-1]; hover=null; snd(560); toast(osel.length?"All "+osel.length+" object"+(osel.length>1?"s":"")+" selected.":"Nothing in the scene."); paintAll(); }
  /* ---- the Outliner like Maya's (Jakob, 18.10.2026): click selects, Ctrl + click adds or removes, Shift + click selects a run of rows
     (Ctrl + Shift adds a run), a left-drag over rows selects them; middle-drag (or Alt + left-drag) a row onto another to parent it there,
     between rows to move it there, below the list to unparent it; the arrow folds a parent ---- */
  var olAnchor=null, olDrag=null, olSwallow=false;
  function olRows(){ return [].map.call(q(".ol-list").querySelectorAll(".ol-it"),function(li){ return +li.getAttribute("data-id"); }); }
  function olPick(id,e){ if(S.mode!=="object") setMode("object"); var rows=olRows(), ctl=e.ctrlKey||e.metaKey||addMode;
    if(e.shiftKey&&olAnchor!=null&&rows.indexOf(olAnchor)>=0){ var a2=rows.indexOf(olAnchor), b2=rows.indexOf(id), run=rows.slice(Math.min(a2,b2),Math.max(a2,b2)+1).map(function(x){ return {id:x,t:"o"}; }); selApply(run,ctl?"add":"replace"); }
    else { selApply([{id:id,t:"o"}],ctl?"toggle":"replace"); olAnchor=id; }
    S.sel=id; paintAll(); }
  function olTarget(e){ var ol=q(".ol-list"), li=e.target.closest&&e.target.closest(".ol-it"); if(!li||!ol.contains(li)){ var r=ol.getBoundingClientRect(); return (e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top-4&&e.clientY<=r.bottom+40)?{where:"world"}:null; }
    var rr=li.getBoundingClientRect(), f=(e.clientY-rr.top)/rr.height; return {id:+li.getAttribute("data-id"),li:li,where:f<.28?"before":f>.72?"after":"onto"}; }
  function olMark(t){ [].forEach.call(q(".ol-list").querySelectorAll(".ol-it"),function(li){ li.classList.remove("dz-onto","dz-before","dz-after"); }); q(".ol-list").classList.toggle("dz-world",!!(t&&t.where==="world"));
    if(t&&t.li) t.li.classList.add("dz-"+t.where); }
  function olDrop(ids,t){ var moved=ids.map(objById).filter(Boolean), tgt=t.id!=null?objById(t.id):null; if(!moved.length) return;
    if(tgt) moved=moved.filter(function(o){ return o!==tgt&&!isDesc(tgt,o); }); moved=moved.filter(function(o){ return !moved.some(function(p2){ return p2!==o&&isDesc(o,p2); }); });   /* never below itself; a moved parent takes its children along */
    if(!moved.length){ toast("That would put an object below itself."); return; } mark();
    if(t.where==="onto"){ moved.forEach(function(o){ if(o.par!==tgt.id) reparent(o,tgt.id); }); tgt.col=false; toast(moved.length===1?moved[0].name+" is now below "+tgt.name+".":moved.length+" objects are now below "+tgt.name+"."); }
    else { var pid=t.where==="world"?null:tgt.par; moved.forEach(function(o){ if(o.par!==pid) reparent(o,pid); });
      moved.forEach(function(o){ S.objs.splice(S.objs.indexOf(o),1); }); var at=t.where==="world"?S.objs.length:S.objs.indexOf(tgt)+(t.where==="after"?1:0); if(t.where==="after"){ var d2=desc(tgt); d2.forEach(function(x){ at=Math.max(at,S.objs.indexOf(x)+1); }); }
      S.objs.splice.apply(S.objs,[at,0].concat(moved)); toast(t.where==="world"?(moved.length===1?moved[0].name+" is at the top level now.":"Moved to the top level."):"Moved."); }
    refreshAll(); snd(560); paintAll(); }
  var olRenamedAt=0, olEditing=false;
  /* rename right in the row (Jakob, 18.10.2026): no browser dialog; Enter or a click elsewhere keeps the name, Esc cancels */
  function olRename(o){ if(!o||olEditing) return; olRenamedAt=performance.now(); var li=q('.ol-it[data-id="'+o.id+'"]'), bt=li&&li.querySelector(".ol-name"); if(!bt) return;
    var inp=document.createElement("input"); inp.type="text"; inp.className="ol-ren"; inp.value=o.name; inp.maxLength=40; inp.setAttribute("aria-label","New name for "+o.name); inp.spellcheck=false; bt.replaceWith(inp); olEditing=true; inp.focus(); inp.select();
    var done=false; function fin(keep){ if(done) return; done=true; olEditing=false; olRenamedAt=performance.now(); var v=inp.value.trim(); if(keep&&v&&v!==o.name){ mark(); o.name=v.slice(0,40); snd(560); } paintAll(); }
    inp.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); e.stopPropagation(); fin(true); } else if(e.key==="Escape"){ e.preventDefault(); e.stopPropagation(); fin(false); } });
    inp.addEventListener("blur",function(){ fin(true); }); ["pointerdown","click","dblclick"].forEach(function(t){ inp.addEventListener(t,function(e){ e.stopPropagation(); }); }); }
  function olEvents(){ var ol=q(".ol-list");
    ol.addEventListener("pointerdown",function(e){ olSwallow=false; var li=e.target.closest(".ol-it"); if(!li) return;   /* a new press: an old drag no longer swallows anything */ var id=+li.getAttribute("data-id"); if(e.target.closest(".ol-eye,.ol-fold")) return;
      if(e.button===1||(e.button===0&&e.altKey)){ e.preventDefault(); var ids=osel.indexOf(id)>=0&&S.mode==="object"?osel.slice():[id]; olDrag={ids:ids,x:e.clientX,y:e.clientY,moved:false,mid:true}; ol.setPointerCapture(e.pointerId); return; }   /* middle-drag: parent or move */
      if(e.button!==0) return; olDrag={sel:true,start:id,x:e.clientX,y:e.clientY,moved:false,ctl:e.ctrlKey||e.metaKey,shift:e.shiftKey}; });
    ol.addEventListener("pointermove",function(e){ if(!olDrag) return; if(!olDrag.moved&&Math.hypot(e.clientX-olDrag.x,e.clientY-olDrag.y)<4) return; olDrag.moved=true;
      if(olDrag.mid){ var el=document.elementFromPoint(e.clientX,e.clientY), t=olTarget({target:el||ol,clientX:e.clientX,clientY:e.clientY}); olDrag.t=t; olMark(t); ol.classList.add("dragging"); return; }
      var el2=document.elementFromPoint(e.clientX,e.clientY), li2=el2&&el2.closest&&el2.closest(".ol-it"); if(!li2||!ol.contains(li2)) return;   /* left-drag over rows: a run */
      if(S.mode!=="object") setMode("object"); var rows=olRows(), a3=rows.indexOf(olDrag.start), b3=rows.indexOf(+li2.getAttribute("data-id")); if(a3<0||b3<0) return;
      if(!olDrag.base) olDrag.base=osel.slice(); osel=olDrag.ctl?olDrag.base.slice():[]; rows.slice(Math.min(a3,b3),Math.max(a3,b3)+1).forEach(function(x){ if(osel.indexOf(x)<0) osel.push(x); }); S.sel=+li2.getAttribute("data-id"); olAnchor=olDrag.start; paintAll(); });
    ol.addEventListener("pointerup",function(e){ var d=olDrag; olDrag=null; ol.classList.remove("dragging"); olMark(null); if(!d) return;
      if(d.mid){ if(d.moved&&d.t) olDrop(d.ids,d.t); if(d.moved) olSwallow=true; return; }
      if(d.moved) olSwallow=true; });   /* a plain click selects in the click handler (also from the keyboard); a drag swallows the click after it */
    ol.addEventListener("pointercancel",function(){ olDrag=null; ol.classList.remove("dragging"); olMark(null); });
    ol.addEventListener("auxclick",function(e){ if(e.button===1) e.preventDefault(); });
    var olLast=null;
    ol.addEventListener("click",function(e){ if(olSwallow){ olSwallow=false; return; } var li=e.target.closest(".ol-it"); if(!li) return; var o=objById(+li.getAttribute("data-id")); if(!o) return;
      /* a double-click to rename, counted here: the first click repaints the list, so the browser never sees two clicks on one element (Jakob, 18.10.2026) */
      if(e.target.closest(".ol-name")){ var now2=performance.now(); if(olLast&&olLast.id===o.id&&now2-olLast.t<450){ olLast=null; olRename(o); return; } olLast={id:o.id,t:now2}; }
      if(e.target.closest(".ol-eye")){ mark(); o.vis=!o.vis; desc(o).forEach(function(c){ c.vis=o.vis; }); hover=null; paintAll(); return; }   /* a parent's eye covers what is below it */
      if(e.target.closest(".ol-fold")){ o.col=!o.col; snd(o.col?420:520); paintOutliner(); return; }
      olPick(o.id,e); }); }
  /* ---- Merge and Merge to Center (Jakob, 18.10.2026), like Maya: Merge joins selected corners closer than 0.05; Merge to Center joins all selected corners
     of an object into one, in their middle. Faces that collapse go away, unused corners too ---- */
  function mergeVerts(center){ if(S.mode==="object"){ toast("Select corners to merge (Vertex, Edge, Face or Multi mode)."); return; } var sv=selVerts(), ids=Object.keys(sv); if(!ids.length){ toast("Select corners to merge."); return; }
    mark(); var removed=0, THR=.05;
    ids.forEach(function(id){ var o=objById(+id), ks=sv[id]; if(!o||ks.length<2) return; var groups=[];
      if(center) groups=[ks.slice()];
      else { var pr={}; ks.forEach(function(k){ pr[k]=k; }); var fd=function(k){ while(pr[k]!==k){ pr[k]=pr[pr[k]]; k=pr[k]; } return k; };
        for(var i=0;i<ks.length;i++) for(var j=i+1;j<ks.length;j++){ var A=o.V[ks[i]], B=o.V[ks[j]]; if(Math.hypot(A[0]-B[0],A[1]-B[1],A[2]-B[2])<=THR){ var ra=fd(ks[i]), rb=fd(ks[j]); if(ra!==rb) pr[ra]=rb; } }
        var gm={}; ks.forEach(function(k){ var r=fd(k); (gm[r]=gm[r]||[]).push(k); }); groups=Object.keys(gm).map(function(r){ return gm[r]; }).filter(function(g3){ return g3.length>1; }); }
      if(!groups.length) return; var repl={}; groups.forEach(function(g3){ var c=cen(g3.map(function(k){ return o.V[k]; })); o.V[g3[0]]=c; g3.forEach(function(k){ repl[k]=g3[0]; }); });
      o.F=o.F.map(function(fc){ var out=[]; fc.forEach(function(k){ var r=repl[k]!=null?repl[k]:k; if(out[out.length-1]!==r) out.push(r); }); if(out.length>1&&out[0]===out[out.length-1]) out.pop(); return out; }).filter(function(fc){ return fc.length>=3; });
      var used={}, map={}, NV=[]; o.F.forEach(function(fc){ fc.forEach(function(k){ used[k]=1; }); }); o.V.forEach(function(v,k){ if(used[k]){ map[k]=NV.length; NV.push(v); } });
      removed+=o.V.length-NV.length; o.V=NV; o.F=o.F.map(function(fc){ return fc.map(function(k){ return map[k]; }); }); bake(o); if(o.prim) o.prim.edited=true; });
    if(!removed){ undo.pop(); toast(center?"Select two or more corners to merge.":"Nothing close enough to merge (within 0.05). Merge to Center joins them anyway."); return; }
    csel={}; extr=null; hover=null; snd(520); toast("Merged: "+removed+" corner"+(removed>1?"s":"")+" fewer."); paintAll(); }
  /* H hides or shows the selection, like Maya (Jakob, 18.10.2026); what is below an object follows it */
  function toggleVis(){ var list=S.mode==="object"?osel.map(objById).filter(Boolean):(sel()?[sel()]:[]); if(!list.length){ toast("Select something to hide or show."); return; } mark();
    list.forEach(function(o){ o.vis=!o.vis; desc(o).forEach(function(c){ c.vis=o.vis; }); }); hover=null; snd(list[0].vis?560:420); toast(list.length===1?list[0].name+(list[0].vis?" shown.":" hidden. H shows it again."):list.length+" objects shown or hidden."); paintAll(); }
  function objSel(){ return S.mode==="object"?osel.map(objById).filter(Boolean):[]; }
  function reparent(o,pid){ var Mw=mWorld(o); o.par=pid; fromWorld(o,Mw); }
  function freeName(base){ var n=1; while(S.objs.some(function(o){ return o.name===base+n; })) n++; return base+n; }
  function groupSel(){ var list=tops(); if(!list.length){ toast("Select objects to group."); return; } mark(); var pid=list.every(function(o){ return o.par===list[0].par; })?list[0].par:null;
    var g={id:nextId++,name:freeName("group"),grp:true,col:true,G:[],V:[],F:[],vis:true,T:{t:[0,0,0],r:[0,0,0],s:[1,1,1],p:[0,0,0]},K:{},par:pid};
    S.objs.splice(Math.min.apply(null,list.map(function(o){ return S.objs.indexOf(o); })),0,g); list.forEach(function(o){ reparent(o,g.id); });
    osel=[g.id]; S.sel=g.id; refreshAll(); snd(560); toast(g.name+": "+list.length+" object"+(list.length>1?"s":"")+" grouped."); paintAll(); }
  function ungroupSel(){ var gs=objSel().filter(function(o){ return o.grp; }); if(!gs.length){ toast("Select a group to ungroup."); return; } mark(); var freed=[];
    gs.forEach(function(g){ kids(g).forEach(function(c){ reparent(c,g.par); freed.push(c.id); }); S.objs.splice(S.objs.indexOf(g),1); });
    osel=freed; S.sel=freed.length?freed[freed.length-1]:null; refreshAll(); snd(520); toast("Ungrouped."); paintAll(); }
  function parentSel(){ var list=objSel(); if(list.length<2){ toast("Select the children first and the parent last."); return; } var par=list[list.length-1], ch=list.slice(0,-1).filter(function(o){ return o!==par&&o.par!==par.id&&!isDesc(par,o); });
    if(!ch.length){ toast("Nothing to parent there."); return; } mark(); ch.forEach(function(o){ reparent(o,par.id); }); refreshAll(); snd(560); toast(ch.length+" object"+(ch.length>1?"s":"")+" now below "+par.name+"."); paintAll(); }
  function unparentSel(){ var list=objSel().filter(function(o){ return o.par!=null; }); if(!list.length){ toast("Nothing selected has a parent."); return; } mark(); list.forEach(function(o){ reparent(o,null); }); refreshAll(); snd(520); toast("Unparented."); paintAll(); }
  function combineSel(){ var list=objSel().filter(function(o){ return !o.grp&&o.V.length; }); if(list.length<2){ toast("Select two or more objects to combine."); return; } mark(); var V=[], F=[], keyed=list.some(hasKeys);
    list.forEach(function(o){ var off=V.length; o.V.forEach(function(v){ V.push(v.slice()); }); o.F.forEach(function(fc){ F.push(fc.map(function(k){ return k+off; })); }); });
    var c=obj(freeName("polySurface"),V,F); c.T.p=[0,0,0]; var at=S.objs.indexOf(list[0]);   /* the pivot at the origin, like Maya */
    list.forEach(function(o){ kids(o).forEach(function(k){ reparent(k,null); }); S.objs.splice(S.objs.indexOf(o),1); }); S.objs.splice(Math.min(at,S.objs.length),0,c); worldV(c);
    osel=[c.id]; S.sel=c.id; csel={}; refreshAll(); snd(560); toast("Combined into "+c.name+(keyed?". The keys were not kept.":".")); paintAll(); }
  function separateSel(){ var list=objSel().filter(function(o){ return !o.grp; }); if(!list.length){ toast("Select an object to separate."); return; } var made=[], did=false;
    list.forEach(function(o){ var pr=o.F.map(function(_,i){ return i; }), find=function(i){ while(pr[i]!==i){ pr[i]=pr[pr[i]]; i=pr[i]; } return i; }, owner={};
      o.F.forEach(function(fc,fi){ fc.forEach(function(k){ if(owner[k]==null) owner[k]=fi; else { var a2=find(fi), b2=find(owner[k]); if(a2!==b2) pr[a2]=b2; } }); });
      var shells={}; o.F.forEach(function(fc,fi){ var r=find(fi); (shells[r]=shells[r]||[]).push(fi); }); var roots=Object.keys(shells); if(roots.length<2) return; if(!did){ mark(); did=true; }
      var piv=pivotW(o), at=S.objs.indexOf(o), here=[];
      roots.forEach(function(r){ var map={}, V=[], F=shells[r].map(function(fi){ return o.F[fi].map(function(k){ if(map[k]==null){ map[k]=V.length; V.push(o.V[k].slice()); } return map[k]; }); });
        var c=obj(freeName("polySurface"),V,F); c.T.p=piv.slice(); worldV(c); here.push(c); S.objs.push(c); });   /* each piece keeps the old pivot */
      here.forEach(function(c){ S.objs.splice(S.objs.indexOf(c),1); }); kids(o).forEach(function(k){ reparent(k,null); }); S.objs.splice(at,1); here.forEach(function(c,i){ S.objs.splice(at+i,0,c); }); made=made.concat(here); });
    if(!did){ toast("Nothing to separate: each object is one piece."); return; } osel=made.map(function(c){ return c.id; }); S.sel=osel[osel.length-1]; csel={}; refreshAll(); snd(560); toast("Separated into "+made.length+" objects."); paintAll(); }
  function centerPivot(){ var list=objSel(); if(!list.length){ toast("Select objects first."); return; } mark(); list.forEach(function(o){ var P=worldPts(o); if(P.length) setPivotW(o,boxC(P)); }); snd(560); toast("Pivot centered."); paintAll(); }
  /* the hotkeys window (18.10.2026): grouped, with key caps */
  var KEYS=[["Tools and selection",[[["Q"],"Select tool"],[["W"],"Move tool"],[["E"],"Rotate tool"],[["R"],"Scale tool"],[["Click"],"Select"],[["Shift","Click"],"Select or deselect"],[["Ctrl","Click"],"Deselect"],[["Ctrl","Shift","Click"],"Add to the selection"],[["Drag"],"On empty space: box select"],[["F8"],"Object Mode"],[["F9"],"Vertex"],[["F10"],"Edge"],[["F11"],"Face"],[["Right-drag"],"Marking menu: modes; below it Multi-Cut and modeling actions"],[["Paint"],"Paint select (top bar): paint over parts"],[["Ctrl","Paint"],"Paint select: paint them off"],[["B","Drag"],"Paint select: brush size"]]],
    ["Transform",[[["Drag"],"On a handle: move, rotate or scale along it"],[["Shift","Drag"],"Move handle, objects: duplicate and move the copy"],[["J"],"Hold while rotating: 15° steps"],[["Middle-drag"],"Anywhere: the handle used last"],[["Shift","Middle-drag"],"Move or scale along the axis you drag along"],[["W","Drag"],"Move what is under the pointer"],[["E","Drag"],"Turn what is under the pointer"],[["R","Drag"],"Scale what is under the pointer"],[["Ctrl","Drag"],"On a scale handle: the other two axes"],[["D"],"Hold to move the pivot"],[["Insert"],"Pivot editing on or off"]]],
    ["Modeling",[[["Ctrl","E"],"Extrude the selected faces (blue arrow: thickness)"],[["Scroll"],"Over a shape, or anywhere while the page is hidden: dolly in or out"],[["Shift","Drag"],"On the move handles: extrude and pull"],[["Click"],"Multi-Cut: edges, corners and earlier points snap"],[["Ctrl","Click"],"Multi-Cut, on an edge: an edge loop"],[["Double-click"],"On an edge: select its loop"],[["Ctrl","G"],"Group"],[["Middle-drag"],"Outliner: onto a row parents, between rows moves"],[["Ctrl","Shift","G"],"Ungroup"],[["P"],"Parent: the last selected is the parent"],[["Shift","P"],"Unparent"],[["Ctrl","D"],"Duplicate"],[["Ctrl","A"],"Select all objects"],[["H"],"Hide or show the selection"],[["Ctrl","H"],"Hide the selection"],[["Shift","H"],"Show the selection"],[["↑"],"Pickwalk: the parent (↓ the first child, ← → the neighbors)"],[["Delete"],"Delete"]]],
    ["Camera and view",[[["Alt","Left drag"],"Tumble"],[["Alt","Middle drag"],"Pan"],[["Alt","Right drag"],"Dolly"],[["F"],"Frame the selection"],[["A"],"Frame everything"],[["G"],"Grid on or off"],[["+"],"Bigger manipulator (- smaller)"],[["4"],"Wireframe"],[["5"],"Unshaded"],[["6"],"Shaded"],[["7"],"Lit: lights fixed in the scene"]]],
    ["Animation",[[["S"],"Set a key: Translate, Rotate, Scale"],[["Shift","W"],"Key Translate only (Shift + E Rotate, Shift + R Scale)"],[["Space"],"Play or pause (also Alt + V)"],[["Alt","Shift","V"],"First frame"],[[","],"Previous key"],[["Double-click"],"Graph Editor: type a key's value"],[["Alt","Middle-drag"],"Graph Editor: move around"],[["Scroll"],"Graph Editor: zoom towards the cursor"],[["Alt","Right-drag"],"Graph Editor: zoom"],[["Alt","Shift","Right-drag"],"Graph Editor: squeeze or stretch one axis"],[["Ctrl","C"],"Graph Editor: copy keys (Ctrl+X cuts, Ctrl+V pastes)"],[["W"],"Over the Graph Editor: move keys (R scales them)"],[["Shift","Drag"],"Graph Editor: keep one direction"],[["F"],"Over the Graph Editor: the selected keys"],[["A"],"Over the Graph Editor: show everything"],[["."],"Next key"],[["Alt",","],"Previous frame"],[["Alt","."],"Next frame"],[["Home"],"First frame"],[["End"],"Last frame"],[["Delete"],"In the Graph Editor: the selected keys"]]],
    ["Handbook",[[["Shake"],"While dragging: carry it onto a line"],[["Q / E"],"Next suggestion (or scroll)"],[["Shift","Q / E"],"Bigger or smaller (or Shift + scroll)"],[["Shake"],"A 2D object: back into Inca"],[["Tab"],"Place the selection in the Handbook, like the Place Object button; while dragging: switch between 3D and 2D (instead of shaking)"]]],
    ["General",[[["Ctrl","Z"],"Undo"],[["Ctrl","Shift","Z"],"Redo (also Ctrl + Y)"],[["Ctrl","S"],"Save"],[["?"],"Hotkeys"],[["Esc"],"Close"]]]];
  function keysHTML(){ var cap=function(k){ return /^[A-Z0-9?,.+↑]$|^F\d+$|^(Ctrl|Shift|Alt|Space|Home|End|Delete|Insert|Esc)$/.test(k)?'<kbd>'+k+'</kbd>':'<span class="ck-act">'+k+'</span>'; };
    var shut=[]; try{ shut=JSON.parse(localStorage.getItem("sbh-cube-keyscol")||"[]")||[]; }catch(e){}   /* collapsed sections are remembered (18.10.2026) */
    return '<div class="ck-grid">'+KEYS.map(function(g,gi){ var c=shut.indexOf(g[0])>=0; return '<section class="ck-sec'+(c?' shut':'')+'" data-sec="'+g[0]+'"><button type="button" class="ck-head" aria-expanded="'+(c?"false":"true")+'"><span class="ck-chev" aria-hidden="true"></span><span class="ck-name">'+g[0]+'</span><span class="ck-n">'+g[1].length+'</span></button><div class="ck-rows">'+g[1].map(function(r){ return '<div class="ck-row" data-q="'+(r[0].join(" + ")+" "+r[1]).toLowerCase().replace(/"/g,"")+'"><div class="ck-k">'+r[0].map(cap).join('<i class="ck-plus">+</i>')+'</div><div class="ck-d">'+r[1]+'</div></div>'; }).join("")+'</div></section>'; }).join("")+'</div><p class="ck-none" hidden>No hotkey matches that.</p>'; }
  /* ---- the interface ---- */
  var pops={};
  function q(s){ var r=wrap.querySelector(s); if(r) return r; for(var k in pops){ var p=pops[k]; if(p&&p.host){ r=p.host.querySelector(s); if(r) return r; } } return null; }   /* popped-out windows too */
  function qa(s){ var a=[].slice.call(wrap.querySelectorAll(s)); for(var k in pops){ var p=pops[k]; if(p&&p.host) a=a.concat([].slice.call(p.host.querySelectorAll(s))); } return a; }
  function actEl(){ for(var k in pops){ var p=pops[k]; try{ if(p.win&&!p.win.closed&&p.win.document.hasFocus()) return p.win.document.activeElement; }catch(e){} } return document.activeElement; }
  function paintBar(){ if(!wrap) return; q(".cb-undo").disabled=!undo.length; q(".cb-redo").disabled=!redo.length; q(".cb-save").classList.toggle("dirty",snap()!==savedAt); q(".cb-dup").disabled=!sel(); q(".cb-ext").disabled=S.mode==="object"||!selFaces().length; q(".cb-merge").disabled=q(".cb-mergec").disabled=S.mode==="object"||!Object.keys(csel).length; q(".cb-del").disabled=!sel(); var os2=S.mode==="object"?osel.map(objById).filter(Boolean):[];
    q(".cb-comb").disabled=os2.filter(function(o){ return !o.grp; }).length<2; q(".cb-sepa").disabled=!os2.some(function(o){ return !o.grp; }); q(".cb-cpiv").disabled=!os2.length; q(".cb-grp").disabled=!os2.length; q(".cb-ugrp").disabled=!os2.some(function(o){ return o.grp; }); q(".cb-par").disabled=os2.length<2; q(".cb-upar").disabled=!os2.some(function(o){ return o.par!=null; });
    [].forEach.call(qa(".cb-mode button"),function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-m")===S.mode?"true":"false"); }); }
  function paintOutliner(){ if(!wrap||olEditing) return; var ol=q(".ol-list"), so=sel(); ol.innerHTML="";   /* not while a name is being typed */
    if(!S.objs.length) ol.innerHTML='<li class="ol-empty">Nothing here. Add a shape in the Create bar.</li>';
    function row(o,depth){ var li=document.createElement("li"), ch=kids(o), isOn=S.mode==="object"?osel.indexOf(o.id)>=0:o===so; li.className="ol-it"+(isOn?" on":"")+(o.vis?"":" hid")+(o.grp?" grp":""); li.setAttribute("data-id",o.id); li.style.setProperty("--d",depth);
      li.innerHTML=(ch.length?'<button type="button" class="ol-fold" aria-expanded="'+(o.col?"false":"true")+'" aria-label="'+(o.col?"Show":"Hide")+' what is below '+o.name+'">'+(o.col?"▸":"▾")+'</button>':'<span class="ol-fold-sp"></span>')
        +'<button type="button" class="ol-eye" aria-label="'+(o.vis?"Hide ":"Show ")+o.name+'" aria-pressed="'+(o.vis?"true":"false")+'">'+(o.vis?"●":"○")+'</button><button type="button" class="ol-name" title="Double-click to rename. Middle-drag to parent or move.">'+(o.grp?'<svg class="ol-g" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>':'')+o.name+'</button><span class="ol-k" title="Keys">'+(keyTimes(o).length?keyTimes(o).length+" k":"")+'</span>';
      ol.appendChild(li); if(!o.col) ch.forEach(function(c){ row(c,depth+1); }); }
    S.objs.forEach(function(o){ if(o.par==null||!objById(o.par)) row(o,0); });   /* children under their parent, indented; a folded parent hides them */
    paintBar(); paintTimeline(); }
  /* previous and next key, previous and next frame, and the scene's last frame (Jakob, 18.10.2026), like Maya: , and . for keys, Alt + , and Alt + . for frames */
  function stepKey(d){ var o=sel(), ks=o?keyTimes(o):[]; if(!ks.length){ toast(o?"No keys on "+o.name+".":"Select an object with keys."); return; } play(false);
    var t=d>0?ks.filter(function(k){ return k>S.frame; })[0]:ks.filter(function(k){ return k<S.frame; }).pop(); if(t==null) t=d>0?ks[0]:ks[ks.length-1]; gotoFrame(t); snd(d>0?520:460); }   /* past the last key it wraps to the first, like Maya */
  function stepFrame(d){ play(false); gotoFrame(((S.frame-1+d)%FRAMES+FRAMES)%FRAMES+1); }
  function setEnd(v){ v=Math.round(parseFloat(String(v).replace(",","."))); var te=q(".tl-end"); if(!isFinite(v)){ te.value=FRAMES; return; } v=Math.max(2,Math.min(2000,v)); if(v===FRAMES){ te.value=v; return; }
    mark(); FRAMES=v; S.frames=v; q(".tl-scrub").max=v; if(S.frame>v) gotoFrame(v); gdirty=true; gRange=null; paintTimeline(); snd(560); toast("The scene now has "+v+" frames."); }
  function paintTimeline(){ if(!wrap) return; var so=sel(), tl=q(".tl-track"), ks=so?keyTimes(so):[]; q(".tl-frame").textContent=S.frame; var sc=q(".tl-scrub"); if(+sc.max!==FRAMES) sc.max=FRAMES; sc.value=S.frame; var te=q(".tl-end"); if(te&&actEl()!==te) te.value=FRAMES;
    /* frame ticks with numbers, and the current frame on the playhead, like Maya's time slider (Jakob, 18.10.2026); the labels thin out to fit */
    var tw=(q(".tl-wrap").clientWidth||400), steps=[1,2,5,10,20,25,50,100,200,250,500,1000], st=steps.filter(function(v){ return v/(FRAMES-1)*tw>=34; })[0]||1000, sub=st>=10?st/5:st>=5?st/5:0, tk="";
    for(var fr=1;fr<=FRAMES;fr++){ var major=fr===1||fr%st===0, minor=!major&&sub&&fr%sub===0&&sub/(FRAMES-1)*tw>=5; if(!major&&!minor) continue; var lp=(fr-1)/(FRAMES-1)*100;
      if(major&&fr!==1&&fr!==FRAMES&&(FRAMES-fr)/(FRAMES-1)*tw<34) major=false;   /* no label crowding the last one */
      tk+='<i class="tl-tick'+(major?' mj':'')+'" style="left:'+lp+'%">'+(major?'<span>'+fr+'</span>':'')+'</i>'; }
    if(FRAMES%st!==0) tk+='<i class="tl-tick mj" style="left:100%"><span>'+FRAMES+'</span></i>';
    var hp=(S.frame-1)/(FRAMES-1)*100, sh=hp<4?"0%":hp>96?"-100%":"-50%";
    tl.innerHTML=tk+ks.map(function(k){ return '<i class="tl-key" style="left:'+((k-1)/(FRAMES-1)*100)+'%" title="Key at frame '+k+'"></i>'; }).join("")+'<i class="tl-head" style="left:'+hp+'%"><b class="tl-cur" style="transform:translateX('+sh+')">'+S.frame+'</b></i>'; }
  function paintAll(){ S.objs.forEach(function(o){ if(!o.grp&&o.G&&o.G.length!==o.V.length) bake(o); }); paintOutliner(); paintAttr(); paintMats(); }   /* new corners (extrude, cut) are baked too */
  /* the message line (Jakob, 18.10.2026): it stays while the pointer is over it, otherwise it goes after its time; a moment after the pointer leaves */
  function tipHide(){ var el=wrap&&q(".cube-tip"); if(!el||el.matches(":hover")) return; el.style.opacity="0"; el.classList.remove("on"); }
  function tipShow(t,ms){ var el=wrap&&q(".cube-tip"); if(!el) return; if(t!=null) el.textContent=t; el.style.opacity="1"; el.classList.add("on"); clearTimeout(toast.t); toast.t=setTimeout(tipHide,ms); }
  function tipEvents(){ var el=q(".cube-tip"); if(!el||el._ev) return; el._ev=true; el.addEventListener("pointerenter",function(){ clearTimeout(toast.t); }); el.addEventListener("pointerleave",function(){ clearTimeout(toast.t); toast.t=setTimeout(tipHide,1200); }); }
  function toast(t){ tipShow(t,2600); }
  /* the bottom bar (Jakob, 19.10.2026: a wall of icons): the separators become visible groups, and every button gets a quick tooltip with its group, name, key and what it does */
  /* no sideways scrolling (Jakob, 20.10.2026: "I hate the sideways scrolling"): when a bar is too narrow, what does not fit moves into a "More" menu (the ⋯ button) and comes back when there is room.
     Inca's name, the close button, the Library and the last group of the bottom bar (with Hotkeys) always stay; the tools are the last to move. */
  var FITS=[
    {bar:".cube-head",before:":scope > .cb-close",units:function(b){ return [".ch-space",".ch-more",".cb-paint",".cb-all",".cb-add",".cb-names",".cb-bare",".cb-tut",".ch-wip",".cb-2d",".ch-tools"].map(function(x){ return b.querySelector(":scope > "+x); }).filter(Boolean); }},
    {bar:".cube-bar",before:":scope > .cb-g:last-of-type",units:function(b){ var g=[].slice.call(b.querySelectorAll(":scope > .cb-g")); g.pop(); var u=[]; g.forEach(function(x){ u=u.concat([].slice.call(x.children)); }); return u.reverse(); }},
    {bar:".cube-shelf",before:":scope > .cb-lib",units:function(b){ return [].slice.call(b.querySelectorAll(":scope > .ch-prims > *, :scope > .ch-models > *, :scope > .cb-gen")).reverse(); }}],
    fitT=0;
  function ovfClose(st){ if(st&&st.menu&&!st.menu.hidden){ st.menu.hidden=true; st.btn.setAttribute("aria-expanded","false"); } }
  function ovfOpen(st){ st.menu.hidden=false; st.btn.setAttribute("aria-expanded","true"); var r=st.btn.getBoundingClientRect(), mw=st.menu.offsetWidth;
    st.menu.style.left=Math.max(8,Math.min(innerWidth-mw-8,r.right-mw))+"px";
    if(r.top<innerHeight/2){ st.menu.style.top=(r.bottom+8)+"px"; st.menu.style.bottom="auto"; } else { st.menu.style.top="auto"; st.menu.style.bottom=(innerHeight-r.top+8)+"px"; } }
  function fitOne(f){ var b=q(f.bar); if(!b) return; var st=b._fit||(b._fit={moved:[]});
    ovfClose(st);
    st.moved.forEach(function(m){ if(m.ph.parentNode) m.ph.parentNode.replaceChild(m.el,m.ph); }); st.moved=[];
    if(st.btn&&st.btn.parentNode) st.btn.parentNode.removeChild(st.btn);
    [].slice.call(b.querySelectorAll(".fit-empty")).forEach(function(g){ g.classList.remove("fit-empty"); });
    if(!b.offsetWidth||b.scrollWidth<=b.clientWidth+1) return;
    if(!st.btn){ st.btn=document.createElement("button"); st.btn.type="button"; st.btn.className="cb-ovf"; st.btn.title="More"; st.btn.setAttribute("aria-label","More"); st.btn.setAttribute("aria-expanded","false"); st.btn.textContent="\u22ef";
      st.btn.addEventListener("click",function(e){ e.stopPropagation(); if(st.menu.hidden) ovfOpen(st); else ovfClose(st); });
      st.menu=document.createElement("div"); st.menu.className="cube-ui cb-ovf-menu"; st.menu.hidden=true;
      st.menu.addEventListener("click",function(e){ var t=e.target.closest&&e.target.closest("button"); if(t&&!t.hasAttribute("aria-haspopup")&&!t.closest(".ch-more")) setTimeout(function(){ ovfClose(st); },0); }); }
    var bf=b.querySelector(f.before); if(bf) bf.parentNode.insertBefore(st.btn,bf); else b.appendChild(st.btn);
    var us=f.units(b).filter(function(u){ return u.offsetWidth>0; });
    for(var i=0;i<us.length&&b.scrollWidth>b.clientWidth+1;i++){ var u=us[i], ph=document.createComment("more"); u.parentNode.replaceChild(ph,u); st.moved.push({el:u,ph:ph}); }
    for(var j=st.moved.length-2;j>=0;j--){ var m=st.moved[j]; m.ph.parentNode.replaceChild(m.el,m.ph); if(b.scrollWidth>b.clientWidth+1) m.el.parentNode.replaceChild(m.ph,m.el); else st.moved.splice(j,1); }   /* what fits again comes back, the more important first (a big item moved last can leave room for smaller ones) */
    [].slice.call(b.querySelectorAll(".cb-g,.ch-prims,.ch-models")).forEach(function(g){ if(!g.children.length) g.classList.add("fit-empty"); });
    st.moved.slice().sort(function(a,c){ return a.ph.compareDocumentPosition(c.ph)&4?-1:1; }).forEach(function(m){ st.menu.appendChild(m.el); });
    if(st.menu.parentNode!==wrap) wrap.appendChild(st.menu); }
  function fitBars(){ if(!wrap||!wrap.isConnected) return; FITS.forEach(function(f){ fitOne(f); var b=q(f.bar); if(b&&!b._fitMo){ b._fitMo=new MutationObserver(function(){ clearTimeout(fitT); fitT=setTimeout(fitBars,80); }); b._fitMo.observe(b,{subtree:true,attributes:true,attributeFilter:["hidden"]}); } }); }
  function ovfAll(){ var r=[]; FITS.forEach(function(f){ var b=wrap&&q(f.bar); if(b&&b._fit&&b._fit.menu&&!b._fit.menu.hidden) r.push(b._fit); }); return r; }
  addEventListener("resize",function(){ clearTimeout(fitT); fitT=setTimeout(fitBars,120); });
  document.addEventListener("pointerdown",function(e){ ovfAll().forEach(function(st){ if(!st.menu.contains(e.target)&&!st.btn.contains(e.target)) ovfClose(st); }); },true);
  addEventListener("keydown",function(e){ if(e.key!=="Escape") return; var o=ovfAll(); if(o.length){ o.forEach(ovfClose); e.stopImmediatePropagation(); e.preventDefault(); } },true);
  E.cubeFit=fitBars;
  var BAR_G=["View","History","Modeling","Combine","Hierarchy","Scene","Help"];
  function barTidy(){ var bar=q(".cube-bar"); if(!bar||bar._tidy) return; bar._tidy=true; var grp=null, gi=0;
    [].slice.call(bar.children).forEach(function(ch){ if(ch.classList.contains("cb-sep")){ ch.remove(); grp=null; return; }
      if(!grp){ grp=document.createElement("span"); grp.className="cb-g"; grp.setAttribute("role","group"); grp.setAttribute("aria-label",BAR_G[gi]||""); grp.dataset.g=BAR_G[gi]||""; gi++; bar.insertBefore(grp,ch); } grp.appendChild(ch); });
    var tp=document.createElement("div"); tp.className="cube-btip"; tp.setAttribute("role","tooltip"); tp.hidden=true; wrap.appendChild(tp); var tT=0, cur=null;
    function parse(t){ var key="", m=t.match(/\s*\(([^()]{1,16})\)(?=[^()]*$)/); if(m&&/^(Ctrl|Shift|Alt|Delete|Esc|Space|F\d+|[A-Z0-9?\[\]])(\+[^)]*)?$/.test(m[1])){ key=m[1]; t=t.replace(m[0],""); }
      var lab=t, desc="", c=t.search(/: |; /); if(c>0){ var rest=t.slice(c+2); if(rest.length<=4){ lab=t; } else { lab=t.slice(0,c); desc=rest; } } return {lab:lab,desc:desc,key:key}; }
    function esc(x){ return String(x).replace(/[&<>]/g,function(ch){ return {"&":"&amp;","<":"&lt;",">":"&gt;"}[ch]; }); }
    function show(b){ var t=b.getAttribute("title")||b.dataset.tt||""; if(!t) return; b.dataset.tt=t; b.removeAttribute("title"); var d=parse(t), g=b.closest(".cb-g");
      tp.innerHTML=(g&&g.dataset.g?'<small>'+esc(g.dataset.g)+'</small>':'')+'<span class="bt-l"><b>'+esc(d.lab)+'</b>'+(d.key?d.key.split("+").map(function(k){ return '<kbd>'+esc(k)+'</kbd>'; }).join('<i>+</i>'):'')+'</span>'+(d.desc?'<span class="bt-d">'+esc(d.desc)+'</span>':'');
      tp.hidden=false; var r=b.getBoundingClientRect(), w=tp.offsetWidth; tp.style.left=Math.round(Math.max(8,Math.min(innerWidth-w-8,r.left+r.width/2-w/2)))+"px"; tp.style.top=Math.round(r.top-tp.offsetHeight-10)+"px"; tp.classList.add("in"); cur=b; }
    function hide(){ clearTimeout(tT); tp.classList.remove("in"); tp.hidden=true; if(cur&&!cur.getAttribute("title")&&cur.dataset.tt) cur.setAttribute("title",cur.dataset.tt); cur=null; }
    bar.addEventListener("pointerover",function(e){ var b=e.target.closest("button"); if(!b||b===cur||e.pointerType==="touch") return; hide(); var t=b.getAttribute("title"); if(t){ b.dataset.tt=t; b.removeAttribute("title"); } tT=setTimeout(function(){ show(b); },tp.dataset.warm?60:350); });
    bar.addEventListener("pointerout",function(e){ var b=e.target.closest("button"); if(b&&!b.contains(e.relatedTarget)){ hide(); tp.dataset.warm="1"; clearTimeout(tp._cool); tp._cool=setTimeout(function(){ delete tp.dataset.warm; },600); } });
    bar.addEventListener("pointerdown",hide); bar.addEventListener("focusin",function(e){ var b=e.target.closest("button"); if(b&&b.matches(":focus-visible")){ hide(); show(b); } }); bar.addEventListener("focusout",hide); }
  var hinted=false; function hint(){ if(hinted) return; hinted=true; var t=wrap&&q(".cube-tip"); if(t&&t.classList.contains("on")){ clearTimeout(toast.t); toast.t=setTimeout(tipHide,2500); } }
  function placeLeft(){ var col=q(".cube-left"); col.style.left=""; col.style.width="";
    if(innerWidth<900) return; var rail=document.querySelector(".rail"), sec=document.querySelector("main section"), edge=1e9;
    [rail,sec].forEach(function(el){ if(el&&el.offsetParent!==null){ var r=el.getBoundingClientRect(); if(r.width) edge=Math.min(edge,r.left); } }); if(edge>=1e9) return;
    var room=edge-12-8, w=Math.min(253,Math.floor(room)); if(w<170) return;   /* not enough room: the column stays in the corner */
    col.style.width=w+"px"; col.style.left=Math.round(edge-12-w)+"px"; }   /* 12 px left of the sidebar or the cards */
  /* the "Work in Progress" note: a hover card like the logo's (Jakob, 18.10.2026); a click pins it */
  var wipPinned=false, wipTm=null;
  function wipPanel(v){ var pop=q(".cube-wipbox"), br=q(".ch-wip"); if(!pop||!br) return; clearTimeout(wipTm); var on=v==null?pop.hidden:v; pop.hidden=!on; br.setAttribute("aria-expanded",on?"true":"false"); if(!on){ wipPinned=false; return; }
    var r=br.getBoundingClientRect(); pop.style.setProperty("left",Math.round(Math.max(8,Math.min(innerWidth-pop.offsetWidth-8,r.left)))+"px","important"); var ph=pop.offsetHeight; pop.style.setProperty("top",Math.round(r.bottom+8+ph<=innerHeight-8?r.bottom+8:Math.max(8,r.top-8-ph))+"px","important"); }
  function wipEvents(){ var br=q(".ch-wip"), pop=q(".cube-wipbox"); wrap.appendChild(pop); if(window.sbhMailCopy) window.sbhMailCopy(pop);
    var later=function(){ clearTimeout(wipTm); wipTm=setTimeout(function(){ if(!wipPinned) wipPanel(false); },180); };
    br.addEventListener("pointerenter",function(){ wipPanel(true); }); br.addEventListener("pointerleave",later); pop.addEventListener("pointerenter",function(){ clearTimeout(wipTm); }); pop.addEventListener("pointerleave",later);
    br.addEventListener("focus",function(){ wipPanel(true); }); br.addEventListener("blur",function(){ if(!wipPinned) later(); });
    br.addEventListener("click",function(){ var pin=!wipPinned||pop.hidden; wipPanel(pin); wipPinned=pin; if(pin) snd(560); });
    wrap.addEventListener("pointerdown",function(e){ if(!pop.hidden&&!e.target.closest(".cube-wipbox,.ch-wip")) wipPanel(false); },true); }
  /* minimize (Jakob, 17.10.2026): the windows fold up to their title bar; remembered in sbh-cube-min */
  var minState={}; try{ minState=JSON.parse(localStorage.getItem("sbh-cube-min")||"null"); }catch(e){ minState=null; }
  if(!minState) minState=innerHeight<860?{gal:true,mats:true}:{};   /* short screens, first visit: Gallery and Materials start folded, so Outliner, Channel Box and Silhouette (Place Object) have room (Jakob, 19.10.2026) */
  function minSet(pn,v){ var k=pn.getAttribute("data-pn"), bt=pn._minBtn||pn.querySelector(".pn-min"), nm=k==="nav"?"view cube":k==="tl"?"Timeline":pn.getAttribute("aria-label"); pn.classList.toggle("min",v); minState[k]=v; try{ localStorage.setItem("sbh-cube-min",JSON.stringify(minState)); }catch(e){}
    bt.textContent=v?"+":"\u2013"; bt.setAttribute("aria-expanded",v?"false":"true"); bt.setAttribute("aria-label",(v?"Expand ":"Minimize ")+nm); bt.title=v?"Expand":"Minimize"; if(k==="ge"&&!v&&geOpen) setGraph(true); placeAll(); }
  function minButtons(){ [[".cube-ol","ol"],[".cube-attr","attr"],[".cube-gal","gal"],[".cube-ge","ge"],[".cube-mats","mats"],[".cube-silw","sil"],[".cube-tl","tl"],[".cube-nav","nav"]].forEach(function(d){ var pn=q(d[0]); if(!pn) return; pn.setAttribute("data-pn",d[1]);   /* Materials, Silhouette, Timeline and the view cube too (18.10.2026) */
      var bt=document.createElement("button"); bt.type="button"; bt.className="pn-min"; var host=d[1]==="ge"?pn.querySelector(".ge-top"):pn;
      if(d[1]==="ge") host.insertBefore(bt,host.querySelector(".ge-x")); else if(d[1]==="tl") pn.querySelector(".tl-row2").appendChild(bt); else if(d[1]==="nav"){ bt.classList.add("nav-min"); pn.parentNode.insertBefore(bt,pn.nextSibling); pn._minBtn=bt; } else pn.insertBefore(bt,pn.firstChild);
      bt.addEventListener("click",function(){ minSet(pn,!pn.classList.contains("min")); snd(pn.classList.contains("min")?420:560); }); minSet(pn,!!minState[d[1]]); }); }
  /* the hotkeys window (Jakob, 18.10.2026): sections fold, a search shows only what matches */
  function keySec(sec,shut){ sec.classList.toggle("shut",shut); sec.querySelector(".ck-head").setAttribute("aria-expanded",shut?"false":"true"); }
  function keysSave(){ var kp=q(".cube-keys"), shut=[].filter.call(kp.querySelectorAll(".ck-sec"),function(x){ return x.classList.contains("shut"); }).map(function(x){ return x.getAttribute("data-sec"); }); try{ localStorage.setItem("sbh-cube-keyscol",JSON.stringify(shut)); }catch(e){} var all=kp.querySelector(".ck-all"); if(all) all.textContent=shut.length===KEYS.length?"Expand all":"Collapse all"; }
  function keysFilter(v){ var kp=q(".cube-keys"); v=String(v||"").trim().toLowerCase().replace(/\s*\+\s*/g," + "); kp.classList.toggle("searching",!!v); var hits=0;
    [].forEach.call(kp.querySelectorAll(".ck-sec"),function(sec){ var n=0; [].forEach.call(sec.querySelectorAll(".ck-row"),function(r){ var ok=!v||r.getAttribute("data-q").indexOf(v)>=0; r.hidden=!ok; if(ok) n++; }); sec.hidden=!n; hits+=n; });
    kp.querySelector(".ck-none").hidden=!!hits; }
  function keysEvents(){ var kp=q(".cube-keys"); if(!kp||kp._ev) return; kp._ev=true; keysSave();
    kp.addEventListener("click",function(e){ var h=e.target.closest(".ck-head"); if(h){ keySec(h.parentNode,!h.parentNode.classList.contains("shut")); keysSave(); return; }
      if(e.target.closest(".ck-all")){ var open=[].some.call(kp.querySelectorAll(".ck-sec"),function(x){ return !x.classList.contains("shut"); }); [].forEach.call(kp.querySelectorAll(".ck-sec"),function(x){ keySec(x,open); }); keysSave(); } });
    var cq=kp.querySelector(".ck-q"); cq.addEventListener("input",function(){ keysFilter(this.value); });
    cq.addEventListener("keydown",function(e){ if(e.key!=="Escape") return; e.preventDefault(); e.stopPropagation(); if(cq.value){ cq.value=""; keysFilter(""); } else { cq.blur(); keysPanel(false); } });   /* Esc: first the search, then the window */ }
  function keysPanel(v){ var pnl=q(".cube-keys"), on=v==null?pnl.hidden:v; pnl.hidden=!on; q(".cb-keys").setAttribute("aria-expanded",on?"true":"false"); q(".cb-keys").setAttribute("aria-pressed",on?"true":"false"); snd(on?560:420); }
  /* the view cube, Inputs and Gallery beside the page frame, like the Outliner on the other side (Jakob, 18.10.2026); too narrow: the corner */
  function placeRight(){ var col=q(".cube-right"); if(!col||!nav) return; col.style.top=""; col.style.right=""; col.style.left=""; col.style.width=""; var nr=nav.getBoundingClientRect(), sec=document.querySelector("main section"), r=sec&&sec.getBoundingClientRect();
    if(nav._minBtn){ nav._minBtn.style.top=Math.round(nr.top+4)+"px"; nav._minBtn.style.left=Math.round(nr.right-30)+"px"; }   /* the view cube's minimize button sits on its top right corner */
    var room=r&&r.width?innerWidth-r.right-12-12:0;
    if(room>=170&&!nav.classList.contains("corner")){ var w=Math.min(253,Math.floor(room)); col.style.left=Math.round(r.right+12)+"px"; col.style.right="auto"; col.style.width=w+"px"; col.style.top=Math.round(nr.bottom+10)+"px"; return; }
    if(!nav.classList.contains("corner")&&nr.width){ col.style.top=Math.round(nr.bottom+10)+"px"; col.style.right=Math.max(12,Math.round(innerWidth-nr.right))+"px"; } }   /* the view cube first, then Inputs, then the Gallery */
  function placeShelf(){ var hd=q(".cube-head"), sh=q(".cube-shelf"), md=q(".cube-modes"); if(!hd||!sh) return; var hb=hd.getBoundingClientRect().bottom, top=Math.round(hb+8); sh.style.top=top+"px";
    if(wrap.classList.contains("compact")){ sh.style.margin="0"; sh.style.left="8px"; sh.style.right="8px"; if(md){ md.style.left="8px"; md.style.right="8px"; md.style.top=Math.round(top+sh.offsetHeight+6)+"px"; } wrap.style.setProperty("--below",Math.round((md||sh).getBoundingClientRect().bottom+10)+"px"); return; }   /* compact: one full-width row each, scrolling sideways */
    sh.style.right=""; if(md) md.style.right="";
    if(md){ var ws=sh.offsetWidth, wm=md.offsetWidth, hs=sh.offsetHeight, gap=10;   /* Create and Mode side by side between the side columns, or Mode under Create (18.10.2026) */
      var free=function(y0,y1){ var L=12, R=innerWidth-12; [".cube-left",".cube-right",".cube-nav"].forEach(function(sel){ var el=q(sel); if(!el||!el.offsetWidth) return; var r=el.getBoundingClientRect(); if(r.bottom<=y0||r.top>=y1) return; if(r.left+r.width/2<innerWidth/2) L=Math.max(L,r.right+10); else R=Math.min(R,r.left-10); }); return [L,R]; };
      var row=free(top,top+hs), total=ws+gap+wm;
      if(total<=row[1]-row[0]){ var x0=Math.round(Math.max(row[0],Math.min(row[1]-total,(innerWidth-total)/2))); sh.style.margin="0"; sh.style.left=x0+"px"; sh.style.right="auto"; md.style.left=(x0+ws+gap)+"px"; md.style.top=top+"px"; }
      else { var t2=top+hs+8, row2=free(t2,t2+md.offsetHeight), xs=Math.round(Math.max(row[0],Math.min(row[1]-ws,(innerWidth-ws)/2))), xm=Math.round(Math.max(row2[0],Math.min(row2[1]-wm,(innerWidth-wm)/2)));
        sh.style.margin="0"; sh.style.left=xs+"px"; sh.style.right="auto"; md.style.left=xm+"px"; md.style.top=t2+"px"; } }
    var lowest=Math.max(sh.getBoundingClientRect().bottom,md?md.getBoundingClientRect().bottom:0); wrap.style.setProperty("--below",Math.round(lowest+10)+"px");
    root.classList.add("egg-app-open"); root.style.setProperty("--egg-top",Math.round(lowest+10)+"px"); }   /* an egg pop-up appears below Inca's top windows (18.10.2026) */
  function placeAll(){ if(!wrap) return; var cpt=innerWidth<900; wrap.classList.toggle("compact",cpt); if(!cpt) wrap.classList.remove("sheet-l","sheet-r"); placeShelf(); placeLeft(); inkCol=inkRGB(); var sec=document.querySelector("main section"), bar=q(".cube-bar"), tip=q(".cube-tip"), tlp=q(".cube-tl"); var gep=q(".cube-ge"); if(bar&&tlp){ var tlFree=wmIsFree(tlp), top=bar; if(!tlFree){ tlp.style.bottom=Math.round(innerHeight-bar.getBoundingClientRect().top+8)+"px"; top=tlp; }   /* free or popped-out windows are left where they are */
      var geDock=!!(gep&&!gep.hidden&&!wmIsFree(gep)); wrap.classList.toggle("ge-docked",geDock&&!tlFree); if(geDock){ gep.style.bottom=Math.round(innerHeight-top.getBoundingClientRect().top+(tlFree?8:0))+"px"; top=gep; }   /* the Graph Editor sits right on the timeline, as one panel */ if(tip) tip.style.bottom=Math.round(innerHeight-top.getBoundingClientRect().top+8)+"px"; }
    if(nav){ nav.classList.remove("corner"); nav.style.right=""; nav.style.width=nav.style.height=""; nav.style.left=nav.style.bottom=nav.style.top="";
      if(sec){ var r=sec.getBoundingClientRect(); nav.style.right="0px"; var edge=nav.getBoundingClientRect().right, room=edge-r.right-12-8, sz=Math.min(104,Math.floor(room));
        if(sz>=56){ nav.style.width=nav.style.height=sz+"px"; nav.style.right=Math.round(edge-r.right-12-sz)+"px"; } else { nav.style.right=""; nav.classList.add("corner"); var br=bar.getBoundingClientRect(), ns=nav.offsetWidth; nav.style.left=Math.round(Math.max(12,br.right-ns))+"px"; nav.style.bottom=Math.round(innerHeight-br.top+12)+"px"; } } }
    if(sec&&!nav.classList.contains("corner")){ var r2=sec.getBoundingClientRect(), room2=innerWidth-r2.right-12-12; if(room2>=170){ var ns=Math.min(104,Math.floor(room2)); nav.style.width=nav.style.height=ns+"px"; nav.style.right="auto"; nav.style.left=Math.round(r2.right+12)+"px"; } }   /* lined up with the column under it */
    placeRight(); if(cpt) placeCompact(); else fitColumns(); }
  /* the side columns end above the Timeline when they would run into it (tablets in landscape) */
  function fitColumns(){ var tlp=q(".cube-tl"); [".cube-left",".cube-right"].forEach(function(sel){ var col=q(sel); if(!col) return; col.style.maxHeight=""; if(!tlp||wmIsFree(tlp)) return; var tl=tlp.getBoundingClientRect(), cr=col.getBoundingClientRect(); if(cr.right>tl.left+4&&cr.left<tl.right-4&&cr.bottom>tl.top-8) col.style.maxHeight=Math.max(140,Math.round(tl.top-8-cr.top))+"px"; }); }
  /* phones and tablets in portrait (Jakob, 18.10.2026): Create and Mode as full-width rows, the side windows as two sheets that open when needed, a small view cube */
  function placeCompact(){ var md=q(".cube-modes"), sb=q(".cube-sheetbar"), tlp=q(".cube-tl"), bar=q(".cube-bar"); var y=Math.round((md||q(".cube-shelf")).getBoundingClientRect().bottom+8);
    if(sb){ sb.style.top=y+"px"; }
    if(nav){ nav.classList.remove("corner"); nav.style.left="auto"; nav.style.right="8px"; nav.style.top=(y+(sb?sb.offsetHeight+8:0))+"px"; nav.style.bottom="auto"; nav.style.width=nav.style.height="56px"; if(nav._minBtn){ var nr=nav.getBoundingClientRect(); nav._minBtn.style.top=Math.round(nr.top+2)+"px"; nav._minBtn.style.left=Math.round(nr.right-28)+"px"; } }
    var top=y+(sb?sb.offsetHeight:0)+8, bot=tlp&&!wmIsFree(tlp)?tlp.getBoundingClientRect().top-8:(bar?bar.getBoundingClientRect().top-8:innerHeight-8);
    wrap.style.setProperty("--sheet-top",top+"px"); wrap.style.setProperty("--sheet-bot",Math.round(innerHeight-bot)+"px"); }
  function sheet(which){ var toSil=which==="p"; if(toSil) which="l"; var on=toSil||!wrap.classList.contains("sheet-"+which);   /* "Place Object" opens the left sheet at the Silhouette window (Jakob, 19.10.2026) */
    if(toSil) setTimeout(function(){ var sw=q(".cube-silw"); if(sw) sw.scrollIntoView({block:"end"}); },40); wrap.classList.remove("sheet-l","sheet-r"); if(on) wrap.classList.add("sheet-"+which); [].forEach.call(qa(".cube-sheetbar button"),function(b){ b.setAttribute("aria-pressed",wrap.classList.contains("sheet-"+b.getAttribute("data-sh"))?"true":"false"); }); placeAll(); }
  var UIKEYS={q:1,w:1,e:1,r:1,g:1,"4":1,"5":1,"6":1,"7":1,F8:1,F9:1,F10:1,F11:1,"+":1,"=":1,"-":1};
  function key(e){ if(!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey&&UIKEYS[e.key]&&!(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))) sndUI=Date.now()+60;   /* these keys change the interface: they may click */ if(E.props&&E.props.dragging&&E.props.dragging()) return;   /* a 2D object is being dragged: Q / E change it */
    if(e.key==="Tab"&&wrap&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(carry||(S.mode==="object"&&((gzDrag&&tool==="move"&&!gzDrag.ex)||drag)))){ e.preventDefault(); e.stopPropagation();   /* Tab while dragging: to 2D and back, instead of shaking (Jakob, 18.10.2026) */
      if(carry&&carry.click){ cancelCarry(); return; }   /* after Place (or Tab): Tab again puts it away, like Esc */
      var pe=carry?carry.lastE:(ptr?{clientX:ptr[0],clientY:ptr[1]}:null); if(pe){ if(carry) uncarry(pe); else startCarry(pe); } return; }
    if(e.key==="Tab"&&wrap&&!carry&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&!e.shiftKey){ var ae=document.activeElement; if(!ae||ae===document.body||!(ae.closest&&ae.closest("button,input,select,textarea,a,[tabindex]"))){ e.preventDefault(); e.stopPropagation(); placeSel(); return; } }   /* Tab: the same as Place, unless the keyboard focus is on a button or field (Jakob, 18.10.2026) */
    if(carry&&carry.click&&e.key==="Escape"){ e.preventDefault(); e.stopPropagation(); cancelCarry(); return; }
    if(wrap&&!q(".cube-tutbox").hidden&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){ e.preventDefault(); e.stopPropagation(); if(q(".cube-tutbox").classList.contains("intro")){ if(e.key==="ArrowRight"){ tutGo(0); snd(600); } } else if(e.key==="ArrowLeft") tutBack(); else tutGo(tutI+1); return; }   /* arrows page through the tutorial */ if(!wrap) return; var t=e.target, typing=t&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)&&t.type!=="range"; if(typing) return; var k=(e.key||"").toLowerCase(), mod=e.ctrlKey||e.metaKey, hit=true;
    if(geOpen&&mod&&!e.shiftKey&&(k==="c"||k==="x"||k==="v")&&(geOver||gsel.length)){ geClip(k); e.preventDefault(); e.stopImmediatePropagation(); return; }   /* Graph Editor: copy, cut, paste keys */
    if(geOpen&&geOver&&!mod&&!e.altKey&&!e.shiftKey&&(k==="w"||k==="r"||k==="f"||k==="a")){ if(k==="a"){ gView=null; gdirty=true; toast("Graph Editor: everything in view."); } else if(k==="f"){ geFrameSel(); toast(gsel.length?"Graph Editor: the selected keys in view.":"Graph Editor: everything in view."); } else setGeTool(k==="w"?"move":"scale"); e.preventDefault(); e.stopImmediatePropagation(); return; }
    if(mod&&k==="z"&&!e.shiftKey) doUndo(); else if(mod&&(k==="y"||(k==="z"&&e.shiftKey))) doRedo(); else if(mod&&k==="s") doSave(); else if(mod&&k==="d") duplicate(); else if(mod&&k==="e") extrudeSel(); else if(mod&&k==="g"){ if(e.shiftKey) ungroupSel(); else groupSel(); } else if(mod&&k==="a"){ selectAll(); } else if(!mod&&!e.altKey&&k==="p"){ if(e.shiftKey) unparentSel(); else parentSel(); }
    else if(carry&&!mod&&k==="d"){ e.preventDefault(); dupCarry(); }
    else if(carry&&!mod&&k==="r"){ if(carry.idx!==0){ carry.idx=0; drawGhost(); moveCarry(carry.lastE); snd(520); } }   /* R: back to the first suggestion */
    else if(carry&&!mod&&(k==="q"||k==="e")){ if(e.shiftKey) scaleCarry(k==="e"?1:-1); else cycleCarry(k==="e"?1:-1); } else if(!mod&&!e.altKey&&k==="f") frame(); else if(!mod&&!e.altKey&&k==="a") frame(true); else if(!mod&&!e.altKey&&!e.shiftKey&&k==="g"){ setGrid(!showGrid); snd(showGrid?600:420); toast(showGrid?"Grid on.":"Grid off."); }
    else if(mod&&!e.altKey&&k==="h") setVisSel(false); else if(!mod&&!e.altKey&&e.shiftKey&&k==="h") setVisSel(true); else if(!mod&&!e.altKey&&k==="h") toggleVis();
    else if(!mod&&!e.altKey&&e.shiftKey&&(k==="w"||k==="e"||k==="r")) setKeyCh(k);
    else if(!mod&&(e.key==="+"||e.key==="="||e.code==="NumpadAdd")) sizeGizmo(1); else if(!mod&&(e.key==="-"||e.code==="NumpadSubtract")) sizeGizmo(-1);
    else if(!mod&&!e.altKey&&/^Arrow(Up|Down|Left|Right)$/.test(e.key)&&S.mode==="object"&&sel()){ pickwalk(e.key.slice(5).toLowerCase()); }
    else if(e.altKey&&!mod&&e.code==="KeyV"){ if(e.shiftKey){ play(false); gotoFrame(1); } else play(!playing,playing?playDir:1); } else if(!mod&&!e.altKey&&(k==="q"||k==="w"||k==="e"||k==="r")) setTool({q:"select",w:"move",e:"rotate",r:"scale"}[k]);
    else if(!mod&&!e.altKey&&/^F(8|9|10|11)$/.test(e.key)) setMode({F8:"object",F9:"vert",F10:"edge",F11:"face"}[e.key]); else if(!mod&&!e.altKey&&k==="s") setKey(); else if(!mod&&!e.altKey&&k===" ") play(!playing,playing?playDir:1); else if(!mod&&(e.code==="Comma"||e.code==="Period")){ var fw=e.code==="Period"; if(e.altKey) stepFrame(fw?1:-1); else stepKey(fw?1:-1); }   /* by key position, so Alt + , also works where Alt changes the character */ else if(!mod&&!e.altKey&&e.key==="Home"){ play(false); gotoFrame(1); } else if(!mod&&!e.altKey&&e.key==="End"){ play(false); gotoFrame(FRAMES); }
    else if(!mod&&!e.altKey&&(e.key==="Delete"||e.key==="Backspace")){ if(geOpen&&gsel.length) delKeys(); else if(anySel()||sel()) removeSel(); else close(); } else if(e.key==="?"&&!mod){ keysPanel(); } else if(e.key==="Insert"){ pivLock=!pivLock; pivMode=pivLock; toast(pivLock?"Pivot: drag the manipulator to move the pivot only. Insert again to finish.":"Pivot set."); } else if(tool==="cut"&&e.key==="Enter"){ cutFinish(); } else if(tool==="cut"&&e.key==="Escape"&&cutPts.length){ cutPts=[]; toast("Cut points dropped."); } else if(!mod&&!e.altKey&&(e.key==="4"||e.key==="5"||e.key==="6"||e.key==="7")){ setShade(e.key==="4"?"wire":e.key==="5"?"flat":e.key==="7"?"lit":"shade"); } else if(e.key==="Escape"){ if(q(".ch-menu")&&!q(".ch-menu").hidden){ q(".ch-menu").hidden=true; q(".cb-more").setAttribute("aria-expanded","false"); q(".cb-more").focus(); } else if(q(".cube-lib")&&!q(".cube-lib").hidden) libPanel(false); else if(q(".cube-gen")&&!q(".cube-gen").hidden) genPanel(false); else if(wrap._about&&wrap._about()){} else if(!q(".cube-io").hidden) ioMenu(false); else if(wrap._geTips&&!q(".ge-tips").hidden) wrap._geTips(false); else if(menu) closeMenu(false); else if(q(".cube-tutask")){ q(".cube-tutask").remove(); snd(420); } else if(!q(".cube-tutbox").hidden) tutClose(); else if(!q(".cube-wipbox").hidden) wipPanel(false); else if(!q(".cube-keys").hidden){ var cq=q(".ck-q"); if(cq&&cq.value&&document.activeElement===cq){ cq.value=""; keysFilter(""); } else keysPanel(false); } else close(); }   /* Esc clears the search first */ else hit=false;
    if(hit){ e.preventDefault(); e.stopImmediatePropagation(); } }
  function loop(t){ if(!wrap) return; autoTick(t); liveAttr(); var dt=lastT?Math.min(.05,(t-lastT)/1000):0; lastT=t;
    if(pending&&tool==="cut"&&!camDrag&&!menu){ cutHover=cutPick(pending[0],pending[1],ctrlDown); pending=null; hover=null; hot(cutHover?"cut":false); }
    if(pending&&!drag&&!camDrag&&!menu&&!gzDrag&&!box){ gzHover=gizmoHit(gizmo(),pending[0]*R,pending[1]*R); var h=gzHover?null:pick(pending[0],pending[1]); pending=null; hover=h; hot(gzHover?"gz":h?(S.mode==="object"?"obj":h.t):false); }
    if(playing){ var nf=Math.floor((t-playT0)/1000*FPS), fr=((playF0-1+playDir*nf)%FRAMES+FRAMES)%FRAMES+1; if(fr!==S.frame) gotoFrame(fr); }   /* loops in both directions */
    if(snapA){ var u=Math.min(1,(t-snapA.t0)/(still?1:380)), e2=1-Math.pow(1-u,3); if(snapA.d1!=null){ ry=snapA.y0+(snapA.y1-snapA.y0)*e2; rx=snapA.x0+(snapA.x1-snapA.x0)*e2; } else orbit(function(){ ry=snapA.y0+(snapA.y1-snapA.y0)*e2; rx=snapA.x0+(snapA.x1-snapA.x0)*e2; });
      if(snapA.d1!=null){ D=snapA.d0+(snapA.d1-snapA.d0)*e2; pan=[0,1,2].map(function(i){ return snapA.p0[i]+(snapA.p1[i]-snapA.p0[i])*e2; }); } if(u>=1) snapA=null; }
    else if(turn&&!still&&!drag&&!hover&&!navDrag&&!camDrag&&!gzDrag&&!box&&!gzHover) orbit(function(){ ry+=dt*.35; });
    render(); drawNav(); if(geOpen){ var o2=sel(); if(gcache&&o2&&gcache.id!==o2.id){ gsel=[]; gdirty=true; gRange=null; paintTan(); } drawGraph(); } raf=requestAnimationFrame(loop); }
  function close(){ if(!wrap) return; document.removeEventListener("pointerdown",libOut,true); if(E.props&&E.props.intro===camIntro) E.props.intro=null; cam0=null; Object.keys(pops).forEach(function(k){ popBack(k,true); }); if(autoSave&&S&&snap()!==savedAt) doSave(true); if(carry){ carry.g.remove(); carry.ln.remove(); carry.objs.forEach(function(ob){ ob.vis=true; }); carry=null; } cancelAnimationFrame(raf); play(false); var w=wrap; wrap=null; hot(false); root.classList.remove("egg-cube-alt","egg-cube-drag","egg-cube-paint","egg-app-open","inca-bare","inca-nonames","inca-mute"); bare=false; root.style.removeProperty("--egg-top"); listen(false); w.classList.remove("in"); clearTimeout(toast.t); snd(220);
    setTimeout(function(){ freeGL(); w.remove(); },400); }
  /* closing gives the graphics memory back right away: the full-screen WebGL context (at double resolution, plus the picking buffer of the same size)
     used to wait for the garbage collector, and after a few opens the whole page got slow (Jakob, 17.10.2026) */
  function freeGL(){ try{ if(gl){ if(fb){ gl.deleteFramebuffer(fb.f); gl.deleteTexture(fb.t); gl.deleteRenderbuffer(fb.d); } if(buf) gl.deleteBuffer(buf); if(prog) gl.deleteProgram(prog);
        var lc=gl.getExtension("WEBGL_lose_context"); if(lc) lc.loseContext(); } }catch(e){}
    [cv,ov,nav,ge].forEach(function(c){ if(c){ c.width=c.height=0; } }); gl=null; g2=null; ng=null; gg=null; fb=null; buf=null; prog=null; cv=ov=nav=ge=null; gcache=null; }
  function selLater(){ setTimeout(selCommit,0); }
  function listen(on){ var m=on?"addEventListener":"removeEventListener"; window[m]("pointerup",selLater,true); window[m]("keyup",selLater,true); window[m]("click",selLater,true);
    window[m]("pointermove",onMove,true); window[m]("pointerdown",onDown,true); window[m]("pointerup",onUp,true); window[m]("pointercancel",onUp,true); window[m]("click",onClick,true);
    window[m]("contextmenu",onCtx,true); window[m]("mousedown",onMouse,true); window[m]("auxclick",onClick,true); window[m]("keydown",altKeys,true); window[m]("keyup",altKeys,true); window[m]("blur",altKeys);
    window[m]("dblclick",onDbl,true); window[m]("wheel",onWheel,{capture:true,passive:false}); window[m]("touchstart",onTouch,{capture:true,passive:false}); window[m]("touchmove",onTouchMove,{capture:true,passive:false}); window[m]("touchend",onTouchEnd,true); window[m]("touchcancel",onTouchEnd,true); window[m]("keydown",key,true); window[m]("resize",size); window[m]("resize",geResize); }
  function geResize(){ if(geOpen) setGraph(true); }   /* a named listener, so closing removes it again (an anonymous one stayed behind on every open, with the whole scene in memory) */
  function open(opt){ if(wrap||E.muted()) return; var noEgg=opt&&opt.noEgg; var j=saved(); if(j) load(j); else S=fresh(); S.mode="object";   /* Inca always starts in Object Mode (Jakob, 17.10.2026) */ savedAt=snap(); undo=[]; redo=[]; ry=.6; rx=.42; D=18; pan=[0,0,0]; hover=null; drag=null; camDrag=null; menu=null; hinted=false; lastT=0; playing=false; still=E.calm();
    wrap=document.createElement("div"); wrap.className="egg-cube";
    var prims=Object.keys(PRIM).map(function(k){ return '<button type="button" data-p="'+k+'" title="Add a '+PRIM_NAMES[k].toLowerCase()+'">'+PRIM_NAMES[k]+'</button>'; }).join("");
    wrap.innerHTML='<canvas class="cube-gl" aria-hidden="true"></canvas><canvas class="cube-ov" aria-hidden="true"></canvas>'
      +'<header class="cube-ui cube-head"><span class="ch-brand" tabindex="0" role="button" aria-expanded="false" aria-controls="cube-about" aria-label="Inca: what this is"><svg class="ch-logo" viewBox="0 0 40 40" aria-hidden="true"><defs><clipPath id="inca-tile"><rect x="1" y="1" width="38" height="38" rx="9"/></clipPath></defs><rect x="1" y="1" width="38" height="38" rx="9" fill="#9a3f24"/><g clip-path="url(#inca-tile)"><circle cx="31" cy="9" r="3.6" fill="#f2c14e"/><path d="M16.5 15.5H23.5V20.1H27.5V25.3H31.5V31.3H35.5V41H4.5V31.3H8.5V25.3H12.5V20.1H16.5z" fill="#f2c14e"/></g><rect x="1" y="1" width="38" height="38" rx="9" fill="none" stroke="#5e2414" stroke-width="2"/></svg><b>Inca</b></span><div class="cube-ui cube-about" id="cube-about" role="tooltip" hidden><p class="ca-h">Yes, this is a fully functional 3D program.</p><p>What it can do so far:</p><ul><li><b>3D basics:</b> selection modes, paint select, a marking menu, move, rotate and scale, transform spaces, a movable pivot, groups and parenting</li><li><b>Modeling:</b> extrude, multi-cut, merge, combine and separate</li><li><b>Animation:</b> keys, timeline, graph editor, interpolation, tangents and loops</li><li><b>Materials:</b> colors, patterns and your own images</li><li><b>Display:</b> wireframe, shaded and lit views (WIP)</li><li><b>Import and export:</b> OBJ, FBX and USD</li><li><b>Into the handbook:</b> anything you build can become a pixel object on the Handbook\u2019s pages, and go back to 3D</li><li><b>Library:</b> every object from the Handbook as a voxel model</li><li><b class="ca-pict">Pict:</b> Inca\u2019s little 2D sister who still has much to learn</li></ul><p class="ca-f">Inca is still in development, so some things are missing and some will change.</p><p class="ca-f">Inca was created with the help of AI (Claude).</p><p class="ca-f ca-c">If you have ideas for this tool, contact <a class="mail" href="mailto:jakob.christensen@fh-salzburg.ac.at">Jakob Christensen</a></p><p class="ca-legal">Not affiliated with any 3D software company. All trademarks belong to their owners.</p></div><button type="button" class="ch-wip" aria-expanded="false" aria-controls="cube-wip">Work in Progress</button><button type="button" class="cb-tut" aria-expanded="false" aria-controls="cube-tut" title="A seven-step tutorial">Tutorial</button><button type="button" class="cb-2d" title="Pict: the 2D drawing program">Pict</button><button type="button" class="cb-bare" aria-pressed="false" title="Hide the page: only Inca on the background">Hide Page</button><button type="button" class="cb-names" aria-pressed="false" title="Hide the text on the Who to Ask card">Hide Text</button>'
      +'<span class="ch-tools" role="group" aria-label="Tools"><button type="button" data-t="select" title="Select (Q)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3l12 9-5.2 1 3 6.4-2.4 1.1-3-6.4L6 18z"/></svg><kbd>Q</kbd></button><button type="button" data-t="move" title="Move (W)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 4h-2v5h5V9l4 3-4 3v-2h-5v5h2l-3 4-3-4h2v-5H6v2l-4-3 4-3v2h5V6H9z"/></svg><kbd>W</kbd></button><button type="button" data-t="rotate" title="Rotate (E)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 0 8 8h-2.4A5.6 5.6 0 1 1 12 6.4V9l4-3.6L12 2z"/></svg><kbd>E</kbd></button><button type="button" data-t="scale" title="Scale (R)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h8v2.4H7.1l5.2 5.2-1.7 1.7-5.2-5.2V11H3zM13 13h8v8h-8z"/></svg><kbd>R</kbd></button><button type="button" data-t="cut" title="Multi-Cut (also in the right-drag menu)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5 9 15l-2.5-.5L18 3z"/><path d="M8 16.5 3 21l-.6-.6 4.7-4.6z"/><circle cx="6" cy="18" r="1.4"/></svg><kbd>Cut</kbd></button></span><button type="button" class="cb-add" aria-pressed="false" title="Add to the selection: every click selects or deselects, like holding Shift">+ Add</button><button type="button" class="cb-all" title="Select all objects (Ctrl+A)">Select all</button><button type="button" class="cb-paint" data-t="paint" aria-pressed="false" title="Paint select: paint over parts to select them; Ctrl + paint deselects; B + drag sets the brush size"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.4 2.2l2.4 2.4-8.3 8.3-2.4-2.4z"/><path d="M10.3 11.3l2.4 2.4-1.3 1.3-2.4-2.4z"/><path d="M8.4 13.2l2.4 2.4c-.5 3-2.7 5.1-5.8 5.1-1.3 0-2.5-.3-3.6-.9 1.6-.8 2.3-2 2.5-3.5.3-1.9 2-3.2 4.5-3.1z"/></svg><span class="cbp-t">Paint</span></button><span class="ch-space" role="group" aria-label="Manipulator space"><button type="button" data-sp="world" aria-pressed="true" title="World space: the scene’s axes">World</button><button type="button" data-sp="local" aria-pressed="false" title="Object space: the object’s own axes">Object</button><button type="button" data-sp="comp" aria-pressed="false" title="Component space: along the selected parts’ normal">Comp</button><button type="button" data-sp="gimbal" aria-pressed="false" title="Gimbal space (rotate): each ring changes only its own rotation channel">Gimbal</button></span><span class="ch-more"><button type="button" class="cb-more" aria-haspopup="menu" aria-expanded="false" title="Workspace: layout, interface and sound">Workspace</button><span class="ch-menu" role="menu" hidden><button type="button" class="cb-lsave" title="Save Layout: where the windows are, their sizes, and which are popped out">Save Layout</button><button type="button" class="cb-lload" title="Load Layout: the windows as you saved them">Load Layout</button><button type="button" class="cb-lreset" title="Reset Layout: every window back in its place">Reset Layout</button><button type="button" class="cb-ui" aria-pressed="false">Icon UI</button><button type="button" class="cb-snd" aria-pressed="true" title="Sounds: on">Sounds: on</button></span></span><button type="button" class="cb-close" title="Close Inca (Esc)" aria-label="Close Inca"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>'
      +'<div class="cube-ui cube-modes" role="toolbar" aria-label="Mode"><span class="sh-l">Mode</span><span class="cb-mode" role="group" aria-label="Mode"><button type="button" data-m="object" title="Object Mode (F8)">Object</button><button type="button" data-m="multi" title="Multi: corners, edges and faces">Multi</button><button type="button" data-m="vert" title="Vertex (F9)">Vertex</button><button type="button" data-m="edge" title="Edge (F10)">Edge</button><button type="button" data-m="face" title="Face (F11)">Face</button></span></div>'
      +'<div class="cube-sheetbar" role="group" aria-label="Windows"><button type="button" data-sh="l" aria-pressed="false">Outliner</button><button type="button" data-sh="r" aria-pressed="false">Channel Box</button><button type="button" data-sh="p" class="sh-place">Place Object</button></div>'
      +'<div class="cube-ui cube-shelf" role="toolbar" aria-label="Create"><span class="sh-l">Create</span><span class="ch-prims" role="group" aria-label="Add a shape">'+prims+'</span><i class="cb-sep"></i><span class="ch-models" role="group" aria-label="Add a model"><button type="button" data-mo="tree" title="Add a fir tree">Fir Tree</button><button type="button" data-mo="mushroom" title="Add a mushroom">Mushroom</button><button type="button" data-mo="snowman" title="Add a snowman">Snowman</button><button type="button" data-mo="house" title="Add a house">House</button><button type="button" data-mo="rocket" title="Add a rocket">Rocket</button></span><i class="cb-sep"></i><button type="button" class="cb-gen" aria-haspopup="true" aria-expanded="false" title="Test Object: a random shape to try the conversion to 2D with">Test Object</button><i class="cb-sep lib-sep"></i><button type="button" class="cb-lib" aria-haspopup="true" aria-expanded="false" title="Library: every object of the Handbook as a voxel model">Library</button></div>'
      +'<div class="cube-left"><section class="cube-ui cube-ol" aria-label="Outliner"><h3>Outliner</h3><ul class="ol-list"></ul></section><div class="cube-ui cube-lib" role="dialog" aria-label="Library" hidden><div class="sw-ph"><b>Library</b><span class="lb-n"></span><button type="button" class="lb-x" aria-label="Close">\u00d7</button></div><input type="search" class="sw-q" placeholder="Search all objects" aria-label="Search all objects"><div class="sw-grid"></div><p class="lb-hint">A click adds it as a voxel model, one cube per pixel; Shift + click keeps this open. Five are hand-built.</p></div><div class="cube-ui cube-gen" role="dialog" aria-label="Test Object" hidden><p class="io-h">Test Object</p><p class="gen-hint">A random shape to drag into the Handbook. Left is simple, right is complex.</p><label class="gen-row"><span>Outline</span><input type="range" min="0" max="100" data-g="o" aria-label="Outline: how wavy and jagged the silhouette is"></label><label class="gen-row"><span>Detail</span><input type="range" min="0" max="100" data-g="d" aria-label="Detail: how many polygons"></label><label class="gen-row"><span>Parts</span><input type="range" min="0" max="100" data-g="p" aria-label="Parts: how many pieces stick out"></label><button type="button" class="gen-go">Make Test Object</button></div><div class="cube-ui cube-io" role="menu" aria-label="Export" hidden><p class="io-h">Export as</p><button type="button" role="menuitem" data-f="obj"><b>OBJ</b><small>.zip with .mtl and textures</small></button><button type="button" role="menuitem" data-f="fbx"><b>FBX</b><small>ASCII, with materials</small></button><button type="button" role="menuitem" data-f="usd"><b>USD</b><small>.usda, with hierarchy and keys</small></button><p class="io-what"></p></div><input type="file" class="io-file" multiple accept=".obj,.mtl,.usda,.usd,.fbx,image/*" hidden><section class="cube-ui cube-mats" aria-label="Materials"><h3>Materials</h3><div class="mt-body"></div></section><section class="cube-ui cube-silw" aria-label="Silhouette"><h3>Silhouette</h3><div class="sw-body"><p class="sw-info"></p><canvas class="sw-cv" width="140" height="100" aria-label="The outline Inca compares"></canvas><div class="sw-view" role="group" aria-label="Match"><span>Match</span><button type="button" data-v="camera" title="Camera: the view you have now">Cam</button><button type="button" data-v="front" title="Front: looking at the object from the front">Front</button><button type="button" data-v="side" title="Side: looking at the object from the right">Side</button><button type="button" data-v="top" title="Top: looking straight down">Top</button></div><div class="sw-hrow"><p class="sw-h">Would become</p><button type="button" class="sw-colsw" aria-pressed="false" title="Match Colors: the suggestions also consider the object\u2019s colors">Match Colors</button></div><div class="sw-sug"></div><button type="button" class="sw-place" data-tip="Takes it to the Handbook: move the mouse and click to place it (Tab does the same). You can also grab the object in the scene and wiggle it while dragging.">Place Object</button></div></section></div>'
      +'<div class="cube-right"><section class="cube-ui cube-attr" aria-label="Channel Box"><h3>Channel Box</h3><div class="at-body"></div></section>'
      +'<section class="cube-ui cube-gal" aria-label="Gallery"><h3>Gallery</h3><ul class="gl-list"></ul><div class="gl-add"><button type="button" class="gl-save-obj" title="Save the selected object to the gallery">Save Object</button><button type="button" class="gl-save-scene" title="Save all visible objects as a scene">Save Scene</button></div></section></div><img class="gl-preview" alt="" hidden>'
      +'<canvas class="cube-ui cube-nav" role="img" aria-label="View cube: drag to turn the camera, click a side to look from there"></canvas>'
      +'<section class="cube-ui cube-ge" aria-label="Graph Editor" hidden><div class="ge-top"><h3>Graph Editor</h3><span class="ge-grp"><button type="button" class="ge-all" aria-pressed="false" title="A click selects the key on every shown curve at that frame">All Axes</button></span><span class="ge-loop" role="group" aria-label="Loop"><button type="button" class="ge-pre" aria-pressed="false" title="Loop before the first key" aria-label="Loop before the first key">\u21BA</button><span class="ge-loop-l">Loop</span><button type="button" class="ge-post" aria-pressed="false" title="Loop after the last key" aria-label="Loop after the last key">\u21BB</button></span><span class="ge-grp ge-tools" role="group" aria-label="Graph Editor tool"><button type="button" data-gt="move" aria-pressed="true" title="Move keys (W over the Graph Editor)">Move</button><button type="button" data-gt="scale" aria-pressed="false" title="Scale keys (R over the Graph Editor)">Scale</button></span><span class="ge-grp"><button type="button" class="ge-wt" aria-pressed="false" title="Weighted tangents for the selected curves: the handles can also change length">Weighted</button></span><label class="ge-stat">Frame<input type="text" inputmode="numeric" class="ge-fr" aria-label="Frame of the selected keys" disabled></label><label class="ge-stat">Value<input type="text" inputmode="decimal" class="ge-val" aria-label="Value of the selected keys" disabled></label><span class="ge-sp"></span><button type="button" class="ge-q" aria-expanded="false" aria-controls="ge-tips" title="How to use the Graph Editor" aria-label="How to use the Graph Editor">?</button><div class="ge-tips" id="ge-tips" role="note" hidden><p>Drag a key up or down to change it, sideways to move it in time.</p><p>Drag on empty space to select several keys.</p><p>Drag a tangent handle to shape the curve.</p></div><button type="button" class="ge-x" aria-label="Close the Graph Editor">×</button></div><div class="ge-body"><div class="ge-side" role="group" aria-label="Attributes"></div><div class="ge-plot"><canvas class="ge-cv"></canvas><span class="ge-empty" hidden></span></div></div></section>'
      +'<div class="cube-ui cube-tl" role="group" aria-label="Timeline"><div class="tl-row1"><div class="tl-wrap"><div class="tl-track"></div><input class="tl-scrub" type="range" min="1" max="'+FRAMES+'" value="1" aria-label="Frame"></div><b class="tl-frame">1</b><span class="tl-of">/</span><input class="tl-end" type="text" inputmode="numeric" value="'+FRAMES+'" aria-label="Last frame of the scene" title="Last frame of the scene: click and type a number"></div><div class="tl-row2"><span class="tl-pb" role="group" aria-label="Playback"><button type="button" class="tl-first" title="Go to the first frame (Home)" aria-label="First frame"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h2v14H4zM13 6v12L7 12zM20 6v12l-6-6z"/></svg></button><button type="button" class="tl-pkey" title="Previous key (,)" aria-label="Previous key"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l6 6-6 6-6-6zM8 7v10L3 12z"/></svg></button><button type="button" class="tl-pfr" title="Previous frame (Alt + ,)" aria-label="Previous frame"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h2.2v14H7zM18 6v12l-8-6z"/></svg></button><button type="button" class="tl-rev" title="Play backwards" aria-label="Play backwards"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 5v14L6 12z"/></svg></button><button type="button" class="tl-play" title="Play forwards (Space)" aria-label="Play forwards"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5v14l11-7z"/></svg></button><button type="button" class="tl-nfr" title="Next frame (Alt + .)" aria-label="Next frame"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5H17v14h-2.2zM6 6v12l8-6z"/></svg></button><button type="button" class="tl-nkey" title="Next key (.)" aria-label="Next key"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6-6-6zM16 7v10l5-5z"/></svg></button><button type="button" class="tl-last" title="Go to the last frame (End)" aria-label="Last frame"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 5h2v14h-2zM11 6v12l6-6zM4 6v12l6-6z"/></svg></button></span><i class="tl-sep"></i><button type="button" class="tl-key-btn" title="Set a key for the selected object (S)">Set Key</button><span class="tl-tan" role="group" aria-label="Interpolation"><button type="button" data-t="auto" title="Auto: smooth, flat at the ends and at highs and lows">Auto</button><button type="button" data-t="linear" title="Linear: straight from key to key">Linear</button><button type="button" data-t="step" title="Stepped: holds each key until the next">Stepped</button></span><button type="button" class="tl-graph" aria-pressed="false" title="Graph Editor">Graph</button><span class="tl-sp"></span><button type="button" class="tl-auto" aria-pressed="true">Auto Key</button></div></div>'
      +'<div class="cube-ui cube-bar" role="toolbar" aria-label="Inca"><button type="button" class="cb-grid" aria-pressed="false" title="Grid: off (G)">Grid: off</button><button type="button" class="cb-mats" aria-pressed="true" title="Materials: colors, patterns and images">Materials</button><button type="button" class="cb-sil" aria-pressed="true" title="Silhouette: the outline Inca compares, and what it would become">Silhouette</button><span class="cb-shade" role="group" aria-label="Display"><button type="button" data-s="wire" title="Wireframe (4)">Wireframe</button><button type="button" data-s="flat" title="Unshaded (5)">Unshaded</button><button type="button" data-s="shade" title="Shaded (6)">Shaded</button><button type="button" data-s="lit" title="Lit (7): lights fixed in the scene, highlights, smooth shading">Lit</button></span><i class="cb-sep"></i>'
      +'<button type="button" class="cb-undo" title="Undo (Ctrl+Z)">Undo</button><button type="button" class="cb-redo" title="Redo (Ctrl+Shift+Z)">Redo</button><i class="cb-sep"></i><button type="button" class="cb-ext" title="Extrude the selected faces (Ctrl+E)">Extrude</button><button type="button" class="cb-keep" aria-pressed="true" title="Keep Faces together: on">Keep Faces together: on</button><button type="button" class="cb-merge" title="Merge selected corners that are closer than 0.05">Merge</button><button type="button" class="cb-mergec" title="Merge all selected corners into one, in their middle">Merge to Center</button><button type="button" class="cb-dup" title="Duplicate the selected object (Ctrl+D)">Duplicate</button><button type="button" class="cb-del" title="Delete the selected object (Delete)">Delete</button><i class="cb-sep"></i><button type="button" class="cb-comb" title="Combine the selected objects into one">Combine</button><button type="button" class="cb-sepa" title="Separate an object into its pieces">Separate</button><button type="button" class="cb-cpiv" title="Center the pivot of the selected objects">Center Pivot</button><i class="cb-sep"></i><button type="button" class="cb-grp" title="Group the selected objects (Ctrl+G)">Group</button><button type="button" class="cb-ugrp" title="Ungroup (Ctrl+Shift+G)">Ungroup</button><button type="button" class="cb-par" title="Parent: the last selected object becomes the parent (P)">Parent</button><button type="button" class="cb-upar" title="Unparent (Shift+P)">Unparent</button><i class="cb-sep"></i>'
      +'<button type="button" class="cb-save" title="Save (Ctrl+S)">Save</button><button type="button" class="cb-imp" title="Import OBJ, FBX or USD (.usda); you can also drop files onto Inca">Import</button><button type="button" class="cb-exp" aria-haspopup="true" aria-expanded="false" title="Export as OBJ, FBX or USD">Export</button><button type="button" class="cb-asave" aria-pressed="true" title="Autosave: on">Autosave: on</button><button type="button" class="cb-reset" title="Back to one default cube">Reset</button><i class="cb-sep"></i><button type="button" class="cb-turn" aria-pressed="true" title="Turn the scene on its own, or keep the camera still">Turntable: on</button><button type="button" class="cb-keys" aria-expanded="false" title="All hotkeys (?)">Hotkeys</button><button type="button" class="cb-trial" hidden aria-pressed="false" title="Experimental: place objects anywhere on the page">Experimental</button></div>'
      +'<section class="cube-ui cube-wipbox" id="cube-wip" role="tooltip" hidden><p class="ca-h">Work in Progress</p>'
      +'<p>Inca is a prototype and still growing. Some tools are missing or rough, and a saved scene may not survive every update.</p>'
      +'<p>If you have ideas for this tool, contact <a class="mail" href="mailto:jakob.christensen@fh-salzburg.ac.at">Jakob Christensen</a></p></section>'
      +'<section class="cube-ui cube-tutbox" id="cube-tut" aria-label="Tutorial" role="dialog" hidden><div class="tut-top"><span class="tut-n">Step 1 of 7</span><button type="button" class="tut-skip" data-tip="You can reopen the tutorial anytime with the Tutorial button in the top bar.">Skip tutorial</button><button type="button" class="tut-x" aria-label="Close the tutorial">×</button></div><h3></h3><div class="tut-stage"></div><p class="tut-p"></p><p class="tut-fine" hidden></p>'
      +'<div class="tut-intro-btns" hidden><button type="button" class="tut-know">I know what I’m doing</button><button type="button" class="tut-start">Show me around</button></div>'
      +'<div class="tut-nav"><button type="button" class="tut-back">Back</button><span class="tut-dots">'+[1,2,3,4,5,6,7].map(function(n){ return '<button type="button" aria-label="Step '+n+'"></button>'; }).join("")+'</span><button type="button" class="tut-next">Next</button></div></section>'
      +'<section class="cube-ui cube-keys" aria-label="Hotkeys" hidden><div class="ck-top"><h3>Hotkeys</h3><input type="search" class="ck-q" placeholder="Search, for example copy or Ctrl+D" aria-label="Search the hotkeys" autocomplete="off" spellcheck="false"><button type="button" class="ck-all">Collapse all</button><button type="button" class="ck-x" aria-label="Close the hotkeys">×</button></div>'+keysHTML()+'</section>'
      +'<span class="cube-tip" role="status">'+(j?"Your saved scene is back.":(window.matchMedia&&matchMedia("(pointer:coarse)").matches?'Tap to select \u00b7 drag empty space to turn the camera':'Click to select \u00b7 W move \u00b7 E rotate \u00b7 R scale \u00b7 Alt + drag: camera'))+'</span>';
    document.body.appendChild(wrap); cv=q(".cube-gl"); ov=q(".cube-ov"); g2=ov.getContext("2d");
    if(!setup()){ q(".cube-tip").textContent="This browser cannot draw the cube (no WebGL)."; setTimeout(close,3000); return; }
    tipEvents(); barTidy(); tipShow(null,4500);   /* the opening message: one short line, 4.5 s (Jakob, 19.10.2026: the long one covered the cube) */
    nav=q(".cube-nav"); nav.width=nav.height=Math.round(104*R); ng=nav.getContext("2d"); navEvents(); size(); listen(true); openView(); cam0=[ry,rx,D,pan[0],pan[1],pan[2]]; camMoved=false; if(E.props) E.props.intro=camIntro;
    var tv=null; try{ tv=localStorage.getItem("sbh-cube-turn2"); localStorage.removeItem("sbh-cube-turn"); }catch(e){} setTurn(tv==="1",true);   /* off unless switched on (18.10.2026) */
    q(".cb-undo").addEventListener("click",doUndo); q(".cb-redo").addEventListener("click",doRedo); q(".cb-save").addEventListener("click",doSave); q(".cb-reset").addEventListener("click",doReset); q(".cb-close").addEventListener("click",close);
    q(".cb-keys").addEventListener("click",function(){ keysPanel(); }); q(".cb-add").addEventListener("click",function(){ setAdd(!addMode); snd(addMode?600:420); toast(addMode?"Add is on: clicks select and deselect, like Shift.":"Add is off."); }); setAdd(false);
    wipEvents(); tutEvents();
    [].forEach.call(qa(".ch-tools button,.cube-head .cb-paint"),function(b){ b.addEventListener("click",function(){ setTool(b.getAttribute("data-t")); }); });   /* Paint sits with + Add and Select all (18.10.2026) */ setTool("move",true); osel=S.sel?[S.sel]:[]; csel={}; box=null; gzDrag=null;
    [].forEach.call(qa(".cb-shade button"),function(b){ b.addEventListener("click",function(){ setShade(b.getAttribute("data-s")); }); }); setShade(dmode,true); keysEvents(); q(".ck-x").addEventListener("click",function(){ keysPanel(false); });
    q(".cb-dup").addEventListener("click",duplicate); q(".cb-comb").addEventListener("click",combineSel); q(".cb-sepa").addEventListener("click",separateSel); q(".cb-cpiv").addEventListener("click",centerPivot);
    q(".cb-grp").addEventListener("click",groupSel);
    /* the Graph Editor's tips behind a small "?" instead of a long line in its header (Jakob, 18.10.2026) */
    var geq=q(".ge-q"), get=q(".ge-tips"), geTips=function(on){ get.hidden=!on; geq.setAttribute("aria-expanded",on?"true":"false"); };
    geq.addEventListener("click",function(e){ e.stopPropagation(); geTips(get.hidden); snd(get.hidden?420:560); });
    document.addEventListener("pointerdown",function(e){ if(!get.hidden&&!e.target.closest(".ge-tips,.ge-q")) geTips(false); },true);
    wrap._geTips=geTips; q(".cb-grid").addEventListener("click",function(){ setGrid(!showGrid); snd(showGrid?600:420); toast(showGrid?"Grid on.":"Grid off."); }); setGrid(showGrid); if(window.sbhMailCopy) window.sbhMailCopy(q(".cube-wipbox")); q(".cb-keep").addEventListener("click",function(){ setKeep(!keepTog); snd(keepTog?600:420); toast(keepTog?"Keep Faces together: neighboring faces extrude as one block.":"Keep Faces together off: every face extrudes on its own."); }); setKeep(keepTog);
    q(".cb-merge").addEventListener("click",function(){ mergeVerts(false); }); q(".cb-mergec").addEventListener("click",function(){ mergeVerts(true); });
    [].forEach.call(qa(".ch-space button"),function(bt){ bt.addEventListener("click",function(){ setSpace(bt.getAttribute("data-sp")); snd(520); toast({world:"World space: the scene’s axes.",gimbal:"Gimbal space: each rotate ring changes only its own channel.",local:"Object space: the object’s own axes.",comp:"Component space: along the selected parts’ normal."}[gspace]); }); }); setSpace(gspace); q(".cb-asave").addEventListener("click",function(){ setAutoSave(!autoSave); snd(autoSave?600:420); toast(autoSave?"Autosave is on: changes are saved by themselves.":"Autosave is off: save with Ctrl+S."); }); setAutoSave(autoSave); q(".cb-all").addEventListener("click",selectAll); q(".cb-ugrp").addEventListener("click",ungroupSel); q(".cb-par").addEventListener("click",parentSel); q(".cb-upar").addEventListener("click",unparentSel); q(".cb-ext").addEventListener("click",extrudeSel); q(".cb-del").addEventListener("click",removeSel); q(".cb-turn").addEventListener("click",function(){ setTurn(!turn); });
    [].forEach.call(qa(".cb-mode button"),function(b){ b.addEventListener("click",function(){ setMode(b.getAttribute("data-m")); }); });
    [].forEach.call(qa(".ch-prims button"),function(b){ b.addEventListener("click",function(){ add(b.getAttribute("data-p")); }); });
    olEvents(); matsEvents(); ioEvents(); aboutEvents(); genEvents(); libEvents(); [].forEach.call(qa(".cube-sheetbar button"),function(b){ b.addEventListener("click",function(){ sheet(b.getAttribute("data-sh")); }); }); q(".cb-2d").addEventListener("click",function(){ close(); if(E.pict) E.pict.open(); }); q(".cb-sil").addEventListener("click",function(){ setSilOpen(!silOpen); }); q(".cube-silw .sw-sug").addEventListener("click",function(e){ if(e.target.closest(".sw-it")) silPick(true); }); q(".cube-silw .sw-place").addEventListener("click",placeSel); var csw=q(".sw-colsw"); if(csw){ csw.setAttribute("aria-pressed",colMatch?"true":"false"); csw.addEventListener("click",function(){ colMatch=!colMatch; try{ localStorage.setItem("sbh-cube-colmatch",colMatch?"1":"0"); }catch(e){} csw.setAttribute("aria-pressed",colMatch?"true":"false"); toast(colMatch?"Match Colors: on. The suggestions also look at the object\u2019s colors.":"Match Colors: off. Only the shape counts."); silSig=""; paintSil(true); }); }
    [].forEach.call(qa(".sw-view button"),function(b){ b.addEventListener("click",function(){ setSilView(b.getAttribute("data-v")); }); }); silT=setInterval(function(){ if(!wrap){ clearInterval(silT); return; } if(carry||gzDrag||drag||atDrag) return; paintSil(); },330); setTimeout(function(){ paintSil(true); },400); [].forEach.call(qa(".ch-models button"),function(bt){ bt.addEventListener("click",function(){ addModel(bt.getAttribute("data-mo")); }); }); wrap.addEventListener("pointerdown",pressSnd,true); q(".cb-lsave").addEventListener("click",wmSave); q(".cb-lload").addEventListener("click",wmLoadNow); q(".cb-lreset").addEventListener("click",wmReset); q(".cb-mats").addEventListener("click",function(){ setMatsOpen(!matsOpen); });
    q(".ol-list").addEventListener("dblclick",function(e){ var li=e.target.closest(".ol-it"); if(!li||!e.target.closest(".ol-name")) return; var o=S.objs.filter(function(x){ return x.id===+li.getAttribute("data-id"); })[0]; if(o&&olRenamedAt&&performance.now()-olRenamedAt<800) return; olRename(o); });

    q(".tl-play").addEventListener("click",function(){ play(!(playing&&playDir>0),1); }); q(".tl-rev").addEventListener("click",function(){ play(!(playing&&playDir<0),-1); });
    q(".tl-first").addEventListener("click",function(){ play(false); gotoFrame(1); snd(400); }); q(".tl-last").addEventListener("click",function(){ play(false); gotoFrame(FRAMES); snd(400); });
    q(".tl-pkey").addEventListener("click",function(){ stepKey(-1); }); q(".tl-nkey").addEventListener("click",function(){ stepKey(1); }); q(".tl-pfr").addEventListener("click",function(){ stepFrame(-1); }); q(".tl-nfr").addEventListener("click",function(){ stepFrame(1); });
    var te=q(".tl-end"); te.addEventListener("focus",function(){ setTimeout(function(){ te.select(); },0); }); te.addEventListener("change",function(){ setEnd(te.value); });
    te.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); te.blur(); } else if(e.key==="Escape"){ e.preventDefault(); e.stopPropagation(); te.value=FRAMES; te.blur(); } }); play(false,1); q(".tl-key-btn").addEventListener("click",setKey);
    var ak=null; try{ ak=localStorage.getItem("sbh-cube-autokey"); }catch(e){} setAuto(ak!=="0");
    ge=q(".ge-cv"); gg=ge.getContext("2d"); gEvents(); gsel=[]; geOpen=false; curTan="auto"; paintTan();
    [].forEach.call(qa(".tl-tan button"),function(b){ b.addEventListener("click",function(){ setTan(b.getAttribute("data-t")); }); });
    q(".tl-graph").addEventListener("click",function(){ setGraph(!geOpen); }); q(".tl-auto").addEventListener("click",function(){ setAuto(!autoKey); snd(autoKey?600:300); toast(autoKey?"Auto Key on: changes to objects with keys are keyed at this frame.":"Auto Key off."); });
    q(".tl-scrub").addEventListener("input",function(){ play(false); gotoFrame(+this.value); });
    gLoad(); galleryEvents(); paintGallery(); attrEvents(); atFor=null; cutPts=[]; cutHover=null; minButtons(); wmSetup();
    iconize(); setIconUI(iconUI); fitBars(); setTimeout(fitBars,300); setTimeout(fitBars,1200);   /* after the icons, so every button has its icon before anything moves into a More menu */ q(".cb-trial").addEventListener("click",function(){ var v=!(E.props&&E.props.anywhere()); if(E.props) E.props.anywhere(v); var b2=q(".cb-trial"); b2.setAttribute("aria-pressed",v?"true":"false"); b2.textContent=v?"Experimental: on":"Experimental"; toast(v?"Experimental: objects can go anywhere on the page now, on letters, lines and the tops of boxes.":"Experimental off: only the usual lines again. Objects already placed elsewhere stay."); }); if(E.props&&E.props.anywhere&&E.props.anywhere()){ q(".cb-trial").setAttribute("aria-pressed","true"); q(".cb-trial").textContent="Experimental: on"; }
    q(".cb-bare").addEventListener("click",function(){ setBare(!bare); }); setBare(false); q(".cb-names").addEventListener("click",function(){ setNames(!noNames); }); setNames(false);
    q(".cb-snd").addEventListener("click",function(){ if(pageMuted()){ toast("The whole page is muted: Unmute at the top of the page brings the sounds back."); return; } setSound(!sndOn); }); setSound(sndOn,true); /* the Workspace menu (Jakob, 19.10.2026: the title bar ran off a 1366 px screen): Save, Load, Reset Layout, Icon UI and Sounds in one place */
    (function(){ var mb=q(".cb-more"), mn=q(".ch-menu"); if(!mb||!mn) return;
      function show(v){ mn.hidden=!v; mb.setAttribute("aria-expanded",v?"true":"false"); if(!v) return; var r=mb.getBoundingClientRect(); mn.style.top=Math.round(r.bottom+8)+"px"; mn.style.left=Math.round(Math.max(8,Math.min(innerWidth-mn.offsetWidth-8,r.right-mn.offsetWidth)))+"px"; var f=mn.querySelector("button"); if(f) f.focus(); }
      mb.addEventListener("click",function(e){ e.stopPropagation(); show(mn.hidden); });
      mn.addEventListener("click",function(e){ if(e.target.closest("button")) setTimeout(function(){ show(false); mb.focus(); },0); });
      mn.addEventListener("keydown",function(e){ if(e.key==="Escape"){ e.stopPropagation(); show(false); mb.focus(); } if(e.key==="ArrowDown"||e.key==="ArrowUp"){ e.preventDefault(); var bs=[].slice.call(mn.querySelectorAll("button")), j=bs.indexOf(document.activeElement); bs[(j+(e.key==="ArrowDown"?1:bs.length-1))%bs.length].focus(); } });
      document.addEventListener("pointerdown",function(e){ if(!mn.hidden&&!e.target.closest(".ch-more")) show(false); },true); })();
    q(".cb-ui").addEventListener("click",function(){ setIconUI(!iconUI); snd(iconUI?640:480); });
    paintAll(); applyFrame(); requestAnimationFrame(function(){ wrap&&wrap.classList.add("in"); placeAll(); }); raf=requestAnimationFrame(loop); snd(440); var firstTime=opt&&opt.first!=null?!!opt.first:!cubeFound(); if(!noEgg) E.found("cube");   /* the page may have shown the egg already while Inca loaded: it tells whether this was the first time (18.10.2026) */ if(E.props&&E.props.load) E.props.load(); if(firstTime&&!tutOffered) setTimeout(function wait(){ if(!wrap) return; if(document.querySelector(".egg-got")){ setTimeout(wait,400); return; } tutIntro(); },1500); }   /* after the unlock message has closed, never on top of it (Jakob, 18.10.2026) */
  /* the first time Inca is unlocked, and again after the easter eggs are reset, it offers the tutorial (Jakob, 18.10.2026); once per visit at most */
  var tutOffered=false;
  document.addEventListener("sbh-eggs",function(e){ var f=(e.detail&&e.detail.found)||[]; if(f.indexOf("cube")<0) tutOffered=false; });   /* eggs reset: the introduction and the tutorial come again (18.10.2026) */
  function cubeFound(){ try{ return (JSON.parse(localStorage.getItem("sbh-eggs")||"[]")||[]).indexOf("cube")>=0; }catch(e){ return false; } }
  function tutAsk(){ if(!wrap||tutOffered) return; tutOffered=true; var c=document.createElement("section"); c.className="cube-ui cube-tutask"; c.setAttribute("role","dialog"); c.setAttribute("aria-label","Tutorial");
    c.innerHTML='<p><b>New to Inca?</b> A short tutorial shows the basics in seven steps.</p><div class="ta-btns"><button type="button" class="ta-no">Not now</button><button type="button" class="ta-yes">Show the tutorial</button></div>';
    wrap.appendChild(c); requestAnimationFrame(function(){ c.classList.add("in"); }); c.querySelector(".ta-yes").focus({preventScroll:true});
    c.querySelector(".ta-yes").addEventListener("click",function(){ c.remove(); tutOpen(0); }); c.querySelector(".ta-no").addEventListener("click",function(){ c.remove(); snd(420); toast("The tutorial is in the title bar whenever you want it."); }); }   /* fetch the object library in the background */
  E.cubeOpen=open; E.cubeClose=close;
  /* a 2D object shaken in the Handbook comes back (Jakob, 17.10.2026): Inca opens if needed, and the 3D object lands in front of the camera (at the point the camera turns around),
     selected, in Object Mode; its keys move with it. Objects from before this change only know their kind: they come back as the matching primitive */
  E.cubeFromProp=function(src){ if(E.muted()) return; if(!wrap) open({noEgg:true}); if(!wrap||!S) return; mark();
    var o; if(src.draw){ if(!E.props||!E.props.ready||!E.props.decode){ if(E.props&&E.props.load) E.props.load(function(){ E.cubeFromProp(src); }); return; }   /* a drawing from Pict: one cube per pixel, like the Library (19.10.2026) */
      var sp=E.props.decode(src.draw); o=sp?voxelObjG({w:sp.w,h:sp.h,g:sp.g},"pDrawing1",null):null; if(!o){ toast("That drawing could not be turned into a 3D model."); return; } }
    else if((src.G&&src.T)||(src.V&&src.F)){ o=objFrom(src); o.name=uniqueName(o.name); }
    else if(src.vox&&!E.props.ready){ E.props.load(function(){ E.cubeFromProp(src); }); return; }   /* a voxel model needs the library (19.10.2026) */
    else if(src.vox&&(handObj(src.vox)||voxelObj(src.vox))){ o=handObj(src.vox)||voxelObj(src.vox); }
    else { var kind=PRIM[src.prim]?src.prim:"cube", g=PRIM[kind](); o=obj(uniqueName(src.name||PRIM_NAMES[kind]),g.V,g.F); o.prim={t:kind,p:prm(kind),n:S.objs.filter(function(x){ return x.prim&&x.prim.t===kind; }).length+1}; }
    var target=unrot([-pan[0],-pan[1],-pan[2]]), pw=pivotW(o), dv=[target[0]-pw[0],target[1]-pw[1],target[2]-pw[2]];   /* in front of the camera; the translate keys move along */
    o.T.t=[o.T.t[0]+dv[0],o.T.t[1]+dv[1],o.T.t[2]+dv[2]]; ["tx","ty","tz"].forEach(function(c2,i){ if(o.K[c2]) Object.keys(o.K[c2]).forEach(function(fr){ o.K[c2][fr].v+=dv[i]; }); }); worldV(o);
    S.objs.push(o); S.sel=o.id; if(S.mode!=="object") setMode("object"); osel=[o.id]; csel={}; applyFrame(); hover=null; snd(640); toast(o.name+(src.draw||src.fromPict?" is in Inca.":" is back in Inca.")); paintAll(); };
  E.cubeFeat=function(){ var o=sel(); return o?E.props.feat(silhouette(o)):null; };
  /* for the ?eggs panel: test objects, test scenes, animations (Jakob, 18.10.2026) */
  E.cubeTest={
    object:function(o2,d,p){ var go=function(){ genSet={o:o2,d:d,p:p}; makeTest(); }; if(!wrap){ E.cubeOpen(); setTimeout(go,700); } else go(); },
    scene:function(list){ var go=function(){ mark(); var made=[], i=0; list.forEach(function(it){ for(var n=0;n<it[1];n++){ var p=PRIM[it[0]](), o=obj(uniqueName(MNAME[it[0]]+"1"),p.V,p.F); o.prim={t:it[0],p:prm(it[0]),n:1}; o.T.t=[(i%5)*2.4-4.8,0,Math.floor(i/5)*2.4-2.4]; worldV(o); S.objs.push(o); made.push(o.id); i++; } });
      if(S.mode!=="object") setMode("object"); osel=made.slice(); S.sel=made[made.length-1]; hover=null; frame(true); snd(620); toast(made.length+" test objects. Shake them while dragging to see the scenes."); paintAll(); }; if(!wrap){ E.cubeOpen(); setTimeout(go,700); } else go(); },
    animate:function(kind){ var o=sel(); if(!o){ toast("Select an object first."); return; } mark(); var T0=JSON.parse(JSON.stringify(trOf(o))), set=function(fr,fn){ fn(trOf(o)); setKeyAt(o,fr); o.T=JSON.parse(JSON.stringify(T0)); };
      o.K={}; if(kind==="slow"){ set(1,function(){}); set(48,function(T){ T.t[0]+=1; }); } else if(kind==="fast"){ set(1,function(){}); set(48,function(T){ T.t[0]+=9; }); } else if(kind==="spin"){ set(1,function(){}); set(48,function(T){ T.r[1]+=720; }); } else if(kind==="bounce"){ [1,12,24,36,48].forEach(function(fr,i){ set(fr,function(T){ T.t[1]+=i%2?1.2:0; }); }); }
      gdirty=true; applyFrame(); snd(620); toast(o.name+" animated ("+kind+"). Shake it while dragging to see what it becomes."); paintAll(); },
    tutorial:function(){ if(!wrap){ E.cubeOpen(); setTimeout(function(){ tutOpen(); },700); } else tutOpen(); },
    layout:function(){ if(wrap) wmReset(); },
    clear:function(){ if(!wrap) return; mark(); S.objs=[]; osel=[]; S.sel=null; csel={}; hover=null; paintAll(); toast("Scene cleared."); } };
  E.cubeHit=function(x,y){ var g=gizmo(); return g?gizmoHit(g,x*R,y*R):null; }; E.cubeDrag=function(){ return gzDrag?{h:gzDrag.h,th:gzDrag.thNow,scr:gzDrag.screenAng}:null; };
  E.cubeUnits=function(){ var objs=S.objs.filter(function(o){ return o.vis&&!o.grp; }), us=assemblies(objs); return us.map(function(u){ return {names:u.map(function(o){ return o.name; }),rank:E.props.rank(silOf(u),u.length===1?famKey(u[0]):null,4,u.length>1,null)}; }); };   /* for the tests */
  E.cubeRing=function(a){ var g=gizmo(); if(!g||!g.ax[a]) return null; var rg=g.ax[a].ring; return {front:rg.filter(function(p){ return p.front; }).map(function(p){ return [p[0]/R,p[1]/R]; }),all:rg.length,c:[g.sc[0]/R,g.sc[1]/R],G:g.G/R}; };   /* for the tests */
  E.cubeSil=function(id){ var o=id!=null?objById(id):sel(); return o?silhouette(o):null; }; E.cubeSils=function(){ return S.objs.filter(function(o){ return o.vis&&!o.grp; }).map(silhouette); };   /* for the tests */
  E.cubeColDbg=function(ks){ var o=sel(); if(!o) return null; var H=unitHist([o]); return {sum:H.reduce(function(a,b){ return a+b; },0), top:H.map(function(v,i){ return [i,+v.toFixed(2)]; }).filter(function(x){ return x[1]>0; }), sims:(ks||[]).map(function(k){ return [k,+E.props.colSim(H,k).toFixed(3)]; }), on:colMatch}; };   /* for the tests */
  E.cubeMatchDbg=function(n){ var o=sel(); if(!o) return null; var sil=silhouette(o); return {M:Array.from(sil.M),w:sil.w,h:sil.h,ring:sil.ring,picks:(function(){ var r=E.props.rank(sil,famKey(o),n||3,!!(o.prim&&o.prim.edited)); return r.map(function(k){ return [k,!!r.flip[k],r.ar[k]]; }); })()}; };   /* for the tests */
  E.cubeMats=function(){ return {mats:mats().map(function(m){ return {id:m.id,name:m.name,pat:m.pat,img:!!m.img}; }),objs:S.objs.map(function(o){ return {name:o.name,mat:o.mat||1,fm:o.fm||null,nf:o.F?o.F.length:0,wv:o.V}; })}; };   /* for the tests */
  E.cubeAnimOf=function(){ var o=sel(); var a=o?animOf(o):null; return a?a.f.map(function(q2){ return [q2[3],q2[4],q2[5]]; }):null; };   /* for the tests */
  E.cubeGE=function(){ var o=sel(); return {gsel:gsel.slice(),view:gView,tool:geTool,K:o?JSON.parse(JSON.stringify(o.K||{})):null,KW:o&&o.KW?JSON.parse(JSON.stringify(o.KW)):null,clip:!!gClip,fr:q(".ge-fr").value,val:q(".ge-val").value}; };
  E.cubeGEline=function(){ var bx=gBox(), r=ge.getBoundingClientRect(), k2=r.width/ge.width; return [r.left+gX(S.frame,bx)*k2, r.top+r.height*.5]; };   /* for the tests */
  E.cubeGEpos=function(c,f){ var o=sel(); if(!o||!o.K[c]||!o.K[c][f]) return null; var bx=gBox(), rg=gRange||gRangeOf(gData()), r=ge.getBoundingClientRect(), k2=r.width/ge.width; return [r.left+gX(f,bx)*k2,r.top+gY(o.K[c][f].v,bx,rg)*k2]; };   /* for the tests */
  E.cubeCutDbg=function(x,y){ var c=cutPick(x,y); return c?{v:c.v==null?null:c.v,again:cutPts.indexOf(c)>=0,pts:cutPts.length}:null; };   /* for the tests */
  E.cubeDbgRank=function(n){ if(!wrap) return null; var o=S.objs[S.objs.length-1]; return E.props.rank(silhouette(o),famKey(o),n||6,!!(o.prim&&o.prim.edited)); };   /* for the tests */
  E.cubeDbgKind=function(y,x,edited){ if(!wrap) return null; var o=S.objs[S.objs.length-1], ry0=ry, rx0=rx; ry=y; rx=x; var sil=silhouette(o), k=E.props.pick(sil,o.prim?o.prim.t:null,!!(edited||o.prim&&o.prim.edited)); ry=ry0; rx=rx0; return k; };   /* for the tests */
  E.cubeDbg=function(){ if(!wrap) return null; var g=gizmo(); return {gsel:gsel.slice(),at:function(i,fr){ var o=S.objs[i], T0=JSON.parse(JSON.stringify(trOf(o))); poseAt(o,fr); worldV(o); var c=cen(o.V); o.T=T0; worldV(o); return c; },mode:S.mode,tool:tool,osel:osel.slice(),csel:Object.keys(csel),R:R,g:g&&{sc:g.sc,ax:{x:g.ax.x.e,y:g.ax.y.e,z:g.ax.z.e},ring:{x:g.ax.x.ring[6],y:g.ax.y.ring[6],z:g.ax.z.ring[6]},G:g.G,A:g.A,ex:!!g.ex,e:g.e&&[g.e[0]/R,g.e[1]/R],scc:[g.sc[0]/R,g.sc[1]/R],pl:g.pl&&Object.keys(g.pl).reduce(function(acc,k){ acc[k]=g.pl[k].map(function(q){ return [q[0]/R,q[1]/R]; }); return acc; },{})},gzHover:gzHover,D:D,carrying:!!carry,dragging:!!(gzDrag||drag),sel:S.sel,nmats:mats().length,objs:S.objs.map(function(o){ return {id:o.id,name:o.name,vox:o.vox||null,model:o.model||null,pick2d:o.pick2d||null,fmats:o.fm?Object.keys(o.fm).reduce(function(a,f){ a[o.fm[f]]=1; return a; },{}):null,T:JSON.parse(JSON.stringify(trOf(o))),par:o.par,grp:!!o.grp,piv:pivotW(o),K:CH.filter(function(c2){ return chFrames(o,c2).length; }),V:o.V.length,F:o.F.length,c:o.V.length?cen(o.V):pivotW(o),kind:(E.props.pick&&E.props.pick(silhouette(o),o.prim?o.prim.t:null,!!(o.prim&&o.prim.edited)))||classify(silhouette(o)),sv:camO(o).map(function(c){ var q=scr(c); return [q[0]/R,q[1]/R,q[2]]; }),faces:o.F}; })}; };   /* read-only state for the tests */
})();
