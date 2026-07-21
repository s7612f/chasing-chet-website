# Chasing Chet - production website mockup

Static one-page site for the *Chasing Chet* documentary (Robin Phillips / repmusic, 2026).

## View locally

```bash
cd chasing-chet-website
python3 -m http.server 8765
```

Open http://localhost:8765

## What this is

- Tasteful film page modelled on classic Chet Baker doc presentation (*Let’s Get Lost* / Film Forum style)
- Real photographs only (Wikimedia, repmusic performance stills, Unsplash)
- Real video embeds (Weber trailer + Robin’s Chet show)
- Written copy for the production as of July 2026
- No AI images, no invented UI buttons, no fake “Buy tickets” or “Stream now”

## Stack

Plain HTML, CSS, a few lines of JS for nav. Google Fonts: Cormorant Garamond + IBM Plex Sans.

## SEO / head

- Canonical, robots, Open Graph, Twitter cards
- JSON-LD (`Movie`, `Organization`, `WebSite`, `WebPage`)
- Favicon set + `site.webmanifest`
- `robots.txt` + `sitemap.xml`
- OG image: `assets/images/og-cover.jpg`

When the public domain is live (e.g. `chasingchet.com`), update canonical, OG URLs, sitemap, and robots to match.

## Contact

No inquiry form. Mailto only: `robin@repmusic.co.uk`. Later: link to trailer / screening page when it exists.

## Status

Working mockup for crew review. Confirm with Robin before any public domain, DNS, or press use.
