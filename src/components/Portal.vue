<script setup lang="ts">
import { portalDescription } from '../configs/portal-description'
import ExpandedText from './ExpandedText.vue'
import { ref, reactive, useTemplateRef, onMounted, watch, inject } from 'vue'

const props = defineProps({
  isActive: Boolean,
})

// let target = ref(inject('target-component'))
// console.log(target.value)

// let sourceData = inject('sourceData')
// sourceData = ref(portalDescription)
// console.log('***: ', sourceData)

let isReady = ref(false)

// const sourceData: string[] = reactive<string[]>(portalDescription.split('\n'))

// const sourceData = ref(portalDescription)

const sourceData = ref(portalDescription)

const container = useTemplateRef('container-for-portal-description')

interface Bounds {
  width: number
}

let bounds = reactive<Bounds>({ width: 320 })

let frameWidth = ref(360)
let frameHeight = ref(360 * 1.77777777777)

watch(isReady, function (newVal) {
  if (container.value) {
    const bounds = container.value.getBoundingClientRect()
    frameWidth.value = bounds.width
    frameHeight.value = Math.floor(bounds.width / 1.77777777777)
  }
})
</script>

<template>
  <div>
    <div ref="container-for-portal-description" class="container">
      <ExpandedText :isActive="isActive" :text="sourceData" v-model="isReady" />
    </div>
    <div v-if="isActive && isReady" class="container">
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
  </div>
</template>
