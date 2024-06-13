<script setup lang="ts">
defineProps<{
  itemIndex: number
  removeItem: (itemIndex: number) => void
}>()
</script>

<template>
  <li class="item">
    <div>
      <slot name="text"></slot>
    </div>
    <div class="close" @click="() => removeItem(itemIndex)">X</div>
  </li>
</template>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-auto-flow: column;
}
.close {
  cursor: pointer;
  &:hover {
    color: red;
  }
}
</style>
