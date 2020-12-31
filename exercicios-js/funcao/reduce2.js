const alunos = [
	{ nome: 'João', nota: 7.3, bolsista: false },
	{ nome: 'Maria', nota: 9.2, bolsista: true },
	{ nome: 'Pedro', nota: 9.8, bolsista: false },
	{ nome: 'Ana', nota: 8.7, bolsista: true }
]

// Chanllenge 1: All students are "bolsista"
const todosAlunosSaoEstudantes = alunos.map(a => a.bolsista).reduce((acumulador, atual) => {

	return acumulador && atual
})

console.log("TodosAlunosSaoEstudantes: ", todosAlunosSaoEstudantes)

// Chanllenge 2: Some student is "bolsista"
const algumAlunoEBolsista = alunos.map(a => a.bolsista).reduce((acumulador, atual) => {

	return acumulador ? acumulador : atual
})

console.log("algumAlunoEBolsista: ", algumAlunoEBolsista);