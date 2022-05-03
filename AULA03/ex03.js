// Faça um programa que leia um número, e informe se ele é par ou impar

const prompt = require('prompt-sync')();

const numero = prompt('Digite um numero: ');

if(numero % 2 == 0){
    console.log('numero é par!');
}else {
    console.log('Numero é impar!')
}