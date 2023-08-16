let numeros = [4,1,2,76,34,5,245,123,26,474,2342,123,254,657,567,2341,23]

let au = 0
let temp = 0

for(let i = 0; i < numeros.length; i++){
    for(let j =0; j < numeros.length; j++){
        if(numeros[i] < numeros[j]){
            au = numeros[i]
            numeros[i] = numeros[j]
            numeros[j] = au
        }
    }
}

console.log(numeros)