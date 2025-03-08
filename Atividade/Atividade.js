const prompt = require('prompt-sync')();

/*
Exercício 1: Manipulação de Strings
Crie um script que receba uma string e faça as seguintes operações:
1. Converta a string para maiúsculas.
2. Converta a string para minúsculas.
3. Inverta a string.
4. Substitua todas as ocorrências de uma letra específica por outra.

*/ 

//1 -
let palavra = "maiúsculas"
let maiusculas = palavra.toUpperCase()
console.log(maiusculas)

//2 -
let palavra01 = "MINUSCULAS"
let minusculas = palavra.toLocaleLowerCase()
console.log(minusculas)

//5

let substituir = palavra.replace("maiúsculas", "carro")
console.log(substituir)


/*Exercício 2: Operadores Aritméticos e de Comparação
Crie um script que receba dois números e faça as seguintes operações:
1. Some os dois números.
2. Subtraia o segundo número do primeiro.
3. Multiplique os dois números.
4. Divida o primeiro número pelo segundo.
5. Verifique se o primeiro número é maior que o segundo.
Utilize os números 15 e 5 para os testes. */

//1
let numero01 = 15
let numero02 = 5
let soma = numero01 + numero02; 
console.log(soma)

//2
numero02 =  4

//3
let Multiplique = numero01 * numero02
console.log(Multiplique)

//4 
let Divida = numero01 / numero02
console.log(Divida)

/*Exercício 3: Estruturas de Controle
Crie um script que receba uma idade e verifique se a pessoa é:
1. Menor de idade.
2. Maior de idade.
3. Idosa (idade >= 65).

Utilize a idade 70 para os testes. */

let idade = 70

if(idade <= 18){
    console.log("Menor de idade")
}else if(idade >= 18 && idade <= 65){
console.log("Maior de idade")
}else if(idade >= 65){
    console.log("Idoso")
}


/*
Exercício 4: Laços de Repetição
Crie um script que imprima os números de 1 a 100 usando:
1. Um laço for .
*/

for (let i = 0; i < 1000; i++){
console.log(i+1)

}

/*Exercício 5: Funções
Crie um script que tenha uma função que receba um número e retorne:
1. O dobro do número.
2. O triplo do número.
3. O quadrado do número.
Utilize o número 5 para os testes. */

/*Só não terminei pq não deu tempo */