<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button>
    <slot name="icon"></slot>
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 150px;
  cursor: pointer;
  border-radius: 5px;
  border-color: red;
  border-width: 2px;
  border-style: solid;
  height: 30px;
}
</style>
