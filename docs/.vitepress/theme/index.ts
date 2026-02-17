import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import AuditSelector from './components/AuditSelector.vue'
import HomePage from './components/HomePage.vue'
import '../../public/css/styles.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AuditSelector', AuditSelector)
    app.component('HomePage', HomePage)
  },
} satisfies Theme
