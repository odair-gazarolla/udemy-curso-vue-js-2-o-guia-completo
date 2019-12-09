export default {

	computed: {

		textoComVirgula()  {

			return this.texto.replace(new RegExp(' ', 'g'), ',');
		},
		palavrasContadas() {

			return this.frase.split(' ').map(valor => `${valor}(${valor.length})`).join(' ');
		}
	}
}