<script setup lang="ts">
import { useRouter, useRoute, withBase } from 'vitepress'

type AuditOption = { label: string; value: string; href: string; status?: 'live' | 'soon' }

const router = useRouter()
const route = useRoute()

const audits: AuditOption[] = [
  { label: 'Dutch.com — SEO + AI Visibility Audit', value: 'dutch', href: '/audit/dutch', status: 'live' },
  { label: 'Another Company — Coming Soon', value: 'company-2', href: '/audit/company-2', status: 'soon' },
]

const current = audits.find(a => withBase(a.href) === route.path) ?? audits[0]

function onChange(e: Event) {
  const val = (e.target as HTMLSelectElement).value
  const next = audits.find(a => a.value === val)
  if (!next) return
  router.go(withBase(next.href))
}
</script>

<template>
  <div class="audit-select">
    <div class="audit-select__label">Audit</div>
    <div class="audit-select__control">
      <select :value="current.value" @change="onChange" aria-label="Select an audit">
        <option v-for="a in audits" :key="a.value" :value="a.value" :disabled="a.status === 'soon'">
          {{ a.label }}{{ a.status === 'soon' ? ' (Coming Soon)' : '' }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.audit-select{
  display:flex; align-items:center; justify-content:space-between;
  gap:12px; padding:12px 14px; border:1px solid rgba(255,255,255,.10);
  border-radius:14px; background:rgba(10,12,16,.55); backdrop-filter: blur(10px);
}
.audit-select__label{
  font-size:12px; letter-spacing:.18em; text-transform:uppercase;
  color:rgba(255,255,255,.60);
}
.audit-select__control select{
  appearance:none;
  padding:10px 12px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(0,0,0,.35);
  color:rgba(255,255,255,.92);
  font-size:14px;
  outline:none;
  min-width: 320px;
}
.audit-select__control select:focus{
  border-color: rgba(255,140,50,.65);
  box-shadow: 0 0 0 4px rgba(255,140,50,.12);
}
</style>
