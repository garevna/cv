<script setup lang="ts">
import PortfolioButtons from '@/components/PortfolioButtons.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import TaskManagerDescription from '@/components/TaskManagerDescription.vue'

import { portfolioProjects } from '@/configs/portfolio-projects'

import type { Ref } from 'vue'
import { ref } from 'vue'

const selected: Ref<string | null> = ref(null)

/**
 * Every project that opens something — so a tile with a button always has a
 * description behind it. The page used to render three descriptions against
 * eight buttons, which left VD EXPRESS, IS PORTAL, BUS PORTAL, ITNET and Roles
 * manager doing nothing at all when pressed.
 */
const described = portfolioProjects.filter((project) => project.selects)
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
      <template v-for="project in described" :key="project.label">
        <TaskManagerDescription
          v-if="project.component === 'task-manager'"
          :isActive="selected === project.selects"
        />
        <ProjectDescription v-else :project="project" :isActive="selected === project.selects" />
      </template>
    </div>
  </main>
</template>

<style scoped>
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
