// Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

const prompt = require('prompt-sync')();

var numero1 = +prompt("Digite um numero: ");
var numero2 = +prompt("Digite outro numero: ")

if(numero1 > numero2){
    console.log(`O numero ${numero1} é maior que o ${numero2}`);
}else if(numero2 > numero1){
    console.log(`O numero ${numero2} é maior que o ${numero1}`);
}else{
    console.log('Os numero são iguais!');
}   