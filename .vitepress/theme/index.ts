import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import CustomLayout from './layout-1.vue'
import VPNavBarTitle from './components/VPNavBarTitle.vue'
import NotFound from './components/NotFound.vue'
import './styles/brand.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('VPNavBarTitle', VPNavBarTitle)
    app.component('NotFound', NotFound)
  },
}

export default theme
