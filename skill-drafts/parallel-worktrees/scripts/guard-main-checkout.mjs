// PreToolUse hook (project settings): blocks Edit, Write and NotebookEdit on files in the main
// checkout. The main checkout is only the integration target; uncommitted edits there stop other
// sessions' integrations. Files inside a worktree nested in it (for example .claude/worktrees) are fine.
// Anything this script cannot work out (no git, no path) lets the edit through.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import path from 'node:path';

// Resolves junctions (a folder reached through a link), even for a file that does not exist yet.
function real(p) {
  let head = path.resolve(p);
  const tail = [];
  while (!existsSync(head)) {
    const parent = path.dirname(head);
    if (parent === head) break;
    tail.unshift(path.basename(head));
    head = parent;
  }
  try {
    head = realpathSync.native(head);
  } catch {
    // keep the unresolved path
  }
  return path.join(head, ...tail).replace(/\\/g, '/').toLowerCase().replace(/\/+$/, '');
}

const inside = (file, dir) => file === dir || file.startsWith(dir + '/');

let input;
try {
  input = JSON.parse(readFileSync(0, 'utf8').replace(/^\uFEFF/, ''));
} catch {
  process.exit(0);
}
const target = input.tool_input?.file_path ?? input.tool_input?.notebook_path;
if (!target) process.exit(0);

let listing;
try {
  listing = execFileSync('git', ['worktree', 'list', '--porcelain'], {
    cwd: input.cwd || process.cwd(),
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });
} catch {
  process.exit(0);
}
// The first entry is the main worktree.
const worktrees = listing
  .split(/\r?\n/)
  .filter((line) => line.startsWith('worktree '))
  .map((line) => real(line.slice(9)));
const [main, ...others] = worktrees;
const file = real(target);

if (main && inside(file, main) && !others.some((dir) => inside(file, dir))) {
  process.stderr.write(
    `Blocked: ${target} is in the main checkout, which is only the integration target. ` +
      'Work in your own worktree (git worktree add ../<repo>-<name> -b <name>/<topic>, then install dependencies there) ' +
      'and integrate it with scripts/integrate.ps1.' +
      String.fromCharCode(10),
  );
  process.exit(2);
}
process.exit(0);
