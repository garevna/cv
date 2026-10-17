<script setup lang="ts">
/**
 * One description for every project that has one.
 *
 * There used to be three shapes doing this job: Portal.vue and Pineapple.vue,
 * each a wrapper around ExpandedText with its prose in a config file of its
 * own, and TaskManagerDescription.vue with its text written into its markup.
 * Two of the three also carried an extra — a video for the portal, a demo
 * button for the CMS — which is the only part that actually differed.
 *
 * So both extras live here, optional, and the prose comes from the project
 * data. The task manager keeps its own component: its description is a layout
 * rather than a paragraph, which is a real difference and not worth flattening.
 */
import { ref, useTemplateRef, watch } from 'vue'

import ExpandedText from './ExpandedText.vue'
import openInNew from '@/assets/open-in-new.svg'
import type { PortfolioProject } from '@/configs/portfolio-projects'

const props = defineProps<{
  project: PortfolioProject
  isActive: boolean
}>()

const isReady = ref(false)

const container = useTemplateRef('container')

/**
 * The embedded player is sized from the container rather than given fixed
 * numbers, so it keeps 16:9 at whatever width the column turns out to be.
 */
const frameWidth = ref(360)
const frameHeight = ref(Math.floor(360 / (16 / 9)))

watch(isReady, () => {
  if (!container.value) return
  const bounds = container.value.getBoundingClientRect()
  frameWidth.value = bounds.width
  frameHeight.value = Math.floor(bounds.width / (16 / 9))
})
</script>

<template>
  <div ref="container" class="container">
    <ExpandedText
      v-model="isReady"
      :isActive="props.isActive"
      :text="props.project.description"
      :role="props.project.role"
      :stack="props.project.stack"
    />

    <a v-if="props.isActive && props.project.demo" :href="props.project.demo.href" target="_blank">
      <button class="demo">
        {{ props.project.demo.label }}
        <img
          :src="openInNew"
          width="24"
          height="24"
          :alt="props.project.demo.label"
          class="highlighted-on-hover"
          style="vertical-align: text-bottom"
        />
      </button>
    </a>
  </div>

  <div v-if="props.isActive && isReady && props.project.video" class="container youtube-player">
    <iframe
      :width="frameWidth"
      :height="frameHeight"
      :src="props.project.video"
      :title="props.project.label"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.container {
  padding: 16px;
}

button.demo {
  border: none;
  background: transparent;
  font-family: Montserrat, monospace;
  font-size: 16px;
  font-weight: bold;
  color: var(--vt-c-green);
  cursor: pointer;
}

.youtube-player {
  justify-self: center;
}
</style>
