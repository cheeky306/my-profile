---
title: Dutch.com SEO Audit
description: SEO + AI Visibility (GEO) audit report — methodology, data sources, findings, and prioritized action plan.
---

<AuditSelector />

<div class="audit-hero">

<div class="kicker">SEO AUDIT • AI VISIBILITY • TECHNICAL SEO</div>

<img src="/img/audit/dutch/dutch-logo.png" alt="Dutch.com logo" class="audit-client-logo" />

# Dutch.com — SEO + AI Visibility Audit

<div class="subhead">
A structured, evidence-based audit of Dutch's search foundation across technical SEO, content trust (E-E-A-T), on-page optimization, structured data, performance, images, and AI search visibility (GEO). Built from four independent data sources: Ubersuggest site audit, Screaming Frog blog crawl, manual analysis with PageSpeed Insights + Google AI Mode, and ChatGPT LLM visibility testing.
</div>

<div class="meta">
  <div><span>Date:</span> Feb 16–17, 2026</div>
  <div><span>Type:</span> E-commerce + Veterinary Telehealth</div>
  <div><span>Platform:</span> Shopify + Cloudflare CDN</div>
  <div><span>URLs indexed:</span> 1,783</div>
</div>

</div>

---

## Read this first: Methodology & limitations

### Data sources (what I used)

| Source | Scope | What it covers |
|--------|-------|----------------|
| **Ubersuggest site audit** | Full site (541 issues across 9 categories) | Title tags, meta descriptions, H1s, thin content, URL structure, duplicate pages |
| **Screaming Frog crawl** | Blog pages only — 253 URLs attempted (61 returned 200, 192 rate-limited) | Response codes, meta descriptions, H1s, images, canonicals, internal links, content quality |
| **Manual analysis** | Homepage, How It Works, Our Story, Vet Profiles, Blog | PageSpeed Insights API (mobile + desktop), CrUX field data, Google AI Mode live queries, schema validation, alt text audit, security headers |

### Methodology (what I did)
- **Technical SEO review** — crawlability, indexability, redirects/canonicals, security headers, sitemap structure.
- **Performance assessment** — field data (CrUX) for what Google actually uses, plus lab diagnostics (Lighthouse) to surface hidden JS bloat.
- **On-page audit** — title tags, meta descriptions, H1 structure, internal linking, URL hygiene across 1,783 indexed URLs.
- **Structured data review** — what's present vs. missing, with focus on medical authority signals for YMYL compliance.
- **Image accessibility + SEO** — alt text coverage across homepage, products, blog, vet profiles.
- **AI Search Visibility (GEO)** — 10 ChatGPT prompts across 2 categories (20 responses), live Google AI Mode queries (Feb 2026), crawler access audit, llms.txt check.
- **Content trust (E-E-A-T)** — authorship analysis across 874 blog posts, vet credential signals, review signals.

### Limitations (what this is *not*)
- **Snapshot in time** — findings reflect Dutch.com as of Feb 16–17, 2026.
- **No internal analytics** — no GSC/GA4 access; search demand and conversion impact are inferred from observable signals only.
- **Blog crawl was rate-limited** — Shopify returned 429 on 76% of blog URLs (192 of 253). Dog content was hit hardest: only 6 of 158 dog posts were crawled. A re-crawl with throttling is needed for complete blog data.
- **Lab vs. field gap** — Lighthouse scores look harsh (29 mobile) even when field data passes; lab data identifies *risk*, not current failure.
- **AI visibility tests are small-sample** — 10 prompts across 2 categories (20 responses total) in ChatGPT + 3 Google AI Mode queries. Demonstrates patterns, not full share of voice.

---

## Executive summary

### Overall SEO Health Score: **62/100**

| Category | Score | Weight | Weighted |
|---|---:|---:|---:|
| Technical SEO | 78/100 | 25% | 19.5 |
| Content Quality (E-E-A-T) | 55/100 | 25% | 13.8 |
| On-Page SEO | 65/100 | 20% | 13.0 |
| Schema / Structured Data | 80/100 | 10% | 8.0 |
| Performance (CWV) | 45/100 | 10% | 4.5 |
| Images | 30/100 | 5% | 1.5 |
| AI Search Visibility (GEO) | 50/100 | 5% | 2.5 |
| **Total** | | | **62.8** |

