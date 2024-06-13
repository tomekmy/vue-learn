<script setup lang="ts">
import NiceButton from '../components/NiceButton.vue'
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="counter">
    <h1>This is an counter Pinia page</h1>
    <h2>{{ counter.count }}</h2>
    <h3>{{ counter.doubleCount }}</h3>
    <NiceButton @click="counter.increment">
      <template #text>Add</template>
    </NiceButton>
    <br />
    <NiceButton @click="counter.reset">
      <template #text>Reset</template>
    </NiceButton>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .counter {
    display: grid;
    justify-items: center;
  }
}
</style>
