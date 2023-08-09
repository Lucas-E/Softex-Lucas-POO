import Veiculo from "./Veiculo";

export class Moto extends Veiculo{
    private cilindrada:number;

    constructor(modelo:string, ano:number, preco:number, disponivel:boolean, cilindrada:number){
        super(modelo, ano, preco, disponivel);
        this.cilindrada = cilindrada
    }
}