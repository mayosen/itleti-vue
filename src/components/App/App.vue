<script setup>
  import css from "./App.module.css";
  import Header from "../Header/Header.vue";
  import Main from "../Main/Main.vue";
  import { provide, ref } from "vue";

  const lettersQuery = ref("");
  provide("lettersQuery", lettersQuery);

  function search(query) {
    lettersQuery.value = query;
  }
</script>

<template>
  <div :class="css.page">
    <Header :searchCallback="search"></Header>
    <Main></Main>
  </div>
</template>

<style>
</style>
