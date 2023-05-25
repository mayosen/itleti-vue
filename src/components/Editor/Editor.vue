<script setup>
  import { reactive } from "vue";
  import { v4 as uuidv4 } from "uuid";
  import css from "./Editor.module.css";
  import Input from "@/components/Controls/Input/Input.vue";
  import Textarea from "@/components/Controls/Textarea/Textarea.vue";
  import Button from "@/components/Controls/Button/Button.vue";
  import MailService from "../../services/MailService.js";

  const props = defineProps(["getPageHandler"]);

  const letter = reactive({
    recipient: "",
    title: "",
    content: "",
  });

  function onSubmit() {
    const data = {
      title: letter.title,
      mailContent: letter.content,
      sender: letter.recipient.split("@")[0],
      senderMail: letter.recipient,
      date: Date.now(),
      id: uuidv4()
    };
    MailService.sendLetter(data).then(() => {
      letter.recipient = "";
      letter.title = "";
      letter.content = "";
      props.getPageHandler();
    });
  }
</script>

<template>
  <form @submit.prevent="onSubmit" :class="css.editor">
    <Input styleType="form" placeholder="Получатель" v-model="letter.recipient" type="email"></Input>
    <Input styleType="form" placeholder="Тема письма" v-model="letter.title"></Input>
    <Textarea placeholder="Содержание письма" :class="css.editor__area" v-model="letter.content"></Textarea>
    <Button type="submit">Отправить</Button>
  </form>
</template>

<style scoped>

</style>