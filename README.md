# Jakob Christensen – Website

Persönliche Website von Jakob Christensen.

## Status

Projekt angelegt. Aktuell nur eine Startseite (`public/index.html`).

## Lokal öffnen

`public/index.html` direkt im Browser öffnen – es gibt keine Abhängigkeiten oder Build-Schritte.

## Deployment

Cloudflare Workers liefert den Ordner `public/` als statische Seite aus (Konfiguration in `wrangler.jsonc`). Sobald das Repo in Cloudflare verbunden ist, wird jeder Push auf `main` automatisch deployt.
