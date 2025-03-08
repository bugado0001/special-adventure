//Coamando de uma linha 

/*
comentaorio em bloco
*/

//Variavel 
const nome = "Rafael"
let idade = 16

console.log(`O ${nome} é um vacilão que nunca aprendeu a coda ksksks, ele tem ${idade} de idade sksksksks`)
let numeros = 3
let resto = numeros % 3

let incremeto = ++numeros
let decremeto = --numeros



console.log(resto)
console.log(incremeto)
console.log(decremeto)


//Arrrays 

    let fruts = ["Maça", "Banana", "Uva"]

console.log(fruts[0])
console.log(fruts[1])
console.log(fruts[2])
console.log(fruts.length)
console.log(fruts[0])
console.log(fruts[0])

fruts.push("Abacaxi")

console.log(fruts)

fruts.forEach((fruts) => {
console.log(fruts)
})

//OBJETO
let pessoa ={
    nome: "Rafael", 
    idade: 17, 
    mama: "Não"
}

console.log(pessoa)

pessoa.email = "rafael1232@gmail.com"
console.log(pessoa)



console.log(pessoa)

let {email} = pessoa 

console.log(email)

let endereco = {
    cidade : "ceilandola", 
    numero : 1 
}

let CasaDoPedro ={ ...pessoa, ...endereco}

console.log(CasaDoPedro)

//função 
function somar(numA, NumB){
return numA * NumB


}

console.log(somar(2,2))
console.log(somar(2,3))
console.log(somar(2,4))
console.log(somar(2,5))

