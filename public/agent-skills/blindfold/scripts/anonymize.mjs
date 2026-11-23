// Anonymizes answers for blind judges: random ids, optional framing removed, key written to a separate file.
// Usage: node anonymize.mjs <runs-folder> <blind-folder> <key-file> [options]
//   --strip-fence        remove a code fence around the whole answer (only when first and last line are fences)
//   --strip-title        remove a first line that is a markdown title of level 1 to 3 (done after the fence)
//   --strip-line <regex> remove every line matching the regex (repeatable), for tool or prompt framing
//   --ext <.ext>         file extension to read, with the dot (default .md)
// File names: <group>_<variant>_<run>.<ext>. The group is everything before the last two underscore
// parts (for example case1_new_2.md: group case1, variant new, run 2). One subfolder per group is
// written, with Answer_<ID>.<ext> files under random letters. The key file maps group/ID to the
// original file name and word count.
// Safety: the blind folder must be empty or missing, the key file must not exist yet and must lie
// outside the blind folder. All input errors, including unreadable files, are collected and reported
// before anything is written (exit 1). Afterwards the script prints what stripping did and warns when an answer still contains
// a variant name as a whole word.
import fs from "fs";
import path from "path";
import crypto from "crypto";

const USAGE =
  "Usage: node anonymize.mjs <runs-folder> <blind-folder> <key-file> [--strip-fence] [--strip-title] [--strip-line <regex>] [--ext .md]";
const args = process.argv.slice(2);
const positional = [];
const errors = [];
const opts = { stripFence: false, stripTitle: false, stripLines: [], ext: ".md" };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--strip-fence") opts.stripFence = true;
  else if (a === "--strip-title") opts.stripTitle = true;
  else if (a === "--strip-line") {
    const src = args[++i];
    if (src === undefined) errors.push("--strip-line needs a regex.");
    else {
      try {
        opts.stripLines.push(new RegExp(src));
      } catch (e) {
        errors.push(`Bad regex for --strip-line: ${src} (${e.message})`);
      }
    }
  } else if (a === "--ext") {
    const e = args[++i];
    if (e === undefined || !e.startsWith(".") || e.length < 2) errors.push(`--ext needs a value with a dot, for example .md (got ${e}).`);
    else opts.ext = e;
  } else if (a.startsWith("--")) errors.push(`Unknown option ${a}.`);
  else positional.push(a);
}
const [src, dst, keyFile] = positional;
if (!keyFile || positional.length > 3) {
  console.log(USAGE);
  process.exit(1);
}

const rel = path.relative(path.resolve(dst), path.resolve(keyFile));
if (!rel.startsWith("..") && !path.isAbsolute(rel)) errors.push("The key file must not be inside the blind folder.");
if (fs.existsSync(keyFile)) errors.push(`The key file ${keyFile} already exists. Choose a new name, it is never overwritten.`);
if (fs.existsSync(dst)) {
  if (!fs.statSync(dst).isDirectory()) errors.push(`${dst} exists and is not a folder.`);
  else if (fs.readdirSync(dst).length > 0) errors.push(`The blind folder ${dst} is not empty. Use a new or empty folder.`);
}

const groups = {};
const variants = new Set();
let files = [];
if (!fs.existsSync(src) || !fs.statSync(src).isDirectory()) errors.push(`Runs folder ${src} not found.`);
else files = fs.readdirSync(src).filter((n) => n.endsWith(opts.ext)).sort();
for (const f of files) {
  const parts = f.slice(0, -opts.ext.length).split("_");
  if (parts.length < 3 || parts.some((p) => p === "")) {
    errors.push(`Misnamed file ${f}: name must be <group>_<variant>_<run>${opts.ext}`);
    continue;
  }
  variants.add(parts[parts.length - 2]);
  const g = parts.slice(0, -2).join("_");
  if (g === "." || g === "..") {
    errors.push(`Misnamed file ${f}: the group name must not be "${g}".`);
    continue;
  }
  (groups[g] = groups[g] || []).push(f);
}
if (files.length > 0 && Object.keys(groups).length === 0 && errors.length === 0) errors.push("No matching files found.");
if (files.length === 0 && errors.length === 0) errors.push(`No ${opts.ext} files found in ${src}.`);
for (const [g, list] of Object.entries(groups)) {
  if (list.length > 26) errors.push(`Group ${g} has ${list.length} answers, the limit is 26 (one letter each).`);
}
if (errors.length) {
  console.error("Nothing written. Fix these first:\n- " + errors.join("\n- "));
  process.exit(1);
}

