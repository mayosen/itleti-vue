<script setup>
  import { ref } from "vue";

  const cards = ref([
    {name: "Пачка молока", price: "70"},
    {name: "Пачка сока", price: "100"},
    {name: "Десяток яиц", price: "70"},
    {name: "Огурцы колючие", price: "12"},
    {name: "Огурцы гладкие", price: "10"},
  ]);
  const nameFilter = ref("");
</script>

<template>
  <label for="nameFilter">Введите фильтр: </label>
  <input id="nameFilter" type="text" v-model="nameFilter" />

  <div>
    <template v-for="card in cards" :key="card.name">
      <div class="card" v-if="card.name.toLowerCase().includes(nameFilter.toLowerCase())">
        <div>{{ card.name }}</div>
        <div class="price">{{ card.price }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped>
  .card {
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 200px;
  }

  .price {
    font-family: monospace;
  }
</style>
