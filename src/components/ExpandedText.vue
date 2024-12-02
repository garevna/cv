<script setup lang="ts">
import { ref, reactive, watch, onBeforeMount, onMounted, onBeforeUnmount, computed } from 'vue'

const isReady = defineModel()

const props = defineProps({
  isActive: Boolean,
  text: String,
  role: {
    type: String,
    default: 'Senior JS | Vue.js developer',
  },
  stack: {
    type: String,
    default:
      'Vue.js • Vue router • Vuex • Vuetify • REST API • web-workers • IndexedDB • npm registry',
  },
})

const paddings = computed(() => (props.isActive ? '16px' : '0'))
const marginBottom = computed(() => (props.isActive ? '8px' : '0'))

const data = reactive<string[]>([])
const lines = reactive<string[]>([])

function show(): void {
  let counter = 0
  for (let i = 0; i < data.length; i++) {
    const line: string = data[i] || '\n'
    for (let n = 0; n < line.length; n++) {
      setTimeout(() => {
        if (props.isActive) lines[i] = line.slice(0, n + 1)
      }, 4 * counter++)
    }
  }

  isReady.value = true
}

function hide(): Promise<boolean> {
  let counter = 0
  for (let i = 0; i < lines.length; i++) {
    for (let n = 0; n <= lines[i].length; n++) {
      setTimeout(() => {
        lines[i] = lines[i].slice(0, -1)
      }, counter++)
    }
  }
  isReady.value = false
  return new Promise((resolve) => resolve(true))
}

onMounted(() => {
  if (!props.text) {
    console.warn('props.text is not defined')
  } else {
    data.push(...props.text.split('\n'))
    lines.push(...new Array<string>(data.length).fill(''))
    hide()
  }
})

watch(props, async (newVal, oldVal) => {
  newVal.isActive ? show() : await hide()
})
</script>

<template>
  <div class="container">
    <div v-if="isActive" class="role">
      Role: <span>{{ props.role }}</span>
    </div>

    <div v-if="isActive" class="stack">
      <b>Stack: </b><span class="stack-items">{{ props.stack }}</span>
    </div>

    <p v-for="(line, index) of lines" :key="index">
      <span v-if="line.length">{{ line }}</span>
    </p>
  </div>
</template>

<style scoped>
.container {
  padding: v-bind(paddings);
}
.container > p {
  margin-bottom: v-bind(marginBottom);
  font-size: 14px;
  text-indent: 24px;
  text-align: justify;
}
.role {
  text-align: right;
  color: var(--vt-c-black-mute);
  padding-bottom: v-bind(paddings);
}

.stack {
  text-align: justify;
  padding-bottom: v-bind(paddings);
}

.stack-items {
  color: var(--vt-c-green-dark);
  margin: v-bind(paddings) 0;
}
</style>
