const prompt = require('prompt-sync')();

import{Divisao,Soma,multiplicacao,subtração} from "./calculadora.js"

console.log("Calculando elementos...")

let numero1;
let numero2 = 20

numero1 = prompt("Insira o primeiro numero")

let resultadoSoma = Soma(numero1, numero2)

console.log(`Soma:${resultadoSoma}`)



let resultadoSubtracao = subtração(numero1, numero2)

console.log(`Subtração:${resultadoSubtracao}`)





let resultadoDivisao = Divisao(numero1, numero2)

console.log(`Divisão:${resultadoDivisao}`)




let resultadoMultiplicacao = multiplicacao(numero1, numero2)

console.log(`Multiplicão:${resultadoMultiplicacao}`)



import moment from 'moment';

let anonovo = moment().year()

function calcularIdade(anoNascimento) {
return anonovo - anoNascimento
}
const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);