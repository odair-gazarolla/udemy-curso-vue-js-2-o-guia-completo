Array.prototype.map2 = function(callback) {

	const newArray = []
	for (let i = 0; i < this.lenght; i++) {

		newArray.push(callback(this[i], i, this))
	}

	return newArray
}

const carrinho = [
	'{ "nome": "Borracha", "preco": 3.45 }',
	'{ "nome": "Caderno", "preco": 13.90 }',
	'{ "nome": "Kit de Lapis", "preco": 41.22 }',
	'{ "nome": "Caneta", "preco": 7.50 }',
]

// Return an array just with prices
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultados = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultados);
	/*Result
		[3.45, 13.90, 41.22, 7.50]
	*/