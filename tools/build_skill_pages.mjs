// Builds one indexable page per skill (public/skills/<name>/index.html), public/sitemap.xml
// and public/llms.txt, and adds an "Open page" link to each skill card on the homepage (idempotent).
// Run from the repo root: node tools/build_skill_pages.mjs
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://jakobchristensen.com";
const root = process.cwd();
const pub = path.join(root, "public");
let home = fs.readFileSync(path.join(pub, "index.html"), "utf8");
const today = new Date().toISOString().slice(0, 10);
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const unesc = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const strip = (s) => unesc(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

const cardRe = /<li>\s*<details>\s*<summary class="skill-head">\s*<h4>\/([a-z0-9-]+)<\/h4>\s*<a class="download" href="([^"]+)"[\s\S]*?<span class="skill-sum">([\s\S]*?)<\/span>\s*<\/summary>([\s\S]*?)<\/details>\s*<\/li>/g;
const skills = [];
let m;
while ((m = cardRe.exec(home))) {
  const [, name, dl, sum, body] = m;
  const descs = [...body.matchAll(/<p class="skill-desc">(?!<a href="skills\/)([\s\S]*?)<\/p>/g)].map((x) => x[1].trim());
  skills.push({ name, dl, sum: strip(sum), descs });
}
if (!skills.length) throw new Error("no skill cards found");

function frontDesc(name) {
  const t = fs.readFileSync(path.join(pub, "agent-skills", name, "SKILL.md"), "utf8");
  const d = t.match(/^description:\s*(.+)$/m);
  return d ? d[1].trim().replace(/^["']|["']$/g, "") : "";
}
function metaDesc(sum) {
  const s = `${sum}. A free agent skill for Claude Code and other AI agents by Jakob Christensen.`;
  return s.length > 160 ? s.slice(0, 157) + "..." : s;
}

const css = fs.readFileSync(path.join(root, "tools", "skill-page.css"), "utf8");
const dlIcon = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0l-5-5m5 5l5-5M5 20h14"/></svg>';

for (const s of skills) {
  const url = `${ORIGIN}/skills/${s.name}/`;
  const title = `/${s.name} - agent skill for Claude Code | Jakob Christensen`;
  const desc = metaDesc(s.sum);
  const full = frontDesc(s.name);
  const dlPath = s.dl.startsWith("agent-skills/") ? s.dl : "agent-skills/" + s.dl;
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: `/${s.name}`,
    description: s.sum,
    url,
    codeRepository: `${ORIGIN}/agent-skills/${s.name}/SKILL.md`,
    programmingLanguage: "Markdown",
    license: "https://opensource.org/license/mit",
    author: { "@type": "Person", name: "Jakob Christensen", url: ORIGIN + "/" },
  };
  const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${url}">
  <meta name="color-scheme" content="dark">
  <meta name="theme-color" content="#121110">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${ORIGIN}/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  <style>
${css}
  </style>
</head>
<body>
  <main>
    <p class="crumb"><a href="/">Jakob Christensen</a> / Agent Skills</p>
    <h1>/${esc(s.name)}</h1>
    <p class="sum">${esc(s.sum)}</p>
    ${s.descs.map((d) => `<p>${d}</p>`).join("\n    ")}
    <p class="dl">
      <a class="btn" href="/${dlPath}" download>${dlIcon} Download ${s.dl.endsWith(".zip") ? "ZIP" : "SKILL.md"}</a>
      <a href="/agent-skills/${s.name}/SKILL.md">Read SKILL.md</a>
    </p>
    <h2>When the agent uses it</h2>
    <p>${esc(full)}</p>
    <h2>Install</h2>
    <p>Download the skill, drag it into your AI's chat and write "Install this skill."</p>
    <h2>More skills</h2>
    <ul class="more">
${skills.filter((o) => o.name !== s.name).map((o) => `      <li><a href="/skills/${o.name}/">/${o.name}</a> - ${esc(o.sum)}</li>`).join("\n")}
    </ul>
  </main>
  <footer>&copy; 2026 Jakob Christensen &middot; <a href="/">jakobchristensen.com</a></footer>
</body>
</html>
`;
  const dir = path.join(pub, "skills", s.name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page);
}

// Homepage: add an "Open page" link to every card (once).
let added = 0;
for (const s of skills) {
  if (home.includes(`href="skills/${s.name}/"`)) continue;
  const link = `<p class="skill-desc"><a href="skills/${s.name}/">Open the page for /${s.name}</a></p>`;
  const re = new RegExp(`(<h4>/${s.name}</h4>[\\s\\S]*?)(\\s*</details>)`);
  home = home.replace(re, (_, a, b) => `${a}\n              ${link}${b}`);
  added++;
}
if (added) fs.writeFileSync(path.join(pub, "index.html"), home);

// Sitemap
const urls = [{ loc: ORIGIN + "/", pri: "1.0" }, ...skills.map((s) => ({ loc: `${ORIGIN}/skills/${s.name}/`, pri: "0.7" }))];
fs.writeFileSync(
  path.join(pub, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.pri}</priority></url>`).join("\n") +
    `\n</urlset>\n`
);

// llms.txt
fs.writeFileSync(
  path.join(pub, "llms.txt"),
  `# Jakob Christensen\n\n> Tools, toys and tinkering: free agent skills for Claude Code and other AI agents, teaching tools for visual effects, and a game in the making.\n\n## Agent skills\n\n` +
    skills.map((s) => `- [/${s.name}](${ORIGIN}/skills/${s.name}/): ${s.sum}`).join("\n") +
    `\n\n## Optional\n\n- [Home](${ORIGIN}/): overview of all projects\n`
);
console.log(`${skills.length} skills, homepage links added: ${added}`);
