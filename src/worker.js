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

export default {
  async fetch(request, env) {
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
