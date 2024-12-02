<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { provide, reactive, onMounted, onUnmounted } from 'vue'
import Education from './components/Education.vue'
import RunningStrings from './components/RunningStrings.vue'

onMounted(() => window.addEventListener('resize', winResize))
onUnmounted(() => window.removeEventListener('resize', winResize))

let win = reactive({
  width: 420,
  height: 480,
})

function winResize(): void {
  win.width = window.innerWidth
  win.height = window.innerHeight
}

provide('win', win)
</script>

<template>
  <RunningStrings />

  <header>
    <img alt="garevna" class="logo" src="@/assets/garevna-theatre.jpg" width="160" height="160" />

    <div class="wrapper">
      <Education msg="IRINA FYLYPPOVA" />
    </div>

    <nav>
      <RouterLink class="link" to="/">Skills</RouterLink>
      <RouterLink class="link" to="/portfolio">Portfolio</RouterLink>
      <RouterLink class="link" to="/reviews">Reviews</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
