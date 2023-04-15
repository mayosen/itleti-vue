<script setup>
  import css from "./Button.module.css";
  import { computed } from "vue";

  const props = defineProps(["styleType"]);

  const classNames = computed(() => ({
    [css.btn_default]: !props.styleType,
    [css.btn_icon]: props.styleType === "icon",
  }));
</script>

<template>
  <button :class="[css.btn, classNames]">
    <slot></slot>
  </button>
</template>

<style scoped>
</style>
