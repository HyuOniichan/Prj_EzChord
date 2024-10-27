<script setup>
const props = defineProps({
    song: { type: Object }
})
</script>

<template>

    <div class="flex flex-row border border-gray-200 rounded-lg shadow p-4">
        <img class="object-cover rounded-lg w-48 h-48" :src="props.song.image" alt="image">
        <div class="flex flex-col max-w-60 justify-between ps-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ props.song.title }}
            </h5>
            <p class="font-normal overflow-hidden text-gray-700 dark:text-gray-400 max-h-20 text-ellipsis">
                {{ props.song.description }}
            </p>
            <a href="#" class="inline-flex justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                See chords
            </a>
        </div>
    </div>

</template>

<style>
.text-ellipsis {
    text-overflow: ellipsis;
}
</style>
