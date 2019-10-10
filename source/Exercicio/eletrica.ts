import { Direcao } from "./direcao";

export class Eletrica implements Direcao{
  constructor() {
    
  }

  public tipoDirecao() : void{
    console.log("A direção deste Carro é Elétrica!");
  }

  public usaOleo(){
    console.log("Esta direção NÃO USA óleo para movimentar o eixo.");
  }

  public precoManutencao(){
    console.log("Para realizar a manutenção da direção elétrica é : R$ 350,00");
  }
}