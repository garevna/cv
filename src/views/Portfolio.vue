<script setup lang="ts">
import Pineapple from '@/components/Pineapple.vue'
import Portal from '@/components/Portal.vue'
import PortfolioButtons from '@/components/PortfolioButtons.vue'
import TaskManagerDescription from '@/components/TaskManagerDescription.vue'

import type { Ref } from 'vue'
import { ref } from 'vue'

const selected: Ref<'task-manager' | 'dgtek' | 'pineapple' | null> = ref(null)
</script>

<template>
  <main>
    <div class="buttons-container">
      <PortfolioButtons v-model="selected" />
      <div class="github">
        <a href="https://github.com/garevna">
          <img src="@/assets/github.svg" alt="Github" width="36" height="36" />
          garevna
        </a>
      </div>
    </div>
    <div class="info-container">
      <TaskManagerDescription v-if="selected === 'task-manager'" />
      <Portal :isActive="selected === 'dgtek'" />
      <Pineapple :isActive="selected === 'pineapple'" />
    </div>
  </main>
</template>

<style sccs scoped>
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
</style>
