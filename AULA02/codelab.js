// Requisitos

// Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares do motor de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"

// No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:

// 0 respostas Sim: Você falha miseravelmente.
// 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
// 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
// 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
// 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
// O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima.


const prompt = require('prompt-sync')();

var i = 0;
var respostaSim = 0;
var respostaNao = 0;
var resposta=['Consegui pegar o busão ?', 'cheguei no trabalho pontualmente ?', 'consegui comprar o leite do meu filho ?', 'conseguir atingir a meta da empresa ?', 'Minha esposa esta de niver hoje. Lembrei de dar o parabens pra minha esposa ?']

console.clear;

// JORNADA DO HEROI 
console.log('Jornada do Heroi\n\n Acordei as 6 horas da manhã para ir trabalhar, para chegar no trabalho preciso pegar 3 onibus. No intervalo sai para almoçar e passar na farmacia pra comprar o leite para meu filho.  E como é final do mês, tem o fechamento da meta dos funcionários. Nesse dia minha esposa esta de aniversario\n\n');

//5 perguntas para o usuario
while(i < 5){
    console.log(resposta[i]);
    resposta[i]= +prompt("SIM(1) ou Não(0): ");
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
    console.log('você falha, mas ainda consegue fugir da situação.\n\n');
}else if(respostaSim == 3){
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
}else if(respostaSim == 4){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
}else{
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
}
