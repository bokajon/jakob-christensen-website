# Auswertung der vier KI-Rückmeldungen (2026-11-23)

Quelle: `D:\Temp\skill-reviews-2026-11-23.md` (wörtlich). Gefragt wurde mit `REVIEW-PROMPT.md`. G = Gemini, C = Copilot, C1 = ChatGPT 1, C2 = ChatGPT 2.

Wichtig vorweg:
- Alle vier haben nur die Beschreibungen im Prompt bewertet. C2 sagt es selbst: die fünf öffentlichen SKILL.md waren nicht abrufbar. Bei den anderen drei steht nichts dazu, die Urteile beziehen sich auf den Prompt-Text. Sie sind Meinungen zu Ideen, keine Prüfung der Skills.
- Keine KI hat die Treffer aus `IDEEN.md` Abschnitt D gekannt (NVIDIA SkillEvaluator, obra verification-before-completion, tavinathanson/lanes). Wo sie "gibt es nicht" oder "nicht sicher" sagen, ersetzt das D nicht.
- Eigenes Zählen: "Konsens" heißt hier mindestens 3 von 4 gleich. Bei 2 zu 2 steht "geteilt".

## 1. Urteile pro Skill

Kürzel: B = behalten, Ä = ändern, S = streichen (als Skill), R = besser als Regel in CLAUDE.md oder AGENTS.md.

| # | Skill | G | C | C1 | C2 | Konsens |
|---|---|---|---|---|---|---|
| 1 | workaround | S (R) | B | Ä (R) | Ä (klare Abbruchkriterien) | geteilt, nur C will ihn so lassen. Sorge von 3 anderen: Name klingt nach Pfusch (C1, C2), "Schutzvorrichtung nicht umgehen" ist eine Grundregel (G, C1, C2) |
| 2 | fresh | B | Ä (mit project-docs) | B | Ä (nicht jede lange Session braucht eine Datei) | B bis Ä, alle würden ihn nutzen. 3 von 4 wollen ihn mit resume-check zusammen (G, C1, C2), C mit project-docs |
| 3 | blindfold | B (stärkster) | B (stark) | B (stärkster) | Ä (in blind-eval und judge-calibration teilen) | **B (3 von 4), stärkster Skill**. Widerspruch nur bei C2 (teilen) |
| 4 | lanes | Ä | B | Ä | Ä | **alle: nur PowerShell ist ein Hindernis (Mac/Linux)**. C2 zusätzlich Einwand zu fast-forward, siehe Abschnitt 4 |
| 5 | strays | B | B | B | B (Name ändern) | **B, einstimmig** |
| 6 | tidy | S (öffentlich) | S oder privat | Ä (privat lassen) | Ä (nur Desktop sinnvoll) | **Konsens: nicht öffentlich oder nur mit Hinweis "nur Claude Desktop"**. Niemand würde ihn selbst nutzen außer C2 als Desktop-Skill |
| 7 | delegate | B | Ä (Entscheidungsrahmen) | B | Ä ("mehr als 2" ist willkürlich) | B/Ä, alle würden ihn nutzen |
| 8 | decision-box | S (R) | B | S (R) | S (R) | **R (3 von 4)**, nur C lässt ihn stehen |
| 9 | resume-check | Ä (in fresh) | B | B | B | **B (3 von 4)**. Form geteilt: eigener Skill (C, C1, C2 sagen B) oder in fresh (G, und C1/C2 beim Zusammenlegen) |
| 10 | claim-check | S (R) | B (stärkster) | S (R) | S (R) | **R (3 von 4)**. Alle halten den Inhalt für wichtig, nur nicht als Skill, weil er immer gelten muss |
| 11 | measure-twice | B | Ä (in claim-check) | B | Ä (in benchmark-check) | geteilt. 3 von 4 wollen Messdisziplin, C2 ergänzt Warm-up, Median, Streuung |
| 12 | generated-asset-check | B | B | B | B | **B, einstimmig** |
| 13 | live-layout-check | B | B | B | B | **B, einstimmig** |
| 14 | history-first | S (R) | B | S (R) | S (R) | **R (3 von 4)** |
| 15 | backup-before-rewrite | Ä | Ä | Ä | Ä | **Ä, einstimmig**: Backup-Ordner raus (git reicht, C2: höchstens außerhalb des Projektordners), das Zeile-für-Zeile-Verlustskript bleibt. C2: bei gewollter Umformung darf sich eine Zeile ändern |
| 16 | project-docs | Ä | Ä | Ä | Ä | **Ä, einstimmig**: fünf Dateien driften, auf 1-2 eindampfen (C1: STATE.md und DECISIONS.md) |
| 17 | pinned-facts | Ä (mit project-docs) | B | S | Ä (Datum, Herkunft, aktuelle Anweisung hat Vorrang) | geteilt. 3 von 4 sehen Überschneidung mit project-docs, CLAUDE.md oder eingebautem Gedächtnis |
| 18 | skill-check | B | B | B | B | **B, einstimmig**, aber siehe Abschnitt 5 (D sagt: gleich vorhanden) |
| 19 | rule-edit | S (R) | B | S (R) | S (R) | **R (3 von 4)** |

