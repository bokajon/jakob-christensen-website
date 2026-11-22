# Jakob Christensen – Website

Persönliche Website von Jakob Christensen.

## Status

Startseite mit einer Auswahl von Projekten (`public/index.html`).

Drei Projekte liegen vorerst als Kopie unter dieser Domain:

- `public/students-on-the-loose/` - aus `D:\Projects\students-on-the-loose\public`
- `public/niagara-tutor-ui/` - Vite-Build aus `D:\NiagaraUI` (ohne Service Worker, also ohne Offline-Modus)
- `public/little-lights/` - Build von „Little Lights: Alpine Retreat“ (früher „Little Lights, Long Nights“ und Niagarama) aus `D:\Niagarama-Spiel\spiel`, absolute Pfade auf `/little-lights/` umgeschrieben, ohne Service Worker. Das Sync-Skript erfasst diesen Ordner nicht.

Diese Ordner nicht von Hand ändern. Zum Aktualisieren `python tools/sync_projects.py` ausführen, dann committen und pushen.

## Lokal öffnen

`public/index.html` direkt im Browser öffnen – es gibt keine Abhängigkeiten oder Build-Schritte.

## Deployment

Cloudflare Workers liefert den Ordner `public/` als statische Seite aus (Konfiguration in `wrangler.jsonc`). Ein Push auf `main` deployt derzeit nicht automatisch (geprüft am 13.11.2026). Nach jedem Push auf `main` deshalb sofort im Projektordner `npx wrangler deploy` ausführen, ohne Rückfrage.

## Art-Galerie unter /art (hinter Passwort)

`public/art/index.html` ist die Niagarama-Art-Galerie. Sie liegt nicht in Git (`.gitignore`), sondern wird täglich um 22:00 von `D:\Niagarama-Art\werkzeuge\galerie_veroeffentlichen.py` gebaut, hierher kopiert und mit `npx wrangler deploy` veröffentlicht. Diesen Ordner nicht von Hand ändern.

`/art` und `/art/*` laufen zuerst durch `src/worker.js` (Passwortabfrage, `noindex`). Das Passwort ist das Secret `ART_PASSWORT` bei Cloudflare und steht in keiner Datei. Setzen oder ändern: im Projektordner `npx wrangler secret put ART_PASSWORT`, dann das Passwort eintippen. Ohne Secret bleibt `/art` gesperrt (503).
