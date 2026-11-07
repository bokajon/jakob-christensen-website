/* Pict, the small 2D drawing program (Jakob, 18.10.2026): loaded by the handbook only when it is needed (see the loader in index.html).
   Its styles come first and are added to the page when the file runs. Edit this file; tools/lazy_stamp.py updates its version in index.html. */
(function(){ var st=document.createElement("style"); st.id="pict-css"; st.textContent=".egg-pict .pt-3d{background:#f8eeda!important;color:#2a2118!important;border-color:#ccaf80!important;font-weight:800}\n"
  +".egg-pict .pt-3d:hover{background:#fff9ee!important}\n"
  +".egg-pict .pt-place{position:relative;justify-self:stretch;justify-content:center;background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important;font-weight:800;width:auto!important;height:auto!important;padding:6px 10px!important}\n"
  +".egg-pict .pt-hok{visibility:hidden;opacity:0;transition:opacity 1.6s ease-in-out,visibility 0s 1.6s}\n"
  +"@media (prefers-reduced-motion:reduce){.egg-pict .pt-hok{transition:none}}\n"
  +".egg-pict .pt-hok.on{visibility:visible;opacity:1;transition:opacity 1.6s ease-in-out,visibility 0s}\n"
  +".egg-pict .pt-hok:not(.on),.egg-pict .pt-hok:not(.on):disabled{opacity:0!important}\n"
  +".egg-pict .pt-win{height:100%;min-height:0}\n"
  +".egg-pict .pt-body{flex:1;min-height:0}\n"
  +".egg-pict .pt-side{min-height:0;overflow-y:auto;overscroll-behavior:contain}\n"
  +".egg-pict .pt-hello{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:5;width:min(380px,86%);padding:16px 18px;border-radius:14px;background:var(--surface);border:2px solid #f2c14e;box-shadow:0 12px 34px rgba(0,0,0,.35);display:grid;gap:8px}\n"
  +".egg-pict .pt-hello p{margin:0;font-size:.8rem;line-height:1.45;color:var(--ink-soft)}\n"
  +".egg-pict .pt-hello .pt-hh{font-size:.98rem;font-weight:800;color:var(--ink)}.egg-pict .pt-hello .pt-hc{font-size:.74rem;color:var(--ink-mute)}.egg-pict button.cp{all:unset;cursor:pointer;display:inline-grid;place-items:center;width:1.3em;height:1.3em;min-width:24px;min-height:24px;box-sizing:border-box;margin-left:.2em;color:var(--ink-mute);border-radius:6px;vertical-align:-.24em;position:relative;transition:background .15s,color .15s}.egg-pict button.cp svg{width:.95em;height:.95em}.egg-pict button.cp:hover{color:var(--c,var(--accent));background:color-mix(in srgb,var(--c,var(--accent)) 14%,transparent)}.egg-pict button.cp:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.egg-pict button.cp.ok{color:var(--good)}\n"
  +".egg-pict .pt-hok{justify-self:end;background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important;font-weight:800}\n"
  +".egg-pict[data-tool=pick] .pt-ov{cursor:copy}\n"
  +".egg-pict .pt-wbh{display:flex;align-items:center;justify-content:space-between;gap:6px}\n"
  +".egg-pict .pt-incarow{display:flex;flex-direction:column;gap:6px}\n"
  +".egg-pict .pt-incarow .pt-incad{align-self:center;padding:4px 12px!important}\n"
  +".egg-pict .pt-colsw{padding:3px 8px!important;font-size:.66rem;border-radius:999px!important}\n"
  +".egg-pict .pt-colsw[aria-pressed=true]{background:#f2c14e!important;color:#1b1f2a!important;border-color:#f2c14e!important}\n"
  +".egg-pict .pt-gal{list-style:none;margin:0;padding:0;display:grid;gap:6px;max-height:260px;overflow:auto}\n"
  +".egg-pict .pt-gi{display:grid;grid-template-columns:64px 1fr auto;align-items:center;gap:8px}\n"
  +".egg-pict .pt-gopen{padding:0!important;border-radius:7px;overflow:hidden;background:#fff!important}\n"
  +".egg-pict .pt-gopen img{display:block;width:64px;height:40px;object-fit:cover}\n"
  +".egg-pict .pt-gtxt{display:grid;min-width:0}\n"
  +".egg-pict .pt-gname{background:none!important;border:0!important;padding:0!important;justify-content:flex-start;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"
  +".egg-pict .pt-gtxt small{font-size:.66rem;color:var(--ink-mute)}\n"
  +".egg-pict .pt-gx{width:26px;height:26px;padding:0!important;justify-content:center}\n"
  +".egg-pict .pt-gempty{font-size:.72rem;line-height:1.4;color:var(--ink-soft)}\n"
  +".egg-pict .pt-box{position:relative}\n"
  +".egg-pict .pt-wbit{height:44px;padding:3px!important;justify-content:center;background:transparent!important;border:1px solid transparent!important}\n"
  +".egg-pict .pt-wbit:hover{border-color:color-mix(in srgb,var(--ink-mute) 60%,transparent)!important}\n"
  +".egg-pict .pt-wbit.first{border-color:color-mix(in srgb,#f2c14e 60%,transparent)!important;background:color-mix(in srgb,#f2c14e 10%,transparent)!important}\n"
  +".egg-pict .pt-wbit svg{width:100%!important;height:100%!important}\n"
  +".egg-pict .pt-wbit svg,.egg-pict .pt-g svg{stroke:none!important;stroke-width:0!important}\n"
  +".egg-pict .pt-chs{position:absolute;inset:0;z-index:6;display:flex;flex-direction:column;gap:6px;padding:10px;background:var(--surface);border-radius:12px;min-height:260px}\n"
  +".egg-pict .pt-chs[hidden]{display:none}\n"
  +".egg-pict .pt-ph{display:flex;align-items:center;justify-content:space-between;font-size:.8rem}\n"
  +".egg-pict .pt-px{width:26px;height:24px;padding:0!important;justify-content:center}\n"
  +".egg-pict .pt-q{box-sizing:border-box;width:100%;padding:4px 7px;border-radius:7px;border:1px solid var(--line);background:color-mix(in srgb,var(--line) 25%,var(--surface));color:var(--ink);font:inherit;font-size:.76rem}\n"
  +".egg-pict .pt-grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(52px,1fr));gap:4px;align-content:start}\n"
  +".egg-pict .pt-g{display:grid!important;justify-items:center;gap:1px;padding:3px 1px!important;background:transparent!important;border:1px solid transparent!important;border-radius:8px!important}\n"
  +".egg-pict .pt-g:hover{border-color:color-mix(in srgb,var(--ink-mute) 60%,transparent)!important}\n"
  +".egg-pict .pt-g.on{border-color:#f2c14e!important;background:color-mix(in srgb,#f2c14e 12%,transparent)!important}\n"
  +".egg-pict .pt-gs{display:grid;place-items:center;height:28px;width:100%}\n"
  +".egg-pict .pt-gs svg{width:100%!important;height:100%!important}\n"
  +".egg-pict .pt-g small{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.56rem;color:var(--ink-soft)}\n"
  +".egg-pict{position:fixed;inset:0;z-index:9500;display:grid;place-items:center;padding:16px;background:rgba(10,14,24,.45);opacity:0;transition:opacity .3s;font:600 .874rem/1.3 ui-monospace,Menlo,Consolas,monospace;color:var(--ink)}\n"
  +".egg-pict.in{opacity:1}\n"
  +".egg-pict .pt-win{width:min(1060px,100%);max-height:100%;display:flex;flex-direction:column;gap:10px}\n"
  +".egg-pict .pt-head,.egg-pict .pt-box,.egg-pict .pt-stage{background:var(--surface);border:2px solid #f2c14e;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.35)}\n"
  +".egg-pict .pt-head{display:flex;align-items:center;gap:8px;padding:8px 12px;flex-wrap:wrap}\n"
  +".egg-pict .pt-brand{display:inline-flex;align-items:center;gap:8px;font-size:1.05rem;font-weight:800}\n"
  +".egg-pict .pt-logo{width:34.5px;height:34.5px;flex:none}\n"
  +".egg-pict .pt-brand b{font-family:\"Plus Jakarta Sans\",system-ui,sans-serif;font-size:1.208rem;font-weight:650;letter-spacing:-.01em}\n"
  +".egg-pict button{font:inherit;color:var(--ink);background:color-mix(in srgb,var(--line) 25%,var(--surface));border:1px solid var(--line);border-radius:9px;padding:6px 10px;cursor:pointer;display:inline-flex;align-items:center;gap:6px}\n"
  +".egg-pict button:hover{border-color:color-mix(in srgb,var(--ink-mute) 60%,transparent)}\n"
  +".egg-pict button[aria-pressed=true]{background:color-mix(in srgb,#f2c14e 20%,var(--surface));border-color:#f2c14e}\n"
  +".egg-pict button:disabled{opacity:.45;cursor:default}\n"
  +".egg-pict button svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\n"
  +".egg-pict kbd{font:700 .66rem/1 inherit;color:var(--ink-mute)}\n"
  +".egg-pict .pt-wip{background:#f2c14e;color:#1b1f2a;border-color:#f2c14e;font-weight:900;padding:3px 9px;border-radius:999px}\n"
  +".egg-pict .pt-head .pt-wip{box-sizing:border-box;display:inline-grid;place-items:center;height:30px;padding:0 9px!important;border:0!important;border-radius:999px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.25);line-height:1}\n"
  +".egg-pict .pt-wipt{display:block;width:37px;height:37px;margin:-3.5px 0;overflow:visible;stroke:none!important;fill:currentColor}\n"
  +".egg-pict .pt-wipt text{stroke:none!important}\n"
  +".egg-pict .pt-head{box-sizing:border-box;min-height:51px;padding:5px 8px 5px 10px!important;border-width:1px!important;box-shadow:0 0 0 .5px var(--pict-line),0 10px 30px rgba(0,0,0,.35)}\n"
  +".egg-pict .pt-tools,.egg-pict .pt-shapes{display:inline-flex;gap:4px}\n"
  +".egg-pict .pt-shapes[hidden]{display:none}\n"
  +".egg-pict .pt-sp{flex:1}\n"
  +".egg-pict .pt-x{width:34px;justify-content:center;font-size:1.1rem}\n"
  +".egg-pict .pt-body{display:grid;grid-template-columns:1fr 230px;gap:10px;min-height:0}\n"
  +".egg-pict .pt-stage{position:relative;padding:10px;display:grid;align-content:start;align-self:start}\n"
  +".egg-pict .pt-stage canvas{width:100%;height:auto;aspect-ratio:720/450;grid-area:1/1;border-radius:8px}\n"
  +".egg-pict .pt-cv{background:#fff;background-image:linear-gradient(45deg,#eee 25%,transparent 25%,transparent 75%,#eee 75%),linear-gradient(45deg,#eee 25%,transparent 25%,transparent 75%,#eee 75%);background-size:16px 16px;background-position:0 0,8px 8px}\n"
  +".egg-pict .pt-ov{touch-action:none;cursor:crosshair}\n"
  +".egg-pict[data-tool=bucket] .pt-ov{cursor:cell}\n"
  +".egg-pict .pt-tip{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);margin:0;padding:6px 12px;border-radius:9px;background:rgba(27,31,42,.92);color:#f2f4f8;font-size:.78rem;pointer-events:none;max-width:90%}\n"
  +".egg-pict .pt-tip[hidden]{display:none}\n"
  +".egg-pict .pt-side{display:flex;flex-direction:column;gap:10px;overflow:auto}\n"
  +".egg-pict .pt-box{padding:10px 12px;display:grid;gap:7px}\n"
  +".egg-pict .pt-box h3{margin:0;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-mute)}\n"
  +".egg-pict .pt-sw{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}\n"
  +".egg-pict .pt-sw button{aspect-ratio:1;padding:0;background:var(--c);border-color:color-mix(in srgb,var(--ink-mute) 40%,transparent)}\n"
  +".egg-pict .pt-sw button[aria-pressed=true]{outline:2px solid #f2c14e;outline-offset:2px}\n"
  +".egg-pict .pt-pick{aspect-ratio:1;border-radius:9px;border:1px dashed var(--ink-mute);display:grid;place-items:center;overflow:hidden}\n"
  +".egg-pict .pt-pick input{width:100%;height:100%;border:0;padding:0;background:transparent;cursor:pointer}\n"
  +".egg-pict .pt-size{display:flex;align-items:center;gap:8px}\n"
  +".egg-pict .pt-size input{flex:1;accent-color:#f2c14e}\n"
  +".egg-pict .pt-size output{min-width:2ch;text-align:right}\n"
  +".egg-pict .pt-note{margin:0;font-size:.7rem;line-height:1.4;color:var(--ink-soft);font-weight:500}\n"
  +".egg-pict .pt-wbrow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px}\n"
  +".egg-pict .pt-wbit{display:grid;place-items:center;height:40px;padding:3px;border-radius:8px;border:1px solid transparent}\n"
  +".egg-pict .pt-wbit.first{border-color:color-mix(in srgb,#f2c14e 60%,transparent);background:color-mix(in srgb,#f2c14e 10%,transparent)}\n"
  +".egg-pict .pt-wbit svg{max-width:100%;max-height:100%}\n"
  +".egg-pict .pt-wbnames{font-size:.7rem;color:var(--ink-soft);text-align:center}\n"
  +".egg-pict .pt-wbnames b{color:var(--ink)}\n"
  +".egg-pict .pt-row{display:flex;gap:5px;flex-wrap:wrap}\n"
  +".egg-pict .pt-grip{justify-content:center;background:#f2c14e;color:#1b1f2a;border-color:#f2c14e;font-weight:800;cursor:grab;touch-action:none}\n"
  +".egg-pict .pt-fine{margin:0;text-align:center;font-size:.72rem;color:var(--ink-mute)}\n"
  +"html.egg-carrying .egg-pict{pointer-events:none}\n"
  +"html.egg-carrying .egg-pict .pt-win{opacity:.35}\n"
  +"@media (max-width:900px){.egg-pict .pt-body{grid-template-columns:1fr}}\n"
  +".egg-pict .pt-place{display:flex!important;align-items:center;justify-content:center!important;text-align:center}\n"
  +".egg-pict{--pict-hi:#f8eeda;--pict-line:#ccaf80;--pict-ink:#2a2118}\n"
  +"@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]) .egg-pict{--pict-line:#f8eeda}}\n"
  +":root[data-theme=\"dark\"] .egg-pict{--pict-line:#f8eeda}\n"
  +".egg-pict .pt-head,.egg-pict .pt-box,.egg-pict .pt-stage{border-color:var(--pict-line)!important}\n"
  +".egg-pict .pt-hello{border-color:var(--pict-line)!important}\n"
  +".egg-pict .pt-place,.egg-pict .pt-hok,.egg-pict .pt-grip,.egg-pict .pt-inca,.egg-pict .pt-wip,.egg-pict .pt-colsw[aria-pressed=true]{background:var(--pict-hi)!important;color:var(--pict-ink)!important;border-color:var(--pict-line)!important}\n"
  +".egg-pict button[aria-pressed=true]{background:color-mix(in srgb,var(--pict-hi) 22%,var(--surface))!important;border-color:var(--pict-line)!important}\n"
  +".egg-pict .pt-colsw[aria-pressed=true]{background:var(--pict-hi)!important}\n"
  +".egg-pict .pt-wbit.first{border-color:color-mix(in srgb,var(--pict-line) 75%,transparent)!important;background:color-mix(in srgb,var(--pict-hi) 12%,transparent)!important}\n"
  +".egg-pict .pt-g.on{border-color:var(--pict-line)!important;background:color-mix(in srgb,var(--pict-hi) 14%,transparent)!important}\n"
  +".egg-pict .pt-sw button[aria-pressed=true]{outline-color:var(--pict-line)!important}\n"
  +".egg-pict .pt-size input{accent-color:var(--pict-line)!important}\n"
  +".egg-pict :focus-visible{outline-color:var(--pict-line)}\n"
  +".egg-pict .pt-wbh{flex-wrap:wrap;row-gap:4px}\n"
  +".egg-pict .pt-wbh h3{white-space:nowrap}\n"
  +"/* polish pass (Jakob, 19.10.2026) */\n"
  +".egg-pict .pt-box{margin:0}\n"
  +".egg-pict .pt-fine{justify-self:center;align-self:center;width:max-content;max-width:100%;padding:3px 12px;border-radius:999px;background:var(--surface);box-shadow:0 2px 8px rgba(0,0,0,.15)}\n"
  +".egg-pict .pt-acts{display:inline-flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in srgb,var(--line) 32%,transparent);flex:none}\n"
  +".egg-pict .pt-acts button{display:inline-flex;align-items:center;gap:6px;padding:6px 9px;font-size:.8rem}\n"
  +".egg-pict .pt-acts svg{width:16px;height:16px;flex:none}\n"
  +"@media (max-width:1499px){.egg-pict .pt-acts .pt-al{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}.egg-pict .pt-acts button{padding:6px 8px}}\n"
  +".egg-pict .pt-box .pt-place{background:#9a3f24!important;color:#fbe7c6!important;border-color:#7a2f18!important;min-height:40px;font-size:.88rem;box-shadow:0 4px 14px rgba(154,63,36,.3)}\n"
  +".egg-pict .pt-box .pt-place:hover{background:#a54a29!important}.egg-pict .pt-box .pt-place:disabled{opacity:.45;box-shadow:none}\n"
  +".egg-pict .pt-box .pt-grip,.egg-pict .pt-box .pt-inca{background:transparent!important;color:var(--ink-soft)!important;border:1px dashed var(--pict-line)!important;font-weight:700;display:inline-flex;align-items:center;justify-content:center;gap:6px}\n"
  +"@media (max-width:900px){.egg-pict{place-items:start stretch;grid-template-columns:minmax(0,1fr);overflow-y:auto;padding:10px}.egg-pict .pt-win{width:100%;min-width:0}.egg-pict .pt-win{height:auto;max-height:none}.egg-pict .pt-side{overflow:visible}.egg-pict .pt-head{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}.egg-pict .pt-head>*{flex:none}.egg-pict .pt-head .pt-x{position:sticky;right:0;background:var(--surface)}.egg-pict .pt-sw{grid-template-columns:repeat(10,1fr);gap:4px}}\n"
  +"/* phones (Jakob, 19.10.2026): the header wraps into rows instead of scrolling, so the close button no longer covers the tools and Undo, Clear, Save and PNG are in reach */\n"
  +"@media (max-width:640px){.egg-pict .pt-head{flex-wrap:wrap;overflow:visible;row-gap:6px}.egg-pict .pt-head .pt-brand,.egg-pict .pt-head .pt-wip,.egg-pict .pt-head .pt-3d{order:1}.egg-pict .pt-head .pt-x{order:2;position:static;margin-left:auto;background:none}.egg-pict .pt-head .pt-tools{order:3}.egg-pict .pt-head .pt-acts{order:4}.egg-pict .pt-head .pt-sp{display:none}}\n"
  +"@media (pointer:coarse){.egg-pict .pt-colsw{min-height:30px}}"; document.head.appendChild(st); })();

