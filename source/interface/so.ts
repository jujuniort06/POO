import { Drive } from "./drive";

export class So {
  private driver : Drive;

  constructor(driver : Drive) {
    this.driver = driver;  
  }

  public writeDisc() : void{
    this.driver.write();
  }

  public readDisc() : void{
    this.driver.read();
  }

  public deleteDisc() : void{
    this.driver.delete();
  }
}