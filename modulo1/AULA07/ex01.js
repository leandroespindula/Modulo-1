// Faça um programa que peça um número inteiro e crie arrays com:
// Todos os números pares de 0 ao número escolhido;
// Todos os números ímpares do 0 ao número escolhido.

const prompt = require('prompt-sync')(); 

let numero = 0;
let i;

let pares = [];
let impares = [];

numero = prompt("Digite um numero inteiro: ");


for(i=0; i <= numero; i++){
    if(i % 2 == 0){
        pares.push(i);
    }else{
        impares.push(i);
    }
}

console.log("NUMEROS PARES");
for(i=0; i < pares.length; i++){
    console.log(pares[i]);
}

console.log("NUMEROS IMPARES");
for(i=0; i < impares.length; i++){
    console.log(impares[i]);
}