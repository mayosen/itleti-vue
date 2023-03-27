<script setup>
  import { onMounted, onUnmounted, ref } from "vue";

  const time = ref(new Date());
  const timeInterval = ref(0);

  onMounted(() => {
    timeInterval.value = setInterval(() => {
      time.value = new Date()
    }, 100);
    console.log("mounted");
  })

  onUnmounted(() => {
    clearInterval(timeInterval.value);
    console.log("unmounted");
  })
</script>

<template>
  <h1>{{ time.toISOString() }}</h1>
</template>

<style scoped>
</style>
