# Netz-Abgleich now-and-then (zuvor project-state) (Stand 2026-11-24)

Format wie `NETZ-ABGLEICH.md` Teil 3. Diese Datei steht für sich, weil `NETZ-ABGLEICH.md` von parallelen Sessions beschrieben wird; Jakob oder die Hauptsession kann sie dort als "Teil 4" einfügen.

Methode: 5 Websuchen (standard): "project-state" agent skill SKILL.md; DECISIONS.md decision log STATE.md read first; skills.sh project state handoff STATE.md; Claude Code ADR append-only decisions log; Claude Code memory CLAUDE.md auto memory vs DECISIONS.md. Elf Seiten von zwei Haiku-Agenten gelesen (alle HTTP 200). Die skills.sh-Seiten zeigen nur den Anfang der SKILL.md ("Show more"), bei diesen sind die meisten Felder "nicht gesehen". Eine Suche ist kein Beweis, dass es nichts gibt.

## Namenskollision

- https://claudskills.com/skills/project-state/SKILL.md (vollständig gelesen, 7979 Zeichen): ein Skill mit genau dem Namen `project-state`. Beschreibung: "Use when implementing project state detection, designing STATE.md/TASKS.md templates, or configuring SQLite state store and MCP state protocol". Anderer Job: Zustandserkennung, STATE.md plus TASKS.md, SQLite-Speicher, MCP-Server, Shell-Werkzeuge (`hseos.config.yaml`, `.hseos/state/project.db`). Kein Entscheidungslog, keine Regel "append only", keine Regel für Widerspruch, kein Schritt am Sessionende gefunden. Ob die Seite zu einem gepflegten Registry-Skill gehört: nicht geprüft.
- Weitere Seiten mit ähnlichem Namen, anderer Job: https://www.skills.sh/b-mendoza/agent-skills/analyzing-recent-project-state (nur Suchergebnis, Release-Prüfung laut Suchtext), https://skills.sh/doubleslashse/claude-marketplace/state-management (angelesen: Workflow-Zustand, `FLOW.md` plus eine `ITEM-XXX.md` je Aufgabe, kein Entscheidungslog).
- Fazit Name: `project-state` ist belegt (mindestens eine Seite mit exakt dem Namen und anderem Inhalt). Gefunden in keiner Registry mit großen Installzahlen, aber nicht systematisch geprüft. Entscheidung über den Namen: Jakob.

## Nächster Inhalt (zwei Dateien, Zustand plus Entscheidungen)

- https://cdn.jsdelivr.net/gh/sh008/claude-lore@main/README.md (fast vollständig gelesen, 8718 Zeichen): Skill "Lore". Beschreibung: "The knowledge your codebase doesn't contain - decisions, dead ends, and state, recorded so the next session starts where the last one stopped." (Bindestrich von mir.) Dateien unter `docs/lore/`: `STATE.md` (etwa 150 Zeilen Limit), `ROADMAP.md`, `DECISIONS.md` (gewählt, warum, verworfen), `LEARNINGS.md`, `JOURNAL.md` (append-only Arbeitslog). Sessionstart: "The agent reads STATE.md and ROADMAP.md, greps LEARNINGS.md for whatever it's about to touch". Aufgabenende statt Sessionende: "not batched at session end". Widerspruch zur Nutzeranweisung: nicht gefunden; veraltete Einträge werden "corrected or deleted". Das ist der nächste Treffer: gleiche zwei Kernideen (STATE.md überschrieben, DECISIONS.md als Log, beim Start lesen), aber fünf Dateien (genau das, wovor die Reviewer warnten: Drift) und löschbare Einträge.
- https://skills.sh/krishamaze/skills/project-memory (angelesen): Befehle `/memory`, `/update-memory`, `/save`, `/handoff`, `/continue`; Modus "Read 3 files + git log -> update what changed". Welche drei Dateien: nicht gesehen. Sicherheitsaudits auf der Seite: Snyk Fail, Agent Trust Hub Fail, Socket Warn (so angezeigt, nicht selbst geprüft).
- https://tessl.io/registry/emerge/state-manager/skills (nur Registry-Seite, Skill-Text nicht gesehen): `.arch/state.json` und `.arch/decisions.md` laut Beschreibung, Architektur-Phasen. Rest nicht gesehen.
- Handoff-Skills (nur Suchergebnis, Texte nicht gelesen): viele `handoff`-Skills auf skills.sh schreiben `HANDOFF.md` oder Dateien unter `plans/handoffs/` für die nächste Session. Anderer Job (Übergabe einer Session, nicht dauerhafte Entscheidungen).

## Entscheidungslog-Skills (nur der Teil "Entscheidungen")

