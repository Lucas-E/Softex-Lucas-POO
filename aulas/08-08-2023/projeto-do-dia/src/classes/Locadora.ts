import Veiculo from "./Veiculo";
import { Moto } from "./Moto";
import { Carro } from "./Carro";

export class Locadora{
    private veiculos: Array<Veiculo> = [];

    setVeiculo(veiculo:Veiculo){
        this.veiculos.push(veiculo)
    }
    getVeiculos():Array<Veiculo>{
        return this.veiculos
    }

    buscarVeiculos(termo:string):Array<Veiculo>{
        const veiculos:Array<Veiculo> = this.veiculos.map((veiculoAtual:Veiculo):Veiculo => {
            if(veiculoAtual.getModelo() === termo){
                return veiculoAtual
            }
        })
        return veiculos
    }

    alugarVeiculo(veiculo:Veiculo){
        if(veiculo.getDisponivel()){
            veiculo.setDisponivel(false)
        }else{
            throw new Error('Veiculo indisponível')
        }
    }
}