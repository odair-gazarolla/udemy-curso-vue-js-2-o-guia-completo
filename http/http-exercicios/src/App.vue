<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>

		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">
			{{ mensagem.texto }}
		</b-alert>

		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o Email"></b-form-input>
			</b-form-group>

			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter Usuários</b-button>

		</b-card>

		<hr>

		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }}
				<br>
				<strong>Email: </strong> {{ usuario.email }}
				<br>
				<strong>ID: </strong> {{ id }}
				<br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" @click="excluir(id)" class="ml-2">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>

	</div>
</template>

<script>
export default {

	data() {

		return {

			mensagens: [],
			usuarios: [],
			idUsuarioSelecionado: null,
			usuario: {

				nome: '',
				email: ''
			}
		}
	},

	methods: {

		limpar() {
			this.usuario.nome = '',
			this.usuario.email = '',
			this.idUsuarioSelecionado = null,
			this.mensagens = []
		},
		carregar(id) {

			this.idUsuarioSelecionado = id,
			this.usuario = {...this.usuarios[id]}
		},
		excluir(id) {

			this.$http.delete(`/usuarios/${id}`)
				.then(() => {
				
					this.limpar();
					this.mensagens.push({

						texto: 'Registro excluído com sucesso!',
						tipo: 'success'
					});
				})
				.catch(err => {

					this.limpar();
					this.mensagens.push({

						texto: 'Erro ao excluir o registro!',
						tipo: 'danger'
					});
				});
		},
		salvar() {

			const metodo = this.idUsuarioSelecionado != null ? 'patch' : 'post';
			const finalUrl = this.idUsuarioSelecionado ? `/${this.idUsuarioSelecionado}.json` : '.json';
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then(() => {

				this.limpar();
				this.mensagens.push({

					texto: 'Registro salvo com sucesso!',
					tipo: 'success'
				});
			});
		},
		obterUsuarios() {

			this.$http.get('usuarios.json').then(res => {

				this.usuarios = res.data
			});
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
