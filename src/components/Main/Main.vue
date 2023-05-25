<script setup>
  import css from "./Main.module.css";
  import Letter from "../Letter/Letter.vue";
  import { LettersMock } from "@/utils/mock.js";
  import Checkbox from "@/components/Controls/Checkbox/Checkbox.vue";
  import { ref } from "vue";

  const isAllChecked = ref(false);
  function onCheckAll(checked) {
    isAllChecked.value = checked;
  }
</script>

<template>
  <main>
    <section :class="css.letters">
      <div>
        <Checkbox @check="onCheckAll"></Checkbox>
      </div>
      <Letter
        v-for="letter in LettersMock"
        :isImportant="letter.isImportant"
        :date="letter.date"
        :isRead="letter.isRead"
        :isAllChecked="isAllChecked"
      >
        <template #sender>{{ letter.sender }}</template>
        <template #title>{{ letter.title }}</template>
      </Letter>
    </section>
  </main>
</template>

<style scoped>
</style>
