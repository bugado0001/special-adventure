import{Divisao,Soma,multiplicacao,subtração} from "./calculadora.js"

console.log("Calculando elementos...")

let numero1 = 52
let numero2 = 20


let resultadoSoma = Soma(numero1, numero2)

console.log(`Soma:${resultadoSoma}`)



let resultadoSubtracao = subtração(numero1, numero2)

console.log(`Subtração:${resultadoSubtracao}`)





let resultadoDivisao = Divisao(numero1, numero2)

console.log(`Divisão:${resultadoDivisao}`)




let resultadoMultiplicacao = multiplicacao(numero1, numero2)

console.log(`Multiplicão:${resultadoMultiplicacao}`)
