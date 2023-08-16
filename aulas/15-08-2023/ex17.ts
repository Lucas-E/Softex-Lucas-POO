import PromptSync from "prompt-sync"


const prompt = PromptSync()

const palavra = prompt('Digite uma palavra')

let novaPalavra = palavra.replace(' ','')
console.log(novaPalavra)