<script setup lang="ts">
defineProps<{
  itemIndex: number
  removeItem: (itemIndex: number) => void
}>()
</script>

<template>
  <li>
    <slot name="text"></slot>
    <span @click="() => removeItem(itemIndex)">X</span>
  </li>
</template>

<style lang="scss" scoped></style>
