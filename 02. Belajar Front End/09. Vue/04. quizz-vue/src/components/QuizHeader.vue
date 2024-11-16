<script setup>
import { defineProps } from 'vue';

const { questionpage, barPercentage } = defineProps(['questionpage', 'barPercentage'])
</script>

<template>
    <header class="ps-6 mt-5 w-96">
            <h1 class="text-xl font-bold tracking-tight">Question {{ questionpage }}</h1>
            <div class="w-full h-5 border-2 mt-2 overflow-hidden">
                <div :style="{width: barPercentage}" class="w-0 bg-black h-5"></div>
            </div>
        </header>
</template>