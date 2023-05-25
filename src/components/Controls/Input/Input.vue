<script setup>
  import css from "./Input.module.css";
  import { computed } from "vue";

  const props = defineProps(["styleType", "placeholder"]);

  const classNames = computed(() => ({
    [css.input_default]: !props.styleType,
    [css.input_search]: props.styleType === "search",
  }));
</script>

<template>
  <div :class="css.input__wrapper">
    <span :class="css.input__icon"><slot>&times;</slot></span>
    <input type="text" :class="[classNames]" :placeholder="placeholder">
  </div>
</template>

<style scoped>
</style>
