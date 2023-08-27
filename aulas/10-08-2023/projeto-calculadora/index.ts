import promptSync from 'prompt-sync'
import { Calculadora } from './classes/Calculadora'
import { transformNumber } from './utils/transformNumber'

//|

const prompt = promptSync()

console.log('---------- BEM VINDO À CALCULADORA ----------')
console.log('Digite a operação que deseja realizar')
console.log('1 - soma')
console.log('2 - subtração')
console.log('3 - multiplicação')
console.log('4 - divisão')
let operacao: string = prompt(': ')
while (operacao !== '1' && operacao !== '2' && operacao !== '3' && operacao !== '4') {
    console.log('VOCÊ DEVE INFORMAR SOMENTE AS OPÇÕES')
    console.log('---------- BEM VINDO À CALCULADORA ----------')
    console.log('Digite a operação que deseja realizar')
    console.log('1 - soma')
    console.log('2 - subtração')
    console.log('3 - multiplicação')
    console.log('4 - divisão')
    operacao = prompt(': ')
}

let primeiro: string = prompt('Digite o primeiro numero: ')
let primeiroConv: number | boolean = transformNumber(primeiro)
while (!primeiroConv) {
    primeiro = prompt('Você deve digitar um número: ');
    primeiroConv = transformNumber(primeiro)
}

let segundo: string = prompt('Digite o segundo numero: ')
let segundoConv: number | boolean = transformNumber(segundo)
while (!segundoConv) {
    segundo = prompt('Você deve digitar um número: ');
    segundoConv = transformNumber(primeiro)
}

const calculadora: Calculadora = new Calculadora()
calculadora.setNumero(Number(primeiroConv))
calculadora.setNumero(Number(segundoConv))

switch (operacao) {
    case '1':
        console.log(calculadora.soma())
        break;
    case '2':
        console.log(calculadora.subtracao())
        break;
    case '3':
        console.log(calculadora.multiplicacao())
        break;
    case '4':
        console.log(calculadora.divisao())
        break;
    default:
        console.log('error')
        break;
}

