import { Motor } from "./motor";
import { Rodado } from "./rodado";

export class Cht implements Motor {
  constructor() {
    
  }

  tipoMotor() : void{
    console.log("Motor CHT 1.6");
  }

  potenciaMotor() : void{
    console.log("1.6 - 96 cv");
  }

  pesoMotor(){
    console.log("172 Kg");
  }

}