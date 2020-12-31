function Pessoa = {
	
	this.idade = 0

	const self = this
	setInterval(function() {

		self.idade++
		console.log('pessoa using var self as this: ', self.idade)
	}, 2000)

}


function Pessoa2 = {
	
	this.idade = 0

	setInterval(function() {

		self.idade++
		console.log('pessoa2 binding this: ', this.idade)
	}.bind(this) /*pass this to setInterval scope*/ , 2000)

}

new pessoa
new pessoa2