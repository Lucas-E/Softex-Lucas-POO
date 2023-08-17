function removeDuplicados<tipo>(lista:Array<tipo>):Array<tipo>{
    let novoArray:Array<tipo> = []
    for(let elemento of lista){
        if(!novoArray.includes(elemento)){
            novoArray.push(elemento)
        }
    }
    return novoArray
}

console.log(removeDuplicados([1,1,2,3,3,3,4,5,6,6,7,8]))