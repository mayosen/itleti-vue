<script setup>
  import { ref } from "vue";
  import Button from "./components/Button/Button.vue";

  const text = ref("");
</script>

<template>
  <input v-model="text">

  <Button>
    <template #value>{{ text }}</template>
    <template #suffix>!!!</template>
  </Button>

  <Button>
    <template #childrenSlot="props">{{ props }}</template>
  </Button>
</template>

<style scoped>
</style>
