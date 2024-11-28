<script setup lang="ts">
import Portal from '../components/Portal.vue'
import Pineapple from '../components/Pineapple.vue'
import GlitchLogo from '../components/GlitchLogo.vue'

import { portalDescription } from '../configs/portal-description'
import { pineappleDescription } from '../configs/pineapple-description'

import { ref, computed, provide } from 'vue'

let showDGtek = ref(false)
let showPineapple = ref(false)

// const state = ref({ sourceData: '', source: '' })
provide(
  'source-data',
  computed(() =>
    showDGtek.value ? portalDescription : showPineapple.value ? pineappleDescription : '',
  ),
)
provide(
  'target-component',
  computed(() => (showDGtek.value ? 'dgtek' : showPineapple.value ? 'pineapple' : '')),
)

function clickDGtek(): void {
  showDGtek.value = !showDGtek.value
  showPineapple.value = showDGtek.value ? false : showPineapple.value
}
function clickPineapple() {
  showPineapple.value = !showPineapple.value
  showDGtek.value = showPineapple.value ? false : showDGtek.value
}
const buttonCharDGtek = computed(() => (showDGtek.value ? '▲' : '▼'))
const buttonCharPineapple = computed(() => (showPineapple.value ? '▲' : '▼'))
</script>

<template>
  <main>
    <h2>Portfolio</h2>
    <button @click="clickDGtek" class="button">
      <img src="../assets/dgtek.png" alt="DGtek logo" width="64" />
      <h4 class="green">Portal {{ buttonCharDGtek }}</h4>
    </button>
    <Portal :isActive="showDGtek" />

    <button @click="clickPineapple" class="button">
      <img src="../assets/pineapple.png" alt="Pineapple logo" width="52" />
      <h4>CMS {{ buttonCharPineapple }}</h4>
    </button>
    <Pineapple :isActive="showPineapple" />

    <button class="button">
      <GlitchLogo width="56px" heigh="56px" />
      <h4>
        JS-lessons
        <a href="https://garevna.github.io/js-lessons/" target="_blank" rel="noopener">
          <img src="../assets/open-in-new.svg" width="24" height="24" alt="JS-lessons" />
        </a>
      </h4>
    </button>

    <button class="button">
      <img src="../assets/js-icon.svg" width="64" height="64" alt="js-quiz" />
      <h4>
        JS-lessons
        <a href="https://garevna.github.io/js-quiz/" target="_blank" rel="noopener">
          <img src="../assets/open-in-new.svg" width="24" height="24" alt="JS-lessons" />
        </a>
      </h4>
    </button>
  </main>
</template>

<style>
.button {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 64px;
  grid-template-areas: 'image title';
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  /* background: #ddd; */
  outline: none;
  padding: 4px 8px;
}
.button > img {
  grid-area: image;
  align-self: center;
}
.button > h4 {
  grid-area: title;
  align-self: center;
  text-align: end;
  font-weight: bold;
  font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
  color: #075;
}

.button > h4:hover {
  color: var(--vt-c-green-light);
}

.button a > img {
  vertical-align: text-bottom;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
