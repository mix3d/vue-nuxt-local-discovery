<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="heart-icon"
    :class="{
      'heart-icon--filled': filled,
      'heart-icon--unfilled-hover': hoverPreviewUnfilled,
      'heart-icon--filled-hover': hoverPreviewFilledOutline
    }"
    aria-hidden="true"
  >
    <path
      class="heart-icon__main"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  filled?: boolean
  hoverPreviewUnfilled?: boolean
  hoverPreviewFilledOutline?: boolean
}>()
</script>

<style scoped>
.heart-icon {
  display: block;
  width: 1em;
  height: 1em;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.25;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.heart-icon__main {
  fill: none;
  stroke: currentColor;
  transition: fill 0.2s ease, stroke 0.2s ease, opacity 0.2s ease;
}

/* Unfilled + button hover: semi-transparent fill only, no stroke */
.heart-icon--unfilled-hover .heart-icon__main {
  fill: currentColor;
  stroke: none;
  opacity: 0.5;
}

/* Filled: solid fill, no stroke */
.heart-icon--filled .heart-icon__main {
  fill: currentColor;
  stroke: none;
}

/* Filled + button hover: semi-transparent filled (like unselected hover look) */
.heart-icon--filled-hover .heart-icon__main {
  opacity: 0.6;
}
</style>