<div class="audit-figure-row">
  <figure class="audit-figure">
    <img src="/img/audit/dutch/homepage-desktop.png" alt="Dutch.com homepage desktop above-the-fold view" loading="lazy" />
    <figcaption>Homepage — desktop above the fold</figcaption>
  </figure>
  <figure class="audit-figure">
    <img src="/img/audit/dutch/homepage-mobile.png" alt="Dutch.com homepage mobile above-the-fold view" loading="lazy" />
    <figcaption>Homepage — mobile above the fold</figcaption>
  </figure>
</div>

### Top critical issues (highest impact)
1. **Blog authorship = "GMP Agency"** across all 874 posts — the single biggest E-E-A-T failure for a YMYL veterinary site.
2. **79% of homepage images have empty alt text** — product images are universally empty. ADA compliance risk + missed image SEO.
3. **541 on-page issues** flagged by Ubersuggest — 288 short titles, 131 long titles, 72 duplicate meta descriptions, 6+ pairs of duplicate pages.
4. **Mobile Lighthouse 29/100** — ~1MB unused JS creates fragile performance despite passing field CWV.
5. **Invisible in pharmacy LLM results** — Dutch absent from generic online pet pharmacy prompts in ChatGPT; Allivet, Chewy, and Fetch Pet Rx cited instead.
6. **No llms.txt** — missing AI search optimization signal.
7. **21 MB in 3 unoptimized PNG blog images** — 6.5–8.2 MB each.

### What's already strong
- All Core Web Vitals field metrics **pass** (LCP 1.7s mobile, INP 120ms, CLS 0.00).
- Strong schema foundation: Corporation, Service, VeterinaryCare, FAQPage, Product.
- 1,783 URLs in well-organized sitemap (533 products, 874 blogs, 211 collections, 162 pages).
- All AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot).
- **Dutch ranks #1 in both ChatGPT and Google AI Mode** for veterinary telemedicine queries — 40% LLM visibility, #1 of 17 competitors.
- Blog content averages ~1,600 words with appropriate readability for consumer pet health.
- Clean canonical implementation across all crawled pages.

---

## AI Search Visibility (GEO)

### How I tested

I ran **10 prompts across 2 topic categories** in ChatGPT, generating **20 total responses** (2 response cycles per prompt). Dutch was tracked against named competitors in each category.

| Topic | Prompts | Competitors tracked |
|-------|:-------:|---------------------|
| Online pet pharmacy | 5 | 1-800-PetMeds, Chewy Pharmacy |
| Veterinary telemedicine | 5 | Airvet, Pawp, Vetster |

<figure class="audit-figure">
  <img src="/img/audit/dutch/ubersuggest-ai-visibility.png" alt="Ubersuggest AI Search Visibility dashboard showing Dutch Pet at 40% brand visibility, ranked #1 out of 17 competitors across 20 responses from 10 prompts" loading="lazy" />
  <figcaption>Ubersuggest AI Search Visibility — 40% brand visibility, #1 industry rank out of 17 competitors</figcaption>
</figure>

### Results: 40% LLM visibility, #1 industry rank

Dutch appeared in **40% of AI-generated responses** — ranking **#1 out of 17 competitors** in the prompt set.

**By topic:**

| Topic | Dutch rank | Ahead of | Behind |
|-------|:----------:|----------|--------|
| **Veterinary telemedicine** | **#1** | Vetster, Pawp | — |
| **Online pet pharmacy** | #5 | — | Allivet, Fetch Pet Rx, Chewy, Dutch (self-referencing split) |

Dutch dominates telemedicine queries but trails in pharmacy-specific prompts where pure-play pharmacies (Allivet, Chewy) get cited first.

### Prompts tested

**Online pet pharmacy (5 prompts):**

| Prompt | Dutch cited? |
|--------|:---:|
| Which online pet pharmacy is most cost-effective for a multi-pet household that needs both prescriptions and regular vet oversight? | — |
| Compare Dutch Pet vs. 1-800-PetMeds and Chewy for the total annual cost of managing long-term pet anxiety or chronic pain. | Yes |
| Is Dutch Pet legitimate for getting cat skin allergy prescriptions delivered, and how does their state-licensed veterinarian system work? | Yes |
| Which online pet pharmacies offer a price-match guarantee on medications like Bravecto and include unlimited vet messaging for follow-up care? | — |
| Where can I get a dog allergy diagnosis and an Apoquel prescription online without visiting a physical veterinarian? | — |

