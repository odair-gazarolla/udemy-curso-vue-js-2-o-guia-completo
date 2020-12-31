// Arrow function

// implicit return
const soma = (a, b) => a + b
console.log(soma(2,3))

// Arrow function (this)
// exports is my module, where my arrow function was written
const lexico1 = () => console.log(this === exports)

// trying change pointer of variable "this"
const lexico2 = () => lexico1.bind({})

lexico1()
lexico2()


// Parametro default
function log(texto = 'Node') {

	console.log(texto)
}

log()
log('Sou mais forte')

// rest operator
function total(...numeros) {

	let total = 0
	numeros.forEach(n => total += n)
	return total
}

console.log(total(2,3,4,5))