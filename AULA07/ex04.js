// Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial

const prompt = require ('prompt-sync')();


let caracterEspecial = ['!','@','#','$','%','&','*','(', ')', '_'];
let numeros = [0,1,2,3,4,5,6,7,8,9];

let existeCaractere = false;
let existeNumero = false;
let senhaCorreta = false;

let nome = prompt('Digite seu nome: ');
let senha = prompt('Digite uma senha: ');

while(senhaCorreta == false){
    for(const s of senha){
        for(const c of caracterEspecial){
            if (s == c){
                existeCaractere = true;
            }
        }
    }
    
    for(const s of senha){
        for(const c of existeNumero){
            if (s == c){
                existeNumero = true;
            }
        }
    }

    if(senha.length < 8){
        console.log('Sua senha tem que ter no minimo 8 cartres!');  
    }else if(existeCaractere == false){
        console.log('Senha tem que ter pelo menos 1 carater especial');
    }else if(existeNumero == false){
        console.log('Senha invalida, a senha precisa ter pelo menos UM numero! ');
    }else if(senha.length < 8 || existeCaractere == false || existeNumero == false){
        existeCaractere == false;
        existeNumero == false;
    
        senha = prompt('Crie uma senha valida: ');
    
    
    }else{
        senhaCorreta == true;
    }
} 


console.log(`Parabens ${nome}, sua senha foi criada com sucesso!`);

