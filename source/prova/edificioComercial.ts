import { Imovel } from "./IBOImovel";

export class EdificioComercial implements Imovel{

  constructor() {

  }

  public metragemImovel() : number{
    let metragem = 1100;

    return metragem;
  }

}