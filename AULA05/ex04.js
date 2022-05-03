// jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.

const prompt = require('prompt-sync')();    


let numeroMaquina;
let numeroUsuario;
let cont = 0;


function maiorMenor(maquina, usuario){
    if(maquina > usuario){
        console.log('O numero é maior!')
    }else{
        console.log('O numero é menor! ')
    }
}

function adivinhar(maquina, usuario){
    if(maquina == usuario){
        console.log(`Parabens voce acertou, o numero é: ${maquina}`);
    }else{
        console.log('Tente novamente!');
        maiorMenor(maquina, usuario);
    }
}

numeroMaquina = Math.floor(Math.random()*10);

do{
    console.log(numeroMaquina);
    
    numeroUsuario = +prompt('Adivinhe o numero da maquina: ');
    
    adivinhar(numeroMaquina, numeroUsuario);

    cont++;

}while(numeroMaquina != numeroUsuario);

console.log(`você precisou de ${cont} tentativas!`)
console.log('fim de jogo');