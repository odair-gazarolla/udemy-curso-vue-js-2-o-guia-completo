import Vue from 'vue'
import App from './App.vue'
import { VueMaskDirective } from 'v-mask'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'

// Vue.component('date-picker', DatePicker)

Vue.directive('mask', VueMaskDirective);

new Vue({

	// el: '#app', //override for .$mount
	/*render(createElement) {

		return createElement(App);
	}*/ //override for 'render arrow function'

	render: h => h(App)
}).$mount("#app");
