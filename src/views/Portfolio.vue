<script setup lang="ts">
import Pineapple from '@/components/Pineapple.vue'
import Portal from '@/components/Portal.vue'
import PortfolioButtons from '@/components/PortfolioButtons.vue'
import TaskManagerDescription from '@/components/TaskManagerDescription.vue'

import type { Ref } from 'vue'
import { ref } from 'vue'

const selected: Ref<'roles-manager' | 'task-manager' | 'dgtek' | 'pineapple' | null> = ref(null)
</script>

<template>
  <main>
    <div class="buttons-container">
      <PortfolioButtons v-model="selected" />
      <div class="github">
        <a href="https://github.com/garevna" target="_blank">
          <img src="@/assets/github.svg" alt="Github" width="36" height="36" />
          garevna
        </a>
      </div>
    </div>
    <div class="info-container">
      <TaskManagerDescription :isActive="selected === 'task-manager'" />
      <Portal :isActive="selected === 'dgtek'" />
      <Pineapple :isActive="selected === 'pineapple'" />
    </div>
  </main>
</template>

<style sccs scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'buttons description';
}

.buttons-container {
  grid-area: buttons;
}

.info-container {
  grid-area: description;
}

.buttons-container,
.info-container {
  align-self: start;
  justify-items: center;
}

.github {
  width: 100%;
  margin: 64px 0 0 48px;
}

.github img {
  vertical-align: middle;
}

.github a {
  text-decoration: none;
  color: #444;
}

@media (max-width: 600px) {
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'buttons'
      'description';
    justify-items: center;
    row-gap: 48px;
    justify-content: center;
  }
}
</style>
