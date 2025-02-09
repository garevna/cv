<script setup lang="ts">
import { injectionKeyForWin } from '@/composables'
import type { Reactive } from 'vue'
import { computed, inject, reactive, ref } from 'vue'

const win = inject(injectionKeyForWin) as Reactive<{ width: number; height: number }>

const rouletteSize = computed(() => (win.width > 430 ? 360 : win.width > 360 ? 320 : 260))
const diameter = computed(() => rouletteSize.value + 'px')
const offset = computed(() => rouletteSize.value / 2 + 'px')
const imageSize = computed(() => (win.width > 430 ? 64 : win.width > 360 ? 48 : 40))
const borderWidth = computed(() => imageSize.value + 4 + 'px')

const startAngle = 45

const image = `url(${import.meta.env.BASE_URL}images/roulette.svg)`
const center = `url(${import.meta.env.BASE_URL}images/JS.gif)`

const rouletteImage = ref(image)
const centerImage = ref(center)

const rouletteWeelAngle = ref('0deg')

interface Item {
  src: string
  width: number
  height: number
  alt: string
}

interface RouletteItem extends Item {
  index: number
  angle: number
  className: string
}

const props = defineProps({
  items: {
    type: Array<Item>,
    required: true,
  },
})

const rouletteItems: Reactive<RouletteItem[]> = reactive(
  props.items?.map((item, index) =>
    Object.assign(item, { index, angle: startAngle + index * 30, className: 'roulette-item' }),
  ),
)

function getClassName(item: RouletteItem): string {
  return item.angle === startAngle ? 'skills-item active' : 'skills-item'
}

function rotateWheelByAngle(angle: number) {
  const before = parseInt(rouletteWeelAngle.value)
  const after = before + angle > 360 ? before + angle - 360 : before + angle
  rouletteWeelAngle.value = `${after}deg`
}

function rotateRouletteItemByAngle(item: RouletteItem, angle: number) {
  const after = item.angle + angle > 360 ? item.angle + angle - 360 : item.angle + angle
  Object.assign(item, {
    angle: after,
    className: after === startAngle ? 'roulette-item active' : 'roulette-item',
  })
}

function moveRouletteItemToFront(current: RouletteItem) {
  const angle = current.angle - startAngle
  rotateWheelByAngle(angle)

  rouletteItems.forEach((item) => rotateRouletteItemByAngle(item, -angle))
}

function rotateWeel(event: MouseEvent): void {
  const target = event.target as HTMLElement
  if (target.id !== 'roulette-wheel') {
    return
  }
  rotateWheelByAngle(30)
  rouletteItems.forEach((item) => rotateRouletteItemByAngle(item, 30))
}
</script>

<template>
  <main ref="roulete-container">
    <div class="skills-container">
      <span v-for="(item, index) of rouletteItems" :key="index" :class="getClassName(item)">
        {{ item.alt }}
      </span>
    </div>
    <div class="roulette-container">
      <div id="roulette-wheel" class="roulette-wheel" @click="rotateWeel">
        <div
          v-for="(item, index) of rouletteItems"
          :key="index"
          :class="item.className"
          :style="{ transform: `rotate(${item.angle}deg)` }"
          @click="moveRouletteItemToFront(item)"
        >
          <img
            :src="item.src"
            :width="imageSize"
            :height="imageSize"
            :alt="item.alt"
            :style="{ transform: `rotate(${-item.angle}deg)` }"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.roulette-container {
  position: relative;
  right: 0;
  top: 0;
  margin-bottom: 36px;
}
.roulette-wheel {
  position: relative;
  width: v-bind(diameter);
  height: v-bind(diameter);
  box-sizing: content-box;
  border-radius: 50%;
  background: transparent;
  border: solid v-bind(borderWidth) transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  cursor: pointer;
}

.roulette-wheel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 12px transparent;
  background-image: v-bind(centerImage), v-bind(rouletteImage);
  background-size: 80px, cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate(v-bind(rouletteWeelAngle));
  z-index: -1;
  transition: all 0.5s;
  cursor: pointer;
}
.roulette-item {
  position: absolute;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.5s;
  text-align: center;
  border-radius: 50%;
  transform-origin: v-bind(offset) v-bind(offset);
  user-select: none;
  filter: grayscale(100%);
}

.active {
  filter: grayscale(0%);
}

.skills-container {
  margin: 32px 0;
}
.skills-container > span {
  display: inline-block;
  color: var(--vt-c-black-soft);
  margin: 8px;
  font-size: 16px;
  user-select: none;
}

.skills-container > span::before {
  content: '☼';
  color: var(--vt-c-green);
  font-size: 16px;
  padding: 0 8px 0 0;
  vertical-align: middle;
}

.skills-container > span.active {
  border: solid 1px #097;
  border-radius: 16px;
  padding: 4px 12px;
  font-weight: bold;
  color: var(--vt-c-green);
  background: var(--vt-c-green-alpha);
}

@media (max-width: 520px) {
  .skills-container {
    width: calc(100vw - 32px);
    text-align: center;
  }
}
</style>
