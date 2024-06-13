<script setup lang="ts">
import { ref } from 'vue'
import NiceButton from '../components/NiceButton.vue'

const counter = ref(0)
const resetCounter = () => {
  counter.value = 0
}
</script>

<template>
  <div class="counter">
    <h1>This is an counter page</h1>
    <h2 :class="[counter > 10 ? 'redColor' : '']">{{ counter }}</h2>
    <NiceButton @click="counter++">
      <template #text>Add</template>
    </NiceButton>
    <br />
    <NiceButton @click="resetCounter">
      <template #text>Reset</template>
    </NiceButton>
  </div>
</template>

<style>
.redColor {
  color: red;
}
@media (min-width: 1024px) {
  .counter {
    display: grid;
    justify-items: center;
  }
}
</style>
