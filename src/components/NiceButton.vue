<template>
  <button>
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 150px;
  cursor: pointer;
  border-radius: 5px;
  border-color: red;
  border-width: 2px;
  border-style: solid;
  height: 30px;
}
</style>
