# AI.md — context for assistants working on this site

Read this before editing. Public repo context only. No private production secrets.

## What this is

One-page static website for **Chasing Chet**, an independent documentary about **Chet Baker’s European years**, produced under **repmusic**, directed by **Robin Phillips**, in production (2026).

It is a public-facing production page (thesis, journey, voices, music, credits, email). It is not a ticket shop, streamer listing, or finished-film page.

## Live URL

https://s7612f.github.io/chasing-chet-website/

## Page structure (top to bottom)

1. **Hero** — title, logline, director / production / date  
2. **The film** — Europe thesis, access urgency  
3. **The counterpart** — short placement of *Let’s Get Lost* (1988) as the known US-focused film; not a remake claim  
4. **Pull quote** — Matthew Ruddick on Robin’s Chet performance  
5. **Journey** — European cities (architecture photos)  
6. **Voices** — interviewees with small headshots  
7. **Music** — text + three small stills + link out to performance video  
8. **Credits** — director, camera/sound, trumpet, production  
9. **Contact** — mailto  
10. **Footer** — repmusic links  

## Design intent

- Dark, quiet, film-programme note, not SaaS marketing  
- Prefer restraint: few hyperlinks in body copy; footer can hold outbound links  
- Headshots: true greyscale image files; stay greyscale on hover  
- City / place photos: greyscale by default; **colour on hover**  
- Type: Newsreader for body and display; system sans for small labels  
- Avoid “AI film template” tells: gold all-caps labels, 1px card walls, equal everything  

## SEO (current baseline)

Already present:

- Title, meta description, robots, canonical  
- Open Graph + Twitter card + `assets/images/og-cover.jpg`  
- JSON-LD: WebSite, WebPage, Movie, Organization  
- Favicons + `site.webmanifest`  
- `robots.txt` + `sitemap.xml`  

Gaps for ads / custom domain:

- Canonical still on github.io until a real domain is set  
- Mailto-only conversion; no analytics tags in repo by default  
- Heavy images; no `srcset` yet  

When changing domain, update all absolute URLs in head, JSON-LD, robots, sitemap.

## How to edit safely

- Prefer editing `index.html` and `assets/css/styles.css` only for visual/copy work  
- Do not invent fake CTAs (“Watch now”, “Buy tickets”) without a real asset  
- Do not claim festival selection, broadcast sale, or clearances that are not true  
- Keep counterpart language accurate: *Let’s Get Lost* is the known reference film; this project is the Europe-side story  
- Commit messages should describe the change in plain English  

## Local run

```bash
python3 -m http.server 8765
```

## Deploy

Push to `main` on GitHub. Pages serves the root of the branch.

## Out of scope for this repo

Private crew logistics, carnets, unreleased strategy budgets, personal contact lists, unreleased interview content.
