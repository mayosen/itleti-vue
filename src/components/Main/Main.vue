<script setup>
  import css from "./Main.module.css";
  import Letter from "../Letter/Letter.vue";
  import { LettersMock } from "../../utils/mock.js";
</script>

<template>
  <main>
    <aside></aside>
    <section :class="css.letters">
      <Letter
        v-for="letter in LettersMock"
        :isImportant="letter.isImportant"
        :date="letter.date"
        :isRead="letter.isRead"
      >
        <template #title>{{ letter.title }}</template>
        <template #sender>{{ letter.sender }}</template>
      </Letter>
    </section>
  </main>
</template>

<style scoped>
</style>
