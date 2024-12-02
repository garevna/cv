<script setup lang="ts">
import { sloganList } from '../configs/sloganList'
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'

interface SloganList {
  eng: string[]
  ua: string[]
  ru: string[]
}

const lang = ref('eng')
const order = ref(0)

const slogans: Ref = ref<SloganList>(sloganList)

const language = computed(() => {
  return lang.value
})

const messages = computed((): string[] => {
  return slogans.value[lang.value]
})

let message = ref(messages.value[0])

onMounted(() => {
  show(0)
})

function switchLang(): void {
  lang.value = lang.value === 'eng' ? 'ua' : lang.value === 'ua' ? 'ru' : 'eng'
}

async function show(timer: number): Promise<any> {
  if (timer++ < 10) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(show.bind(null, timer))
    })
    return
  }

  order.value = order.value < messages.value.length - 1 ? ++order.value : 0

  const response = await typeSlogan(messages.value[order.value], 0)

  timer = 0

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(show.bind(null, timer))
  })
}

function promise(char: string, time: number = 0.2): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(null, char), time * 1000)
  })
}

async function* typeString(message: string) {
  for (const char of message) {
    yield await promise(char)
  }
}

function typeSlogan(slogan: string, counter: number = 0): Promise<string> {
  message.value = ''
  return new Promise(async (resolve) => {
    for await (const char of typeString(slogan)) {
      message.value += char
      if (message.value.length > 36) message.value = message.value.slice(1)
    }
    resolve(message.value)
  })
}
</script>

<template>
  <div ref="running-string" class="running-string">
    <span class="language-switcher" @click="switchLang">{{ lang }}</span>
    <span>{{ message }}</span>
  </div>
</template>

<script></script>

<style>
.running-string {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 42px;
  background: var(--vt-c-green);
  padding: 8px 0;
  margin: 0 auto;
  color: #eee;
  text-align: center;
  overflow: hidden;
  text-wrap: nowrap;
  font-family: 'Ink Free', 'Comic Sans MS', 'Segoe UI', 'SegoeUI', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  word-spacing: 8px;
}

.language-switcher {
  position: absolute;
  left: 0;
  margin-top: -4px;
  background: #fff9;
  padding: 4px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  text-align: center;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: var(--vt-c-green);
}

.language-switcher:hover {
  background: #fffd;
}

@media (max-width: 850px) {
  .running-string {
    font-size: 0.8rem;
  }
}
</style>
