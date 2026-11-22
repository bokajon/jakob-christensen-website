# Skill-Ideen für "Jakob's Agent Skills" (Stand 2026-11-23)

Arbeitsliste, nicht veröffentlicht. Jede Idee stammt aus deinen eigenen Regeln oder Projekten. Ob es sie im Netz schon gibt, ist nicht geprüft: das kommt in Runde 1 von `tools/SKILL-CHECKLIST.md`. Die Zahl der Korrekturen ist gezählt an den Datumsangaben in deinen globalen Regeln (`~/.claude/CLAUDE.md`).

## A. Entwurf fertig, wartet auf deine Tests

Ordner `skill-drafts/<name>/`, Notizen mit allen übernommenen Regeln und offenen Fragen in `skill-drafts/<name>.notes.md`. Alle vier: `check_skill.py` grün, keine Gedankenstriche.

| Skill | Was er tut | Offen |
|---|---|---|
| push | Findet lokale Arbeit, die noch nicht auf dem Remote ist, zeigt eine Übersicht und pusht erst nach einem Ja (nur per SHA, nie force). | Einmal fragen (Entwurf), pro Branch fragen oder gar nicht fragen? Startet auch ohne Slash-Befehl. |
| tidy | Archiviert erledigte Sessions in der Claude-Desktop-App, prüft dabei Behauptungen wie "gemergt" in git. | Nur Desktop-App. Startet ohne Slash-Befehl, weil die App solche Skills sonst versteckt. Nicht live getestet. |
| blindtest | Blinder, zählbarer Vergleich: neue Version gegen alte und gegen ohne. Zweiter Modus "audit" kalibriert blinde Leser an bekannten Fehlern. | Bestehgrenze 80 Prozent gesetzt, nicht gemessen. Kein echter Blindtest gelaufen. |
| parallel-worktrees | Mehrere Sessions in einem Repo: eigener Worktree, sauberer Haupt-Checkout, `integrate.ps1` (Ziel-Branch und Prüfbefehl einstellbar), optionaler Guard-Hook. | Nur Windows PowerShell, Mac/Linux später? Smoke-Test grün (2 Branches OK, Konflikt FAILED mit Dateiname). |

## B. Ideen ohne Entwurf

### Agenten steuern
1. **delegate**: Wählt pro Teilaufgabe das billigste Modell, das sie gut kann (als Rolle billig, mittel, stark, weil Modellnamen veralten), nennt Modell und Aufwand, fragt vor mehr als 2 Agenten. Parallele Agenten bekommen einen gemeinsamen Brief plus eigene Dateiliste, das Gesamtergebnis prüft ein Skript. Ein "fehlgeschlagen" wird gegen die echten Dateien geprüft. Woher: "Subagents and sessions", 4 Korrekturen. Meinung: größter Geldnutzen für andere. **Meine Wahl.**
2. **decision-box**: Stellt eine Entscheidung so, dass sie ohne Kontext verständlich ist: Empfehlung und Befund zuerst, jede Option mit dem vollen Text und was sie ändert, eine Frage pro Entscheidung. Woher: "Talking to Jakob", 6 Korrekturen, die meisten von allen. Meinung: echter Nutzen, aber schwer zu testen, und die Tools geben schon einiges vor.
3. **resume-check**: Nach Absturz oder Stopp erst den echten Stand prüfen (git status, Branch, letztes Log, laufende Hintergrundjobs), dann den unterbrochenen Schritt fortsetzen. Nie Prozesse beenden oder gesperrte Ordner löschen, sondern melden. Woher: Regel "weiter after a crash". Meinung: klein, oft gebraucht, leicht zu testen.

