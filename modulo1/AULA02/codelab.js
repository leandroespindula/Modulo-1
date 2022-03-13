// Requisitos

// Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares do motor de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"

// No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:

// 0 respostas Sim: Você falha miseravelmente.
// 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
// 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
// 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
// 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
// O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima.

// Para hoje

// Para hoje você deve:

// Construir o rascunho da sua história
// Criar as variáveis com o prompt para fazer as perguntas e receber as respostas
// Exibir ao final o valor de cada uma das respostas

//HISTORIA DA JORNADA DO HEROI

// Acordei as 6 para ir trabalhar (pegeuei o busão) ? , estou indo a caminho do trabalho (Cheguei pontual no trabalho) ? No intervalo sai para almoçar e passar na farmacia pra comprar o leite para meu filho (Consegui comprar o leite ?) no final do dia do trabaho consegui atingir a meta (Conseguir atingir a meta?), nesse dia minha esposa esta de aniversario (Dei o parabens pra ela? )

const prompt = require('prompt-sync')();

var i = 0;
var respostaSim = 0;
var respostaNao = 0;
var resposta=['peguei busão', 'cheguei no trabalho pontualmente', 'consegui comprar o leite', 'conseguir atingir a meta', 'dei o parabens pra minha esposa']

console.clear;

//5 perguntas para o usuario
while(i < 5){
    console.log(resposta[i]);
    resposta[i]= +prompt("SIM(1) ou Não(0): ");
    // console.log()
    if(resposta[i] == 1){
        respostaSim = respostaSim + 1; 
    }else{
        respostaNao = respostaNao + 1;
    }
    i++
}

//resposta para o usuario
if(respostaSim == 0){
    console.log('voce falha miseravelmente');
}else if(respostaSim >= 1 && respostaSim <= 2){
    console.log('você falha, mas ainda consegue fugir da situação.');
}else if(respostaSim == 3){
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
}else if(respostaSim == 4){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
}else{
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
}
