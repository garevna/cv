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
  <header>
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
