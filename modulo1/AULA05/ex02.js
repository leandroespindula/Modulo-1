// Faça um programa que leia e valide as seguintes informações:

// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

const prompt = require('prompt-sync')();

let nome;
let idade;
let salario;
let estadoCivil=['S','C','V','D'];

nome = prompt('Digite nome: ');
idade = prompt('Digite a idade: ');
salario = prompt('Digite o salario: ');
estadoCivil[] = prompt('Digite o estado civil: "C", "S", "V", "D"');

while(true){
    if(nome.length < 3){
        console.log('Nome menor que 3 digitos! ');
        break;
    }else{
        console.log('Nome - Check');
    }
    
    if(idade > 0 && idade <= 150){
        console.log('Idade Invalida! ');
        break;
    }else{
        console.log('IDADE - Check');
    }

    if(salario > 0){
        console.log('Salario menor que ZERO! ');
        break;
    }else{
        console.log('SALARIO - Check');
    }

    if(){
        console.log('Salario menor que ZERO! ');
        break;
    }else{
        console.log('SALARIO - Check');
    }
}