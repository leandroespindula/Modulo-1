// Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.

const prompt = require ('prompt-sync')();

let numeros = [];
let pares= [];
let impares =[];
let i = 0;

while(i < 20){
    numeros[i] = prompt('Digite um numero: ');

    i++;
}


for(i = 0;  i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        pares.push(numeros[i]);
    }else{
        impares.push(numeros[i]);
    }
}

// IMPRIMINDO OS TRÊS ARRAYS 

console.log('Numeros Digitados! ');
for(i = 0; i < numeros.length; i++){    
    console.log(`${numeros[i]}`);
    console.log();
}

console.log('Numeros Pares: ');
for(i = 0; i < pares.length; i++){
    console.log(`${pares[i]}`);
    console.log();
}

console.log('Numeros Impares ');

for(i = 0; i < impares.length; i++){
    console.log(`${impares[i]}`);
    console.log();
}