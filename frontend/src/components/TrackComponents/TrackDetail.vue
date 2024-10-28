<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import IconAddBox from '../icons/IconAddBox.vue';
import IconFavorite from '../icons/IconFavorite.vue';
import IconMusicNote from '../icons/IconMusicNote.vue';

const route = useRoute();
const trackId = route.params.id;
const track = ref({});

function getSong() {
    axios.get(`http://localhost:4000/tracks/${trackId}`)
        .then(res => {
            track.value = res
        })
        .catch(error => console.log(error))
}
getSong();

// console.log(track.value); 


function getLyric(textLyric) {
    const htmlLyric = document.getElementById('htmlLyric')

    htmlLyric.innerHTML = textLyric.split('\n').map(e => {
        return `<p>${e}</p>`
    }).join('')
}

function getRefer(textRefer) {
    const htmlRefer = document.getElementById('htmlRefer');

    htmlRefer.innerHTML = textRefer.map(e => {
        return `<a href="${e.source}" class="text-blue-600">${e.text}</a><br>`
    }).join('')
}

</script>

<template>
    <div>

        <div class="flex flex-row p-8">
            <img class="object-cover rounded-2xl w-60 h-60" :src="track.data ? track.data.image : ''" alt="image">
            <div class="flex flex-col justify-between ps-8">
                <div>
                    <h1 class="text-7xl font-bold text-gray-900 dark:text-white">
                        {{ track.data ? track.data.title : '' }}
                    </h1>
                    <p class="text-4xl font-semibold text-gray-700 dark:text-gray-400 my-4 ps-1">
                        {{ track.data ? track.data.artist : '' }}
                    </p>
                    <div class="font-normal overflow-hidden text-gray-700 dark:text-gray-400 max-h-20 ps-1">
                        {{ track.data ? track.data.description : '' }}
                    </div>
                </div>
                <div class="flex flex-row gap-4">
                    <button class="flex flex-row gap-1 px-5 py-3 text-md font-medium text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <IconAddBox /> 
                        <span>Add to my playlist</span>
                    </button>
                    <button class="flex flex-row gap-1 px-5 py-3 text-md font-medium text-white bg-red-500 rounded-xl hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200">
                        <IconFavorite /> 
                        <span>Set as Favourite</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="bg-slate-100 p-12">
            <h5 class="flex flex-row gap-2 mb-3 ms-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <IconMusicNote />
                <span>Lyrics</span>
            </h5>
            <div id="htmlLyric" class="font-normal text-gray-700 dark:text-gray-400">
                {{ track.data ? getLyric(track.data.lyrics) : '' }}
            </div>
        </div>

        <div class="bg-slate-100 px-12 pb-8">
            <h5 class="mb-3 ms-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reference</h5>
            <div id="htmlRefer" class="font-normal text-gray-700 dark:text-gray-400">
                {{ track.data ? getRefer(track.data.refer) : '' }}
            </div>
        </div>

    </div>
</template>
