"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residencial_1 = require("./residencial");
const edificioResidencial_1 = require("./edificioResidencial");
const comercial_1 = require("./comercial");
const edificioComercial_1 = require("./edificioComercial");
const industrial_1 = require("./industrial");
const industria_1 = require("./industria");
class Cidade {
    constructor() {
        this.listaAreas = [];
    }
    adicionarArea(AArea) {
        this.listaAreas.push(AArea);
    }
    listarAreas() {
        this.listaAreas.forEach(element => {
            element.listarImoveis();
        });
    }
    adicionarImovel(AImovel) {
        this.listaAreas.forEach(element => {
            if (element instanceof residencial_1.Residencial && AImovel instanceof edificioResidencial_1.EdificioResidencial) {
                element.adicionarImovel(AImovel);
            }
            if (element instanceof comercial_1.Comercial && AImovel instanceof edificioComercial_1.EdificioComercial) {
                element.adicionarImovel(AImovel);
            }
            if (element instanceof industrial_1.Industrial && AImovel instanceof industria_1.Industria) {
                element.adicionarImovel(AImovel);
            }
        });
    }
}
exports.Cidade = Cidade;
