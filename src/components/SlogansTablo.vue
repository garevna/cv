<script setup lang="ts">
import { images, slogans } from '@/configs'
import { computed, ref } from 'vue'

const backgrounds = images.map(
  (imageName) => `url(${import.meta.env.BASE_URL}slogans/${imageName}.svg)`,
)

const currentBackground = computed(() => backgrounds[index.value])
const currentSlogan = computed(() => slogans[index.value])

const index = ref(0)
const start = ref(0)
const transform = ref('rotateX(180deg)')
const height = ref('144px')
const blendMode = ref('screen')

function recurse(timestamp: number) {
  if (!start.value) {
    start.value = timestamp
  }
  if (timestamp - start.value >= 1) {
    transform.value = 'rotateX(0deg)'
    height.value = '336px'
    blendMode.value = 'normal'
  }
  if (timestamp - start.value >= 9000) {
    transform.value = 'rotateX(180deg)'
  }
  if (timestamp - start.value >= 9200) {
    transform.value = 'rotateX(180deg)'
    height.value = '144px'
    blendMode.value = 'screen'
  }

  if (timestamp - start.value >= 10000) {
    index.value = index.value === backgrounds.length - 1 ? 0 : index.value + 1
    transform.value = 'rotateX(180deg)'
    height.value = '144px'
    start.value = timestamp
  }
  requestAnimationFrame(recurse)
}

requestAnimationFrame(recurse)
</script>

<template v-if="!showDGtek && !showPineapple">
  <div class="tablo">
    <h4>{{ currentSlogan }}</h4>
  </div>
</template>

<style sccs scoped>
div.tablo {
  width: 320px;
  height: 480px;
  border-radius: 1em;
  perspective: 1200px;
  background: #ddd;
  border: solid 1px #eee;
  box-shadow:
    0 0.125em 0.3125em rgba(0, 0, 0, 0.25),
    0 0.02125em 0.06125em rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  align-self: self-start;
}

div.tablo::before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 30%;
  border-radius: 0 0 1em 1em;
  width: 100%;
  height: v-bind(height);
  transform-origin: center top;
  transform-origin: 0 0;
  transform: v-bind(transform);
  transition: all 1s;
  background: #ddd;
  border: solid 1px #eee;
  transition: 0.7s ease-in-out transform;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: v-bind(currentBackground);
  background-blend-mode: v-bind(blendMode);
}

.tablo h4 {
  margin: 16px 24px;
}
</style>
