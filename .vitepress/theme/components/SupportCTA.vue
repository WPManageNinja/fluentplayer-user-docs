<template>
  <div class="support-cta">
    <span class="support-cta__icon" aria-hidden="true">💬</span>
    <span class="support-cta__text">
      Still stuck?
      <a href="https://wpmanageninja.com/support/" target="_blank" rel="noopener noreferrer">
        Open a support ticket
      </a>
      — our team typically replies within one business day.
    </span>
  </div>
</template>

<style scoped>
.support-cta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  padding: 14px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  font-size: 0.92rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.support-cta__icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.support-cta__text a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
}

.support-cta__text a:hover {
  text-decoration: underline;
}
</style>
