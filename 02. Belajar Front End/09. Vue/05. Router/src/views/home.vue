<template>
    <div>
        <div 
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 px-3 sm:px-8 md:px-24 lg:px-36 mt-5">
            <div 
                v-for="product in Products" :key="product.id"
                class="h-52 overflow-hidden bg-slate-100 rounded-md flex flex-col justify-between">
                <div>
                    <img 
                        class="h-36 w-full"
                        :src="product.img" 
                        :alt="product.title">
                </div>
                <div
                    class="p-2 flex justify-between">
                    <h2 
                        class="text-lg font-semibold text-slate-800 tracking-tight">
                        {{ product.name }}
                    </h2>
                    <router-link 
                        class="bg-slate-800 text-white px-2 rounded-md" 
                        :to="`/products/${product.id}`">
                        Lihat
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Products from "../data/products.json"
</script>