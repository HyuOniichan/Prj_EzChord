<script setup>
import { data } from 'autoprefixer';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const trackId = route.params.id;
const track = ref({});

function getSong() {
    axios.get(`http://localhost:4000/songs/${trackId}`)
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
            <img class="object-cover rounded-2xl w-60 h-60" :src="track.data? track.data.image : ''" alt="image">
            <div class="flex flex-col ps-8">
                <h1 class="text-7xl font-bold text-gray-900 dark:text-white">
                    {{ track.data? track.data.title : '' }}
                </h1>
                <p class="text-4xl font-semibold text-gray-700 dark:text-gray-400 my-4">
                    {{ track.data? track.data.artist : '' }}
                </p>
                <div class="font-normal overflow-hidden text-gray-700 dark:text-gray-400 max-h-20 text-ellipsis">
                    {{ track.data? track.data.description : '' }}
                </div>
                <!-- Add function button such as "Add to my playlist" or "Set as Favourite" -->
            </div>
        </div>

        <div class="bg-slate-100 p-12">
            <h5 class="mb-3 ms-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lyrics</h5>
            <div id="htmlLyric" class="font-normal text-gray-700 dark:text-gray-400">
                {{ track.data? getLyric(track.data.lyrics) : '' }}
            </div>
        </div>

        <div class="bg-slate-100 px-12 pb-8">
            <h5 class="mb-3 ms-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reference</h5>
            <div id="htmlRefer" class="font-normal text-gray-700 dark:text-gray-400">
                {{ track.data? getRefer(track.data.refer) : '' }}
            </div>
        </div>
        
    </div>
</template>
