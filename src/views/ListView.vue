<script setup lang="ts">
import { ref } from 'vue'
import NiceButton from '../components/NiceButton.vue'
import ListItem from '../components/ListItem.vue'

const items = ref(['test1', 'test2', 'test3'])
const inputText = ref('')

const addItem = () => {
  items.value.push(inputText.value)
  inputText.value = ''
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
      <v-text-field label="" variant="outlined" v-model="inputText" />
      <NiceButton @click="addItem" :disabled="!inputText" text="Add" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.items {
  display: grid;
}
</style>
