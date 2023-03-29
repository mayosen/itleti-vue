<script setup>
  import { Teleport, onUpdated } from "vue";
  import Button from "../Lessons/Button.vue";

  const emit = defineEmits(["close, action"]);
  defineProps(["show"]);

  onUpdated(() => {
    setTimeout(() => {
      console.log("Удаляем окно");
      emit("close");
    }, 2000);
  });
</script>

<template>
  <Teleport to="#popup">
    <div class="popup" v-if="show">
      <div class="popup__message">
        <slot name="message"></slot>
      </div>
      <div class="popup__action" @click="$emit('action')">
        <slot name="action"></slot>
      </div>
      <button @click="$emit('close')">&times;</button>
    </div>
  </Teleport>
</template>

<style scoped>
  .popup {
    position: absolute;
    bottom: 50px;
    left: 70px;
    width: clamp(200px, 30vw, 300px);
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    align-items: center;
    background: #4b0994;
    padding: 15px 20px;
    color: white;
  }

  .popup__message {
    flex: 1 1 auto;
  }

  .popup__action {
    margin-left: 10px;
    text-transform: uppercase;
    font-weight: 600;
    color: #ff0087;
    cursor: pointer;
  }

  .popup button {
    border: none;
    background: none;
    color: white;
    margin-left: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 4px;
  }
</style>
