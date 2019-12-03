<template>
	<div class="contadores">
		<h1>Contadores</h1>
		<app-contador v-for="n in 5" :key="n" />
	</div>
</template>

<script>
	import Contador from './Contador.vue'

	export default {

		components: {'app-contador': Contador}
	}
</script>

<style>

</style>