export default {

	data() {

		return {

			fruta: '',
			frutas: ['banana', 'maça', 'orange']
		}
	},
	methods: {

		add() {

			this.frutas.push(this.fruta);
			this.fruta = '';
		}
	},
	created() {

		console.log('Created - FrutasMixin.js');
	}
}