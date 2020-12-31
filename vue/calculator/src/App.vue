<template>
	<div id="app">
		<!-- <h1>Calculadora</h1>
		<Calculator /> -->
		<autocomplete :suggestions="cities" :selection.sync="value"></autocomplete>
	</div>
</template>

<script>
	// import Calculator from './main/Calculator.vue'
	import Autocomplete from './autocomplete/autocomplete.vue';

	export default {

		components: { /*Calculator,*/ Autocomplete },
	}
</script>

<style>	
	@font-face {

		font-family: "RobotoMono";
		src: url("./fonts/RobotoMono-Thin.ttf");
	}

	*   {

		font-family: "RobotoMono", monospace;
	}

	body {

		margin: 0;
	}

	#app {

		display: flex;
		display-direction: column;
		height: 100vh;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;
		background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
	}
</style>