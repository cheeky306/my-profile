---
title: Methodology
description: How I audit — frameworks, scoring, tools, and standards.
---

<div class="page-hero">

<div class="kicker">FRAMEWORK • SCORING • STANDARDS</div>

# Methodology

<div class="subhead">
How I structure audits, what I measure, and the standards I hold work against. Transparent by default — if you've read the Dutch.com audit on this site, you've already seen this framework in action.
</div>

</div>

---

## Philosophy

I treat SEO as an engineering discipline. That means:

- **Every recommendation has a data source.** If I can't point to the crawl output, the schema test, the CrUX data, or the AI Mode screenshot, I don't make the claim.
- **Lab data identifies risk. Field data is truth.** A Lighthouse score of 29 doesn't mean rankings are broken — but it does mean the site is one Shopify app install away from a real problem.
- **Not everything broken is worth fixing first.** A missing favicon and 874 blog posts with agency authorship are both "issues." They are not the same priority.
- **Audits should ship as documentation.** Readable by developers, marketers, and leadership — not buried in spreadsheets only an SEO can parse.

---

## Audit pipeline

Every audit follows the same seven-category framework. I run three independent data collection passes, then cross-reference findings to separate real issues from noise.

### Data collection (3 passes)

<div class="method-grid">

<div class="method-card">
<h4>Pass 1: Automated crawl</h4>

Full-site crawl via **Screaming Frog** or **Ubersuggest** — response codes, meta tags, headings, images, canonicals, internal links, hreflang, structured data extraction. Exports to CSV for analysis.

**What it catches:** Duplicate titles, missing H1s, broken links, redirect chains, orphan pages, image bloat, thin content at scale.

</div>

<div class="method-card">
<h4>Pass 2: Targeted crawl</h4>

Focused crawl of a specific content vertical (e.g., blog, product pages) via **Screaming Frog** with custom extraction. Slower crawl rate to avoid rate limiting. Captures content quality metrics (word count, readability), internal linking depth, and template-level issues.

**What it catches:** Template bugs (duplicate H1 rendering), content silo gaps, internal linking architecture problems, noindex misconfigurations.

</div>

<div class="method-card">
<h4>Pass 3: Manual analysis</h4>

Hand-inspection of key pages — homepage, core landing pages, product pages, author/about pages. Includes **PageSpeed Insights API** (mobile + desktop), **CrUX field data**, **Google AI Mode live queries**, schema validation, alt text audit, security header review.

**What it catches:** E-E-A-T signals (authorship, credentials, review bylines), schema gaps, performance fragility (lab-field gap), AI search visibility, accessibility issues that automated tools miss.

</div>

</div>

### Why three passes?

Single-tool audits miss things. Ubersuggest found 541 on-page issues across Dutch.com that Screaming Frog's blog-only crawl couldn't see. Screaming Frog found 21 MB in unoptimized PNG images that Ubersuggest doesn't check. Manual analysis found the "GMP Agency" authorship problem across 874 posts — the single highest-impact finding — that neither automated tool flagged.

Cross-referencing is where the real findings emerge.

---

## Scoring framework

### Seven categories, weighted by real-world impact

| # | Category | Weight | What I measure |
|:-:|----------|:------:|----------------|
| 1 | Technical SEO | 25% | Crawlability, indexation, canonicals, redirects, robots.txt, sitemaps, security headers |
| 2 | Content quality (E-E-A-T) | 25% | Author credibility, YMYL compliance, topical authority, content depth, freshness, duplicate/thin content |
| 3 | On-page SEO | 20% | Title tags, meta descriptions, heading hierarchy, internal linking, URL structure, keyword targeting |
| 4 | Schema / Structured data | 10% | JSON-LD validation, rich result eligibility, missing entity types, medical/product/review markup |
| 5 | Performance (CWV) | 10% | LCP, INP, CLS via field data (CrUX) and lab diagnostics (Lighthouse). JS audit for unused code |
| 6 | Images | 5% | Alt text coverage, format optimization (WebP/AVIF), file size, lazy loading, decorative vs. content classification |
| 7 | AI search readiness (GEO) | 5% | Crawler access, llms.txt, passage-level citability, brand mentions in AI responses, competitive positioning |

### Why these weights?

Technical SEO and E-E-A-T carry the most weight (25% each) because they represent the foundation. A site with perfect title tags but broken crawlability won't rank. A YMYL health site with impeccable Core Web Vitals but agency authorship on 874 blog posts has a trust problem that no performance optimization can fix.

