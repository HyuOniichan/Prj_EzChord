<script setup>
import { ref } from 'vue';

const modalBtn = ref(false);
function toggleModalBtn(show) {
    modalBtn.value = show; 
}

</script>

<template>

    <div class="flex flex-col min-w-40 justify-between">
        <a href="#" class="relative"
            @mouseover="toggleModalBtn(true)" @mouseleave="toggleModalBtn(false)"
        >
            <img class="object-cover rounded-2xl w-40 h-40 hover:cursor-pointer"
                src="https://i.ytimg.com/vi/ocjUUfk9k1Y/hqdefault.jpg" alt="image">
            <div v-if="modalBtn" class="absolute inset-0 bg-gray-500 opacity-75 rounded-2xl"></div>
            <button v-if="modalBtn"
                class="absolute top-1/2 -translate-y-1/2 inset-x-7 inline-flex justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                See chords
            </button>
        </a>
        <h5 class="text-lg font-semibold mt-2 tracking-tight text-gray-900 dark:text-white">
            Dieu anh biet
        </h5>
        <p class="text-sm text-gray-700 dark:text-gray-400 max-h-5 overflow-hidden">
            Anh chang biet me gi 
        </p>
    </div>

</template>
