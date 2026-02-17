<script setup>
import { useData } from 'vitepress'
import VPDocOutline from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== 'page'" class="sidebar-outline">
    <div class="sidebar-outline-title">On this page</div>
    <VPDocOutline />
  </div>
</template>

<style>
.sidebar-outline {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}
.sidebar-outline-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  padding: 6px 0;
  margin-bottom: 4px;
}
</style>
