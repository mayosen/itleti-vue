<script setup>
  import { ref } from "vue";
  import ProductCard from "./ProductCard.vue";

  const nameFilter = ref("");
  const cards = ref([
    {name: "Пачка молока", price: "70"},
    {name: "Пачка сока", price: "100"},
    {name: "Десяток яиц", price: "70"},
    {name: "Огурцы колючие", price: "12"},
    {name: "Огурцы гладкие", price: "10"},
  ]);

  function matchesNameFilter(card) {
    return card.name.toLowerCase().includes(nameFilter.value.toLowerCase());
  }
</script>

<template>
  <label for="nameFilter">Введите фильтр: </label>
  <input id="nameFilter" v-model="nameFilter" />

  <div>
    <template v-for="card in cards" :key="card.name">
      <ProductCard :name="card.name" :price="card.price" v-if="matchesNameFilter(card)"></ProductCard>
    </template>
  </div>
</template>

<style scoped>
</style>
