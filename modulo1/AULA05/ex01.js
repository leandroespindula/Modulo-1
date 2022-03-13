// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

const prompt = require('prompt-sync')();

let senha, nome;

nome = prompt('Digite seu nome: ');

senha = prompt('Digite sua senha: ');

while (nome == senha){

    console.log('O nome e senha não podem ser iguais!');

    nome = prompt('Digite seu nome: ');
    senha = prompt('Digite sua senha: ');

}

console.log('Login e senha criados com sucesso!');