# Skill-Ideen für "Jakob's Agent Skills" (Stand 2026-11-23)

Arbeitsliste, nicht veröffentlicht. Jede Idee stammt aus deinen eigenen Regeln oder Projekten. Ob es sie im Netz schon gibt, ist nicht geprüft: das kommt in Runde 1 von `tools/SKILL-CHECKLIST.md`. Die Zahl der Korrekturen ist gezählt an den Datumsangaben in deinen globalen Regeln (`~/.claude/CLAUDE.md`).

## A. Entwurf fertig, wartet auf deine Tests

Ordner `skill-drafts/<name>/`, Notizen mit allen übernommenen Regeln und offenen Fragen in `skill-drafts/<name>.notes.md`. Alle: `check_skill.py` grün, keine Gedankenstriche.

| Skill | Was er tut | Offen |
|---|---|---|
| strays | Findet lokale Arbeit, die noch nicht auf dem Remote ist, zeigt eine Übersicht und pusht erst nach einem Ja (nur per SHA, nie force). | Einmal fragen (Entwurf), pro Branch fragen oder gar nicht fragen? Startet auch ohne Slash-Befehl. |
| tidy | Archiviert erledigte Sessions in der Claude-Desktop-App, prüft dabei Behauptungen wie "gemergt" in git. | Nur Desktop-App. Startet ohne Slash-Befehl, weil die App solche Skills sonst versteckt. Nicht live getestet. |
| blindtest | Blinder, zählbarer Vergleich: neue Version gegen alte und gegen ohne. Zweiter Modus "audit" kalibriert blinde Leser an bekannten Fehlern. | Bestehgrenze 80 Prozent gesetzt, nicht gemessen. Kein echter Blindtest gelaufen. |
| lanes | Mehrere Sessions in einem Repo: eigener Worktree, sauberer Haupt-Checkout, `integrate.ps1` (Ziel-Branch und Prüfbefehl einstellbar), optionaler Guard-Hook. | Nur Windows PowerShell, Mac/Linux später? Smoke-Test grün (2 Branches OK, Konflikt FAILED mit Dateiname). |
| reroll | Gibt deine letzte Anfrage wörtlich an eine frische Session, die die alte Antwort nicht kennt (Optionen `different`, 2 oder 3 Sessions, Modellwahl). | Entwurf seit 2026-11-24 (`reroll/`, `reroll.notes.md`), `check_skill.py` grün. Nur Desktop-App für den Session-Weg, sonst Zwischenablage. Netz-Abgleich und Review-Prompt fertig (`reroll.review-prompt.md`). Testlauf 2026-11-24: Übergabe korrekt, kein Leck; `different` brachte im Einzellauf nicht klar andere Namen. Zähler 2/3, Modellwahl, Zwischenablage nicht getestet. |

## B. Ideen ohne Entwurf

### Agenten steuern
1. **delegate**: Wählt pro Teilaufgabe das billigste Modell, das sie gut kann (als Rolle billig, mittel, stark, weil Modellnamen veralten), nennt Modell und Aufwand, fragt vor mehr als 2 Agenten. Parallele Agenten bekommen einen gemeinsamen Brief plus eigene Dateiliste, das Gesamtergebnis prüft ein Skript. Ein "fehlgeschlagen" wird gegen die echten Dateien geprüft. Woher: "Subagents and sessions", 4 Korrekturen. Meinung: größter Geldnutzen für andere. Geht im Vorschlag budget auf (siehe "Zusammenführen").
2. **decision-box**: Stellt eine Entscheidung so, dass sie ohne Kontext verständlich ist: Empfehlung und Befund zuerst, jede Option mit dem vollen Text und was sie ändert, eine Frage pro Entscheidung. Woher: "Talking to Jakob", 6 Korrekturen, die meisten von allen. Meinung: echter Nutzen, aber schwer zu testen, und die Tools geben schon einiges vor.
3. **resume-check**: Nach Absturz oder Stopp erst den echten Stand prüfen (git status, Branch, letztes Log, laufende Hintergrundjobs), dann den unterbrochenen Schritt fortsetzen. Nie Prozesse beenden oder gesperrte Ordner löschen, sondern melden. Woher: Regel "weiter after a crash". Meinung: klein, oft gebraucht, leicht zu testen. **Umgesetzt 2026-11-23 als zweiter Teil von fresh** (siehe "Zusammenführen"), keine eigene Idee mehr.

