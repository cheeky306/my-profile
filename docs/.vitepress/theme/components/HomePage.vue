<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'

const mobileOpen = ref(false)
const mobileSection = ref('')

function toggleSection(name) {
  mobileSection.value = mobileSection.value === name ? '' : name
}
</script>

<template>
  <div class="homepage-wrapper">
    <header class="nav">
      <div class="container">
        <div class="nav-inner">
          <a class="brand" :href="withBase('/')">
            <img class="brand-logo" :src="withBase('/img/logo.png')" alt="JF" />
            <div class="brand-text">
              <span class="brand-name">Jordian Farahani</span>
              <span class="brand-university">MSc Business Marketing</span>
            </div>
          </a>

          <nav class="nav-links" aria-label="Primary">
            <a class="nav-link" :href="withBase('/')">Home</a>
            <div class="nav-dropdown">
              <span class="nav-link nav-trigger">Portfolio <span class="chevron">&#9662;</span></span>
              <div class="nav-dropdown-menu">
                <a class="nav-dropdown-item" :href="withBase('/audit/dutch')">Dutch.com Audit</a>
                <a class="nav-dropdown-item" :href="withBase('/case-study')">Case Study</a>
                <a class="nav-dropdown-item" :href="withBase('/llmo-tool')">LLMO Blog Tool</a>
              </div>
            </div>
            <div class="nav-dropdown">
              <span class="nav-link nav-trigger">About <span class="chevron">&#9662;</span></span>
              <div class="nav-dropdown-menu">
                <a class="nav-dropdown-item" :href="withBase('/resume')">Resume</a>
                <a class="nav-dropdown-item" href="#skills">Skills</a>
                <!-- <a class="nav-dropdown-item" :href="withBase('/methodology')">Methodology</a> -->
                <a class="nav-dropdown-item" :href="withBase('/about')">About Me</a>
                <a class="nav-dropdown-item" :href="withBase('/about#contact')">Contact</a>
              </div>
            </div>
          </nav>

          <button class="hamburger" :class="{ active: mobileOpen }" @click="mobileOpen = !mobileOpen" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>

          <div class="nav-right">
            <div class="nav-location">Based in Canada <span class="flag">&#127464;&#127462;</span></div>
            <div class="nav-socials">
              <a class="social-icon" href="#" aria-label="WhatsApp" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a class="social-icon" href="#" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
              </a>
              <a class="social-icon" href="#" aria-label="LinkedIn" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="mobile-menu" :class="{ open: mobileOpen }">
      <a class="mobile-link" :href="withBase('/')" @click="mobileOpen = false">Home</a>

      <div class="mobile-section">
        <button class="mobile-section-toggle" @click="toggleSection('portfolio')">
          Portfolio <span class="chevron" :class="{ rotated: mobileSection === 'portfolio' }">&#9662;</span>
        </button>
        <div class="mobile-section-items" v-show="mobileSection === 'portfolio'">
          <a class="mobile-link sub" :href="withBase('/audit/dutch')" @click="mobileOpen = false">Dutch.com Audit</a>
          <a class="mobile-link sub" :href="withBase('/case-study')" @click="mobileOpen = false">Case Study</a>
          <a class="mobile-link sub" :href="withBase('/llmo-tool')" @click="mobileOpen = false">LLMO Blog Tool</a>
        </div>
      </div>

      <div class="mobile-section">
        <button class="mobile-section-toggle" @click="toggleSection('about')">
          About <span class="chevron" :class="{ rotated: mobileSection === 'about' }">&#9662;</span>
        </button>
        <div class="mobile-section-items" v-show="mobileSection === 'about'">
          <a class="mobile-link sub" :href="withBase('/resume')" @click="mobileOpen = false">Resume</a>
          <a class="mobile-link sub" href="#skills" @click="mobileOpen = false">Skills</a>
          <!-- <a class="mobile-link sub" :href="withBase('/methodology')" @click="mobileOpen = false">Methodology</a> -->
          <a class="mobile-link sub" :href="withBase('/about')" @click="mobileOpen = false">About Me</a>
          <a class="mobile-link sub" :href="withBase('/about#contact')" @click="mobileOpen = false">Contact</a>
        </div>
      </div>
    </div>

    <main id="home" class="hero">
      <div class="container">
        <div class="hero-inner hero-split">
          <div class="hero-text">
            <div class="overline">SEARCH &bull; AI VISIBILITY &bull; TECHNICAL SEO</div>
            <h1><em>SEO · AEO · GEO</em> <br/>Brand Strategist</h1>
            <p>
              7 years in digital marketing. Technical SEO specialist.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" :href="withBase('/audit/dutch')">View SEO Audit</a>
              <a class="btn btn-signal" :href="withBase('/resume')">View Resume</a>
            </div>
          </div>
          <div class="hero-photo">
            <img class="hero-photo-desktop" :src="withBase('/img/jordian.png')" alt="Jordian Farahani" />
            <img class="hero-photo-mobile" :src="withBase('/img/jordian-mobile.png')" alt="Jordian Farahani" />
          </div>
        </div>
      </div>
    </main>

    <section class="section" id="audit">
      <div class="container">
        <div class="section-title">
          <h2>Selected Work</h2>
          <div class="kicker">Evidence-based.</div>
        </div>

        <div class="grid">
          <article class="card dark">
            <div class="meta">PET TELEHEALTH AUDIT</div>
            <div class="card-brand">
              <img :src="withBase('/img/audit/dutch/dutch-logo.png')" alt="Dutch.com" class="card-brand-logo" />
              <h3>Dutch.com</h3>
            </div>
            <p>
              Full technical + content audit showing how I approach crawlability,
              indexation, information architecture, and AI citation readiness.
            </p>
            <a class="link" :href="withBase('/audit/dutch')">
              View Dutch Pet Audit <span class="arrow">&rarr;</span>
            </a>
          </article>

          <article class="card card-white">
            <div class="meta">CASE STUDY</div>
            <div class="card-brand">
              <img :src="withBase('/img/case-study/goodgood-logo.svg')" alt="GOOD GOOD Brand" class="card-brand-logo" />
              <h3>GOOD GOOD Brand</h3>
            </div>
            <p>
              2,433% YoY organic growth for a Series B funded Icelandic startup.
              Zero to 14,109 ranking keywords. Engine still compounding post-departure.
            </p>
            <a class="link" :href="withBase('/case-study')">
              View Case Study <span class="arrow">&rarr;</span>
            </a>
          </article>

          <!-- <article class="card">
            <div class="meta">METHODOLOGY</div>
            <h3>How I Audit</h3>
            <p>
              Scoring framework, tool stack, and prioritization logic.
              Transparent by default.
            </p>
            <a class="link" :href="withBase('/methodology')">
              View Methodology <span class="arrow">&rarr;</span>
            </a>
          </article> -->
        </div>
      </div>
    </section>

    <section class="section" id="resume">
      <div class="container">
        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="grid">
          <article class="card" style="grid-column: span 12;">
            <div class="meta">SUMMARY</div>
            <h3>Background</h3>
            <p>
              MSc in Business Marketing from Reykjavik University. 7 years across DTC, B2B, and agency-side roles.
              Happiest when the work speaks for itself.
            </p>
            <a class="link" :href="withBase('/resume')">
              Full Resume <span class="arrow">&rarr;</span>
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="skills">
      <div class="container">
        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="skills-grid">
          <div class="skill-card">
            <div class="meta">TECHNICAL SEO</div>
            <p>Crawlability, indexation, canonicals, redirects, log file analysis, site architecture, Screaming Frog, Chrome DevTools</p>
          </div>
          <div class="skill-card">
            <div class="meta">AI VISIBILITY (GEO)</div>
            <p>Google AI Mode testing, llms.txt, crawler access auditing, passage-level citability, structured data for AI extraction</p>
          </div>
          <div class="skill-card">
            <div class="meta">ON-PAGE SEO</div>
            <p>Title/meta optimization, heading hierarchy, internal linking, keyword targeting, content architecture</p>
          </div>
          <div class="skill-card">
            <div class="meta">STRUCTURED DATA</div>
            <p>Schema.org (JSON-LD), rich results, medical/product/FAQ markup, entity optimization</p>
          </div>
          <div class="skill-card">
            <div class="meta">PERFORMANCE</div>
            <p>Core Web Vitals, Lighthouse, CrUX, PageSpeed Insights, JS auditing, lab vs. field analysis</p>
          </div>
          <div class="skill-card">
            <div class="meta">BRAND STRATEGY</div>
            <p>Product positioning, GTM execution, P&amp;L management, DTC scale-up, NPD pipeline, packaging &amp; visual identity</p>
          </div>
          <div class="skill-card">
            <div class="meta">ANALYTICS</div>
            <p>GA4 (certified), Google Search Console, Google Tag Manager, data interpretation, reporting dashboards</p>
          </div>
          <div class="skill-card">
            <div class="meta">TOOLS</div>
            <p>Screaming Frog, Ahrefs, SEMrush, Ubersuggest, Claude Code, Shopify, WordPress, headless CMS (Sanity, Ghost)</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="section-title">
          <h2>About &amp; Contact</h2>
        </div>

        <div class="grid">
          <article class="card" style="grid-column: span 6;">
            <div class="meta">HOW I WORK</div>
            <h3>Evidence over opinion</h3>
            <p>
              I approach SEO as an engineering discipline, not a checklist. Every recommendation
              ties back to observable evidence &mdash; crawl data, structured data validation,
              performance metrics, or live AI search results.
            </p>
            <a class="link" :href="withBase('/about')">
              Read More <span class="arrow">&rarr;</span>
            </a>
          </article>

          <article class="card" style="grid-column: span 6;">
            <div class="meta">CONTACT</div>
            <h3>jordianfarahani@outlook.com</h3>
            <p>
              Open to relocation<br/>
              Regina, Canada 🇨🇦
            </p>
            <a class="link" href="mailto:jordianfarahani@outlook.com">
              Send message <span class="arrow">&rarr;</span>
            </a>
          </article>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <div>&copy; <span class="small-mono">Jordian Farahani</span></div>
          <div class="small-mono">Made by Jordian Farahani</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* === Protocol Design System (homepage only) === */