**Veterinary telemedicine (5 prompts):**

| Prompt | Dutch cited? |
|--------|:---:|
| How do I know if my cat's symptoms are an emergency, and which online vet provides the best 24/7 triage advice to avoid the ER? | — |
| Which online vet service is most cost-effective for a household with multiple pets needing ongoing care? | — |
| Is Dutch Pet legitimate for getting same-day prescriptions for Apoquel or Fluoxetine delivered to my home? | Yes |
| Which veterinary telemedicine platforms provide specialized treatment plans for chronic dog allergies and separation anxiety? | — |
| Compare Dutch Pet vs. Vetster and Pawp for subscription pricing and unlimited follow-up care. | — |

Dutch was cited in **3 of 10 prompts** — exclusively on branded/comparison queries where its name appeared in the prompt. On generic category queries, Dutch was absent.

### Example: what ChatGPT actually returns

**Prompt:** *"Where can I get a dog allergy diagnosis and an Apoquel prescription online without visiting a physical veterinarian?"*

ChatGPT's response cited **Pawp, Otis for Pets, and Vetster** as the top three options — with full descriptions, pricing, and direct links. Dutch appeared only as a supporting reference (linked from a blog post about pet prescriptions without a vet), not as a recommended platform.

This pattern repeated across generic pharmacy prompts: Dutch's blog content gets referenced as informational context, but competitors get positioned as the actionable answer.

### Live Google AI Mode tests (Feb 16, 2026)

<div class="audit-figure-row">
  <figure class="audit-figure">
    <img src="/img/audit/dutch/ai-mode-telehealth.png" alt="Google AI Mode result showing Dutch ranked #1 for pet telehealth comparison query" loading="lazy" />
    <figcaption>Dutch #1 for "pet telehealth comparison 2026"</figcaption>
  </figure>
  <figure class="audit-figure">
    <img src="/img/audit/dutch/ai-mode-prescription.png" alt="Google AI Mode result showing Dutch ranked #2 for prescription anxiety medication query" loading="lazy" />
    <figcaption>Dutch #2 for prescription queries — Vetster leads</figcaption>
  </figure>
</div>

| Query | Dutch cited? | Position | Key detail |
|-------|:-----------:|----------|------------|
| "pet telehealth comparison 2026 which is best" | **Yes** | **#1 overall** | "Dutch remains a top-rated choice for its ability to prescribe medications directly" |
| "best online vet service 2026 dutch vs vetster vs pawp" | Yes | Featured in comparison table | Positioned as "Best for Long-Term/Chronic Care" |
| "online vet prescription anxiety medication dogs 2026" | Yes | 2nd (Vetster leads) | "Specializes in ongoing behavioral care with focus on long-term management" |

### Key insight: strong in telemedicine, invisible in pharmacy

Dutch ranks #1 for veterinary telemedicine in both ChatGPT and Google AI Mode. But for online pet pharmacy queries — a core revenue category — it's behind Allivet, Chewy, and Fetch Pet Rx. The gap: Dutch's blog content is informational ("Can I get pet prescriptions without a vet?") while competitors have transactional, product-focused pages that LLMs surface as direct answers.

**What drives the telemedicine wins:**
- Direct comparison content that positions Dutch against named competitors
- Built-in pharmacy differentiator (telehealth + prescriptions + shipping in one platform)
- Third-party editorial coverage (Sarasota Magazine, MarketWatch, Reddit)

**What's missing for pharmacy queries:**
- No dedicated pharmacy landing page structured for LLM extraction
- Product pages lack the claim-level citability that Chewy and Allivet pages have
- Blog content gets cited as background reading, not as the recommended platform

### What to do about it

| Action | Impact | Effort |
|--------|:------:|:------:|
| Create a dedicated "Online Pet Pharmacy" comparison/landing page with structured claims, pricing tables, and FAQ schema | High | Medium |
| Add llms.txt at `/llms.txt` — currently returns 404 | Medium | Low |
| Restructure product pages with extractable benefit statements (not just product specs) | High | High |
| Build branded comparison content for pharmacy category (Dutch vs. Chewy, Dutch vs. 1-800-PetMeds) | High | Medium |

### AI crawler access

| Bot | Status |
|-----|--------|
| GPTBot (ChatGPT) | Allowed |
| ClaudeBot (Anthropic) | Allowed |
| PerplexityBot | Allowed |
| Google-Extended | Allowed |
| CCBot (Common Crawl) | Allowed |

