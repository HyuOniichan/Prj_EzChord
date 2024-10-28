<script setup>
import { RouterLink } from 'vue-router';
import IconMoreHoriz from '../icons/IconMoreHoriz.vue';

const props = defineProps({
    playlist: { type: Array }
})

</script>

<template>
    <div class="bg-slate-100">
        <h5 class="text-2xl font-bold text-gray-900 dark:text-white px-20 pt-8 pb-6">Added Tracks</h5>

        <ul class="w-full divide-y divide-gray-200 dark:divide-gray-700">
            <li></li>
            <li class="py-2 px-12 hover:bg-slate-200" v-for="track in props.playlist">
                <div class="flex items-center gap-4 rtl:space-x-reverse">
                    <div>
                        <img class="w-12 h-12 rounded-full" :src="track.image" alt="image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <RouterLink :to="'/tracks/' + track._id" class="text-lg font-medium text-gray-900 truncate dark:text-white hover:underline">
                            {{ track.title }}
                        </RouterLink>
                        <p class="text-lg text-gray-500 truncate dark:text-gray-400">
                            {{ track.description }}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white hover:bg-slate-300 hover:cursor-pointer me-8 p-1 rounded-full">
                        <IconMoreHoriz /> 
                    </div>
                </div>
            </li>
            
        </ul>
    </div>

</template>
