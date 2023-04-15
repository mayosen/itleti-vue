<script setup>
  import { computed } from "vue";
  import { DateTime } from "luxon";
  import css from "./Letter.module.css";
  import Checkbox from "../Controls/Checkbox/Checkbox.vue";

  const { isImportant, date, isRead } = defineProps(["isImportant", "date", "isRead"]);
  const dateString = computed(() => {
    const datetime = DateTime.fromMillis(date).setLocale("ru");
    return datetime.toFormat("dd MMM");
  });
</script>

<template>
  <div :class="css.letter">
    <div :class="css.letter__important">
      <Checkbox></Checkbox>
      <span v-if="isImportant">!</span>
    </div>
    <div :class="css.letter__read">
      {{ Number(isRead) }}
    </div>
    <div :class="[css.letter__sender, css.overflow]">
      <slot name="sender"></slot>
    </div>
    <div :class="[css.letter__title, css.overflow]">
      <slot name="title"></slot>
    </div>
    <div :class="css.letter__date">
      {{ dateString }}
    </div>
  </div>
</template>

<style scoped>
</style>
