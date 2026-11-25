---
name: fresh
license: MIT
description: Ends a long or finished session cleanly - writes a handoff file without asking, names the model and effort for the next session, and offers a fresh one. Also resumes work from a handoff file or after a crash or stop: it checks the real state first, names every difference from the handoff, then continues. Use at a natural break when the context is large (about 150k tokens), after a pause of over an hour on a context of 60k tokens or more, when the user moves to a different task with unfinished work behind, after image-heavy work, or when a task is merged and other work follows; and, to resume, when a session starts from a handoff file or the user says to continue after a crash or stop. Not for sessions with nothing to carry over, and never before the current request is done.
---

# Fresh

Every message re-reads the whole context. Cached tokens are cheaper, but the cache expires after a pause (how soon depends on the tool and plan), and then the whole context is written again. A fresh session with a good handoff file is often cheaper and sharper than continuing.

## When to run

Finish the user's current request first, then run this skill when any of these holds:

- The context is large: about 150k tokens. In Claude Code the optional hook (see Hook setup) reads the token count of the last model call from the transcript and adds a note at that limit. Without the hook, count only a token figure the tool puts into your context or the user tells you; never estimate one yourself.
- The user returns after a pause of over 60 minutes and the context is 60k tokens or more. Count this only when the hook note or message timestamps show it.
- The user moves to a different task while the old one has unfinished work or decisions worth keeping. A side question is not a new task.
- The work was image-heavy: in most tools images stay in context until it is compacted.
- The task is committed and merged, and the user goes on with other work. If nothing follows, this skill does not apply.
- The context was just compacted. Write only what is still known and mark the rest "unknown"; never fill a gap by guessing.

## Steps

1. **Draft the handoff** with every item below that applies. Write "none" only where you checked that nothing exists, "unknown" where you could not find out, and never invent a value. Every claim about the current state (names, branches, what is live, what a file is called) is read from disk while you write the handoff, otherwise it says "not checked".
   1. **Model and effort** for the next session as the first line under the title, both named, with one sentence why: the cheapest model the next session's tool offers that does the work well (a tier if you do not know its model names), and its effort level (Claude Code has one; leave it out only for a tool that has none). Name the steps that need a stronger model. Recommend the most expensive model only with a reason, and never switch to it yourself.
   2. **State**, one line each: the goal, what is done, what is open, approaches that failed, decisions made in this conversation that are not recorded elsewhere, key findings from images, and the last check results.
   3. **Exact absolute paths** of the files the next session needs, with line numbers where a spot matters; branch, worktree, last commit, uncommitted files, and running servers or background jobs. Never commit, stash or reset just to tidy up.
   4. **The commands that must be green** at the end, written out in full.
   5. **A checkable acceptance criterion**: one sentence or a short list saying when the work is done, and what is explicitly not part of it.
   6. **Links, not copies**: name where specs, plans, issues, commits and files live instead of copying them. Never paste file contents, code or diffs: the next session reads the files and runs `git diff` itself.
   7. **Recommended skills** for the next session, only ones you saw in this tool's skill list; "none" if the next session runs in another tool.
