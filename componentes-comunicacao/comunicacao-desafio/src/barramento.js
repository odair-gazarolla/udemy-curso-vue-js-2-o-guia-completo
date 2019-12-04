import Vue from 'vue'
export default new Vue({

	methods: {

		selecionarUsuario(usuario) {

			this.$emit('selecionouUsuario', usuario);
		},

		usuarioSelecionado(callback) {

			this.$on('selecionouUsuario', callback);
		}
	}
})