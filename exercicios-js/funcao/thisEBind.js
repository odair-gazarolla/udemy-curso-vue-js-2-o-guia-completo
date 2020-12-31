const pessoa = {
	saudacao: 'Bom dia'
	falar() {

		console.log(this.saudacao)
	}
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflict between paradigm: functional an OO

// Solving conflict
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()