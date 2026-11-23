Ich habe eigene Agent Skills geschrieben oder geplant (Ordner mit SKILL.md nach der Spec von agentskills.io, gedacht für Claude Code, Codex und ähnliche Coding-Agenten). Fünf sind schon öffentlich, einer ist ein fertiger Entwurf, der Rest sind Ideen ohne Entwurf. Lies die Liste und sag mir ehrlich und konkret, was du davon hältst. Keine Höflichkeiten, Kritik ist erwünscht.

**Öffentlich** (voller Text unter https://jakobchristensen.com/agent-skills/<name>/SKILL.md)

1. **workaround**: Findet einen anderen Weg, wenn der direkte von außen blockiert ist (Tool kaputt oder fehlt, API nicht verfügbar, Bug, den man nicht direkt fixen kann). Prüft zuerst, ob der Blocker eine Schutzvorrichtung ist; Berechtigungen, Freigaben und Sicherheitschecks werden nie umgangen.
2. **fresh**: Beendet eine lange oder fertige Session sauber. Schreibt ohne Rückfrage eine Übergabedatei (Stand, Pfade, grüne Befehle, Abnahmekriterium, empfohlenes Modell und Aufwand für die nächste Session) und bietet eine frische Session an. Auslöser: großer Kontext, lange Pause, Themenwechsel, bildlastige Arbeit. Optionaler Hook für Claude Code, der an die Grenze erinnert.
3. **blindfold**: Blinder, zählbarer Test, ob eine Änderung an Prompt, Skill oder Agent wirklich besser ist als die alte Fassung und als ein Lauf ganz ohne. Oder ein Audit-Modus, der blinde Leser erst an bekannten guten und schlechten Beispielen eicht, bevor man ihrem Urteil über viele Texte traut. Mit Skript zum Anonymisieren.
4. **lanes**: Wie mehrere Agent-Sessions gleichzeitig an einem git-Repo arbeiten, ohne sich zu stören: ein Worktree und Branch pro Session, der Haupt-Checkout bleibt sauber und ist nur Integrationsziel, nur benannte Dateien stagen, Check vor jedem Commit, ein Skript integriert einen Branch nach dem anderen (Merge und voller Check in temporärem Worktree, nur fast-forward). Skript bisher nur für Windows PowerShell.
5. **strays**: Findet lokale git-Arbeit, die noch nicht auf dem Remote ist (Branches, Commits), zeigt erst eine Übersicht und pusht nur nach Zustimmung, nur sicher: kein force, jeder Branch per exaktem Commit, der Hauptbranch nur fast-forward.

**Entwurf**

6. **tidy**: Archiviert in der Claude-Desktop-App alle fertigen oder überholten Sessions, damit die Seitenleiste kurz bleibt. Prüft vorher per git, dass nichts Unfertiges verloren geht. Läuft nur in dieser App.

**Ideen ohne Entwurf**

7. **delegate**: Wählt pro Teilaufgabe das billigste Modell, das sie gut kann (als Rolle billig, mittel, stark, weil Modellnamen veralten), fragt vor mehr als 2 Agenten nach, gibt parallelen Agenten einen gemeinsamen Brief plus eigene Dateiliste und prüft ein gemeldetes "fehlgeschlagen" gegen die echten Dateien.
8. **decision-box**: Stellt dem Nutzer eine Entscheidung so, dass sie ohne Kontext verständlich ist: Empfehlung und Befund zuerst, jede Option mit vollem Text und was sie ändert, eine Frage pro Entscheidung.
9. **resume-check**: Nach Absturz oder Abbruch erst den echten Stand prüfen (git status, Branch, letztes Log, laufende Hintergrundjobs), dann den unterbrochenen Schritt fortsetzen. Nie Prozesse beenden oder gesperrte Ordner löschen, sondern melden.
10. **claim-check**: Im Bericht nur Geprüftes behaupten, sonst "nicht geprüft" schreiben. Eine Ursache gilt erst, wenn sie gezeigt ist. Größen, Anteile, "unbenutzt" und den Nutzen einer Empfehlung erst messen.
11. **measure-twice**: Ein Timing- oder fps-Ergebnis zählt erst nach einem Wiederholungslauf mit geprüfter Rechnerlast. Laufzeitwerte kommen aus der laufenden App, nie aus Testdaten oder Defaults.
12. **generated-asset-check**: Ergebnisse anderer Modelle (Bild, Musik, Stimme) gegen die Anforderung messen, bevor der Nutzer sie sieht. Wo das nicht messbar ist, das sagen, bevor Geld ausgegeben wird. Bilder anhand der Bilder einordnen, nicht anhand ihrer Beschreibung.
13. **live-layout-check**: UI im Browser prüfen mit fester Fenstergröße, Maße als Zahlen, Umschalten in mehreren Reihenfolgen, Vorher und Nachher im selben Tab. Ein Screenshot plus "so" ist die Vorgabe.
14. **history-first**: Vor dem Neubau oder Umschreiben von etwas Bestehendem die Commits des Originals lesen und jede frühere Korrektur des Nutzers übernehmen.
15. **backup-before-rewrite**: Vor einem großen Umbau von Text- oder Datendateien alles in einen datierten Ordner sichern, Text wörtlich verschieben und danach per Skript Zeile für Zeile prüfen, dass nichts verloren ging.
16. **project-docs**: Projektnotizen in getrennte Dateien aufteilen (aktueller Stand, offene Zusagen, verschobene Ideen, Karte, Log) und am Ende jeder Session stimmig halten.
17. **pinned-facts**: Festlegungen des Nutzers (Namen, Zuordnungen, Entscheidungen) sofort in eine Datei schreiben, die jede Session zuerst liest. Bei Widerspruch gilt die Datei, und der Widerspruch wird gemeldet.
18. **skill-check**: Prüft einen Skill vor dem Teilen per Skript: private Wörter und Pfade, E-Mails, Schlüssel, Spec-Felder, Namen, die nur in einem Tool funktionieren.
19. **rule-edit**: Vor einer neuen Zeile in einer Regel oder Doku das Bestehende zum Thema lesen und schärfen statt anhängen, Doppeltes zusammenführen.

**Was ich von dir wissen will**

1. Pro Skill eine Zeile: behalten, ändern oder streichen, mit Grund. Würdest du ihn selbst benutzen?
2. Welche gibt es schon in guter Form? Nenne die Quelle nur mit Link, wenn du sie sicher kennst, sonst schreib "nicht sicher". Rate keine Links.
3. Was sollte zusammengelegt, aufgeteilt oder besser als Regel in AGENTS.md oder CLAUDE.md stehen statt als Skill?
4. Sind die Namen verständlich? Wo hast du einen besseren?
5. Welche 3 Ideen würdest du als Nächstes bauen, und warum?
6. Welcher Skill fehlt in dieser Sammlung?
