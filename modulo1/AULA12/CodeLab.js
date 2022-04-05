// Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por determinar o inicio e término da história, além de avançar o tempo a cada escolha.
// É importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição das possibilidades do personagem, por exemplo: Manhã, tarde, noite, dormir - Recomeça o ciclo.
// É obrigatório o uso funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
// Use toda sua criatividade para desenvolver uma história interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido! Lembre-se que as escolhas devem impactar no que acontecerá com o personagem no decorrer da história, e adicionar eventos que podem ocorrer de maneira aleatória é uma boa ideia para tornar o seu jogo mais interessante.

//--------------------LEANDRO-ESPINDULA-DOS-PASSOS--------------------------------

const prompt = require('prompt-sync')();

let pronto = 0;
let modulo = 0;
let media = 0;
let tentativa= 0;
let continuar = 0;
let resultadoMaquina
let resultadoHumano=[];



//ARRAY PRA ARMAZER NUMEROS ALEATORIOS
let numeros = [];

//Sortea uma nota com minimo e maximo;
// function nota(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

//DECLARAÇÃO, ESCOLHE UM NUMERO ALEATORIO.
function numeroAleatorio(){
    let numero = Math.floor(Math.random(1000)*10);
  
    return numero;
}
 
//DECLRAÇÃO, PARA SOMAR DOIS NUMEROS E RETORNAR O RESULTADO.
function soma(x,y){
    let soma;
    soma = x + y;
      
    return soma;
} 

//DECLARAÇÃO, CONTAR OS SEGUNDOS ATÉ O USUARIO RESPONDER
function respostaHumano(x, y) {
    var dataInicio2 = Date.now();
    let soma=[];
    soma[0] = +prompt(`${x} + ${y}: `);
  
    var dataTermino2 = Date.now(); 
    var diferencaTempo2 = dataTermino2 - dataInicio2;

    console.log(diferencaTempo2);
  
    soma[1] = diferencaTempo2;

    return soma;
}

//FUNÇÃO PARA VER SE HUMANO ACERTOU 
function correcao (maquina, humano){
    if(maquina == humano){
      return 1; 
    }else{
      return 0;
    }
}
  

//OBJETO JOGADOR
const jogador = {
    //ATRIBUTOS DO JOGADOR
    statusJogador: '',
    estudar : 10,

    //FUNÇÃO PARA SUBTRAIR O NOTA CONFORME DESEMPRENHO NA AVALIAÇÃO
    estudar1: function(x) {
        if(x == 0){
            this.estudar = this.estudar - 0;
            return this.jogador;
        }else if(x == 1){
            this.estudar = this.estudar - 1;
            return this.jogador;
        }else if(x == 2){
            this.estudar = this.estudar - 2;
            return this.jogador;
        }else if(x == 3){
            this.estudar = this.estudar - 3;
            return this.jogador;
        }else if(x == 4){
            this.estudar = this.estudar - 4;
            return this.jogador;
        }else if(x == 5){
            this.estudar = this.estudar - 5;
            return this.jogador;
        }else if(x == 6){
            this.estudar = this.estudar - 10;
            return this.jogador;
        }
        
    }
};

console.clear;


//INTRODUÇÃO DO JOGO
console.clear();
console.log('ÓLA BLUMER, BEM-VINDO AO BLUE SIMULATOR')
console.log();
console.log('Bem-vindo Blumer, espero que você se dedique aos estudos. Para isso uma boa noite de sono e uma boa alimentação irão te ajudar no processo de estudar!')
console.log();
pronto = +prompt('Digite 1 para começar o jogo!');

