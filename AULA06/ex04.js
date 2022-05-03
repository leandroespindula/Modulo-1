// Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido

let dados = [1,2,3,4,5,6];
let contUm = 0;
let contDois = 0;
let contTres = 0;
let contQuatro = 0;
let contCinco = 0;
let contSeis = 0;

for(let i = 0; i < 100; i++){
    dadoLancado = Math.ceil(Math.random() * dados.length);
    console.log(dadoLancado);
    
    if(dadoLancado == 1){
        contUm++;
    }else if(dadoLancado == 2 ){
        contDois++;
    }else if(dadoLancado == 3){
        contTres++;
    }else if(dadoLancado == 4){
        contQuatro++;
    }else if(dadoLancado == 5){
        contCinco++;
    }else if(dadoLancado == 6){
        contSeis++;

    }
}

console.log(`O numero 1 foi lançado ${contUm} vezes`);
console.log(`O numero 2 foi lançado ${contDois} vezes`);
console.log(`O numero 3 foi lançado ${contTres} vezes`);
console.log(`O numero 4 foi lançado ${contQuatro} vezes`);
console.log(`O numero 5 foi lançado ${contCinco} vezes`);
console.log(`O numero 6 foi lançado ${contSeis} vezes`);
