import PromptSync from "prompt-sync"


const prompt = PromptSync()

const palavra = prompt('Digite uma palavra: ')
const letra = prompt('Digite a letra para verificar: ')

let counter = 0

for(let i = 0; i < palavra.length; i++){
    if(palavra[i] === letra){
        counter = counter + 1
    }
}

console.log(counter, ' ocorrencias')