<script setup lang="ts">
import AboutMe from '@/components/AboutMe.vue'
// import SlogansTablo from '@/components/SlogansTablo.vue' /* PartiallyEnd: #3632/scriptSetup.vue */
import SlogansTablo from '@/components/SlogansTablo.vue'
</script>

<template>
  <main>
    <AboutMe />
    <SlogansTablo />
  </main>
</template>

<style lang="css" scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-items: right;
}
@media (max-width: 600px) {
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    row-gap: 48px;
  }
}
</style>
