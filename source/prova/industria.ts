import { Imovel } from "./IBOImovel";

export class Industria implements Imovel {
  constructor() {
    
  }

  public metragemImovel(){
    let metragem = 1200;

    return metragem;
  }
}