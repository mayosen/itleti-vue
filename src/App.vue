<script setup>
  import Header from "./components/Header/Header.vue"
  import { ref } from "vue";

  const text = ref("");
</script>

<template>
  <input v-model="text">
  <template v-if="text">
    <Header :input="text"></Header>
  </template>
</template>

<style scoped>
</style>
