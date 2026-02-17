---
title: Methodology
description: How I audit — frameworks, scoring, tools, and standards.
---

<div class="page-hero">

<div class="kicker">FRAMEWORK • SCORING • STANDARDS</div>

# Methodology

<div class="subhead">
How I structure audits, what I measure, and the standards I hold work against. Transparent by default.
</div>

</div>

---

## Audit framework

Every audit follows the same structured pipeline. No shortcuts, no templated filler.

### 1. Technical SEO (25% weight)
Crawlability, indexation, canonicals, redirects, hreflang, security headers, robots.txt, XML sitemaps.

**Tools:** Screaming Frog, Chrome DevTools, manual crawl inspection.

### 2. Content quality & E-E-A-T (25% weight)
Author credibility, YMYL compliance, topical authority, content depth, freshness signals, thin/duplicate content detection.

**Framework:** Google's E-E-A-T guidelines (Dec 2025 update extending to all competitive queries).

### 3. On-page SEO (20% weight)
Title tags, meta descriptions, heading hierarchy, internal linking, keyword targeting, URL structure.

**Standard:** Every page should have one clear intent and one primary keyword target.

### 4. Schema / Structured data (10% weight)
JSON-LD validation, rich result eligibility, missing entity types, medical/product/review markup where applicable.

**Tools:** Schema.org validator, Google Rich Results Test, manual JSON-LD inspection.

### 5. Performance / Core Web Vitals (10% weight)
LCP, INP, CLS measured via both field data (CrUX) and lab diagnostics (Lighthouse). JS audit for unused code.

**Standard:** Field data is truth. Lab data identifies risk.

### 6. Images (5% weight)
Alt text coverage, format optimization (WebP/AVIF), lazy loading, dimension attributes, decorative vs. content images.

### 7. AI Search readiness / GEO (5% weight)
Crawler access (GPTBot, ClaudeBot, PerplexityBot), llms.txt, citation-worthy content structure, brand mention tracking in AI responses.

---

## Scoring

| Score | Rating | Meaning |
|---:|---|---|
| 90–100 | Excellent | Competitive advantage. Minor optimizations only. |
| 75–89 | Good | Solid foundation. Strategic improvements available. |
| 60–74 | Needs work | Significant gaps affecting visibility. |
| 40–59 | Poor | Critical issues suppressing outcomes. |
| 0–39 | Critical | Fundamental problems. Immediate action required. |

Scores are **weighted averages** across all seven categories. Weights reflect real-world impact on search visibility.

---

## Prioritization

Findings are ranked by impact and effort:

| Priority | Criteria |
|---|---|
| **Critical** | Actively suppressing rankings or trust. Fix first. |
| **High** | Significant opportunity. High leverage, moderate effort. |
| **Medium** | Meaningful improvement. Standard roadmap items. |
| **Low** | Nice to have. Marginal gains. |

---

## Tools I use

| Category | Tools |
|---|---|
| Crawling | Screaming Frog, Chrome DevTools |
| Performance | Lighthouse, CrUX, WebPageTest |
| Analytics | GA4, Google Search Console |
| Research | Ahrefs, SEMrush |
| Schema | Schema.org Validator, Rich Results Test |
| AI Visibility | Google AI Mode (live testing), manual citation checks |
| Content | Manual review, readability scoring |

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
</style>
