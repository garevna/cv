<script setup>
import { pineappleDescription } from '../configs/pineapple-description'
import ExpandedText from './ExpandedText.vue'
import { ref, reactive, useTemplateRef, onMounted, watch, inject } from 'vue'

const props = defineProps({
  isActive: Boolean,
})

const sourceData = ref(pineappleDescription)
</script>

<template>
  <div class="container">
    <ExpandedText
      :text="sourceData"
      :isActive="isActive"
      role="Senior Vue.js | Nuxt.js | Node.js developer"
      stack="Vue.js • Nuxt.js • Vuex • Vuetify • Node.js • Express"
    />
    <a href="https://garevna.github.io/pineapple-lands-editor" target="_blank" v-if="isActive">
      <button class="demo">
        Demo version
        <img
          src="/src/assets/open-in-new.svg"
          width="24"
          height="24"
          alt="Open demo version"
          class="highlighted-on-hover"
          style="vertical-align: text-bottom"
        />
      </button>
    </a>
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
  font-size: 18px;
  font-weight: bold;
  color: var(--vt-c-green);
  cursor: pointer;
}
</style>
