class Veiculo{
    private modelo:string;
    private ano:number;
    private preco:number;
    private disponivel:boolean;

    constructor(modelo:string, ano: number, preco:number, disponivel:boolean){
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
        this.disponivel = disponivel;
    }

    setModelo(modelo:string):void{
        this.modelo = modelo
    }
    setAno(ano:number):void{
        this.ano = ano
    }
    setPreco(preco:number):void{
        this.preco = preco
    }
    setDisponivel(disponivel:boolean):void{
        this.disponivel = disponivel
    }
    getModelo():string{
        return this.modelo
    }
    getAno():number{
        return this.ano
    }
    getPreco():number{
        return this.preco
    }
    getDisponivel():boolean{
        return this.disponivel
    }
}

export default Veiculo