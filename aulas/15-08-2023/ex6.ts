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

convNumber > 0 ? console.log('positivo') : (convNumber == 0 ? console.log('zero') : console.log('nevativo'))