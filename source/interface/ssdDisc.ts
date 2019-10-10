import { Drive } from "./drive";

export class SsdDisc implements Drive {
  constructor() {
    
  }

  public write() : void{
    console.log("Classe SsdDisc método write");
  }

  public read() : void{
    console.log("Classe SsdDisc método read");
  }

  public delete() : void{
    console.log("Classe SsdDisc método delete");
  }
}