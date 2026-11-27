# Inca und Pict - Bestandsaufnahme (26.11.2026)

Reine Lese- und Messarbeit, kein Code geändert. Quelle der Dateien: Worktree `jakob-christensen-website-incapict` (Branch claude/inca-pict). Gemessen wurde auf dem Main-Checkout über einen eigenen kurzen Python-Server (Port 8761, danach beendet).

## 1. Ist-Zustand mit Zahlen

### Dateien (Bytes, Zeilen)
| Datei | Bytes | Zeilen |
|---|---|---|
| inca.js (Worktree) | 514212 | 2999 |
| inca.js (Main-Checkout, ausgeliefert) | 511213 | nicht gezählt |
| pict.js | 57538 | 309 |
| props-lib.js | 246709 | 3 (Daten, minifiziert) |
| fbx-loader.js | 547976 | 3699 (minifiziertes three.js r160 mit FBX/USD-Teilen) |
| index.html | 712920 (Worktree), 708081 (sotl-Repo) | 4839 |

Auffällig: inca.js im Worktree ist 3000 Bytes größer als im Main-Checkout, index.html ebenfalls anders. Der Worktree ist also nicht identisch mit dem, was auf Main liegt (nicht weiter untersucht, welche Änderungen das sind). pict.js, props-lib.js und fbx-loader.js sind byte-gleich mit dem Spiel-Repo `D:\Projects\students-on-the-loose`.

inca.js hat 6 Zeilen über 2000 Zeichen, längste 4160 Zeichen. Das ist für Handarbeit schwer lesbar, aber kein Build-Artefakt.

### localStorage
Grep-Zählung der Wörter `localStorage`: inca.js 45, pict.js 12, index.html 35 (Rest des Spiels), props-lib.js und fbx-loader.js 0. Erwartung (45 und 12) stimmt.

Schlüssel in inca.js (aus den Aufrufen gelesen):
- Szene und Galerie: `sbh-cube` (KEY), `sbh-cube-gallery` (GKEY).
- Einstellungen, je einmal lesen und schreiben: `sbh-cube-autokey`, `-autosave`, `-colmatch`, `-gen`, `-gizmo`, `-grid2`, `-keep`, `-keyscol`, `-layout`, `-mats`, `-min`, `-shade`, `-silview`, `-silw`, `-sound`, `-space`, `-turn2`, `-ui`.
- `sbh-cube-layout` wird zusätzlich 2 Mal gelesen und einmal gelöscht, `sbh-cube-turn` (alter Schlüssel) wird gelöscht.
- Gemeinsam mit dem Spiel: `sbh-eggs`.

Schlüssel in pict.js: `sbh-pict` (Bild), `sbh-pict-gallery`, `sbh-pict-hello` (Alpha-Hinweis, 2 Mal gesetzt, einmal gelöscht), `sbh-pict-set` (Einstellungen).

try/catch: Ob jeder Zugriff geschützt ist, wurde nicht Zeile für Zeile geprüft. inca.js enthält 65 `catch`. Eine Behandlung von QuotaExceeded (voller Speicher) wurde per Grep nicht gefunden (nicht abschließend geprüft).

Nach Öffnen von Inca (Tutorial übersprungen) standen im Browser gesetzt: autosave, eggs, keyscol, keep, shade, ui, space, grid2, autokey, min (+ npc-Schlüssel des Spiels). Es wird also schon beim bloßen Öffnen geschrieben.

### Laden und Aufbau (gemessen, Desktop 1280x800)
- Startseite: DOMContentLoaded 80 ms, Load 83 ms lokal, nur 2 Schriftdateien (20456 und 27648 Bytes). Inca und Pict werden nicht vorab geladen.
- Inca öffnet per Klick auf Button `open-inca` (Hauptseite, 657/71, 69x44 px). Beim ersten Öffnen werden inca.js (511213 Bytes) und props-lib.js (246709 Bytes) nachgeladen. Lokale Ladedauer der Dateien: 4 ms und 3 ms. Echte Netzwerkzeit nicht geprüft (nur localhost).
- Pict lädt pict.js (57538 Bytes) in 13 ms lokal. Button `open-pict` 735/71, 66x44 px.
- fbx-loader.js (547976 Bytes) wurde beim Öffnen von Inca nicht geladen (nur inca.js und props-lib.js in den Resource-Einträgen). Es wird also erst bei einem FBX-Import geholt (per Code-Lage vermutet, den Import selbst habe ich nicht ausgelöst).
- Cache-Version per Stempel: `LZ_VER` inca e798ec64eb, pict 9104c471d1 (geschrieben von tools/lazy_stamp.py).

