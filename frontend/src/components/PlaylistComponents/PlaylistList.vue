<script setup>
import axios from 'axios';
import { ref } from 'vue';
import PlaylistCard from './PlaylistCard.vue';

const playlistList = ref([])

function getSongs() {
    axios.get('http://localhost:4000/playlists')
        .then(res => { playlistList.value = res })
        .catch(error => console.log(error))

    console.log(playlistList.value)
}
getSongs()

</script>

<template>
    <div class="flex flex-row flex-wrap gap-5 m-5">
        <div v-for="playlist in playlistList.data">
            <PlaylistCard :playlist />
        </div>
    </div>
</template>
