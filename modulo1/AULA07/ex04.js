// Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial

const prompt = require ('prompt-sync')();


let caracterEspecial = ['!','@','#','$','%','&','*','(', ')', '_'];
let numeros = [0,1,2,3,4,5,6,7,8,9];

let existeCaractere =FontFaceSetLoadEvent;
let senha;
const regex = /W/;

nome = prompt('Digite seu nome: ');
senha = prompt('Digite uma senha: ');

while(senha.length < 8 && senha != regex){
    console.log(senha.length);
    console.log(senha == regex);
    console.log(`${nome} digite uma senha valida: `);
    console.log('Minimo 8 caracter e 1 caracter especial');
    senha = prompt('Digite novamente sua senha: ');
} 

console.log(`Parabens ${nome}, sua senha foi criada com sucesso!`);

