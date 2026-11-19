// Die Seite ist statisch (public/). Dieses Skript läuft nur für /art und /art/*: Passwortabfrage, sonst nichts.
// Das Passwort liegt als Secret ART_PASSWORT bei Cloudflare (npx wrangler secret put ART_PASSWORT), nie in einer Datei.
// Ist kein Secret gesetzt, bleibt /art gesperrt.
const enc = new TextEncoder();

async function same(a, b) {
  // Vergleich über Hashes, damit die Länge und Position eines Fehlers nichts verraten
  const [x, y] = await Promise.all([crypto.subtle.digest("SHA-256", enc.encode(a)), crypto.subtle.digest("SHA-256", enc.encode(b))]);
  const u = new Uint8Array(x), v = new Uint8Array(y);
  let d = 0;
  for (let i = 0; i < u.length; i++) d |= u[i] ^ v[i];
  return d === 0;
}

// Niagara Workshop ist noch nicht für Handys gebaut. Der Hinweis wird hier in die ausgelieferte index.html eingefügt,
// nicht in public/niagara-workshop/index.html, weil diese Datei bei jedem Veröffentlichen aus dem Quellprojekt ersetzt wird.
// Gilt nur für Geräte ohne Maus (Finger als Zeiger, kein Hover), ein schmales Desktop-Fenster bleibt unberührt.
const MOBILE_NOTICE = `<style>
#mobile-notice{display:none}
@media (pointer:coarse) and (hover:none){
  #root{display:none!important}
  #mobile-notice{display:flex;position:fixed;inset:0;z-index:2147483647;align-items:center;justify-content:center;padding:32px;background:#0a0a0a;color:#e8e8e8;font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;text-align:center}
  #mobile-notice div{max-width:360px}
  #mobile-notice h1{margin:0 0 12px;font-size:22px;font-weight:600;color:#fff}
  #mobile-notice p{margin:0 0 12px;color:#b5b5b5}
  #mobile-notice a{color:#8ab4ff}
}
</style>
<div id="mobile-notice"><div>
<h1>Not available on mobile yet</h1>
<p>The RAVE Niagara Workshop is built for desktop and does not work on phones yet.</p>
<p>Please open this page on a computer.</p>
<p><a href="/">Back to jakobchristensen.com</a></p>
</div></div>`;

export default {
  async fetch(request, env) {
    // Cloudflare ruft den Worker auch für jede Datei auf, die es in public/ nicht gibt. Alles außer /art bekommt hier
    // die normale Antwort (404), sonst löst eine fehlende Datei irgendwo auf der Seite die Passwortabfrage aus.
    const path = new URL(request.url).pathname;
    if (path === "/niagara-workshop" || path === "/niagara-workshop/" || path === "/niagara-workshop/index.html") {
      const res = await env.ASSETS.fetch(request);
      if (!(res.headers.get("Content-Type") || "").includes("text/html")) return res;
      return new HTMLRewriter().on("body", { element(el) { el.append(MOBILE_NOTICE, { html: true }); } }).transform(res);
    }
    if (path !== "/art" && !path.startsWith("/art/")) return env.ASSETS.fetch(request);
    const hdr = { "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "private, no-store" };
    if (!env.ART_PASSWORT) return new Response("Diese Seite ist noch nicht freigeschaltet.", { status: 503, headers: hdr });
    const auth = request.headers.get("Authorization") || "";
    let pw = null;
    if (auth.startsWith("Basic ")) {
      try { const s = atob(auth.slice(6)); pw = s.slice(s.indexOf(":") + 1); } catch (e) { pw = null; }
    }
    if (pw === null || !(await same(pw, env.ART_PASSWORT))) {
      return new Response("Passwort nötig.", { status: 401, headers: { ...hdr, "WWW-Authenticate": 'Basic realm="Art", charset="UTF-8"' } });
    }
    const res = await env.ASSETS.fetch(request);
    const out = new Response(res.body, res);
    for (const [k, v] of Object.entries(hdr)) out.headers.set(k, v);
    return out;
  },
};
