"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mensagem {
    constructor(mensagem) {
        this.mensagem = mensagem;
    }
    ImprimirMensagem() {
        console.log(this.mensagem);
    }
    ImprimirMensagemComLinha() {
        console.log("----------------------------------------");
        this.ImprimirMensagem();
    }
}
exports.Mensagem = Mensagem;
