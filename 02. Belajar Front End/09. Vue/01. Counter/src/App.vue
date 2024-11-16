<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <main>
    <div class="counter">
      <h1>Counter</h1>
      <span class="value">{{ count}}</span>
    </div>
    <div class="buttons">
      <button @click="count--" class="decrement">-</button>
      <button @click="count++"  class="increment">+</button>
    </div>
  </main>
</template>