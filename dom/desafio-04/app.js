new Vue({

	el: "#desafio",
	data: {

		cssEfeito: 'destaque',
		cl1: 'cl1',
		cl2: 'cl2',
		cssDigitada: 'clExample2',
		cssDigitada2: 'clExample1',
		aplicarCss: true,
		progressBarTotal: 100,
		progressBarPos: 0,
		progressBarIncremento: 1,
		progress: '0/100',
		perigo: true

	},
	computed: {
		
		meuEstilo() {

			return {

				backgroundColor: 'blue',
				height: '25px',
				width: '60px'
			}
		},
		stProgressBar() {

			return {

				width: `${this.progressBarPos}%`,
				height: '20px',
				backgroundColor: 'purple',
				'text-align': 'center'
			}
		},
		stProgressBarBorders() {

			return {

				border: '1px solid MediumPurple',
				width: `${this.progressBarTotal}%`,
				height: '20px'
			}			
		}
	},
	watch: {

		cssEfeito() {

			setTimeout(() => {

				this.cssEfeito = this.cssEfeito == 'destaque' ? 'encolhe' : 'destaque';
			}, 500);
		},

		// progressBarPos() {

		// 	setTimeout(() => {

		// 		this.progressBarPos = this.progressBarPos < this.progressBarTotal ?
		// 			this.progressBarPos + this.progressBarIncremento : this.progressBarTotal;

		// 		this.progress = this.progressBarPos + '/' + this.progressBarTotal;
		// 	}, 60)
		// }
	},
	methods: {

		iniciarEfeito() {

			this.cssEfeito = 'encolhe'
		},

		iniciarProgresso() {

			let valor = 0;
			const temporizador = setInterval(() => {

				valor += 1;
				this.progressBarPos = valor;
				this.progress = this.progressBarPos + '/' + this.progressBarTotal;
				if (valor >= this.progressBarTotal)
					clearInterval(temporizador);
			}, 60);

			// this.progressBarPos = 1;
		},
		setClass(event) {

			if (event.target.value == "true") {

				this.perigo = true;

			} else if (event.target.value == "false") {

				this.perigo = false;
			}
		}
	}
});