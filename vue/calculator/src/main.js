import Vue from 'vue'
import App from './App.vue'

new Vue({

	// el: '#app', //override for .$mount
	/*render(createElement) {

		return createElement(App);
	}*/ //override for 'render arrow function'

	render: h => h(App)
}).$mount("#app");