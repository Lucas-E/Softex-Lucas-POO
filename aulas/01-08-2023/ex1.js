class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this._idade = idade
    }

    apresentar(){
        return `${this.nome} tem ${this.idade} anos`
    }
    getIdade(){
        return this._idade
    }
    setIdade(idade){
        this._idade = idade
    }
}

class Aluno extends Pessoa{
    constructor(matricula, nome, idade){
        super(nome, idade)
        this.matricula = matricula
    }
}

const aluno1 = new Aluno('001', 'Lucas', 23)
console.log(aluno1.apresentar())
