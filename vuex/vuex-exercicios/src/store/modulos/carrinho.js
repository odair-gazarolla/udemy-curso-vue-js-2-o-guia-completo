export default {

	namespaced: true,
	state: {

		produtos: []
	},
	getters: {

		valorTotal(state) {

			return state.produtos.map(p => p.quantidade * p.preco)
				.reduce((total, atual) => total + atual, 0)
		}
	},
	mutations: {

		adicionarProdutoMutation(state, payload) {

			state.produtos.push(payload);
		}
	},
	actions: {

		// adicionarProduto(context, payload) {
		//                   \/ expose the commit from context
		adicionarProdutoAction({ commit }, payload) {

			setTimeout(() => {

				commit('adicionarProdutoMutation', payload);
			}, 1000);
		}
	}
}