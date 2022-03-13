// Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

//https://www.dio.me/articles/entendendo-o-codigo-solucao-do-desafio-c-multiplos

console.clear;

const prompt = require('prompt-sync')();

const numeroA = prompt('Digite um numero: ');
const numeroB = prompt('Digite um numero: ');

if(numeroA % numeroB == 0 || numeroB % numeroA == 0){
    console.log('Os numeros são multiplos!');
}else{
    console.log('Os numeros não são multiplos!');
}