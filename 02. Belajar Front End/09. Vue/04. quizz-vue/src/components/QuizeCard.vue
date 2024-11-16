<script setup>
const { dataQuiz } = defineProps(['dataQuiz'])
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-slate-100 object-cove overflow-hidden rounded-md shadow-md">
    <div class="w-full">
      <img 
        :src="dataQuiz.img"
        :alt="dataQuiz.title">
    </div>
    <div class="p-2">
      <RouterLink :to="`/quiz/${dataQuiz.id}`" class="text-xl font-bold tracking-tighter">{{ dataQuiz.title }}</RouterLink>
      <p class="mt-2 text-slate-700">Question: {{ dataQuiz.questions.length }}</p>
    </div>
  </div>
</template>