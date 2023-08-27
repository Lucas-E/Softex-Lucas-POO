let nomes = ['Lucas', 'Ana', 'Maria', 'Alcides']

let tempor:string = ''

for(let i = 0; i < nomes.length; i++){
    for(let j =0; j < nomes.length; j++){
        if(nomes[i] < nomes[j]){
            tempor = nomes[i]
            nomes[i] = nomes[j]
            nomes[j] = tempor
        }
    }
}

console.log(nomes)