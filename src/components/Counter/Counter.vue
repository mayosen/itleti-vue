<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const counter = ref(0);
const date = ref(new Date().toLocaleTimeString());
let interval;

function counterHandler(event) {
  console.log(event.type);
  counter.value++;
}

onMounted(() => {
  interval = setInterval(() => {
    date.value = new Date().toLocaleTimeString();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
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
