<template>
  <div class="page home">
    <section class="hero">
      <h1 class="hero-title">Discover your neighborhood</h1>
      <p class="hero-subtitle">
        Cafes, parks, small businesses, and events — all in one place.
      </p>
      <NuxtLink to="/spots" class="hero-cta">Explore spots</NuxtLink>
    </section>
    <section class="section section-categories">
      <h2 class="section-title">Browse by category</h2>
      <div class="categories">
        <CategoryPill
          v-for="(label, key) in categoryLabels"
          :key="key"
          :label="label"
          :href="`/spots?category=${key}`"
        />
      </div>
    </section>
    <section class="section section-featured">
      <h2 class="section-title">Featured spots</h2>
      <div class="grid">
        <SpotCard
          v-for="(spot, i) in featuredSpots"
          :key="spot.id"
          :spot="spot"
          :style="{ animationDelay: `${0.15 * i}s` }"
        />
      </div>
      <NuxtLink to="/spots" class="link-more">View all spots →</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
const { spots, categoryLabels } = useSpots()

const featuredSpots = computed(() => spots.slice(0, 3))
</script>

<style scoped>
.page {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}
.hero {
  text-align: center;
  padding: 5rem 0 4rem;
}
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
  animation: fadeSlideUp 0.7s ease-out both;
}
.hero-subtitle {
  font-size: 1.1875rem;
  color: var(--color-muted);
  max-width: 26rem;
  margin: 0 auto 2rem;
  line-height: 1.6;
  animation: fadeSlideUp 0.6s ease-out 0.12s both;
}
.hero-cta {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: fadeSlideUp 0.5s ease-out 0.24s both;
}
.hero-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px -4px rgba(22, 101, 52, 0.4);
}
.section {
  margin-top: 3.5rem;
}
.section-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 1.25rem;
}
.section-categories .section-title {
  animation: fadeSlideUp 0.5s ease-out 0.2s both;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  animation: fadeSlideUp 0.5s ease-out 0.28s both;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.grid :deep(.card) {
  animation: fadeSlideUp 0.5s ease-out both;
}
.link-more {
  display: inline-block;
  margin-top: 1.75rem;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color 0.2s;
}
.link-more:hover {
  color: var(--color-accent-warm);
}
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
