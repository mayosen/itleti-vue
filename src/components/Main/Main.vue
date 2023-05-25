<script setup>
  import css from "./Main.module.css";
  import { inject, onMounted, onUnmounted, ref, watchEffect } from "vue";
  import Letter from "@/components/Letter/Letter.vue";
  import Checkbox from "@/components/Controls/Checkbox/Checkbox.vue";
  import Button from "@/components/Controls/Button/Button.vue";
  import Modal from "@/components/Lessons/Modal.vue";
  import Editor from "@/components/Editor/Editor.vue";
  import MailService from "../../services/MailService.js";

  const letters = ref([]);
  const lettersQuery = inject("lettersQuery");
  const isModalOpened = ref(false);
  const isAllChecked = ref(false);
  const currentPage = ref(1);

  watchEffect(getPageHandler);

  function onCheckAll(checked) {
    isAllChecked.value = checked;
  }

  function filterLetters() {
    const query = lettersQuery.value;
    if (!query) return letters.value;
    return letters.value.filter(letter => letter.title.toLowerCase().includes(query.toLowerCase()));
  }

  function getPageHandler() {
    MailService.getLetters(currentPage.value).then(res => letters.value = res.message);
    isModalOpened.value = false;
  }

  function swipePage(direction) {
    if (direction === "forwards") {
      currentPage.value = currentPage.value + 1;
    } else if (direction === "backwards" && currentPage.value > 1) {
      currentPage.value = currentPage.value - 1;
    }
  }

  onMounted(function () {
    document.addEventListener("keydown", closeModalByEsc);
  });

  onUnmounted(function () {
    document.removeEventListener("keydown", closeModalByEsc);
  });

  function closeModalByEsc({ key }) {
    if (isModalOpened.value && event.key === "Escape") {
      isModalOpened.value = false;
    }
  }
</script>

<template>
  <main>
    <section :class="css.main__menu">
      <Button :class="css.main__create" @click="isModalOpened = !isModalOpened">Написать письмо</Button>
      <section :class="css.main__pager">
        <span :class="css['current-page']">Страница {{ currentPage }}</span>
        <Button @click="swipePage('backwards')">&lt;</Button>
        <Button @click="swipePage('forwards')">&gt;</Button>
      </section>
    </section>

    <div :class="css['main__check-all']">
      <Checkbox @check="onCheckAll" id="check-all-letters"></Checkbox>
      <label for="check-all-letters">Выбрать все</label>
    </div>

    <section :class="css.letters">
      <Letter
        v-for="letter in filterLetters(letters)"
        :key="letter.id"
        :id="letter.id"
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
