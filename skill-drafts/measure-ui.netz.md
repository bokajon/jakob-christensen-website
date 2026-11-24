# Netz-Abgleich measure-ui (Stand 2026-11-24)

Methode: 4 Websuchen (standard), danach 9 Seiten von einem Haiku-Agenten gelesen. Gelesen heißt hier: Seite abgerufen, Text teilweise gesehen. Seiten 1, 3, 6, 8, 9 waren abgeschnitten, 2 (403) und 4 (404) nicht abrufbar. "Nicht gesehen" heißt: im gelesenen Text nicht vorhanden, nicht: im Skill nicht vorhanden. Eine Suche ist kein Beweis, dass es nichts gibt. Format wie Teil 3 in `NETZ-ABGLEICH.md`.

## Namenskollisionen

`measure-ui`:
- Kein Skill exakt `measure-ui` gefunden (Suche "measure-ui" agent skill SKILL.md).
- Nächster Name: `ux-measure` im Repo erclx/canon (https://www.skillsdirectory.com/skills/erclx-ux-measure, nur Suchergebnis, Abruf 404). Laut Suchtext Trigger "measure the UI" oder "check Core Web Vitals", also eher Performance-Metriken. Nicht gelesen.
- `measure` von ghaida/intent (https://www.skills.sh/ghaida/intent/measure, nur Suchergebnis): UX-Erfolgsmetriken, anderer Job.
- `design-measure` von HKamkar/agentic-cms (https://www.skillsdirectory.com/skills/hkamkar-design-measure, gelesen, Mitte fehlt): macht aus einer Screenshot-Aussage Zahlen (Box, Computed Styles, Stacking) per eigenem Tool `pnpm kit probe`. Ähnliche Idee, projektgebunden.

`ui-verify` (von zwei Reviewern vorgeschlagen): der Name ist vergeben, mehrfach, mit anderen Jobs.
- mthines/agent-skills `ui-verify` (https://tessl.io/registry/skills/github/mthines/agent-skills/ui-verify, gelesen, Mitte fehlt): prüft eine Absichtsbeschreibung aus dem PR-Text auf der Preview, mit Beweisen, Screenshots und Aufnahmen im PR. Viewport, Zahlen, Umschalten: nicht gesehen.
- raddue/crucible `ui-verify` (https://skills.sh/raddue/crucible/ui-verify, gelesen, bei "Show more" abgeschnitten): vergleicht Unity-UI mit einem Mockup, Delta-Bericht. Anderer Job.
- iamcxa `ui-verify` im e2e-pipeline-Plugin (nur Suchergebnis, Abruf 403): laut Suchtext vergleicht es berechnete CSS-Werte bekannter Selektoren mit Soll-Tokens aus einer YAML-Datei. Nicht gelesen.
- OneKeyHQ `1k-ui-verify` (https://tessl.io/registry/skills/github/OneKeyHQ/app-monorepo/1k-ui-verify, gelesen, Mitte fehlt): steuert die OneKey-Apps. Ähnlicher Name, anderer Job.
- Außerdem `verify-ui` (jonmumm/skills, sauklaus: gelesen, abgeschnitten: verlangt einen echten Browser-Screenshot, bevor Erfolg gemeldet wird; https://www.skills.sh/jonmumm/skills/verify-ui) und `verify-ui` bei provectus (nur Suchergebnis).
- Fazit: `ui-verify` wäre kein freier Name, mindestens vier Skills heißen so oder fast so. `measure-ui` ist frei, nur `ux-measure` und `design-measure` liegen nah am Wort.

## Ähnliche Inhalte

- https://claudskills.com/skills/autonomous-ui-inspection/SKILL.md (vollständig gelesen): Playwright-Screenshots plus Puppeteer-Metriken mit `getBoundingClientRect()` und scrollWidth/clientWidth. Viewport nur als Beispiel (1600x1200) empfohlen, nicht als erster Pflichtschritt. Vorher/Nachher-Screenshots für eine Interaktion. Mehrere Umschalt-Reihenfolgen, "nur der eigene Tab", Referenz wörtlich nehmen, Bericht mit "not checked": nicht gesehen. Das ist die nächste Entsprechung im Messteil.
- https://raw.githubusercontent.com/makieali/claude-code-engineer/main/skills/frontend-verify/SKILL.md (vollständig gelesen): Screenshots bei 375, 768, 1440, Accessibility-Snapshot, Konsole, bis 3 Runden. Keine Maße als Zahlen, kein Umschalten.
- https://skills.sh/hixuanxuan/browser-automation/visual-verify (nur Suchergebnis, in Teil 2 der Netz-Datei gelesen, hier nicht neu gelesen): Overlay-Boxen an `getBoundingClientRect`-Koordinaten, braucht lokales Chrome mit CDP Port 9222.
- https://tessl.io/registry/skills/github/ColeMurray/background-agents/visual-verification (nur Suchergebnis): Vorher/Nachher-Screenshots, fester Viewport laut Suchtext.
- shiplightai `verify` (https://skills.sh/shiplightai/agent-skills/verify, nur Suchergebnis): erst DOM prüfen, Screenshot nur wenn nötig.

## Was die Fundstücke nicht haben (im gelesenen Text)

Nicht gesehen in den gelesenen Seiten: Viewport als erster Pflichtschritt mit der Warnung "versteckte Ansicht meldet 0 x 0"; Umschalten zwischen Elementen in mehr als einer Reihenfolge (A dann B, B dann A, Wiederholung); "nur der selbst geöffnete Tab bleibt offen"; Stand-in für `requestAnimationFrame` muss `cancelAnimationFrame` beachten; Berichtstabelle mit "not checked" je ungeprüfter Messung; Referenz-Screenshot wörtlich als Vorgabe nehmen. Das ist keine Aussage, dass es das nirgends gibt: sechs der Seiten waren abgeschnitten oder nicht abrufbar.

## Urteil

Ähnlich, nicht gleich. Messen mit `getBoundingClientRect` und fester Viewport kommen anderswo vor (autonomous-ui-inspection, design-measure). Eigen sind die Reihenfolge-Prüfung beim Umschalten, die Ein-Tab-Regel und die "not checked"-Liste, soweit gelesen. Es ist kein Wort ohne Weiteres übernommen: keine Textüberschneidung wurde gesehen, aber auch nur zwei Texte komplett gelesen.

🟠 Entscheidung für Jakob: Name `measure-ui` bleiben (frei, nur `ux-measure` und `design-measure` ähnlich) oder umbenennen. `ui-verify` ist laut Abgleich vergeben und kein Vorteil.

Anfragen: `"measure-ui" agent skill SKILL.md`; `"ui-verify" agent skill SKILL.md Claude Code`; `skills.sh agent skill verify UI layout getBoundingClientRect viewport measure before after`; `github claude code skill "visual verification" browser measured numbers not screenshots layout`.
