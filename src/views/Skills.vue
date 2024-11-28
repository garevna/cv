<script setup lang="ts">
import Roulette from '../components/Roulette.vue'
import { skills } from '../configs/roulette-items'
</script>

<template>
  <Roulette :items="skills" />
</template>
