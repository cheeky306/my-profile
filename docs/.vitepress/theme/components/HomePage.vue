<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <div class="homepage-wrapper">
    <header class="nav">
      <div class="container">
        <div class="nav-inner">
          <a class="brand" :href="withBase('/')">
            <img class="brand-logo" :src="withBase('/img/logo.png')" alt="JF" />
            <div class="brand-text">
              <span>Jordian's Portfolio</span>
              <span class="brand-credential">MSc Business Marketing — University of Reykjavik</span>
            </div>
          </a>

          <nav class="nav-links" aria-label="Primary">
            <a class="nav-link" :href="withBase('/')">Home</a>
            <a class="nav-link" :href="withBase('/audit/dutch')">Work</a>
            <a class="nav-link" :href="withBase('/resume')">Resume</a>
            <a class="nav-link" :href="withBase('/methodology')">Methodology</a>
            <a class="nav-link" :href="withBase('/about')">About</a>
          </nav>

          <div class="nav-right">
            <div class="nav-location">Regina, SK <span class="flag">&#127464;&#127462;</span></div>
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

    <main id="home" class="hero">
      <div class="container">
        <div class="hero-inner">
          <div class="overline">SEARCH &bull; AI VISIBILITY &bull; TECHNICAL SEO</div>
          <h1>[Your Name Placeholder] <br/><em>Audit System</em></h1>
          <p>
            I help teams get discovered in Google and AI search. This portal shows a sample audit,
            how I think, and the technical standards I ship against.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" :href="withBase('/audit/dutch')">View SEO Audit</a>
            <a class="btn btn-signal" :href="withBase('/resume')">View Resume</a>
          </div>
        </div>
      </div>
    </main>

    <section class="section" id="audit">
      <div class="container">
        <div class="section-title">
          <h2>Selected Work</h2>
          <div class="kicker">Evidence-based. Recruiter-ready.</div>
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

          <article class="card">
            <div class="meta">CASE STUDY</div>
            <h3>Quantified Wins</h3>
            <p>
              Problem &rarr; actions &rarr; outcomes. Numbers over narratives.
            </p>
            <a class="link" :href="withBase('/case-study')">
              View Case Studies <span class="arrow">&rarr;</span>
            </a>
          </article>

          <article class="card">
            <div class="meta">METHODOLOGY</div>
            <h3>How I Audit</h3>
            <p>
              Scoring framework, tool stack, and prioritization logic.
              Transparent by default.
            </p>
            <a class="link" :href="withBase('/methodology')">
              View Methodology <span class="arrow">&rarr;</span>
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
.homepage-wrapper .brand-credential {
  font-size: 9px; font-weight: 400; letter-spacing: .04em;
  color: rgba(247,246,243,.38); margin-top: 3px;
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

/* Responsive */
@media (max-width: 980px) {
  .homepage-wrapper .card { grid-column: span 6; }
  .homepage-wrapper .nav-links { display: none; }
  .homepage-wrapper .nav-location { display: none; }
}
@media (max-width: 620px) {
  .homepage-wrapper .card { grid-column: span 12; }
  .homepage-wrapper .nav-socials { gap: 6px; }
}
</style>
