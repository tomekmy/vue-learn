<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router';
import { useCounterStore } from '../stores/counter'

defineProps<{
  msg: string
}>()

const counter = useCounterStore()

const route = useRoute();

watch(() => route.name, () => {
  console.log(`MyCoolComponent - watch route.name changed to ${String(route.name)}`);
});

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <h5 v-if="route.name === 'counterPinia'">Welcome to Counter Pinia: {{ counter.count }}</h5>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
