function media(numeros:Array<number>){
    let soma = 0 
    for(let elemento of numeros){
        soma = soma + elemento
    }
    return (soma/numeros.length)
}

console.log(media([3,3,3,3]))