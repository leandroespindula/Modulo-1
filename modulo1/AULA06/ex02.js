// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.

const prompt = require('prompt-sync')();

let idade=[]; 
let altura=[];
let mediaIdade = 0;
let mediaAltura = 0;
let i = 0;
const pessoas = 1;


while(i < pessoas){
    idade.push(+prompt("Digite a idade: "));
    console.log(idade[i]);
    altura.push(+prompt("Digite a altura: "));
    console.log(altura[i]);

    i++
}


//fazer a media de ALTURA E IDADE: 

for(i = 0; i < pessoas; i++){
    mediaAltura = mediaAltura + altura[i];
    mediaIdade = mediaIdade + idade[i];
}

mediaAltura = mediaAltura / pessoas;
mediaIdade = mediaIdade / pessoas;


console.log(`A media de Idade é: ${mediaIdade} e de Altura é ${mediaAltura}`);

