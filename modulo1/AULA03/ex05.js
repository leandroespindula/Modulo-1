// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
// Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
// Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
// Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

var valorA = 10;
var valorB = 20;
var valorC = 30;


if(valorA >= valorB+valorC){
    console.log('nÃO FORMAR TRIANGULO');

}else if(Math.pow(valorA,2) == (Math.pow(valorB,2) + Math.pow(valorC,2))){
    console.log('Triangulo retangulo');
}else if(Math.pow(valorA,2) > (Math.pow(valorB,2) + Math.pow(valorC,2))){
    console.log('TRIANGULO OBTUSANGULO');
}else if(Math.pow(valorA,2) < (Math.pow(valorB,2) + Math.pow(valorC,2))){
    console.log('TRIANGULO ACUTANGULO;');
}else if(valorA == valorB){
    if(valorB == valorC){
        console.log("TRIANGULO EQUILATERO");
    }else{
        console.log('TRIANGULO ISOSCELES');
    }
}
