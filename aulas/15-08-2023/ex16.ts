import PromptSync from "prompt-sync"


const prompt = PromptSync()

const palavra = prompt('Digite uma palavra')

console.log(palavra.toUpperCase())