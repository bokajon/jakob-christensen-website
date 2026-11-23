# leakcheck (vorher preflight) - Entwurf, Notizen

## Quellen und Herkunft
- Jakobs Eigenbau: aus seinem privaten Skript `tools/check_skill.py` (Website-Repo) abgeleitet, als Skill mit gebündeltem Skript `scripts/leakcheck.py` neu geschrieben. Keine Teile aus Matt Pococks Skills. Frontmatter-Regeln aus der Agent-Skills-Spezifikation (agentskills.io/specification, laut check_skill.py am 2026-11-22 gelesen, hier nicht neu geprüft).
- Name `leakcheck`: von Jakob gewählt (2026-11-23). Vorher `preflight`, umbenannt wegen Nähe zu `skill-preflight` (github.com/agent-contracts/skill-preflight, existiert, MIT). Kollisionsprüfung `leakcheck`: kein Treffer gesehen, aber GitHub-Codesuche braucht Login, Teile der Repo-Suche waren abgeschnitten, npm 403, PyPI Challenge: nicht bestätigt, vor dem Release im Browser prüfen. Verworfene Namen: prerelease (zu generisch), clearance (sagt nichts), shipcheck (Zweitplatz).
- Verwandt: NVIDIA SkillEvaluator (Apache 2.0) macht Ähnliches. Nicht getestet, nicht gelesen, nur als Hinweis bekannt.

## Verallgemeinert
- Die feste Wortliste (Jakobs Name, Maschine, Projekte) und die Liste privater Dokumente sind raus. Private Wörter kommen nur über `--words DATEI`; der Skill fragt den Nutzer danach.
- Der Deutsch-Check ist nur noch optional (`--english`) und nur ein Hinweis, der nie fehlschlägt.
- Gedankenstriche werden nur mit `--no-dashes` gemeldet (Jakobs Stilregel, nicht allgemein).
- Muster in der Skriptdatei sind aus Teilen gebaut (`TOOL_ONLY`, `HOME`), damit sich die Datei nicht selbst meldet.
- Gegenüber dem Eigenbau korrigiert: das Windows-Pfad-Muster fand nur Schrägstriche (`[\/]`), jetzt auch Backslashes (`[\/]`).

## Offene Fragen
- Entschieden (Jakob 2026-11-23): die Deutsch-Wortliste `GERMAN_HINTS` ist aus Teilen gebaut, damit `--english` leakcheck.py nicht mehr als "teilweise Deutsch" meldet. Geprüft mit `--english` auf dem eigenen Ordner.
- Das Muster "long secret-like string" (40+ Zeichen): gemessen 2026-11-23 auf 18 Skill-Ordnern (13 Entwürfe, 5 öffentliche): 0 Treffer bei den Muster-Prüfungen. Auf fremden Skills mit langen URLs oder Hashes nicht gemessen.

## Getestet (2026-11-23, Python -I, Wegwerf-Skills im Scratchpad)
Je ein Skill mit genau einem Fehler, jeder wird gefunden, Exit 1:
privates Wort (`--words`), Windows-Pfad, Home-Pfad (`~/.claude`), E-Mail, Schlüssel (`sk-...`), falscher `name:`, zusätzliches Frontmatter-Feld, Tool-Name, Gedankenstrich mit `--no-dashes`.
Ohne `--no-dashes` und ohne `--words` bleibt der jeweilige Fehler unbemerkt (OK, Exit 0, wie gewollt). Sauberer Skill: Exit 0. Aufruf ohne Argumente: Exit 2. Lauf auf dem eigenen Ordner: OK; `tools/check_skill.py skill-drafts/leakcheck`: Exit 0.

## Nicht getestet
- Binärdateien, mehrere Ordner in einem Aufruf, `--words` mit Kommentarzeilen, Skills mit mehrzeiligem `description`.
- Python unter macOS/Linux (nur Windows gelaufen).
- Das Verhalten eines Agenten, der den Skill liest (kein Trigger-Test der Beschreibung).

## 3-KI-Review 2026-11-23 (Gemini, ChatGPT bis P16, Copilot) und was eingebaut wurde
Rohantworten: `D:\Tempeview-answers-preflight-2026-11-23.md`. ChatGPT brach in P17 ab (keine Credits), Part 5 fehlt dort. Jeder Punkt gegen den Code geprüft.
Eingebaut: Fund-Ausgabe maskiert (erste 4 und letzte 4 Zeichen, vorher bis 40 Zeichen im Klartext); SKILL.md nicht UTF-8, BOM, fehlende `--words`-Datei, unlesbare Dateien ohne Absturz; Symlinks nicht gefolgt (Hint); `.git`, `node_modules`, `__pycache__` im Skript übersprungen statt Kopie anzulegen; private Wörter mit Wortgrenzen und auch im Dateipfad; Schlüsselmuster um `sk-proj-`, `sk-ant-`, `gh[pousr]_`, `github_pat_`, `AIza`, PEM-Header erweitert (`sk-` mit Lookbehind, damit `task-...` nicht trifft); Meldung "works in one tool only" ersetzt durch "tool-specific"; SKILL.md: Python zuerst prüfen, Beschreibung in dritter Person ("Always write in third person", Anthropic Best Practices, Abschnitt "Writing effective descriptions", gelesen), "safe" raus, Abbruch nach drei Läufen = nicht bereit, Links offline = "not opened", Report in drei kurzen Abschnitten, Hinweis auf gitleaks/trufflehog und "kein vollständiger YAML-Parser".
Abgelehnt (mit Grund): Bindestrich-Regeln fehlen (Copilot; `NAME_RE` verbietet sie schon), Frontmatter fehlt (Paste-Effekt), Unicode-Namen (Spec widerspricht sich, ASCII bleibt), metadata-Parser und Typprüfung (kein falscher Treffer, Werte sind immer Strings), Tilde-Pfade, Geschmackspunkte von Copilot (P6, P13, P15, P18, P20).
Faktencheck: Claude Code dokumentiert `disable-model-invocation` und `user-invocable` (code.claude.com/docs/en/skills). Ob Cursor `disable-model-invocation` als Feld dokumentiert: nicht bestätigt (Mitte der Seite abgeschnitten).

## Getestet nach dem Batch (2026-11-23, Windows, Python -I, Wegwerf-Skill im Scratchpad)
Maskierung (`sk-ant-...`: `sk-a...yz12 (41 characters)`), BOM (kein falsches "no frontmatter"), SKILL.md nicht UTF-8 (Problem statt Absturz), fehlende `--words`-Datei (Exit 2), Wortgrenze (`ann` trifft `banner` nicht, `Ann` ja), `task-management-...` kein Treffer, `.git` übersprungen, `sk-proj-`, PEM-Header und `github_pat_` gefunden. `tools/check_skill.py skill-drafts/leakcheck`: Exit 0; Lauf auf dem eigenen Ordner mit `--english --no-dashes`: OK.
Nicht getestet: Symlinks (auf dieser Maschine fehlt das Recht zum Anlegen, WinError 1314), macOS/Linux, Agentenverhalten, zweite Review-Runde, private Kopien (kein privater preflight-Ordner in ~/.claude/skills oder ~/.agents/skills gefunden).
