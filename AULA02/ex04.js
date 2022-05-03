// Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos. Como primeiro passo, escreva um programa que produza a seguinte saída:

const prompt = require('prompt-sync')();

var aluno=[]; 
var nota=[];
var i = 0;

while(i < 4){
    aluno[i]= prompt('Digite o nome do aluno(a): ');    
    nota[i]= +prompt(`Digite a nota do Aluno(a) ${aluno[i]}: `);
    i++;   
}

i= 0;
console.log();
console.log('ALUNO(A)    |    NOTA');

while(i < 4){
    console.log(`${aluno[i]} |             ${nota[i]}`);
    i++;
}