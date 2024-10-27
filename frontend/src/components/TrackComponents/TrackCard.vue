<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    track: { type: Object }
})

</script>

<template>

    <div class="flex flex-row border border-gray-200 rounded-lg shadow p-4">
        <img class="object-cover rounded-lg w-48 h-48" :src="props.track.image" alt="image">
        <div class="flex flex-col w-60 justify-between ps-4">
            <div>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ props.track.title }}
                </h2>
                <p class="font-semibold text-gray-700 dark:text-gray-400 mb-2">
                    {{ props.track.artist }}
                </p>
                <p class="font-normal overflow-hidden text-gray-700 dark:text-gray-400 max-h-20 text-ellipsis">
                    {{ props.track.description }}
                </p>
            </div>
            <RouterLink :to="'/tracks/' + props.track._id" class="inline-flex justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                See chords
            </RouterLink>
        </div>
    </div>

</template>

<style>
.text-ellipsis {
    text-overflow: ellipsis;
}
</style>