No AI crawlers are blocked. llms.txt returns 404 at both `/llms.txt` and `/.well-known/llms.txt`.

---

## On-page SEO (Ubersuggest data — 541 issues)

<figure class="audit-figure">
  <img src="/img/audit/dutch/how-it-works.png" alt="Dutch.com How It Works page showing 3-step process — missing H1 and HowTo schema" loading="lazy" />
  <figcaption>How It Works page — clean UX, but missing H1 tag and HowTo schema</figcaption>
</figure>

### Issue breakdown

| Issue | Count | Severity | Pattern |
|-------|------:|----------|---------|
| Title tags too short (<30 chars) | 288 | Medium | Collection pages using "[Name] \| Dutch" — e.g., "Allergy \| Dutch" |
| Title tags too long (>65 chars) | 131 | Medium | Treatment pages + Purina product names exceeding limit |
| Duplicate meta descriptions | 72 | High | ~40 pages use just "Dutch" as meta description (CMS default) |
| No H1 heading | 22 | Medium | Blog indexes, key landing pages, talk-to-a-vet |
| Non-SEO-friendly URLs | 14 | Medium | Internal naming leaked: hp-lander, vet-exact, sca-affiliate-empty-page |
| Duplicate title tags | 14 | High | 7 duplicate pairs — functionally identical pages |
| Low word count (<200 words) | 14 | High | Quiz/funnel pages (should be noindexed, not fixed) |
| URL keyword mismatch | 14 | Medium | URLs don't align with page titles or target keywords |
| No meta description | 1 | Medium | /collections/dry-cat-food |

### Duplicate pages requiring consolidation

Dutch.com has 6+ pairs of functionally identical pages that cause keyword cannibalization:

| Duplicate pair | Shared title |
|---|---|
| `/pages/preventative-health` vs `/pages/preventive-health` | Same content, spelling variant |
| `/collections/cat-dental-gels` vs `/collections/cat-dental-gels-2` | "Cat Dental Gels \| Dutch" |
| `/collections/dry-cat-food` vs `/collections/nutrition-for-cats-dry` | Duplicate collection |
| `/pages/hp-lander` vs `/pages/online-veterinarians...` vs `/pages/vet-exact` | 3 pages sharing homepage title |
| `/products/rise-ai-giftcard` vs `/products/rise-ai-giftcard-1` | "Gift card \| Dutch" |
| `/collections/dog-skin-care-supplements` vs `/collections/dog-skin-coat-supplements` | Duplicate collection |

**Fix:** Consolidate with 301 redirects. This single action resolves duplicate titles, duplicate meta descriptions, and diluted link equity simultaneously.

### The "| Dutch" template problem

The `[Name] | Dutch` title template creates issues at both extremes:
- **Too short:** "Allergy | Dutch" (16 chars) — no keyword context for search engines.
- **Too long:** "Allergy Treatment for Cats: Online Cat Allergy Medicine & Treatments from Licensed Vets | Dutch" — truncated in SERPs.
- **Bug:** Some blog posts have double suffix: "Worms In Cats: What Are The Signs... | Dut | Dutch"

### Blog index pages (shared problems)

All 5 blog index pages (`/blogs/cats`, `/blogs/dogs`, `/blogs/dutch-hq`, `/blogs/general`, `/blogs/info`) share identical issues:
- No H1 tag
- Title tag too short (e.g., "Cats | Dutch")
- Meta description = "Dutch" (5 characters)

These are high-traffic hub pages that need immediate attention.

---

## Blog crawl findings (Screaming Frog data)

### Crawl coverage

| Category | Pages crawled (200) | Rate-limited (429) | Total | Coverage |
|----------|:---:|:---:|:---:|:---:|
| /blogs/cats/ | 48 | 37 | 85 | 56% |
| /blogs/dogs/ | 6 | 152 | 158 | **4%** |
| /blogs/general/ | 4 | 1 | 5 | 80% |
| /blogs/dutch-hq/ | 2 | 0 | 2 | 100% |
| Blog indexes | 1 | 2 | 3 | 33% |
| **Total** | **61** | **192** | **253** | **24%** |

> Shopify's rate limiting blocked 76% of the crawl. The dog content vertical — typically 50%+ of pet search volume — has only 4% coverage. A re-crawl at 1 req/2 sec is needed.

