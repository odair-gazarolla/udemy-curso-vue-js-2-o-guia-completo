function Carro(velocidadeMaxima = 200, delta = 5) {

	// private attribute
	let velocidadeAtual = 0

	// public method
	this.acelerar = function() {

		if (velocidadeAtual + delta <= velocidadeMaxima) {

			velocidadeAtual += delta

		} else {

			velocidadeAtual = velocidadeMaxima
		}
	}

	// public method
	this.getVelocidadeAtual = function() {

		return velocidadeAtual
	}
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
	/*Result
		5
	*/

const ferrari(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
	/*Result
		60
	*/

console.log(typeof Carro)
	/*Result
		function
	*/

console.log(typeof ferrari)
	/*Result
		object
	*/