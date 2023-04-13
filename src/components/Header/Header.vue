<script setup>
  import css from "./Header.module.css";
</script>

<template>
  <header>
    <ul :class="css.header">
      <li :class="css.header__logo">4</li>
      <li :class="css.header__search"></li>
      <li :class="css.header__logo"></li>
    </ul>
  </header>
</template>

<style scoped>
</style>
