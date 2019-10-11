"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Areas {
    constructor(AMetragem) {
        this.listaImoveis = [];
        this.metragem = AMetragem;
    }
    adicionarImovel(AImovel) {
        let somaMetragem = 0;
        console.log("----------------------------------------------------------------------");
        this.listaImoveis.forEach(element => {
            somaMetragem = somaMetragem + element.metragemImovel();
        });
        let result;
        result = this.metragem - somaMetragem;
        if (result < AImovel.metragemImovel()) {
            console.log("Não é possível adicionar o imóvel " + AImovel.constructor.name + " , a area ja atingiu o limite");
            return;
        }
        this.listaImoveis.push(AImovel);
        result = result - AImovel.metragemImovel();
        console.log("O imóvel " + AImovel.constructor.name + " foi adicionado na area " + this.constructor.name);
        console.log("Há um espaço de " + result + " terreno para ocupar ainda!");
    }
    listarImoveis() {
        this.listaImoveis.forEach(element => {
            element.metragemImovel();
        });
    }
    setMetragemArea(AMetragem) {
        this.metragem = AMetragem;
    }
    getMetragemArea() {
        return this.metragem;
    }
}
exports.Areas = Areas;
