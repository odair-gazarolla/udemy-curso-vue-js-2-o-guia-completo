<template>
	<div id="app">
		<h1>Ola</h1>
		<div class="form">

			<div v-if="!started">

				<div>
					<label label="portsAmount">Quantas portas?</label>
					<input type="text" id="portsAmount" size="3" v-model.number="portsAmount">
				</div>
				<div>
					<label for="selectedPort">Qual porta é premiada?</label>
					<input type="text" id="selectedPort" size="3" v-model.number="selectedPort">
				</div>

				<button @click="started = true">Iniciar</button>

			</div>
			<div v-else>
				<button @click="started = false">Reiniar</button>
			</div>

		</div>

		<div class="doors" v-if="started">
			<div v-for="i in portsAmount" :key="i">
				<Door :hasGift="i === selectedPort" :number="i" />
			</div>
		</div>
	</div>
</template>

<script>

	import Door from './components/Door.vue'
	export default {

		name: 'App',
		components: { Door },

		data() {

			return {

				started: false,
				portsAmount: 3,
				selectedPort: 0
			}
		}

	}	
</script>

<style>

	* {
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}

	body {

		color: #fff;
		background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
	}

	#app {

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#app h1 {

		border: 1px solid #000;
		background-color: #0004;
		padding: 20px;
		margin-bottom: 60px;
	}

	.form {

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 40px;
	}

	.form, .form input, .form button {

		margin-bottom: 10px;
		font-size: 2rem;
	}

	.doors {

		align-self: stretch;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
</style>