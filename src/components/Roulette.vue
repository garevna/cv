<script setup lang="ts">
import { useTemplateRef, reactive, ref, onMounted, inject, computed } from 'vue'

interface Win {
  width: number
  height: number
}

let win = inject('win') as Win

onMounted(() => {})

const rouletteSize = ref(360)
const offset = ref('180px')

const image = `url(${import.meta.env.BASE_URL}images/roulette.svg)`
const center = `url(${import.meta.env.BASE_URL}images/JS.gif)`

const rouletteImage = ref(image)
const centerImage = ref(center)

const rouletteWeelAngle = ref('0deg')

interface RouletteItem {
  src: string
  width: number
  height: number
  alt: string
}

const props = defineProps({
  items: Array<RouletteItem>,
})

const state = reactive<{ angles: number[] }>({
  angles: [],
})
console.log(import.meta.env.BASE_URL)

function showDescription(item: RouletteItem) {
  console.log(item.alt)
}

function rotateWeel(event: Event): void {
  let angle = parseInt(rouletteWeelAngle.value)
  angle += angle < 330 ? 30 : 0
  rouletteWeelAngle.value = `${angle + 30}deg`
  state.angles.forEach(
    (angle, index) =>
      (state.angles[index] = state.angles[index] < 330 ? state.angles[index] + 30 : 0),
  )
}

onMounted(() => {
  props.items &&
    props.items.map((item, index) => {
      state.angles.push(index * 30)
    })
})
</script>

<template>
  <main ref="roulete-container">
    <div class="skills-container">
      <span v-for="(item, index) of items" :key="index" class="skills-item">
        {{ item.alt }}
      </span>
    </div>
    <div class="roulette-container">
      <div ref="roulette-wheel" class="roulette-wheel" @click="rotateWeel">
        <div
          v-for="(item, index) of props.items"
          :key="index"
          class="roulette-item"
          :style="{ transform: `rotate(${state.angles[index]}deg)` }"
          @click="showDescription(item)"
        >
          <img
            :src="item.src"
            :width="item.width"
            :height="item.height"
            :alt="item.alt"
            :style="{ transform: `rotate(${-state.angles[index]}deg)` }"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* main {
  width: 50vw;
  height: 50vw;
} */
.roulette-container {
  position: relative;
  right: 0;
  top: 0;
}
.roulette-wheel {
  position: relative;
  width: 360px;
  height: 360px;
  box-sizing: content-box;
  border-radius: 50%;
  background: transparent;
  border: solid 64px transparent;
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
  border: solid 10px transparent;
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
  width: 64px;
  height: 64px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.5s;
  text-align: center;
  border-radius: 50%;
  transform-origin: v-bind(offset) v-bind(offset);
}

.skills-container {
  margin: 16px 0;
}
.skills-container > span {
  display: inline-block;
  color: #455;
  margin: -8px 8px;
  font-size: 16px;
}

.skills-container > span::before {
  content: '•';
  color: #095;
  font-size: 36px;
  padding: 0 8px 0 0;
  vertical-align: sub;
}

.skills-container > span.active {
  color: #455;
  margin: 16px 8px;
  font-size: 16px;
}

@media (max-width: 520px) {
  .skills-container {
    width: calc(100vw - 32px);
    text-align: center;
  }
  /* .roulette-container {
    position: absolute;
    left: calc(50% - 64px);
    top: calc(50% + 80px);
    transform: translate(-50%, -50%);
  } */
  /* .roulette-wheel {
    right: 25%;
  } */
}

/* @media (max-width: 420px) {
  .skills-container {
    width: calc(100vw - 64px);
    justify-self: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  .roulette-container {
    position: absolute;
    left: calc(50% - 64px);
    top: calc(50% + 80px);
    transform: translate(-50%, -50%);
  }
  .roulette-wheel {
    right: 25%;
  }
} */
</style>
