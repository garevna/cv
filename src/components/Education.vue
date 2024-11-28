<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h2>{{ msg }}</h2>
    <h4>
      Master in Mathematics<br />
      V. N. Karazin Kharkiv National University<br />
      PhD, docent
    </h4>
  </div>
</template>

<style scoped>
.greetings h2 {
  font-weight: bold;
  font-size: 2rem;
  position: relative;
  top: -10px;
  color: var(--vt-c-green);
}

.greetings h4 {
  font-size: 0.9rem;
  color: var(--vt-c-black-soft);
}

.greetings h2,
.greetings h4 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h2,
  .greetings h4 {
    text-align: left;
  }
}

@media (max-width: 600px) {
  .greetings h2,
  .greetings h4 {
    text-align: center;
  }
}
</style>
