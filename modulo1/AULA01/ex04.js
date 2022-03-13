//Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

const prompt = require('prompt-sync')();

let idade = prompt("Digite os dias vividos: ");

const anos = idade / 365; 

console.log(anos);
