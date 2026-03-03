<template>
  <NuxtLink
    :to="href"
    class="pill"
    :class="{ active }"
  >
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  href: string
  active?: boolean
}>()
</script>

<style scoped>
.pill {
  display: inline-block;
  padding: 0.4375rem 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  background: var(--color-surface);
  color: var(--color-muted);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
}
.pill:hover {
  background: var(--color-accent-subtle);
  color: var(--color-accent);
  border-color: var(--color-accent);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(22, 101, 52, 0.15);
}
.pill.active {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}
</style>
