<script setup>
  import { computed, ref } from "vue";
  import { DateTime } from "luxon";
  import css from "./Letter.module.css";
  import Checkbox from "../Controls/Checkbox/Checkbox.vue";

  const props = defineProps(["isImportant", "date", "isRead", "isAllChecked"]);

  const dateString = computed(() => {
    const datetime = DateTime.fromMillis(props.date).setLocale("ru");
    return datetime.toFormat("HH:mm, dd MMM");
  });

  const isChecked = ref(false);

  function onCheck(checked) {
    isChecked.value = checked;
  }

  const letterClasses = computed(() => ({
    [css.letter]: true,
    [css.letter__checked]: isChecked.value || props.isAllChecked
  }));
</script>

<template>
  <div :class="letterClasses">
    <div :class="css.letter__checkbox">
      <Checkbox @check="onCheck" :isChecked="isChecked || isAllChecked"></Checkbox>
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
    <div>
      <span v-if="isImportant">
        <img src="/star.svg" alt="Star" width="15" height="15">
      </span>
    </div>
  </div>
</template>

<style scoped>
</style>
