# Chasing Chet

Public production website for the documentary *Chasing Chet* (repmusic, 2026).

## Live site

**https://s7612f.github.io/chasing-chet-website/**

## Local preview

```bash
cd chasing-chet-website
python3 -m http.server 8765
```

Open http://127.0.0.1:8765

## What’s in this repo

| Path | Purpose |
|------|---------|
| `index.html` | Single-page site |
| `assets/css/styles.css` | Layout and type |
| `assets/js/main.js` | Nav scroll state only |
| `assets/images/` | Photos (Chet archive, cities, performance) |
| `assets/images/voices/` | Cast headshots (committed files only) |
| `assets/icons/` | Favicons |
| `robots.txt` / `sitemap.xml` | Crawl helpers |
| `site.webmanifest` | PWA chrome |
| `CREDITS.md` | Image source notes |
| `SEO_REVIEW.md` | SEO / Ads readiness notes |
| `AI.md` | Context for AI assistants editing this repo |

Unused trial portraits are not part of the design; only the named files in `voices/` that `index.html` references are required.

## Stack

Static HTML + CSS + a few lines of JS. Google Font: **Newsreader**. No build step. GitHub Pages serves `main` from `/`.

## Contact on the page

Mailto only (no form): production contact on the site footer area.

## Domain note

Canonical and Open Graph URLs currently point at the GitHub Pages host. When a custom domain is attached, update:

- `index.html` canonical + OG/Twitter URLs + JSON-LD  
- `robots.txt` Sitemap line  
- `sitemap.xml` `<loc>`  
- `site.webmanifest` `start_url` if needed  

## Licence / rights

This is a production mockup. Archival and third-party stills retain their original rights; see `CREDITS.md`. Do not treat the site as cleared for commercial campaign use without rights review.
