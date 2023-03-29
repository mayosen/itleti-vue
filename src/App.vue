<script setup>
  import Modal from "./components/Lessons/Modal.vue";
  import { ref } from "vue";

  const showModal = ref(false);
</script>

<template>
  <button @click="showModal = !showModal">Показать</button>
  <Modal :show="showModal" @close="showModal = false">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam labore non nostrum omnis quae quas quasi quibusdam
    voluptate voluptates! A accusamus ad aliquam aspernatur aut corporis delectus ducimus ea esse ex exercitationem fuga
    incidunt nostrum, odio optio porro provident quam reprehenderit rerum sit veritatis voluptas voluptatum. Atque
    consequuntur dolores obcaecati omnis provident unde vel voluptas. Accusantium alias, animi architecto assumenda
    atque blanditiis dolore incidunt ipsam laboriosam laborum libero maiores, minima odio perferendis quaerat rem sed,
    similique veritatis vitae voluptatem. Aliquid aut corporis culpa dolorum explicabo fugiat laudantium nesciunt
    perspiciatis qui reprehenderit. Adipisci assumenda consequuntur deserunt dolore dolorem explicabo numquam, optio.
  </Modal>
</template>

<style>
  body {
    font-family: Arial, serif;
  }
</style>