### Oberflächen, Desktop 1280x800 (getBoundingClientRect, x,y,Breite,Höhe)
Inca (`.egg-cube` 0,0,1265x800, die 15 px Differenz ist vermutlich Scrollbalken, nicht geprüft):
- Kopfleiste cube-head 41,16,1184x51
- Shelf (Create) 291,75,699x49
- Modes 491,132,298x49
- Links 12,84,253x484; rechts 980,198,253x460
- View-Cube (cube-nav) 1144,84,104x104
- Timeline cube-tl 243,562,780x107, Spur 254,569,654x44
- Unterleiste cube-bar 5,677,1256x107
- Tutorial-Fenster 333,120,600x560 (öffnet beim ersten Start von selbst)
- Überlappung gemessen: cube-tl liegt 43x96 px über dem rechten Panel und 22x6 px über dem linken. Ob das Absicht ist (schwebende Fenster), nicht geprüft.

Pict (`.egg-pict` 0,0,1265x800): Fenster pt-win 103,16,1060x768, Kopf 51 px hoch, Werkzeugleiste pt-tools 348,25,284x32.

### Oberflächen, Mobil 375x812
- Inca: kein seitliches Scrollen (scrollWidth 375). Kopf 14,16,347x48; Modes 8,130,359x53; Shelf 8,75,359x49; Timeline 8,624,359x107; Unterleiste 8,739,359x57; View-Cube 311,231,56x56. 185 Buttons, davon 3 sichtbare kleiner als 32 px in Breite oder Höhe.
- Das Tutorial-Fenster meldete beim mobilen Test 0x0 (zum Messzeitpunkt nicht sichtbar, Ursache nicht geklärt, möglicherweise wegen des bereits gesetzten Schlüssels).
- Pict: Fenster 10,10,355x950, also 148 px höher als der Bildschirm (812). Ob es innen scrollt, nicht geprüft.

### Umschalten (Desktop, JavaScript-API E.cubeOpen / E.cubeClose / E.pict.open / E.pict.toggle)
Reihenfolge Pict, Inca (erneut), Inca zu, Pict (erneut), Inca, Pict-Toggle, Pict-Toggle: keine Fehler, keine Konsolenmeldungen. Befund: Pict und Inca können gleichzeitig offen sein, beide füllen 1265x800 und haben z-index 9500. Wer oben liegt, hängt von der Reihenfolge im DOM ab. Ein Aufruf von `E.pict.open()` bei offenem Inca schließt Inca nicht.
Echte Klicks auf die Buttons in beiden Reihenfolgen wurde nur für Inca gemacht (Klick), Pict über die API.

### Konsole
Keine Fehler und keine Warnungen in allen Läufen (Desktop und Mobil).

### Nicht gemessen
- Frame-Zeiten: Die Browser-Pane war versteckt, `requestAnimationFrame` lief nicht (Timeout nach 6 s). Frame-Median und Spread sind "nicht geprüft".
- Speicherverbrauch, Last der WebGL-Szene, Import/Export mit echten Dateien, FBX/USD-Import, Speicher-Obergrenze von localStorage: nicht geprüft.

## 2. Jakobs bisherige Entscheidungen (aus Commit-Nachrichten)

Wichtig: Die Historie von Inca und Pict liegt im Repo `D:\Projects\students-on-the-loose` (Commit 3108c45 ist nur dort). Im Website-Repo gibt es für diese Dateien nur den Sammel-Commit 9802e1d (7.11.2026), `git log --follow` zeigt dort nichts weiter. Es gibt 93 Commits auf inca.js, pict.js, props-lib.js, fbx-loader.js im Spiel-Repo. Die Commit-Nachrichten nennen Jakob selten mit Namen; folgende Punkte sind Entscheidungen, die sich aus Nachrichten oder Code-Kommentaren (mit "Jakob, Datum") ablesen lassen. Dass sie von Jakob stammen, gilt nur bei Kommentaren mit seinem Namen als belegt, sonst als wahrscheinlich.

