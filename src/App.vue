<script setup lang="ts">
import { injectionKeyForWin } from '@/composables'
import { onMounted, onUnmounted, provide, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

onMounted(() => window.addEventListener('resize', winResize))
onUnmounted(() => window.removeEventListener('resize', winResize))

const win = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
})

function winResize(): void {
  Object.assign(win, {
    width: window.innerWidth,
    height: window.innerHeight,
  })
}

provide(injectionKeyForWin, win)
</script>

<template>
  <!-- <RunningStrings /> -->

  <header>
    <!-- <img alt="garevna" class="logo" src="@/assets/garevna-2.jpg" width="160" height="260" />

    <div class="wrapper">
      <Education msg="IRINA FYLYPPOVA" />
    </div>

    <RunningStrings /> -->

    <nav>
      <RouterLink class="link" to="/">About</RouterLink>
      <RouterLink class="link" to="/skills">Skills</RouterLink>
      <RouterLink class="link" to="/portfolio">Portfolio</RouterLink>
      <RouterLink class="link" to="/reviews">Reviews</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
nav {
  text-align: center;
  margin: 32px 0 48px;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1044px;
  margin: 0 auto;
  justify-self: center;
  align-items: center;
  justify-items: center;
  overflow-x: hidden;
  overflow-y: visible;
  padding: 0 16px;
  column-gap: 36px;
}

nav > .link {
  color: #777;
  text-decoration: none;
  font-size: 18px;
}

nav > .link:not(:last-child):after {
  content: '  |  ';
  color: #ddd;
  text-decoration: none;
}

nav > .router-link-active,
nav > .router-link-exact-active {
  color: #097 !important;
  text-decoration: none;
}

h1 {
  text-transform: uppercase;
  color: #075;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 24px 0;
}

h2 {
  text-transform: uppercase;
  color: #097;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 16px 0;
}

h3 {
  text-transform: uppercase;
  color: #098;
  font-size: 16px;
  font-weight: bold;
}

@media (hover: hover) {
  a:hover {
    background-color: transparent;
  }
}

@media (max-width: 900px) {
  main {
    display: block;
    width: 100vw;
    height: max-content;
    overflow-x: clip;
  }
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: #ccc;
  box-shadow: inset 0 0 1px #0007;
  border-radius: 1px;
}

::-webkit-scrollbar-thumb {
  background: var(--vt-c-green);
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--vt-c-green-light);
}

.highlighted-on-hover:hover {
  filter: brightness(1.5);
}
</style>
