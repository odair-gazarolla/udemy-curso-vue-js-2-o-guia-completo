const alunos = [
	{ nome: 'João', nota: 7.3, bolsista: false },
	{ nome: 'Maria', nota: 9.2, bolsista: true },
	{ nome: 'Pedro', nota: 9.8, bolsista: false },
	{ nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log("Alunos: ", alunos);

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {

	console.log(`Acumulador ${acumulador} - Atual: ${atual}`)
	return acumulador + atual
})

console.log(resultado)