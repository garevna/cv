<script setup lang="ts">
const props = defineProps({
  alt: String,
})
</script>

<template>
  <span class="icon icon-back">
    <img
      src="@/assets/button-pointer.svg"
      width="24"
      height="24"
      :alt="alt"
      class="highlighted-on-hover"
    />
  </span>
</template>
