import { Imovel } from "./IBOImovel";
import { Residencial } from "./residencial";

export class EdificioResidencial implements Imovel{

  constructor() {
    
  }

  public metragemImovel() : number{
    let metragem = 1400;

    return metragem;
  }

}