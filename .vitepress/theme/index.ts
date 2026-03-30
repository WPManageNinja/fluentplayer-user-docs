import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import VPNavBarTitle from './components/VPNavBarTitle.vue'
import NotFound from './components/NotFound.vue'
import SupportCTA from './components/SupportCTA.vue'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(SupportCTA),
      // Default theme imports its own NotFound; global registration does not override it.
      'not-found': () => h(NotFound),
    })
  },
  enhanceApp({ app }) {
    app.component('VPNavBarTitle', VPNavBarTitle)
    app.component('NotFound', NotFound)
    app.component('SupportCTA', SupportCTA)
  },
}

export default theme
