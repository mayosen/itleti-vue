<script setup>
  import { ref } from "vue";
  import Timer from "./components/Timer/Timer.vue";

  const text = ref("");
</script>

<template>
  <input v-model="text">
  <template v-if="text">
    <Timer></Timer>
  </template>
</template>

<style scoped>
</style>
