<script setup>
import { onMounted, ref } from "vue";

const counter = ref(0);
const date = ref(new Date().toLocaleTimeString());

function counterHandler(event) {
  counter.value++;
}

onMounted(() => {
  setInterval(() => {
    date.value = new Date().toLocaleTimeString();
  }, 1000);
});
</script>

<template>
  <button @click="counterHandler">{{ counter }}</button>
  <h1>{{ date }}</h1>
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
