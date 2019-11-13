new Vue({

	el: '#desafio',
	data: {

		valor: ''
	},
	methods: {

		exibirAlerta() {

			alert('Alertando!!!');
		},
		listenkey() {

			this.valor = event.target.value
		}
	}
});