let comparaComThis = function(param) {

	console.log(this === param)
}

comparaComThis(global) //Result = true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // Result = false
comparaComThis(obj) // Result = true

let comparaComThisArraw = param => console.log(this === param)
comparaComThisArraw(global) //Result = false
comparaComThisArraw(module.exports) //Result = true

comparaComThisArraw = comparaComThisArraw.bind(obj)
comparaComThisArraw(obj) // false, cause arrow fun point to the object in wich its was written, .bind couldn't change
comparaComThisArraw(module.exports) // true, arrow fun continue pointing to the object that originally was written