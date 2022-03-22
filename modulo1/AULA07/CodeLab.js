console.clear;
prompt = require ('prompt-sync')();

let rodadas; //variaveis auxiliares

let continuar = 1; // variavel para iniciar o jogo

const opcoes = ['pedra', 'papel', 'tesoura']; // array com as opções

let jogador;
let maquina;

let numeroVitoriaHumano = 0;
let numeroVitoriaMaquina = 0;


while (continuar == 1) {

  // Pergunta quantidade de rodadas
  rodadas = +prompt('Quantas rodadas deseja jogar: ');
  
  for (let i = 0; i < rodadas ; i++) {
    console.clear;
    console.log(`${i + 1} de ${rodadas}\n\n`);
    jogador = +prompt('Escolha Pedra(0), Papel(1) e Tesoura(2): ');
    maquina = Math.floor(Math.random()*opcoes.length);

    //Soma as vitorias do jogador humano e da maquina.

    if(jogador == 0){
      if(maquina == 1){
        numeroVitoriaMaquina++;
        
      }else if(maquina == 2){
        numeroVitoriaHumano++;
        
      }
      
    }
      
    else if(jogador == 1){
      if(maquina == 0){
        numeroVitoriaMaquina++;
        
      }else if(maquina == 2){
        numeroVitoriaHumano++;
        
      }
      
    }
      
    else if(jogador == 2){
      if(maquina == 1){
        numeroVitoriaMaquina++;
        
      }else if(maquina == 0){
        numeroVitoriaHumano++;
        
      }


    
    }

    
     //Mostra as mensagens de quem venceu e os placares!

    
  
  }

  if(numeroVitoriaHumano > numeroVitoriaMaquina){
    console.log("Você venceu! ");
    console.log(`HUMANO ${numeroVitoriaHumano} x ${numeroVitoriaMaquina} MAQUINA\n\n`);
  }else if (numeroVitoriaMaquina > numeroVitoriaHumano){
    console.log("A maquina venceu!");
    console.log(`HUMANO ${numeroVitoriaHumano} x ${numeroVitoriaMaquina} MAQUINA\n\n`);
  }else{
    console.log("Empate");
    console.log(`HUMANO ${numeroVitoriaHumano} x ${numeroVitoriaMaquina} MAQUINA\n\n`);
  }

  continuar = +prompt('Deseja reiniciar o jogo: sim(1) nao(0)');

}



console.log('Jogo Encerrado!');
