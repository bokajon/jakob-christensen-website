"""Copy the current state of other projects into public/ so they are served
under jakobchristensen.com/<name>/.

    python tools/sync_projects.py

- Students on the Loose: copies its public/ folder as is (paths are relative).
  Its _headers file only works at the site root, so its rules live in
  public/_headers here instead.
- Niagara UI Tutor: builds it with Vite under the base /niagara-tutor-ui/.
  The service worker is left out because it registers itself at /sw.js,
  which only works when the app sits at the root of a domain. Hard-coded
  /videos/ paths are rewritten to the subfolder.
"""

import shutil
import subprocess
import sys
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent / "public"

SOTL = Path(r"D:\Projects\students-on-the-loose\public")
NIAGARA = Path(r"D:\NiagaraUI")


def commit_of(repo: Path) -> str:
    try:
        return subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"],
            cwd=repo, capture_output=True, text=True, check=True,
        ).stdout.strip()
    except (OSError, subprocess.CalledProcessError):
        return "unknown"


def sync_students_on_the_loose() -> None:
    dest = SITE / "students-on-the-loose"
    shutil.rmtree(dest, ignore_errors=True)
    shutil.copytree(SOTL, dest, ignore=shutil.ignore_patterns("_headers"))
    print(f"students-on-the-loose: copied from {SOTL} ({commit_of(SOTL.parent)})")


def sync_niagara() -> None:
    dest = SITE / "niagara-tutor-ui"
    subprocess.run(
        f'npx vite build --base=/niagara-tutor-ui/ --outDir "{dest}" --emptyOutDir',
        cwd=NIAGARA, shell=True, check=True,
    )
    (dest / "sw.js").unlink(missing_ok=True)
    # A few video paths in the source start with /videos/ instead of using
    # the Vite base, so point them at the subfolder here.
    for js in (dest / "assets").glob("*.js"):
        text = js.read_text(encoding="utf-8")
        fixed = text
        for quote in "\"'`":
            fixed = fixed.replace(quote + "/videos/", quote + "/niagara-tutor-ui/videos/")
        if fixed != text:
            js.write_text(fixed, encoding="utf-8")
    print(f"niagara-tutor-ui: built from {NIAGARA} ({commit_of(NIAGARA)})")


if __name__ == "__main__":
    for source in (SOTL, NIAGARA):
        if not source.exists():
            sys.exit(f"Not found: {source}")
    sync_students_on_the_loose()
    sync_niagara()
