// Faça um programa que leia e valide as seguintes informações:

// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

const prompt = require('prompt-sync')();

let nome;
let idade;
let salario;
let estadoCivil;

nome = prompt('Digite nome: ');
idade = prompt('Digite a idade: ');
salario = prompt('Digite o salario: ');

while(true){
    console.clear;
    console.log('\nSELECIONE UMA DAS OPÇÕES A SEGUIR:\n\ncasado(C)\nsolteiro(S)\nviuvo(V),\ndivorciado(D)\n');
    estadoCivil= prompt('Digite seu ESTADO CIVIL: ');
    if(estadoCivil == 'c' || estadoCivil == 's'){
        break;
    }else if(estadoCivil == 'v' ||  estadoCivil == 'd'){
        break;
    }
    console.clear;
}


    
console.clear;
    
if(nome.length < 3){
    console.log('\nNome menor que 3 digitos! ');
}else{
    console.log('\nNome - Check');
}

if(idade < 0 && idade > 150){
    console.log('Idade Invalida! ');
}else{
    console.log('IDADE - Check');
}
    
if(salario < 0){

    console.log('Salario menor que ZERO! ');
}else{
    console.log('SALARIO - Check');
}

console.log(`Estado Civil: ${estadoCivil}`);