<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/AppComponents/Navbar.vue';
import Footer from './components/AppComponents/Footer.vue';
import Sidebar from './components/AppComponents/Sidebar.vue';
</script>

<template>
	<div class="relative">
		<Navbar />
		<Sidebar /> 
		<RouterView class="pb-10 mt-16" />
		<Footer />
	</div>
</template>

