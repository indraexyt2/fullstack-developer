<script setup>
import { defineProps } from 'vue';

const { question } = defineProps(['question'])
const emit = defineEmits(['selectOption']);

function emitSelectedOption(option) {
    console.log("Selected option:", option);
    emit('selectOption', option)
}
</script>

<template>
    <div class="mt-2 ps-6 w-96 space-y-3">
            <h2 class="text-xl font-bold tracking-tight">{{ question.text }}</h2>
        </div>
        <main class="mt-2 ps-6 w-96 space-y-3 cursor-pointer">  
            <div v-for="option in question.answers" :key="option.id" class="flex space-x-3 bg-slate-100 h-8 items-center" @click="emitSelectedOption(option)">
                <p class="bg-slate-200 justify-center flex items-center w-8 h-8">{{ option.label }}</p>
                <span>{{ option.text }}</span>
            </div>
        </main>
</template>