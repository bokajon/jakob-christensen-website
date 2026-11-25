# Netz-Abgleich aller Skills und Ideen (2026-11-23)

Rohbericht zweier Recherche-Agenten (Sonnet), Zusammenfassung und Nachprüfung in IDEEN.md, Abschnitt D. Teil 1 prüft die 6 fertigen Skills, Teil 2 die 13 Ideen plus proof; Teil 3 reroll, Teil 4 bis 7 nothing-lost, measure-ui, numbers-skeptic, now-and-then.

## Teil 1: Netz-Abgleich der 6 Skills (Stand 2026-11-23)

Hinweis zur Methode: "gelesen" heisst, die Seite wurde per WebFetch geoeffnet; WebFetch liefert eine Zusammenfassung durch ein kleines Modell, keinen Rohtext. "nur Suchergebnis" heisst, nur Titel und Snippet aus der Websuche. Wortgleiche Saetze wurden jeweils mit exakter Phrase gesucht; die Suchmaschine findet exakte Phrasen nur unsicher, "nichts gefunden" heisst daher "nicht gefunden", nicht "bewiesen nicht vorhanden". Die Dateien der Skills wurden vor der Suche vollstaendig gelesen.

### Zusammenfassung

| Skill | Name schon vergeben? | Gibt es schon? | Was ist bei uns anders | Wortgleiche Saetze gefunden? |
|---|---|---|---|---|
| workaround | Nein, kein Skill dieses Namens gefunden (Suche nur Snippets) | aehnlich: "getting-unstuck" (gelesen) | Unser Kern ist die Pruefung "ist der Blocker eine Schutzvorrichtung (Berechtigung, Sandbox, Policy)?" vor jeder Umgehung, dazu Routenwahl innerhalb des Projekts und Bericht. Getting-unstuck prueft, ob wirklich blockiert, und testet mindestens 3 Hypothesen. Es hat aber ebenfalls die Regel "Guards nicht umgehen, nur den User fragen" | Nein |
| fresh | Nein fuer "fresh". Aber nah: "fresh-start" (zach2940/claude-skills, gelesen) | aehnlich bis nah: Matt Pococks "handoff" (gelesen), "fresh-start" (gelesen) und viele weitere Handoff-Skills | Unser Kern gegenueber handoff: Ausloeser nach Kontextgroesse/Pause/Bildlast, nennt Modell und Aufwand fuer die naechste Session, Pflichtpunkte (Akzeptanzkriterium, gruene Befehle, Pfade), optionaler Hook mit Skript, bietet frische Session an. Die Grundidee (Datei in Temp, Links statt Kopien, Secrets raus, empfohlene Skills) steht schon in Pococks handoff | Nein |
| blindtest | Nein. Nur Musik-Quiz-Repos und ein geplanter Skill "blindtest" als Issue (kein SKILL.md belegt) | aehnlich: Skill-Evaluationen mit blindem A/B-Vergleich (skill-creator comparator, skill-auditor, blinded-eval; nur Suchergebnis) | Unser Kern: zaehlbare Kriterien gegen vorab fixierte Loesungsliste, Baseline ohne Skill, mehrere Laeufe und Judges, Anonymisierungsskript, plus Audit-Modus mit Kalibrierung. Die Fundstuecke sind meist einfache A/B-Vergleiche oder Rubrik-Bewertung | Nein |
| lanes | Ja: Skill "lanes" existiert (tavinathanson/lanes, gelesen). Zusaetzlich Kandidat "lanes" in expo/snapback und ein Plugin-Skill "lanes" (nur Suchergebnis) | aehnlich: tavinathanson/lanes (gelesen), akitaonrails "worktrees" (gelesen, teilweise), codervisor "parallel-worktrees" (gelesen, teilweise), itinance "orchestrating-agent-lanes" (gelesen) | Unser Kern: Hauptcheckout bleibt sauber und ist nur Integrationsziel, ein Skript integriert seriell (Lock, Merge im temporaeren Worktree, voller Check, nur ff-only), Pruefung vor jedem Commit, Staging nur benannter Dateien. Bei tavinathanson: Lanes parallel in einer Terminal-Umgebung, merge-lane.sh per Cherry-pick oder Merge, kein voller Check, Arbeit im Hauptcheckout ist normaler Modus | Nein |
| strays | Nein, kein Skill dieses Namens gefunden | nichts Gleiches gefunden; aehnlich nur: allgemeine Push-Skills und Branch-Cleanup-Skills (nur Suchergebnis) | Unser Kern: Ueberblick ueber lokale Branches und Commits, die nicht auf dem Remote sind, Freigabe durch den User, Push je Branch mit exaktem SHA, nie force, Default-Branch nur fast-forward | Nein |
| tidy | Ja: "tidy" existiert mehrfach, aber mit anderem Job: finolabs "tidy" (gelesen: Sessions benennen, Handovers speichern), howells/tidy, ericjohnolson "tidy" (CLAUDE.md-Docs), davidbeglenboyle "tidy" (nur Suchergebnis) | nichts Gleiches gefunden; aehnlich: pandazki "Project Tidy Agent" (benennt Sessions um, nur Suchergebnis), clawhub "Session Hygiene" (archiviert alte Sessions in sessions.json, nur Suchergebnis) | Unser Kern: archiviert nur "erledigte" Sessions der Claude-Desktop-App ueber deren Session-Tools, mit Pruefung von Nachfolger-Session, Git (gemerged, sauber) und Eltern-Kind-Kette. Die Fundstuecke benennen oder archivieren nach Alter, nicht nach Erledigt-Pruefung | Nein |

Wichtige Nebenfunde fuer dich:
- fresh: "fresh-start" von zach2940 ist ausdruecklich aus Pococks handoff abgeleitet und verwendet dessen Idee (Datei, Link statt Kopie, Geheimnisse raus). Unser fresh ist inhaltlich weiter, aber die Grundidee ist nicht neu.
- tidy: Der Satz "Archiving a session is reversible" ist nach Berichten in GitHub-Issues von Claude Code (nur Suchergebnis) fraglich: mehrere Issues sagen, in der Desktop-App gebe es keinen Weg, eine archivierte Code-Session ueber die Oberflaeche wiederherzustellen. Ob `unarchive_session` heute existiert, ist hier nicht geprueft. Vor Veroeffentlichung gegen die aktuelle Desktop-Doku pruefen.
- lanes: Der Name "lanes" ist bei tavinathanson/lanes schon fuer einen aehnlichen Skill belegt (andere Loesung). Ein Namenswechsel zu etwas Eigenstaendigem waere zu erwaegen.

### 1. workaround

Namenskollision: nein (kein Skill namens "workaround" in der Suche gefunden; Suche in skills.sh, smithery, tessl, clawhub, github, skillsmp lieferte nur Issues zu SKILL.md-Namensfehlern).

Treffer:
- https://www.skillsdirectory.com/skills/mixard-getting-unstuck - gelesen - Skill "getting-unstuck": vor dem Aufgeben pruefen, ob wirklich blockiert; mindestens 3 Hypothesen, billig testen, Ergebnis loggen; harte Grenzen (Sicherheit, Berechtigung, verweigerte Tool-Aufrufe) werden nicht umgangen, nur durch Nachfragen. Nah an unserem Guard-Gedanken, aber anderer Ablauf.
- https://claudskills.com/skills/unstick/ - nur Suchergebnis - Skill "unstick", Inhalt nicht gelesen.
- https://claudskills.com/skills/breakthrough/ - nur Suchergebnis - Skill "breakthrough", Inhalt nicht gelesen.
- https://www.skills.sh/boshu2/agentops/dcg - nur Suchergebnis - nach Beschreibung der Suche ein Skill, der blockierte Befehle als Sicherheitspunkte behandelt und keine Umgehungen erzeugt; Inhalt nicht gelesen.

Verdict: aehnlich (Kern unterscheidet sich: Guard-Entscheidung als Pflichtschritt 2, Routenwahl nach Projektgrenze, Abschlussbericht).

Queries:
1. agent skill "workaround" SKILL.md find another route when blocked claude code skill
2. "workaround" skill SKILL.md name workaround (nur skills.sh, smithery, tessl, clawhub, github, skillsmp)
3. Wortgleich: "A guard is never worked around with another tool or command" - nichts gefunden (nur Maschinenschutz-Seiten)

### 2. fresh

Namenskollision: "fresh" selbst nicht gefunden. Nah: "fresh-start", https://github.com/zach2940/claude-skills (gelesen).

