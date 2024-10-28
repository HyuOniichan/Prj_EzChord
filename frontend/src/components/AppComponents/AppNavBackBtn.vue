<script setup>
import IconArrowBack from '../icons/IconArrowBack.vue';

const props = defineProps({
    backto: { type: String }
})

</script>

<template>
    <RouterLink :to="props.backto">
        <div class="flex justify-between gap-2 ms-8">
            <a href="#"
                class="inline-flex items-center border border-gray-400 px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-100">
                <IconArrowBack />
                <span class="ml-1 font-bold text-lg">Back</span>
            </a>
        </div>
    </RouterLink>
</template>
