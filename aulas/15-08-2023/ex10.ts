import PromptSync from "prompt-sync";

const prompt = PromptSync()

let palavra:string = prompt('Digite uma string: ')
palavra = palavra.replace(' ','')

let palavraNova = ''
for(let i = palavra.length - 1; i >= 0; i--){
    palavraNova = palavraNova + palavra[i]
}

if(palavra === palavraNova){
    console.log('Palíndromo')
}else{
    console.log('Não é palíndromo')
}