Sammel-Beobachtung: Welche Skills als Regel statt Skill genannt werden: claim-check, decision-box, history-first, rule-edit (je 3 von 4), workaround-Sicherheitsteil (G, C1, C2). Trennlinie, die G, C1 und C2 gleich ziehen: ein Skill braucht einen klaren Auslöser, einen mehrstufigen Ablauf oder ein Skript. Was immer gelten muss, lädt der Agent als Skill im entscheidenden Moment nicht.

## 2. Zusammenlegen oder aufteilen

| Vorschlag | von | Anmerkung |
|---|---|---|
| fresh + resume-check | G, C1, C2 (3 von 4) | Nach dem Absturz erst echten Stand prüfen passt zum Übergabeformat. thieung/handoff macht beides in einem Skill (geprüft, Abschnitt 5) |
| project-docs + pinned-facts | G, C1 | auf 1-2 Dateien |
| fresh + project-docs | C | Zustand strukturieren und übergeben |
| measure-twice in claim-check | C | Gegenstimme: G, C1 halten es für einen eigenen Skill, C2 will benchmark-check |
| measure-twice zu benchmark-check | C2 | |
| backup-before-rewrite + history-first | C | "vor Änderung den Bestand verstehen und sichern", Name preserve-context |
| delegate + lanes | C2 | parallel-work, Teile einzeln nutzbar |
| blindfold in blind-eval + judge-calibration | C2 | Gegenstimme: G, C, C1 loben ihn so wie er ist |

## 3. Namen

| Skill | Vorschläge | Hinweis aus FAKTEN.md und D |
|---|---|---|
| workaround | unblock (C1), safe-fallback (C2) | Jakob hat /detour verworfen und den Namen behalten (2026-11-23). Neu ist nur, dass 2 KIs den Namen als "Pfusch/Umgehung" lesen |
| fresh | handoff (G), handover, continuity (C), session-handoff (C2) | "handoff" ist Matts Name und von Jakob bewusst vermieden (FAKTEN). Die anderen: nicht gegen das Netz geprüft |
| blindfold | blind-eval (G, C2) | von Jakob gewählt, bleibt |
| lanes | worktree-lanes, parallel-git (G), parallel-worktrees (C2) | parallel-worktrees ist laut D schon vergeben (codervisor). Jakob hat "lanes" behalten |
| strays | unpushed oder git-strays (G), safe-push (C2) | unpushed und safe-push hat Jakob verworfen. C und C1 finden strays gut |
| tidy | archive-sessions (G, C, C2: 3 von 4), prune-sidebar, session-cleanup (C) | D: tidy ist als Name von finolabs mit anderem Job belegt. archive-sessions ist nicht geprüft |
| measure-twice | bench-check, perf-verify (G), benchmark-check (C2) | D: Name "nein, anderer Zweck". 3 KIs bestätigen, dass der Name nach Planung klingt |
| decision-box | decision-brief (C2), decision-card (C1), options-box (C) | nur relevant, falls es ein Skill bleibt |
| generated-asset-check | asset-gate, media-check (C1), media-review (C2) | |
| live-layout-check | layout-probe, ui-verify (C1), ui-verify (C2) | ui-verify von zwei KIs |
| backup-before-rewrite | diff-guard, no-loss-rewrite (G), lossless-edit (C1), safe-rewrite (C2) | |
| project-docs | project-state (C1, C2) | |
| pinned-facts | decision-log (C2) | |
| skill-check | skill-release-check (C2) | |

