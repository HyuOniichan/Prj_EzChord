<script setup>
import HomeSlider from '@/components/HomeSlider.vue';
import HomeUserCard from '@/components/HomeUserCard.vue';
import HomeSection from '@/components/HomeSection.vue';

const titles = ['popular', 'recent', 'favourite']; 

</script>

<template>
	<main class="flex flex-col gap-5 pt-4 px-10 bg-slate-100">
		<div class="flex flex-row">
			<HomeSlider />
			<HomeUserCard />
		</div>
		<div v-for="title in titles">
			<HomeSection :title /> 
		</div>
	</main>
</template>
