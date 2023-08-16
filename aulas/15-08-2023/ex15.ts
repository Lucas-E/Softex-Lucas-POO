import PromptSync from "prompt-sync"

const vogais = ['a','e','i','o', 'u']


const prompt = PromptSync()

const palavra = prompt('Digite uma palavra')
let count:number = 0

for(let i = 0; i < palavra.length; i++){
    if(vogais.includes(palavra[i])){
        count = count + 1
    }
}

console.log(count, 'vogais')