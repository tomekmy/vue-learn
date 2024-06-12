<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
const resetCounter = () => {
  counter.value = 0
}
</script>

<template>
  <div class="counter">
    <h1>This is an counter page</h1>
    <h2>{{ counter }}</h2>
    <button @click="counter++">Add</button>
    <br />
    <button @click="resetCounter">Reset</button>
  </div>
</template>

<style>
button {
  width: 150px;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .counter {
    display: grid;
    justify-items: center;
  }
}
</style>
