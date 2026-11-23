# preflight - Entwurf, Notizen

## Quellen und Herkunft
- Jakobs Eigenbau: aus seinem privaten Skript `tools/check_skill.py` (Website-Repo) abgeleitet, als Skill mit gebündeltem Skript `scripts/preflight.py` neu geschrieben. Keine Teile aus Matt Pococks Skills. Frontmatter-Regeln aus der Agent-Skills-Spezifikation (agentskills.io/specification, laut check_skill.py am 2026-11-22 gelesen, hier nicht neu geprüft).
- Name `preflight`: von Jakob gewählt (2026-11-23), vorher intern skill-check. Name nicht gegen das Netz geprüft.
- Verwandt: NVIDIA SkillEvaluator (Apache 2.0) macht Ähnliches. Nicht getestet, nicht gelesen, nur als Hinweis bekannt.

## Verallgemeinert
- Die feste Wortliste (Jakobs Name, Maschine, Projekte) und die Liste privater Dokumente sind raus. Private Wörter kommen nur über `--words DATEI`; der Skill fragt den Nutzer danach.
- Der Deutsch-Check ist nur noch optional (`--english`) und nur ein Hinweis, der nie fehlschlägt.
- Gedankenstriche werden nur mit `--no-dashes` gemeldet (Jakobs Stilregel, nicht allgemein).
- Muster in der Skriptdatei sind aus Teilen gebaut (`TOOL_ONLY`, `HOME`), damit sich die Datei nicht selbst meldet.
- Gegenüber dem Eigenbau korrigiert: das Windows-Pfad-Muster fand nur Schrägstriche (`[\/]`), jetzt auch Backslashes (`[\/]`).

## Offene Fragen
- Entschieden (Jakob 2026-11-23): die Deutsch-Wortliste `GERMAN_HINTS` ist aus Teilen gebaut, damit `--english` preflight.py nicht mehr als "teilweise Deutsch" meldet. Geprüft mit `--english` auf dem eigenen Ordner.
- Das Muster "long secret-like string" (40+ Zeichen) kann bei langen URLs oder Hashes Fehlalarme geben. Nicht gemessen.

## Getestet (2026-11-23, Python -I, Wegwerf-Skills im Scratchpad)
Je ein Skill mit genau einem Fehler, jeder wird gefunden, Exit 1:
privates Wort (`--words`), Windows-Pfad, Home-Pfad (`~/.claude`), E-Mail, Schlüssel (`sk-...`), falscher `name:`, zusätzliches Frontmatter-Feld, Tool-Name, Gedankenstrich mit `--no-dashes`.
Ohne `--no-dashes` und ohne `--words` bleibt der jeweilige Fehler unbemerkt (OK, Exit 0, wie gewollt). Sauberer Skill: Exit 0. Aufruf ohne Argumente: Exit 2. Lauf auf dem eigenen Ordner: OK; `tools/check_skill.py skill-drafts/preflight`: Exit 0.

## Nicht getestet
- Binärdateien, mehrere Ordner in einem Aufruf, `--words` mit Kommentarzeilen, Skills mit mehrzeiligem `description`.
- Python unter macOS/Linux (nur Windows gelaufen).
- Das Verhalten eines Agenten, der den Skill liest (kein Trigger-Test der Beschreibung).
