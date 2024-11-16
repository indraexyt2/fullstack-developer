<template>
    <Header v-if="$route.meta.showHeader" />
    <main>
      <RouterView />
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/header.vue';

</script>