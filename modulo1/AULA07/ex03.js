// Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.

let numeros = [];
let i =0;

while(i < 20){
    numeros.push(Math.ceil(Math.random()*100));  
    i++;
}

numeros.sort();

i=0;

while(i < 20){
    console.log(`${i} ${numeros[i]}`);
    i++
}
