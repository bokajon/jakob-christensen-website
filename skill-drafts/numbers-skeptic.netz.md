## Netz-Abgleich retest (Stand 2026-11-24)

Hinweis: `retest` war der frühere Name dieses Skills. Jakob hat ihn am 2026-11-24 durch `numbers-skeptic` ersetzt (Ordner und Dateien umbenannt). Der Abgleich unten betrifft den alten Namen und bleibt so stehen; zu `numbers-skeptic` siehe Notizen, Abschnitt Name.

Methode: 6 Websuchen (standard) mit "retest" plus agent skill, SKILL.md, skills.sh, Claude Code, /retest, Benchmark-Disziplin, verification-before-completion, Namensvarianten; 6 Seiten von Haiku-Agenten gelesen (2 vollständig, 3 in der Mitte abgeschnitten, 1 mit HTTP 404). Eine Suche ist kein Beweis, dass es nichts gibt.

### Namenskollision: der Name ist mehrfach belegt, mit anderem Job
- https://skills.rest/skill/retest (gelesen, vollständig): Skill `retest` von mindfortai/security-skills (auf der Seite als OFFICIAL markiert), "Validate security findings by executing targeted local smoke tests and comparing outcomes." Prüft, ob gemeldete Sicherheitslücken noch reproduzierbar sind. Beispielprompt: "Retest the vulnerability identified as ... in the latest code version." Gleicher Name, anderer Zweck (Sicherheits-Befunde nachprüfen, nicht Messwerte).
- https://skills.cat/skills/thitic9203/ols-qa/retest-bug-workflow (gelesen, vollständig): `retest-bug-workflow`, testet einen Jira-Bug nach dem Fix des Entwicklers, Trigger "retest bug", "/retest-bug". Anderer Zweck (QA-Ablauf mit Jira).
- https://www.skillsdirectory.com/skills/bromso-retest (nur Suchergebnis, Seite lieferte 404): `retest` aus bromso/metapowers, Inhalt nicht gesehen.
- https://github.com/jpsim/retest (nur Suchergebnis): GitHub-Action, der PR-Kommentar `/retest` startet fehlgeschlagene Workflows neu. Kein Skill, aber `/retest` ist im CI-Alltag ein bekannter Befehl mit der Bedeutung "Test nochmal laufen lassen".
- https://github.com/devlooped/dotnet-retest (nur Suchergebnis): dotnet-Tool gleichen Namens.
- Folge: mindestens zwei Skills heißen `retest` oder fast so und meinen etwas anderes. Wer `/retest` tippt, erwartet "Test nochmal laufen lassen" oder "Fix nachprüfen", nicht "Messwert wiederholen und Streuung melden". Die Reviewer sagten, der Name klinge nach Planung; die Suche stützt das nicht, sie zeigt stattdessen: der Name klingt nach Bug-/Test-Wiederholung.

### Nächster Inhalt
- https://tessl.io/skills/github/obra/superpowers/verification-before-completion (gelesen, Mitte abgeschnitten): Beschreibung "Use when about to claim work is complete, fixed, or passing, before committing or creating PRs". Nach Suchergebnissen (nicht im Original gelesen): Regel "frische Belege aus dieser Nachricht", Befehl nennen, ausführen, Ausgabe lesen. Im sichtbaren Teil nichts zu Wiederholung, Streuung, Rechnerlast, Laufzeitwerten oder "unused"-Spuren; der abgeschnittene Teil ist nicht geprüft. Abgrenzung: dort geht es darum, dass überhaupt geprüft wurde, hier darum, wie eine Zahl gemessen wird.
- https://www.skills.sh/caizongyuan/skills/check-benchmark (nur Suchergebnis): `check-benchmark` prüft, ob die Belege eine genannte Leistungsbehauptung tragen (Messaufbau, ob die Arbeit wirklich lief, Zählungen, Fehler, Zeitüberschreitungen, Uhr und Einheiten). Nah an unserem Skill, aber Review einer fremden Messung statt eigene Messdisziplin; Text nicht gelesen.
- https://www.claudepluginhub.com/skills/arbazkhan971-godmode/bench (gelesen, Mitte abgeschnitten): `bench`, führt einen Messbefehl N-mal aus, rechnet Mittelwert, Median, Standardabweichung, cv; bei zu hoher Streuung bis zu 3 Wiederholungen des ganzen Blocks. Aufwärmen, Rechnerlast, Laufzeitwert, "unused"-Spur im sichtbaren Teil nicht gesehen.
- https://www.claudepluginhub.com/skills/josephneumann-claude-corps/benchmark (gelesen, Mitte abgeschnitten): Benchmark gegen eine Basis-Version in temporärem Worktree. Laut Suchergebnis (nicht im Original bestätigt) Median und min/max pro Lauf, Warnung bei hoher Streuung.
- https://raw.githubusercontent.com/Svendsys/agent-skills/master/skills/benchmark-skill/SKILL.md (nur Suchergebnis): misst, ob ein Skill etwas bringt (mit/ohne Skill). Anderes Thema.
- Tool-Dokus und Benchmark-Skills sind meist auf Skill-Evals oder Leistungsvergleiche zweier Versionen ausgelegt. Nicht gefunden (sichtbarer Teil): ein Skill, der Wiederholung, Rechnerlast, Laufzeitwert aus der laufenden App, Größen/Anteile berechnen und "unused" nur nach Referenzspur zusammen verlangt. Das ist keine Aussage über die abgeschnittenen Mittelteile.

### Urteil
Ähnlich in Teilen, nicht gleich: Mehrfachläufe mit Median und Streuung kommen bei `bench` und `benchmark` vor, die Kombination mit "Größe, Anteil, unused messen statt schätzen" und "Wert aus der laufenden App" fand die Suche nicht. Der Name ist das Problem: `retest` ist für Sicherheits-Nachprüfung und Jira-Bug-Retest belegt, und `/retest` ist ein CI-Befehl.

Namensvorschläge (nur Vorschläge, Jakob entscheidet; Umbenennen ist nicht gemacht):
- `measure-twice`: schon vorher geprüft (NETZ-ABGLEICH.md Teil 1) und vergeben (mattshepphard/skills/measure-twice und agensi.io, anderer Zweck).
- `bench-check`, `perf-verify`, `benchmark-check` (Namen der Reviewer): `bench-check` und `benchmark-check` gesucht, kein Skill gleichen Namens gefunden (eine Suche, nicht belegt; nächster Treffer `check-benchmark`, anders herum benannt). `perf-verify` nicht gesucht.
- `measure-before-claim`, `remeasure`: `remeasure` in der Suche nicht gefunden, `measure-before-claim` nicht gesucht. Ob die Namen zum Inhalt passen: `bench-check` verengt auf Benchmarks, der Skill deckt aber auch Größe, Anteil und "unused" ab; `measure-before-claim` sagt das, ist aber lang.
- Empfehlung damals: umbenennen (umgesetzt, neuer Name `numbers-skeptic`). `retest` hat zwei bekannte Gegenstücke mit anderem Zweck. Nach dieser Suche am wenigsten belegt und inhaltlich passend: `measure-before-claim` (nicht gesucht, vor der Entscheidung noch prüfen).

Anfragen: "retest agent skill SKILL.md repeat measurement before claiming"; "skills.sh retest skill Claude Code"; "obra superpowers verification-before-completion SKILL.md"; "agent skill benchmark warm-up median variance repeat runs claude code skill performance measurement"; "github retest claude code skill OR slash command /retest"; "agent skill remeasure OR measure-claims OR claim-check OR bench-check SKILL.md skills.sh".
