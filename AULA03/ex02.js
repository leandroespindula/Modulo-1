// Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.

const prompt = require('prompt-sync')();

var nota= [];
i=0;
var total = 0;
var media;

while(i < 4){   
    nota[i] = +prompt(`Digite a nota ${i+1}º: `); 
    i++;
}

i = 0;

while(i < 4){
    total = nota[i] + total;
    i++;
}

media = total/4;

if (media >= 7){
    console.log('Aprovado!')
}else if(media >= 5 && media <= 7){
    console.log('Em recuperação!');
}else{
    console.log('Reprovado')
}