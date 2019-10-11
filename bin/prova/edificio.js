"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Edificio {
    constructor(ATipoEdificio) {
        this.tipoEdificio = ATipoEdificio;
    }
    metragemImovel() {
        let metragem = "480 m²";
        return metragem;
    }
    getTipoEdificio() {
        return this.tipoEdificio.toString();
    }
}
exports.Edificio = Edificio;
