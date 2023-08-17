let arrNumeros:Array<number> = [4,2,3]

let maiorNumero:number = Number.MIN_SAFE_INTEGER


for(let numero of arrNumeros){
    if(numero > maiorNumero){
        maiorNumero = numero
    }
}


console.log(maiorNumero)