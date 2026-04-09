<script setup>
  import DefaultTheme from 'vitepress/theme'
  import Feedback from './components/Feedback.vue'
  import NotFound from './components/NotFound.vue'
  import { onMounted, watch } from 'vue'
  import { useRoute } from 'vitepress'

  const { Layout } = DefaultTheme

  function setLinksNewTab() {
    const selector = '.vp-doc a[href]'
    document.querySelectorAll(selector).forEach((el) => {
      const href = el.getAttribute('href')
      if (href && !el.hasAttribute('target')) {
        el.setAttribute('target', '_blank')
        el.setAttribute('rel', 'noopener noreferrer')
      }
    })
  }

  onMounted(() => {
    setLinksNewTab()
  })

  const route = useRoute()
  watch(() => route.path, () => {
    setTimeout(setLinksNewTab, 0)
  })
  </script>

<template>
  <Layout>
    <template #doc-footer-before>
      <Feedback />
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>