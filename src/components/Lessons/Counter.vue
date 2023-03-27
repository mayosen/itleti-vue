<script setup>
  import { ref } from "vue";

  const counter = ref(0);

  function counterHandler(event) {
    console.log(event.type);
    counter.value++;
  }
</script>

<template>
  <button @click="counterHandler">{{ counter }}</button>
</template>

<style scoped>
  button {
    padding: 10px 20px;
    min-width: 100px;
    background: none;
  }

  button:active {
    background: aliceblue;
  }
</style>
