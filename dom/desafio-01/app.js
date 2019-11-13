new Vue({

	el: '#desafio',
	data: {

		nome: 'Odair Gazarolla',
		idade: '34',
		linkImagem: 'https://f.i.uol.com.br/fotografia/2019/03/15/15526795065c8c025270c53_1552679506_4x3_sm.jpg'
	},
	methods: {

		idadeXtres: function() {

			return this.idade * 3
		},
		numeroRandomico: function() {

			return Math.random(1);
		}
	}

});