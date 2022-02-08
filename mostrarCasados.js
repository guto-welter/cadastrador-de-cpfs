const pessoas = require('./pessoas.json')
var saoCasados = pessoas.filter(function (pessoaCasada) {
  return pessoaCasada.casado == true
})
console.table(saoCasados)
