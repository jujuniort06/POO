import { Cambio } from "./cambio";

export class Automatica implements Cambio {
  constructor() {
    
  }

  public tipoCambio() : void{
    console.log("O cambio deste Carro é Automatica!");
  }

  public quantidadeMarchas(){
    console.log("Este cambio tem 6 Marchas");
  }

  public consumoCombustivel(){
    console.log("Consumo de combustível elevado, pois o controle automático da marcha faz a rotação do motor aumentar, consequentemente gastando mais.");
  }
}