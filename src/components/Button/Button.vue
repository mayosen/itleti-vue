<script setup>
</script>

<template>
  <button>
    <slot name="value">DEFAULT</slot>
    <slot name="suffix">_SUFFIX</slot>
  </button>
</template>

<style scoped>
  button {
    display: block;
    margin: 20px 0;
    padding: 10px 20px;
  }
</style>