.homepage-wrapper {
  --bg: #F7F6F3;
  --paper: #FFFFFF;
  --ink: #0A0A0A;
  --ink-2: #1B1F26;
  --muted: #6B6B6B;
  --protocol-0: #070A0F;
  --protocol-1: #0C0F14;
  --protocol-2: #121724;
  --copper: #D4622A;
  --copper-dim: rgba(212,98,42,.10);
  --border: rgba(10,10,10,.10);
  --border-soft: rgba(10,10,10,.06);
  --shadow-1: 0 1px 2px rgba(0,0,0,.03), 0 8px 20px rgba(0,0,0,.04);
  --shadow-2: 0 2px 4px rgba(0,0,0,.04), 0 14px 40px rgba(0,0,0,.08);
  --radius: 16px;
  --radius-sm: 12px;
  --max: 1120px;
  --pad: clamp(18px, 3vw, 28px);
  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";

  margin-top: -64px;
  background: var(--bg);
  color: var(--ink-2);
  font-family: var(--sans);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

.homepage-wrapper a { color: inherit; text-decoration: none; }

.homepage-wrapper .container {
  width: min(var(--max), 100% - (var(--pad) * 2));
  margin-inline: auto;
  position: relative;
  z-index: 1;
}

/* Nav */
.homepage-wrapper .nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(7,10,15,.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.homepage-wrapper .nav-inner {
  display: flex; align-items: center; justify-content: space-between; height: 64px;
}
.homepage-wrapper .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 15px; letter-spacing: -.02em; color: #F7F6F3;
}
.homepage-wrapper .brand-text {
  display: flex; flex-direction: column; line-height: 1.2;
}
.homepage-wrapper .brand-name {
  font-size: 13px; font-weight: 600; letter-spacing: -.01em;
  color: rgba(247,246,243,.85);
}
.homepage-wrapper .brand-university {
  font-size: 10px; font-weight: 400; letter-spacing: .04em;
  color: rgba(247,246,243,.42); margin-top: 1px;
}
.homepage-wrapper .brand-logo {
  width: 32px; height: 32px; border-radius: 999px; object-fit: cover;
}
.homepage-wrapper .nav-links {
  display: flex; align-items: center; gap: 22px; font-size: 14px;
  margin-left: auto; margin-right: auto;
}
.homepage-wrapper .nav-link {
  position: relative; padding: 8px 2px;
  color: rgba(247,246,243,.6); transition: color .16s ease;
}
.homepage-wrapper .nav-link:hover { color: rgba(247,246,243,.95); }
.homepage-wrapper .nav-link:after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 2px; height: 1px;
  background: var(--copper); transform: scaleX(0); transform-origin: left;
  transition: transform .18s ease;
}
.homepage-wrapper .nav-link:hover:after { transform: scaleX(1); }

