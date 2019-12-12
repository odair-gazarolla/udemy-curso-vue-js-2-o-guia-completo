<template>
	<div class="usuario">
		<h2>Usuários</h2>

		<hr>
		<router-view />
		<button sucesso @click="voltar">Voltar</button>
		<button sucesso @click="irParaInicio">Início</button>
	</div>
</template>

<script>
	export default {

		methods: {
			irParaInicio() {

				// this.$router.push('/');
				// this.$router.push({ path: '/' });
				this.$router.push({ name: 'inicio' });
			},
			voltar() {

				window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
			}
		}
	}
</script>