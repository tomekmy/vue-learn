<script setup lang="ts">
import { ref } from 'vue'
import NiceButton from '../components/NiceButton.vue'
import ListItem from '../components/ListItem.vue'

const items = ref(['test1', 'test2', 'test3'])
const inputText = ref('')
const addItem = () => {
  items.value.push(inputText.value)
}

const removeItem = (index: number) => {
  items.value.splice(index, 1)
}
</script>

<template>
  <div class="items">
    <ul>
      <ListItem
        v-for="(item, index) in items"
        :key="item"
        :itemIndex="index"
        :removeItem="removeItem"
      >
        <template #text>{{ item }}</template>
      </ListItem>
    </ul>
    <div>
      <input type="text" v-model="inputText" />
      <NiceButton @click="addItem" text="Add" />
    </div>
  </div>
</template>

<style>
.items {
  display: grid;
}
</style>
