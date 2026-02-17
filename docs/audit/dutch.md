---
title: Dutch.com Audit
description: SEO + AI Visibility (GEO) audit report — methodology, limitations, findings, and prioritized action plan.
---

<AuditSelector />

<div class="audit-hero">

<div class="kicker">SEO AUDIT • AI VISIBILITY • TECHNICAL SEO</div>

# Dutch.com — SEO + AI Visibility Audit

<div class="subhead">
A structured, evidence-based snapshot of Dutch's search foundation (technical, content trust, on-page, schema, performance, images) plus AI search visibility (GEO).
</div>

<div class="meta">
  <div><span>Date:</span> Feb 16, 2026</div>
  <div><span>Type:</span> E-commerce + Veterinary Telehealth</div>
  <div><span>Platform:</span> Shopify + Cloudflare</div>
</div>

</div>

---

## Read this first: Methodology & limitations

### Methodology (what I did)
- **Technical SEO review** across crawlability, indexability, redirects/canonicals, and security headers (site-level checks).
- **Performance assessment** using both:
  - **Field reality check (CrUX)** where available, and
  - **Lab diagnostics (Lighthouse)** to find hidden fragility and JS bloat.
- **Structured data review**: what's present vs. missing (especially for medical authority signals).
- **Image accessibility + image SEO review** (alt text coverage on homepage + products).
- **AI Search Visibility (GEO) testing** using live **Google AI Mode** queries (captured Feb 2026), plus a GEO scoring breakdown (crawler access, citability, brand visibility, competition, structured data, llms.txt).

### Limitations (what this is *not*)
- **Snapshot in time:** findings reflect Dutch.com as of Feb 16, 2026 and can drift as content, templates, and SERPs change.
- **No internal analytics access:** no GSC/GA4 access was used for this version, so search demand, conversion impact, and page-level performance are inferred from observable signals only.
- **Lab vs. field gap:** Lighthouse may look harsh even when field data passes; this report uses lab data to spot *risk* (JS bloat) rather than claim rankings are currently broken.
- **AI Mode tests are small-sample:** a few queries can demonstrate visibility patterns, but do not represent full "share of voice" without ongoing monitoring.

> Note: The "retainer gap analysis" that accompanies this audit was originally written from the perspective of pitching Dutch as a client. I'm now using the audit as a work sample for SEO job applications, so the portal focuses on clarity, evidence, and prioritization (not sales positioning).

---

## Executive summary

### Overall SEO Health Score: **62/100**
| Category | Score | Weight |
|---|---:|---:|
| Technical SEO | 78/100 | 25% |
| Content Quality (E-E-A-T) | 55/100 | 25% |
| On-Page SEO | 65/100 | 20% |
| Schema / Structured Data | 80/100 | 10% |
| Performance (CWV) | 45/100 | 10% |
| Images | 30/100 | 5% |
| AI Search Readiness | 40/100 | 5% |

### Top critical issues (highest impact)
1) **Homepage + product images are largely "invisible"** (alt text empty at scale).
2) **Blog authorship credibility issue:** 874 posts attributed to "GMP Agency" (YMYL risk for veterinary health).
3) **Performance risk:** mobile Lighthouse **28/100** driven by ~**1MB unused JS** and heavy main-thread work.
4) **Missing llms.txt** (AI search guidance).
5) **Missing medical authority schema** (Physician / MedicalOrganization / AggregateRating / HowTo).

### Quick wins (fast + high leverage)
- Add descriptive alt text (products first).
- Replace agency author attribution with **named DVM** authors + "reviewed by" bylines.
- Add favicon (minor, but easy trust signal).
- Implement llms.txt.
- Add `dateModified` to Article schema.

---

## AI Search Visibility (GEO)

### GEO Score: **60/100**
Breakdown includes crawler access, citability, brand visibility, competitive position, structured data, and llms.txt readiness.

### Key finding: stronger visibility than expected (but undefended)
Live Google AI Mode testing showed:
- **#1** for "pet telehealth comparison 2026"
- Featured in comparisons for "best online vet service 2026"
- **2nd** for "online vet prescription anxiety…" (Vetster leads)

### What's driving AI visibility today
- AI is heavily citing **third-party sources** (e.g., Sarasota Magazine, MarketWatch, Reddit) rather than Dutch's own comparison pages.
- Dutch's "chronic/ongoing care" positioning wins comparison intent—but can limit non-comparison discovery.

---

## Highest-impact findings (what's actually suppressing outcomes)

### 1) Content Trust / E-E-A-T (YMYL)
**Problem:** Veterinary health content is YMYL; "GMP Agency" authorship across **874 posts** weakens credibility signals.
**Fix:** Assign content to named DVM authors + add medical review bylines + build vet author profile pages.

### 2) Images (SEO + accessibility)
**Problem:** 54/68 homepage images have empty alt text; product images are also empty.
**Fix:** Prioritize product image alt text first; then homepage/system images.

### 3) Performance (risk, not panic)
Field signals can pass, but lab diagnostics show **fragility** due to unused JS and heavy main-thread work.
**Fix:** Reduce unused JS (~1MB) via code splitting and dependency trimming.

### 4) Structured data (already strong, missing the "medical authority layer")
What's present is solid (Brand/Corporation, Service, VeterinaryCare, FAQPage).
What's missing is high impact for AI + health credibility: **Physician**, **MedicalOrganization**, **HowTo**, **AggregateRating**.

---

## Priority action plan

### Critical (do first)
1) Fix blog authorship to named DVMs (874 posts)
2) Add alt text to product images (80% images effectively invisible)

### High
3) Audit & reduce unused JavaScript (~1MB)
4) Create llms.txt (AI search signal)
5) Add Physician schema to vet profiles (medical authority extraction)

### Medium
6) Create condition-specific landing pages (anxiety, allergies, skin) to compete on prescription queries

---

## Appendix: "Retainer" analysis context (why it exists)
A separate gap analysis document exists that outlines what would be required to turn this snapshot audit into an ongoing $5K/mo monitoring + execution retainer (SOV tracking dashboards, query matrices, etc.). That was written when Dutch was a target client; it's included only as supporting strategy material and not as the goal of this portfolio site.

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
</style>
