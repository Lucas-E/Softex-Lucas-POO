import Veiculo from "./Veiculo";

export class Carro extends Veiculo{
    private portas: number;

    constructor(modelo:string, ano: number, preco:number, disponivel:boolean, portas:number){
        super(modelo, ano, preco, disponivel)
        this.portas = portas
    }

    getPortas():number{
        return this.portas
    }
    setPortas(portas:number):void{
        this.portas = portas
    }
}