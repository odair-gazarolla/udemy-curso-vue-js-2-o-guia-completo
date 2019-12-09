import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contarLetrasPorPalavra', function(param) {

	return param.split(' ').map(valor => `${valor}(${valor.length})`).join(' ');
});

new Vue({
	render: h => h(App),
}).$mount('#app')
