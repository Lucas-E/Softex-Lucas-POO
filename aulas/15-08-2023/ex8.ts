import PromptSync from "prompt-sync";

const prompt = PromptSync()

let numero: string = prompt('Digite o ano: ')
let convNumber = Number(numero)
if (isNaN(convNumber)) {
    while (isNaN(convNumber)) {
        numero = prompt('Tem que digitar um número: ')
        convNumber = Number(numero)
    }
}

if(convNumber % 400 === 0){
    console.log('Bissexto')
}else if(convNumber % 4 ===0 && convNumber % 100 !== 0){
    console.log('bissexto')
}else{
    console.log('Não bissexto')
}