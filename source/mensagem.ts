import { Jaula } from "./jaula";

export class Mensagem<T> {
  mensagem : T;

  constructor(mensagem : T) {
    this.mensagem = mensagem;
  }

  public ImprimirMensagem() : void {
    console.log(this.mensagem);
  }

  public ImprimirMensagemComLinha() : void {
    console.log("----------------------------------------");
    this.ImprimirMensagem();
  }
}