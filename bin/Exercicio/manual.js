"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manual {
    constructor() {
    }
    tipoCambio() {
        console.log("O cambio deste Carro é Manual!");
    }
    quantidadeMarchas() {
        console.log("Este cambio tem 5 Marchas");
    }
    consumoCombustivel() {
        console.log("Consumo de combustível baixo, pois é possível controlar a rotação do motor.");
    }
}
exports.Manual = Manual;
