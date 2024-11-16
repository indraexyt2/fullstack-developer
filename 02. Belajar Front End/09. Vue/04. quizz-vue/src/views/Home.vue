<script setup>
import { ref, watch } from "vue";
import quizez from '../data/quizz.json';
import QuizeCard from "../components/QuizeCard.vue";
import Header from "../components/Header.vue";

const quiz = ref(quizez);

const search = ref('')

console.log(quiz)

watch(search, () => {
  quiz.value = quizez.filter(quize => quize.title.toLowerCase().includes(search.value.toLowerCase()));
});
</script>

<template>
  <main>
    <Header v-model:search="search" />
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-14 md:px-20 mt-5">
      <QuizeCard v-for="quiz in quiz" :key="quiz.id" :dataQuiz="quiz"/>
    </div>
  </main>
</template>