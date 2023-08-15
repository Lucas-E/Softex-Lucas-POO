function fibonacci(term:number):number{
    let aux:number = 0;
    let val:number = 1;
    let temp:number = 0
    for(let i = 0; i < term; i++){
        temp = val
        val = val + aux
        aux = temp
    }
    return val
}

console.log(fibonacci(1))