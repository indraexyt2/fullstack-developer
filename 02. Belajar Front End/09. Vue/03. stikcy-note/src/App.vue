<template>
  <main>
    <div class="pt-5 px-5 lg:px-44">
      <header class="flex justify-between">
        <h1 class="text-2xl font-bold">Memo</h1>
        <button @click="showForm = !showForm"><span class="bg-teal-500 text-white px-2 pb-1 rounded-full">+</span></button>
      </header>
      <div class="mt-3 flex flex-row gap-5">
        <div v-for="memo in memos" :key="memo.id" :style="{ backgroundColor: memo.backgroundColor }" class="w-56 flex flex-col justify-between p-2 rounded-md text-white h-52">
          <p>{{ memo.memo }}</p>
          <div class="flex justify-between">
            <p>{{ memo.date }}</p>
            <span @click="deleteMemo(memo.id)" class="bg-white text-red-700 px-2 rounded-md cursor-pointer">Hapus</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="absolute inset-0 bg-black/50 ">
      <div class="h-screen flex justify-center items-center">
        <div class="bg-white p-4 w-1/3 rounded-3xl">
          
          <div class="flex justify-between">
            <h2>Add new memo</h2>
            <button @click="showForm = !showForm"><span>X</span></button>
          </div>
          <p v-if="errorMessage" class="text-red-800">{{ errorMessage }}</p>
          <div class="mt-3 mx-1">
            <textarea 
              v-model="newMemo"
              class="focus:outline-none border-2 rounded-md p-3 w-full"
              name="" 
              id="" cols="2" 
              rows="10">
            </textarea>
            <button @click="addMemo" class="w-full mt-3 bg-teal-600 text-white p-1 rounded-md">Add</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const showForm = ref(false);
const newMemo = ref('');
const memos = ref([]);
const errorMessage = ref(null);

function addMemo() {
  if (newMemo.value === '') {
    errorMessage.value = 'Memo cannot be empty';
  } else {
    errorMessage.value = null;
    memos.value.push({
    id: Date.now(),
    memo: newMemo.value,
    date: new Date().toLocaleDateString("in-ID"),
    backgroundColor: getRandomColor(),
  });
  newMemo.value = '';
  showForm.value = false;
  }
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function deleteMemo(id) {
  memos.value = memos.value.filter((memo) => memo.id !== id);
}
</script>