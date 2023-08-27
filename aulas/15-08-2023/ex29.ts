function inverteString(palavra:String){
    let novaString = ''
    for(let i = palavra.length - 1; i >= 0; i--){
        novaString = novaString + palavra[i]
    }
    return novaString
}

console.log(inverteString('hello'))