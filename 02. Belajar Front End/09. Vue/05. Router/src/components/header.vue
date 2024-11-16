<template>
    <header class="bg-gray-800 text-white">
        <div class="container mx-auto flex justify-between items-center py-4 px-3 sm:px-8 md:px-8 lg:px-8">
            <a href="#" class="text-2xl font-bold">Logo</a>
            <div class="block lg:hidden">
                <button id="menu-button" class="text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                </button>
            </div>
            <nav id="menu" class="hidden lg:flex lg:items-center lg:space-x-6">
                <RouterLink active-class="bg-slate-700" to="/" class="block py-2 px-4 text-lg hover:bg-gray-700 rounded">Home</RouterLink>
                <RouterLink active-class="bg-slate-700" to="/about" class="block py-2 px-4 text-lg hover:bg-gray-700 rounded">About</RouterLink>
                <RouterLink href="#" class="block py-2 px-4 text-lg hover:bg-gray-700 rounded">Contact</RouterLink>
            </nav>
        </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>