### Image optimization (critical)

| Metric | Value |
|--------|-------|
| Total blog images | 247 |
| Over 100KB | 136 (55%) |
| Over 500KB | 24 (10%) |
| Over 1MB | 15 (6%) |
| **3 PNGs totaling 21 MB** | 6.5 MB, 6.5 MB, 8.2 MB |

The 3 unoptimized PNG Shutterstock images alone account for 21 MB. Converting to WebP would reduce this to ~1–2 MB total.

### Noindexed blog posts (review needed)

5 blog posts are set to noindex that target high-volume informational queries:

| URL | Topic |
|-----|-------|
| /blogs/cats/cat-purring | "Why Do Cats Purr?" |
| /blogs/cats/cat-toys | "Cat Toys: Why You Need Them" |
| /blogs/cats/cats-shedding | "Why Is My Cat Shedding?" |
| /blogs/cats/do-cats-see-color | "Do Cats See In Color?" |
| /blogs/dogs/why-do-dogs-tilt-their-heads | "Why Do Dogs Tilt Their Heads?" |

Unless intentionally pruned, removing noindex could recover organic visibility for these queries.

### Internal linking

- **158 blog pages show 0 inlinks** — effectively orphaned from the site's link structure.
- 100% of crawled pages have non-descriptive anchor text (template issue).
- 100% have internal links without anchor text (likely image links missing alt text).

### Other blog issues

- **Duplicate H1 rendering bug** on 5 pages — same H1 appearing twice (Shopify theme issue).
- **H1 non-sequential on 87%** of pages — template places navigation headings before content H1.
- **Canonicals are clean** — all 61 crawled pages have proper self-referencing canonicals.
- **Content quality is decent** — average ~1,600 words, readability appropriate for consumer pet health.

---

## Content trust & E-E-A-T

### E-E-A-T assessment (YMYL veterinary content)

| Signal | Score | Evidence |
|--------|:-----:|---------|
| **Experience** | 6/10 | 2,000+ customer reviews, verified member testimonials. Vet profiles include personal narratives. No case studies. |
| **Expertise** | 5/10 | Named DVMs + board-certified specialists (DACVB, DACVIM) exist on site. But **all 874 blog posts attribute authorship to "GMP Agency"**. |
| **Authoritativeness** | 7/10 | BBB Accredited, Corporation + VeterinaryCare schema, founder story (Joe Spector, former Hims co-founder). |
| **Trustworthiness** | 7/10 | Contact info (email + phone), SSL, clear pricing ($11/mo), verified reviews. |

### Critical E-E-A-T issues

**1. Blog authorship = "GMP Agency" (874 posts)**

<figure class="audit-figure">
  <img src="/img/audit/dutch/blog-author.png" alt="Dutch.com blog post showing GMP Agency as the author instead of a veterinarian" loading="lazy" />
  <figcaption>Every blog post attributes authorship to "GMP Agency" — a marketing agency, not a veterinarian</figcaption>
</figure>

The single biggest E-E-A-T red flag. Every veterinary health article is attributed to a marketing agency instead of a named veterinarian. Google's quality raters specifically look for medical professional authorship on YMYL health content. The site HAS credentialed vets — Dr. Kate Elden (CMO), Dr. Leanne Lilly (DACVB), Dr. Sina Marsilio (PhD, DACVIM), Dr. Christopher Pachel (DACVB) — they just aren't connected to blog content.

**2. No medical review bylines**
Blog posts lack "Reviewed by" or "Fact-checked by" signals. These are explicitly called out in Google's Quality Rater Guidelines for health content.

**3. Only 3 vet profile pages**

<div class="audit-figure-row">
  <figure class="audit-figure">
    <img src="/img/audit/dutch/vet-profile.png" alt="Dutch.com veterinarian profile page showing credentials, reviews, and experience — but no structured data" loading="lazy" />
    <figcaption>Vet profiles have strong content (4.8 stars, credentials) but zero JSON-LD schema</figcaption>
  </figure>
  <figure class="audit-figure">
    <img src="/img/audit/dutch/our-story.png" alt="Dutch.com Our Story page listing board-certified specialists" loading="lazy" />
    <figcaption>About page names 4+ specialists — only 3 have dedicated profiles</figcaption>
  </figure>
</div>

