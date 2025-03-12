import {CalculadoraIMC, TabelaIMC} from "./CalculadoraIMC.js"


console.log("Projeto rodando")

console.log(">>>>Tabela do IMC<<<<")
console.table(TabelaIMC)

const peso = 80
const alttura = 1.70

const resultado = CalculadoraIMC(peso,alttura)

console.log("Resultado do imc")
console.log(`IMC: ${resultado.toFixed(2)}`)

//Importando lib moment e usado 
import moment from "moment"
const hoje = moment().locale("pt-br")

console.log(hoje.format('DD/MM/yyyy'))