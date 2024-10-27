<script setup>
import HomeSectionList from './HomeSectionList.vue';

const props = defineProps({
    title: { type: String } 
})

// fetch data and pass props 

</script>

<template>
    <div class="rounded-lg px-7 py-5 bg-white border border-gray-200 rounded-lg shadow">
        <h1 class="text-2xl capitalize font-bold">{{ props.title }}</h1>
        <HomeSectionList />
    </div>

</template>
