var numeros= [];
const prompt = require('prompt-sync')();

var i = 0;

while(i < 3){
    numeros[i] = prompt ('Digite um numero: ');
    console.log(i);
    i= i+1;
}

i = 0;

while(i < 3){
    console.log(numeros[i]);
}