Treffer:
- https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md - gelesen (Zusammenfassung, kein Rohtext) - "handoff": Konversation in ein Handoff-Dokument verdichten, in OS-Temp speichern, Abschnitt "suggested skills", nichts duplizieren was in Specs/Plans/Issues/Commits steht (per Pfad oder URL verweisen), Geheimnisse und personenbezogene Daten entfernen, Argumente als Fokus der naechsten Session. Hat nicht: Ausloeser nach Kontextgroesse, Modell/Aufwand-Empfehlung, Akzeptanzkriterium, Hook.
- https://github.com/zach2940/claude-skills - gelesen - "fresh-start": abgeleitet aus Pococks handoff, speichert unter ~/.claude/handoffs/<projekt>/, bietet per Karte in der Desktop-App eine frische Session an, nennt kein Modell und keinen Aufwand, kein Hook.
- Viele weitere Handoff-Skills, nur Suchergebnis: https://tessl.io/registry/skills/github/softaworks/agent-toolkit/session-handoff , https://tessl.io/registry/skills/github/ykdojo/claude-code-tips/handoff , https://skills.sh/petekp/claude-code-setup/handoff , https://skills.sh/pfangueiro/claude-code-agents/handoff , https://github.com/weirdsky924/agent-handoff-skill
- Verzeichnis anthropics/skills (gelesen, 19 sichtbare Ordner): kein handoff, fresh oder aehnlich. OpenAI-Skills-Repo: Seite zeigte nur .curated und .system, Inhalt nicht pruefbar (nicht geprueft).

Verdict: aehnlich zu Pococks handoff (gleiche Grundidee, unser Kern: Ausloeser nach Kontext/Pause, Modell und Aufwand benennen, Pflichtpunkte, Hook-Skript, Angebot der frischen Session). Ein Leser wuerde es als Variante des Handoff-Konzepts sehen, nicht als dieselbe Datei.

Queries:
1. agent skill "fresh" SKILL.md handoff file next session claude code context
2. skills.sh "fresh" skill name SKILL.md start fresh session (Domainfilter)
3. Wortgleich: "A fresh session with a good handoff file is often cheaper and sharper than continuing" - nicht gefunden

### 3. blindtest

