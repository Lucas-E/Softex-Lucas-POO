export class Calculadora {
    private numeros: Array<number> = [];

    public setNumero(numero: number): void {
        this.numeros.push(numero)
    }
    public soma() {
        const [primeiro, segundo]: Array<number> = this.numeros;
        return primeiro + segundo;
    }
    public subtracao() {
        const [primeiro, segundo]: Array<number> = this.numeros;
        return primeiro - segundo
    }
    public multiplicacao() {
        const [primeiro, segundo]: Array<number> = this.numeros;
        return primeiro * segundo
    }
    public divisao() {
        const [primeiro, segundo]: Array<number> = this.numeros;
        return primeiro / segundo
    }
}