Nie rückgängig machen:
1. Inca ist ein Maya-ähnliches Programm: "like Maya" in Kommentaren zu Konstruktionsverlauf (Jakob, 17.10.), Lit-Modus (Jakob, 18.10.), Display-Modi 4/5/6 (Jakob, 17.10., wird gespeichert), Materialien (Jakob, 18.10.), Paint-Select (Jakob, 18.10.), Gimbal (Jakob, 18.10.), Gitter an/aus, Manipulator-Größe mit + und -, Pickwalk, Namen wie pCube1 (nächste freie Nummer). Auswahl ist Teil von Undo (66184b5). Alt+Maus wie Maya, F zentriert, Shift+Mittelklick wie Maya (8d5512e).
2. Import/Export: OBJ mit .mtl und Texturen, FBX, USD; neue Formen sind danach die Auswahl (3108c45, 18.10.).
3. Inca und Pict laden nur bei Bedarf (4bb91b5), die Objektbibliothek props-lib.js nur für Inca oder platzierte Objekte (c9cf5e5, Jakob 17.10.).
4. Inca-Oberfläche: kein seitliches Scrollen, Überschuss in ein Mehr-Menü, Hotkeys bleibt immer sichtbar (8641003); Objekt-Modus im Mode-Fenster hervorgehoben, Gold (d730a68); Schließen-Button wird beim Hover rot (9b96ed4); Manipulator-Flächen 9 px Trefferzone (939ccb1), Quadrate doppelt so weit außen (e49bf7a); Hover einer Fläche beleuchtet die zwei Pfeile; Scrollrad im Carry-Modus umgekehrt (0d7d8a0).
5. Mobil: Spielreihe passt, kurze Handys starten mit minimierter Timeline (413a22d), größere Touchflächen (7558bd5), Pict-Kopf bricht um (7558bd5).
6. Tutorial: erste Öffnung startet das Tutorial (58e2f45); Fenster 600 px breit, Intro gleich groß wie die Schritte, ein Absatz (3e4113b, d03338e, eda0f2d); Schritt 4 zwei Zeilen ohne Save und Gallery (2ad12be); Schritt 6 "It works in reverse, too" (16529dd); Tasten hervorgehoben.
7. Pict: Match Colors standardmäßig an, ein bewusstes Aus wird gemerkt (e10ca72); Farben "weniger gesättigt und heller (S -5, B +8), nicht gesättigter" (4420594, nach b3e9f79); Logo als Höhlenmalerei nach dem Lascaux-Pferd (d33ecd1, 95f939f, 2cdade2), Körnung ohne Bauchlinie (6542084); Alpha-Hinweis nur einmal pro Seitenaufruf, auch ohne localStorage (e8b03da, ee84859); Open in Inca nimmt standardmäßig die beste Übereinstimmung, "Your drawing" schaltet auf Pixel um (bd72e3b, 7fdabb7, 6f9f75c).
8. Namen und Schreibweise: Hide Names heißt Hide Text (08f8bbb); amerikanische Schreibweise überall, "color" statt "colour" (f8fa0e5, 1f01ae8); Platzierungshinweis "Not in the chapter Who to Ask" (de366e3); Zahlen bleiben mit Einheit zusammen (no-break spaces, 60a2167); Handbuch heißt "Student Handbook" (89c66b5).
9. Inca-Logo-Kachel: eingeritztes I und kleine Sonne, "so the joke stays (one letter on a tile, Inca for Maya) without copying the look of Maya's icon" (Kommentar in index.html Zeile 2088). Logo-Tooltip: "Yes, this is a fully functional 3D program" (bbff801 und Vorgänger), Tooltip-Texte klein geschrieben (graph editor, multi-cut).
10. Inca-Sound-Schalter schaltet auch das ganze Handbuch stumm, solange Inca offen ist (b31c242). Hide Page und Hide Text behalten ihren Rahmen (09c76dc).

## 3. Verbesserungen, nach Wirkung sortiert (höchstens 12)

Gruppiert, Reihenfolge innerhalb der Gruppen nach Wirkung; Wirkung insgesamt: 1 bis 12 steht vor jeder Zeile. Alle Vorschläge sind Ideen aus den Befunden oben, nicht beschlossen.

### Verlässlichkeit
1. Speicher-Fehler abfangen: Erstnutzer verlieren ihr Modell nicht stumm, wenn localStorage voll ist (kein QuotaExceeded-Handling per Grep gefunden). Aufwand M.
2. Export als Datei zum Sichern (eine .json für Szene und Galerie): Erstnutzer können Arbeit mitnehmen, wenn der Browser den Speicher löscht, denn Szene, Galerie und Einstellungen liegen nur in localStorage. Aufwand M.
3. Pict-Fenster mobil auf Bildschirmhöhe begrenzen: auf einem 812-px-Handy ist es 950 px hoch gemessen, Erstnutzer erreichen so die untere Leiste vielleicht nicht. Aufwand S (erst prüfen, ob es innen scrollt).

