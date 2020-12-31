// let e const
{
	var a = 2 // Don't have block scope
	let b = 3 // Have block scope
	console.log(b)
}
console.log(a)


// Template string
const produto = 'iPad'
console.log(`${produto} é caro`);

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

// Get first two values
const [x, y] = [1,2,3]
console.log("x, y", x, y);

// Get two values ignoring the second one
const [x2, , y2] = [1,2,3]
console.log("x2, y2", x2, y2);

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log("idade, nome", idade, nome);

// Destructing and renaming
const { idade: age, nome2 } = { nome2: 'Ana', idade: 9 }
console.log("age, nome", age, nome);