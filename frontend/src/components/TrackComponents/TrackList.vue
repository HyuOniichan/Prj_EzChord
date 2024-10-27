<script setup>
import axios from 'axios';
import TrackCard from './TrackCard.vue';
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
            <TrackCard :song />
        </div>
    </div>
</template>