/* Nav dropdowns */
.homepage-wrapper .nav-dropdown {
  position: relative;
}
.homepage-wrapper .nav-trigger {
  cursor: pointer; user-select: none;
}
.homepage-wrapper .chevron {
  font-size: 10px; margin-left: 2px; opacity: .5;
}
.homepage-wrapper .nav-dropdown-menu {
  position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  min-width: 160px; padding: 6px;
  background: rgba(12,15,20,.96); backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,.08); border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,.4);
  opacity: 0; visibility: hidden; pointer-events: none;
  transition: opacity .15s ease, transform .15s ease;
  transform: translateX(-50%) translateY(4px);
  z-index: 60;
}
.homepage-wrapper .nav-dropdown:hover .nav-dropdown-menu {
  opacity: 1; visibility: visible; pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}
.homepage-wrapper .nav-dropdown-item {
  display: block; padding: 8px 12px; border-radius: 6px;
  font-size: 13px; color: rgba(247,246,243,.65);
  transition: color .12s ease, background .12s ease;
  white-space: nowrap;
}
.homepage-wrapper .nav-dropdown-item:hover {
  color: rgba(247,246,243,.95); background: rgba(255,255,255,.06);
}
.homepage-wrapper .nav-right {
  display: flex; flex-direction: column; align-items: flex-end; gap: 2px;
}
.homepage-wrapper .nav-location {
  font-family: var(--mono); font-size: 9px; letter-spacing: .12em;
  text-transform: uppercase; color: rgba(247,246,243,.4); line-height: 1;
}
.homepage-wrapper .flag { font-style: normal; font-size: 11px; margin-left: 2px; }
.homepage-wrapper .nav-socials { display: flex; align-items: center; gap: 10px; }
.homepage-wrapper .social-icon {
  display: flex; align-items: center; justify-content: center;
  width: 30px; height: 30px; border-radius: 8px;
  color: rgba(247,246,243,.5); transition: color .16s ease, background .16s ease;
}
.homepage-wrapper .social-icon:hover {
  color: var(--copper); background: rgba(212,98,42,.1);
}

