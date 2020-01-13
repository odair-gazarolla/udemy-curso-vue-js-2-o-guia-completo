import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

	state: {

		isMenuVisible: true,
		user: {

			name: 'Usuario Mock',
			email: 'mock@rkm.com'
		}
	},
	mutations: {

		toogleMenu(state, isVisible) {

			if (isVisible === undefined) {

				state.isMenuVisible = !state.isMenuVisible

			} else  {

				state.isMenuVisible = isVisible
			}
		}
	}
})