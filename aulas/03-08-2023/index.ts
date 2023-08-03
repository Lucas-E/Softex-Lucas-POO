class Pessoa{
  private idade:number;
  public nome:string;

  constructor(idade:number, nome:string){
    this.idade = idade;
    this.nome = nome;
  }

  apresentar():string{
    return `${this.nome} tem ${this.idade} anos`
  }

  getIdade():number{
    return this.idade
  }
  setIdate(idade:number):void{
    this.idade = idade
  }
}


class Aluno extends Pessoa{
  public matricula:string;
  constructor(matricula:string, idade:number, nome:string){
    super(idade, nome);
    this.matricula = matricula;
  }
}

const aluno1:Aluno = new Aluno('001', 23, 'lucas')

console.log(aluno1.apresentar())
console.log(aluno1.idade)