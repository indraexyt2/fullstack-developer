<template>
    <div v-if="product">
        <div>
            <h1>{{ product.name }}</h1>
        </div>
        <div>
            <img 
                class="w-52"
                :src="product.img" 
                :alt="product.name">
            <h2>{{ product.price }}</h2>
            <h2>{{ product.owner.name }}</h2>
        </div>
    </div>
    <div v-else>
        <h2>Product not found!</h2>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Products from "../data/products.json"

const route = useRoute();
const product = Products.find((product) => product.id === parseInt(route.params.id))
</script>