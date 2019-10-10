import { Drive } from "./drive";

export class PendriveDisc implements Drive{
  constructor() {
    
  }
  public write() : void{
    console.log("Classe PendriveDisc método write");
  }

  public read() : void{
    console.log("Classe PendriveDisc método read");
  }

  public delete() : void{
    console.log("Classe PendriveDisc método delete");
  }
}