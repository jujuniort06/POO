import { Drive } from "./drive";

export class HardDisc implements Drive {

  constructor() {

  }

  public write() : void{
    console.log("Classe HardDisc método write");
  }

  public read() : void{
    console.log("Classe HardDisc método read");
  }

  public delete() : void{
    console.log("Classe HardDisc método delete");
  }
}