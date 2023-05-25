<script setup>
  import { computed, onMounted, onUnmounted, ref } from "vue";
  import { DateTime } from "luxon";
  import css from "./Letter.module.css";
  import Checkbox from "../Controls/Checkbox/Checkbox.vue";
  import Modal from "@/components/Lessons/Modal.vue";
  import MailService from "../../services/MailService.js";

  const props = defineProps(["isImportant", "date", "isRead", "isAllChecked", "id"]);

  const isChecked = ref(false);
  const isContentOpened = ref(false);
  const content = ref("");
  const currentMail = ref(null);

  const dateString = computed(() => {
    const datetime = DateTime.fromMillis(props.date).setLocale("ru");
    return datetime.toFormat("HH:mm, dd MMM");
  });

  const letterClasses = computed(() => ({
    [css.letter]: true,
    [css.letter__checked]: isChecked.value || props.isAllChecked
  }));

  function onCheck(checked) {
    isChecked.value = checked;
  }

  onMounted(function () {
    document.addEventListener("keydown", closeModalByEsc);
  });

  onUnmounted(function () {
    document.removeEventListener("keydown", closeModalByEsc);
  });

  function closeModalByEsc({ key }) {
    if (isContentOpened.value && key === "Escape") {
      isContentOpened.value = false;
    }
  }

  function getMail() {
    if (currentMail.value) return;
    MailService.getLetter(props.id).then(res => {
      currentMail.value = res.message;
    });
  }

  function onOpenLetter() {
    isContentOpened.value = true;
    getMail();
  }
</script>

<template>
  <div :class="letterClasses">
    <div :class="css.letter__checkbox">
      <Checkbox @check="onCheck" :isChecked="isChecked || isAllChecked"></Checkbox>
    </div>
    <div :class="[css.letter__sender, css.overflow]">
      <slot name="sender"></slot>
    </div>
    <div :class="[css.letter__title, css.overflow]" @click.self="onOpenLetter">
      <slot name="title"></slot>
    </div>
    <div :class="css.letter__date">
      {{ dateString }}
    </div>
    <div>
      <span v-if="isImportant">
        <img src="/star.svg" alt="Star" width="15" height="15">
      </span>
    </div>
    <Modal :show="isContentOpened" @close="isContentOpened = false">
      <template #title>Текст письма</template>
      <template #body>
        <p>{{ currentMail?.mailContent }}</p>
      </template>
    </Modal>
  </div>
</template>

<style scoped>
</style>
