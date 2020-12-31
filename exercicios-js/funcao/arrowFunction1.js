// Common way to write a function
let dobro = function(a) {

	return 2 * a
}

// arrow
dobro = (a) => 2 * a // Implicit return
console.log(dobro(Math.PI))

let ola = function() {

	return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // have param

console.log(ola())