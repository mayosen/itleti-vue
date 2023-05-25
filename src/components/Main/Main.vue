<script setup>
  import css from "./Main.module.css";
  import { inject, ref, watchEffect } from "vue";
  import Letter from "@/components/Letter/Letter.vue";
  import Checkbox from "@/components/Controls/Checkbox/Checkbox.vue";
  import Button from "@/components/Controls/Button/Button.vue";
  import Modal from "@/components/Lessons/Modal.vue";
  import Editor from "@/components/Editor/Editor.vue";
  import MailService from "../../services/MailService.js";

  const isAllChecked = ref(false);

  function onCheckAll(checked) {
    isAllChecked.value = checked;
  }

  const letters = ref([]);
  const lettersQuery = inject("lettersQuery");
  const isModalOpened = ref(false);

  function filterLetters() {
    const query = lettersQuery.value;
    if (!query) return letters.value;
    return letters.value.filter(letter => letter.title.toLowerCase().includes(query.toLowerCase()));
  }
  function getPageHandler() {
    MailService.getLetters(1).then(res => letters.value = res.message);
    isModalOpened.value = false;
  }

  watchEffect(getPageHandler);
</script>

<template>
  <main>
    <section :class="css.main__create">
      <Button @click="isModalOpened = !isModalOpened">Написать письмо</Button>
    </section>

    <div :class="css['main__check-all']">
      <Checkbox @check="onCheckAll" id="check-all-letters"></Checkbox>
      <label for="check-all-letters">Выбрать все</label>
    </div>

    <section :class="css.letters">
      <Letter
        v-for="letter in filterLetters(letters)"
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
  <Modal :show="isModalOpened" @close="isModalOpened = false">
    <template #title>Новое письмо</template>
    <template #body>
      <Editor :getPageHandler="getPageHandler"></Editor>
    </template>
  </Modal>
</template>

<style scoped>
</style>
