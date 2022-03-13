//Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

// const anos = 27;
// const meses = 11;
// const dias = 24;

const prompt = require('prompt-sync')();

const anos = prompt("Digite sua idade: ");

totalVivido = (anos * 365 + meses * 30) + dias;

console.log(totalVivido);