### Ergebnisse prüfen
4. **claim-check**: Vor jedem Bericht nur Geprüftes behaupten, sonst "nicht geprüft". Eine Ursache gilt erst, wenn sie gezeigt ist. Größen, Anteile und "unbenutzt" erst messen, auch den Nutzen einer Empfehlung. Woher: "Honesty". Meinung: stark und allgemein, meine zweite Wahl. Heute selbst verletzt (die ungezählte Behauptung zu delegate).
5. **generated-asset-check**: Ergebnis eines anderen Modells (Bild, Musik, Stimme) gegen die Anforderung messen, bevor der Nutzer es sieht. Wo es nicht messbar ist, das sagen, bevor Geld ausgegeben wird. Bilder aus den Bildern einordnen, nicht aus ihrer Beschreibung. Woher: "Honesty", Art-Pipeline und Audio-Takes. Meinung: selten so klar formuliert, gut für kreative Projekte.
6. **live-layout-check**: UI im Browser prüfen: feste Fenstergröße, Maße als Zahlen, Umschalten in mehreren Reihenfolgen, Vorher und Nachher im selben Tab. Ein Screenshot plus "so" ist die Vorgabe. Woher: "Live checks", "Visual tweaks". Meinung: gut fürs Frontend, braucht aber ein Browser-Tool.
7. **measure-twice**: Ein Timing- oder fps-Ergebnis zählt erst nach einer Wiederholung mit geprüfter Rechnerlast. Laufzeitwerte kommen aus der laufenden App, nie aus Testdaten. Woher: "Honesty" (Hausmaßstab-Fehler 2026-11-22). Meinung: könnte in claim-check aufgehen.

### Dateien und Wissen
8. **history-first**: Vor dem Neubau oder Umschreiben von etwas Bestehendem die Commits des Originals lesen und jede Korrektur des Nutzers übernehmen. Ein Brief wie "wie bei den Klassikern" hebt keine frühere Entscheidung auf. Woher: Regel "Rebuilding a UI element", so auch für die vier Entwürfe gemacht. Meinung: klein, wirksam, kaum verbreitet.
9. **backup-before-rewrite**: Vor einem großen Umbau von Text- oder Datendateien alles in einen Ordner mit Datum sichern, Text wörtlich verschieben, danach per Skript Zeile für Zeile prüfen, dass nichts fehlt. Meinung: solide, aber viele halten git für genug.
10. **project-docs**: Getrennte Projekt-Notizen (Stand, offene Zusagen, verschobene Ideen, Karte, Log) und am Sessionende stimmig halten. Meinung: stark bei langen Projekten, könnte auch Teil von lanes werden.
11. **pinned-facts**: Festlegungen des Nutzers (Namen, Zuordnungen, Entscheidungen) sofort in eine Datei schreiben, die jede Session zuerst liest. Bei Widerspruch gilt die Datei, der Widerspruch wird gemeldet. Woher: deine FAKTEN.md. Meinung: löst "das musste ich schon wieder sagen", überschneidet sich teils mit dem eingebauten Gedächtnis der Tools.

### Skills und Regeln
12. **skill-check**: Prüft einen Skill vor dem Teilen (private Wörter und Pfade, E-Mails, Schlüssel, Spec-Felder, Namen, die nur in einem Tool gehen). Bündelt dein `check_skill.py` (12 von 12 eingebauten Fehlern gefunden). Meinung: passt genau zu den Leuten, die deine Karte anschauen. Nur dein Skript und deine eigenen Regeln, Teile aus Matts Skills bleiben draußen.
13. **rule-edit**: Vor einer neuen Zeile in einer Regel oder Doku das Bestehende zum Thema lesen und schärfen statt anhängen, Doppeltes zusammenführen. Meinung: eher nicht, weil es sich mit Matts writing-for-agents überschneidet (Plagiatsrisiko).

### Aus deinen Verläufen gezählt (2026-11-23)
Quelle: 6.540 deiner Prompts aus allen Claude- und Codex-Verläufen (`~/.claude/projects`, `~/.codex/sessions`), per Skript ausgelesen und nach Stichwörtern gezählt, Treffer von Hand gesichtet. Gleiche Prompts zählen einmal, die Zahlen sind also Untergrenzen. Netz-Abgleich: nicht gemacht.

