import { Rodado } from "./rodado";

export class ContadorQuilometragem implements Rodado {
  constructor() {
    
  }

  quilometragem(){
    console.log("100.000 Km rodados");
  }

  quilometragemZerou(){
    console.log("A quilometragem ja zerou, pois ja passou do limite de " + this.quilometragemMaximaPainel());
  }

  quilometragemMaximaPainel() : string{
    return "999.999 KM";
  }
}