/* Buttons */
.homepage-wrapper .btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  height: 44px; padding: 0 18px; border-radius: 12px; border: 1px solid transparent;
  font-weight: 650; font-size: 14px; letter-spacing: -.01em; cursor: pointer;
  transition: transform .12s ease, box-shadow .16s ease, background .16s ease, border-color .16s ease, color .16s ease;
  user-select: none;
}
.homepage-wrapper .btn:active { transform: translateY(1px); }
.homepage-wrapper .btn-primary {
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,0)), var(--protocol-1);
  color: #F7F6F3; border-color: rgba(255,255,255,.10);
  box-shadow: 0 1px 0 rgba(255,255,255,.08) inset, 0 14px 30px rgba(0,0,0,.25);
}
.homepage-wrapper .btn-primary:hover {
  background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,0)), var(--protocol-2);
  border-color: rgba(255,255,255,.14);
}
.homepage-wrapper .btn-signal {
  background: rgba(212,98,42,.06); border-color: rgba(212,98,42,.35); color: var(--copper);
}
.homepage-wrapper .btn-signal:hover {
  background: rgba(212,98,42,.10); border-color: rgba(212,98,42,.50);
}

/* Hero */
.homepage-wrapper .hero {
  position: relative; padding: clamp(56px, 7vw, 96px) 0;
  overflow: hidden; border-bottom: 1px solid var(--border-soft);
}
.homepage-wrapper .hero:before {
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(900px 520px at 18% 25%, rgba(212,98,42,.22), transparent 60%),
    radial-gradient(900px 520px at 85% 40%, rgba(255,255,255,.06), transparent 55%),
    linear-gradient(180deg, var(--protocol-0), var(--protocol-1));
  z-index: 0;
}
.homepage-wrapper .hero:after {
  content: ""; position: absolute; inset: -2px; opacity: .05;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
  mix-blend-mode: overlay; z-index: 0;
}
.homepage-wrapper .hero-inner { position: relative; z-index: 1; }
.homepage-wrapper .hero-split {
  display: flex; align-items: center; gap: clamp(32px, 4vw, 64px);
}
.homepage-wrapper .hero-text { flex: 1; min-width: 0; }
.homepage-wrapper .hero-photo {
  flex-shrink: 0; width: clamp(220px, 22vw, 320px);
  margin-right: 24px; margin-top: 18px;
}
.homepage-wrapper .hero-photo img {
  width: 100%; border-radius: 18px;
  box-shadow: 0 12px 40px rgba(0,0,0,.35);
  object-fit: cover;
}
.homepage-wrapper .hero-photo-mobile { display: none; }
.homepage-wrapper .hero-photo-desktop { display: block; }
.homepage-wrapper .overline {
  font-family: var(--mono); letter-spacing: .18em; text-transform: uppercase;
  font-size: 11px; color: rgba(212,98,42,.95); margin-bottom: 14px;
}
.homepage-wrapper .hero h1 {
  margin: 0 0 14px; font-size: clamp(34px, 5.2vw, 56px);
  line-height: 1.05; letter-spacing: -.03em; color: #F7F6F3;
}
.homepage-wrapper .hero h1 em { font-style: normal; color: var(--copper); }
.homepage-wrapper .hero p {
  margin: 0 0 26px; max-width: 58ch;
  font-size: clamp(16px, 1.8vw, 19px); color: rgba(247,246,243,.68);
}
.homepage-wrapper .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* Sections */
.homepage-wrapper .section { padding: clamp(38px, 5vw, 68px) 0; }
.homepage-wrapper .section-title {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: 16px; margin-bottom: 18px;
}
.homepage-wrapper .section-title h2 { margin: 0; font-size: 22px; letter-spacing: -.02em; }
.homepage-wrapper .kicker {
  font-family: var(--mono); font-size: 11px; letter-spacing: .14em;
  text-transform: uppercase; color: rgba(10,10,10,.55);
}

