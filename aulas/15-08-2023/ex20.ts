let novos = [4,1,2,76,34,5,245,123,26,474,2342,123,254,657,567,2341,23]

let auxiliar = 0
let maior = Number.MIN_SAFE_INTEGER

for(let i = 0; i < novos.length; i++){
    if(novos[i] > maior){
        maior = novos[i]
    }
}

console.log(maior)