<script setup>
  import { ref } from "vue";
  import PopUp from "./components/Homework/PopUp.vue"

  const showPopUp = ref(false);

  function modalAction() {
    console.log("Пользователь выполнил действие");
  }
</script>

<template>
  <button @click="showPopUp = !showPopUp">Показать всплывающее окно</button>
  <PopUp :show="showPopUp" @close="showPopUp = false" @action="modalAction()">
    <template v-slot:message>Заявка отправлена</template>
    <template v-slot:action>Отменить</template>
  </PopUp>
</template>

<style>
  body {
    font-family: Arial, serif;
  }
</style>
