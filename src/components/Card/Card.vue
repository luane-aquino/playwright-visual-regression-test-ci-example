<script setup>
defineProps({
  title: { type: String, default: "Título do card" },
  text: { type: String, default: "Um texto simples para testar o visual." },
  disabled: { type: Boolean, default: false },
});
</script>

<template>
  <div class="card" data-testid="card">
    <h2 class="card-title">{{ title }}</h2>
    <p class="card-text">{{ text }}</p>
    <button class="card-button" :disabled="disabled">Clique aqui</button>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: green;
  font-family: Arial, sans-serif;
}

.card-title {
  margin: 0 0 8px;
  font-size: 20px;
  color: #222;
}

.card-text {
  margin: 0 0 16px;
  font-size: 14px;
  color: #555;
}

.card-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #42b883;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.card-button:hover {
  background: #33a06f;
}

.card-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