- https://skills.sh/bonkey/skills/decision-log (angelesen, abgeschnitten): ADR-Dateien in `docs/decisions`, startet automatisch beim Verlassen des Plan-Modus; trägt sich in AGENTS.md, CLAUDE.md, GEMINI.md ein (Text dazu nicht gesehen). Laut Suchtext sollen Einträge nie geändert werden: im gelesenen Teil nicht bestätigt.
- https://skills.sh/jonmumm/skills/adr-keeper (angelesen): ADRs in `docs/adrs/`, Namen `YYYY-MM-DD-kurz.md`, "never edit old decisions - supersede with new ones" (Bindestrich von mir). Gleiche Idee wie unsere Zeile `replaces <date> <topic>`, aber eine Datei je Entscheidung.
- https://skills.sh/bjg4/decision-log-skill/decision-log (angelesen): Ordner `decisions/` mit einer Datei je Entscheidung plus append-only `_index.jsonl`; autonom: "Do NOT ask the user which decisions to log. Log all unlogged decisions found." Das ist das Gegenteil unserer Regel (nur final vom Nutzer genannte Entscheidungen, im Zweifel eine Frage).
- https://www.skills.sh/denysdovhan/agents/agent-log (angelesen): Journal unter `.agents/log/YYYY-MM-DD-slug.md` mit Index, wird nur auf ausdrücklichen Wunsch angelegt ("do not create it, even when a plan is approved"). Ähnlich zu unserem "ohne Ja nichts anlegen".
- https://skills.sh/theagentledger/agent-skills/decision-log (angelesen): Kontext, Alternativen, erwartetes Ergebnis, Konfidenz, geplanter Rückblick. Dateien nicht gesehen.
- https://skillsmp.com/creators/thrawn01/claude-dotfiles/skills-adr-write (nur Suchergebnis): laut Suchtext "ADR is not a log book", Geschichte steht in der Versionskontrolle, kleine Änderungen direkt. Gegenposition zu append-only.
- Tessl/ECC `architecture-decision-records` (nur Suchergebnis): fragt vor dem Anlegen von `docs/adr/`, schreibt erst nach Freigabe.

## Eingebaute Gedächtnisfunktion (Überschneidung, die Reviewer nannten)

- https://code.claude.com/docs/en/memory (gelesen, 55359 Zeichen, die ersten 39949 wörtlich, der Rest nur als Zusammenfassung des Agenten): Claude Code hat zwei Mechanismen. `CLAUDE.md` wird jede Session als Nutzernachricht geladen, Doku empfiehlt unter 200 Zeilen. Auto Memory: Notizen, die Claude selbst schreibt, pro Repository, nicht zwischen Rechnern geteilt, von `MEMORY.md` werden "up to the first 200 lines or 25KB" beim Start geladen. Ein `DECISIONS.md` oder Entscheidungslog wird im wörtlichen Teil nicht erwähnt.
- Folgerung (eigene Überlegung, kein Fund): Auto Memory ist vom Agenten gewählt, geräte- und werkzeuggebunden, nicht im Projekt und nicht in git. Unser Log ist vom Nutzer bestätigt, liegt im Repo, gilt für jedes Werkzeug (Codex, Cursor). Das ist ein anderer Zweck, aber die Überschneidung bei "Korrekturen und Vorlieben merken" bleibt: nicht geprüft, wie Auto Memory sich bei einem Widerspruch zu einer DECISIONS.md-Zeile verhält.
- Anderes Werkzeug (Codex `AGENTS.md`, Cursor Rules): nicht geprüft.

## Urteil

Ähnlich, nah an Lore und an den ADR-Log-Skills, aber nicht gleich. Wörtlich gleiche Sätze: keine gesehen. Bei uns gefunden und bei den gelesenen Seiten nicht: (1) genau zwei Dateien mit der Begründung "mehr Dateien driften"; (2) Regel "Nutzer sagt jetzt etwas anderes als ein Eintrag: Nutzer gilt, Widerspruch in einem Satz melden, fragen ob ein ersetzender Eintrag angehängt wird"; (3) nur final genannte Entscheidungen, nie vom Agenten erfundene, und "ohne Ja nichts anlegen"; (4) Prüfung der Zustandsangaben gegen den echten Zustand vor dem Weiterbauen; (5) Nichts-verloren-Prüfung beim Verschieben alter Einträge. Bei Lore und adr-keeper vorhanden und bei uns auch: Zustand überschrieben, Log nicht überschrieben, Start lesen. Bei skills.sh ist der Großteil der Seiten abgeschnitten, deshalb kann ein Punkt in dem ungesehenen Teil stehen.

Offene Punkte für Jakob: Name `project-state` ist von einem anderen Skill (claudskills.com) mit anderem Job belegt; die Dateinamen `STATE.md` und `DECISIONS.md` sind bei Lore und `STATE.md` auch bei dem claudskills-Skill dieselben, was Verwechslung oder Konflikt im selben Projekt möglich macht (nicht getestet).

Anfragen: siehe Methode.
