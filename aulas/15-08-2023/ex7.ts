import PromptSync from "prompt-sync";

const prompt = PromptSync()

let numero: string = prompt('Digite um numero: ')
let convNumber = Number(numero)
if (isNaN(convNumber)) {
    while (isNaN(convNumber)) {
        numero = prompt('Tem que digitar um número: ')
        convNumber = Number(numero)
    }
}

if(convNumber % 2 === 0 ){
    console.log('par')
}else{
    console.log('impar')
}