<script setup>
  import { Teleport, watch, ref } from "vue";
  import Button from "../Lessons/Button.vue";

  const DEFAULT_DURATION = 5000;
  const emit = defineEmits(["close", "action"]);
  const props = defineProps(["show", "duration"]);
  const closeTimeout = ref(null);

  watch(
    () => props.show,
    (newValue) => {
      if (newValue === true) {
        let timeout = props.duration || DEFAULT_DURATION;
        console.log(`Окно закроется через ${timeout / 1000}с`);
        closeTimeout.value = setTimeout(close, timeout);
      }
  });

  function close() {
    console.log("Удаляем окно");
    emit("close");
    clearTimeout(closeTimeout.value);
    console.log("Таймаут удален");
  }

  function action() {
    close();
    emit("action");
  }
</script>

<template>
  <Teleport to="#popup">
    <Transition>
      <div class="popup" v-if="show">
        <div class="popup__message">
          <slot name="message"></slot>
        </div>
        <div class="popup__action" @click="action()">
          <slot name="action"></slot>
        </div>
        <button @click="close()">&times;</button>
        <div class="popup__line"
             :style="`animation-duration: ${props.duration || DEFAULT_DURATION}ms`">
        </div>
      </div>
    </Transition>
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
    background: #4b0994;
    padding: 15px 20px;
    color: white;
    display: flex;
    align-items: center;
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

  .popup__line {
    height: 2px;
    background: #ff0087;
    animation: 10000ms linear timeline forwards;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  @keyframes timeline {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  .v-enter-active, .v-leave-active {
    transition: all 400ms ease;
  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
</style>