//INICIO DO JOGO
if(pronto == 1){
        
do{
    //variavel pronto recebe 0 pra proxima rodada
    pronto = 0;
    if(tentativa == 1){
        console.log();
        console.log(`Sua media foi ${media}, proxima reprovação tera custos
         adicionais!` );
         console.log();
         media = 0;
        pronto = +prompt('ATENÇÃO, FIQUE PREPARADO. UMA SEGUNDA CHANCE FOI DADA: Digite 1 para continuar: ');
        
    }else if(tentativa >=2 ){
        media =0;
        console.log(`Status atualizado ..:::$${jogador.statusJogador}:::..`)
        console.log(`Sei que vc está muito ${jogador.statusJogador}, mas não fique assim não! temos uma super promoção para você continuar seguindo seus sonhos!!! :)`);
        continuar = +prompt("O valor a pagar é: R$ 1000  DESEJA PAGAR: sim(1) ou não(0)");
        if(continuar == 0){
            console.log();
            console.log('Lamentamos muito por não ter conseguido, tente na proxima!');
            break;
        }
    }
        
    //ENQUANTO MENOR QUE 3 MODEULOS, EXECUTA!
    while(modulo < 3){
        console.log('--------------------------------------');
        console.log(jogador.estudar);
        console.log(`Essa é a ${modulo+1}º semana do curso!`)
    
        // ADICIONANDO NUMEROS ALEATORIOS NO ARRAY ATRAVES DA FUNÇÃO numeroAleatorio();
        numeros[0] = numeroAleatorio();
        numeros[1] = numeroAleatorio();
        
        //RESULTADO DA SOMA DA MAQUINA
        resultadoMaquina = soma(numeros[0], numeros[1]);
        
        //CALCULA O TOTAL REFERENTE A SOMA DOS DOIS NUMEROS, CHAMADO PELA FUNÇÃO soma. HUMANO
        resultadoHumano = respostaHumano(numeros[0], numeros[1]);

        //CORREÇÃO PARA VER SE O HUMANDO ACERTOU!
        let fazendoCorrecao =  correcao(resultadoHumano[0], resultadoMaquina);

        
        //ATRIBUIÇÃO DAS NOTAS PARA O OBJETO JOGADOR
        if(fazendoCorrecao == 1){
            if(resultadoHumano[1] <= 4000){
                jogador.estudar1(0);
                console.log(`Parabens, voce acertou! Sua nota foi ${jogador.estudar}`);
            }else if(resultadoHumano[1] > 6000){
                jogador.estudar1(1);
                console.log(`Parabens, voce acertou! Sua nota foi ${jogador.estudar}`);
            }else if(resultadoHumano[1] >= 8000){
                jogador.estudar1(2);
                console.log(`Parabens, voce acertou! Sua nota foi ${jogador.estudar}`);
            }else if(resultadoHumano[1] >= 10000){
                jogador.estudar1(3);
                console.log(`Parabens, voce acertou! Sua nota foi ${jogador.estudar}`);
            }else if(resultadoHumano[1] >= 12000){
                jogador.estudar1(4);
                console.log(`Parabens, voce acertou! Sua nota foi ${jogador.estudar}`);
            }else if(resultadoHumano[1] >= 14000){
                jogador.estudar1(5);
                console.log(`Parabens, voce acertou! Sua nota foi ${jogador.estudar}`);
            }
        }else if(fazendoCorrecao == 0){
            jogador.estudar1(6);
            console.log(`Você errou, sua nota foi ${jogador.estudar}`);
            
        }

        //ATRIBUÇÃO NO STATUS DO OBJETO JOGADOR
        
        if(fazendoCorrecao == 1){
            if(jogador.estudar == 10){
                jogador.statusJogador = 'feliz'
                console.log(`Status atualizado ..:::$${jogador.statusJogador}:::..`)
            }else if(jogador.estudar == 9){
                jogador.statusJogador = 'feliz porem poderia ser melhor'
                console.log(`Status atualizado ..:::$${jogador.statusJogador}:::..`)
            }else if(jogador.estudar == 8){
                jogador.statusJogador = 'feliz, mas tenho que ser melhor da proxima vez'
                console.log(`Status atualizado ..:::$${jogador.statusJogador}:::..`)
            }else if(jogador.estudar == 7){
                jogador.statusJogador = 'feliz porem preocupado'
                console.log(`Status atualizado ..:::$${jogador.statusJogador}:::..`)
            }else if(jogador.estudar == 6){
                jogador.statusJogador = 'triste porem vejo uma luz no fim do tunel'
                console.log(`Status atualizado ..:::$${jogador.statusJogador}:::..`)
            }else if(jogador.estudar == 5){
                jogador.statusJogador = 'triste...'
                console.log(`Status atualizado ..:::$${jogador.statusJogador}:::..`)
            }
        }else if(fazendoCorrecao == 0){
            jogador.statusJogador = 'muito triste'
            console.log(`Status atualizado ..:::$${jogador.statusJogador}:::..`)
        }
            
    

                
        media = media + jogador.estudar;
        
        modulo++;
        jogador.estudar = 10;
    }   
    
    //CALCULAR A MEDIA DE DO MODULO
  
    media = media / 3;
    console.log({media})


    tentativa++;
    modulo = 0;

}while (media < 7);

if(media >= 7){
    console.log('---------------------------');
    console.log();
    console.log(`Parabens, você passou para Modulo 2 sua media foi ${media}`);
    console.log('Fim de jogo!');
}

}

