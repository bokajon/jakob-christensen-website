# tidy-worktrees - Entwurf, Notizen

## Quellen
- Kern: die Git-Prüfung aus Schritt 3 von `skill-drafts/tidy-sessions/SKILL.md` (früher `tidy`): Standardbranch ermitteln, `git merge-base --is-ancestor`, `git rev-list --merges`, `git cherry`, `git status --porcelain --untracked-files=all`. Ohne Session-Werkzeuge. Neu geschrieben für Worktrees und Branches statt Sessions.
- Entscheidung Jakob 2026-11-23: tidy wird geteilt, tidy-worktrees ist der generische Teil (nur git).
- Name nicht gegen das Netz geprüft (bekannt: `tidy` ist bei finolabs mit anderem Job belegt, `lanes` bei tavinathanson; `tidy-worktrees` nicht gesucht).

## Neu gegenüber tidy-sessions
- "Keine eigenen Commits": Spitze gleich Standardbranch-Spitze, ODER das Reflog des Branches hat nur die Zeile `branch: Created from ...`. Zweites war nötig: ein Branch, der vor einem späteren Vorrücken von main angelegt wurde, hat eine Spitze, die nur Vorfahre von main ist, und sähe sonst "gelandet" aus (im Test `nocommits`). Wird nie entfernt, nur gemeldet. Leeres oder abgelaufenes Reflog beweist nichts, dann entscheiden die normalen Prüfungen (Schwäche, siehe Fragen).
- Gesperrte Worktrees, Haupt-Checkout, aktuelles Worktree, Detached HEAD: nie angefasst.
- Entfernen nur `git worktree remove <pfad>` ohne `--force`, `git branch -d`, nie `-D`. Prunable nur melden; `git worktree prune` nur nach einem Ja.
- Kein `git fetch`, kein Push, keine Remote-Branches. Gelandet wird gegen `origin/<default>` oder die lokale Standardbranch geprüft, ein Remote-Ref kann veraltet sein (steht im Report).

## Abgleich mit strays (`skill-drafts/push`) und lanes (`skill-drafts/lanes`)
Gelesen: `skill-drafts/push/SKILL.md`, `skill-drafts/lanes/SKILL.md`.
- **strays**: findet lokale Arbeit, die nicht auf dem Remote ist, und pusht sie nach Freigabe. Es macht `git fetch origin` (einziger Schreibzugriff) und kategorisiert Branches (MERGED nur gezählt). Guardrail: "no commit, merge, rebase, reset, cherry-pick, stash, deletion or file change". Es löscht also nie etwas. Keine Überschneidung: tidy-worktrees pusht nichts und holt nichts. Verbindung: strays zuerst, dann tidy-worktrees, damit ungepushte Arbeit nicht übersehen wird (tidy-worktrees prüft nur "im Standardbranch gelandet", nicht "auf dem Remote").
- **lanes**: Integrations-Ablauf, Regel "Remove the branch's worktree only after a real OK:", dann `git worktree remove <worktree path>` und `git branch -d <branch>` für das **eigene** Worktree. Überschneidung nur bei den zwei Befehlen, nicht bei der Auswahl: lanes entfernt genau ein Worktree direkt nach `OK:`, tidy-worktrees räumt liegengebliebene gelandete Reste anderer Sessions auf. Das stehende `<repo>-quick`-Worktree aus lanes (detached nach der Integration) fasst tidy-worktrees nicht an (Detached HEAD wird nur gemeldet).
- Ergebnis: Überschneidung nein bei Zweck und Auswahl, ja nur bei den Entfernungsbefehlen von lanes. Im SKILL.md steht die Abgrenzung in der Beschreibung.

## Offene Fragen an Jakob
- Entschieden (Jakob 2026-11-23): keine zusätzliche Prüfung "auf dem Remote vorhanden". Gelandet heißt: im Standardbranch (`origin/<default>`, sonst lokal). Strays pusht, tidy-worktrees räumt; ohne Remote ist der Standardbranch die einzige Kopie, das bleibt so.
- Branch ohne Reflog (z. B. frischer Klon): ein ganz neuer, leerer Branch auf älterer Basis würde als gelandet erkannt und entfernt. Schaden gering (keine Arbeit darin), aber eine Session, die gerade dort startet, verliert ihren Branch.
- Entschieden (Jakob 2026-11-23): Prunable nur melden, `git worktree prune` erst nach einem Ja. Steht so im Skill.

## Getestet (2026-11-23, Git 2.55.0 Windows, Wegwerf-Repo im Scratchpad)
Die Schritte des Skills wurden als Shell-Skript nachgebaut (`.../scratchpad/tw/judge.sh`) und gegen ein Repo mit diesen Fällen gelaufen:
- gelandet und sauber (Worktree + Branch): als REMOVABLE erkannt, `git worktree remove` + `git branch -d` liefen ohne Fehler.
- gelandeter Branch ohne Worktree: erkannt, `git branch -d` ok.
- gelandet per Merge-Commit: erkannt, entfernt.
- gelandet, Worktree nur mit ignorierter Datei: erkannt (Hinweis "has ignored files"); `git worktree remove` ohne `--force` hat Worktree samt ignorierter Datei gelöscht. Damit ist belegt, dass git ignorierte Dateien mitlöscht.
- ungelandeter Branch: behalten. Squash-Merge (squash-gemergter Branch mit 2 Commits): `+`-Zeilen in `git cherry`, behalten, `git branch -d` verweigert (verwendet von Worktree).
- Branch ohne eigene Commits (vor dem Vorrücken von main angelegt, Spitze nur Vorfahre): per Reflog erkannt, behalten. Ohne die Reflog-Prüfung wäre er als gelandet entfernt worden.
- Branch mit Merge-Commit in der Historie, nicht gelandet: "merge history not verifiable".
- Worktree mit Änderung: behalten; `git worktree remove` ohne `--force` verweigert ebenfalls ("contains modified or untracked files").
- Gesperrtes Worktree: behalten; `git worktree remove` verweigert ebenfalls.
- `git branch -d` auf ungemergtem Branch ohne Worktree: verweigert (nicht `-D`).
- Worktree-Ordner von Hand gelöscht: `git worktree list --porcelain` zeigt `prunable`.

## Nicht getestet
- Der Skill wurde nicht von einem Agenten ausgeführt, nur sein Ablauf als Skript. Kein Trigger-Test der Beschreibung.
- `origin/HEAD` und Remote-Refs (Wegwerf-Repo hatte keinen Remote), Standardbranch `master`, Detached-HEAD-Worktree, aktuelles Worktree als Ausführungsort, Scope-Angabe des Nutzers.
- Windows nur; Pfade mit Leerzeichen im Skript-Test nicht geprüft.
- `git worktree prune` selbst nicht ausgeführt.
- Die Mindestversion git 2.31 stammt aus lanes (`rev-parse --path-format`) und der Annahme zum `prunable`-Feld, nicht aus einer Versionstabelle geprüft.