/* Pict (Jakob, 18.10.2026): a small 2D drawing program, the sister of Inca. Picture, paint, and an ancient people: not to be confused with the Picts. Draw, Erase, Line and Shape, Bucket, color and size,
   undo and redo, "Would become" like Inca's Silhouette window, and a grip to drag the drawing into the Handbook, where it lands as a 2D object of its own.
   Built as a module (E.pict: open, close, toggle, fromCode) so it can move inside Inca later. */
(function(){
  var E=window.sbhEgg; if(!E) return; var root=document.documentElement, wrap=null, cv, ov, g, og, W=720, H=450, tool="draw", shape="line", size=8, col="#f2c14e", undo=[], redo=[], stroke=null, carry=null, wbT=0, wbSig="";
  var SW=["#f2c14e","#e2574c","#4a8fe7","#5bb46a","#f4f1ea","#1b1f2a","#a86a34","#9aa3b2"];
  try{ var st=JSON.parse(localStorage.getItem("sbh-pict-set")||"null"); if(st){ size=st.size||size; col=st.col||col; tool=st.tool||tool; shape=st.shape||shape; pick=st.pick||null; } }catch(e){}
  function q(s){ return wrap?wrap.querySelector(s):null; } function qa(s){ return wrap?[].slice.call(wrap.querySelectorAll(s)):[]; }
  function tick(){ if(E.tick) E.tick(900,.045); }
  function toast(t){ var el=q(".pt-tip"); if(!el) return; el.textContent=t; el.hidden=false; clearTimeout(toast.t); toast.t=setTimeout(function(){ el.hidden=true; },3200); }
  function saveSet(){ try{ localStorage.setItem("sbh-pict-set",JSON.stringify({size:size,col:col,tool:tool,shape:shape,pick:pick,col3:colOn})); }catch(e){} }
  function saveDraw(){ try{ localStorage.setItem("sbh-pict",cv.toDataURL("image/png")); }catch(e){} }
  function ICON(n){ return {draw:'<path d="M4 20l4-1 10-10-3-3L5 16z"/><path d="M13 7l3 3"/>',erase:'<path d="M4 15l8-8 6 6-5 5H8z"/><path d="M10 18h10"/>',shape:'<rect x="3" y="4" width="8" height="8" rx="1"/><circle cx="17" cy="8" r="4"/><path d="M3 19h18"/>',
      bucket:'<path d="M5 11l7-7 7 7-7 7z"/><path d="M19 13c1.3 2 2 3.2 2 4.2a2 2 0 0 1-4 0c0-1 .7-2.2 2-4.2z"/>',undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',redo:'<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',clear:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
      grip:'<path d="M8 11V5a1.5 1.5 0 0 1 3 0v5M11 10V4a1.5 1.5 0 0 1 3 0v6M14 10V6a1.5 1.5 0 0 1 3 0v6"/><path d="M8 11v3l-3-2a1.4 1.4 0 0 0-2 2l4 5c1.5 2 3 2.5 5 2.5h2c3 0 5-2 5-5v-5"/>',cube:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',save:'<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>',pick:'<path d="M14.5 4.5l5 5M12 7l5 5-8.5 8.5H4v-4.5z"/><path d="M16 3a2.1 2.1 0 0 1 3 3l-2 2-3-3z"/>',dl:'<path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 19h14"/>'}[n]||""; }
  function svg(n){ return '<svg viewBox="0 0 24 24" aria-hidden="true">'+ICON(n)+'</svg>'; }
  function build(){ wrap=document.createElement("div"); wrap.className="egg-pict"; wrap.setAttribute("role","dialog"); wrap.setAttribute("aria-label","Pict, a 2D drawing program");
    wrap.innerHTML='<div class="pt-win"><div class="pt-head"><span class="pt-brand"><svg class="pt-logo" viewBox="0 0 40 40" aria-hidden="true"><defs><clipPath id="pt-wall"><rect width="40" height="40" rx="10"/></clipPath><filter id="pt-grain" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" seed="7"/><feColorMatrix values="0 0 0 0 .52 0 0 0 0 .4 0 0 0 0 .25 1.7 0 0 0 -.72"/></filter><filter id="pt-grain-m" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency=".22" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 .62 0 0 0 0 .5 0 0 0 0 .32 1.4 0 0 0 -.62"/></filter></defs><g clip-path="url(#pt-wall)"><rect width="40" height="40" rx="10" fill="#f7ead3"/><ellipse cx="9" cy="8" rx="10" ry="5.5" fill="#fff8ea" opacity=".75"/><ellipse cx="33" cy="31" rx="10" ry="6.5" fill="#e7d4b1" opacity=".55"/><ellipse cx="18" cy="37" rx="17" ry="4.5" fill="#dfc8a0" opacity=".5"/><rect width="40" height="40" filter="url(#pt-grain-m)" opacity=".22"/><rect width="40" height="40" filter="url(#pt-grain)" opacity=".3"/><path d="M2.6 12.2c2.6.8 3.9 2.6 3.2 5.4M34 2.5c-.6 2.2-.1 3.6 1.6 4.6" fill="none" stroke="#c8b089" stroke-width=".6" stroke-linecap="round" opacity=".8"/><g fill="#c4a980" opacity=".55"><circle cx="15" cy="5" r=".4"/><circle cx="24" cy="33.5" r=".45"/><circle cx="37" cy="21" r=".35"/><circle cx="4.5" cy="30" r=".4"/></g><path d="M8.2 17.4c-1.6.9-2.6 3.1-2.9 6.2" fill="none" stroke="#1d1a17" stroke-width="1.7" stroke-linecap="round"/><path d="M8 19c0-4.5 5-6 11-5.5 4 .3 6.5-.5 8.5-2s4-1.9 6-1.1c2.1.8 3.1 2.4 2.9 4-.2 1.4-1.4 2-2.8 1.8-1.6-.2-2.8.4-3.6 1.8-1.2 2.4-3 4.6-6 5.6-4 1.4-10.5 1.4-13.5-.2C8.8 22.5 8 20.8 8 19z" fill="#a65f2a"/><path d="M11.2 22.2c3.6 1.6 9.4 1.8 13 .4-1.6 1.3-4 1.9-7 1.9-2.6 0-4.8-.6-6-2.3z" fill="#f0d3a5" opacity=".9"/><path d="M23.8 13.6c2.2-.6 4.8-2 6.8-3.6 1-.7 2-.8 2.8-.4" fill="none" stroke="#1d1a17" stroke-width="1.7" stroke-linecap="round"/><path d="M24.8 13.2l.5-2.2M26.4 12.5l.7-2.4M28 11.6l.6-2.4M29.6 10.6l.5-2.2" fill="none" stroke="#1d1a17" stroke-width="1" stroke-linecap="round"/><ellipse cx="35.3" cy="13.9" rx="1.5" ry="1.7" fill="#1d1a17" opacity=".92"/><g fill="none" stroke="#1d1a17" stroke-linecap="round" stroke-linejoin="round"><path d="M11.6 22.8c-1.5 1.9-3.5 4-5.9 6.2" stroke-width="1.4"/><path d="M14.6 24c-.2 2.4-.3 4.8-.9 7.2" stroke-width="1.3"/><path d="M27.2 22.4c.3 2.6.6 5.4.5 8.4" stroke-width="1.3"/><path d="M28.8 21c1.3 2.5 2.7 5.3 3.9 8.3" stroke-width="1.4"/></g><g fill="#1d1a17"><ellipse cx="5.4" cy="29.4" rx="1.1" ry=".7" transform="rotate(-38 5.4 29.4)"/><ellipse cx="13.5" cy="31.6" rx="1" ry=".65"/><ellipse cx="27.6" cy="31.2" rx="1" ry=".65"/><ellipse cx="32.9" cy="29.7" rx="1.1" ry=".7" transform="rotate(22 32.9 29.7)"/></g></g></svg><b>Pict</b></span><button type="button" class="pt-wip" title="Work in Progress: a first version" aria-label="Work in Progress"><svg class="pt-wipt" viewBox="0 0 24 24" aria-hidden="true"><text x="12" y="15.4" text-anchor="middle" font-size="9.6" font-weight="900" letter-spacing=".2" fill="currentColor" font-family="system-ui,sans-serif">WIP</text></svg></button><button type="button" class="pt-3d" title="Inca: the 3D program">'+svg("cube")+' Inca</button>'
      +'<span class="pt-tools" role="group" aria-label="Tools"><button type="button" data-t="draw" title="Draw (B)">'+svg("draw")+'<kbd>B</kbd></button><button type="button" data-t="erase" title="Erase (E)">'+svg("erase")+'<kbd>E</kbd></button><button type="button" data-t="shape" title="Line and shape (L): drag to draw a line, a box or a circle">'+svg("shape")+'<kbd>L</kbd></button><button type="button" data-t="bucket" title="Bucket (G): fill an area with the color">'+svg("bucket")+'<kbd>G</kbd></button><button type="button" data-t="pick" title="Color picker (I): click the drawing to take a color; Alt + click does it with any tool">'+svg("pick")+'<kbd>I</kbd></button></span>'
      +'<span class="pt-shapes" role="group" aria-label="Shape"><button type="button" data-s="line">Line</button><button type="button" data-s="rect">Box</button><button type="button" data-s="ellipse">Circle</button></span>'
      +'<span class="pt-acts" role="group" aria-label="Edit"><button type="button" class="pt-undo" title="Undo (Ctrl+Z)">'+svg("undo")+'<span class="pt-al">Undo</span></button><button type="button" class="pt-redo" title="Redo (Ctrl+Y)">'+svg("redo")+'<span class="pt-al">Redo</span></button><button type="button" class="pt-clear" title="Clear the drawing">'+svg("clear")+'<span class="pt-al">Clear</span></button><button type="button" class="pt-save" title="Save the drawing to the gallery (Ctrl+S)">'+svg("save")+'<span class="pt-al">Save</span></button><button type="button" class="pt-dl" title="Download the drawing as a PNG file">'+svg("dl")+'<span class="pt-al">PNG</span></button></span>'
      +'<span class="pt-sp"></span><button type="button" class="pt-x" aria-label="Close">\u00d7</button></div>'
      +'<div class="pt-body"><div class="pt-stage"><canvas class="pt-cv" width="'+W+'" height="'+H+'"></canvas><canvas class="pt-ov" width="'+W+'" height="'+H+'"></canvas><p class="pt-tip" hidden></p></div>'
      +'<div class="pt-side"><section class="pt-box"><h3>Color</h3><div class="pt-sw">'+SW.map(function(c){ return '<button type="button" data-c="'+c+'" style="--c:'+c+'" aria-label="'+c+'"></button>'; }).join("")+'<label class="pt-pick" title="Any color"><input type="color" value="'+col+'" aria-label="Any color"></label></div></section>'
      +'<section class="pt-box"><h3>Size</h3><label class="pt-size"><input type="range" min="1" max="60" value="'+size+'" aria-label="Brush size"><output>'+size+'</output></label><p class="pt-note">For drawing, erasing and the shapes. [ and ] change it too.</p></section>'
      +'<section class="pt-box"><div class="pt-wbh"><h3>Would become</h3><button type="button" class="pt-colsw" aria-pressed="false" title="Match Colors: the suggestions also consider the colors you used">Match Colors</button></div><div class="pt-wb"><p class="pt-note">Draw something: the 2D objects that look like it appear here.</p></div><button type="button" class="pt-place" data-tip="Takes your drawing to the Handbook: move the mouse and click to place it. You can also press &quot;Drag to Handbook&quot; and drag it there yourself.">Place Object</button><button type="button" class="pt-grip" title="Press here and drag your drawing onto a line in the Handbook">'+svg("grip")+' Drag to Handbook</button><span class="pt-incarow"><button type="button" class="pt-inca" title="Opens the best match in Inca as a 3D model">'+svg("cube")+' Open in Inca</button><button type="button" class="pt-colsw pt-incad" aria-pressed="false" title="Your drawing: open the drawing itself in Inca, one cube per pixel, instead of the 2D object it would become">Your drawing</button></span></section>'
      +'<section class="pt-box pt-galbox"><h3>Gallery</h3><ul class="pt-gal" aria-label="Saved drawings"></ul></section></div></div>'
      +'<p class="pt-fine">Pict. Not to be confused with the Picts.</p></div>';
    document.body.appendChild(wrap); cv=q(".pt-cv"); ov=q(".pt-ov"); g=cv.getContext("2d",{willReadFrequently:true}); og=ov.getContext("2d");
    try{ var d=localStorage.getItem("sbh-pict"); if(d){ var im=new Image(); im.onload=function(){ g.drawImage(im,0,0); wouldBecome(); }; im.src=d; } }catch(e){}
    qa(".pt-tools button").forEach(function(b){ b.addEventListener("click",function(){ setTool(b.getAttribute("data-t")); }); });
    qa(".pt-shapes button").forEach(function(b){ b.addEventListener("click",function(){ shape=b.getAttribute("data-s"); paintUI(); saveSet(); }); });
    qa(".pt-sw button").forEach(function(b){ b.addEventListener("click",function(){ setCol(b.getAttribute("data-c")); }); }); q(".pt-pick input").addEventListener("input",function(){ setCol(this.value); });
    q(".pt-size input").addEventListener("input",function(){ size=+this.value; q(".pt-size output").textContent=size; saveSet(); });
    q(".pt-undo").addEventListener("click",doUndo); q(".pt-redo").addEventListener("click",doRedo); q(".pt-clear").addEventListener("click",function(){ if(blank()) return; push(); g.clearRect(0,0,W,H); pick=null; saveSet(); saveDraw(); wouldBecome(); toast("Cleared. Undo brings it back."); });
    q(".pt-x").addEventListener("click",close); q(".pt-3d").addEventListener("click",function(){ close(); if(E.cubeOpen) E.cubeOpen(); });
    q(".pt-wip").addEventListener("click",function(){ toast("A first version: draw, erase, line and shape, bucket, color, size, undo, and the drag into the Handbook."); });
    galEvents(); var csw=q(".pt-colsw"); csw.setAttribute("aria-pressed",colOn?"true":"false"); csw.addEventListener("click",function(){ colOn=!colOn; csw.setAttribute("aria-pressed",colOn?"true":"false"); saveSet(); toast(colOn?"Match Colors: on. The suggestions also look at your colors.":"Match Colors: off. Only the shape counts."); wouldBecome(true); });
    q(".pt-grip").addEventListener("pointerdown",startCarry); q(".pt-place").addEventListener("click",placeNow); q(".pt-inca").addEventListener("click",toInca); q(".pt-incad").addEventListener("click",function(){ this.setAttribute("aria-pressed",this.getAttribute("aria-pressed")==="true"?"false":"true"); incaTip(); }); q(".pt-wb").addEventListener("click",function(e){ if(e.target.closest(".pt-wbit")) pickOpen(true); });
    ov.addEventListener("pointerdown",down); ov.addEventListener("pointermove",move); window.addEventListener("pointerup",up); window.addEventListener("pointercancel",up); window.addEventListener("keydown",key,true);
    wrap.addEventListener("pointerdown",function(e){ if(e.button!==0) return; var b=e.target.closest("button"); if(b&&!b.disabled) tick(); },true);
    paintUI(); }
  function setTool(t){ tool=t; paintUI(); saveSet(); } function setCol(c){ col=c; q(".pt-pick input").value=c; paintUI(); saveSet(); }
  function paintUI(){ qa(".pt-tools button").forEach(function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-t")===tool?"true":"false"); }); qa(".pt-shapes button").forEach(function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-s")===shape?"true":"false"); }); q(".pt-shapes").hidden=tool!=="shape";
    qa(".pt-sw button").forEach(function(b){ b.setAttribute("aria-pressed",b.getAttribute("data-c").toLowerCase()===col.toLowerCase()?"true":"false"); }); q(".pt-undo").disabled=!undo.length; q(".pt-redo").disabled=!redo.length; wrap.setAttribute("data-tool",tool); }
  function pt(e){ var r=ov.getBoundingClientRect(); return [(e.clientX-r.left)*W/r.width,(e.clientY-r.top)*H/r.height]; }
  function push(){ undo.push(g.getImageData(0,0,W,H)); if(undo.length>25) undo.shift(); redo.length=0; paintUI(); }
  function doUndo(){ if(!undo.length) return; redo.push(g.getImageData(0,0,W,H)); g.putImageData(undo.pop(),0,0); paintUI(); saveDraw(); wouldBecome(); }
  function doRedo(){ if(!redo.length) return; undo.push(g.getImageData(0,0,W,H)); g.putImageData(redo.pop(),0,0); paintUI(); saveDraw(); wouldBecome(); }
  function blank(){ var d=g.getImageData(0,0,W,H).data; for(var i=3;i<d.length;i+=4*7) if(d[i]) return false; return true; }
  function line(ctx,a,b,erase){ ctx.save(); ctx.lineCap="round"; ctx.lineJoin="round"; ctx.lineWidth=size; ctx.strokeStyle=col; if(erase) ctx.globalCompositeOperation="destination-out"; ctx.beginPath(); ctx.moveTo(a[0],a[1]); ctx.lineTo(b[0],b[1]); ctx.stroke(); ctx.restore(); }
  function shapeDraw(ctx,a,b){ ctx.save(); ctx.lineCap="round"; ctx.lineJoin="round"; ctx.lineWidth=size; ctx.strokeStyle=col; ctx.beginPath();
    if(shape==="line"){ ctx.moveTo(a[0],a[1]); ctx.lineTo(b[0],b[1]); } else if(shape==="rect"){ ctx.rect(Math.min(a[0],b[0]),Math.min(a[1],b[1]),Math.abs(b[0]-a[0]),Math.abs(b[1]-a[1])); } else { ctx.ellipse((a[0]+b[0])/2,(a[1]+b[1])/2,Math.abs(b[0]-a[0])/2,Math.abs(b[1]-a[1])/2,0,0,Math.PI*2); }
    ctx.stroke(); ctx.restore(); }
  var lastPt=null;
  function pickAt(p){ var d=g.getImageData(Math.max(0,Math.min(W-1,Math.round(p[0]))),Math.max(0,Math.min(H-1,Math.round(p[1]))),1,1).data; if(d[3]<20){ toast("Nothing there to pick: the color stays."); return; } var hx="#"+[d[0],d[1],d[2]].map(function(v){ return ("0"+v.toString(16)).slice(-2); }).join(""); setCol(hx); toast("Color picked: "+hx+"."); }
  function down(e){ if(e.button!==0||carry) return; e.preventDefault(); ov.setPointerCapture(e.pointerId); var p=pt(e);
    if(tool==="pick"||e.altKey){ pickAt(p); return; }   /* the color picker (18.10.2026) */
    if(e.shiftKey&&lastPt&&(tool==="draw"||tool==="erase")){ push(); line(g,lastPt,p,tool==="erase"); lastPt=p; saveDraw(); wouldBecome(); return; }   /* Shift + click: a straight line from the last point */
    if(tool==="bucket"){ push(); fill(Math.round(p[0]),Math.round(p[1])); saveDraw(); wouldBecome(colOn); return; }
    push(); stroke={a:p,last:p}; if(tool==="draw"||tool==="erase") line(g,p,[p[0]+.01,p[1]],tool==="erase"); }
  function move(e){ if(!stroke) return; var p=pt(e); if(tool==="draw"||tool==="erase"){ line(g,stroke.last,p,tool==="erase"); stroke.last=p; } else if(tool==="shape"){ og.clearRect(0,0,W,H); shapeDraw(og,stroke.a,p); } }
  function up(e){ if(carry){ if(carry.click) return; endCarry(e); return; } if(!stroke) return; var p=stroke.last; lastPt=stroke.last; if(tool==="shape"){ p=pt(e); og.clearRect(0,0,W,H); shapeDraw(g,stroke.a,p); } stroke=null; saveDraw(); wouldBecome(); }
  /* the bucket: a flood fill with a little tolerance, so soft edges fill too */
  function fill(x0,y0){ if(x0<0||y0<0||x0>=W||y0>=H) return; var im=g.getImageData(0,0,W,H), d=im.data, i0=(y0*W+x0)*4, t=[d[i0],d[i0+1],d[i0+2],d[i0+3]], c=hex(col), seen=new Uint8Array(W*H), st=[y0*W+x0], tol=40;
    var same=function(i){ var k=i*4; if(d[k+3]<8&&t[3]<8) return true; return Math.abs(d[k]-t[0])+Math.abs(d[k+1]-t[1])+Math.abs(d[k+2]-t[2])+Math.abs(d[k+3]-t[3])<=tol; };
    while(st.length){ var i=st.pop(); if(seen[i]||!same(i)) continue; var x=i%W, y=(i-x)/W, l=x, r=x; while(l>0&&!seen[i-(x-l)-1]&&same(i-(x-l)-1)) l--; while(r<W-1&&!seen[i+(r-x)+1]&&same(i+(r-x)+1)) r++;
      for(var xx=l;xx<=r;xx++){ var j=y*W+xx; seen[j]=1; var k=j*4; d[k]=c[0]; d[k+1]=c[1]; d[k+2]=c[2]; d[k+3]=255; if(y>0&&!seen[j-W]) st.push(j-W); if(y<H-1&&!seen[j+W]) st.push(j+W); } }
    g.putImageData(im,0,0); }
  function hex(h){ return [parseInt(h.substr(1,2),16),parseInt(h.substr(3,2),16),parseInt(h.substr(5,2),16)]; }
  /* the drawing as a pixel sprite: trimmed, shrunk to at most 44 x 32, up to 50 colors, in the library's own compact form */
  function toCode(){ var im=g.getImageData(0,0,W,H), d=im.data, x0=W,y0=H,x1=-1,y1=-1; for(var y=0;y<H;y++) for(var x=0;x<W;x++) if(d[(y*W+x)*4+3]>40){ if(x<x0) x0=x; if(x>x1) x1=x; if(y<y0) y0=y; if(y>y1) y1=y; } if(x1<0) return null;
    var bw=x1-x0+1, bh=y1-y0+1, sc=Math.min(44/bw,32/bh,1), gw=Math.max(1,Math.round(bw*sc)), gh=Math.max(1,Math.round(bh*sc)), cnt={}, cells=[];
    for(var gy=0;gy<gh;gy++){ var row=[]; for(var gx=0;gx<gw;gx++){ var sx0=x0+Math.floor(gx/sc), sy0=y0+Math.floor(gy/sc), sx1=Math.min(x1,x0+Math.floor((gx+1)/sc)-1), sy1=Math.min(y1,y0+Math.floor((gy+1)/sc)-1), r=0,gg=0,b=0,a=0,n=0;   /* the average of the source pixels under the cell */
        for(var yy=sy0;yy<=Math.max(sy0,sy1);yy++) for(var xx=sx0;xx<=Math.max(sx0,sx1);xx++){ var k=(yy*W+xx)*4; if(d[k+3]>40){ r+=d[k]; gg+=d[k+1]; b+=d[k+2]; a++; } n++; }
        if(a*2<n||!a){ row.push(null); continue; } var c="#"+[r/a,gg/a,b/a].map(function(v){ v=Math.round(v/8)*8; return ("0"+Math.min(255,v).toString(16)).slice(-2); }).join(""); cnt[c]=(cnt[c]||0)+1; row.push(c); } cells.push(row); }
    var pal=Object.keys(cnt).sort(function(x,y){ return cnt[y]-cnt[x]; }).slice(0,50), near=function(c){ if(pal.indexOf(c)>=0) return c; var a1=hex(c), best=pal[0], bd=1e9; pal.forEach(function(p2){ var b2=hex(p2), dd=Math.abs(a1[0]-b2[0])+Math.abs(a1[1]-b2[1])+Math.abs(a1[2]-b2[2]); if(dd<bd){ bd=dd; best=p2; } }); return best; };
    var CODES="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", rows=cells.map(function(row){ var out="", x=0; while(x<row.length){ var c=row[x]?near(row[x]):null, x2=x; while(x2+1<row.length&&(row[x2+1]?near(row[x2+1]):null)===c) x2++; out+=(c?CODES[pal.indexOf(c)]:".")+(x2-x+1>1?(x2-x+1):""); x=x2+1; } return out; });
    return gw+","+gh+"|"+pal.map(function(c){ return c.slice(1); }).join(",")+"|"+rows.join("/"); }
  /* the outline for the recognition: the drawing's alpha, 64 pixels wide */
  function sil(){ var im=g.getImageData(0,0,W,H), d=im.data, x0=W,y0=H,x1=-1,y1=-1; for(var y=0;y<H;y++) for(var x=0;x<W;x++) if(d[(y*W+x)*4+3]>40){ if(x<x0) x0=x; if(x>x1) x1=x; if(y<y0) y0=y; if(y>y1) y1=y; } if(x1<0) return null;
    var bw=x1-x0+1, bh=y1-y0+1, sc=63/Math.max(bw,bh), gw=Math.max(2,Math.round(bw*sc)+1), gh=Math.max(2,Math.round(bh*sc)+1), M=new Uint8Array(gw*gh);
    for(var y2=y0;y2<=y1;y2++) for(var x2=x0;x2<=x1;x2++) if(d[(y2*W+x2)*4+3]>40) M[Math.min(gh-1,Math.round((y2-y0)*sc))*gw+Math.min(gw-1,Math.round((x2-x0)*sc))]=1; return {M:M,w:gw,h:gh,ring:false}; }
  /* the gallery (Jakob, 18.10.2026), like Inca's: Save keeps the drawing with a thumbnail, a name and the date; Open loads it (undo brings back what was there),
     a double-click on the name renames it, the x deletes it; up to 40, in this browser */
  var gallery=[]; try{ gallery=JSON.parse(localStorage.getItem("sbh-pict-gallery")||"[]")||[]; }catch(e){ gallery=[]; }
  function galStore(){ try{ localStorage.setItem("sbh-pict-gallery",JSON.stringify(gallery)); return true; }catch(e){ return false; } }
  function thumbOf(){ var t=document.createElement("canvas"); t.width=144; t.height=90; var tg=t.getContext("2d"); tg.fillStyle="#fff"; tg.fillRect(0,0,144,90); tg.drawImage(cv,0,0,144,90); return t.toDataURL("image/jpeg",.8); }
  function galSave(){ if(blank()){ toast("Nothing to save yet: draw something first."); return; } var n=1; gallery.forEach(function(x){ var m=/^Drawing (\d+)$/.exec(x.name); if(m) n=Math.max(n,+m[1]+1); });
    var it={id:Date.now(),name:"Drawing "+n,at:new Date().toISOString().slice(0,10),thumb:thumbOf(),png:cv.toDataURL("image/png")}; gallery.unshift(it); if(gallery.length>40) gallery.length=40;
    if(!galStore()){ gallery.shift(); toast("The gallery is full: delete a drawing there first."); return; } paintGal(); toast("Saved as "+it.name+" in the gallery."); }
  function galOpen(it){ var im=new Image(); im.onload=function(){ push(); g.clearRect(0,0,W,H); g.drawImage(im,0,0,W,H); pick=null; saveSet(); saveDraw(); wouldBecome(true); toast("Opened "+it.name+". Undo brings back what was there."); }; im.src=it.png; }
  function paintGal(){ var ul=q(".pt-gal"); if(!ul) return; ul.innerHTML=gallery.length?gallery.map(function(it){ return '<li class="pt-gi" data-id="'+it.id+'"><button type="button" class="pt-gopen" title="Open '+it.name.replace(/"/g,"&quot;")+'"><img alt="" src="'+it.thumb+'"></button><span class="pt-gtxt"><button type="button" class="pt-gname" title="Double-click to rename">'+it.name.replace(/</g,"&lt;")+'</button><small>'+it.at+'</small></span><button type="button" class="pt-gx" aria-label="Delete '+it.name.replace(/"/g,"&quot;")+'" title="Delete">\u00d7</button></li>'; }).join(""):'<li class="pt-gempty">Nothing saved yet. Save keeps the drawing you have now.</li>'; }
  function galEvents(){ var ul=q(".pt-gal"); var find=function(e){ var li=e.target.closest(".pt-gi"); return li?gallery.filter(function(x){ return x.id===+li.getAttribute("data-id"); })[0]:null; };
    ul.addEventListener("click",function(e){ var it=find(e); if(!it) return; if(e.target.closest(".pt-gx")){ gallery.splice(gallery.indexOf(it),1); galStore(); paintGal(); toast(it.name+" deleted."); } else if(e.target.closest(".pt-gopen")) galOpen(it); });
    ul.addEventListener("dblclick",function(e){ if(!e.target.closest(".pt-gname")) return; var it=find(e); if(!it) return; var n=prompt("Name",it.name); if(n&&n.trim()){ it.name=n.trim().slice(0,40); galStore(); paintGal(); } });
    q(".pt-save").addEventListener("click",galSave); q(".pt-dl").addEventListener("click",function(){ if(blank()){ toast("Nothing to download yet: draw something first."); return; } var a=document.createElement("a"); a.download="pict-drawing.png"; a.href=cv.toDataURL("image/png"); document.body.appendChild(a); a.click(); a.remove(); toast("Downloaded as pict-drawing.png."); }); paintGal(); }
  /* Would become (Jakob, 18.10.2026): the first picture is what the drawing becomes (itself, as the pixel version it lands as, or your choice), then the two best look-alikes;
     a click on any of them opens a picker like Inca's: "Your drawing", the 30 best look-alikes, or any object by name */
  var pick=null, wbRank=[], colOn=true; try{ var st2=JSON.parse(localStorage.getItem("sbh-pict-set")||"null"); if(st2&&typeof st2.col3==="boolean") colOn=st2.col3; }catch(e){}
  /* the drawing's colors as shares of the color families (the same as the objects'), from every other pixel */
  function drawHist(){ var d=g.getImageData(0,0,W,H).data, Hh=new Array(51).fill(0), n=0; for(var i=0;i<d.length;i+=8){ if(d[i+3]<=40) continue; Hh[E.props.colBin(d[i],d[i+1],d[i+2])]++; n++; } if(n) for(var j=0;j<51;j++) Hh[j]/=n; return Hh; }
  /* the ranking for Would become, the chooser and Q/E: by shape; with Match colors on, the 60 best shapes reordered by shape and color together */
  function rankDraw(n){ var s2=sil(); if(!s2) return []; if(!colOn) return E.props.rank(s2,null,n,true,null,null)||[]; var rk=E.props.rank(s2,null,Math.max(60,n),true,null,null)||[], Hh=drawHist(), fl=rk.flip;
    var out=rk.map(function(k,i){ return {k:k,v:i/60+.85*(1-E.props.colSim(Hh,k))}; }).sort(function(a,b){ return a.v-b.v; }).map(function(x){ return x.k; }).slice(0,n); out.flip=fl; return out; }
  function nmK(k){ return E.props.name(k).replace(/^an? /,""); }
  function drawSvg(code){ var sp=code&&E.props.decode?E.props.decode(code):null; return sp?sp.svg():""; }
  function wouldBecome(force){ clearTimeout(wbT); wbT=setTimeout(function(){ var box=q(".pt-wb"); if(!box||!E.props) return; if(!E.props.ready){ E.props.load(wouldBecome); return; } var s2=sil();
    if(!s2){ box.innerHTML='<p class="pt-note">Draw something: the 2D objects that look like it appear here.</p>'; wbSig=""; wbRank=[]; return; }
    var rk=rankDraw(30), code=toCode(), sig=rk.slice(0,3).join(",")+"|"+(pick||"")+"|"+code+"|"+colOn; if(!force&&sig===wbSig) return; wbSig=sig; wbRank=rk;
    var first=pick?{k:pick,svg:E.props.sprite(pick,!!(rk.flip&&rk.flip[pick])),name:nmK(pick)+" (your choice)"}:{k:"",svg:drawSvg(code),name:"Your drawing"}, rest=rk.filter(function(k){ return k!==pick; }).slice(0,2);
    var items=[first].concat(rest.map(function(k){ return {k:k,svg:E.props.sprite(k,!!(rk.flip&&rk.flip[k])),name:nmK(k)}; }));
    box.innerHTML='<span class="pt-wbrow">'+items.map(function(it,i){ return '<button type="button" class="pt-wbit'+(i?"":" first")+'" title="'+it.name+(i===0?" (what it becomes)":"")+': click to choose from more">'+it.svg+'</button>'; }).join("")+'</span><span class="pt-wbnames">'+items.map(function(it,i){ return i?it.name:"<b>"+it.name+"</b>"; }).join(" \u00b7 ")+'</span>'
      +'<p class="pt-note">'+(pick?"Places as "+nmK(pick)+". Q and E while placing switch back to your drawing.":"Your drawing lands as itself. Click a picture to make it something else.")+'</p>'; incaTip(); },force?0:250); }
  function incaTip(){ var bi=q(".pt-inca"), tg=q(".pt-incad"); if(!bi||!tg) return; var k=tg.getAttribute("aria-pressed")==="true"?null:(pick||(wbRank&&wbRank[0])||null); bi.title=k?"Opens "+nmK(k)+" in Inca as a 3D model":"Opens your drawing in Inca as a 3D model: one cube per pixel, thicker towards the middle"; }
  function pickOpen(open){ var box=q(".pt-wb").closest(".pt-box"), pk=box.querySelector(".pt-chs"); if(!open){ if(pk) pk.hidden=true; return; } if(blank()){ toast("Nothing drawn yet: draw something first."); return; }
    var draw=function(){ var qs=pk.querySelector(".pt-q").value.trim().toLowerCase(), ks=qs?E.props.kinds.filter(function(k){ return (k+" "+nmK(k)).toLowerCase().indexOf(qs)>=0; }).sort(function(x,y){ return nmK(x).localeCompare(nmK(y)); }).slice(0,80):wbRank.slice(0,30);
      var own=!qs||"your drawing".indexOf(qs)>=0?'<button type="button" class="pt-g'+(pick?"":" on")+'" data-k="" title="Your drawing"><span class="pt-gs">'+drawSvg(toCode())+'</span><small>Your drawing</small></button>':"";
      pk.querySelector(".pt-grid").innerHTML=own+ks.map(function(k){ return '<button type="button" class="pt-g'+(pick===k?" on":"")+'" data-k="'+k+'" title="'+nmK(k)+'"><span class="pt-gs">'+E.props.sprite(k)+'</span><small>'+nmK(k)+'</small></button>'; }).join("")+(!own&&!ks.length?'<p class="pt-note">Nothing called that.</p>':""); };
    if(!pk){ pk=document.createElement("div"); pk.className="pt-chs"; pk.innerHTML='<div class="pt-ph"><b>What it becomes</b><button type="button" class="pt-px" aria-label="Close">\u00d7</button></div><input type="search" class="pt-q" placeholder="Search all objects" aria-label="Search all objects"><div class="pt-grid"></div>'; box.appendChild(pk);
      pk.querySelector(".pt-q").addEventListener("input",draw); pk.querySelector(".pt-px").addEventListener("click",function(){ pickOpen(false); });
      pk.addEventListener("click",function(e){ var b=e.target.closest(".pt-g"); if(!b) return; var k=b.getAttribute("data-k")||null; pick=k; saveSet(); pickOpen(false); toast(k?"Your drawing becomes "+E.props.name(k)+" when you place it.":"Your drawing lands as itself again."); wouldBecome(true); }); }
    pk.hidden=false; pk.querySelector(".pt-q").value=""; draw(); setTimeout(function(){ pk.querySelector(".pt-q").focus(); },30); }
  /* dragging the drawing into the Handbook: a ghost in the hand, Q and E for the look-alikes, Esc to cancel */
  function startCarry(e,click){ if(e.button!==0) return; if(blank()){ toast("Nothing to drag yet: draw something first."); return; } if(!E.props||!E.props.snap){ return; } if(!E.props.ready){ E.props.load(); toast("One moment: the 2D objects are still loading."); return; }
    e.preventDefault(); var code=toCode(), s2=sil(), rk=rankDraw(E.props.kinds.length), opts=[{k:null,label:"Your drawing"}].concat(rk.map(function(k){ return {k:k,label:E.props.name(k).replace(/^an? /,"")}; }));
    if(pick){ opts=[{k:pick,label:nmK(pick)}].concat(opts.filter(function(o){ return o.k!==pick; })); }   /* your choice from Would become first */
    var gh=document.createElement("div"); gh.className="egg-prop-ghost pt-ghost"; gh.innerHTML='<span class="pg-row"></span><span class="pg-lab"></span>'; document.body.appendChild(gh);
    carry={code:code,sil:s2,opts:opts,idx:0,g:gh,fl:rk.flip||{},sn:null,sc:1,click:!!click}; root.classList.add("egg-carrying"); drawGhost(); moveCarry(e); window.addEventListener("pointermove",moveCarry); if(click) window.addEventListener("pointerdown",clickPlace,true);
    if(E.props.showAsk) E.props.showAsk(function(){ if(carry&&carry.lastE) moveCarry(carry.lastE); }); }   /* Who to Ask out of sight: the page goes there (18.10.2026) */
  function ghostSvg(){ var o=carry.opts[carry.idx]; if(o.k) return E.props.sprite(o.k,!!carry.fl[o.k]); var sp=E.props.decode?E.props.decode(carry.code):null; return sp?sp.svg():""; }
  function drawGhost(){ var c=carry, o=c.opts[c.idx]; c.g.querySelector(".pg-row").innerHTML='<span class="pg-it" data-k="'+(o.k||"drawing")+'">'+ghostSvg()+'</span>';
    var K=function(k){ return '<kbd>'+k+'</kbd>'; }, row=function(keys,act){ return '<span class="pg-k">'+keys+'</span><span class="pg-a">'+act+'</span>'; };   /* like Inca's: a name, a counter, each key once (Jakob, 20.10.2026) */
    c.g.querySelector(".pg-lab").innerHTML='<span class="pg-h"><b>'+o.label+'</b><span class="pg-n">'+(c.idx+1)+'\u00a0/\u00a0'+c.opts.length+'</span></span><span class="pg-keys">'+row(K("Q")+K("E"),'a look-alike or your drawing')+row(K("D"),'duplicate')+(c.click?row(K("Click"),'place'):'')+row(K("Esc"),'cancel')+'</span>'; }
  function moveCarry(e){ var c=carry; if(!c) return; c.lastE={clientX:e.clientX,clientY:e.clientY}; var base=E.props.snap(e.clientX,e.clientY,null), rowH=base?base.h:48, o=c.opts[c.idx], sv=c.g.querySelector("svg"), vb=sv?sv.getAttribute("viewBox").split(" ").map(Number):[0,0,1,1];
    var h=Math.round(rowH*(o.k?(E.props.size?E.props.size(o.k):1):Math.min(1.3,Math.max(.4,vb[3]/28)))*c.sc), w=Math.round(h*vb[2]/vb[3]), it=c.g.querySelector(".pg-it"); it.style.width=w+"px"; it.style.height=h+"px"; c.g.style.width=w+"px"; c.g.querySelector(".pg-row").style.height=h+"px";
    var sn=base?E.props.snap(e.clientX,e.clientY,w):null; c.sn=sn; c.w=w; c.g.classList.toggle("snap",!!sn);
    if(sn){ c.g.style.left=sn.left+"px"; c.g.style.top=(sn.lineY-h)+"px"; } else { c.g.style.left=(e.clientX-w/2)+"px"; c.g.style.top=(e.clientY-h/2)+"px"; }
    if(E.props.labelOnScreen) E.props.labelOnScreen(c.g.querySelector(".pg-lab"));
    if(E.props.dropHint){ var lb=c.g.querySelector(".pg-lab"); E.props.dropHint(e.clientX,sn?0:Math.max(c.g.getBoundingClientRect().bottom,lb?lb.getBoundingClientRect().bottom:0)+8,sn?null:(c.click?"Not in the chapter \u201cWho to Ask\u201d. Click on a line, or press Esc.":"Not in the chapter \u201cWho to Ask\u201d. Let go and it stays in Pict.")); } }
  function endCarry(e){ var c=carry; carry=null; window.removeEventListener("pointermove",moveCarry); window.removeEventListener("pointerdown",clickPlace,true); root.classList.remove("egg-carrying"); if(E.props.dropHint) E.props.dropHint(); c.g.remove(); if(!c.sn){ toast("Not on a line in the Handbook: the drawing stays here."); return; }
    var o=c.opts[c.idx], k=o.k||c.drawK; if(!k){ k=E.props.addDraw(c.code); } if(!k){ toast("That could not be placed."); return; }
    var name=E.props.place(k,c.sn.free?{free:c.sn.free,l:-1,fx:0}:{l:c.sn.l,fx:c.sn.fx},c.sc,null,null,{fl:!!(c.fl[k]),ar:1,pict:c.code}); toast(o.k?"Placed as "+name+" in the Handbook.":"Your drawing is in the Handbook. Click it there to remove it, shake it to bring it back here."); }
  /* Place (Jakob, 18.10.2026): the drawing into the Handbook without dragging, at the first free spot */
  /* the drawing as a 3D model in Inca, instead of a 2D object in the Handbook (Jakob, 19.10.2026): Pict closes, the drawing stays saved */
  function toInca(){ if(blank()){ toast("Nothing to open yet: draw something first."); return; } if(!E.props||!E.props.ready){ if(E.props) E.props.load(); toast("One moment: the 2D objects are still loading."); return; } if(!E.cubeFromProp){ toast("Inca is not available."); return; } var code=toCode(); if(!code){ toast("Nothing to open yet: draw something first."); return; } var tg=q(".pt-incad"), own=!!tg&&tg.getAttribute("aria-pressed")==="true", k=own?null:(pick||rankDraw(1)[0]||null), src=k?{vox:k,name:nmK(k),fromPict:true}:{draw:code};   /* the object picked under Would become, else the best match (the first suggestion); the toggle "Your drawing" opens the pixels instead (19.10.2026) */ saveDraw(); close(); E.cubeFromProp(src); }
  function placeNow(){ if(blank()){ toast("Nothing to place yet: draw something first."); return; } if(!E.props||!E.props.ready){ if(E.props) E.props.load(); toast("One moment: the 2D objects are still loading."); return; }
    E.props.freePoint(70,function(pt){ if(!pt){ toast("No free spot in the Handbook right now: remove something there first."); return; } startCarry({button:0,clientX:pt.x,clientY:pt.y,preventDefault:function(){}},true); }); }   /* in the hand at a free spot: it follows the mouse, a click places it (18.10.2026) */
  function clickPlace(e){ if(!carry||!carry.click||e.button!==0) return; e.preventDefault(); e.stopPropagation(); moveCarry(e); if(carry.sn) endCarry(e); else { var hd=document.querySelector(".egg-drop-hint"); if(hd){ hd.classList.remove("flash"); void hd.offsetWidth; hd.classList.add("flash"); } } }
  function dupCarry(){ var c=carry; if(!c) return; if(!c.sn){ toast("Over a line in the Handbook first: then D leaves a copy there."); return; } var o=c.opts[c.idx], k=o.k||c.drawK; if(!k){ k=c.drawK=E.props.addDraw(c.code); } if(!k){ toast("That could not be placed."); return; }
    var name=E.props.place(k,c.sn.free?{free:c.sn.free,l:-1,fx:0}:{l:c.sn.l,fx:c.sn.fx},c.sc,null,null,{fl:!!(c.fl[k]),ar:1,pict:c.code}); toast("A copy: "+name+" in the Handbook. Another one is still in your hand."); if(c.lastE) moveCarry(c.lastE); }   /* D while carrying (18.10.2026) */
  function key(e){ if(!wrap) return; if(carry){ var k=(e.key||"").toLowerCase(); if(k==="d"&&!e.ctrlKey&&!e.metaKey&&!e.altKey){ e.preventDefault(); dupCarry(); return; } if(k==="q"||k==="e"){ e.preventDefault(); carry.idx=(carry.idx+(k==="e"?1:-1)+carry.opts.length)%carry.opts.length; drawGhost(); if(carry.lastE) moveCarry(carry.lastE); return; } if(e.key==="Escape"){ e.preventDefault(); carry.sn=null; endCarry(e); } return; }
    if(e.target&&e.target.matches&&e.target.matches('textarea,select,input:not([type]),input[type=text],input[type=search]')) return; if(E.props&&E.props.dragging&&E.props.dragging()) return; var kk=(e.key||"").toLowerCase(), mod=e.ctrlKey||e.metaKey;   /* a slider or color field keeps the focus after use: shortcuts still work then (18.10.2026) */
    if(mod&&kk==="s"){ e.preventDefault(); galSave(); tick(); }
    else if(mod&&kk==="z"){ e.preventDefault(); if(e.shiftKey) doRedo(); else doUndo(); tick(); } else if(mod&&kk==="y"){ e.preventDefault(); doRedo(); tick(); }
    else if(!mod&&!e.altKey){ if(kk==="b"){ setTool("draw"); tick(); } else if(kk==="e"){ setTool("erase"); tick(); } else if(kk==="l"){ setTool("shape"); tick(); } else if(kk==="g"){ setTool("bucket"); tick(); } else if(kk==="i"){ setTool("pick"); tick(); } else if(e.key==="["||e.key==="]"){ size=Math.max(1,Math.min(60,size+(e.key==="]"?2:-2))); q(".pt-size input").value=size; q(".pt-size output").textContent=size; saveSet(); } else if(e.key==="Escape"){ close(); } else return; e.preventDefault(); } }
  function eggTop(){ if(!wrap) return; var hd=q(".pt-head"); if(!hd) return; root.classList.add("egg-app-open"); root.style.setProperty("--egg-top",Math.round(hd.getBoundingClientRect().bottom+10)+"px"); }   /* an egg pop-up appears below Pict's title bar */
  /* the first time: Pict is in very, very early alpha (Jakob, 18.10.2026) */
  var helloSeen=false;   /* also remembered here, so a browser that does not keep localStorage shows the note once per page load, not at every opening; an egg reset loads Pict fresh, so it comes back then (19.10.2026) */
  function hello(force){ if(!force){ if(helloSeen) return; try{ if(localStorage.getItem("sbh-pict-hello")) return; }catch(e){} } var st=q(".pt-stage"); if(!st||st.querySelector(".pt-hello")) return; helloSeen=true;   /* force: the WIP pill shows it again (Jakob, 19.10.2026) */ var c=document.createElement("div"); c.className="pt-hello"; c.setAttribute("role","dialog"); c.setAttribute("aria-label","Pict");
    c.innerHTML='<p class="pt-hh">Pict is in very, very early alpha.</p><p>It can draw, erase, fill and turn drawings into 2D objects. Layers, text and everything else are not implemented yet.</p><p>If something breaks, call it a happy accident.</p><p class="pt-hc">If you have ideas for this tool, contact <a class="mail" href="mailto:jakob.christensen@fh-salzburg.ac.at">Jakob Christensen</a></p><button type="button" class="pt-hok">Draw anyway</button>';   /* the contact line like Inca's card (Jakob, 20.10.2026) */
    st.appendChild(c); if(window.sbhMailCopy) window.sbhMailCopy(c); try{ localStorage.setItem("sbh-pict-hello","1"); }catch(e){}   /* counted as seen the moment it shows: only the first opening of Pict (Jakob, 19.10.2026) */ var ok=c.querySelector(".pt-hok"); ok.disabled=true; ok.addEventListener("click",function(){ try{ localStorage.setItem("sbh-pict-hello","1"); }catch(e){} c.remove(); });
    setTimeout(function(){ ok.disabled=false; ok.classList.add("on"); ok.focus({preventScroll:true}); },force?50:3000); }
  document.addEventListener("click",function(e){ var wp=e.target&&e.target.closest&&e.target.closest(".egg-pict .pt-wip"); if(wp) hello(true); });   /* a click on WIP: the alpha note again, its button right away */   /* the button after three seconds, fading in slowly, so the note gets read (18.10.2026; 3 s and the slow fade since 19.10.2026, Jakob) */
  document.addEventListener("sbh-eggs",function(e){ var f=(e.detail&&e.detail.found)||[]; if(f.indexOf("pict")<0) try{ localStorage.removeItem("sbh-pict-hello"); }catch(x){} });
  function open(){ if(wrap) return; build(); hello(); eggTop(); requestAnimationFrame(function(){ wrap.classList.add("in"); eggTop(); }); window.addEventListener("resize",eggTop); }
  function close(){ if(!wrap) return; if(carry){ carry.sn=null; endCarry({}); } window.removeEventListener("pointerup",up); window.removeEventListener("pointercancel",up); window.removeEventListener("keydown",key,true); var w=wrap; wrap=null; w.classList.remove("in"); setTimeout(function(){ w.remove(); },300); window.removeEventListener("resize",eggTop); root.classList.remove("egg-app-open"); root.style.removeProperty("--egg-top"); }
  /* a drawing shaken back from Who to Ask: its pixels, enlarged, in the middle */
  function fromCode(code){ open(); var sp=E.props.decode?E.props.decode(code):null; if(!sp) return; push(); var k=Math.min(Math.floor(W*.7/sp.w),Math.floor(H*.7/sp.h),16), ox=Math.round((W-sp.w*k)/2), oy=Math.round((H-sp.h*k)/2);
    for(var y=0;y<sp.h;y++) for(var x=0;x<sp.w;x++) if(sp.g[y][x]){ g.fillStyle=sp.g[y][x]; g.fillRect(ox+x*k,oy+y*k,k,k); } saveDraw(); wouldBecome(); toast("Back in Pict, a little pixelated."); }
  /* the scribble trigger and the quick tooltip live in the page loader (18.10.2026) */
  E.pict={open:open,close:close,toggle:function(){ if(wrap) close(); else open(); },fromCode:fromCode,isOpen:function(){ return !!wrap; }};
  E.pictFrom=fromCode;
})();
