<script setup>
import axios from 'axios';
import SongCard from './SongCard.vue';
import { ref } from 'vue';

const songList = ref([])

function getSongs() {
    axios.get('http://localhost:4000/songs')
        .then(res => {
            console.log(res)
            songList.value = res
        })
        .catch(error => console.log(error))

    console.log(songList.value)
}
getSongs()

</script>

<template>
    <div class="flex flex-row flex-wrap gap-5 m-5">
        <div v-for="song in songList.data">
            <SongCard :song />
        </div>
    </div>
</template>
