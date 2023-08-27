import PromptSync = require("prompt-sync")

const prompt = PromptSync()

let numero: string = prompt('Digite o numero: ')
let convNumber = Number(numero)
if (isNaN(convNumber)) {
    while (isNaN(convNumber)) {
        numero = prompt('Tem que digitar um número: ')
        convNumber = Number(numero)
    }
}

while (convNumber !== 1) {
    if (convNumber % 2 === 0) {
        convNumber = convNumber / 2
        console.log(convNumber)
        continue
    } else {
        convNumber = (convNumber * 3) + 1
        console.log(convNumber)
        continue
    }
}
