# Jakob Christensen – Website

Persönliche Website von Jakob Christensen.

## Status

Startseite mit einer Auswahl von Projekten (`public/index.html`).

Drei Projekte liegen vorerst als Kopie unter dieser Domain:

- `public/students-on-the-loose/` - aus `D:\Projects\students-on-the-loose\public`
- `public/niagara-tutor-ui/` - Vite-Build aus `D:\NiagaraUI` (ohne Service Worker, also ohne Offline-Modus)
- `public/little-lights/` - Vite-Build von „Little Lights: An Alpine Retreat“ (früher „Little Lights, Long Nights“ und Niagarama) aus `D:\NiagaraUI` (master), hinter dem Art-Passwort (siehe unten). Liegt nicht in Git (über 100 MB, vor allem Audio und Bilder).

Diese Ordner nicht von Hand ändern. Zum Aktualisieren `python tools/sync_projects.py` ausführen, dann committen und pushen.

Das Spiel wird nur auf Zuruf gebaut, direkt in den Hauptordner dieses Repos: `python tools/sync_projects.py little-lights` (oder mit einem anderen NiagaraUI-Checkout als zweitem Argument), danach `npx wrangler deploy`. Weil der Ordner nicht in Git liegt, nimmt jeder Deploy das Spiel nur mit, wenn `public/little-lights/` im Ordner liegt, aus dem deployt wird; aus einem Checkout ohne diesen Ordner verschwindet `/little-lights/` von der Seite (wie `/art`).

## Lokal öffnen

`public/index.html` direkt im Browser öffnen – es gibt keine Abhängigkeiten oder Build-Schritte.

## Deployment

Cloudflare Workers liefert den Ordner `public/` als statische Seite aus (Konfiguration in `wrangler.jsonc`). Ein Push auf `main` deployt derzeit nicht automatisch (geprüft am 13.11.2026). Nach jedem Push auf `main` deshalb sofort im Projektordner `npx wrangler deploy` ausführen, ohne Rückfrage.

## Art-Galerie unter /art (hinter Passwort)

`public/art/index.html` ist die Niagarama-Art-Galerie. Sie liegt nicht in Git (`.gitignore`), sondern wird täglich um 22:00 von `D:\Niagarama-Art\werkzeuge\galerie_veroeffentlichen.py` gebaut, hierher kopiert und mit `npx wrangler deploy` veröffentlicht. Diesen Ordner nicht von Hand ändern.

`/art` und `/art/*` laufen zuerst durch `src/worker.js` (Passwortabfrage, `noindex`). Das Passwort ist das Secret `ART_PASSWORT` bei Cloudflare und steht in keiner Datei. Setzen oder ändern: im Projektordner `npx wrangler secret put ART_PASSWORT`, dann das Passwort eintippen. Ohne Secret bleibt `/art` gesperrt (503).

`/little-lights` und `/little-lights/*` sind mit demselben Secret geschützt (gleicher Realm, ein Login gilt für beide). Die Adresse `/little-lights/` leitet nach dem Login auf `/little-lights/?shell=game` weiter, weil der Build ohne `?shell=game` die Lern-Website zeigt. Das Spiel darf im Browser-Cache liegen (`private, no-cache`), die Galerie nicht (`private, no-store`).
