<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phase = ref('idle')        // idle → typing → searching → overview → hold → reset
const typedQuery = ref('')
const fullQuery = 'Any side effects from dog UTI antibiotics?'
let timer = null

function sleep(ms) {
  return new Promise(r => (timer = setTimeout(r, ms)))
}

async function runOnce() {
  // Idle
  phase.value = 'idle'
  typedQuery.value = ''
  await sleep(1200)

  // Type query
  phase.value = 'typing'
  for (let i = 0; i <= fullQuery.length; i++) {
    typedQuery.value = fullQuery.slice(0, i)
    await sleep(45 + Math.random() * 35)
  }
  await sleep(600)

  // Searching
  phase.value = 'searching'
  await sleep(1400)

  // Show AI Overview — stays here permanently
  phase.value = 'overview'
}

onMounted(() => { runOnce() })
onUnmounted(() => { clearTimeout(timer) })
</script>

<template>
  <div class="aio-wrapper">
    <!-- Search bar -->
    <div class="aio-search-bar" :class="{ minimized: phase === 'overview' }">
      <div class="aio-google-icon">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <div class="aio-query-text">
        <span>{{ typedQuery }}</span>
        <span class="aio-cursor" v-if="phase === 'typing' || phase === 'idle'">|</span>
      </div>
      <div class="aio-search-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </div>
    </div>

    <!-- Searching indicator -->
    <div class="aio-searching" :class="{ visible: phase === 'searching' }">
      <div class="aio-dots">
        <span></span><span></span><span></span>
      </div>
      <span class="aio-searching-text">Generating AI Overview...</span>
    </div>

    <!-- AI Overview panel -->
    <div class="aio-panel" :class="{ visible: phase === 'overview' }">
      <div class="aio-panel-header">
        <div class="aio-sparkle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="url(#sparkleGrad)" />
            <defs><linearGradient id="sparkleGrad" x1="4" y1="2" x2="20" y2="20"><stop stop-color="#4285F4"/><stop offset="0.5" stop-color="#A142F4"/><stop offset="1" stop-color="#F44285"/></linearGradient></defs>
          </svg>
        </div>
        <span class="aio-header-text">AI Overview</span>
      </div>

      <div class="aio-content">
        <p class="aio-main-text">
          Common side effects from dog UTI antibiotics, such as <strong>amoxicillin</strong> or <strong>Clavamox</strong>, are primarily gastrointestinal, including vomiting, diarrhea, and loss of appetite. These medications can also cause lethargy, drooling, or, in rare cases, allergic reactions.
        </p>

        <div class="aio-list">
          <div class="aio-list-title">Common Side Effects of Canine Antibiotics</div>
          <ul>
            <li><strong>Gastrointestinal Distress</strong> — Nausea, vomiting, diarrhea, and reduced appetite</li>
            <li><strong>Lethargy/Fatigue</strong> — General tiredness or decrease in activity</li>
            <li><strong>Increased Salivation</strong> — Excessive drooling</li>
            <li><strong>Yeast Infections</strong> — Disruption of normal bacterial flora</li>
          </ul>
        </div>

        <div class="aio-sources">
          <div class="aio-source">
            <div class="aio-source-icon fetch"></div>
            <span>Fetch Pet Insurance</span>
          </div>
          <div class="aio-source">
            <div class="aio-source-icon goodrx"></div>
            <span>GoodRx</span>
          </div>
          <div class="aio-source">
            <div class="aio-source-icon vetic"></div>
            <span>Vetic Pet Clinic</span>
          </div>
          <div class="aio-source">
            <div class="aio-source-icon petmd"></div>
            <span>PetMD</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aio-wrapper {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

/* Search bar */
.aio-search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  border-radius: 24px;
  transition: all .4s ease;
}
.aio-search-bar.minimized {
  padding: 8px 14px;
  border-radius: 18px;
}
.aio-google-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.aio-query-text {
  flex: 1;
  font-size: 12px;
  color: rgba(255,255,255,.85);
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  min-height: 1.2em;
}
.aio-cursor {
  color: rgba(255,255,255,.6);
  animation: blink .8s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
.aio-search-icon {
  flex-shrink: 0;
  display: flex;
}

/* Searching dots */
.aio-searching {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity .3s ease, transform .3s ease;
  height: 0;
  overflow: hidden;
}
.aio-searching.visible {
  opacity: 1;
  transform: translateY(0);
  height: auto;
  padding: 4px 8px;
}
.aio-dots {
  display: flex;
  gap: 4px;
}
.aio-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(66,133,244,.7);
  animation: dotPulse 1.2s ease-in-out infinite;
}
.aio-dots span:nth-child(2) { animation-delay: .2s; }
.aio-dots span:nth-child(3) { animation-delay: .4s; }
@keyframes dotPulse {
  0%, 80%, 100% { opacity: .3; transform: scale(.8); }
  40% { opacity: 1; transform: scale(1); }
}
.aio-searching-text {
  font-size: 12px;
  color: rgba(255,255,255,.4);
  font-style: italic;
}

/* AI Overview panel */
.aio-panel {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(8px);
  max-height: 0;
  transition: opacity .5s ease, transform .5s ease, max-height .6s ease;
}
.aio-panel.visible {
  opacity: 1;
  transform: translateY(0);
  max-height: 600px;
}
.aio-panel-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px 6px;
}
.aio-sparkle { display: flex; align-items: center; }
.aio-header-text {
  font-size: 11px;
  font-weight: 600;
  background: linear-gradient(90deg, #4285F4, #A142F4, #F44285);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -.01em;
}

.aio-content {
  padding: 0 12px 10px;
}
.aio-main-text {
  font-size: 8px;
  line-height: 1.45;
  color: rgba(255,255,255,.72);
  margin: 0 0 8px;
}
.aio-main-text strong {
  color: rgba(255,255,255,.88);
}

.aio-list {
  margin-bottom: 8px;
}
.aio-list-title {
  font-size: 9px;
  font-weight: 600;
  color: rgba(255,255,255,.55);
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 4px;
}
.aio-list ul {
  margin: 0;
  padding: 0 0 0 12px;
  list-style: none;
}
.aio-list li {
  position: relative;
  font-size: 9.5px;
  color: rgba(255,255,255,.62);
  line-height: 1.45;
  padding: 2px 0;
}
.aio-list li::before {
  content: "";
  position: absolute;
  left: -10px;
  top: 8px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(66,133,244,.5);
}
.aio-list li strong {
  color: rgba(255,255,255,.82);
}

/* Sources */
.aio-sources {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.aio-source {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 20px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.06);
  font-size: 8px;
  color: rgba(255,255,255,.50);
}
.aio-source-icon {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.aio-source-icon.fetch { background: #6B4EBF; }
.aio-source-icon.goodrx { background: #FFD100; }
.aio-source-icon.vetic { background: #2ECC71; }
.aio-source-icon.petmd { background: #E74C3C; }

@media (max-width: 980px) {
  .aio-wrapper {
    max-width: 100%;
  }
}
</style>
