# Chasing Chet - SEO review

**Scope:** local site at `/Users/admin/Desktop/chasing-chet-website/` and live URL `https://s7612f.github.io/chasing-chet-website/`  
**Date:** 2026-07-21  
**Goal filter:** public launch readiness + use as a **targeted Google Ads landing page**

---

## 1. What's already done

### Crawl / index basics
- [x] `robots.txt` allows crawl and points at sitemap
- [x] `sitemap.xml` present with single URL + lastmod
- [x] `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`
- [x] `lang="en-GB"` on `<html>`
- [x] Canonical tag present (currently github.io)
- [x] Viewport meta for mobile

### Title / description / social
- [x] Title: `Chasing Chet | Chet Baker documentary | repmusic` (clear brand + topic)
- [x] Meta description present and readable (~155 chars)
- [x] Open Graph set (`og:type=video.movie`, title, description, url, image 1200x630, alt)
- [x] Twitter card `summary_large_image` with title, description, image, alt
- [x] `og-cover.jpg` exists and is used for share previews

### Structured data
- [x] JSON-LD `@graph` with `WebSite`, `WebPage`, `Movie`, `Organization`
- [x] Director, production company, about Chet Baker + Wikipedia `sameAs`
- [x] Org socials (YouTube, Instagram, Facebook, robinphillips.co.uk)

### Icons / PWA chrome
- [x] Favicon.ico + 16/32 PNG + apple-touch-icon
- [x] `site.webmanifest` with name, theme colors, 192/512 icons
- [x] theme-color / color-scheme

### On-page structure
- [x] Single clear `<h1>`: Chasing Chet
- [x] Logical `h2` / `h3` sections (film, counterpart, journey cities, voices, music, credits)
- [x] Semantic landmarks: `header`, `nav`, `main`, `footer`, section labels
- [x] Primary nav anchors: #film, #journey, #voices, #music, #credits
- [x] Images generally have `alt`, width/height, and `loading="lazy"` below the fold
- [x] LCP hero image preloaded + `fetchpriority="high"`
- [x] Fonts: preconnect + `display=swap`
- [x] YouTube via privacy-enhanced domain + preconnect/dns-prefetch
- [x] Contact CTA: mailto to `robin@repmusic.co.uk` with subject
- [x] Strong external entity links (Wikipedia, collaborators, repmusic)

### Assets noted
- OG: `assets/images/og-cover.jpg` (monochrome Chet + trumpet; matches OG dimensions claim)
- Favicons under `assets/icons/` + root `favicon.ico` / `apple-touch-icon.png`

---

## 2. Gaps / issues (Google Ads + organic)

### Domain / canonical (blockers for brand + Ads trust)
- Canonical, `og:url`, all JSON-LD `@id`/`url`, sitemap `loc`, and robots Sitemap URL all point at **github.io**, not a production domain (e.g. chasingchet.com).
- GitHub Pages paths look temporary. Poor brand recall, weaker trust signals for Ads landing page experience, and a future domain move risks split equity unless redirects are clean.
- `site.webmanifest` `start_url` is `"/"` which is wrong on project Pages (`/chasing-chet-website/`). Prefer `"./"` or the real path/domain.

### Conversion path (critical for Ads)
- Only conversion is **mailto**. Hard to measure, easy to bounce on mobile, no thank-you / confirmation state.
- Contact lives at page bottom (`#contact`). Not in primary nav. No hero CTA.
- Copy is soft: "When there is a trailer... write to Robin." Fine for a mockup; weak for paid traffic that needs one clear next step.
- No newsletter / interest list, screening alert, press kit, or funder/support path.
- No conversion tracking (gtag / Google tag / Ads conversion / enhanced conversions).
- No privacy policy or cookie notice. Often required or expected for Google Ads + any tracking.

### Content / relevance
- Copy is **not empty** (film thesis, cities, cast of voices, credits). For organic long-tail it is usable.
- For Ads "landing page experience," relevance depends on ad message match. Hero logline is strong; much mid-page depth is about *Let's Get Lost* (counterpart), which can dilute QS if ads promise "Chasing Chet trailer / tickets / stream" that do not exist.
- No trailer for *this* film yet. Second embed is performance content; first is Weber's film. Risk of confused paid visitors.
- Thin for competitive organic head terms ("Chet Baker documentary") vs established titles; OK as a production site.