AI search readiness is weighted at 5% today — it's emerging, not dominant. That weight will increase as AI Overviews, ChatGPT web search, and Perplexity become larger traffic sources.

### Score bands

| Score | Rating | What it means |
|------:|--------|---------------|
| 90–100 | Excellent | Competitive advantage. Minor optimizations only. |
| 75–89 | Good | Solid foundation. Strategic improvements available. |
| 60–74 | Needs work | Significant gaps affecting visibility. Priority action plan needed. |
| 40–59 | Poor | Critical issues actively suppressing outcomes. |
| 0–39 | Critical | Fundamental problems. Immediate intervention required. |

The overall score is a **weighted average** across all seven categories. Individual category scores use a 0–100 scale based on the ratio of issues found to expected best practices for that site type and industry.

---

## Category deep dives

### 1. Technical SEO (25%)

| Check | Standard | Tool |
|-------|----------|------|
| robots.txt | Present, well-structured, no accidental blocks | Manual |
| XML sitemap | Referenced in robots.txt, all URLs return 200, lastmod accurate | Screaming Frog |
| HTTPS | All variants redirect to canonical HTTPS version | Manual |
| Redirect chains | Max 2 hops, no loops | Screaming Frog |
| Canonicals | Self-referencing on all indexable pages, no conflicts | Screaming Frog |
| Hreflang | Correct language/region codes, reciprocal tags (if applicable) | Manual |
| Favicon | Returns 200 (trivial but common miss) | Manual |
| Security headers | HSTS (1yr+), CSP, X-Content-Type-Options, Referrer-Policy | Chrome DevTools |

### 2. Content quality & E-E-A-T (25%)

This is where I spend the most manual time. Automated tools can count words but they can't evaluate author credibility.

**What I look for:**
- **Experience:** Customer reviews, testimonials, case studies, first-hand evidence.
- **Expertise:** Author credentials, bylines, "reviewed by" signals. For YMYL: named professionals with verifiable qualifications.
- **Authoritativeness:** External citations, BBB/industry accreditation, schema (Corporation, MedicalOrganization), backlink quality.
- **Trustworthiness:** Contact information, clear pricing, privacy policy, SSL, verified reviews.

**YMYL escalation:** For health, finance, or legal content, E-E-A-T requirements are significantly higher. Agency authorship on a veterinary health blog is a minor issue for a recipe site — it's a critical finding on a YMYL telehealth platform.

### 3. On-page SEO (20%)

| Element | Standard |
|---------|----------|
| Title tags | 30–65 characters, unique, includes primary keyword, no double brand suffixes |
| Meta descriptions | 70–155 characters, unique, compelling for CTR, not just "Dutch" |
| H1 | One per page, descriptive, matches page intent |
| Heading hierarchy | Sequential (H1 → H2 → H3), no skipped levels |
| Internal linking | No orphan pages, descriptive anchor text, logical site architecture |
| URL structure | Lowercase, hyphenated, keyword-aligned, no internal naming leaks (hp-lander, vet-exact) |
| Duplicate pages | Consolidated with 301 redirects, not left to compete |

### 4. Schema / Structured data (10%)

I validate what exists and identify what's missing for the site type.

**For e-commerce:** Product, BreadcrumbList, FAQPage, Review/AggregateRating, Organization.
**For health/medical:** Physician/Person, MedicalOrganization, HowTo, MedicalCondition.
**For all sites:** Corporation/Organization, Article/BlogPosting (with proper author), WebSite with SearchAction.

**Standard:** JSON-LD format. Validates in Google Rich Results Test. `dateModified` present on all time-sensitive content.

### 5. Performance / Core Web Vitals (10%)

I always report both field and lab data, and I always explain the gap.

| Metric | Source | Threshold | What it tells you |
|--------|--------|:---------:|-------------------|
| LCP | CrUX (field) | <2.5s | Real user loading experience |
| INP | CrUX (field) | <200ms | Real user interactivity |
| CLS | CrUX (field) | <0.1 | Real user visual stability |
| Lighthouse score | Lab | — | Risk indicator, not ranking signal |
| Unused JS | Lab | — | Code splitting opportunity |
| TBT | Lab | — | Main thread blocking (proxy for INP) |

**My stance:** If field data passes and lab data fails, the site isn't broken — but it's fragile. I flag it as risk, not panic.

