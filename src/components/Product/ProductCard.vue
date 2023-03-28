<script setup>
  defineProps(["name", "price"])
</script>

<template>
  <div class="card">
    <div>{{ name }}</div>
    <div class="price">{{ price }}₽</div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 200px;
    border: 1px solid black;
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 10px;
  }

  .card:nth-child(even) {
    background: #eeeeee;
  }

  .card:hover {
    margin-left: 10px;
  }

  .price {
    font-family: monospace;
  }
</style>
