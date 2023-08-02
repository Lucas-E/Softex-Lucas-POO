class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        `${this.nome} tem ${this.idade} anos`
    }
}

class Aluno extends Pessoa{
    constructor(matricula, nome, idade){
        super(nome, idade)
        this.matricula = matricula
    }
}

const aluno1 = new Aluno('001', 'Lucas', 23)

