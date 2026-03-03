<template>
  <div v-if="spot" class="page">
    <NuxtLink to="/spots" class="back">← Back to spots</NuxtLink>
    <div class="detail">
      <div class="image-wrap">
        <img
          v-if="spot.image"
          :src="spot.image"
          :alt="spot.name"
          class="image"
        />
        <div v-else class="image-placeholder" />
      </div>
      <div class="body">
        <span class="category">{{ categoryLabels[spot.category] }}</span>
        <h1 class="title">{{ spot.name }}</h1>
        <p v-if="spot.neighborhood" class="neighborhood">{{ spot.neighborhood }}</p>
        <p class="description">{{ spot.description }}</p>
        <p class="address">{{ spot.address }}</p>
        <div v-if="spot.tip" class="tip">
          <strong>Tip:</strong> {{ spot.tip }}
        </div>
        <button
          type="button"
          class="favorite-btn"
          :aria-pressed="isFavorite(spot.id)"
          @click="toggle(spot.id)"
          @mouseenter="onHeartBtnEnter()"
          @mouseleave="heartBtnHover = false"
        >
          <HeartIcon
            :filled="isFavorite(spot.id)"
            :hover-preview-unfilled="!isFavorite(spot.id) && heartBtnHover"
            :hover-preview-filled-outline="spot && isFavorite(spot.id) && heartBtnHover && filledAtEnter"
          />
          {{ isFavorite(spot.id) ? 'Saved' : 'Save spot' }}
        </button>
      </div>
    </div>
  </div>
  <div v-else class="page">
    <p class="empty">Spot not found.</p>
    <NuxtLink to="/spots">Browse all spots</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getById, categoryLabels } = useSpots()
const { toggle, isFavorite } = useFavorites()

const spot = computed(() => getById(route.params.id as string))
const heartBtnHover = ref(false)
const filledAtEnter = ref(false)
function onHeartBtnEnter() {
  heartBtnHover = true
  filledAtEnter.value = !!spot.value && isFavorite(spot.value.id)
}
</script>

<style scoped>
.page {
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}
.back {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-size: 0.9375rem;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}
.back:hover {
  color: var(--color-accent);
}
.detail {
  display: grid;
  gap: 2rem;
  animation: fadeSlideUp 0.5s ease-out both;
}
@media (min-width: 640px) {
  .detail {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}
.image-wrap {
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-muted-subtle);
  box-shadow: var(--shadow-md);
}
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.image,
.image-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.category {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-accent);
}
.title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0.25rem 0 0.5rem;
}
.neighborhood {
  font-size: 0.9375rem;
  color: var(--color-muted);
  margin: 0 0 1rem;
}
.description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0 0 1rem;
}
.address {
  font-size: 0.9375rem;
  color: var(--color-muted);
  margin: 0 0 1rem;
}
.tip {
  font-size: 0.9375rem;
  padding: 1rem 1.25rem;
  background: var(--color-accent-warm-subtle);
  border: 1px solid rgba(180, 83, 9, 0.15);
  border-radius: var(--radius-md);
  color: var(--color-text);
  margin: 0 0 1.5rem;
}
.tip strong {
  color: var(--color-accent-warm);
}
.favorite-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text);
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: var(--shadow-sm);
}
.favorite-btn:hover {
  background: var(--color-accent-subtle);
  border-color: var(--color-accent);
  color: var(--color-accent);
  box-shadow: 0 2px 8px rgba(22, 101, 52, 0.12);
}
.favorite-btn:has(.heart-icon--filled) {
  color: var(--color-accent);
}
.empty {
  color: var(--color-muted);
  margin-bottom: 1rem;
}
</style>
