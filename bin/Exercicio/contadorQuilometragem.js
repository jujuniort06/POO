"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContadorQuilometragem {
    constructor() {
    }
    quilometragem() {
        console.log("100.000 Km rodados");
    }
    quilometragemZerou() {
        console.log("A quilometragem ja zerou, pois ja passou do limite de " + this.quilometragemMaximaPainel());
    }
    quilometragemMaximaPainel() {
        return "999.999 KM";
    }
}
exports.ContadorQuilometragem = ContadorQuilometragem;
