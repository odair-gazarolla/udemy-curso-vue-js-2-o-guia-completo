const nums = [1,2,3,4,5]

// "For" with porpose
let resultado = nums.map(function(e) {

	return e * 2
})

console.log(resultado)
	/*Result
		[2,4,6,8,10]
	*/

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);
	/*Result
		[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,000', 'R$ 45,00' ]
	*/