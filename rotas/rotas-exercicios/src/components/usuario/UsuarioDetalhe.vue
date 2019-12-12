<template>
	<div class="usuario-detalhe">
		<h3>Usuário Detalhe</h3>
		<hr>

		<p><strong>Código: </strong>{{ id }}</p>
		<!-- :to="`/usuario/${id}/editar`" -->
		<router-link tag="button" primario
			:to="{name: 'editarUsuario', params: { id }, query: { completo: true, lingua: 'pt' }, hash: '#rodape'}">
			Editar
		</router-link>
	</div>
</template>

<script>
	export default {

		beforeRouteEnter(to, from, next) {

			console.log('Dentro do componente -> Usuário detalhe');

			// next(vm => {
			// 	console.log('Cod. ', vm.id);
			// });

			const autenticado = true;
			next(autenticado);
		},

		props: ['id'],
/*		data() {

			return {

				id: this.$route.params.id
			}
		},
		watch: {

			$route(to, from) {

				this.id = to.params.id
			}
		},*/
	}
</script>