<template>
	<div class="frutas">
		<h1>{{ global }}</h1>
		<ul>
			<li v-for="(f, i) in frutas" :key="i">
				{{ f }}
			</li>
		</ul>
		<input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
	import FrutasMixin from './FrutasMixin';

	export default {

		mixins: [FrutasMixin],
		created() {

			console.log('Created - Frutas.vue');
		}
	}
</script>