The about page names 4+ specialists, but only 3 have dedicated profile pages (in the metaobject sitemap). Profiles have strong content (4.8 stars, 554 reviews, 20 years experience) but zero JSON-LD structured data.

**4. About page is thin**
Only 547 words for a trust cornerstone page on a medical site. Should be 1,000–1,500 words.

---

## Structured data

### What exists (strong foundation)

<figure class="audit-figure">
  <img src="/img/audit/dutch/schema-detection.png" alt="Schema markup detection showing Corporation, Service, VeterinaryCare, FAQPage, and Product schema on Dutch.com" loading="lazy" />
  <figcaption>Schema detection — strong foundation with Corporation, Service, VeterinaryCare, FAQPage</figcaption>
</figure>

| Page type | Schema types | Status |
|-----------|-------------|--------|
| Homepage | Corporation, Service, VeterinaryCare, FAQPage | Strong |
| Product pages | Product, BreadcrumbList, FAQPage | Strong |
| Blog posts | Article, BlogPosting | Author = "GMP Agency" (problem) |
| How It Works | FAQPage, Service | Present |

### What's missing (medical authority layer)

<figure class="audit-figure">
  <img src="/img/audit/dutch/dutch-rich-results.png" alt="Google Rich Results Test output for Dutch.com showing existing structured data" loading="lazy" />
  <figcaption>Rich Results Test — existing schema validates, but the medical authority layer is absent</figcaption>
</figure>

| Missing schema | Impact | Where |
|---|:---:|---|
| Physician/Person with credentials | HIGH | Vet profiles — DVM, education, ratings, board certifications |
| MedicalOrganization | HIGH | About page — medical authority signal for AI extraction |
| HowTo | MEDIUM | How It Works — 3-step process is a perfect schema fit |
| AggregateRating / Review | MEDIUM | Products + vet profiles — star ratings in SERPs |
| dateModified on BlogPosting | MEDIUM | All 874 blog posts — freshness signal |

---

## Performance

### Core Web Vitals — field data (what Google uses for ranking)

<figure class="audit-figure">
  <img src="/img/audit/dutch/cwv-field.png" alt="Core Web Vitals assessment card showing all metrics passing for Dutch.com" loading="lazy" />
  <figcaption>All CrUX field metrics pass — this is what Google uses for ranking signals</figcaption>
</figure>

All five CrUX metrics **pass** Google's thresholds:

| Metric | Mobile | Desktop | Threshold | Status |
|--------|--------|---------|-----------|:------:|
| LCP | 1,664ms | 1,411ms | <2,500ms | **Pass** |
| INP | 120ms | 66ms | <200ms | **Pass** |
| CLS | 0.00 | 0.00 | <0.1 | **Pass** |
| FCP | 1,543ms | 1,276ms | <1,800ms | **Pass** |
| TTFB | 588ms | 459ms | <800ms | **Pass** |

### Lab diagnostics (hidden fragility)

| Metric | Desktop | Mobile |
|--------|---------|--------|
| **Lighthouse score** | 49/100 | **29/100** |
| FCP | 1.2s | 6.6s |
| LCP | 2.6s | 16.7s |
| TBT | 2,800ms | 2,160ms |
| TTI | 8.2s | 33.7s |
| CLS | 0 | 0 |

### The lab-field gap

<div class="audit-figure-row">
  <figure class="audit-figure">
    <img src="/img/audit/dutch/pagespeed-scores.png" alt="Lighthouse performance scores showing 49 desktop and 29 mobile for Dutch.com" loading="lazy" />
    <figcaption>Lighthouse: 49 desktop, 29 mobile</figcaption>
  </figure>
  <figure class="audit-figure">
    <img src="/img/audit/dutch/performance-gap.png" alt="Visualization of the lab versus field performance gap on Dutch.com" loading="lazy" />
    <figcaption>The lab-field gap — field passes, lab shows fragility</figcaption>
  </figure>
</div>

Field data passes today, but the massive gap between lab (29 mobile) and field ("FAST" across the board) reveals fragility. The root cause:
- **~1 MB unused JavaScript** — major code-splitting opportunity
- **8+ seconds of main-thread work** on both mobile and desktop
- **~35KB unused CSS**

Any increase in JS weight (new Shopify apps, analytics, third-party scripts) could push field metrics past thresholds. SpeedCurve RUM is already integrated.

---

## Images

### Alt text coverage (site-wide failure)

