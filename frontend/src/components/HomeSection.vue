<script setup>
import HomeSectionList from './HomeSectionList.vue';

const props = defineProps({
    title: { type: String } 
})

</script>

<template>
    <div class="rounded-lg p-4">
        <h2>{{ props.title }}</h2>
        <HomeSectionList />
    </div>
</template>
