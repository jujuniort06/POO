import { Areas } from "./areas";
import { Imovel } from "./IBOImovel";
import { Residencial } from "./residencial";
import { EdificioResidencial } from "./edificioResidencial";
import { Comercial } from "./comercial";
import { EdificioComercial } from "./edificioComercial";
import { Industrial } from "./industrial";
import { Industria } from "./industria";

export class Cidade {
  private listaAreas : Array<Areas> = [];

  constructor() {
    
  }

  adicionarArea(AArea : Areas){
    this.listaAreas.push(AArea);
  }

  listarAreas(){
    this.listaAreas.forEach(element => {
      element.listarImoveis();
    });
  }

  adicionarImovel(AImovel : Imovel){
    this.listaAreas.forEach(element => {
      if (element instanceof Residencial && AImovel instanceof EdificioResidencial){
        element.adicionarImovel(AImovel);
      }

      if (element instanceof Comercial && AImovel instanceof EdificioComercial){
        element.adicionarImovel(AImovel);
      }

      if (element instanceof Industrial && AImovel instanceof Industrial){
        element.adicionarImovel(AImovel);
      }
    });
  }
}