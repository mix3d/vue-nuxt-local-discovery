<template>
  <header class="header">
    <NuxtLink to="/" class="logo">Local Discovery</NuxtLink>
    <div class="right">
      <nav class="nav">
        <NuxtLink to="/spots" class="nav-link">Explore</NuxtLink>
        <NuxtLink to="/favorites" class="nav-link">Saved</NuxtLink>
      </nav>
      <div class="profile-wrap">
        <button
          type="button"
          class="profile-trigger"
          aria-haspopup="true"
          :aria-expanded="isOpen"
          aria-label="Account menu"
          @click.stop="toggle"
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=LocalDiscovery"
            alt=""
            class="profile-img"
            width="36"
            height="36"
          />
        </button>
        <Transition name="dropdown">
          <div
            v-show="isOpen"
            class="dropdown"
            role="menu"
            aria-label="Account options"
            @click.stop
          >
            <div class="dropdown-header">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=LocalDiscovery"
                alt=""
                class="dropdown-avatar"
                width="40"
                height="40"
              />
              <span class="dropdown-name">Account</span>
            </div>
            <nav class="dropdown-nav">
              <button type="button" class="dropdown-item" role="menuitem" @click="close">Profile</button>
              <button type="button" class="dropdown-item" role="menuitem" @click="close">Settings</button>
              <button type="button" class="dropdown-item dropdown-item--button" role="menuitem" @click="close">
                Sign out
              </button>
            </nav>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

watch(isOpen, (open) => {
  if (!open) return
  const handler = () => close()
  nextTick(() => document.addEventListener('click', handler))
  return () => document.removeEventListener('click', handler)
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}
.logo {
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.2s ease;
}
.logo:hover {
  color: var(--color-accent);
}
.right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.nav {
  display: flex;
  gap: 1.5rem;
}
.profile-wrap {
  position: relative;
}
.profile-trigger {
  display: block;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s, transform 0.15s;
}
.profile-trigger:hover {
  box-shadow: 0 0 0 2px var(--color-accent);
  transform: scale(1.05);
}
.profile-trigger:focus-visible {
  box-shadow: 0 0 0 2px var(--color-accent);
}
.profile-img {
  display: block;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  object-fit: cover;
  background: var(--color-muted-subtle);
}
.dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 11rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 0.5rem 0;
  z-index: 50;
}
.dropdown-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem 0.75rem;
  border-bottom: 1px solid var(--color-border);
}
.dropdown-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  background: var(--color-muted-subtle);
}
.dropdown-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text);
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0;
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  color: var(--color-text);
  text-decoration: none;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;
}
.dropdown-item:hover {
  background: var(--color-muted-subtle);
  color: var(--color-accent);
}
.dropdown-item--button {
  color: var(--color-muted);
}
.dropdown-item--button:hover {
  color: var(--color-text);
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
.nav-link {
  font-size: 0.9375rem;
  color: var(--color-muted);
  text-decoration: none;
  font-weight: 500;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-accent);
}
</style>
