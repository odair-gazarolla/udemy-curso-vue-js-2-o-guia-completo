new Vue({

	el: "#desafio",
	data: {

		valor: 0
	},
	computed: {

		resultado() {

			return this.valor == 37
				? "Valor igual a 37"
				: "Valor Diferente de 37"
		}
	},
	watch: {

		resultado() {

			console.log("called");
			setTimeout(() => {
				this.valor = 0;
			}, 5000);
		}
	}
});