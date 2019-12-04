import Vue from 'vue'
export default new Vue({

	methods: {

		alterarIdade(idade) {

			this.$emit('idadeAlterada', idade);
		},

		quandoIdadeMudar(callback) {

			this.$on('idadeAlterada', callback);
		}
	}
})