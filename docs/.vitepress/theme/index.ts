import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import AuditSelector from './components/AuditSelector.vue'
import HomePage from './components/HomePage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AuditSelector', AuditSelector)
    app.component('HomePage', HomePage)
  },
} satisfies Theme