### Technical / speed
- Large full-res images (hero ~1634x2043; city shots often 1600w) with **no `srcset` / responsive sizes**. Heavy LCP and mobile weight.
- Two YouTube iframes in the main document (lazy helps; still third-party cost and layout work).
- Google Fonts (two families, several weights) block render unless further optimized (subset, self-host, or system fallback for Ads pages).
- Single-page only: no internal URL graph beyond anchors. Footer links mostly leave the site (good for brand ecosystem, not for on-site depth).
- No `hreflang` needed unless you add locales.
- Meta keywords present; Google ignores them. Harmless clutter.

### Social / schema polish
- `og:title` / `twitter:title` are bare "Chasing Chet" while the HTML title is richer.
- No `twitter:site` / creator handle.
- Movie schema lacks trailer `VideoObject`, duration, `datePublished` (acceptable while in production; add when assets exist).
- No FAQ / HowTo / Event schema (only add if real content matches).

### Ads policy / ops
- github.io as final URL may pass basic destination checks but is a bad permanent choice for brand campaigns.
- Claim accuracy: "documentary in production · 2026" is honest - keep ad copy aligned (no "watch now" / "stream free" unless true).
- Mailto as conversion is awkward for Smart Bidding; prefer form + thank-you page or tracked click to calendar / mailing list.

---

## 3. Priority fixes for public launch + Google Ads LP

Ordered by impact for paid + launch.

1. **Ship the real domain**  
   Point DNS to the site (or reverse proxy). Update in one pass: canonical, `og:url`, OG/Twitter image absolute URLs, JSON-LD ids/urls, `robots.txt` Sitemap, `sitemap.xml` loc, manifest `start_url` + `id` if used. 301 github.io -> new domain.

2. **Fix the conversion path for Ads**  
   - Hero primary CTA above the fold (e.g. "Email the production" or "Join the update list").  
   - Add `#contact` (or Contact) to primary nav.  
   - Prefer a short form (name, email, interest: press / festival / support) posting to Formspree / Basin / Google Form, with a **thank-you URL** you can mark as Ads conversion.  
   - Keep mailto as secondary.

3. **Title + meta aligned to ad groups**  
   Match ad headlines to visible H1 + first screen. Use dedicated final URLs only if you split pages later; for one LP, make the hero answer the query in the first 2 seconds.

4. **Google tag + conversion**  
   Install Google tag (GA4 + Google Ads). Fire conversion on form submit / thank-you. Optional: click on email CTA as secondary. Do not run ads without measurement.

5. **Legal for Ads**  
   Add Privacy policy (and cookie note if you use tags). Link in footer. Business identity: repmusic + contact already help.

6. **Page speed for Quality Score**  
   - Compress/resize hero and city images; WebP/AVIF + `srcset`.  
   - Defer or facade YouTube (thumbnail + click-to-load).  
   - Self-host or subset fonts; drop unused weights.  
   - Keep CSS single-file; avoid extra third parties on the LP.

7. **Structured data when real assets exist**  
   Add official trailer as `VideoObject` / Movie `trailer`. Add `dateCreated` / expected release only if accurate. Keep Organization email.

8. **Internal links**  
   Link brand mentions of Chasing Chet to `#film` not only `#top`. Link Contact from credits. Avoid sending ad traffic off-site before the CTA.

9. **Sitemap hygiene**  
   After domain change, resubmit in Search Console. One URL is fine for a single-page site; add privacy / press only if indexable.

10. **Message honesty for campaigns**  
    Ads should sell "in production / European years / voices still living / directed by Robin Phillips" - not a finished film experience until the trailer ships.

---

## 4. Recommended title + meta description variants (Google Ads + organic)

Character targets: title ~50-60, description ~140-155. Prefer **final URL on brand domain** when live.

### Organic / default page (current direction, tightened)

**Title A (recommended default)**  
`Chasing Chet | Chet Baker Europe Documentary | 2026`

**Description A**  
`Chasing Chet is a repmusic documentary on Chet Baker's European years. Directed by Robin Phillips. Voices who played, recorded, and kept the rooms open.`

### Brand / awareness Ads

**Title B**  
`Chasing Chet Documentary | Robin Phillips / repmusic`

**Description B**  
`A new film on Chet Baker's Europe years - the musicians, engineers, and friends still here to tell it. In production 2026. Contact the team.`

### Search intent: Chet Baker documentary

**Title C**  
`Chet Baker Documentary: Europe Years | Chasing Chet`

**Description C**  
`Beyond Let's Get Lost: Chasing Chet follows Baker's European map - Amsterdam to Liège - with collaborators still able to speak from the stand.`

### Search intent: jazz / Europe / production support-press

**Title D**  
`Chasing Chet | Jazz Documentary in Production 2026`

