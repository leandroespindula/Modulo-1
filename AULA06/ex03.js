// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.

const prompt = require('prompt-sync')();

let quantidadeAlunos;
let nome = [];
let nota = [];
let mediaTurma = 0;
let i = 0;

//QUANTOS ALUNOS SERAO CADASTRADOS
quantidadeAlunos = +prompt("Digite a quantidade de alunos a serem cadastrados: ");


//CADASTRANDO OS ALUNOS: NOME E NOTA
for(i = 0; i < quantidadeAlunos; i++){
    nome.push(prompt('Digite o nome: '));
    nota.push(+prompt('Digite a nota: ')); 

}
 
//CALCULANDO A MEDIA DA TURMA
for(i = 0; i < quantidadeAlunos; i++){
    mediaTurma = mediaTurma + nota[i];
}

//A MEDIA
mediaTurma = mediaTurma / nota.length;

for(i = 0; i < quantidadeAlunos; i++){
    console.log(`O aluno ${nome[i]} teve nota ${nota[i]}`);
}

console.log(`A media da turma foi: ${mediaTurma}`);


