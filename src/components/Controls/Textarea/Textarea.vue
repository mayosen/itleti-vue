<script setup>
  import css from "./Textarea.module.css";

  defineProps(["placeholder", "modelValue"]);
  defineEmits(["update:modelValue"]);
</script>

<template>
  <textarea
    spellcheck
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<style scoped>
</style>
