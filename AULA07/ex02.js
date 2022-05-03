// Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa quantidade de notas em um array. Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).

const prompt = require('prompt-sync')();

let quantidadeNotas;
let notas= []; 
let contAprovados = 0;
let contRecu = 0;
let contRepro = 0;
quantidadeNotas = +prompt("Digite a quantidades de notas para darem entrada: ");

for(let i =0; i <quantidadeNotas; i++){
    notas.push(+prompt('Digite a nota: ')); 
}

for(let i=0; i< quantidadeNotas; i++){
    if(notas[i] >= 7){
        contAprovados++;
    }else if(notas[i]>5 && notas[i] < 7){
        contRecu++;
    }else{
        contRepro++;
    }
}

console.log(`Numeros de aprovados ${contAprovados}`);
console.log(`Numeros de recuoeração ${contRecu}`);
console.log(`Numeros de Reprovados ${contRepro}`);