fs.mkdirSync(path.dirname(path.resolve(keyFile)), { recursive: true });
const stats = { fence: 0, title: 0, lines: 0 };
function strip(text) {
  let t = text.replace(/\r\n/g, "\n").trim();
  if (opts.stripFence) {
    const ls = t.split("\n");
    if (ls.length >= 2 && /^`{3,}/.test(ls[0]) && /^`{3,}\s*$/.test(ls[ls.length - 1])) {
      t = ls.slice(1, -1).join("\n").trim();
      stats.fence++;
    }
  }
  if (opts.stripTitle && /^#{1,3} [^\n]*(\n|$)/.test(t)) {
    t = t.replace(/^#{1,3} [^\n]*(\n|$)/, "").trim();
    stats.title++;
  }
  if (opts.stripLines.length) {
    const kept = t.split("\n").filter((l) => !opts.stripLines.some((re) => re.test(l)));
    stats.lines += t.split("\n").length - kept.length;
    t = kept.join("\n");
  }
  return t.trim();
}

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

// Read and plan everything first, so that nothing is written when one input fails.
const key = {};
const written = [];
const dstRoot = path.resolve(dst);
const readErrors = [];
for (const [g, list] of Object.entries(groups)) {
  const ids = shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).slice(0, list.length);
  list.forEach((f, i) => {
    let text;
    try {
      text = strip(fs.readFileSync(path.join(src, f), "utf8"));
    } catch (e) {
      readErrors.push(`Cannot read ${f}: ${e.message}`);
      return;
    }
    const out = path.join(dst, g, `Answer_${ids[i]}${opts.ext}`);
    const inside = path.relative(dstRoot, path.resolve(out));
    if (inside.startsWith("..") || path.isAbsolute(inside)) {
      readErrors.push(`Output for ${f} would lie outside the blind folder.`);
      return;
    }
    written.push({ g, out, text });
    key[`${g}/${ids[i]}`] = `${f.slice(0, -opts.ext.length)} (${text.split(/\s+/).filter(Boolean).length} words)`;
  });
}
if (readErrors.length) {
  console.error("Nothing written. Fix these first:\n- " + readErrors.join("\n- "));
  process.exit(1);
}
fs.mkdirSync(path.dirname(path.resolve(keyFile)), { recursive: true });
for (const { g, out, text } of written) {
  fs.mkdirSync(path.join(dst, g), { recursive: true });
  fs.writeFileSync(out, text);
}
fs.writeFileSync(keyFile, JSON.stringify(key, null, 1), { flag: "wx" });

console.log(Object.entries(groups).map(([g, f]) => `${g}: ${f.length}`).join("\n"));
console.log(`Stripping: ${stats.fence} fence(s), ${stats.title} title(s), ${stats.lines} line(s) removed.`);
const leaks = [];
for (const { out, text } of written) {
  const lower = text.toLowerCase();
  for (const v of variants) {
    const esc = v.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (new RegExp("(?<![a-z0-9])" + esc + "(?![a-z0-9])").test(lower)) leaks.push(`${out} mentions "${v}"`);
  }
}
if (leaks.length) console.log("WARNING, possible leaks of a variant name (check by hand):\n" + leaks.join("\n"));
console.log(`Key written to ${keyFile}. Keep it away from the judges until judging ends.`);