**Description D**  
`Production site for Chasing Chet. Director Robin Phillips. European route, on-camera voices, repmusic. Email the production for press and enquiries.`

### Google Ads RSA-style headlines (pair with matching description)

Use in Responsive Search Ads; keep LP H1 close to at least one headline.

| Headline ideas | Notes |
| --- | --- |
| Chasing Chet Documentary | Brand exact |
| Chet Baker's European Years | Theme match |
| Directed by Robin Phillips | Cred |
| A repmusic Film (2026) | Production status |
| Voices Who Knew Baker | Cast angle |
| Amsterdam to Liège | Journey angle |
| Email the Production | CTA for enquiry campaigns |

**Ads description lines (90 chars max each where needed)**  
- `Documentary on Chet Baker in Europe. In production 2026. Write to the team.`  
- `Musicians, engineers, friends on camera. Directed by Robin Phillips / repmusic.`  
- `The other half of the map after Let's Get Lost. Access that will not last.`

**Path fields (display URL)**  
`/film` or `/documentary` if you ever split; else leave blank on single-page.

---

## 5. Score: SEO readiness for targeted Google Ads LP

### **5 / 10**

| Factor | Score | Note |
| --- | --- | --- |
| Technical meta / crawl | 8 | Head, robots, sitemap, schema, OG solid for a one-pager |
| Domain / brand URL | 3 | github.io + canonical not production-ready |
| Message / content clarity | 7 | Strong logline and structure; counterpart section can dilute paid intent |
| Conversion path | 3 | Mailto only, buried, untracked |
| Speed / mobile weight | 5 | Lazy + preload help; large images + fonts + 2 iframes hurt |
| Ads ops (tag, privacy, QS) | 2 | No tag, no privacy page, weak measurable CTA |

**Read as:** fine technical **mockup** and decent organic hygiene for a static production page. **Not yet a serious Ads landing page** until domain, CTA measurement, privacy, and speed/image work land. After those, a realistic target is **8/10** without needing a multi-page content engine.

---

## Optional code tweaks (review only - not applied)

Safe, small HTML/SEO improvements if you edit later:

1. **Hero CTA** - Add a button next to the logline linking to `#contact` (and later the form).
2. **Nav** - Add Contact: `<li><a href="#contact">Contact</a></li>`.
3. **Richer social titles** - Set `og:title` / `twitter:title` to match the HTML title (or Title A above).
4. **Manifest** - Change `"start_url": "/"` to `"./"` (or full production URL).
5. **Internal brand links** - Change repeated `<a href="#top"><strong>Chasing Chet</strong></a>` to `#film` where the film is meant.
6. **Alt uniqueness** - `robin-show-1` and `robin-show-3` both use "Robin Phillips at the piano"; differentiate (venue, year, angle).
7. **Voice alts** - Expand bare name alts slightly, e.g. `Robin Phillips, director of Chasing Chet` (helps accessibility more than rankings).
8. **YouTube facade** - Replace live iframes with poster + load-on-click to cut main-thread and bytes for ad traffic.
9. **Responsive images** - `srcset`/`sizes` on hero and journey grid; serve ~800w mobile.
10. **JSON-LD absolute URLs** - After domain cutover, replace every `s7612f.github.io/chasing-chet-website` string in one search.
11. **Privacy footer link** - Even a short static `privacy.html` helps Ads and trust.
12. **Drop meta keywords** - Optional cleanup; no ranking value.
13. **`rel="noopener noreferrer"`** on external tabs if you want slightly tighter referrer control (minor).
14. **Skip link** - `<a href="#top" class="skip">Skip to content</a>` for a11y (indirect SEO hygiene).
15. **H1 optional subtitle** - Keep single H1; if Ads need keyword visibility, put "Chet Baker documentary" in the eyebrow or first sentence (already partly there) rather than a second H1.

---

## Quick file checklist (current)

| File | Status |
| --- | --- |
| `index.html` head | Strong meta, OG, Twitter, JSON-LD; URLs = github.io |
| `robots.txt` | OK; Sitemap absolute to github.io |
| `sitemap.xml` | Single URL; github.io |
| `site.webmanifest` | OK names/icons; `start_url` wrong for project Pages |
| `assets/images/og-cover.jpg` | Present; wired in OG/Twitter/schema |
| Favicon set | Present root + `assets/icons/` |

**Bottom line:** Keep the editorial voice and schema. Before spending on Google Ads, move off github.io, put a measurable CTA above the fold, add privacy + tags, and slim images/embeds. Then rewrite title/description to match each ad group using the variants in section 4.
