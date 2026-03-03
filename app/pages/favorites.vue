<template>
  <div class="page">
    <h1 class="page-title">Saved spots</h1>
    <p v-if="favoriteSpots.length === 0" class="empty">
      You haven’t saved any spots yet. Explore and tap the heart on a spot to save it.
    </p>
    <div v-else class="grid">
      <SpotCard
        v-for="spot in favoriteSpots"
        :key="spot.id"
        :spot="spot"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { favoriteIds } = useFavorites()
const { getById } = useSpots()

const favoriteSpots = computed(() =>
  favoriteIds.value
    .map((id) => getById(id))
    .filter((s): s is NonNullable<typeof s> => s != null)
)
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.empty {
  color: var(--color-muted);
  line-height: 1.6;
}
.page-title {
  animation: fadeIn 0.4s ease-out both;
}
.grid {
  animation: fadeIn 0.4s ease-out 0.08s both;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