Gut und klar nach G: delegate, decision-box, resume-check, claim-check, generated-asset-check, live-layout-check, skill-check. C1: fresh, blindfold, lanes, strays, tidy, delegate, measure-twice, skill-check. C: workaround, blindfold, lanes, strays besonders gut. Einig sind sich alle nur bei **blindfold** und **delegate**.

## 4. Technischer Einwand von C2 zu lanes: nicht zutreffend

C2: "Mehrere parallel erstellte Branches vom selben Ausgangspunkt lassen sich nach dem ersten Merge normalerweise nicht alle nacheinander per Fast-forward in denselben Hauptbranch integrieren."

Geprüft im Quelltext `public/agent-skills/lanes/scripts/integrate.ps1` im Haupt-Checkout (373 Zeilen gelesen, nicht neu ausgeführt):
- Das Skript fast-forwardet den Branch **nicht** direkt. Es baut in einem temporären Worktree am aktuellen Ziel-Tip einen echten Merge (`git merge --no-edit ... $branchTip`), führt dort den vollen Check aus und bewegt den Ziel-Branch erst dann mit `git merge --ff-only` auf das **getestete Merge-Ergebnis** (`$tested`).
- Nach dem ersten Branch steht das Ziel auf einem neuen Stand. Der zweite Branch (gleiche Basis) wird gegen diesen neuen Tip gemergt. Ein Fast-forward auf das Merge-Ergebnis ist dann wieder möglich. Das ist die "explizite Merge-Strategie", die C2 vermisst.
- Bewegt sich das Ziel während des Checks, merkt das Skript es (`rev-parse` gegen `$startTarget`) und wiederholt Merge und Check, bis zu 5 Versuche. Eine Sperrdatei (`integrate.lock`) lässt nur eine Integration gleichzeitig laufen.
- Konflikte: Abbruch mit `FAILED` und Dateinamen, die Session löst sie im Branch.
- Der Smoke-Test aus dem Handoff (2 Branches OK, Konflikt FAILED) passt dazu, ist aber nicht von mir wiederholt.

Woher der Eindruck kommt: Der öffentliche Beschreibungssatz in `SKILL.md` Zeile 3 und der Prompt sagen "nur fast-forward", ohne dass dort steht, **was** fast-forwardet. Das liest sich so, als würde der Branch selbst fast-forwarden. Ein Satz mehr in der Beschreibung (z. B. "merges the branch in a temporary worktree, checks it, then fast-forwards the default branch to the tested result") würde den Fehlschluss verhindern. Das ist ein Textvorschlag, nichts gebaut.

Gültiger Rest: Ein reines PowerShell-Skript schließt Mac und Linux aus. Das sagen alle vier. In `skill-drafts/lanes` steht die manuelle Route ohne Skript (SKILL.md Zeile 34), sie deckt das ab, aber nur als Text.

## 5. Genannte Quellen, nach eigener Prüfung

Geprüft am 2026-11-23 über die GitHub-API und die Claude-Code-Doku. "Bestätigt" heißt: Seite oder Repo selbst abgerufen.

