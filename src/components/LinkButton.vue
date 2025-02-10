<script setup lang="ts">
const props = defineProps({
  alt: String,
  callback: {
    type: Function,
    default: (_event: MouseEvent) => {
      console.log(_event)
    },
  },
})

function clickHandler() {
  if (props.callback) {
    props.callback()
  }
}
</script>

<template>
  <span class="icon icon-back" @click="clickHandler">
    <img
      src="@/assets/open-in-new.svg"
      width="24"
      height="24"
      :alt="alt"
      class="highlighted-on-hover"
      style="vertical-align: text-bottom"
    />
  </span>
</template>
