class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(`${this.nome} tem ${this.idade} anos`)
    }
}