### Bedienung
4. Nur ein Werkzeug gleichzeitig oben: Öffnen von Pict bei offenem Inca (und umgekehrt) schließt oder verdeckt das andere klar, statt zwei gleiche Vollbilder mit gleichem z-index zu stapeln. Aufwand S.
5. Tutorial immer wieder anwählbar und auf Mobil prüfen: das mobile Tutorial-Fenster meldete 0x0, Erstnutzer sehen es evtl. nicht. Aufwand S.
6. Schwebende Inca-Fenster nicht überlappen lassen (Timeline über rechtem Panel, 43x96 px): Erstnutzer erreichen die Knöpfe darunter. Aufwand S bis M, je nachdem ob es Absicht ist.
7. Drei Buttons unter 32 px auf Mobil vergrößern: bessere Treffsicherheit auf dem Handy. Aufwand S.

### Austausch
8. glTF/GLB importieren und exportieren (heute OBJ, FBX, USD): Erstnutzer können Modelle aus gängigen Webquellen laden. Aufwand L.
9. Pict-Bild als PNG-Download und Galerie sichtbar exportierbar: Erstnutzer können das Gemalte außerhalb der Seite nutzen (toDataURL ist 4 Mal im Code, ob PNG-Download existiert, nicht geprüft). Aufwand S.

### Leistung
10. Frame-Zeiten messen (hier nicht möglich, Pane versteckt) und danach entscheiden: Erstnutzer auf schwachen Laptops merken, ob Inca flüssig läuft. Aufwand S zum Messen, danach offen.
11. inca.js (511 KB) und props-lib.js (247 KB) komprimiert ausliefern lassen und Ladezeit im echten Netz messen: schnellerer erster Klick auf Inca. Aufwand S (lokal nur 4 ms, im Netz nicht geprüft).

### Aussehen
12. Nur nach Rückfrage: die Logos bleiben (Entscheidungen oben). Kandidat: einheitliche Abstände der schwebenden Inca-Fenster (aus Messung 6). Aufwand S.

## 4. Rechtliches

### three.js und fflate in fbx-loader.js
Die Annahme "MIT-Hinweis fehlt im minifizierten fbx-loader.js" stimmt nicht ganz. Am Dateiende (Zeilen 3686 bis 3698) steht ein Block "Bundled license information" mit
- three.js: "Copyright 2010-2023 Three.js Authors", "SPDX-License-Identifier: MIT"
- fflate 0.6.9: "Licensed under MIT" mit Link auf das LICENSE im fflate-Repo.
Die Datei trägt oben `var Xa="160"`, passend zu three.js r160 (Version aus der Konstanten gelesen).
Offen: Der volle MIT-Lizenztext (der Satz "Permission is hereby granted ...") steht nicht in der Datei, nur die SPDX-Kennung bzw. ein Link. Ob das für die MIT-Bedingung ("Hinweis und Erlaubnistext in allen Kopien") ausreicht, ist eine Rechtsfrage, die ich nicht entscheide. Eine Seite mit den beiden Lizenztexten (zum Beispiel unter dem Handbuch) wäre eine Möglichkeit, nicht beschlossen. Nicht geprüft: ob fbx-loader.js weitere Fremdcode-Teile (z. B. FBXLoader, USD-Teile) mit eigenen Hinweisen enthält, und ob die Dateien auf dem Live-Server gleich sind.

### Maya-Scherz im Namen und Logo von Inca
Beschreibung, keine Entscheidung. Belegt:
- "Inca for Maya" ist ein Wortspiel (Kommentar in index.html Zeile 2088): Die Logo-Kachel mit eingeritztem I und kleiner Sonne ist bewusst so gezeichnet, dass sie "the look of Maya's icon" nicht kopiert.
- Der Code vergleicht an vielen Stellen mit "Maya" (in Kommentaren und als Namensmuster pCube1, pCube2), Header-Eier im Spiel heißen `e-maya` (index.html Zeile 256) und es gibt einen "Maya"-Gag im Spiel (Commit f39e285 "Maya hides Inca after Save").
- Der Logo-Tooltip behauptet "Yes, this is a fully functional 3D program".
Offene Fragen für die Rechtsprüfung (nicht beantwortet): Ob "Maya" und das Wortspiel mit Autodesks Marke ein Problem ist, ob sichtbare Nutzertexte (Tooltips, Tutorial) die Marke nennen, und ob der Funktionsvergleich "like Maya" im Interface als Hinweis auf Verbindung gelesen werden kann. Nicht geprüft: Markenrecht, ob die Texte im Tutorial "Maya" wörtlich enthalten (nur Code-Kommentare und Namen gesucht).