| Behauptung | von | Ergebnis |
|---|---|---|
| agent-skill-eval testet Skills mit und ohne Skill, deterministische Zustandsprüfungen, Rubriken, Tokenkosten, Laufzeit | C2 | **teilweise bestätigt, Name leicht falsch.** Gefunden: `darkrishabh/agent-skills-eval` (mit s, 821 Sterne, MIT, "test runner for agentskills.io-style AI agent skills"). README: lässt jeden Skill zweimal laufen (`with_skill` und `without_skill`), ein Judge-Modell bewertet beide, HTML-Bericht. Deterministische Zustandsprüfungen, Tokenkosten und Laufzeit: nicht geprüft (nur den Anfang der README gelesen). Unter dem Namen ohne s habe ich nichts gefunden |
| thieung handoff | C2 | **bestätigt.** `thieung/agent-skills`, Ordner `skills/handoff`, SKILL.md: schreibt ein repo-lokales `.handoff/handoff.md` am Sessionende und liest es am Start (MIT). Also gleich nah an fresh **und** an resume-check. Nur den Kopf der Datei gelesen |
| fmaher agent-handoff | C2 | **bestätigt, aber anderer Job.** `fmaher/agent-skills`, `skills/agent-handoff`: schreibt einen Prompt, mit dem man eine Aufgabe an einen frischen Agenten abgibt (z. B. gestapelte PRs). C2 sagt, das decke "Speicherung und Wiederherstellung von Kontext" ab: das stimmt für thieung, nicht für fmaher |
| skills-ref | C2 | **bestätigt.** `agentskills/agentskills`, Ordner `skills-ref`. Die README sagt selbst: nur zur Demonstration, nicht für Produktion. Als "etabliertes Prüfwerkzeug" ist das stärker dargestellt, als die Quelle es trägt |
| Claude Code kann Sessions archivieren und wiederherstellen | C2 | **bestätigt, aber nicht unter "Sessions".** Die Stelle ist `code.claude.com/docs/en/desktop`, Abschnitt "Archive a session": Menü, Archive, Sessions liegen im Reiter "Archived", dort "Unarchive". Claude kann Sessions auf Zuruf archivieren, mit Genehmigungskarte (außer Auto und Bypass). Die Seite `/docs/en/sessions` enthält dazu nichts Passendes |
| Gitleaks, TruffleHog, Promptfoo, Playwright Visual Comparisons, git-worktree-Doku, Claude-Code-Worktree-Unterstützung, Hinweis des Claude-Code-Teams zur Verifikation | G, C1, C2 | **nicht geprüft.** Bekannte Werkzeuge, aber ich habe die Seiten nicht aufgerufen. Gilt als "unbestätigt" |

### tidy: "Archiving is reversible" nach der Doku

Der Satz im Entwurf (`skill-drafts/tidy/SKILL.md` Zeile 9) und in `tidy.notes.md` ist **nur halb richtig**. Aus der Desktop-Doku (Abschnitt "Keep uncommitted changes when a session is archived"):
- Die Session ist wiederherstellbar: Reiter "Archived", "Unarchive". Bestätigt.
- Aber: "You can lose uncommitted changes in a session's worktree when the session is archived". Fragt die App nach den Änderungen, verwirft "Archive anyway" sie. Bei Cloud-Sessions oder wenn der Branch schon gemergt ist, kann die App sie ohne Nachfrage löschen.
- Sonst bleibt der Worktree samt Änderungen liegen, die App entfernt ihn lokal etwa 30 Tage nach dem Archivieren oder dem letzten Öffnen.
- Der Entwurf prüft "uncommitted changes (not ignored files)". Ignorierte Dateien (z. B. `.env`, Build-Ausgaben) im Worktree sind also im Zweifel weg. Ob die App sie beim Entfernen auch löscht, steht nicht in der Doku, ist **nicht geprüft**.
- Folge: Der Satz "Archiving is reversible, so ask nothing" ist für die Session richtig, für die Dateien im Worktree nicht. Die git-Prüfung in Schritt 3 ist deshalb tragend, nicht nur Zusatz. Gut passt, was C2 sagt: Archivieren nicht mit Wegwerfen unfertiger Arbeit verwechseln.
- Im App-Fenster selbst habe ich es nicht ausprobiert.

## 6. Top 3 pro KI und "was fehlt"

