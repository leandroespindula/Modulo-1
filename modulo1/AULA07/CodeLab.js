prompt = require ('prompt-sync')();

let rodadas; //variaveis auxiliares
let rodadasAuxiliar; //variaveis auxiliares

let continuar = 1; // variavel para iniciar o jogo

const opcoes = ['pedra', 'papel', 'tesoura']; // array com as opções

let jogador;
let maquina;

let numeroVitoriaHumano = 0;
let numeroVitoriaMaquina = 0;


while (continuar == 1) {

  // Pergunta quantidade de rodadas
  rodadas = +prompt('Quantas rodadas deseja jogar: ');
  rodadasAuxiliar = rodadas;
  rodadas = 0;
  
  while (rodadas < rodadasAuxiliar) {
    jogador = +prompt('Escolha Pedra(0), Papel(1) e Tesoura(2): ');
    maquina = Math.floor(Math.random()*3);

    //Mostrar o vencedor e numero de vitorias da maquina e jogador humano.

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
    rodadas++;
    
  }
  
  if(numeroVitoriaHumano > numeroVitoriaMaquina){
    console.log("Você venceu! ");
    console.log(`${numeroVitoriaHumano} x ${numeroVitoriaMaquina}`);
  }else if (numeroVitoriaMaquina > numeroVitoriaHumano){
    console.log("A maquina venceu!");
    console.log(`${numeroVitoriaHumano} x ${numeroVitoriaMaquina}`);
  }else{
    console.log(`${numeroVitoriaHumano} x ${numeroVitoriaMaquina}`);
  }

  continuar = +prompt('Deseja reiniciar o jogo: sim(1) nao(0)');
}

console.log('Jogo Encerrado!');