2. **Clean and save, without asking.** Re-read the draft and remove keys, tokens, passwords, cookies, secret URLs and any personal data the work does not need. Then save it in the folder the user's instruction files (such as `CLAUDE.md` or `AGENTS.md`) name for handoffs, else in the session's scratchpad or the system temp folder, outside the repository. Name it after the task plus date and time; if that name exists, add a number, never overwrite. Then list the saved file with its size from a shell; the write tool's success message alone does not count as saved. If writing fails, or the next session cannot reach that path (another machine, a cloud agent), put the cleaned text in your reply instead.
3. **Offer the hook, once** (Claude Code only; skip this step in other tools, on a resume, and whenever one of these is true: the user-level `settings.json` already mentions `context-checkpoint.py`, the file `.hook-declined` exists in this skill's folder, neither `python3` nor `python` runs on the machine, or you already asked this session). Ask one yes/no question that opens with this skill's name (`/fresh`), in the user's language, using its question or button UI if it has one. It says in plain words what the hook does (it adds a note when the context is large or the user returns after a long pause, so the user does not pay unnoticed for a cache that expired), what it changes (one entry in the user-level `settings.json`, valid for every project, with a backup copy), and what a no costs (the skill then starts only when you notice the context is large yourself). Each option says what it means for the user. On a clear yes, follow Hook setup. On a no, create an empty `.hook-declined` file in this skill's folder so the question does not come back; if that write fails, just do not ask again this session. Any other reply installs nothing and creates no file.
4. **Close with one message**: which case above applied (one line); a recap of two or three sentences saying what is done, what is open and what was not checked; the recommended model and effort, both by name, as in the file; the file's full path, as a link where the tool renders links; and a first line for the new session, ready to paste, such as "Read <path> and continue." If the case was size or images and the user is still on the same task, add that compacting (`/compact` in Claude Code) is the alternative; after a pause or for a new task, recommend the fresh session. End the message with the offer. If your tool can show a card that starts a new session on one click with the model and effort already set, use that card and ask nothing else about it (in the Claude desktop app: `start_session` with initiation "own_initiative", context "fresh", `model`, `effort`, `use_worktree` false so it starts in this session's folder, the ready-to-paste first line as `prompt`, and the goal plus the handoff's path as `background`). Its title, under 60 characters, opens with this skill's name (`/fresh`) and names the model and the effort. The click is the yes, so the old, large session does not need the extra turn that answering a question would cost. Otherwise, if your tool can start a session, ask one yes/no question that opens with `/fresh`, so the user sees which skill is asking, and names both the model and the effort, using its question or button UI if it has one, and start it only on a yes; otherwise say how to open a new session with that model and effort.

## Resume (a handoff file, or "continue" after a crash or stop)

Run this when a session starts from a handoff file, or when the user says to continue after a crash or stop. Read the handoff file first, if there is one.

1. **Check the real state before you act.** Read, never change: `git status`, the current branch, the worktrees, the last commit against the one the handoff names, the last integration or build log if the project writes one, and running background jobs and servers. Done when you have each value or "not found".
2. **Name every difference from the handoff** in one short list (another commit, extra uncommitted files, a job still running or gone, a missing branch). Where the handoff and the real state disagree, the real state wins. If the next step is unclear after that, ask one question.
3. **Continue the interrupted step**: the handoff's first open item, or after a crash the last step the handoff or the transcript shows. Finish with the commands the handoff lists as must-be-green.
4. **Leave running processes and locked folders alone.** Report the process (its PID and command) or the folder and what it blocks, and go on with whatever does not depend on it. Never kill a process or force-delete a locked folder as a workaround.

## Hook setup (Claude Code only)

Install the hook only after a clear yes to the question in step 3 of the steps above, or when the user asks for the hook by name. A yes to a fresh session is not a yes to the hook: it changes the user-level settings for every project. If a `.hook-declined` file exists in this skill's folder and the user now asks for the hook, delete that file first.

1. If `context-checkpoint.py` is not in this skill's folder, create it there from the block at the end of this file, exactly as given.
2. Copy the user-level `settings.json` to `settings.json.bak-fresh` next to it (add a number if that exists) and keep that backup, then merge this into the settings, keeping every existing setting and hook and not adding the entry twice:

   ```json
   {"hooks": {"UserPromptSubmit": [{"hooks": [{"type": "command", "command": "python -I \"<absolute path to this folder>/context-checkpoint.py\""}]}]}}
   ```

   Use whichever of `python3` or `python` exists on the machine.
3. Check that the file is still valid JSON and that the script runs (`echo {} | python -I <path>` prints nothing and exits 0); if not, restore the backup and report. Tell the user the backup's path.

The limits are constants at the top of the script.

### context-checkpoint.py

```python
"""Claude Code only: UserPromptSubmit hook that nudges the agent to run /fresh.

Reads the last usage record of the session transcript. When the context is large, or the
prompt cache has probably expired on a sizeable context, it adds one short note for the agent.
Silent otherwise. Never blocks, never fails loudly."""
import json, os, sys
from datetime import datetime, timezone

BIG = 150_000       # tokens: the whole context is re-read on every turn
STALE_MIN = 60      # minutes of pause after which the prompt cache has probably expired
STALE_CTX = 60_000  # tokens: a pause only matters when the context is sizeable

def main():
    data = json.loads(sys.stdin.buffer.read().decode("utf8", "replace") or "{}")
    path = data.get("transcript_path")
    if not path or not os.path.exists(path):
        return
    size = os.path.getsize(path)
    with open(path, "rb") as f:
        f.seek(max(0, size - 3_000_000))
        tail = f.read().decode("utf8", "ignore").splitlines()
    ctx = ts = None
    for line in reversed(tail):
        try:
            d = json.loads(line)
        except Exception:
            continue
        if d.get("isSidechain"):
            continue
        m = d.get("message")
        if isinstance(m, dict) and isinstance(m.get("usage"), dict):
            u = m["usage"]
            ctx = (u.get("input_tokens", 0) + u.get("cache_creation_input_tokens", 0)
                   + u.get("cache_read_input_tokens", 0))
            if ctx == 0:
                ctx = None
                continue
            ts = d.get("timestamp")
            break
    if ctx is None:
        return
    gap = 0
    try:
        t = datetime.fromisoformat(ts.replace("Z", "+00:00"))
        gap = (datetime.now(timezone.utc) - t).total_seconds() / 60
    except Exception:
        gap = 0  # unreadable timestamp: the size check still works
    note = None
    if ctx >= BIG:
        note = (f"Context checkpoint: the context is about {ctx // 1000}k tokens and is re-read on every turn. "
                "At the end of this turn, tell the user in one line why a fresh session pays off, "
                "then follow the /fresh skill.")
    elif gap >= STALE_MIN and ctx >= STALE_CTX:
        note = (f"Context checkpoint: the user was away for over {int(gap)} minutes, so the prompt cache has probably "
                f"expired and the context (about {ctx // 1000}k tokens) is now rewritten in full. "
                "Say so in one line and follow the /fresh skill if the topic changes or the task is done.")
    if note:
        print(json.dumps({"hookSpecificOutput": {"hookEventName": "UserPromptSubmit", "additionalContext": note}}))

try:
    main()
except Exception:
    pass
```

## Credits

Four rules for the handoff contents build on Matt Pocock's handoff skill ([mattpocock/skills](https://github.com/mattpocock/skills), MIT license): links instead of copies and recommended skills (steps 1.6 and 1.7), removing secrets and saving the file outside the repository (step 2).
