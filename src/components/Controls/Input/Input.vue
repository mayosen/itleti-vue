<script setup>
  import css from "./Input.module.css";
  import { computed } from "vue";

  const props = defineProps(["styleType", "placeholder", "modelValue", "type"]);
  defineEmits(["update:modelValue"]);

  const classNames = computed(() => ({
    [css.input__default]: !props.styleType,
    [css.input__search]: props.styleType === "search",
    [css.input__form]: props.styleType === "form",
  }));
</script>

<template>
  <div :class="css.input__wrapper">
    <span :class="css.input__icon" v-if="styleType === 'search'">
      <slot>&times;</slot>
    </span>
    <input
      type="text"
      :class="[classNames]"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
    >
  </div>
</template>

<style scoped>
</style>
