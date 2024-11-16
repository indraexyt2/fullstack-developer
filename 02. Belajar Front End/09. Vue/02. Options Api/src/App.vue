<template>
  <main class="bg-slate-800 text-white h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center bg-slate-900 w-36 p-5 rounded-2xl space-y-5">
      <div class="">
        <h2 class="text-xl font-extrabold">Counter</h2>
      </div>
      <div>
        <span class="text-xl">{{ count }}</span>
      </div>
      <div class="space-x-2">
        <button @click="decrement" class="bg-white text-black w-7 rounded-md cursor-pointer">-</button>
        <button @click="increment" class="bg-white text-black w-7 rounded-md cursor-pointer">+</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

let count = ref(0)

function increment() {
  count.value++
};

function decrement() {
  if(count.value >= 1) {
    count.value--
  } 
}
</script>
