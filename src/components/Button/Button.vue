<script setup>
</script>

<template>
  <button>
    <slot name="value">DEFAULT</slot>
    <slot name="suffix">_SUFFIX</slot>
  </button>
  <slot name="childrenSlot" childrenProp="secret message"></slot>
</template>

<style scoped>
  button {
    display: block;
    margin: 20px 0;
    padding: 10px 20px;
  }
</style>
