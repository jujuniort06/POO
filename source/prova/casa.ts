import { Imovel } from "./IBOImovel";
import { Residencial } from "./residencial";

export class Casa implements Imovel {
  constructor() {

  }

  public metragemImovel() : number{
    let metragem = 50

    return metragem;
  }
}