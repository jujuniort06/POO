import { Imovel } from "./IBOImovel";

export abstract class Areas {
  listaImoveis : Array<Imovel> = [];
  metragem : number;

  constructor(AMetragem : number) {
    this.metragem = AMetragem;
  }

  public abstract finalidadeArea() : void;

  public adicionarImovel(AImovel : Imovel){
    let somaMetragem : number = 0;

    console.log("----------------------------------------------------------------------");

    this.listaImoveis.forEach(element => {
      somaMetragem = somaMetragem + element.metragemImovel();
    });   

    let result : any;
    result = this.metragem - somaMetragem;  

    if (result < AImovel.metragemImovel()){
      console.log("Não é possível adicionar o imóvel " + AImovel.constructor.name + " , a area ja atingiu o limite");

      return;
    }
    this.listaImoveis.push(AImovel);

    result = result - AImovel.metragemImovel();
    
    console.log("O imóvel " + AImovel.constructor.name + " foi adicionado na area " + this.constructor.name);
    console.log("Há um espaço de " + result + " terreno para ocupar ainda!");
  }

  public listarImoveis() : void{
    this.listaImoveis.forEach(element => {
      element.metragemImovel();
    });
  }

  public setMetragemArea(AMetragem : number) : void{
    this.metragem = AMetragem;
  }

  public getMetragemArea() : number{
    return this.metragem;
  }

}