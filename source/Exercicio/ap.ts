import { Motor } from "./motor";
import { Rodado } from "./rodado";

export class Ap implements Motor {
  constructor() {
    
  }

  tipoMotor() : void{
    console.log("Motor AP");
  }

  potenciaMotor() : void{
    console.log("2.0 - 116 cv");
  }
  
  pesoMotor(){
    console.log("200 Kg");
  }
}