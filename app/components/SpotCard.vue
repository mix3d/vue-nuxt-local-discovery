<template>
  <article class="card">
    <NuxtLink :to="`/spots/${spot.id}`" class="card-link">
      <div class="image-wrap">
        <img
          v-if="spot.image"
          :src="spot.image"
          :alt="spot.name"
          class="image"
          loading="lazy"
        />
        <div v-else class="image-placeholder" />
      </div>
      <div class="body">
        <span class="category">{{ categoryLabels[spot.category] }}</span>
        <h2 class="title">{{ spot.name }}</h2>
        <p class="description">{{ spot.description }}</p>
        <p v-if="spot.neighborhood" class="neighborhood">{{ spot.neighborhood }}</p>
      </div>
    </NuxtLink>
    <button
      type="button"
      class="favorite-btn"
      :aria-pressed="isFavorite(spot.id)"
      @click.prevent="toggle(spot.id)"
      @mouseenter="onHeartBtnEnter()"
      @mouseleave="heartBtnHover = false"
    >
      <HeartIcon
        :filled="isFavorite(spot.id)"
        :hover-preview-unfilled="!isFavorite(spot.id) && heartBtnHover"
        :hover-preview-filled-outline="isFavorite(spot.id) && heartBtnHover && filledAtEnter"
      />
    </button>
  </article>
</template>

<script setup lang="ts">
import type { Spot } from '~/types/spot'
import { categoryLabels } from '~/data/spots'

const { spot } = defineProps<{ spot: Spot }>()
const { toggle, isFavorite } = useFavorites()
const heartBtnHover = ref(false)
const filledAtEnter = ref(false)
function onHeartBtnEnter() {
  heartBtnHover = true
  filledAtEnter.value = isFavorite(spot.id)
}
</script>

<style scoped>
.card {
  position: relative;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.25s ease;
}
.card:hover {
  box-shadow: 0 12px 28px -12px rgba(28, 25, 23, 0.12), 0 4px 12px -4px rgba(22, 101, 52, 0.1);
  transform: translateY(-3px);
  border-color: rgba(22, 101, 52, 0.25);
}
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
.image-wrap {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-muted-subtle);
}
.image,
.image-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.body {
  padding: 1.25rem;
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
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.25rem 0 0.5rem;
  color: var(--color-text);
  line-height: 1.3;
}
.description {
  font-size: 0.9375rem;
  color: var(--color-muted);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.neighborhood {
  font-size: 0.8125rem;
  color: var(--color-muted);
  margin: 0.5rem 0 0;
}
.favorite-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  background: var(--color-surface);
  color: var(--color-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  transition: opacity 0.2s ease, background 0.2s, color 0.2s;
  box-shadow: var(--shadow-sm);
  opacity: 0;
}
.card:hover .favorite-btn,
.favorite-btn:has(.heart-icon--filled) {
  opacity: 1;
}
.favorite-btn:hover {
  background: var(--color-surface);
  color: var(--color-accent);
}
.favorite-btn:has(.heart-icon--filled) {
  color: var(--color-accent);
}
</style>
