import { Cambio } from "./cambio";

export class Manual implements Cambio {
  constructor() {
    
  }

  public tipoCambio() : void{
    console.log("O cambio deste Carro é Manual!");
  }

  public quantidadeMarchas(){
    console.log("Este cambio tem 5 Marchas");
  }

  public consumoCombustivel(){
    console.log("Consumo de combustível baixo, pois é possível controlar a rotação do motor.");
  }
}