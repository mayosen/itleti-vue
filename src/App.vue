<script setup>
  import MouseListener from "./components/MouseListener/MouseListener.vue";
</script>

<template>
  <div class="coords">
    <MouseListener v-slot="{ x, y }">
      {{ x }} : {{ y }}
    </MouseListener>
  </div>
</template>

<style scoped>
  .coords {
    font-family: monospace;
    letter-spacing: 10px;
  }
</style>
