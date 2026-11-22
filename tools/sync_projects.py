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

    python tools/sync_projects.py little-lights [NiagaraUI checkout]

- Little Lights (the game, same repo as the tutor): only built when asked for
  by name, from D:\\NiagaraUI or the given checkout, under the base
  /little-lights/. Same service worker rule as the tutor; every hard-coded
  path to a public/ folder of the game is rewritten to the subfolder. The
  site serves it behind the /art password (src/worker.js).
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


def sync_little_lights(source: Path) -> None:
    base = "/little-lights/"
    dest = SITE / "little-lights"
    subprocess.run(
        f'npx vite build --base={base} --outDir "{dest}" --emptyOutDir',
        cwd=source, shell=True, check=True,
    )
    (dest / "sw.js").unlink(missing_ok=True)
    # Cloudflare reads _headers only at the site root.
    (dest / "_headers").unlink(missing_ok=True)
    # Paths in the source that start with a public/ folder or file name
    # (/audio/, /favicon.svg) skip the Vite base, so point them at the subfolder.
    names = [
        p.name + "/" if p.is_dir() else p.name
        for p in (source / "public").iterdir()
        if p.name not in ("sw.js", "_headers")
    ]
    changed = 0
    for f in dest.rglob("*"):
        if f.suffix not in (".js", ".css", ".html", ".webmanifest"):
            continue
        text = f.read_text(encoding="utf-8")
        fixed = text
        for name in names:
            for lead in "\"'`(":
                fixed = fixed.replace(lead + "/" + name, lead + base + name)
        if f.suffix == ".webmanifest":
            fixed = fixed.replace('"start_url": "/"', f'"start_url": "{base}?shell=game"')
        if fixed != text:
            f.write_text(fixed, encoding="utf-8")
            changed += 1
    print(f"little-lights: built from {source} ({commit_of(source)}), paths fixed in {changed} files")


if __name__ == "__main__":
    if sys.argv[1:2] == ["little-lights"]:
        source = Path(sys.argv[2]) if len(sys.argv) > 2 else NIAGARA
        if not source.exists():
            sys.exit(f"Not found: {source}")
        sync_little_lights(source)
        sys.exit()
    for source in (SOTL, NIAGARA):
        if not source.exists():
            sys.exit(f"Not found: {source}")
    sync_students_on_the_loose()
    sync_niagara()
