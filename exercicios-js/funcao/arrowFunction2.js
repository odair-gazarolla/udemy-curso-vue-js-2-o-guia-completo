function Pessoa = {
	
	this.idade = 0

	// This way pseudovar this does not variate
	setInterval(() => {

		this.idade++
		console.log('this does not change: ', this.idade)
	}, 2000)

}


new Pessoa