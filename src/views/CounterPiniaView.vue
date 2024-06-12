<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="counter">
    <h1>This is an counter Pinia page</h1>
    <h2>{{ counter.count }}</h2>
    <h3>{{ counter.doubleCount }}</h3>
    <button @click="counter.increment">Add</button>
    <br />
    <button @click="counter.reset">Reset</button>
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
