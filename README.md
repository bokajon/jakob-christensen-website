# Jakob Christensen – Website

Persönliche Website von Jakob Christensen.

## Status

Startseite mit einer Auswahl von Projekten (`public/index.html`).

Zwei Projekte liegen vorerst als Kopie unter dieser Domain:

- `public/students-on-the-loose/` – aus `D:\Projects\students-on-the-loose\public`
- `public/niagara-tutor-ui/` – Vite-Build aus `D:\NiagaraUI` (ohne Service Worker, also ohne Offline-Modus)

Diese Ordner nicht von Hand ändern. Zum Aktualisieren `python tools/sync_projects.py` ausführen, dann committen und pushen.

## Lokal öffnen

`public/index.html` direkt im Browser öffnen – es gibt keine Abhängigkeiten oder Build-Schritte.

## Deployment

Cloudflare Workers liefert den Ordner `public/` als statische Seite aus (Konfiguration in `wrangler.jsonc`). Sobald das Repo in Cloudflare verbunden ist, wird jeder Push auf `main` automatisch deployt.
