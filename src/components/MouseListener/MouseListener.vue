<script setup>
  import { onMounted, onUnmounted, ref } from "vue";

  const coords = ref([]);

  function updateCoords(event) {
    coords.value = [event.clientX, event.clientY];
  }

  onMounted(() => {
    document.addEventListener("mousemove", updateCoords);
  });

  onUnmounted(() => {
    document.removeEventListener("mousemove", updateCoords);
  });
</script>

<template>
  <slot :x="coords[0]" :y="coords[1]"></slot>
</template>

<style scoped>
</style>
