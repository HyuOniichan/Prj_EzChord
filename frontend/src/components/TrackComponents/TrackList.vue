<script setup>
import axios from 'axios';
import TrackCard from './TrackCard.vue';
import { ref } from 'vue';

const trackList = ref([])

function getSongs() {
    axios.get('http://localhost:4000/tracks')
        .then(res => { trackList.value = res })
        .catch(error => console.log(error))

    console.log(trackList.value)
}
getSongs()

</script>

<template>
    <div class="flex flex-row flex-wrap gap-5 m-5">
        <div v-for="track in trackList.data">
            <TrackCard :track />
        </div>
    </div>
</template>
