import { Direcao } from "./direcao";

export class Hidraulica implements Direcao {
  constructor() {
    
  }

  public tipoDirecao() : void{
    console.log("A direção deste Carro é Hidraulica!");
  }

  public usaOleo(){
    console.log("Esta direção USA óleo para movimentar o eixo.");
  }

  public precoManutencao(){
    console.log("Para realizar a manutenção da direção hidraulica é : R$ 550,00");
  }
}