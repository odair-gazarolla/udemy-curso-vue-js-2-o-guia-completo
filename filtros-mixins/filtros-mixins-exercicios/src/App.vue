<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpf | cpf | inverter }}</p>
		<input type="text" :value="cpf | cpf | inverter">
		<hr>
		<Frutas />
		<hr>
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
import UsuarioMixin from './UsuarioMixin';
import Frutas from './Frutas.vue';

export default {

	components: { Frutas },
	mixins: [FrutasMixin, UsuarioMixin],
	filters: {

		cpf(valor) {

			const arr = valor.split('');
			arr.splice(3, 0, '.');
			arr.splice(7, 0, '.');
			arr.splice(11, 0, '-');
			return arr.join('');
		}
	},

	data() {

		return {

			cpf: '61072083094',
			frutas: ['abacate']
		}
	},
	created() {

		console.log('Created - App.vue');
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
