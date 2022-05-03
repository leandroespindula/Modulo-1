// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

const prompt = require('prompt-sync')();

let numero = prompt('Adivinhe o numero que a maquina irá sortear: ');

let numeroAleatorio = Math.floor(Math.random() * 10)

console.log(numeroAleatorio);

if(numero == numeroAleatorio){
    console.log('Parabens, Você venceu!')
}else{
    console.log('Infelizmente você perdeu. Tente novamente!');
}


