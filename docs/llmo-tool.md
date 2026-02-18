---
title: LLMO Blog Tool
description: A multi-agent content pipeline that produces GEO/LLMO-optimized content — built with Claude Code agent teams and human-in-the-loop approval.
---

<div class="page-hero">

<div class="kicker">AGENT TEAMS &bull; HUMAN-IN-THE-LOOP &bull; GEO/LLMO</div>

# LLM-O Blog Tool

<div class="subhead">
A production-grade content pipeline I built using AI agent teams and human oversight to produce blog content optimized for LLM extraction — not just traditional search. Built to solve the structural gap between what AI search engines need and what most content tools produce.
</div>

</div>

---

## TL;DR

Content for AI search is a different game. Traditional SEO content — keyword-stuffed, opinion-heavy, lightly sourced — gets filtered out by generative engines. To earn citations in AI-generated answers, content needs to be:

- **Structured for extraction** — chunked sections, answer-first sentences, scannable tables
- **Evidence-dense** — every claim sourced, every statistic cited, every quote attributed
- **Editorially governed** — consistent terminology, brand-aligned tone, no fluff

This pipeline enforces all three. Systematically. Every time.

---

## The problem

Most content tools optimize for humans reading in a browser. That worked for 20 years of Google's link-based index. It doesn't work for AI search.

LLMs like ChatGPT, Perplexity, and Google AI Mode don't read pages the way humans do. They extract **passages** — structured claims, comparative tables, attributed statistics. Content that buries its answer in paragraph 6 behind a 200-word intro doesn't get cited. Content that leads with a clear, extractable claim does.

The gap:
- **Traditional SEO content** optimizes for click-through, dwell time, and keyword density
- **LLM-optimized content** optimizes for passage-level extraction, citation-worthiness, and structured claims

Most content tools don't know the difference. This one does.

---

## What I built

A **10-step content pipeline** orchestrated by 6 specialist AI agents with human approval gates at critical decision points.

The pipeline takes raw research (URLs, PDFs, documents) and produces publish-ready Markdown with:
- **Answer-first structure** — every H2/H3 opens with a direct, extractable claim. Not "Many businesses struggle with..." but "WooCommerce store owners fail to optimize for AI agents because they write for humans first."
- **Sourced claims with citation trails** — every factual claim is categorized as `[Verified]`, `[Needs source]`, or `[Hypothesis]`. Nothing ships unsourced.
- **GEO-optimized chunking** — H2/H3 every 200–400 words, paragraphs capped at 4 lines, key claims isolated in their own paragraph for extraction
- **Comparative tables** — with headers, captions, and structured data that LLMs can parse directly
- **Publishing metadata and maintenance schedules** — content freshness tracking with review dates based on topic volatility

