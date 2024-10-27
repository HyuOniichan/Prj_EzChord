<script setup>
import { ref } from 'vue';

const imgLinks = [
    "https://i.ytimg.com/vi/zoEtcR5EW08/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwEcmPx4bgn_tjAqdziT2N1MN2zQ",
    "https://i.ytimg.com/vi/UzssG9TdvUM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhcIEMoZTAP&rs=AOn4CLDA_CMgSYDPr0QevRn9Ga_X2O6qLQ",
    "https://i.ytimg.com/vi/xyd-Jdr3kyM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgFySc4Z1bz_4S2gs5XEgoGFCvLw",
]
const currentSlide = ref(0);

function changeSlide(auto) {
    function next() {
        if (++currentSlide.value >= imgLinks.length) currentSlide.value = 0;
    }

    function prev() {
        if (--currentSlide.value < 0) currentSlide.value = imgLinks.length - 1;
    }

    if (auto) next();
    else prev();
}

</script>

<template>
    <!-- Carousel wrapper -->
    <div class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="duration-700 ease-in-out" v-for="(imgLink, index) in imgLinks">
                <img :src="imgLink"
                    class="absolute block w-11/12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 right-1/2"
                    v-if="(index == currentSlide)" alt="...">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" class="w-3 h-3 rounded-full"></button>
            <button type="button" class="w-3 h-3 rounded-full"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
            class="absolute top-0 start-14 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="changeSlide(false)">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 end-14 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="changeSlide(true)">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>
