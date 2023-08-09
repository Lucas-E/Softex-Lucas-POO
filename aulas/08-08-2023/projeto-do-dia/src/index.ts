import { Carro } from "./classes/Carro";
import { Locadora } from "./classes/Locadora";
import { Moto } from "./classes/Moto";

const locadora1 = new Locadora()

const corsa = new Carro('corsa', 2010, 89000, true, 4);
const cg150 = new Moto('cg150', 2010, 10000, true, 150)

locadora1.setVeiculo(corsa)
locadora1.setVeiculo(cg150)

console.log(locadora1.getVeiculos())
console.log(locadora1.buscarVeiculos('corsa'))
console.log(locadora1.alugarVeiculo(corsa))