# nothing-lost: Review-Runde 1, Triage (2026-11-24)

Quellen: Copilot (P1-P17) und Gemini (P1-P14), von Jakob eingefügt. ChatGPT fiel aus (kein Usage). Noch nichts am Text geändert; erst nach Jakobs OK in einem Rutsch (Checkliste 4a.3). C = Copilot, G = Gemini.

Selbst nachgemessen (Skript, Wegwerf-Repo, 2026-11-24):
- Allow-Datei in Latin-1: Absturz mit Traceback, **Exit 1** (müsste 2 sein). Bestätigt (C13, G11).
- Allow-Datei mit UTF-8-BOM: erste Zeile passt nicht, die Zeile wird als LOST gemeldet (falscher Alarm, kein falsches OK). Bestätigt (G11).
- `--git-ref=--help`: git schlägt fehl, Skript meldet "git failed", Exit 2. Keine Injektion (C10 stimmt), nur eine unschöne Meldung (G9 teilweise).
- `--similar 5`: wird ohne Fehler akzeptiert. Bestätigt (C11).
- Nicht geprüft: Submodule/Symlinks in `git ls-tree` (G10), Gemini-Behauptung, Codex lehne `compatibility` ab (G2, Issue-Links nicht geöffnet).

## Vorschlag: übernehmen
- Allow-Datei über denselben Lesepfad wie die anderen Dateien lesen, BOM entfernen, ValueError abfangen, Exit 2 (C13, G11).
- `--similar` auf 0 bis 1 prüfen, sonst Exit 2 (C11).
- Schritt 1: `git commit --only -m "snapshot before rewrite" -- <Dateien>` statt `git add` plus Commit, damit nichts anderes Gestagetes mitgeht; vorher `git diff --cached --name-only` ansehen; Repo ohne Commit: Kopie außerhalb (G6).
- Schritt 2 und 5 widersprechen sich: in Schritt 2 steht, die Allow-Liste vorab zu führen. Neu: nur Zeilen, die der Nutzer benannt hat (G7).
- "cut and paste" umformulieren: Blöcke mit Datei-Werkzeugen oder Skript verschieben, nicht aus dem Gedächtnis neu schreiben (G4).
- Beschreibung: Auslöser nach vorn, "about 5 files or 100 lines" als Richtwert für den Agenten benutzbar machen; die Absicht (Rewrite ohne Verlust) in den ersten Satz (C2, G3). Dritte Person ist nach Anthropic-Seite empfohlen, nicht geprüft.
- Umbenennen von Dateien: alter Pfad in `--old`, neuer in `--new` (C7).
- "Repeat until OK": übersprungene Dateien müssen geprüft oder bewusst ausgenommen sein (C8).
- Zweimal LOST: erst prüfen, ob alle Zielorte in `--new` stehen (C6).
- Bei mehr als 50 CHANGED: Ausgabe filtern (Ziffern, kurze Zeilen), Zahl der ungelesenen nennen (G8).
- Hinweis: Ordner mit Build- oder venv-Inhalt nicht als `--new` angeben (G12); Nicht-UTF-8-Dateien werden mit Ersatzzeichen gelesen (G13) als Grenze nennen.
- `--git-ref` mit führendem `-` sauber mit Exit 2 ablehnen (G9, nur Schönheit).

## Vorschlag: ablehnen oder nur notieren
- C1, G1 (Repos nicht lesbar): Prüfungslücke der Reviewer, kein Textfehler; Netz-Abgleich bleibt "nicht vollständig geprüft".
- C4, G5 (Pfad-Platzhalter): Schritt sagt schon "full path of this skill's folder"; so lassen.
- C5 (Schritt 1 in Referenzdatei): SKILL.md hat 5,3 KB, kein Bedarf.
- C9 (Snapshot-Commit ist folgenreich): Absicht, wird dem Nutzer gesagt.
- C10, C14-C17, C12, G14 (Bestätigungen, globaler SKIPPED-Zustand): kein Handlungsbedarf, Skript läuft nur als CLI.

## Offen, erst prüfen
- G2: geprüft, Feld bleibt. Codex CLI 0.171.0-alpha.13 listet einen Skill mit `compatibility` normal (`codex debug prompt-input`); nur das Autoren-Skript `quick_validate.py` aus Codex' skill-creator lehnt unbekannte Felder ab. C3 ist damit erledigt: der aktuelle `compatibility`-Text ("Needs git and Python 3") nennt git schon.
- G10: reproduziert und behoben. Submodule brachen den Lauf ab (exit 2), Symlinks gaben einen falschen LOST-Alarm (exit 1); beides wird jetzt übersprungen und als skipped gelistet. Dazu der Fund: `--allow` löschte die skipped-Liste (seit dem Runde-1-Fix), auch behoben.

## Wert (Teil 5)
Beide: nicht redundant für große Mehrdatei-Umbauten, weil `git diff` verstreute Einzelzeilen nicht zeigt; der Workflow darum ist für manche zu schwer. Gemini: bricht bei umgebrochener Prosa und umformatiertem JSON (steht im Skill).

# Review-Runde 2, Triage (2026-11-24)

Quellen: Copilot (P1-P16), Gemini (P1-P14). Beide konnten die Repos wieder nicht öffnen (Netz-Abgleich bleibt "nicht vollständig geprüft"); beide sehen den Wert im Mengen-Abgleich, nicht im Git-Teil.

## Eingearbeitet
- G11 (echter Fehler, reproduziert): `--old` und `--new` auf dieselben Dateien ohne `--git-ref` las beide Seiten von der Platte, Ergebnis OK. Jetzt Exit 2 mit Hinweis (loss_check.py), SKILL.md Schritt 4 nennt es.
- G12 (UTF-32): BOM `FF FE 00 00` wurde als UTF-16 gelesen; jetzt übersprungen und als "skipped (UTF-32)" gelistet (getestet).
- G5 (Widerspruch Schritt 1, `git add` neuer Dateien vs. untracked kopieren): "new files need git add first" gestrichen.
- C6: nur die betroffenen Dateien kopieren, keine Caches/Datensätze.
- C7, G6: `--git-ref <Snapshot-Hash>` statt `HEAD`; Hash nach Schritt 1 notieren.
- G7: `--new` nur mit existierenden Pfaden (keine gelöschten, kein `->`).
- G8: Allow-Datei erst nach dem letzten OK-Lauf löschen oder bei Abbruch.
- G9: Negations- und Regelwörter in den Filter für über 50 CHANGED.
- G4: übersprungene Dateien im Bericht benennen statt vager "check another way".
- G10: PowerShell 5.1 kennt `&&` nicht, Hinweis mit `$LASTEXITCODE`.
- G3 / C3 (Reihenfolge): `python3`, dann `py -3`, dann `python` (Store-Stub).
- G2 / C2: Beschreibung "a rewrite touching 100 or more lines".
- C12: Satzzeichen-Zeilen können nicht per Ähnlichkeit passen, als Grenze genannt. C15/C16 (Markdown-Tippfehler `**`): in der Datei nicht vorhanden, ist ein Artefakt des Einfügens.

## Abgelehnt / nur notiert
- C1, G1, G13: Prüfungslücke der Reviewer. C4 (Erklärsatz "Retyping is where..." ): bleibt, ist der Grund für Schritt 3. C5, C9: Absicht. C8: schon in Schritt 5. C10, C11, C13, C14: Bestätigungen von dokumentierten Grenzen.
