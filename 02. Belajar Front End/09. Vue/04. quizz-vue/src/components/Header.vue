<script setup>
const props = defineProps({
  search: String
});

const emit = defineEmits(['update:search']);
</script>

<template>
  <header class="flex space-x-4 px-4 sm:px-14 md:px-20 items-center">
    <div>
      <h2 class="text-2xl font-bold tracking-tighter">myQuizez</h2>
    </div>
    <div>
      <input 
        v-model.trim="props.search"
        @input="$emit('update:search', $event.target.value)"
        class="border-2 px-2 py-0.5 border-slate-800 focus:outline-none rounded-md"
        type="search" 
        name="search" 
        id="search"
        placeholder="Cari quiz..">
    </div>
  </header>
</template>