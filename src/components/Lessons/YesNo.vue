<script setup>
  import { ref, watch } from "vue";

  const text = ref("");
  const answer = ref("");
  const answerImage = ref("");

  watch(text, async (newValue, oldValue) => {
    console.log("Вопрос изменен");
    console.log(`Старый: ${oldValue}\nНовый: ${newValue}`);

    if (text.value.endsWith("?")) {
      let response = await fetch("https://yesno.wtf/api");
      let data = await response.json();
      answer.value = data.answer;
      answerImage.value = data.image;
    } else {
      answer.value = "Это не вопрос";
    }
  });
</script>

<template>
  <input v-model="text" placeholder="Введите ваш вопрос">
  <p>{{ answer }}</p>
  <img v-if="answerImage" :src="answerImage" :alt="answer">
</template>

<style scoped>
</style>
