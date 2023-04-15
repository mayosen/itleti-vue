<script setup>
  import css from "./Header.module.css";
  import Input from "../Controls/Input/Input.vue";
  import Button from "../Controls/Button/Button.vue";
</script>

<template>
  <header>
    <ul :class="css.header">
      <li :class="css.header__logo">PreMail</li>
      <li :class="css.header__search">
        <Input styleType="search" placeholder="Поиск писем, отправителей...">
          <img src="/search.svg" alt="Search">
        </Input>
      </li>
      <li :class="css.header__help">
        <Button styleType="icon">
          <img src="/help.svg" alt="Help" width="30" height="30">
        </Button>
      </li>
    </ul>
  </header>
</template>

<style scoped>
</style>
