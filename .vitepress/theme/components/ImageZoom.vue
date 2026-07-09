<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute, inBrowser } from 'vitepress'

// Only use the router on the client; keep this component SSR-safe.
const route = inBrowser ? useRoute() : null

const IMG_SELECTOR = '.vp-doc img'
const MARGIN = 40 // gap left around the zoomed image, in px
const DURATION = 300 // must match the CSS transition duration

let overlay = null
let clone = null
let origin = null // the original in-flow <img> being zoomed
let isOpen = false
let justOpened = false
let listenersAttached = false

/**
 * Compute the transform that moves the clone (currently pinned over the
 * original image) to the viewport center and scales it to fit.
 */
function computeTransform(rect) {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const scale = Math.min(
    (vw - MARGIN * 2) / rect.width,
    (vh - MARGIN * 2) / rect.height
  )
  const translateX = vw / 2 - (rect.left + rect.width / 2)
  const translateY = vh / 2 - (rect.top + rect.height / 2)
  return { scale, translateX, translateY }
}

/** Pin the clone over the original image, then transform it to center. */
function applyCenter() {
  if (!clone || !origin) return
  const rect = origin.getBoundingClientRect()
  clone.style.top = `${rect.top}px`
  clone.style.left = `${rect.left}px`
  clone.style.width = `${rect.width}px`
  clone.style.height = `${rect.height}px`
  const { scale, translateX, translateY } = computeTransform(rect)
  clone.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`
}

function open(img) {
  if (isOpen) return
  origin = img
  const rect = img.getBoundingClientRect()

  overlay = document.createElement('div')
  overlay.className = 'vp-zoom-overlay'
  overlay.addEventListener('click', () => close())

  clone = document.createElement('img')
  clone.className = 'vp-zoom-clone'
  clone.src = img.currentSrc || img.src
  clone.alt = img.alt || ''
  clone.style.top = `${rect.top}px`
  clone.style.left = `${rect.left}px`
  clone.style.width = `${rect.width}px`
  clone.style.height = `${rect.height}px`
  clone.addEventListener('click', () => close())

  document.body.appendChild(overlay)
  document.body.appendChild(clone)

  // Hide the in-flow image (its layout is preserved) so only the clone shows.
  origin.style.visibility = 'hidden'

  // Force a reflow so the starting position is committed before we transition.
  void clone.offsetWidth
  overlay.classList.add('is-active')
  applyCenter()

  isOpen = true
  justOpened = true
  // Ignore the scroll that a click can trigger for a brief window.
  setTimeout(() => {
    justOpened = false
  }, 200)
}

function close() {
  if (!isOpen) return
  isOpen = false
  justOpened = false

  const closingClone = clone
  const closingOverlay = overlay
  const closingOrigin = origin
  clone = overlay = origin = null

  // Animate the clone back to the original position, then remove it.
  if (closingOverlay) closingOverlay.classList.remove('is-active')
  if (closingClone) closingClone.style.transform = ''

  setTimeout(() => {
    if (closingClone && closingClone.parentNode) {
      closingClone.parentNode.removeChild(closingClone)
    }
    if (closingOverlay && closingOverlay.parentNode) {
      closingOverlay.parentNode.removeChild(closingOverlay)
    }
    if (closingOrigin) closingOrigin.style.visibility = ''
  }, DURATION)
}

/** Remove the zoom DOM immediately, without the closing animation. */
function teardown() {
  if (clone && clone.parentNode) clone.parentNode.removeChild(clone)
  if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay)
  if (origin) origin.style.visibility = ''
  clone = overlay = origin = null
  isOpen = false
  justOpened = false
}

function onImgClick(e) {
  // A zoomable image should not also follow a wrapping link.
  e.preventDefault()
  e.stopPropagation()
  open(e.currentTarget)
}

function handleScroll() {
  if (isOpen && !justOpened) close()
}

function handleKeydown(e) {
  if (e.key === 'Escape' && isOpen) close()
}

function handleResize() {
  if (isOpen) applyCenter()
}

function attachGlobalListeners() {
  if (listenersAttached) return
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  listenersAttached = true
}

function detachGlobalListeners() {
  if (!listenersAttached) return
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
  listenersAttached = false
}

/** Make every content image zoomable (idempotent via a data flag). */
function prepareImages() {
  document.querySelectorAll(IMG_SELECTOR).forEach((img) => {
    if (img.dataset.zoomBound) return
    img.dataset.zoomBound = '1'
    img.style.cursor = 'zoom-in'
    img.addEventListener('click', onImgClick)
  })
}

onMounted(() => {
  attachGlobalListeners()
  // Wait for the page content to render before binding images.
  setTimeout(prepareImages, 0)
})

onBeforeUnmount(() => {
  teardown()
  detachGlobalListeners()
})

// Re-bind images after client-side navigation, and close any open zoom.
if (route) {
  watch(
    () => route.path,
    () => {
      teardown()
      setTimeout(prepareImages, 0)
    }
  )
}
</script>

<template>
  <!-- Renders nothing; the overlay and image clone are managed on <body>. -->
</template>

<style>
.vp-zoom-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2147483646;
  cursor: zoom-out;
}

.vp-zoom-overlay.is-active {
  opacity: 1;
}

.vp-zoom-clone {
  position: fixed;
  margin: 0;
  object-fit: contain;
  transform-origin: center center;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  cursor: zoom-out;
  z-index: 2147483647;
  will-change: transform;
}
</style>
