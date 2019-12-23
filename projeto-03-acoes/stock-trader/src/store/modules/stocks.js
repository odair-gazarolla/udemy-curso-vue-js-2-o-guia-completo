import stocks from '@/data/stocks'

export default {

	state: {

		stocks: []
	},
	mutations: {

		setStocks(state, stocks) {

			state.stocks = stocks
		},
		randomizeStocks(state)  {

			state.stocks.forEach(stock => {

				stock.price = Math.round(stock.price * (1 + Math.random() - 0.42));
			});
		}
	},
	actions: {

		buyStock( { commit }, order ) {

			//This methos 'buyStock' belongs to portfolio.vue
			commit('buyStock', order)
		},
		initStocks({ commit }) {

			commit('setStocks', stocks)
		},
		randomizeStocks({ commit }) {

			commit('randomizeStocks')
		}
	},
	getters: {

		stocks(state) {

			return state.stocks
		}
	}
}