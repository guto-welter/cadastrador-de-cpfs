const CPF = require('cpf')
const fs = require('fs')

console.log('Seja bem vindo ao cadastrador de CPF')
// serve para capturar o cpf digitado pelo usuario no terminal após o node index.js .........
let cpf = process.argv[2]
// validar o CPF
let cpfValido = CPF.isValid(cpf)

if (cpfValido) {
  console.log('CPF Válido')
  fs.writeFileSync('dados.txt', cpf + '\n', { flag: 'a' })
} else {
  console.log('CPF Inválido')
}

console.log('FIM!')
