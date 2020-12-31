const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {

	console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
	/* Result 
		1. Mercedes
		2. Audi
		3. BMW
	*/

fabricantes.forEach(fabricante => console.log(fabricante))
	/*Result
		Mercedes
		Audi
		BMW
	*/