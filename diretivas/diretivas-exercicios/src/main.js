import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.directive('destaque', {

	bind(el, binding, vnode){

		let atrasar = 0;
		if (binding.modifiers['atrasar']) atrasar = 3000;

		setTimeout(() => {

			if (binding.arg === 'fundo')
				el.style.backgroundColor = binding.value;
			else
				el.style.color = binding.value;
		}, atrasar);

	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
