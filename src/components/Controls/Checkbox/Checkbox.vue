<script setup>
  import css from "./Checkbox.module.css";
  import { watch, ref } from "vue";

  defineEmits(["check"]);
  const props = defineProps(["isChecked"]);
  const refEl = ref(null);

  watch(
    () => props.isChecked,
    () => refEl.value.checked = props.isChecked
  );
</script>

<template>
  <input type="checkbox" @change="$emit('check', $event.target.checked)" ref="refEl">
</template>

<style scoped>
</style>
