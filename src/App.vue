<script setup>
import Card from "./components/Card/Card.vue";
</script>

<template>
  <div class="container">
    <Card />
    <Card title="Card desabilitado" :disabled="true" />
  </div>
</template>

<style>
.container {
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
</style>
