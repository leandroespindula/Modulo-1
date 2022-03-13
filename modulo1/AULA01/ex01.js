//Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.

console.clear;

const prompt = require("prompt-sync")();

const notaA = +prompt('Digite sua nota: ');
const notaB = +prompt('Digite sua nota: ');

notaModerada = (notaA * 4 + notaB * 6) / 10;

console.log(notaModerada);