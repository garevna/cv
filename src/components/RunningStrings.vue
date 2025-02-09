<script setup lang="ts">
import { sloganList } from '@/configs'
// import type { Ref } from 'vue'
// import { computed, onMounted, ref } from 'vue' /* PartiallyEnd: #3632/both.vue */
import { computed, onMounted, ref } from 'vue'

type SloganList = {
  eng: string[]
  ua: string[]
  ru: string[]
}

const lang = ref('eng')

// const slogans: Ref = ref<SloganList>(sloganList)

const slogans = computed(() => sloganList[lang.value as keyof SloganList].join(' • '))
const string = ref(slogans.value)

// const messages = computed((): string[] => {
//   return slogans.value[lang.value]
// })

// let message = ref(messages.value[0])

onMounted(() => {
  show(0)
})

function switchLang(): void {
  lang.value = lang.value === 'eng' ? 'ua' : lang.value === 'ua' ? 'ru' : 'eng'
}

async function show(timer: number): Promise<any> {
  // if (timer++ < 10) {
  //   window.requestAnimationFrame(() => {
  //     window.requestAnimationFrame(show.bind(null, timer))
  //   })
  //   return
  // }

  // order.value = order.value < messages.value.length - 1 ? ++order.value : 0

  if (timer++ === 8) {
    string.value = string.value.slice(1) + string.value.slice(0)[0]
    timer = 0
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(show.bind(null, timer))
  })
}
</script>

<template>
  <div ref="running-string" class="running-string">
    <span class="language-switcher" @click="switchLang">{{ lang }}</span>
    <!-- <span>{{ message }}</span> -->
    <span>{{ string }}</span>
  </div>
</template>

<script></script>

<style>
.running-string {
  /* z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; */
  /* border-radius: 8px; */
  /* height: 42px; */
  /* background: var(--vt-c-green); */
  /* padding: 8px; */
  position: relative;
  margin: 8px auto;
  /* color: #eee; */
  max-width: 320px;
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
