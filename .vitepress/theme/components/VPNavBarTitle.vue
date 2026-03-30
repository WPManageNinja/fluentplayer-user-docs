<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { useLayout, VPImage } from 'vitepress/theme'

const { theme } = useData()
const { hasSidebar } = useLayout()

const link = computed(() => {
  const logoLink = theme.value.logoLink
  if (typeof logoLink === 'string') return logoLink
  if (logoLink?.link) return logoLink.link
  return withBase('/')
})

const rel = computed(() =>
  typeof theme.value.logoLink === 'object' ? theme.value.logoLink?.rel : undefined
)

const target = computed(() =>
  typeof theme.value.logoLink === 'object' ? theme.value.logoLink?.target : undefined
)
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="link" :rel="rel" :target="target">
      <slot name="nav-bar-title-before" />
      <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
      <span>FluentPlayer</span>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  margin-right: 8px;
  height: var(--vp-nav-logo-height);
}
</style>
