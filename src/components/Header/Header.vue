<script setup>
  import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

  defineProps(["input"]);

  onBeforeMount(() => {console.log("before mount")})
  onMounted(() => {console.log("mounted")})
  onBeforeUpdate(() => {console.log("before update")})
  onUpdated(() => {console.log("updated")})
  onBeforeUnmount(() => {console.log("before unmount")})
  onUnmounted(() => {console.log("unmounted")})
</script>

<template>
  <div class="header">{{ input }}</div>
</template>

<style scoped>
  .header {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }
</style>
