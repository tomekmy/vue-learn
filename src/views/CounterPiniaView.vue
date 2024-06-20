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
    <NiceButton @click="counter.increment" text="Add" />
    <br />
    <v-btn @click="counter.reset" prepend-icon="$vuetify" variant="outlined">
      Reset
    </v-btn>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .counter {
    display: grid;
    justify-items: center;
  }
}
</style>
