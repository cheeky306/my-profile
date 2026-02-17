import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import './custom.css'
import AuditSelector from './components/AuditSelector.vue'
import HomePage from './components/HomePage.vue'
import SidebarOutline from './components/SidebarOutline.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-after': () => h(SidebarOutline)
    })
  },
  enhanceApp({ app }) {
    app.component('AuditSelector', AuditSelector)
    app.component('HomePage', HomePage)
  },
} satisfies Theme