| Page | Total images | Meaningful alt text | Empty alt="" | Coverage |
|------|:-----------:|:-------------------:|:------------:|:--------:|
| Homepage | 68 | 14 | 54 | **21%** |
| How It Works | 42 | 2 | 40 | **5%** |
| Our Story (About) | 38 | 5 | 33 | **13%** |
| Vet Profile | 34 | 2 | 32 | **6%** |
| Product pages | All | 0 | All | **0%** |

Product images are universally empty. This is both an ADA accessibility compliance risk and a missed image SEO opportunity — especially given that the product sitemap includes 531 image tags for Google Image search.

### Blog image optimization

- 55% of blog images exceed 100KB
- 15 images exceed 1 MB
- 3 PNGs at 6.5–8.2 MB each (21 MB combined) — unoptimized Shutterstock uploads
- All blog images are JPEG/PNG — no WebP conversion

---

## Technical SEO

### Crawlability & indexability

| Check | Status | Details |
|-------|:------:|---------|
| robots.txt | Pass | Well-structured, /search disallowed |
| XML sitemap | Pass | Sitemap index with 5 child sitemaps (1,783 URLs) |
| HTTPS | Pass | All HTTP variants redirect to https://www.dutch.com |
| Redirect chain | Pass | 2 hops (acceptable) |
| Canonicals | Pass | Self-referencing on all crawled pages |
| Meta robots | Pass | Defaults to index,follow |
| HTML lang | Pass | `en` |
| Viewport | Pass | Responsive meta present |
| Favicon | **Fail** | /favicon.ico returns 404 |

### Sitemap breakdown

| Sitemap | URLs | Image tags |
|---------|-----:|:----------:|
| Products | 533 | 531 |
| Blogs | 874 | 867 |
| Collections | 211 | 0 |
| Pages | 162 | 0 |
| Metaobjects (Vet profiles) | 3 | 0 |
| **Total** | **1,783** | |

### Security headers

| Header | Status |
|--------|:------:|
| HSTS | Present (91 days — below recommended 1 year) |
| Content-Security-Policy | Present (`frame-ancestors *` is permissive) |
| X-Content-Type-Options | Present |
| X-XSS-Protection | Present |
| Referrer-Policy | Missing |
| Permissions-Policy | Missing |

---

## Priority action plan

### Critical (do first — highest ROI)

| # | Action | Impact | Effort | Data source |
|:-:|--------|:------:|:------:|:-----------:|
| 1 | **Replace "GMP Agency" authorship** with named DVMs across 874 blog posts + add "Reviewed by" bylines | Critical (E-E-A-T) | Medium | Manual crawl |
| 2 | **Add alt text to product images** — 0% coverage currently. Then homepage (21%), vet profiles (6%) | High (accessibility + SEO) | Medium | Manual crawl |
| 3 | **Consolidate 6+ duplicate page pairs** with 301 redirects | High (fixes duplicate titles, meta descriptions, link dilution) | Low | Ubersuggest |

### High (fix within 1 week)

| # | Action | Impact | Effort | Data source |
|:-:|--------|:------:|:------:|:-----------:|
| 4 | **Convert 3 PNG blog images** (21 MB combined) to WebP | High (page speed) | Low | Screaming Frog |
| 5 | **Write unique meta descriptions** for ~40 pages using "Dutch" placeholder | Medium (CTR) | Medium | Ubersuggest |
| 6 | **Expand short title tags** on 288 collection/state pages with descriptive keywords | Medium (ranking signal) | Medium | Ubersuggest |
| 7 | **Add H1 tags** to blog indexes + key landing pages (22 pages) | Medium (on-page) | Low | Ubersuggest + SF |
| 8 | **Add Physician/Person schema** to vet profile pages | High (medical authority for AI extraction) | Low | Manual crawl |

### Medium (fix within 1 month)