<a class="tool-repo-link" href="https://github.com/cheeky306/geo-content-pipeline" target="_blank" rel="noopener">View on GitHub &rarr;</a>

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     GEO CONTENT PIPELINE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  INPUT                    PROCESSING                  OUTPUT    │
│                                                                 │
│  input/urls.txt    ──►  ┌──────────────┐                        │
│  input/downloads/  ──►  │   Scraper    │  ──►  Knowledge       │
│                         │  (Python)    │       Ledger (.md)    │
│                         └──────────────┘                        │
│                                │                                │
│                                ▼                                │
│  knowledge/brand/  ──►  ┌──────────────────────────────────┐    │
│                         │     10-STEP WORKFLOW              │    │
│                         │                                  │    │
│                         │  Step 0:  Knowledge Ingestion    │    │
│                         │  Step 1:  Intake & Framing       │    │
│                         │  Step 2:  Outline Validation     │    │
│                         │  Step 3:  Draft Generation       │    │
│                         │  Step 4:  Evidence & Citations   │    │
│                         │  Step 5:  GEO Optimization       │    │
│                         │  Step 6:  Editorial QA           │    │
│                         │  Step 7:  Publishing Card        │    │
│                         │  Step 8:  Human Approval         │    │
│                         │  Step 9:  Post-Publish Verify    │    │
│                         │  Step 10: Maintenance Schedule   │    │
│                         └──────────────────────────────────┘    │
│                                                                 │
│                                                    output/      │
│                                                    ├── drafts/  │
│                                                    ├── ledgers/ │
│                                                    └── cards/   │
├─────────────────────────────────────────────────────────────────┤
│  INTERFACES                                                     │
│                                                                 │
│  .claude/    Claude Code  (6 agent team + CLAUDE.md)            │
│  .agent/     Antigravity  (workflows, skills, rules)            │
└─────────────────────────────────────────────────────────────────┘
```

### The 10-step workflow

| Step | Name | What happens | Human checkpoint? |
|:----:|------|-------------|:-:|
| 0 | Knowledge ingestion | Python scraper processes URLs + documents into structured knowledge ledger with authority scores and TF-IDF topic extraction | |
| 1 | Intake & framing | Validate topic, define reader profile (role, knowledge level, pain point), set thesis statement and success criteria | Yes |
| 2 | Outline validation | Design H2/H3 structure, lock outline before writing begins — prevents drift | Yes |
| 3 | Draft generation | Write complete v1 following locked outline, answer-first format | |
| 4 | Evidence & citations | Categorize every claim: `[Verified]`, `[Needs source]`, `[Hypothesis]`. Build citation TODO list. Clear all unsourced claims. | |
| 5 | GEO optimization | Enforce paragraph limits (4 lines max), strengthen answer-first sentences, chunk sections at 200–400 words, optimize tables for extraction | |
| 6 | Editorial QA | PASS/FAIL quality gate across 10 categories — structure, citations, GEO compliance, taxonomy, readability | |
| 7 | Publishing card | Generate metadata: title, slug, excerpt, taxonomy tags, schema recommendations, distribution checklist | |
| 8 | **Human approval** | Explicit **APPROVE** or **REQUEST CHANGES** — no content ships without this | **Yes** |
| 9 | Post-publish verify | Test live rendering, validate links, confirm metadata | |
| 10 | Maintenance scheduling | Set review dates based on topic volatility, track sections likely to decay | |

**Five key principles govern the pipeline:**
1. **Structure precedes prose.** Outline is locked before writing begins.
2. **Evidence precedes authority.** Claims must be sourced or explicitly labeled.
3. **Humans approve meaning.** Agents propose; humans decide intent.
4. **Systems enforce standards.** QA gates prevent non-compliant content from shipping.
5. **Authority compounds over time.** Maintenance schedules preserve content value.

---

## The agent team

The pipeline runs on **6 specialist agents** I designed and configured through Claude Code's agent teams framework. Each agent has defined tools, responsibilities, and handoff points — coordinated via `TaskCreate`/`TaskUpdate`/`SendMessage`.

<div class="agent-grid">

<div class="agent-card">
<div class="agent-role">ORCHESTRATOR</div>
<h4>Content Lead</h4>

Coordinates the full pipeline. Creates tasks, assigns agents, enforces step order, manages human approval gates. Has access to `Task`, `TaskCreate`, `TaskUpdate`, `TaskList`, `SendMessage`. Never writes content directly — only delegates and reviews.

</div>

<div class="agent-card">
<div class="agent-role">STEP 0</div>
<h4>Knowledge Ingester</h4>

Runs the Python scraper (`knowledge_ledger_agent.py`) against URLs and documents. Uses BeautifulSoup for web scraping, pdfplumber for PDF extraction, and scikit-learn TF-IDF for topic extraction. Produces structured knowledge ledgers with authority scores and conflict flags.

</div>

<div class="agent-card">
<div class="agent-role">STEPS 1–3</div>
<h4>Content Writer</h4>

Translates the topic request into an editorial brief: reader profile, thesis statement, success criteria, risk assessment. Designs the H2/H3 outline and locks it before drafting. Writes the complete v1 draft following the locked structure — answer-first sentences, GEO-native format.

</div>

<div class="agent-card">
<div class="agent-role">STEPS 4–5</div>
<h4>Evidence Optimizer</h4>

Extracts every factual claim from the draft and categorizes it. Matches claims to knowledge base sources. Inserts inline citations with specific formats: statistics get "X% according to [Org] ([Year])", best practices get "[Org] recommends [practice]". Then runs the GEO pass: paragraph limits, section chunking, extraction-optimized claims in standalone paragraphs.

</div>

<div class="agent-card">
<div class="agent-role">STEP 6</div>
<h4>Editorial QA</h4>

Objective PASS/FAIL quality gate — not a subjective review. Checks 10 categories: structural completeness (TL;DR, Quick Answer, FAQs, tables), paragraph length (all under 4 lines), taxonomy (exactly one content type, topic, and pillar tag), citation coverage, GEO compliance, and factual consistency against the knowledge ledger. Read-only tools — cannot modify the draft.

</div>

<div class="agent-card">
<div class="agent-role">STEPS 7–10</div>
<h4>Publisher</h4>

Generates the publishing card: title, slug, excerpt (155–160 chars), taxonomy tags, canonical URL, schema recommendations. Requests explicit human APPROVE/REQUEST CHANGES. After approval, verifies live rendering and sets maintenance schedules with review dates based on topic volatility.

</div>

</div>

---

## Why human-in-the-loop matters

Fully automated content pipelines produce content that reads like it was fully automated. The failure mode isn't grammar or structure — it's **meaning**.

An LLM can write a technically correct comparison of Dutch Pet vs. Vetster. It cannot decide whether the comparison should position Dutch as the budget option or the chronic-care specialist. That's a strategic decision that requires human judgment.

This pipeline enforces human checkpoints at three points:
- **Step 1** — approve the editorial framing (audience, thesis, success criteria)
- **Step 2** — approve the locked outline before any writing begins
- **Step 8** — approve the final draft after evidence, optimization, and QA

The human sees complete, quality-checked work at each gate and makes one decision: approve or request changes. If QA fails, the content loops back to the appropriate agent for fixes — it never ships non-compliant.

The result: agent speed with human editorial control.

---

## The GEO optimization layer (Step 5)

This is the step that makes the content fundamentally different from what traditional tools produce. The Evidence Optimizer runs 9 specific optimization passes:

1. **Paragraph limits** — scan all body paragraphs, break anything over 4 lines, ensure each paragraph focuses on one idea
2. **Answer-first sentences** — rewrite section openers to be direct and standalone (could this sentence be extracted and still make sense?)
3. **Section chunking** — audit word count between headings, ensure no section exceeds 400 words without a subheading
4. **Table optimization** — verify tables are scannable, add headers and captions, ensure data supports surrounding text
5. **List optimization** — ensure items are actionable and parallel in structure, break lists over 10 items into sub-categories
6. **Definition refinement** — identify key terms, define each once clearly, reuse consistent terminology throughout
7. **Extraction optimization** — isolate claims likely to be extracted by AI Overviews or featured snippets into their own paragraphs
8. **Internal linking** — place pillar link placeholders at relevant section boundaries
9. **Over-optimization check** — flag if optimizations remove nuance or create redundancy

Each pass produces a measurable output. The GEO optimization report documents what changed and why.

---

## What makes this content different

| Traditional content tools | This pipeline |
|--------------------------|---------------|
| Optimize for keyword density | Optimize for passage-level extraction |
| Bury the answer after an intro | Lead with extractable claims (answer-first) |
| Generic "top 10" listicle format | Comparative tables with sourced data and captions |
| No citation trail | Every claim categorized: `[Verified]`, `[Needs source]`, `[Hypothesis]` |
| One monolithic prompt | 10-step workflow with 6 specialist agents |
| Fully automated or fully manual | Agent teams with 3 human approval gates |
| Write once, forget | Maintenance schedule with review dates per topic volatility |
| Subjective editorial review | Objective PASS/FAIL QA gate across 10 measurable categories |

---

## Technical stack

| Component | Technology |
|-----------|-----------|
| Agent orchestration | Claude Code agent teams — `TaskCreate`/`TaskUpdate`/`SendMessage` coordination |
| Knowledge ingestion | Python CLI — BeautifulSoup (web), pdfplumber (PDF), scikit-learn TF-IDF (topics), pymarkdown/mdformat (QA) |
| Content generation | Claude (via 6 specialist Claude Code agents with defined tool access) |
| Quality assurance | Automated PASS/FAIL gate (10 categories) + 3 human checkpoints |
| Output format | Markdown drafts + JSON publishing cards (metadata, taxonomy, schema recs) |
| Dual interface | Claude Code (agent teams) + Antigravity (step-by-step workflow platform) |

---

## Key design decisions

**Why 6 agents instead of 1?**
Specialization produces better output. A single agent doing research, writing, fact-checking, and optimization will cut corners under context pressure. Separate agents with defined roles and restricted tool access maintain quality across a 3,000+ word piece. The Editorial QA agent is intentionally read-only — it cannot modify the draft it's evaluating.

**Why lock the outline before writing?**
Outline drift is the #1 quality killer in AI-generated content. Locking the structure at Step 2 prevents the writer from reorganizing mid-draft based on what's easier to generate rather than what serves the reader.

**Why a Python scraper instead of letting Claude browse?**
Reproducibility. The scraper produces identical knowledge ledgers from the same inputs. It scores source authority, extracts topics via TF-IDF, and flags conflicts — all deterministically. Agent browsing is non-deterministic and can't be audited.

**Why 3 human checkpoints instead of just 1?**
Catching a bad framing at Step 1 costs 2 minutes. Catching it at Step 8 wastes the entire pipeline run. Early gates are cheap insurance.

**Why maintenance scheduling?**
Content decay is the silent killer of AI citations. A claim that was true in February may be outdated by June. Step 10 sets review dates based on topic volatility, so content stays citation-worthy over time.

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
.tool-repo-link{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 10px;
  border: 1px solid rgba(255,140,50,.35);
  background: rgba(255,140,50,.06);
  color: rgba(255,140,50,.90) !important;
  font-weight: 600;
  font-size: 14px;
  transition: background .16s ease, border-color .16s ease;
  text-decoration: none !important;
}
.tool-repo-link:hover{
  background: rgba(255,140,50,.12);
  border-color: rgba(255,140,50,.50);
}
.agent-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}
@media (max-width: 840px){
  .agent-grid{
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 540px){
  .agent-grid{
    grid-template-columns: 1fr;
  }
}
.agent-card{
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
}
.agent-card .agent-role{
  font-size: 10px;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(255,140,50,.65);
  margin-bottom: 6px;
}
.agent-card h4{
  margin: 0 0 8px;
  font-size: 15px;
  color: rgba(255,255,255,.90);
}
.agent-card p{
  margin: 0;
  font-size: 13px;
  color: rgba(255,255,255,.60);
  line-height: 1.55;
}
</style>