### 6. Images (5%)

| Check | Standard |
|-------|----------|
| Alt text | Descriptive on content images, empty on decorative. Never missing entirely. |
| Format | WebP or AVIF preferred. No unoptimized PNGs above 500KB. |
| File size | Target <100KB per image. Flag anything >1MB. |
| Lazy loading | All below-fold images use `loading="lazy"`. |
| Product images | Alt text includes product name + key descriptor. Included in sitemap. |

### 7. AI search readiness / GEO (5%)

This is the newest category and the one evolving fastest.

| Check | Standard |
|-------|----------|
| AI crawler access | GPTBot, ClaudeBot, PerplexityBot not blocked in robots.txt |
| llms.txt | Present at `/llms.txt` or `/.well-known/llms.txt` |
| Passage-level citability | Content structured with clear claims, stats, and attributable statements |
| Brand mentions | Test 3–5 relevant queries in Google AI Mode, note citation sources |
| Competitive positioning | Map where brand appears vs. competitors in AI responses |
| Structured data for AI | Entities (Person, Organization, Product) extractable by LLMs |

**How I test:** Live queries in Google AI Mode with screen capture. Not simulated, not estimated — actual results with timestamps.

---

## Prioritization matrix

Every finding gets a priority based on two dimensions: **impact on search visibility** and **implementation effort**.

| Priority | Impact | Effort | Example |
|----------|--------|--------|---------|
| **Critical** | Actively suppressing rankings or trust | Any | 874 blog posts with agency authorship on a YMYL site |
| **High** | Significant opportunity or risk | Low–Medium | Adding Physician schema to vet profiles, compressing 21 MB of PNGs |
| **Medium** | Meaningful improvement | Medium | Expanding 288 short title tags, building internal linking strategy |
| **Low** | Marginal or cosmetic | Low | Adding favicon, fixing OG image protocol |

I don't give 50-item flat lists. I give a ranked action plan where item #1 is the thing you should do tomorrow and item #25 is the thing you do when everything else is done.

---

## Tools

| Category | Tools |
|----------|-------|
| Site crawling | Screaming Frog, Ubersuggest, Chrome DevTools |
| Performance | PageSpeed Insights API, Lighthouse, CrUX, WebPageTest |
| Analytics | GA4 (certified), Google Search Console, Google Data Studio |
| Keyword research | Ahrefs, SEMrush |
| Schema | Schema.org Validator, Google Rich Results Test, manual JSON-LD inspection |
| AI visibility | Google AI Mode (live testing), manual citation checks, robots.txt review |
| Automation | Claude Code (custom scripts for meta generation, schema markup, content analysis) |
| CMS | WordPress, Shopify, headless CMS (Sanity, Ghost) |
| Local SEO | Google Business Profile, Bing Places |

---

## What a finished audit looks like

The [Dutch.com audit](/audit/dutch) on this site is a working example of this methodology. It includes:
- Three independent data sources cross-referenced
- Weighted scoring across all 7 categories (overall: 62/100)
- 14 evidence screenshots with captions
- 25-item prioritized action plan with impact, effort, and data source attribution
- Live Google AI Mode test results with timestamps

That's the standard I hold every audit to.

---

<style>
.page-hero{
  padding: 26px 22px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.10);
  background:
    radial-gradient(1200px 600px at 20% 20%, rgba(255,140,50,.10), transparent 60%),
    radial-gradient(900px 500px at 80% 30%, rgba(120,160,255,.10), transparent 55%),
    rgba(10,12,16,.55);
  backdrop-filter: blur(10px);
}
.page-hero .kicker{
  font-size:12px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color: rgba(255,140,50,.85);
  margin-bottom: 10px;
}
.page-hero .subhead{
  margin-top: 10px;
  color: rgba(255,255,255,.72);
  font-size: 16px;
  line-height: 1.55;
  max-width: 70ch;
}
.method-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
  margin: 16px 0;
}
@media (max-width: 840px){
  .method-grid{
    grid-template-columns: 1fr;
  }
}
.method-card{
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
}
.method-card h4{
  margin: 0 0 8px;
  font-size: 14px;
  color: rgba(255,140,50,.75);
}
.method-card p{
  margin: 0 0 10px;
  font-size: 14px;
  color: rgba(255,255,255,.65);
  line-height: 1.55;
}
.method-card p:last-child{
  margin-bottom: 0;
}
</style>