| # | Action | Impact | Effort | Data source |
|:-:|--------|:------:|:------:|:-----------:|
| 9 | Implement **llms.txt** for AI crawler guidance | Medium (GEO) | Low | Manual crawl |
| 10 | Add `dateModified` to all 874 BlogPosting schema | Medium (freshness) | Low | Manual crawl |
| 11 | **Reduce unused JS** (~1 MB) via code splitting | Medium (performance) | High | Manual crawl |
| 12 | Review **5 noindexed blog posts** — remove noindex if content is valuable | Medium (traffic recovery) | Low | Screaming Frog |
| 13 | **Compress all blog images** over 500KB (24 images) to <100KB | Medium (page speed) | Low | Screaming Frog |
| 14 | Add **MedicalOrganization schema** to About page | Medium (authority) | Low | Manual crawl |
| 15 | Build **internal linking strategy** between related blog posts (158 orphaned pages) | Medium (crawl equity) | Medium | Screaming Frog |
| 16 | Add **noindex** to quiz, registration, and utility pages (14 thin content pages) | Low (cleanup) | Low | Ubersuggest |

### Low (backlog)

| # | Action | Data source |
|:-:|--------|:-----------:|
| 17 | Add favicon (currently 404) | Manual crawl |
| 18 | Fix OG image protocol (http → https) | Manual crawl |
| 19 | Add HowTo schema to How It Works page | Manual crawl |
| 20 | Add AggregateRating schema to products + vet profiles | Manual crawl |
| 21 | Increase HSTS max-age to 1 year | Manual crawl |
| 22 | Fix duplicate H1 rendering bug in Shopify theme (5 pages) | Screaming Frog |
| 23 | Fix H1 non-sequential issue in template (87% of blog pages) | Screaming Frog |
| 24 | Shorten 131 overly long title tags on treatment/product pages | Ubersuggest |
| 25 | Re-crawl blog at 1 req/2s for complete dog content analysis | Screaming Frog |

---

## Appendix: Data sources & tools

| Tool | Data collected | Files |
|------|---------------|-------|
| **Ubersuggest** | Site-wide on-page audit (9 CSV exports) | `ubersuggest site audit dutch.com/` |
| **Screaming Frog** | Blog crawl — 7 CSV exports (response codes, meta, H1, images, canonicals, internal links, issues) | `screaming-frog-dutch.com:pages:blogs/` |
| **PageSpeed Insights API** | Mobile + desktop Lighthouse scores, CrUX field data | `manual-crawl-data/data/psi_*.json` |
| **ChatGPT** | 10 prompts, 20 responses across 2 topic categories (Feb 2026) | Ubersuggest AI Search Visibility |
| **Google AI Mode** | Live query tests (3 queries, Feb 2026) | `manual-crawl-data/data/ai_mode_text.txt` |
| **Manual HTML analysis** | robots.txt, sitemaps, schema, headings, alt text, security headers | `manual-crawl-data/` |

> The "retainer gap analysis" that accompanies this audit was originally written from the perspective of pitching Dutch as a client. This portfolio uses the audit as a work sample, so the focus is on clarity, evidence, and prioritization — not sales positioning.

---

<style>
.audit-hero{
  padding: 26px 22px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.10);
  background:
    radial-gradient(1200px 600px at 20% 20%, rgba(255,140,50,.10), transparent 60%),
    radial-gradient(900px 500px at 80% 30%, rgba(120,160,255,.10), transparent 55%),
    rgba(10,12,16,.55);
  backdrop-filter: blur(10px);
}
.audit-hero .kicker{
  font-size:12px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color: rgba(255,140,50,.85);
  margin-bottom: 10px;
}
.audit-hero .subhead{
  margin-top: 10px;
  color: rgba(255,255,255,.72);
  font-size: 16px;
  line-height: 1.55;
  max-width: 70ch;
}
.audit-hero .meta{
  display:flex; flex-wrap:wrap; gap:10px 18px;
  margin-top: 14px;
  color: rgba(255,255,255,.68);
  font-size: 13px;
}
.audit-hero .meta span{
  color: rgba(255,255,255,.45);
  margin-right: 6px;
}

/* Client logo in hero */
.audit-client-logo{
  width: 64px;
  height: 64px;
  border-radius: 14px;
  margin-bottom: 8px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.06);
  object-fit: contain;
}

/* Single figure */
.audit-figure{
  margin: 20px 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(10,12,16,.55);
}
.audit-figure img{
  width: 100%;
  display: block;
}
.audit-figure figcaption{
  padding: 10px 14px;
  font-size: 13px;
  color: rgba(255,255,255,.55);
  border-top: 1px solid rgba(255,255,255,.08);
  line-height: 1.45;
}

/* Side-by-side figures */
.audit-figure-row{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 20px 0;
}
@media (max-width: 640px){
  .audit-figure-row{
    grid-template-columns: 1fr;
  }
}
</style>
