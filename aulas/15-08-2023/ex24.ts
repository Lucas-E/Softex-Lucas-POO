function fatorial(numero:number):number{
    let count = 1
    for(let i = numero; i > 0; i--){
        count = count * i
    }
    return count
}

console.log(fatorial(5))