15. **space**: Platz auf C schaffen. Ein Skript misst Temp, npm-Cache, NVIDIA-Shader-Cache, Downloads und Reste, zeigt eine Tabelle, löscht nur Sicheres (nichts jünger als 1 Stunde, `Temp\claude` erst ab 1 Tag, gesperrte Dateien bleiben, eine Blockade wird nicht umgangen) und meldet den Rest. Woher: 9 Mal "bitte Platz auf C schaffen" (27.10. bis 22.11.), einmal "wie verhindere ich das?". In den 4 nachgelesenen Sessions wurde jedes Mal neu gesucht. In `D:\` liegen dazu 65 Worktree-Ordner und 318 .log/.txt-Dateien (gezählt, Größe nicht gemessen). Meinung: schnellster Gewinn, leicht zu testen, auch als geplante Aufgabe möglich. **Meine Wahl für zuerst.**
16. **relay**: Prompt für ein anderes Tool schreiben und dessen Antwort zurück prüfen. Hin: passend zum Ziel (Copilot nimmt nur eine Datei, also alles in den Text; Codex bekommt Repo, Worktree und Prüfbefehl; ein Bildtool Stilreferenz und Anzahl Ansichten), mit festem Antwortformat. Zurück: jede Aussage gegen die echte Datei prüfen, Doppeltes zusammenfassen, Konsens zählen, markieren, was der Reviewer nicht sehen konnte. Woher: mindestens 8 Mal "gib mir einen Prompt für Codex, Gemini, Pixel Lab, ChatGPT oder Copilot", "welcher der 4 Prompts ist der beste, kombiniere" (9.11.), eingefügte Reviews am 22. und 23.11. (workaround, tidy, lanes, `REVIEW-AUSWERTUNG.md`). Meinung: machst du am häufigsten von Hand. generated-asset-check (5) wäre der Rückweg für Bilder und Musik.
17. **names**: Namensrunden. Kandidaten in Familien, jeder vorher gegen GitHub, Skill-Verzeichnisse, npm und Domain geprüft, verworfene Namen in einer Liste, damit sie nicht wiederkommen, Wahl in einer Box. Woher: 13 Runden seit 5.11. ("30 Namen mit lodge am Ende", "50 Namen cute", "15 Vorschläge für den Skill", "keiner der 5 gefällt"), 9 davon am 22. und 23.11. Bei lanes kam die Namensgleichheit mit tavinathanson/lanes erst beim Netz-Abgleich heraus. Meinung: spart Runden, gut testbar.
18. **playtest**: Übergabe zum Testen und Feedback-Runde. Vor der Übergabe selbst im Browser prüfen, dann Link und 3-5 Dinge zum Anschauen. Nummeriertes Feedback behält deine Nummern, Bericht je Nummer mit Beleg, Nachtest nur für Geändertes. Woher: mindestens 4 Mal "wo testen?", "worauf soll ich beim Playtesten achten" (11.11.), nummerierte Rückmeldungen wie "bild1: ..., b2: ..." (rund 50 Prompts mit Punkten 1-3 oder mehr, nicht alle Feedback). Meinung: stark für NiagaraUI und Choir. live-layout-check (6) wird darin die Selbstprüfung.

### Zusammenführen (Vorschlag 2026-11-23)
- **budget** = delegate (1) + Usage-Rückblick + Sparmodus. Vorher Modell je Aufgabe wählen, bei wenig Usage umschalten, nachher mit `usage-report.py` messen und Regeln vorschlagen. Woher: über 20 Fragen seit 23.10. wie "welche Sessions haben am meisten gekostet, wo hätte ich ein kleineres Modell nehmen sollen", "mach alles, was Usage spart", "nur noch wenig Usage, alles auf Sonnet/Haiku". Meinung: größter Geldnutzen, ersetzt delegate. **Meine Wahl als größter Skill.**
- **tidy + Session-Übersicht**: tidy zeigt zuerst, welche Sessions auf dich warten, arbeiten, ungemergte Arbeit haben oder fertig sind, dann archiviert es. Woher: 6 Mal "welche Sessions warten auf Antworten / haben noch nicht committet / sind noch offen / sollten weitermachen". Nachteil: ändert den fertigen Entwurf. **Umgesetzt 2026-11-23** in `skill-drafts/tidy/SKILL.md` (Gruppen und Übersicht, Nur-Übersicht-Modus), Jakob: "der fertige entwurf ändert sich ist kein nachteil". Zahlen in `tools/SKILL-CHECKLIST.md` 8d.
- **no-loss** = history-first (8) + backup-before-rewrite (9) + Verlustprüfung. Vorher Commits lesen und sichern, nachher Zeile für Zeile prüfen, bei "fehlt" `git log -G`. Woher: 4 Mal "wurde etwas Wichtiges gelöscht?" am 9.11. Meinung: drei kleine Ideen werden ein brauchbarer Skill.
- **ledger** = pinned-facts (11) + project-docs (10). Woher: "wie halte ich den Befund fest, damit alle Chats ihn kennen?" (18.11.), "gibt es für Ideen ein eigenes Dokument?" (1.11.). Nachteil: überschneidet sich mit dem eingebauten Gedächtnis.
- **resume-check (3) als zweiter Teil von fresh**: fresh schreibt die Übergabe, resume-check liest sie danach. Nachteil: ändert die veröffentlichte fresh. **Umgesetzt 2026-11-23** als Abschnitt "Resume" in `public/agent-skills/fresh/SKILL.md`, Zahlen in `tools/SKILL-CHECKLIST.md` 8g. Online erst nach Jakobs Ok und Deploy.
- **ship-skill** = `tools/SKILL-CHECKLIST.md` + skill-check (12) + Herkunftsprüfung + Netz-Abgleich + Kartentext-Regeln. Am 22. und 23.11. 6 Mal von Hand durchlaufen (Abschnitte 8a-8f). Meinung: für dich sehr nützlich, öffentlich eher nicht (überschneidet sich mit NVIDIA SkillEvaluator und skill-creator).

## C. Geprüft und verworfen
- **game-check**: eine Bearbeitung von Xyloforge game-detail-bar (siehe FAKTEN.md).
- **art-pipeline, audio-takes, content-editing**: Niagarama-Abläufe, zu projektgebunden. Ihr allgemeiner Kern steckt in generated-asset-check.
- **Civ-VII-Mod-Regeln**: nicht von dir.
- **Prompt-Dateien**: Projektinhalt, keine Skills.
- **Credits- und Inspirationslisten, Art-Galerie, Choir-Kritik** (gesichtet 2026-11-23): Projektinhalt oder dein eigenes Produkt.
- **session-close**: überschneidet sich mit fresh.
- **Dev-Server unter Windows stoppen**: zu schmal für einen eigenen Skill.
- **no-dashes-Hook, usage-report.py, statusline.py, die Agenten builder, checker und searcher**: keine Skills.
- **Matt-Pocock-Skills und OpenAI-Systemskills**: nie (siehe FAKTEN.md).

## D. Abgleich mit dem Netz (2026-11-23)

Zwei Recherche-Agenten (Sonnet) haben jeden Skill und jede Idee gegen Skill-Verzeichnisse, GitHub und Matts Original-Repo gesucht. Der Rohbericht mit allen Links und Suchanfragen steht in `NETZ-ABGLEICH.md`. Wo eine Meinung in A oder B dieser Tabelle widerspricht, gilt D.

Grenzen: "gelesen" heißt bei den Agenten, dass ein kleines Modell die Seite zusammengefasst hat, kein Rohtext. Von Matts 27 Skills wurden nur 5 gelesen (implement-spec, pr, to-questionnaire, writing-for-agents, retro), dazu handoff in der Nachprüfung. Exakte Satzsuchen sind unsicher, "nicht gefunden" ist kein Beweis. In der Spalte "Nachgeprüft" steht, was ich selbst im Rohtext gelesen habe.

"gleich" = derselbe Job, "ähnlich" = Überschneidung, unser Kern ist anders, "nah" = der Unterschied ist klein.

| Skill oder Idee | Name frei? | Gibt es schon? | Was bei uns anders ist | Nachgeprüft |
|---|---|---|---|---|
| workaround (online) | ja | ähnlich: getting-unstuck | Pflichtschritt "ist der Blocker eine Schutzvorrichtung?", Wahl der Route, Bericht | nein |
| fresh (online) | ja (nah: fresh-start) | ähnlich: Matts handoff, fresh-start (baut auf handoff auf) | Auslöser, Modell und Aufwand, grüne Befehle, Abnahme, Hook. Die vier Inhaltsregeln von handoff (Datei im Temp-Ordner, Links statt Kopien, Geheimes raus, empfohlene Skills) stehen auch in fresh, schon in der ersten Fassung vom 2026-11-22, in eigenem Wortlaut | ja, handoff gelesen |
| blindfold (online, Entwurf heißt noch blindtest) | blindtest ja. blindfold: als Skillname nicht gefunden, nah ist agent-blindfold (anderer Job: Anmeldung, ohne dass der Agent das Passwort sieht), nur Suchergebnis | ähnlich: blinde A/B-Vergleiche (skill-creator, skill-auditor, blinded-eval), nur Suchergebnis | Zählkriterien gegen feste Lösungsliste, Lauf ohne Skill, Audit-Modus | nein |
| lanes (online) | nein: tavinathanson/lanes, ein Claude-Code-Skill für parallele Worktrees; auch parallel-worktrees ist vergeben (codervisor) | ähnlich | Haupt-Checkout nur Integrationsziel, Integration nacheinander mit Sperre, voller Check, nur fast-forward | ja, Repo gelesen |
| strays (Entwurf) | ja | nichts Gleiches | Übersicht ungepushter Arbeit, Push per SHA, nie force | nein |
| tidy (Entwurf) | nein, aber anderer Job (finolabs tidy u. a.) | nichts Gleiches | archiviert nur erledigte Desktop-Sessions, mit git-Prüfung. Der Agent zweifelt am Satz "Archiving a session is reversible": Die App gibt Agenten ein Werkzeug `unarchive_session`, ob die Oberfläche es kann, ist nicht geprüft | nein |
| 1 delegate | nein (exarchos delegate u. a.) | ähnlich | Rollen statt Modellnamen, Frage vor mehr als 2 Agenten, gemeinsamer Brief plus Dateiliste. "Agentenbericht gegen den Diff prüfen" steht auch in obras verification-before-completion | teils, obra gelesen |
| 2 decision-box | ja | ähnlich | Empfehlung und Befund zuerst, volle Optionstexte, eine Frage je Entscheidung | nein |
| 3 resume-check | ja | ähnlich, nur Suchergebnis | laufende Hintergrundjobs prüfen, nie beenden, sondern melden | nein |
| 4 claim-check | nein | ähnlich, nah: obra verification-before-completion | Label "nicht geprüft", Ursache erst nach Beleg, Größen, Anteile und Nutzen messen | ja, obra gelesen |
| 5 generated-asset-check | ja | ähnlich, nah: ai-media-quality-review | vor dem Geldausgeben sagen, was nicht messbar ist; Bilder aus den Bildern einordnen | nein |
| 6 live-layout-check | ja | ähnlich: autonomous-ui-inspection | Umschalten in mehreren Reihenfolgen, derselbe Tab | nein |
| 7 measure-twice | nein, anderer Zweck | nichts gefunden | Wiederholungslauf mit geprüfter Rechnerlast, Laufzeitwerte aus der laufenden App | nein |
| 8 history-first | ja | ähnlich: investigating-repository-history | Korrekturen des Nutzers aus den Commits übernehmen | nein |
| 9 backup-before-rewrite | ja | ähnlich: safe-edit (datierte Backups) | Text wörtlich verschieben, Verlustprüfung Zeile für Zeile per Skript | nein |
| 10 project-docs | nein | ähnlich: wrap-session | Aufteilung in 5 Dateien mit Abgleich am Sessionende | nein |
| 11 pinned-facts | ja | ähnlich, nah: agent-memory-discipline | feste Datei, jede Session liest sie zuerst, die Datei gilt | nein |
| 12 skill-check | nein (mehrfach) | gleich: NVIDIA SkillEvaluator (PII, Geheimnisse, lokale Kennungen, Frontmatter, Tool-Kompatibilität) | nur leichter, eigene Wortliste, Gedankenstriche, deutscher Text | ja, NVIDIA-Doku gelesen |
| 13 rule-edit | ja | ähnlich, nah, deutlich bei Matt (writing-for-agents, retro) | kaum | nein |
| 14 proof (claim-check + measure-twice + generated-asset-check) | ja (nah: proof-of-work, proof-agent) | ähnlich, nah: obra verification-before-completion, proof-of-work | Durchsicht des fertigen Berichts mit Etikett je Aussage, dazu die Regeln für Zeitmessung, Laufzeitwerte und generierte Medien | ja, obra gelesen |

## E. Grill space/freeup (2026-11-23), entschieden

Jakob hat je Punkt genau eine Antwort gegeben. Gebaut ist noch nichts.
- **Skill**: Idee 15 (Platz auf C schaffen). **Name: `freeup`** (`/freeup`), in einer Namensrunde gewählt (Kandidaten sweep, headroom, spring-clean verworfen). Netz-Abgleich nicht gemacht.
- **Privat zuerst**, Website-Entwurf und Release später, dann nach `tools/SKILL-CHECKLIST.md`.
- **Start**: per `/freeup` und automatisch bei freien Worten wie "schaff Platz auf C".
- **Löschen**: Tabelle mit Größen, ein Ja, dann alles Gezeigte löschen. Sicherheitsregeln aus Idee 15 bleiben (nichts jünger als 1 Stunde, `Temp\claude` erst ab 1 Tag, gesperrte Dateien bleiben, Blockade wird nicht umgangen).
- **D:** nur zeigen (Worktrees, Logs mit Größe), nie anfassen.
- **Downloads**: nur zeigen, nie löschen.
- **Geplante Aufgabe**: vorerst nein, nur manuell.
- **Offen**: Netz-Abgleich für den Namen (vor Veröffentlichung); Plattform (Windows und C: nur) für die öffentliche Fassung; Größe von Worktrees und Logs auf D: nicht gemessen.

## F. /reroll (2026-11-23), Ideen für später

`/reroll` ist gebaut und privat (`~/.claude/skills/reroll/SKILL.md`), Website-Entwurf seit 2026-11-24 unter `skill-drafts/reroll/`. Er gibt Jakobs Anfrage wörtlich an eine frische Session, die die alte Antwort nicht kennt. Test am 2026-11-23: Übergabe korrekt, kein Leck. Dasselbe Modell bringt aber fast dieselben Ideen, darum zeigt der Skill eine Tipp-Zeile für `different` oder ein anderes Modell. Ob `different` wirklich andere Ideen bringt, ist nicht geprüft.
- **Antworten vergleichen oder zusammenführen**: Nachdem beide Antworten da sind, eine Übersicht, was nur in der einen oder der anderen steht, oder eine zusammengeführte Fassung. Nur nach den Antworten, sonst ist die Blindheit weg.
- **Reroll mit Codex (GPT)**: Die Anfrage an ein Modell eines anderen Anbieters geben, für die größte Vielfalt. Dafür müsste der Skill ein externes Programm starten (z. B. die Codex-CLI), deutlich mehr Aufwand als der Weg über die Zwischenablage.

## G. Erklär-Hilfe für Fachwörter (2026-11-24), Ideen für später

Wunsch: Fachwörter in Claude-Code-Antworten (fork, main, pushed, Frontmatter, "159k Token Kontext") für Jakob und seine Studierenden erklären, ohne dass sie suchen müssen. Tooltips waren nur ein erster Gedanke. Jakob, 2026-11-24: erst einmal liegen lassen. Recherche mit Quellen (Seitenchat, offizielles Glossar, Output-Styles, Mod-Schnittstelle, fremde Jargon-Skills): Übergabe `D:\Temp\glossar-idee-2026-11-24-1847.md`.
- **eli18 im Seitenchat** (Favorit): Eine Zeile in der CLAUDE.md, etwa "Lautet eine Frage nur 'eli18', erkläre jedes Fachwort deiner letzten Antwort in ELI18", dann `/btw eli18` ins Eingabefeld. Die Erklärung steht im Seitenchat, der Hauptchat und sein Kontext bleiben sauber. Für Studierende in der CLAUDE.md des Kursprojekts, nichts zu installieren. Nicht geprüft, erst testen: `/btw zitier wörtlich den ersten Satz unter "Talking to Jakob" aus deinen Anweisungen` (sieht der Seitenchat die CLAUDE.md?) und `/btw erklär mir die Fachwörter deiner letzten Antwort in ELI18`. Strg+; geht auf deutscher Tastatur nicht, darum `/btw`.
- **Plan B, Mod `/eli18`**: Fragt den eigenen Chat ohne Werkzeuge (`$.model.fork`) mit fester ELI18-Frage und zeigt die Antwort in einem Panel neben dem Chat. Ein selbst gebauter Seitenchat mit festen Regeln, nur in Claude Code.
- **Klartext zuerst, Fachwort in Klammern** (Output-Style): "Ich habe deine Änderung gespeichert (Commit) und zu GitHub hochgeladen (Push)." Stärkste Idee für Anfänger; Antworten werden länger, und ein Style ist keine Garantie.
- **Block "Begriffe" am Ende jeder Antwort** (Output-Style): nur neue Wörter, mit "kenn ich"-Liste. Eher für Fortgeschrittene.
- **Fachwort als Link auf eine Kurs-Glossarseite**: ein Klick statt Hover, Erklärungen von Jakob geprüft, mit Bildern möglich.
- **Skill `/explain`, der den Seitenchat übertrifft**: Ein Haiku-Hilfsagent schreibt die Erklärung in eine Datei (im Chat nur ein Link), persönliches Glossar mit "kenn ich", echte Zahlen per Skript (Token-Stand wie im /fresh-Hook, git-Zustand), Kurs-Erklärungen als erste Quelle. Langsamer als `/btw`, dafür mit Gedächtnis; läuft auch in Codex.
- **Anzeigen statt Erklärungen**: die Context-Karte der App im Kurs zeigen; git-Zustand als Band über dem Eingabefeld (Mod).
- **Spickzettel aus echten Sessions**: Ein Skript zählt die häufigsten Fachwörter, jedes bekommt ein Alltagsbild. Später ein Wochenrückblick mit Quiz.
- **Hover-Mod**: Begriffs-Chips unter jeder Antwort, Karte beim Drüberfahren, Klick öffnet ein Glossar-Panel. Kür, erst wenn die einfachen Wege Lücken zeigen.
- **Offen**: Zeigt der Desktop-Code-Tab den `title` eines Markdown-Links als Tooltip? Nicht getestet.

## H. Was Jakob ausser Skills teilen könnte (2026-11-24), Ideen für später

Frage: Was lässt sich auf der Website ausser Skills teilen, etwa als Mod? Elf Ideen mit Zahlen aus 2.389 Claude-Verläufen (7.908 Prompts in Hauptsessions, ohne Codex) und den Mod-Typen aus Build 2.1.325. Jakob, 2026-11-24: erst notieren, nichts bauen (Wochenlimit knapp). Übergabe: `D:\Temp\website-ideen-2026-11-24-2007.md`. Reihenfolge damals: 1, dann 4, dann 6; Idee 1 ist nach der Korrektur herabgestuft. Mods waren bei Jakob bisher selten (6 Prompts, `claude plugin` in 3 Sessions).

**A. Mods (nur Claude Code, nicht Codex)**
1. **Kontext-Band "Zeit für /fresh?"**: eine Zeile über dem Eingabefeld (`ui.render` auf `AbovePrompt`) mit Kontext in %, 5h- und 7d-Limit und Minuten seit der letzten Antwort gegen die Cache-Lebensdauer. Ab 50 % oder 60 Minuten Pause orange, mit /fresh-Knopf. Daten: `$.session.usage()`, Timer über `$.clock`. Beleg: Der Checkpoint-Hook schrieb 264-mal "Kontext groß" und 147-mal "Pause". Pro: sichtbar, als GIF zeigbar. Contra: Cache-Zeit nur geschätzt (1 h, bei Credits 5 min); geteilt wird über ein GitHub-Repo mit `.claude-plugin/marketplace.json` und `/plugin install`, nicht als ZIP. **Korrektur:** Dass die Context-Karte einen Teil schon zeigt, kam ungeprüft aus Jakobs Regeltext. Belegt ist es über die Beschreibung des App-Tools get_usage plus einen Live-Aufruf (Eingabefeld: Tokens, %, Auto-Compact-Schwelle 84 %, grösste Kategorien; Usage-Karte: 5h- und Wochenlimit), die App-Oberfläche selbst wurde nicht gesehen. `/usage` zeigt laut code.claude.com/docs/en/costs eine Zeile "Prompt cache (main)", im Desktop nicht geprüft. **Neu wäre nur die Cache-Uhr plus der /fresh-Knopf.** Urteil: herabgestuft.
2. **Usage-Panel "Wohin gingen meine Tokens?"**: Logik von `~/.claude/tools/usage-report.py` (teuerste Sessions der letzten 48 h, Opus gegen Sonnet, "Sonnet hätte gereicht"). Skript lief 13-mal in 11 Sessions, in dieser Datei stehen über 20 Usage-Fragen seit 23.10. Pro: spart Geld, passt zu /cheap-agents. Contra: `/usage` und explain-usage decken einen Teil ab; `$.fs.read` liest höchstens 4 MiB pro Datei, grosse Verläufe brauchen `$.process`; Zahlen sind Schätzungen. Urteil: zweiter Mod, später.
3. **Wächter gegen KI-Merkmale**: `~/.claude/hooks/no-dashes.py` als Mod oder Hook, erweitert um die /unrobot-Muster. Hat 20-mal blockiert. Pro: winzig, sofort klar. Contra: allein zu klein; mit den unrobot-Mustern braucht er den humanizer-Credit. Urteil: als Beigabe zum /unrobot-Release.
- Nicht machbar: Session-Übersicht als Panel (die Mod-API hat keinen Aufruf, der andere Sessions auflistet, 0 Treffer). Hover-Glossar-Mod: am 24.11. geparkt, siehe Abschnitt G.

**B. Downloads**
4. **Agenten-Trio** `~/.claude/agents/`: builder.md (Sonnet/medium), checker.md (Sonnet/medium, nur lesend), searcher.md (Haiku), jeweils mit festem Modell und Effort. builder lief 114-mal in 24 Sessions, searcher 11/8, checker 5/3. In der öffentlichen /cheap-agents stecken sie nicht (0 Treffer). Pro: fast fertig, macht /cheap-agents greifbar. Contra: checker kaum erprobt; ändert einen veröffentlichten Skill, braucht also Jakobs Wort; Urheberschaft nicht geprüft, vermutlich seine. Urteil: schnellster Gewinn.
5. **Projekt-Starter aus `D:\Projekt-Vorlage`**: CLAUDE.md-Gerüst, STATUS/OFFEN/IDEEN/KARTE/SESSION-LOG, scripts/integrate.ps1, scripts/guard-main-checkout.mjs. `npm run integrate` lief 1.604-mal in 515 Sessions, `git worktree add` 946-mal. Pro: ein Download richtet die Arbeitsweise ein. Contra: doppelt mit /lanes und dem Entwurf project-state, nur Windows, `master` fest eingetragen. Urteil: erst nach project-state, dann als Bündel.

**C. Inhalte zum Lesen**
6. **"Meine CLAUDE.md und warum jede Regel existiert"**: die globalen Regeln, zu jeder das Erlebnis dahinter (30 Regelpunkte, 27 Datumsangaben, FAKTEN.md 32 Einträge). Pro: Veröffentlichte CLAUDE.md-Dateien zeigen fast nie das Warum, stark für Studierende, kein Code zu pflegen. Contra: muss von Privatem gesäubert und übersetzt werden, veraltet wöchentlich. Urteil: bestes Inhaltsstück, Platz 3.
7. **ELI18-Lektionen aus /teach** ("Prompt-Cache", "Messen statt fühlen", Spickzettel Cache und Kosten), schon HTML mit Quiz in `D:\Lernen*`. Pro: passt zu Jakobs Lehre an der FH. Contra: nur 2-3 Stück, Cache-Zeiten und Preise vorher neu prüfen. Urteil: gut, wenn er sie im Kurs ohnehin braucht.
8. **Messprotokolle**, etwa der Chisle-Test: Replay über 882 Verläufe schätzte 15 % weniger Tool-Ausgabe; live seit 23.11. 381 Kürzungen, 1,33 Mio. Zeichen (`~/.claude/tools/chisle/.chisle-compress-stats.json`). Pro: ehrliche Zahlen sind selten. Contra: Chisle ist nicht von Jakob (MIT, JayPokale), braucht Credit; der Test läuft erst einen Tag. Urteil: später.

**D. Spiel-Werkzeuge aus NiagaraUI (`D:\NiagaraUI`)**
9. **Musik-Wiederholungsprüfung** (`soundFingerprint.ts`, `musicRepetition.ts`): findet Schleifen in generierter Musik, könnte /media-review erweitern. Wie allgemein sie ist, nicht geprüft.
10. **Normal-Maps für 2D-Sprites** (`localNormalMap.mjs`, `spriteFusionNormal.mjs`): niedrige Priorität, ähnliche Tools gibt es vermutlich (nicht geprüft).
11. **TinkerLodge** wird laut FAKTEN.md ohnehin veröffentlicht.

Für eine Mod-Karte bräuchte die Website wohl einen Abschnitt "Mods" neben "Jakob's Agent Skills"; wie er aussieht, entscheidet Jakob.