| KI | Top 3 zum Bauen | Was fehlt |
|---|---|---|
| G | skill-check, live-layout-check, delegate | Debugging-Skill (`repro-first`, `bisect-bug`): erst reproduzierbaren Fehlschlag bauen, Hypothesen einzeln prüfen, erst dann patchen |
| C | claim-check, resume-check, skill-check | `revert-plan`: vor einer riskanten Änderung festlegen, wie zurückgerollt wird, woran man den Fehler erkennt, welche Dateien betroffen sind |
| C1 | skill-check, live-layout-check, delegate | `scope-check` oder `self-review`: vor dem Commit den eigenen `git diff` gegen die Aufgabe prüfen (fremde Dateien, Debug-Code, halb erledigt) |
| C2 | skill-check, generated-asset-check, live-layout-check (vierter: resume-check) | `verify-change`: Abnahmekriterien vorher festhalten, jedes einer echten Prüfung zuordnen, bestehende von neuen Fehlern trennen, Ungeprüftes melden |

Zählung:
- **skill-check: 4 von 4** in den Top 3. Aber siehe unten: gleiche Funktion existiert laut D.
- **live-layout-check: 3 von 4.**
- **delegate: 2 von 4.**
- resume-check, claim-check, generated-asset-check je 1 (resume-check bei C2 als Nr. 4).

Fehlende Skills: Alle vier nennen etwas anderes, aber drei von vier (C1 scope-check, C2 verify-change, und im Kern C revert-plan) kreisen um **"Arbeit vor dem Abschluss gegen die Aufgabe prüfen"**. G (Debugging) weicht ab. Dazu: Matt Pocock hat `diagnosing-bugs` (FAKTEN: nie als Quelle), ein Debugging-Skill von Jakob müsste also aus eigenen Quellen kommen. Gegen das Netz sind die vier Vorschläge **nicht** abgeglichen. verify-change und scope-check liegen nahe an obras verification-before-completion (D, Zeile 4), das ist aber nur eine Vermutung.

## 7. Abgleich mit IDEEN.md Abschnitt D

