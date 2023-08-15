
import PromptSync from "prompt-sync";

class Calculadora{
    private numeros:Array<number> = [];
    public setNumero(novoNumero:number){
        this.numeros.push(novoNumero)
    }
    public soma(){
        return this.numeros[0]+this.numeros[1]
    }
    public subtracao(){
        return this.numeros[0]-this.numeros[1]
    }
    public multiplicacao(){
        return this.numeros[0]*this.numeros[1]
    }
    public divisao(){
        return this.numeros[0]/this.numeros[1]
    }
}


const prompt = PromptSync()

let numero1: string = prompt('Digite o numero: ')
let convNumber1 = Number(numero1)
if (isNaN(convNumber1)) {
    while (isNaN(convNumber1)) {
        numero1 = prompt('Tem que digitar um número: ')
        convNumber1 = Number(numero1)
    }
}

let numero2: string = prompt('Digite outro numero: ')
let convNumber2 = Number(numero2)
if (isNaN(convNumber2)) {
    while (isNaN(convNumber2)) {
        numero2 = prompt('Tem que digitar um número: ')
        convNumber2 = Number(numero2)
    }
}

const calculadora = new Calculadora();
calculadora.setNumero(convNumber1)
calculadora.setNumero(convNumber2)

console.log(calculadora.soma())
console.log(calculadora.subtracao())
console.log(calculadora.multiplicacao())
console.log(calculadora.divisao())