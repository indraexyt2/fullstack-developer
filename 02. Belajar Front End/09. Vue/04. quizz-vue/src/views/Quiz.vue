<template>
    <div class="flex flex-col justify-center items-center">
        <QuizHeader :questionpage="questionpage" :barPercentage="barPercentage" />
        <QuizContent :question="quiz.questions[currenQuestionIndex]" @selectOption="onSelectOption" />
        <button
            class="mt-5 bg-slate-200 w-52 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed" 
            @click="currenQuestionIndex++" 
           :disabled="currenQuestionIndex === quiz.questions.length - 1">
            Next
        </button>
    </div>
</template>

<script setup>
import quizez from '../data/quizz.json';
import QuizHeader from '../components/QuizHeader.vue';
import QuizContent from '../components/QuizContent.vue';
import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue';

const route = useRoute()

const quizId = parseInt(route.params.id);
const quiz = quizez.find((q) => q.id === quizId);

let currenQuestionIndex = ref(0);
let numberOfCorrectAnswer = ref(0)
// const questionPage = ref(`${currenQuestionIndex.value + 1} / ${quiz.questions.length}`)

// watch(
//     () => currenQuestionIndex.value,
//     () => [
//         questionPage.value = `${currenQuestionIndex.value + 1} / ${quiz.questions.length}`
//     ] )

const questionpage = computed(() => {
    return `${currenQuestionIndex.value + 1} / ${quiz.questions.length}`
})

const barPercentage = computed(() => {
    return `${((currenQuestionIndex.value + 1) / quiz.questions.length) * 100}%`
})

function onSelectOption(option) {
    if(option.correct) {
        numberOfCorrectAnswer.value++;
    }
    currenQuestionIndex++;
}

</script>
