<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import IconAddBox from '../icons/IconAddBox.vue';
import PlaylistDetailTracks from './PlaylistDetailTracks.vue';

const route = useRoute();
const playlistId = route.params.id;
const playlist = ref({});

function getSong() {
    axios.get(`http://localhost:4000/playlists/${playlistId}`)
        .then(res => {
            playlist.value = res
        })
        .catch(error => console.log(error))
}
getSong();

console.log(playlist.value); 


</script>

<template>
    <div>

        <div class="flex flex-row p-8">
            <img class="object-cover rounded-2xl w-60 h-60" :src="playlist.data ? playlist.data.image : ''" alt="image">
            <div class="flex flex-col gap-2 justify-between ps-8">
                <div>
                    <span class="font-normal overflow-hidden text-gray-700 dark:text-gray-400 max-h-20 ps-1">
                        playlist
                    </span>
                    <h1 class="text-7xl font-bold text-gray-900 dark:text-white">
                        {{ playlist.data ? playlist.data.title : '' }}
                    </h1>
                    <div class="font-normal overflow-hidden text-gray-700 dark:text-gray-400 max-h-20 ps-1">
                        {{ playlist.data ? playlist.data.description : '' }}
                    </div>
                </div>
                <div class="flex flex-row gap-4">
                    <button class="flex flex-row gap-1 px-5 py-3 text-md font-medium text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <IconAddBox /> 
                        <span>Add new track</span>
                    </button>
                </div>
            </div>
        </div>

        <PlaylistDetailTracks :playlist="playlist.data? playlist.data.tracks : []" />

        <!-- <div class="bg-slate-100 p-12">
            <h5 class="flex flex-row gap-2 mb-3 ms-4 text-2xl font-bold playlisting-tight text-gray-900 dark:text-white">
                <IconMusicNote />
                <span>Lyrics</span>
            </h5>
            <div id="htmlLyric" class="font-normal text-gray-700 dark:text-gray-400">
                {{ playlist.data? playlist.data.title : '' }}
            </div>
        </div>

        <div class="bg-slate-100 px-12 pb-8">
            <h5 class="mb-3 ms-4 text-2xl font-bold playlisting-tight text-gray-900 dark:text-white">Reference</h5>
            <div id="htmlRefer" class="font-normal text-gray-700 dark:text-gray-400">
                {{ playlist.data? playlist.data.title : '' }}
            </div>
        </div> -->

    </div>
</template>