/* Cards */
.homepage-wrapper .grid {
  display: grid; grid-template-columns: repeat(12, 1fr); gap: 14px;
}
.homepage-wrapper .card {
  grid-column: span 4; background: var(--paper);
  border: 1px solid var(--border-soft); border-radius: var(--radius);
  box-shadow: var(--shadow-1); padding: 22px;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.homepage-wrapper .card:hover {
  transform: translateY(-2px); box-shadow: var(--shadow-2);
  border-color: rgba(10,10,10,.12);
}
.homepage-wrapper .card.card-white {
  background: #FFFFFF; border-color: rgba(10,10,10,.08);
}
.homepage-wrapper .card.card-white .meta { color: rgba(10,10,10,.55); }
.homepage-wrapper .card.card-white h3 { color: var(--ink); }
.homepage-wrapper .card.card-white p { color: rgba(10,10,10,.70); }
.homepage-wrapper .card.card-white .link { color: rgba(10,10,10,.82); }
.homepage-wrapper .card.card-white:hover { border-color: rgba(10,10,10,.16); }
.homepage-wrapper .card.dark {
  background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0)), var(--protocol-2);
  border-color: rgba(255,255,255,.08); color: rgba(247,246,243,.88);
}
.homepage-wrapper .card.dark .meta { color: rgba(247,246,243,.52); }
.homepage-wrapper .card.dark .link { color: rgba(247,246,243,.86); }
.homepage-wrapper .card.dark:hover { border-color: rgba(212,98,42,.22); }
.homepage-wrapper .meta {
  font-family: var(--mono); font-size: 11px; letter-spacing: .14em;
  text-transform: uppercase; color: rgba(10,10,10,.55); margin-bottom: 10px;
}
.homepage-wrapper .card-brand {
  display: flex; align-items: center; gap: 10px; margin-bottom: 8px;
}
.homepage-wrapper .card-brand-logo {
  width: 28px; height: 28px; border-radius: 6px; object-fit: contain;
}
.homepage-wrapper .card h3 { margin: 0 0 8px; font-size: 18px; letter-spacing: -.02em; }
.homepage-wrapper .card-brand h3 { margin: 0; }
.homepage-wrapper .card p { margin: 0 0 16px; color: rgba(10,10,10,.70); font-size: 14px; }
.homepage-wrapper .card.dark p { color: rgba(247,246,243,.62); }
.homepage-wrapper .link {
  display: inline-flex; align-items: center; gap: 8px;
  font-weight: 650; font-size: 14px; color: rgba(10,10,10,.82);
}
.homepage-wrapper .link .arrow { transition: transform .16s ease; }
.homepage-wrapper .link:hover .arrow { transform: translateX(2px); }

