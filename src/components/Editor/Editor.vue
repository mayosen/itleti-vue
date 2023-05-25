<script setup>
  import css from "./Editor.module.css";
  import Input from "@/components/Controls/Input/Input.vue";
  import Textarea from "@/components/Controls/Textarea/Textarea.vue";
  import Button from "@/components/Controls/Button/Button.vue";
  import { reactive } from "vue";

  const letter = reactive({
    recipient: "",
    title: "",
    content: "",
  });

  function onSubmit() {
    console.log("Sending mail", letter.content, letter.title, letter.recipient);
    console.log({ ...letter });
  }
</script>

<template>
  <form @submit.prevent="onSubmit" :class="css.editor">
    <Input styleType="form" placeholder="Получатель" v-model="letter.recipient"></Input>
    <Input styleType="form" placeholder="Тема письма" v-model="letter.title"></Input>
    <Textarea placeholder="Содержание письма" :class="css.editor__area" v-model="letter.content"></Textarea>
    <Button type="submit">Отправить</Button>
  </form>
</template>

<style scoped>

</style>