<script setup lang="ts">
import { ref, useTemplateRef, watch } from 'vue'
import { portalDescription } from '../configs/portal-description'
import ExpandedText from './ExpandedText.vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
})

let isReady = ref(false)

const sourceData = ref(portalDescription)

const container = useTemplateRef('container-for-portal-description')

let frameWidth = ref(360)
let frameHeight = ref(360 * 1.77777777777)

watch(isReady, function () {
  if (container.value) {
    const bounds = container.value.getBoundingClientRect()
    frameWidth.value = bounds.width
    frameHeight.value = Math.floor(bounds.width / 1.77777777777)
  }
})
</script>

<template>
  <div ref="container-for-portal-description" class="container">
    <ExpandedText :isActive="props.isActive" :text="sourceData" v-model="isReady" />
  </div>
  <div v-if="props.isActive && isReady" class="container youtube-player">
    <iframe
      :width="frameWidth"
      :height="frameHeight"
      src="https://www.youtube.com/embed/videoseries?list=PLaum0i8Jzw-uzioRfS95KUfMyH4Y3unkT&autoplay=1"
      title="Portal"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
/* .container {
  padding: v-bind(paddings);
} */
.youtube-player {
  justify-self: center;
}
</style>
