// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

const prompt = require('prompt-sync')();

let numero = +prompt('Digite um numero PAR: ');

while(numero % 2 != 0){
    console.log(`Numero IMPAR! ${numero}`);
    numero = +prompt('Digite novamente um numero PAR: ');
}

console.log(`\nParabens, você Digitou um numero PAR ${numero}`);