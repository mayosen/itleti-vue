<script setup>
  import { Teleport } from "vue";

  defineEmits(["close"]);
  defineProps(["show"]);
</script>

<template>
  <Teleport to="#modal">
    <Transition>
      <div class="modal__overlay" v-if="show" @click.self="$emit('close')">
        <div class="modal">
          <div class="modal__header">
            <div>
              <slot name="title"></slot>
            </div>
            <button @click="$emit('close')">&times;</button>
          </div>
          <div class="modal__divider"></div>
          <div class="modal__body">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
  .modal__overlay {
    position: absolute;
    inset: 0 0 0 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: clamp(300px, 60%, 600px);
    border-radius: 10px;
    padding: 15px 20px;
    background: white;
    margin: 0 20px;
  }

  .modal__header {
    display: flex;
    align-items: center;
  }

  .modal__header div {
    flex: 1 1 auto;
  }

  .modal__header button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .modal__divider {
    display: block;
    height: 1px;
    background: rgba(0, 0, 0, 0.2);
    margin: 10px 0;
  }

  .modal__body {

  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
  }

  .v-enter-active, .v-leave-active {
    transition: opacity 400ms ease;
  }
</style>
