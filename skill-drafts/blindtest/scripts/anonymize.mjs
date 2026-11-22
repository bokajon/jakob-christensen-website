// Anonymizes answers for blind judges: random ids, optional framing removed, key written to a separate file.
// Usage: node anonymize.mjs <runs-folder> <blind-folder> <key-file> [options]
//   --strip-fence        remove one code fence that wraps the whole answer
//   --strip-title        remove a first line that is a markdown title
//   --strip-line <regex> remove every line matching the regex (repeatable), for tool or prompt framing
//   --ext <.ext>         file extension to read (default .md)
// File names: <group>_<variant>_<run>.<ext>. The group is everything before the last two underscore
// parts (for example case1_new_2.md: group case1, variant new, run 2). One subfolder per group is
// written, with Answer_<ID>.<ext> files under random letters. The key file maps group/ID to the
// original file name and word count. Keep the key outside the blind folder and out of the judges' reach.
// After writing, the script warns when an answer still contains a variant name.
import fs from "fs";
import path from "path";
import crypto from "crypto";

const args = process.argv.slice(2);
const positional = [];
const opts = { stripFence: false, stripTitle: false, stripLines: [], ext: ".md" };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--strip-fence") opts.stripFence = true;
  else if (a === "--strip-title") opts.stripTitle = true;
  else if (a === "--strip-line") opts.stripLines.push(new RegExp(args[++i]));
  else if (a === "--ext") opts.ext = args[++i];
  else positional.push(a);
}
const [src, dst, keyFile] = positional;
if (!keyFile) {
  console.log("Usage: node anonymize.mjs <runs-folder> <blind-folder> <key-file> [--strip-fence] [--strip-title] [--strip-line <regex>] [--ext .md]");
  process.exit(1);
}
const rel = path.relative(path.resolve(dst), path.resolve(keyFile));
if (!rel.startsWith("..") && !path.isAbsolute(rel)) {
  console.error("The key file must not be inside the blind folder.");
  process.exit(1);
}

function strip(text) {
  let t = text.replace(/\r\n/g, "\n");
  if (opts.stripTitle) t = t.replace(/^\s*# [^\n]*\n/, "");
  if (opts.stripFence) t = t.replace(/^\s*`{3,}[^\n]*\n/, "").replace(/\n`{3,}\s*$/, "");
  for (const re of opts.stripLines) t = t.split("\n").filter((l) => !re.test(l)).join("\n");
  return t.trim();
}

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

const groups = {};
const variants = new Set();
for (const f of fs.readdirSync(src).filter((n) => n.endsWith(opts.ext)).sort()) {
  const parts = f.slice(0, -opts.ext.length).split("_");
  if (parts.length < 3) {
    console.error(`Skipped ${f}: name must be <group>_<variant>_<run>${opts.ext}`);
    continue;
  }
  variants.add(parts[parts.length - 2]);
  const g = parts.slice(0, -2).join("_");
  (groups[g] = groups[g] || []).push(f);
}
if (Object.keys(groups).length === 0) {
  console.error("No matching files found.");
  process.exit(1);
}

const key = {};
const written = [];
for (const [g, files] of Object.entries(groups)) {
  if (files.length > 26) {
    console.error(`Group ${g} has more than 26 answers.`);
    process.exit(1);
  }
  const ids = shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).slice(0, files.length);
  fs.mkdirSync(path.join(dst, g), { recursive: true });
  files.forEach((f, i) => {
    const text = strip(fs.readFileSync(path.join(src, f), "utf8"));
    const out = path.join(dst, g, `Answer_${ids[i]}${opts.ext}`);
    fs.writeFileSync(out, text);
    written.push({ out, text });
    key[`${g}/${ids[i]}`] = `${f.slice(0, -opts.ext.length)} (${text.split(/\s+/).filter(Boolean).length} words)`;
  });
}
fs.writeFileSync(keyFile, JSON.stringify(key, null, 1));

console.log(Object.entries(groups).map(([g, f]) => `${g}: ${f.length}`).join("\n"));
const leaks = [];
for (const { out, text } of written) {
  const words = new Set(text.toLowerCase().split(/[^a-z0-9]+/));
  for (const v of variants) {
    if (v.length >= 3 && words.has(v.toLowerCase())) leaks.push(`${out} mentions "${v}"`);
  }
}
if (leaks.length) console.log("WARNING, possible leaks of a variant name (check by hand):\n" + leaks.join("\n"));
console.log(`Key written to ${keyFile}. Keep it away from the judges until judging ends.`);
