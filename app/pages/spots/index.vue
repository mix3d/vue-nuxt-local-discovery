<template>
  <div class="page">
    <h1 class="page-title">Explore spots</h1>
    <div class="categories">
      <CategoryPill
        v-for="(label, key) in categoryLabels"
        :key="key"
        :label="label"
        :href="key === selectedCategory ? '/spots' : `/spots?category=${key}`"
        :active="selectedCategory === key"
      />
    </div>
    <div class="grid">
      <SpotCard
        v-for="spot in filteredSpots"
        :key="spot.id"
        :spot="spot"
      />
    </div>
    <p v-if="filteredSpots.length === 0" class="empty">No spots in this category yet.</p>
  </div>
</template>

<script setup lang="ts">
import type { SpotCategory } from '~/types/spot'

const route = useRoute()
const { categoryLabels, getByCategory } = useSpots()

const selectedCategory = computed(() => {
  const cat = route.query.category as SpotCategory | undefined
  if (cat && ['cafe', 'park', 'shop', 'event'].includes(cat)) return cat
  return null
})

const filteredSpots = computed(() => getByCategory(selectedCategory.value))
</script>

<style scoped>
.page {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}
.page-title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 1.5rem;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.empty {
  color: var(--color-muted);
  margin-top: 2rem;
}
.page-title {
  animation: fadeIn 0.4s ease-out both;
}
.categories {
  animation: fadeIn 0.4s ease-out 0.06s both;
}
.grid {
  animation: fadeIn 0.4s ease-out 0.1s both;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
