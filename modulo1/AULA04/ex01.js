// Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
// Salários até R$ 280,00 (incluindo): aumento de 20%. 
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.

const prompt = require('prompt-sync')();

let salario = +prompt('Digite seu salario: ');
let aumentoSalario=0;

if(salario <= 280){
    console.log(`\nSalario antes do resajuste R$ ${salario}`)
    aumentoSalario = salario * 0.2;
    salario = aumentoSalario + salario;
    console.log(`\nVocê teve um aumento de 20% equivalente a R$ ${aumentoSalario}\n\nSeu salario atual é R$ ${salario}`);
}else if(salario > 280 && salario <=700){
    console.log(`\nSalario antes do resajuste R$ ${salario}`)
    aumentoSalario = salario * 0.15;
    salario = aumentoSalario + salario;
    console.log(`\nVocê teve um aumento de 20% equivalente a R$ ${aumentoSalario}\n\nSeu salario atual é R$ ${salario}`);
}else if(salario > 700 && salario < 1500){
    console.log(`\nSalario antes do resajuste R$ ${salario}`)
    aumentoSalario = salario * 0.1;
    salario = aumentoSalario + salario;
    console.log(`\nVocê teve um aumento de 20% equivalente a R$ ${aumentoSalario}\n\nSeu salario atual é R$ ${salario}`);
}else{
    console.log(`\nSalario antes do resajuste R$ ${salario}`)
    aumentoSalario = salario * 0.05;
    salario = aumentoSalario + salario;
    console.log(`\nVocê teve um aumento de 20% equivalente a R$ ${aumentoSalario}\n\nSeu salario atual é R$ ${salario}`);
}