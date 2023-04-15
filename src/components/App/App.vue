<script setup>
  import css from "./App.module.css";
  import Header from "../Header/Header.vue";
  import Main from "../Main/Main.vue";
</script>

<template>
  <div :class="css.page">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<style>
</style>
