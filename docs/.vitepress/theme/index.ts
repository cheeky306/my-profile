import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import AuditSelector from './components/AuditSelector.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AuditSelector', AuditSelector)
  },
} satisfies Theme
