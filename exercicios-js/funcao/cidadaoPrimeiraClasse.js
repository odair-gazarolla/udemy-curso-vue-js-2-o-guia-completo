// Function in JS is First-Class Object (Citizens)
// Higher-order function

// Creating in a literal way
function fun1() { }

// Storing at a variable
const fun2 = function() { }

// Storing at an array
const array = [function(a,b) { return a + b }, fun1, fun2]
console.log(array[0](5,8))

// Storing at an object attribute
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

// Function as a param
function run(fun) {
	fun()
}

run(function() { console.log('Executando...') })

// A function could return/containing other function
function soma(a, b) {

	return function(c) {

		console.log(a + b + c)
	}
}

soma(4,2)(5)
const cincoMais = soma(4,1)
cincoMais(3)