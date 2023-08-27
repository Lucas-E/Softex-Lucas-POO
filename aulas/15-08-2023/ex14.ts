import PromptSync = require("prompt-sync")

const prompt = PromptSync()

let isPrime:boolean = true

let numero: string = prompt('Digite o numero: ')
let convNumber = Number(numero)
if (isNaN(convNumber)) {
    while (isNaN(convNumber)) {
        numero = prompt('Tem que digitar um número: ')
        convNumber = Number(numero)
    }
}

for(let i = 1; i < Math.ceil(convNumber/2); i++){
    if(convNumber % i === 0){
        isPrime = false
        break
    }
}

if(isPrime){
    console.log('primo')
}else{
    console.log('Não primo')
}