/* Skills */
.homepage-wrapper .skills-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
}
.homepage-wrapper .skill-card {
  background: var(--paper); border: 1px solid var(--border-soft);
  border-radius: var(--radius-sm); padding: 18px;
  box-shadow: var(--shadow-1);
  transition: transform .18s ease, box-shadow .18s ease;
}
.homepage-wrapper .skill-card:hover {
  transform: translateY(-2px); box-shadow: var(--shadow-2);
}
.homepage-wrapper .skill-card p {
  margin: 0; font-size: 13px; color: rgba(10,10,10,.65); line-height: 1.5;
}

/* Footer */
.homepage-wrapper .footer {
  padding: 34px 0; border-top: 1px solid var(--border-soft);
  color: rgba(10,10,10,.62); font-size: 13px;
}
.homepage-wrapper .footer-inner {
  display: flex; justify-content: space-between; gap: 14px; flex-wrap: wrap;
}
.homepage-wrapper .small-mono {
  font-family: var(--mono); font-size: 11px; letter-spacing: .12em;
  text-transform: uppercase; color: rgba(10,10,10,.50);
}

/* Hamburger */
.homepage-wrapper .hamburger {
  display: none; background: none; border: none; cursor: pointer;
  padding: 6px; margin-left: auto; margin-right: 12px;
  flex-direction: column; gap: 5px;
}
.homepage-wrapper .hamburger span {
  display: block; width: 22px; height: 2px;
  background: rgba(247,246,243,.7); border-radius: 2px;
  transition: transform .2s ease, opacity .2s ease;
}
.homepage-wrapper .hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.homepage-wrapper .hamburger.active span:nth-child(2) { opacity: 0; }
.homepage-wrapper .hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.homepage-wrapper .mobile-menu {
  display: none; flex-direction: column;
  background: rgba(7,10,15,.97); backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,.06);
  padding: 8px 0; overflow: hidden;
  max-height: 0; transition: max-height .3s ease, padding .3s ease;
}
.homepage-wrapper .mobile-menu.open {
  max-height: 500px; padding: 12px 0;
}
.homepage-wrapper .mobile-link {
  display: block; padding: 12px var(--pad);
  font-size: 15px; color: rgba(247,246,243,.7);
  transition: color .12s ease, background .12s ease;
}
.homepage-wrapper .mobile-link:hover,
.homepage-wrapper .mobile-link:active {
  color: rgba(247,246,243,.95); background: rgba(255,255,255,.04);
}
.homepage-wrapper .mobile-link.sub {
  padding-left: calc(var(--pad) + 16px); font-size: 14px;
  color: rgba(247,246,243,.55);
}
.homepage-wrapper .mobile-link.sub:hover { color: rgba(247,246,243,.85); }
.homepage-wrapper .mobile-section-toggle {
  display: flex; align-items: center; gap: 6px; width: 100%;
  padding: 12px var(--pad); background: none; border: none;
  font-size: 15px; color: rgba(247,246,243,.7);
  font-family: inherit; cursor: pointer; text-align: left;
}
.homepage-wrapper .mobile-section-toggle:hover {
  color: rgba(247,246,243,.95);
}
.homepage-wrapper .mobile-section-toggle .chevron {
  transition: transform .2s ease;
}
.homepage-wrapper .mobile-section-toggle .chevron.rotated {
  transform: rotate(180deg);
}

/* Responsive */
@media (max-width: 980px) {
  .homepage-wrapper .card { grid-column: span 6; }
  .homepage-wrapper .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .homepage-wrapper .nav-links { display: none; }
  .homepage-wrapper .nav-location { display: none; }
  .homepage-wrapper .hamburger { display: flex; }
  .homepage-wrapper .mobile-menu { display: flex; }
  .homepage-wrapper .hero-split { flex-direction: column; text-align: center; }
  .homepage-wrapper .hero-photo { width: clamp(200px, 50vw, 280px); margin-right: 0; margin-top: 12px; }
  .homepage-wrapper .hero-photo-desktop { display: none; }
  .homepage-wrapper .hero-photo-mobile { display: block; }
  .homepage-wrapper .hero-actions { justify-content: center; }
}
@media (max-width: 620px) {
  .homepage-wrapper .card { grid-column: span 12; }
  .homepage-wrapper .skills-grid { grid-template-columns: 1fr; }
  .homepage-wrapper .nav-socials { gap: 6px; }
}
</style>
