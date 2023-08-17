let freq = {
    elemento: '',
    count: 0
}

let equals:Array<number> = []

let arr = [1,2,3,4,4,4,5,6,7,2,1,1,8,9,7,6,5,10,2,22]

arr.map((elemento) => {
    let newArr = arr.filter((el2) => {
        return el2 === elemento
    })
    if(newArr.length > freq.count){
        freq.count = newArr.length
        freq.elemento = elemento.toString()
    }else if(newArr.length == freq.count){
        if(!equals.includes(elemento)){
            equals.push(elemento)
        }
    }
})

console.log(freq)
console.log('Numeros com frequencias iguais: ')
console.log(equals)