Namenskollision: nein. Gefunden nur Musik-Quiz-Repos (z.B. https://github.com/Zadigo/myblindtest , nur Suchergebnis) und ein Issue zu einem geplanten Skill "blindtest" (https://github.com/tapoh22334/dotfiles/issues/36 , gelesen): offen, nur Vorschlag fuer paarweisen A/B-Vergleich mit Mensch als Richter, kein SKILL.md belegt.

Treffer (alle nur Suchergebnis, nicht geoeffnet):
- https://www.promptfoo.dev/docs/guides/test-agent-skills/ - Skill-Versionen vergleichen, pruefen ob der Skill ausgeloest wird.
- https://skills.sh/lone-yu-cmd/prizmrecommandskills/skill-auditor - Modus --compare, blinder A/B-Vergleich zweier Skill-Versionen mit Comparator-Subagent.
- https://aws-samples.github.io/sample-apex-skills/docs/skills/skill-creator/agents/comparator - Spiegel von Anthropics skill-creator "Blind Comparator" (A/B, Rubrik).
- https://cdn.jsdelivr.net/npm/balakit@1.21.0/skills/blinded-eval/SKILL.md - "blinded-eval": Kandidaten isoliert, blinder Judge mit zurueckgehaltener Rubrik, Urteil promote/iterate/abandon.
- https://claudskills.com/skills/blind-skill-assessment/SKILL.md - "blind-skill-assessment": A/B zufaellig, Herkunftshinweise entfernen, Auswertung dreier Personas.
- Anthropics skill-creator ist im Verzeichnis anthropics/skills vorhanden (gelesen, Ordnerliste); sein Comparator-Agent wurde nicht selbst geoeffnet.

Verdict: aehnlich. Gleiche Grundidee (blind, A/B), aber unsere Loesungsliste vorab, Baseline ohne Skill, Zaehlung statt Rubrik-Eindruck, Anonymisierungsskript und Audit-Modus mit Kalibrierung habe ich in keinem Fundstueck gesehen (Fundstuecke nur als Snippet gelesen, daher nicht sicher).

Queries:
1. agent skill "blindtest" OR "blind test" prompt skill comparison blind judges SKILL.md
2. "blindtest" skill SKILL.md (Domainfilter)
3. Wortgleich: "Length is not a quality measure, so no judge prompt rewards brevity" - nicht gefunden (nur allgemeine Seiten zu Verbosity Bias)

### 4. lanes

Namenskollision: ja. https://github.com/tavinathanson/lanes (gelesen) hat einen Skill "lanes" (skills/lanes). Weitere nur Suchergebnis: expo/snapback Kandidat "lanes" (https://github.com/ProSkillsMD/proskills/issues/11133), Plugin-Skill lanes erwaehnt in https://github.com/glunk-works/claude-workbench/issues/1679.

Treffer:
- https://github.com/tavinathanson/lanes - gelesen (README plus raw SKILL.md, Zusammenfassung) - mehrere Claude-Code-Instanzen parallel, je ein Worktree (Lane), Status, Ueberlappungserkennung, Integrationsreihenfolge, merge-lane.sh (Cherry-pick bei 1 bis 2 Commits, sonst Merge), Staging nur eigener Dateien, nie mehrere Lanes gleichzeitig mergen. Kein voller Check, kein ff-only, Hauptcheckout-Arbeit gilt als normal.
- https://www.skills.sh/akitaonrails/my-skills/worktrees - gelesen (nur Teil der Seite) - "worktrees": Orchestrator plant Lanes, Worktrees unter .slim/worktrees/. Zu Merge-Skript und Hauptcheckout-Regel war aus der Seite nichts zu lesen.
- https://github.com/itinance/orchestrator-skills - gelesen - "orchestrating-agent-lanes": ein Orchestrator, mehrere Lane-Sessions, ein Worktree je Ticket, Merge-Gates. Hauptcheckout-Regeln nicht beschrieben.
- https://skills.sh/codervisor/lean-spec/parallel-worktrees - gelesen (Seite abgeschnitten) - "parallel-worktrees": je Session ein Worktree, Branch und PR (hostet ueber Pull Requests). Merge-Skript nicht sichtbar.
- Nur Suchergebnis: https://cdn.jsdelivr.net/gh/TheAhmadOsman/parallel-agent-worktree-skill@main/SKILL.md , https://skills.sh/laurigates/claude-plugins/git-worktree-agent-workflow , https://skills.sh/maragudk/skills/worktrees , https://www.skills.sh/cygnusfear/agent-skills/blitz
- Hinweis: Claude Code selbst dokumentiert Worktrees und blockiert Edit/Write im Hauptcheckout (nur Suchergebnis, https://code.claude.com/docs/en/worktrees).

Verdict: aehnlich. Das Konzept "ein Worktree pro Session" ist verbreitet. Unser Kern (serielle Integration mit Lock, temporaerer Worktree, vollem Check, nur ff-only; Hauptcheckout nie beschrieben) habe ich in keinem gelesenen Treffer gefunden. Einschraenkung: Seiten teils abgeschnitten, keine vollen SKILL.md-Rohtexte gelesen.

Queries:
1. agent skill "lanes" SKILL.md parallel git worktree agents
2. "lanes" skill SKILL.md (Domainfilter)
3. Wortgleich: "Own worktree, own branch" "The main checkout is only the integration target" - nicht gefunden
4. Wortgleich: "Never pipe the check into" "inside the chain" "a pipe returns the last command's exit code" - nicht gefunden (nur allgemeine Seiten zu Pipe-Exitcodes, z.B. https://cli-agent-spec.github.io/challenges/01-critical-ecosystem-runtime-agent-specific/56-high-pipeline-exit-masking/ , nur Suchergebnis)

### 5. strays

Namenskollision: nein (Suche nur mit Domainfilter; einziger Treffer war ein GitHub-Issue ueber "untracked strays", kein Skill).

Treffer (alle nur Suchergebnis):
- https://tessl.io/registry/skills/github/korchasa/flowai-plugins/push - Push-Skill.
- https://skills.sh/gotalab/skillport/git-branch-cleanup - Branch-Cleanup: findet Branches mit unpushed Commits ueber for-each-ref und Upstream-Status, Upstream-gone.
- https://skills.sh/rlespinasse/agent-skills/local-branches-status - Status lokaler Branches.
- https://raw.githubusercontent.com/itzTiru/claude-code-skills-fable5/main/shipit-lite/SKILL.md - prueft nur den unpushed Bereich vor dem Push.
- https://claudepluginhub.com/skills/daymade-git-safety-net-git-safety-net/git-safety-net - Sicherungs-Bundle vor Cleanup.
- Push-Skills mit "kein force, bei Non-Fast-Forward stoppen" und "Push nur nach Nutzerfreigabe" tauchten auf (Suchergebnis, z.B. https://skills.sh/sd0xdev/sd0x-dev-flow/push-ci). Die Suche selbst meldete, kein Skill liste lokale Branches und pushe je Branch mit exaktem Commit.
- anthropics/skills und mattpocock/skills (gelesen, Ordnerlisten): kein passender Skill.

Verdict: nichts Gleiches gefunden (Teilbereiche in Push- und Cleanup-Skills, aber Kombination aus Gesamtueberblick, Freigabe, SHA-genauem Push und Default-Branch-Fast-Forward nicht gesehen). Keine Treffer geoeffnet, daher Urteil "nichts gefunden", nicht "es gibt nichts".

Queries:
1. agent skill "strays" OR "unpushed" SKILL.md find unpushed git branches push safely
2. "strays" skill SKILL.md git branches not on remote (Domainfilter)
3. "No push --force, each branch by its exact commit" OR "push only fast-forward" skill list local-only branches overview ask before push claude
4. Wortgleich: "A failed ls-remote is no answer" OR "Membership is reachability only" - nicht gefunden

### 6. tidy

Namenskollision: ja, "tidy" ist mehrfach vergeben, aber fuer anderen Job.

Treffer:
- https://www.skillsdirectory.com/skills/finolabs-tidy - gelesen - "tidy": Sessions benennen und umbenennen, Handovers speichern, Entscheidungen zurueckschreiben, Kontextdruck pruefen. Archiviert nicht; "never runs a compaction command or starts a session".
- https://smithery.ai/skills/howells/tidy - nur Suchergebnis - "tidy", Inhalt nicht gelesen.
- https://tessl.io/registry/skills/github/ericjohnolson/tessl-test/tidy--tidy - nur Suchergebnis - nach Suchbeschreibung Aufraeumen von CLAUDE.md-Dokumentation.
- https://skillsmp.com/skills/davidbeglenboyle-davids-claude-code-setup-skills-ready-to-use-tidy-skill-md - nur Suchergebnis - Projektordner-Aufraeumen.
- https://claudeskills.info/skills/pandazki/pneuma-skills/skill/ - nur Suchergebnis - "Project Tidy Agent": benennt Sessions mit Platzhalter-Titel um.
- https://clawhub.ai/halbotley/session-hygiene - nur Suchergebnis - archiviert alte Sessions (Standard 48 Stunden) anhand einer sessions.json, nicht an die Claude-Sidebar gebunden.
- https://hermes-agent.nousresearch.com/docs/user-guide/skills/bundled/productivity/productivity-session-librarian - nur Suchergebnis - Hermes-Skill, Sessions finden, umbenennen, archivieren, bereinigen (anderes Produkt).

Verdict: nichts Gleiches gefunden (nah nur "Session Hygiene" und "Session Librarian", beide anderes Produkt und nach Alter statt nach Erledigt-Pruefung). Namenskollision ja.

Queries:
1. agent skill "tidy" SKILL.md archive finished sessions claude code sidebar
2. "Archiving a session is reversible" OR "archive_session" claude desktop app Code tab skill archive finished sessions (Treffer: Desktop-Changelog und Issues, siehe Nebenfund oben; https://code.claude.com/docs/en/desktop-changelog.md , nur Suchergebnis)
3. Wortgleich: "A session is settled when nothing will happen in it any more and no question to the user is open" - nicht gefunden

## Teil 2: Netz-Abgleich der 14 Skill-Ideen (Stand 2026-11-23)

Methode: Namenspruefung ueber die Such-API von skills.sh (`https://skills.sh/api/search?q=<name>`, gelesen, liefert exakte Namenstreffer), Inhalte ueber geoeffnete Seiten. Alle Seiten, die ich ueber WebFetch geoeffnet habe, hat ein kleines Modell zusammengefasst; einige Skill-Seiten brachen bei "Show more" ab, das ist jeweils vermerkt. "gelesen" = Seite geoeffnet, "nur Suchergebnis" = nur Snippet. Nicht geprueft: Inhalte von clawhub.ai, smithery.ai und GitHub-Suche direkt (nur ueber Websuche gestreift); awesome-Listen nur ueber die Websuche. Keine Suchanfrage enthielt private Namen.

### Zusammenfassung

| Idee | Name schon vergeben? | Gibt es schon? | Was waere bei uns anders | Ueberschneidung mit Matt Pocock? |
|---|---|---|---|---|
| 1 delegate | Ja: https://skills.sh/api/search?q=delegate (exakt `delegate` von lvlup-sw/exarchos; dazu oxmonty, kylezantos, ivangdavila auf anderen Seiten) | aehnlich | Modellwahl pro Teilaufgabe gibt es mehrfach; die Kombination Rolle statt Modellname, Frage vor mehr als 2 Agenten, gemeinsamer Brief plus Dateiliste, Skriptpruefung, "fehlgeschlagen" gegen echte Dateien fand ich in keiner gelesenen Seite (die gelesenen Seiten waren teils abgeschnitten) | Gering: implement-spec (gelesen) nutzt parallele Subagenten, sagt aber nichts zu Modellwahl, Brief oder Pruefung von Berichten |
| 2 decision-box | Nein (skills.sh-Suche: kein exakter Treffer) | aehnlich | skill-decision-support (gelesen) setzt die Empfehlung ans Ende nach Vergleich; unser Kern ist Empfehlung und Befund zuerst, jede Option mit vollem Text, eine Frage je Entscheidung, ohne Kontext verstaendlich | Gering bis mittel: to-questionnaire (gelesen) formuliert Fragen an Dritte, nicht Optionen mit Empfehlung; grill-me, wait-what nur README-Zeile |
| 3 resume-check | Nein (kein exakter Treffer; resume-checkpoint, resume-work heissen anders) | aehnlich (nur Suchergebnis, Seiten gaben 403) | Mehrere Resume- und Recover-Skills pruefen git-Stand; Suchtreffer-Snippets nennen keine Pruefung laufender Prozesse und kein "nie beenden, sondern melden" | Gering: handoff (nur README) ist das Gegenstueck, nicht dasselbe |
| 4 claim-check | Ja: 10 exakte Treffer, z. B. microsoft/cat-agent-skills (skills.sh-Suche) | aehnlich, aber nah | verification-before-completion (gelesen): Erfolgsmeldung nur mit frischem Befehlsergebnis. Bei uns zusaetzlich "nicht geprueft" als Pflichtlabel, Ursache erst nach Beleg, Groessen/Anteile/"unbenutzt" messen, Nutzen einer Empfehlung messen | Gering: pr (gelesen) verlangt Vorher-Nachher-Belege fuer Aenderungen, nicht fuer Berichtsaussagen |
| 5 generated-asset-check | Nein (kein Treffer) | aehnlich, nah | ai-media-quality-review (gelesen) prueft Bild, Video, Audio gegen den Brief mit Skript. Bei uns zusaetzlich: vor dem Geldausgeben sagen, was sich nicht messen laesst; Bilder aus den Bildern einordnen, nicht aus der Beschreibung; nicht an ein Produkt gebunden | Keine gefunden |
| 6 live-layout-check | Nein (kein Treffer) | aehnlich | autonomous-ui-inspection (gelesen): fester Viewport, Bounding Boxes, Vorher-Nachher einer Interaktion. Es erwaehnt weder Umschalten in mehreren Reihenfolgen noch denselben Tab; unsere Regel "Screenshot plus so ist die Vorgabe" fand ich nirgends | Keine gefunden |
| 7 measure-twice | Ja: mattshepphard/skills/measure-twice (skills.sh-Suche) und https://www.agensi.io/skills/measure-twice (gelesen); beide meinen etwas anderes (vor dem Aendern lesen, danach pruefen) | nichts gefunden (Kern Wiederholung, Rechnerlast, Laufzeitwerte) | Benchmark-Skills mit Mehrfachlaeufen (nur Suchergebnis) betreffen Skill-Evals, nicht die Regel "Zeitmessung gilt erst nach Wiederholung und Lastpruefung" | Keine gefunden |
| 8 history-first | Nein (kein Treffer) | aehnlich | investigating-repository-history (gelesen, abgeschnitten) rekonstruiert die Absicht hinter Code; bei uns geht es um Korrekturen des Nutzers im Commit-Verlauf und darum, dass ein Brief wie "wie bei den Klassikern" sie nicht aufhebt | Keine gefunden |
| 9 backup-before-rewrite | Nein (kein Treffer) | aehnlich | safe-edit (gelesen) legt datierte Backups in `.backups/YYYY-MM-DD/` an, hat aber kein woertliches Verschieben und keine Zeile-fuer-Zeile-Verlustpruefung | Keine gefunden |
| 10 project-docs | Ja: 20 exakte Treffer (z. B. jezweb/claude-skills, waynesutton/builder-skills; skills.sh-Suche) | aehnlich | wrap-session (gelesen) pflegt nur README und CHANGELOG; Snippets nennen STATUS/DECISIONS-Setups. Fuenf getrennte Dateien mit Konsistenzpruefung am Sessionende fand ich nicht gelesen | Gering: domain-modeling (GLOSSARY, ADR; nur README-Zeile) ist ein anderes Dokumentpaar |
| 11 pinned-facts | Nein (kein Treffer) | aehnlich, nah | agent-memory-discipline (gelesen): Nutzerkorrekturen sofort speichern, bei Widerspruch beide mit Datum zeigen und fragen. Bei uns: eine feste Datei, jede Session liest sie zuerst, bei Widerspruch gilt die Datei und der Widerspruch wird gemeldet | Keine gefunden |
| 12 skill-check | Ja: 16 exakte Treffer (olgasafonova/skillcheck-free, thedaviddias/skill-check u. a.; skills.sh-Suche) | gleich (Aufgabe), siehe Abschnitt | NVIDIA SkillEvaluator (gelesen) deckt PII, Pfade, E-Mails, Schluessel, Spec-Felder, Namensregeln, Unicode ab. Bei uns: ein kleines Skript ohne Abhaengigkeiten, eigene Wortliste privater Namen, Namen nur eines Tools, Gedankenstriche, deutsche Textstellen | Keine gefunden |
| 13 rule-edit | Nein (nur `rule-editor` von tomy0000000/dotfiles, anderer Name) | aehnlich, nah | Matts writing-for-agents und retro (beide gelesen) decken "eine Quelle der Wahrheit", "vorhandene Doku zuerst suchen", "ausduennen statt anhaengen" ab; unser Zusatz ist der Ablauf vor jeder neuen Zeile | Ja, deutlich: writing-for-agents (Single Source of Truth, Sediment) und retro (vorhandene Docs zuerst) |
| 14 proof | Kein exakter Treffer `proof` auf skills.sh; aber `proof-of-work` (thebushidocollective/han), `proof-agent` (https://clawhub.ai/skills/proof-agent), `ce-proof`, `proof-checker` (nur Suchergebnis) | aehnlich, nah | proof-of-work und verification-before-completion (beide gelesen, teils abgeschnitten) verlangen Beleg je Aussage; Tags "geprueft/nicht geprueft" pro Aussage in einer Durchsicht ueber den fertigen Bericht, plus Zusatzregeln fuer Zeitmessung, Laufzeitwerte, generierte Medien fand ich nicht | Gering: pr (gelesen) Beweis-Rangfolge fuer PRs; sonst keine |

### Matt Pocock (Originalrepo gelesen)

Quelle: https://github.com/mattpocock/skills (gelesen, README-Liste von 27 Skills). Davon gelesen: implement-spec, pr, to-questionnaire, writing-for-agents, retro (je SKILL.md auf GitHub). Nur als README-Zeile gesehen: ask-matt, grill-with-docs, triage, improve-codebase-architecture, setup-matt-pocock-skills, to-spec, to-tickets, implement, wayfinder, prototype, diagnosing-bugs, research, tdd, domain-modeling, codebase-design, code-review, wizard, grill-me, handoff, teach, wait-what, grilling. Bei denen ist die Einschaetzung "keine Ueberschneidung" nur aus der Zeile abgeleitet, nicht geprueft. Groesste Ueberschneidung: rule-edit mit writing-for-agents und retro.

### Weitere Pflichtquellen

- https://github.com/anthropics/skills/tree/main/skills (gelesen, Liste kann unvollstaendig sein): academy-guide, algorithmic-art, brand-guidelines, canvas-design, claude-api, discernment-nudge, doc-coauthoring, docx, frontend-design, internal-comms, mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory, web-artifacts-builder, webapp-testing, xlsx. Keiner davon deckt eine der 14 Ideen. discernment-nudge nicht geoeffnet, Inhalt unbekannt.
- https://github.com/openai/skills (gelesen): Seite nennt nur Ordner `.system`, `.curated`, `.experimental` und zwei Beispiele (gh-address-comments, create-plan); das Repo sei veraltet und verweise auf ein Plugins-Repo. Einzelne Skills nicht geprueft.
- Offizielle Doku https://code.claude.com/docs/en/sub-agents (gelesen, Rest abgeschnitten): Modell je Subagent per Frontmatter (`haiku`, `sonnet`, `opus`, `fable`, `inherit`), Reihenfolge der Quellen, Kostenhinweis "billigere Modelle fuer Routine". Das ist Doku zum Mechanismus; die Skill-Regel "billigstes Modell, das es gut kann, mit Rolle statt Modellname" steht dort nicht.

### Je Idee

### 1 delegate
Name: vergeben. Treffer https://skills.sh/api/search?q=delegate (gelesen): exakt `delegate` von lvlup-sw/exarchos, dazu viele `<tool>-delegate` (codex-delegate, claude-delegate, cursor-delegate u. a.). Auch https://www.skills.sh/oxmonty/product-engineering-skills/delegate (gelesen, abgeschnitten): jeder Agent-Aufruf muss ein explizites `model:` tragen, Modell passend zur Schwierigkeit.
Gleiche Idee:
- https://www.skills.sh/oxmonty/product-engineering-skills/delegate (gelesen): Modell explizit je Aufruf, Aufloesungsreihenfolge der Quellen.
- https://www.skills.sh/maleko91/claude-code-adaptive-subagents/adaptive-subagents (gelesen, abgeschnitten): erst zerlegen, Haiku fuer Suchen, Sonnet fuer Bauen, Opus fuer Architektur, "erst nach Misserfolg hochstufen".
- https://tessl.io/registry/skills/github/bradygaster/squad/model-selection, https://skills.sh/zscole/... , https://skillsmp.com/skills/japurcell-skills-skills-subagent-model-router-skill-md (nur Suchergebnis).
Urteil: aehnlich. Die Modellwahl nach Aufgabe ist gleich; nicht gefunden (in den lesbaren Teilen): Frage vor mehr als 2 Agenten, gemeinsamer Brief plus eigene Dateiliste, Pruefung des Gesamtergebnisses per Skript, "fehlgeschlagen" gegen echte Dateien.
Anfragen: "agent skill choose cheapest model for each subagent task delegate SKILL.md"; "delegate skill SKILL.md subagent model routing haiku sonnet opus github"; skills.sh-API `delegate`.

### 2 decision-box
Name: frei (skills.sh-API `decision-box`: kein exakter Treffer).
- https://tessl.io/registry/skills/github/nyldn/claude-octopus/skill-decision-support (gelesen): 2 bis 4 Optionen mit Pro, Contra, Aufwand, Risiko, Empfehlung am Ende nach Vergleich.
- https://hermes-agent.nousresearch.com/docs/user-guide/skills/optional/communication/communication-one-three-one-rule (gelesen): Problem, genau drei Optionen, eine Empfehlung, Plan.
- https://www.skills.sh/onsager-ai/agent-workbench/prompt-for-decisions, https://smithery.ai/skills/rahulsub/tradeoffs (nur Suchergebnis).
- Matt: to-questionnaire (gelesen): Fragebogen fuer Dritte, eine Idee je Frage, wichtigste zuerst.
Urteil: aehnlich. Unser Kern (Empfehlung und Befund vorn, jede Option mit vollem Wortlaut, eine Frage je Entscheidung, ohne Kontext verstaendlich, Ort in der Oberflaeche benannt) steht so nirgends.
Anfragen: "agent skill present decision to user with recommendation first options each with tradeoff multiple choice question SKILL.md"; skills.sh-API `decision-box`.

### 3 resume-check
Name: frei (skills.sh-API: kein exakter Treffer; `resume-checkpoint` von alexgreensh/token-optimizer, `resume-work` von kaizen2026/universal-agent-skills heissen anders).
- https://skillsmp.com/skills/coreindustries-core-ai-template-claude-skills-resume-skill-md (nur Suchergebnis, 403): fuehrt git branch und git status aus, prueft Diff und Tests, zeigt Wiederaufnahme-Uebersicht.
- https://skillsmp.com/skills/conorbronsdon-claude-code-skills-recover-skill-md (nur Suchergebnis, 403): sucht verwaiste Worktrees und Branches nach Abstuerzen, fragt vor dem Aufraeumen.
- https://smithery.ai/skills/wpfleger96/continue-crash, https://skills.sh/notque/claude-code-toolkit/resume-work (nur Suchergebnis).
Urteil: aehnlich (nicht geoeffnet, deshalb kein "gleich"). Laut Snippets pruefen sie git-Stand; Pruefung laufender Hintergrundjobs und "nie Prozesse beenden oder gesperrte Ordner loeschen, sondern melden" erscheint in keinem Snippet.
Anfragen: "claude code skill resume after crash check git status branch running processes before continuing"; skills.sh-API `resume-check`.

### 4 claim-check
Name: vergeben, 10 exakte Treffer (skills.sh-API `claim-check`, gelesen): microsoft/cat-agent-skills, bigchriscooke/seo-playbook-skills, remotivated/job-hunt-skills, pmalliance/product-marketing-skills, balance0014/claude-code-claim-check, ofershap/grok-bot-skills, tugrulguner/skillpot, ryanalberts/best-of-agent-harnesses, tansuasici/claude-research-kit, 8trafficai/8traffic-marketing-skills. Was sie tun, nicht geprueft (nur Metadaten).
- https://skills.sh/obra/superpowers/verification-before-completion (gelesen, abgeschnitten): "keine Erfolgsmeldung ohne frisches Verifikationsergebnis", Subagenten-Berichte nicht ungeprueft glauben, Befehl, Ausgabe, Exit-Code.
- https://skills.sh/chrbailey/agent-security-skills/validating-agent-claims (gelesen, abgeschnitten): "Beweis vor Handlung", Behauptung ohne Beweis ist Hypothese.
- https://skills.sh/archieindian/openclaw-superpowers/fact-check-before-trust (nur Suchergebnis): Status "unsicher".
Urteil: aehnlich, aber nah. Ein Leser koennte verification-before-completion als dasselbe sehen. Unterschied: bei uns gilt es fuer Aussagen im Bericht (Ursache, Groesse, Anteil, "unbenutzt", Nutzen einer Empfehlung) mit Pflichtlabel "nicht geprueft", nicht nur fuer "fertig".
Anfragen: "agent skill verify claims before reporting "not verified" evidence for every claim final report SKILL.md"; skills.sh-API `claim-check`.

### 5 generated-asset-check
Name: frei (skills.sh-API: 0 Treffer).
- https://www.skills.sh/magichourhq/skills/ai-media-quality-review (gelesen): Ergebnisdatei gegen den Brief pruefen, Skript fuer messbare Werte (Masse, Dauer, Stille), Urteilsdinge nur durch Mensch, "ohne Bericht gilt als ungeprueft".
- https://raw.githubusercontent.com/Gregory-Esman/ai-film-pipeline/main/video-qa/SKILL.md (nur Suchergebnis), https://tessl.io/registry/skills/github/gooseworks-ai/goose-skills/verify-product-image/review (nur Suchergebnis).
Urteil: aehnlich, nah. Nicht gefunden: "sagen, was nicht messbar ist, bevor Geld ausgegeben wird" und "Bilder aus den Bildern einordnen, nicht aus der Beschreibung".
Anfragen: "agent skill verify AI generated image audio output against requirements before showing user SKILL.md"; skills.sh-API `generated-asset-check`.

### 6 live-layout-check
Name: frei (skills.sh-API: 0 Treffer).
- https://claudskills.com/skills/autonomous-ui-inspection/SKILL.md (gelesen): fester Viewport (Beispiel 1600x1200), Bounding Boxes, Overflow, Screenshots vor und nach einer Interaktion; kein Umschalten in mehreren Reihenfolgen, kein "derselbe Tab".
- https://skills.sh/hixuanxuan/browser-automation/visual-verify (gelesen, abgeschnitten): DOM-Pruefungen plus annotierte Screenshots.
- https://skills.sh/addyosmani/agent-skills/browser-testing-with-devtools (nur Suchergebnis).
Urteil: aehnlich. Viewport-Fixierung und Masse als Zahlen gibt es; Umschalten in mehreren Reihenfolgen und "Referenz woertlich nehmen" nicht gefunden.
Anfragen: "agent skill check UI layout in browser fixed viewport size measure getBoundingClientRect before and after SKILL.md"; skills.sh-API `live-layout-check`.

### 7 measure-twice
Name: vergeben. skills.sh-API (gelesen): mattshepphard/skills/measure-twice. https://www.agensi.io/skills/measure-twice (gelesen): 12 Regeln, jede nach einem echten Fehler: vor dem Aendern Dateien lesen, danach pruefen. Anderer Zweck als unsere Idee.
- https://skills.sh/mattshepphard/skills/measure-twice (gelesen): beschreibt Design-Bau-Pruef-Schliessen, nichts ueber Zeitmessung.
- Benchmark-Skills (nur Suchergebnis): https://skills.sh/agricidaniel/skill-forge/skill-forge-benchmark (3 Durchlaeufe je Eval), perf-benchmarker (Mindestdauer, keine parallelen Laeufe) auf tessl.io.
Urteil: nichts gefunden fuer den Kern (Zeit-/fps-Ergebnis erst nach Wiederholung mit gepruefter Rechnerlast, Laufzeitwerte aus der laufenden App). Verwandte Benchmark-Skills nur als Snippet gesehen. Der Name ist vergeben, ein anderer waere noetig.
Anfragen: "agent skill performance benchmark measure twice repeat run check machine load fps timing result SKILL.md"; skill names-Sammelsuche; skills.sh-API `measure-twice`.

### 8 history-first
Name: frei (skills.sh-API: keine passende Treffer).
- https://skills.sh/codealive-ai/ai-driven-development/investigating-repository-history (gelesen, Workflow abgeschnitten): Absicht hinter Code aus PRs, Review-Kommentaren, verworfenen Ansaetzen rekonstruieren.
- Commit Archaeologist (https://raw.githubusercontent.com/Shubhamsaboo/awesome-llm-apps/main/agent_skills/commit-archaeologist/README.md), refactor-archeology (https://playbooks.com/skills/shotaiuchi/dotclaude/refactor-archeology) (nur Suchergebnis).
Urteil: aehnlich. Unterschied: bei uns werden vor dem Neubau eines vorhandenen UI-Elements die Commits gelesen und jede Nutzerkorrektur uebernommen; ein Auftrag "wie bei den Klassikern" hebt sie nicht auf. Das fand ich nicht.
Anfragen: "agent skill before rewriting existing component read git history commits original user corrections SKILL.md"; skills.sh-API `history-first`.

### 9 backup-before-rewrite
Name: frei (skills.sh-API: kein exakter Treffer).
- https://claudeskills.info/skills/aiskillstore/marketplace/safe-edit/ (gelesen): Backups in `.backups/YYYY-MM-DD/`, per `cp`, danach git diff und Typecheck; kein woertliches Verschieben, keine Zeilenverlustpruefung.
- https://tessl.io/registry/skills/github/NexaiGuy/nex-ai-skills/agent-checkpoint, https://skillsmp.com/skills/subinium-vibesubin-plugins-vibesubin-skills-refactor-verify-skill-md (nur Suchergebnis).
Urteil: aehnlich. Datierte Backups gibt es; "Text woertlich verschieben und per Skript Zeile fuer Zeile auf Verlust pruefen" nicht.
Anfragen: "agent skill backup files before large refactor rewrite verify nothing lost line by line SKILL.md"; skills.sh-API `backup-before-rewrite`.

### 10 project-docs
Name: vergeben, 20 exakte Treffer (skills.sh-API, gelesen), z. B. jezweb/claude-skills, asyrafhussin/agent-skills, waynesutton/builder-skills, workspace-labs/project-docs. Inhalte nicht geprueft.
- https://skills.sh/product-on-purpose/pm-skills/wrap-session (gelesen): nur README und CHANGELOG am Sessionende, keine Konsistenzpruefung.
- https://skills.sh/ladderchaos/tora-skills/coordinator (STATUS.md, DECISIONS.md), https://vibehackers.io/claude-code/skills/neat-freak (Docs gegen Code abgleichen) (nur Suchergebnis).
Urteil: aehnlich. Das Muster "Status plus Notizen am Ende pflegen" gibt es; die Aufteilung in Stand, offene Zusagen, verschobene Ideen, Karte, Log mit Regel, wann welche Datei dran ist, fand ich nicht gelesen. Der Name ist stark vergeben.
Anfragen: "agent skill project docs STATUS.md TODO.md DECISIONS.md keep in sync at end of session SKILL.md"; skills.sh-API `project-docs`.

### 11 pinned-facts
Name: frei (skills.sh-API: 0 Treffer).
- https://tessl.io/registry/skills/github/boisenoise/skills-collections/agent-memory-discipline (gelesen): Nutzerkorrektur sofort speichern ("staerkstes Signal"), vor Projektarbeit nachschlagen, bei Widerspruch beide Eintraege mit Datum zeigen und fragen, nie still waehlen.
- https://tessl.io/registry/skills/github/mthines/agent-skills/persistent-memory, https://skillsmp.com/skills/nearai-ironclaw-skills-decision-capture-skill-md (nur Suchergebnis).
Urteil: aehnlich, nah. Unterschied: eine feste Datei, die jede Session zuerst liest; bei Widerspruch gilt die Datei und der Widerspruch wird nur gemeldet, statt zu fragen. Das eingebaute Gedaechtnis der Tools ist ein weiterer Ueberschneidungspunkt (nicht geprueft).
Anfragen: "agent skill write user decisions and facts immediately to file read at start of every session memory SKILL.md"; skills.sh-API `pinned-facts`.

### 12 skill-check
Name: vergeben, 16 exakte Treffer (skills.sh-API, gelesen): olgasafonova/skillcheck-free, karleeov/skills, thedaviddias/skill-check, rembertoius-dot/skill-check, alexanderkinging/skill-checker, sprngr/cantrips, claude-world/director-mode-lite, spm1001/trousse u. a.
Gelesen und verglichen:
- https://skills.sh/olgasafonova/skillcheck-free/skill-check (gelesen): prueft Struktur, Namen, Semantik, Qualitaet gegen die Spec; Sicherheit, Anti-Slop nur in der Bezahlversion.
- https://tessl.io/registry/skills/github/popey/claude-code-skills/skill-check (gelesen): Struktur (Name, Beschreibung, allowed-tools), Body (fest verdrahtete Pfade, veraltete Daten), Naming, Semantik, Qualitaet mit Punkten.
- https://pkg.go.dev/github.com/agent-ecosystem/skill-validator (gelesen): Struktur, Frontmatter inkl. unbekannter Felder, interne und externe Links, Token-Grenzen, Contamination-Analyse; laut Seite keine Pruefung privater Daten.
- https://docs.nvidia.com/skills/skillevaluator/tier1-reference (gelesen, Rest abgeschnitten): schema (Frontmatter, erlaubte Felder, Namensregeln, 500 Zeilen), pii (persoenliche Mac/Windows-Pfade, E-Mails, Telefon, Schluessel, JWT, IPs), code-integrity (Gitleaks, tote Links), unicode, harness (laedt Claude Code, Codex usw. den Skill oder nicht), quality-Score.
- https://pypi.org/project/skillcheck/ : Seite ging nicht (Fehlermeldung der Seite), ungelesen.
Vergleich mit `check_skill.py`: Spec-Felder und Namensregeln deckt NVIDIA und skill-validator ab. Private Pfade, E-Mails, Schluessel deckt NVIDIA ab. Nicht gefunden bei den gelesenen Tools: eigene Liste privater Woerter und eigener Projektdokumente (jakob, OFFEN.md usw.), Namen nur eines Tools (AskUserQuestion, mcp__ usw.; am naechsten NVIDIA harness), Gedankenstriche, Hinweis auf deutschen Text. Links bei uns nur als Hinweis, skill-validator prueft sie aktiv.
Urteil: gleich in der Aufgabe (Skill vor dem Teilen pruefen, inkl. PII und Spec); NVIDIA SkillEvaluator ist der naechste Treffer, aber schwerer (eigene Werkzeuge, Gitleaks, Semgrep) als ein einzelnes Python-Skript. Kein Bezug zu Matt.
Anfragen: "agent skill lint SKILL.md before publishing check secrets private paths personal info email leaks"; "skill names resume-check OR generated-asset-check OR backup-before-rewrite OR project-docs OR skill-check"; skills.sh-API `skill-check`.

### 13 rule-edit
Name: frei (skills.sh-API: nur `rule-editor` von tomy0000000/dotfiles, anderer Name, Inhalt nicht geprueft).
- https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL.md (gelesen): "Keep each meaning in a single source of truth", Duplikate zusammenfuehren, Sediment entfernen; kein Ablauf fuer Widersprueche.
- https://github.com/mattpocock/skills/blob/main/skills/engineering/retro/SKILL.md (gelesen): "Look for existing docs before writing new ones", Pruefung statt Regel wo moeglich, CLAUDE.md schlank halten.
- https://skills.sh/nayuta/agent-skills/mend-agent-rules, https://www.skills.sh/x0c/agents-md-edit-skill/agents-md-edit, https://skills.sh/ericmjl/skills/agents-md-improver (nur Suchergebnis): Snippets nennen "wiederholte Formulierungen zusammenfuehren" und "erweitern statt ueberschreiben".
Urteil: aehnlich, nah, mit deutlicher Ueberschneidung zu Matt (writing-for-agents und retro). Wie in IDEEN.md vermutet: Plagiatsrisiko, eher nicht.
Anfragen: "agent skill before adding a rule to CLAUDE.md AGENTS.md read existing rules merge duplicates edit instead of append SKILL.md"; skills.sh-API `rule-edit`.

### 14 proof
Name: skills.sh-API `proof` (gelesen): kein Skill heisst exakt `proof`; Fuzzy-Treffer `ce-proof` (everyinc/compound-engineering-plugin), `proof-checker`, `proof-writer` (wanshuiyin/...), alle nur Name gesehen, Inhalt nicht geoeffnet. Andere Namen mit Bezug: `proof-of-work` (thebushidocollective/han; https://skills.sh/thebushidocollective/han/proof-of-work, gelesen, abgeschnitten) und `proof-agent` (https://clawhub.ai/skills/proof-agent, gelesen, Seite zeigte nur Registry-Text, Inhalt unbekannt; laut Suchsnippet unabhaengiger Pruefer mit PASS/FAIL/PARTIAL). Kollision: kein exakter Name, aber nahe Namen; ausserdem steht "proof" ohne Zusatz in mehreren Skill-Titeln.
Gleiche Idee:
- https://skills.sh/thebushidocollective/han/proof-of-work (gelesen): "Show, don't tell", jede Aussage ueber Tests, Builds, Verifikation mit tatsaechlicher Befehlsausgabe; kein Tagging "geprueft/nicht geprueft", keine Wiederholungsregel (im sichtbaren Teil).
- https://skills.sh/obra/superpowers/verification-before-completion (gelesen, abgeschnitten): siehe 4.
- https://www.skills.sh/jayden-dang/skills/prove-claim, https://skills.sh/archieindian/openclaw-superpowers/fact-check-before-trust, https://smithery.ai/skills/mambabuilt/results-doc-verifier (nur Suchergebnis): letzter prueft Texte auf behauptete statt verifizierte Aussagen.
- Matt: pr (gelesen): Beweis-Rangfolge (Screenshots, Testlauf) fuer PR-Beschreibungen.
Urteil: aehnlich, nah. Neu bei uns: eine Durchsicht ueber den fertigen Bericht, jede Aussage einzeln gelistet und getaggt, mit Zusatzregeln fuer Zeitmessung (Wiederholung), Laufzeitwerte (aus der laufenden App) und generierte Bilder oder Audio (Ergebnis messen). In den gelesenen Seiten nicht gefunden; Teile in anderen Skills (Medienpruefung bei 5) einzeln vorhanden.
Anfragen: ""proof" agent skill SKILL.md skills.sh review report claims evidence"; skills.sh-API `proof`.

## Teil 3: Netz-Abgleich reroll (Stand 2026-11-24)

Methode: 6 Websuchen (standard) mit "reroll" plus agent skill, SKILL.md, skills.sh, Claude Code, `/reroll`, fresh session; zwei Seiten von einem Haiku-Agenten gelesen (beide Aufrufe HTTP 200, Seite 1 in der Mitte abgeschnitten, Seite 2 am Ende abgeschnitten). Eine Suche ist kein Beweis, dass es nichts gibt.

Namenskollision: kein Skill `reroll` gefunden. Der Name ist aber belegt mit einem anderen Job:
- https://www.skills.sh/webup/skills-cc/webup-buddy-reroll (nur Suchergebnis): `webup-buddy-reroll`, würfelt den /buddy-Begleiter von Claude Code neu (sucht per Brute Force eine userID). Ein Aggregator nennt rund 382 Installs (nicht geprüft).
- https://www.skills.sh/nangongwentian-fe/jay-skills/buddy-reroll (nur Suchergebnis): `buddy-reroll`, gleicher Zweck (SALT-Konstante).
- Kein Skill heißt exakt `reroll`; `/reroll` als Befehl von Claude Code oder anderen Tools fand die Suche nicht (Claude Code hat `/rewind`, das einen Stand zurückrollt und keine neue Antwort erzeugt, nur Suchergebnis).

Ähnliche Idee (neue Session ohne die alte Antwort):
- https://www.skills.sh/anortham/razorback/claude-cli (gelesen, am Ende abgeschnitten): Skill `claude-cli`, startet `claude -p` für eine zweite Meinung oder einen Review aus einer frischen Instanz ("the value is a new session and an independent prompt, not a different underlying model"). Optionen wie different, Anzahl, Modell im sichtbaren Teil nicht gesehen. Anderer Ablauf: Shell-Aufruf, kein wörtliches Weitergeben deiner Anfrage.
- https://yunjeongiya.github.io/posts/071-en/ (gelesen, Mitte abgeschnitten): Blogpost zu `/reinspect` gegen Anker-Effekt beim Review, Rat: Kontext trennen (Subagent, eigene Session oder anderes Modell). Skill-Text selbst nicht gesehen.
- https://trailofbits.com/skills/second-opinion/ (nur Suchergebnis): `second-opinion` schickt einen Code-Review an Codex oder Gemini, also ein anderes Modell.
- https://skills.sh/vinta/hal-9000/second-opinions (nur Suchergebnis), sno-ai/sno-station-skills (nur Suchergebnis, Reviewer in frischer Session ohne den Verlauf des Autors).

Urteil: ähnlich, nicht gleich. Gefunden wurde nichts, das deine letzte Anfrage wörtlich an eine neue Session gibt, ohne die alte Antwort, mit `different`, Anzahl und Modellwahl. Die Fundstücke sind Review- und Zweitmeinungs-Skills (Code, anderes Modell) und beruhen auf demselben Gedanken (Kontext trennen). Namensrisiko: `buddy-reroll` ist ein anderer Skill, das Wort "reroll" ist aber vergeben und bei Suchen vermischt. Entscheidung über den Namen: Jakob.

Anfragen: "reroll agent skill SKILL.md Claude Code"; "github reroll claude code skill fresh session second opinion without seeing previous answer"; "skills.sh reroll skill"; "claude code slash command /reroll regenerate answer new session"; "github reroll skill repository agent skills fresh session without anchoring blind rerun prompt"; "/reroll claude OR codex OR cursor skill npm OR github reroll prompt new chat".

## Teil 4: Netz-Abgleich nothing-lost (Stand 2026-11-24)

Methode: 6 Websuchen (standard), dazu zwei Seiten von einem Haiku-Agenten gelesen (tessl.io: HTTP 200, Mitte abgeschnitten; skillstore.io: HTTP 200, Mitte abgeschnitten) und eine nicht lesbar (skillsmp.com: HTTP 403). Eine Suche ist kein Beweis, dass es nichts gibt.

Namenskollision: kein Skill `nothing-lost` und kein Befehl `/nothing-lost` gefunden (Suchen nach dem Namen mit "agent skill SKILL.md", "skills.sh", "/nothing-lost" und "nothing lost" ergaben keinen Treffer mit diesem Namen). Nur Namensanklänge anderer Art, nicht gelesen:
- https://skillsmp.com/creators/search-atlas-group/amm-founding-circle/skills-durable-state (nur Suchergebnis): `durable state`, legt den Laufspeicher eines Agenten auf die Platte; in der Beschreibung steht der Satz "Nothing is lost". Anderer Job.
- https://claudemarketplaces.com/skills/martian-engineering/lossless-claw/lossless-claw und https://skillsmp.com/ja/creators/godsboy/lossless-code/skills-lossless-code (nur Suchergebnis): `lossless-claw` / `lossless-code`, verlustfreie Kontextverwaltung (Gesprächsverlauf), kein Datei-Rewrite.
- https://www.skills.sh/daymade/claude-code-skills/git-safety-net (nur Suchergebnis): `git-safety-net`, Audit-Skripte für Arbeit, die in Git verloren gehen könnte (Checkouts finden). Nicht gelesen, Ablauf unbekannt.

Ähnliche Idee (nach einem Rewrite prüfen, dass nichts fehlt):
- https://tessl.io/registry/skills/github/conorbronsdon/avoid-ai-writing/preservation-verifier (gelesen, Mitte abgeschnitten): `preservation-verifier`, vergleicht Original und Umschreibung auf geschützte Inhalte (Code, Frontmatter, Zitate, Tabellen, Links, Pfade, Zahlen, Überschriften), Ergebnis PASS, REVIEW oder FAIL. Ein Skript, das Zeile für Zeile vergleicht, war im sichtbaren Teil nicht zu sehen (die Seite sagt nur "deterministic check"). Kern anders: prüft Inhaltsklassen nach einem KI-Stil-Rewrite, nicht jede alte Zeile gegen einen Pool aus neuen Dateien.
- https://skillstore.io/skills/doyajin174-safe-edit (gelesen, Mitte abgeschnitten): `safe-edit`, "backups, diffs, rollback notes, modular planning, and verification" bei Code-Änderungen; Qualitätswert auf der Seite "50 Poor". Zeilenweiser Verlustvergleich im sichtbaren Teil nicht zu sehen. Laut Suchergebnis (nicht selbst gelesen) legt ein Spiegel davon vor jeder Änderung ein Backup mit Zeitstempel unter `.backups/` an; dieser Teil ist bei nothing-lost bewusst anders (Git statt Backup-Ordner).
- https://skills.sh/phar-dev/phardev.dot/safe-refactor und https://skills.sh/juliusbrussee/caveman/safe-refactor (nur Suchergebnis): `safe-refactor`, Tests und Lint vor und nach einer Code-Änderung. Code-Refactor, keine Textdateien.
- (nur Suchergebnis, nicht geöffnet) WolfMarkDown (WolfMarkTools), `semantic-compressor` (claude-world/skills-optimizer), `Update Skills` (fubits1/ronin-skills, laut Suchergebnis mit Pflicht-Audit je Eintrag; die Seite war nicht lesbar, 403), `markdown-document-structurer` (ArabelaTso/Skills-4-SE), `operational-anchor-preservation`: alles Skills, die beim Kürzen oder Umbauen von Markdown etwas bewahren. Gelesen wurde keiner, Inhalt nur aus der Suchzusammenfassung.

Urteil: ähnlich, nicht gleich. Gefunden wurde nichts, das ein mitgeliefertes Skript hat, das jede alte Zeile gegen einen Pool neuer Dateien prüft und dabei LOST (nichts Ähnliches), CHANGED (ähnliche Zeile, nächste gezeigt) und ALLOWED (vom Nutzer benannt) trennt. Das ist aber ein Befund aus Suchtreffern und zwei teilweise gelesenen Seiten, nicht aus allen Repositories. Die Fundstücke prüfen Inhaltsklassen (preservation-verifier) oder sichern Backups (safe-edit). Der Gedanke "nach dem Rewrite beweisen, dass nichts fehlt" ist nicht neu, ein allgemeiner Hinweis in den Suchergebnissen (Diff-Skript über Original und Neufassung) beschreibt dasselbe Prinzip. Namensrisiko: gering, der Name kam in keiner Suche als Skill vor. Entscheidung über den Namen: Jakob (er hat ihn am 2026-11-23 selbst gewählt).

Anfragen: `"nothing-lost" agent skill SKILL.md`; `skills.sh "nothing-lost" Claude Code skill`; `agent skill check no content lost during large rewrite refactor documents line by line diff script`; `github claude code skill "content preservation" OR "lossless" rewrite restructure markdown verify no lines dropped`; `skills.sh safe-edit backup before refactor skill`; `"/nothing-lost" OR "nothing lost" claude code slash command rewrite check`.

## Teil 5: Netz-Abgleich measure-ui (Stand 2026-11-24)

Methode: 4 Websuchen (standard), danach 9 Seiten von einem Haiku-Agenten gelesen. Gelesen heißt hier: Seite abgerufen, Text teilweise gesehen. Seiten 1, 3, 6, 8, 9 waren abgeschnitten, 2 (403) und 4 (404) nicht abrufbar. "Nicht gesehen" heißt: im gelesenen Text nicht vorhanden, nicht: im Skill nicht vorhanden. Eine Suche ist kein Beweis, dass es nichts gibt. Format wie Teil 3 in `NETZ-ABGLEICH.md`.

### Namenskollisionen

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

### Ähnliche Inhalte

- https://claudskills.com/skills/autonomous-ui-inspection/SKILL.md (vollständig gelesen): Playwright-Screenshots plus Puppeteer-Metriken mit `getBoundingClientRect()` und scrollWidth/clientWidth. Viewport nur als Beispiel (1600x1200) empfohlen, nicht als erster Pflichtschritt. Vorher/Nachher-Screenshots für eine Interaktion. Mehrere Umschalt-Reihenfolgen, "nur der eigene Tab", Referenz wörtlich nehmen, Bericht mit "not checked": nicht gesehen. Das ist die nächste Entsprechung im Messteil.
- https://raw.githubusercontent.com/makieali/claude-code-engineer/main/skills/frontend-verify/SKILL.md (vollständig gelesen): Screenshots bei 375, 768, 1440, Accessibility-Snapshot, Konsole, bis 3 Runden. Keine Maße als Zahlen, kein Umschalten.
- https://skills.sh/hixuanxuan/browser-automation/visual-verify (nur Suchergebnis, in Teil 2 der Netz-Datei gelesen, hier nicht neu gelesen): Overlay-Boxen an `getBoundingClientRect`-Koordinaten, braucht lokales Chrome mit CDP Port 9222.
- https://tessl.io/registry/skills/github/ColeMurray/background-agents/visual-verification (nur Suchergebnis): Vorher/Nachher-Screenshots, fester Viewport laut Suchtext.
- shiplightai `verify` (https://skills.sh/shiplightai/agent-skills/verify, nur Suchergebnis): erst DOM prüfen, Screenshot nur wenn nötig.

### Was die Fundstücke nicht haben (im gelesenen Text)

Nicht gesehen in den gelesenen Seiten: Viewport als erster Pflichtschritt mit der Warnung "versteckte Ansicht meldet 0 x 0"; Umschalten zwischen Elementen in mehr als einer Reihenfolge (A dann B, B dann A, Wiederholung); "nur der selbst geöffnete Tab bleibt offen"; Stand-in für `requestAnimationFrame` muss `cancelAnimationFrame` beachten; Berichtstabelle mit "not checked" je ungeprüfter Messung; Referenz-Screenshot wörtlich als Vorgabe nehmen. Das ist keine Aussage, dass es das nirgends gibt: sechs der Seiten waren abgeschnitten oder nicht abrufbar.

### Urteil

Ähnlich, nicht gleich. Messen mit `getBoundingClientRect` und fester Viewport kommen anderswo vor (autonomous-ui-inspection, design-measure). Eigen sind die Reihenfolge-Prüfung beim Umschalten, die Ein-Tab-Regel und die "not checked"-Liste, soweit gelesen. Es ist kein Wort ohne Weiteres übernommen: keine Textüberschneidung wurde gesehen, aber auch nur zwei Texte komplett gelesen.

🟠 Entscheidung für Jakob: Name `measure-ui` bleiben (frei, nur `ux-measure` und `design-measure` ähnlich) oder umbenennen. `ui-verify` ist laut Abgleich vergeben und kein Vorteil.

Anfragen: `"measure-ui" agent skill SKILL.md`; `"ui-verify" agent skill SKILL.md Claude Code`; `skills.sh agent skill verify UI layout getBoundingClientRect viewport measure before after`; `github claude code skill "visual verification" browser measured numbers not screenshots layout`.

## Teil 6: Netz-Abgleich numbers-skeptic, geprüft unter dem früheren Namen retest (Stand 2026-11-24)

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

## Teil 7: Netz-Abgleich now-and-then, zuvor project-state (Stand 2026-11-24)

Methode: 5 Websuchen (standard): "project-state" agent skill SKILL.md; DECISIONS.md decision log STATE.md read first; skills.sh project state handoff STATE.md; Claude Code ADR append-only decisions log; Claude Code memory CLAUDE.md auto memory vs DECISIONS.md. Elf Seiten von zwei Haiku-Agenten gelesen (alle HTTP 200). Die skills.sh-Seiten zeigen nur den Anfang der SKILL.md ("Show more"), bei diesen sind die meisten Felder "nicht gesehen". Eine Suche ist kein Beweis, dass es nichts gibt.

### Namenskollision

- https://claudskills.com/skills/project-state/SKILL.md (vollständig gelesen, 7979 Zeichen): ein Skill mit genau dem Namen `project-state`. Beschreibung: "Use when implementing project state detection, designing STATE.md/TASKS.md templates, or configuring SQLite state store and MCP state protocol". Anderer Job: Zustandserkennung, STATE.md plus TASKS.md, SQLite-Speicher, MCP-Server, Shell-Werkzeuge (`hseos.config.yaml`, `.hseos/state/project.db`). Kein Entscheidungslog, keine Regel "append only", keine Regel für Widerspruch, kein Schritt am Sessionende gefunden. Ob die Seite zu einem gepflegten Registry-Skill gehört: nicht geprüft.
- Weitere Seiten mit ähnlichem Namen, anderer Job: https://www.skills.sh/b-mendoza/agent-skills/analyzing-recent-project-state (nur Suchergebnis, Release-Prüfung laut Suchtext), https://skills.sh/doubleslashse/claude-marketplace/state-management (angelesen: Workflow-Zustand, `FLOW.md` plus eine `ITEM-XXX.md` je Aufgabe, kein Entscheidungslog).
- Fazit Name: `project-state` ist belegt (mindestens eine Seite mit exakt dem Namen und anderem Inhalt). Gefunden in keiner Registry mit großen Installzahlen, aber nicht systematisch geprüft. Entscheidung über den Namen: Jakob.

### Nächster Inhalt (zwei Dateien, Zustand plus Entscheidungen)

- https://cdn.jsdelivr.net/gh/sh008/claude-lore@main/README.md (fast vollständig gelesen, 8718 Zeichen): Skill "Lore". Beschreibung: "The knowledge your codebase doesn't contain - decisions, dead ends, and state, recorded so the next session starts where the last one stopped." (Bindestrich von mir.) Dateien unter `docs/lore/`: `STATE.md` (etwa 150 Zeilen Limit), `ROADMAP.md`, `DECISIONS.md` (gewählt, warum, verworfen), `LEARNINGS.md`, `JOURNAL.md` (append-only Arbeitslog). Sessionstart: "The agent reads STATE.md and ROADMAP.md, greps LEARNINGS.md for whatever it's about to touch". Aufgabenende statt Sessionende: "not batched at session end". Widerspruch zur Nutzeranweisung: nicht gefunden; veraltete Einträge werden "corrected or deleted". Das ist der nächste Treffer: gleiche zwei Kernideen (STATE.md überschrieben, DECISIONS.md als Log, beim Start lesen), aber fünf Dateien (genau das, wovor die Reviewer warnten: Drift) und löschbare Einträge.
- https://skills.sh/krishamaze/skills/project-memory (angelesen): Befehle `/memory`, `/update-memory`, `/save`, `/handoff`, `/continue`; Modus "Read 3 files + git log -> update what changed". Welche drei Dateien: nicht gesehen. Sicherheitsaudits auf der Seite: Snyk Fail, Agent Trust Hub Fail, Socket Warn (so angezeigt, nicht selbst geprüft).
- https://tessl.io/registry/emerge/state-manager/skills (nur Registry-Seite, Skill-Text nicht gesehen): `.arch/state.json` und `.arch/decisions.md` laut Beschreibung, Architektur-Phasen. Rest nicht gesehen.
- Handoff-Skills (nur Suchergebnis, Texte nicht gelesen): viele `handoff`-Skills auf skills.sh schreiben `HANDOFF.md` oder Dateien unter `plans/handoffs/` für die nächste Session. Anderer Job (Übergabe einer Session, nicht dauerhafte Entscheidungen).

### Entscheidungslog-Skills (nur der Teil "Entscheidungen")

- https://skills.sh/bonkey/skills/decision-log (angelesen, abgeschnitten): ADR-Dateien in `docs/decisions`, startet automatisch beim Verlassen des Plan-Modus; trägt sich in AGENTS.md, CLAUDE.md, GEMINI.md ein (Text dazu nicht gesehen). Laut Suchtext sollen Einträge nie geändert werden: im gelesenen Teil nicht bestätigt.
- https://skills.sh/jonmumm/skills/adr-keeper (angelesen): ADRs in `docs/adrs/`, Namen `YYYY-MM-DD-kurz.md`, "never edit old decisions - supersede with new ones" (Bindestrich von mir). Gleiche Idee wie unsere Zeile `replaces <date> <topic>`, aber eine Datei je Entscheidung.
- https://skills.sh/bjg4/decision-log-skill/decision-log (angelesen): Ordner `decisions/` mit einer Datei je Entscheidung plus append-only `_index.jsonl`; autonom: "Do NOT ask the user which decisions to log. Log all unlogged decisions found." Das ist das Gegenteil unserer Regel (nur final vom Nutzer genannte Entscheidungen, im Zweifel eine Frage).
- https://www.skills.sh/denysdovhan/agents/agent-log (angelesen): Journal unter `.agents/log/YYYY-MM-DD-slug.md` mit Index, wird nur auf ausdrücklichen Wunsch angelegt ("do not create it, even when a plan is approved"). Ähnlich zu unserem "ohne Ja nichts anlegen".
- https://skills.sh/theagentledger/agent-skills/decision-log (angelesen): Kontext, Alternativen, erwartetes Ergebnis, Konfidenz, geplanter Rückblick. Dateien nicht gesehen.
- https://skillsmp.com/creators/thrawn01/claude-dotfiles/skills-adr-write (nur Suchergebnis): laut Suchtext "ADR is not a log book", Geschichte steht in der Versionskontrolle, kleine Änderungen direkt. Gegenposition zu append-only.
- Tessl/ECC `architecture-decision-records` (nur Suchergebnis): fragt vor dem Anlegen von `docs/adr/`, schreibt erst nach Freigabe.

### Eingebaute Gedächtnisfunktion (Überschneidung, die Reviewer nannten)

- https://code.claude.com/docs/en/memory (gelesen, 55359 Zeichen, die ersten 39949 wörtlich, der Rest nur als Zusammenfassung des Agenten): Claude Code hat zwei Mechanismen. `CLAUDE.md` wird jede Session als Nutzernachricht geladen, Doku empfiehlt unter 200 Zeilen. Auto Memory: Notizen, die Claude selbst schreibt, pro Repository, nicht zwischen Rechnern geteilt, von `MEMORY.md` werden "up to the first 200 lines or 25KB" beim Start geladen. Ein `DECISIONS.md` oder Entscheidungslog wird im wörtlichen Teil nicht erwähnt.
- Folgerung (eigene Überlegung, kein Fund): Auto Memory ist vom Agenten gewählt, geräte- und werkzeuggebunden, nicht im Projekt und nicht in git. Unser Log ist vom Nutzer bestätigt, liegt im Repo, gilt für jedes Werkzeug (Codex, Cursor). Das ist ein anderer Zweck, aber die Überschneidung bei "Korrekturen und Vorlieben merken" bleibt: nicht geprüft, wie Auto Memory sich bei einem Widerspruch zu einer DECISIONS.md-Zeile verhält.
- Anderes Werkzeug (Codex `AGENTS.md`, Cursor Rules): nicht geprüft.

### Urteil

Ähnlich, nah an Lore und an den ADR-Log-Skills, aber nicht gleich. Wörtlich gleiche Sätze: keine gesehen. Bei uns gefunden und bei den gelesenen Seiten nicht: (1) genau zwei Dateien mit der Begründung "mehr Dateien driften"; (2) Regel "Nutzer sagt jetzt etwas anderes als ein Eintrag: Nutzer gilt, Widerspruch in einem Satz melden, fragen ob ein ersetzender Eintrag angehängt wird"; (3) nur final genannte Entscheidungen, nie vom Agenten erfundene, und "ohne Ja nichts anlegen"; (4) Prüfung der Zustandsangaben gegen den echten Zustand vor dem Weiterbauen; (5) Nichts-verloren-Prüfung beim Verschieben alter Einträge. Bei Lore und adr-keeper vorhanden und bei uns auch: Zustand überschrieben, Log nicht überschrieben, Start lesen. Bei skills.sh ist der Großteil der Seiten abgeschnitten, deshalb kann ein Punkt in dem ungesehenen Teil stehen.

Offene Punkte für Jakob: Name `project-state` ist von einem anderen Skill (claudskills.com) mit anderem Job belegt; die Dateinamen `STATE.md` und `DECISIONS.md` sind bei Lore und `STATE.md` auch bei dem claudskills-Skill dieselben, was Verwechslung oder Konflikt im selben Projekt möglich macht (nicht getestet).

Anfragen: siehe Methode.