### Ergebnisse prüfen
4. **claim-check**: Vor jedem Bericht nur Geprüftes behaupten, sonst "nicht geprüft". Eine Ursache gilt erst, wenn sie gezeigt ist. Größen, Anteile und "unbenutzt" erst messen, auch den Nutzen einer Empfehlung. Woher: "Honesty". Meinung: stark und allgemein, meine zweite Wahl. Heute selbst verletzt (die ungezählte Behauptung zu delegate).
5. **generated-asset-check**: Ergebnis eines anderen Modells (Bild, Musik, Stimme) gegen die Anforderung messen, bevor der Nutzer es sieht. Wo es nicht messbar ist, das sagen, bevor Geld ausgegeben wird. Bilder aus den Bildern einordnen, nicht aus ihrer Beschreibung. Woher: "Honesty", Art-Pipeline und Audio-Takes. Meinung: selten so klar formuliert, gut für kreative Projekte.
6. **live-layout-check**: UI im Browser prüfen: feste Fenstergröße, Maße als Zahlen, Umschalten in mehreren Reihenfolgen, Vorher und Nachher im selben Tab. Ein Screenshot plus "so" ist die Vorgabe. Woher: "Live checks", "Visual tweaks". Meinung: gut fürs Frontend, braucht aber ein Browser-Tool.
7. **measure-twice**: Ein Timing- oder fps-Ergebnis zählt erst nach einer Wiederholung mit geprüfter Rechnerlast. Laufzeitwerte kommen aus der laufenden App, nie aus Testdaten. Woher: "Honesty" (Hausmaßstab-Fehler 2026-11-22). Meinung: könnte in claim-check aufgehen.

### Dateien und Wissen
8. **history-first**: Vor dem Neubau oder Umschreiben von etwas Bestehendem die Commits des Originals lesen und jede Korrektur des Nutzers übernehmen. Ein Brief wie "wie bei den Klassikern" hebt keine frühere Entscheidung auf. Woher: Regel "Rebuilding a UI element", so auch für die vier Entwürfe gemacht. Meinung: klein, wirksam, kaum verbreitet.
9. **backup-before-rewrite**: Vor einem großen Umbau von Text- oder Datendateien alles in einen Ordner mit Datum sichern, Text wörtlich verschieben, danach per Skript Zeile für Zeile prüfen, dass nichts fehlt. Meinung: solide, aber viele halten git für genug.
10. **project-docs**: Getrennte Projekt-Notizen (Stand, offene Zusagen, verschobene Ideen, Karte, Log) und am Sessionende stimmig halten. Meinung: stark bei langen Projekten, könnte auch Teil von parallel-worktrees werden.
11. **pinned-facts**: Festlegungen des Nutzers (Namen, Zuordnungen, Entscheidungen) sofort in eine Datei schreiben, die jede Session zuerst liest. Bei Widerspruch gilt die Datei, der Widerspruch wird gemeldet. Woher: deine FAKTEN.md. Meinung: löst "das musste ich schon wieder sagen", überschneidet sich teils mit dem eingebauten Gedächtnis der Tools.

### Skills und Regeln
12. **skill-check**: Prüft einen Skill vor dem Teilen (private Wörter und Pfade, E-Mails, Schlüssel, Spec-Felder, Namen, die nur in einem Tool gehen). Bündelt dein `check_skill.py` (12 von 12 eingebauten Fehlern gefunden). Meinung: passt genau zu den Leuten, die deine Karte anschauen. Nur dein Skript und deine eigenen Regeln, Teile aus Matts Skills bleiben draußen.
13. **rule-edit**: Vor einer neuen Zeile in einer Regel oder Doku das Bestehende zum Thema lesen und schärfen statt anhängen, Doppeltes zusammenführen. Meinung: eher nicht, weil es sich mit Matts writing-for-agents überschneidet (Plagiatsrisiko).

## C. Geprüft und verworfen
- **game-check**: eine Bearbeitung von Xyloforge game-detail-bar (siehe FAKTEN.md).
- **art-pipeline, audio-takes, content-editing**: Niagarama-Abläufe, zu projektgebunden. Ihr allgemeiner Kern steckt in generated-asset-check.
- **Civ-VII-Mod-Regeln**: nicht von dir.
- **Prompt-Dateien**: Projektinhalt, keine Skills.
- **session-close**: überschneidet sich mit fresh.
- **Dev-Server unter Windows stoppen**: zu schmal für einen eigenen Skill.
- **no-dashes-Hook, usage-report.py, statusline.py, die Agenten builder, checker und searcher**: keine Skills.
- **Matt-Pocock-Skills und OpenAI-Systemskills**: nie (siehe FAKTEN.md).