| Idee | D sagt | Was die KIs dazu sagen | Passt oder widerspricht |
|---|---|---|---|
| skill-check | **gleich**: NVIDIA SkillEvaluator. Eigenwert: leichter, eigene Wortliste, Gedankenstriche, deutscher Text | 4 von 4 Top 3 und "B", nennen nur gitleaks, trufflehog, skills-ref als Vergleich, nicht NVIDIA | **Widerspruch.** Die KIs kennen den gleichen Fund nicht. Wer ihn selbst nutzt und teilt, hat laut D schon eine Alternative. Die Begründung der KIs ("Skript statt Bauchgefühl, Leaks vermeiden") stimmt, trägt aber nicht gegen NVIDIA. Meine frühere Streichen-Empfehlung ist also durch die vier nicht widerlegt, nur nicht bestätigt. Entscheidung: Jakob |
| claim-check | nah an obra verification-before-completion | 3 von 4: besser als Regel | **passt**, beide Wege führen weg vom eigenen Skill. C hält es für den stärksten |
| proof (claim-check + measure-twice + generated-asset-check) | nah an proof-of-work | C: measure-twice in claim-check. C1/C2 wollen sie getrennt | gemischt. generated-asset-check ist einstimmig stark, also eher abtrennen |
| delegate | Name vergeben (exarchos), ähnlich | B oder Ä, 2 von 4 in Top 3, C2 Name delegate-work | **passt** zu meiner Top 5. Umbenennen bleibt nötig (D) |
| measure-twice | Name vergeben, nichts Gleiches gefunden | 3 von 4 wollen Messdisziplin, Namen bench-check, benchmark-check | **passt**: Umbenennen, vermutlich mit Warm-up und Streuung (C2) |
| history-first | ähnlich: investigating-repository-history | 3 von 4: Regel | **Widerspruch zu meiner Top 5** (backup-before-rewrite, history-first, ...). Die Mehrheit sagt Regel |
| backup-before-rewrite | ähnlich: safe-edit (datierte Backups) | alle vier: Backup-Ordner raus, Verlustskript behalten | **passt und schärft**: der unterscheidende Teil laut D (Zeile-für-Zeile-Skript) ist auch der Teil, den alle vier loben |
| resume-check | ähnlich, nur Suchergebnis | 3 von 4 B, 3 von 4 würden ihn mit fresh zusammenlegen, thieung/handoff macht Schreiben und Lesen in einem | **passt** zu "als Teil von fresh". Ob als eigener Skill oder als Modus ist die offene Wahl |
| decision-box | ähnlich | 3 von 4: Regel | passt (kein Skill) |
| rule-edit | nah, deutlich bei Matt | 3 von 4: Regel | passt (streichen) |
| pinned-facts | nah: agent-memory-discipline | geteilt, C2: Datei darf nicht über aktuelle Anweisung gehen | Hinweis: Jakobs eigene Fassung ("bei Widerspruch gilt die Datei, der Widerspruch wird gemeldet") ist genau das, was C2 gefährlich findet. Ob Jakob das ändern will, ist seine Entscheidung |
| project-docs | nah: wrap-session | einstimmig: zu viele Dateien | passt, nur mit weniger Dateien |
| generated-asset-check | nah: ai-media-quality-review | einstimmig B, C2 Top 2 | **neu stark** gegenüber D ("nah"): die vier halten es trotzdem für differenzierend |
| live-layout-check | ähnlich: autonomous-ui-inspection | einstimmig B, 3 von 4 Top 3 | wie generated-asset-check |
| tidy | Name vergeben, anderer Job; `reversible` ungeprüft | 3 von 4: nicht öffentlich | stützt den Zweifel an tidy. Beleg für "reversible": Abschnitt 5 |
| lanes | Name vergeben (tavinathanson/lanes) | alle: Name okay bis ändern, nur C2 nennt `parallel-worktrees` (laut D vergeben) | Jakob hat den Namen schon behalten, nichts Neues |
| strays | nichts Gleiches | einstimmig B | passt. Kein einziger Einwand gegen den Inhalt, Namen teils bemängelt (G, C2), von Jakob schon entschieden |
| blindfold | ähnlich: blinde A/B-Vergleiche | 3 von 4 stärkster Skill, C2 teilen | passt. **agent-skills-eval** (Abschnitt 5) ist der konkrete Nachbar. Nachbar-Unterschied: dort ein Judge-Modell, bei uns blinde Zählkriterien und Audit-Modus |

## 8. Was sich gegenüber meiner Top 5 aus dem Handoff ändert

Meine Top 5 war: backup-before-rewrite, history-first, measure-twice (umbenennen), delegate (umbenennen), resume-check (in fresh). Streichen: skill-check, claim-check/proof, rule-edit.

- **Bestätigt:** backup-before-rewrite (aber ohne Backup-Ordner), measure-twice, delegate, resume-check, Streichen von rule-edit und claim-check als Skill.
- **Geschwächt:** history-first (3 von 4 sagen Regel).
- **Offen:** skill-check. 4 von 4 sagen Top 3, D sagt gleich vorhanden. Das ist der einzige harte Widerspruch zwischen den KIs und D.
- **Neu von den KIs, stark:** live-layout-check und generated-asset-check (einstimmig behalten), beide stehen in D nur als "ähnlich" oder "nah".
- **Neu, nicht geprüft:** die vier "was fehlt"-Vorschläge (Debugging, revert-plan, scope-check, verify-change), keiner ist gegen das Netz geprüft.

Gebaut wurde nichts, und diese Datei trifft keine Auswahl. Die Liste in `IDEEN.md` bleibt wie sie ist, bis Jakob gewählt hat.

## 9. Kleine Funde, die keine Wahl brauchen

- lanes: ein Satz in der Beschreibung, was fast-forwardet, würde C2s Fehlschluss verhindern (Abschnitt 4). Öffentlich geändert wird nur mit Jakobs OK.
- tidy: Satz zu "reversible" an die Doku anpassen (Abschnitt 5). Entwurf nur, nichts veröffentlicht.
