"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mensagem_1 = require("./mensagem");
class Jaula {
    constructor(AQuantidade, ATipoJaula) {
        this.listaAnimals = [];
        this.quantidade = AQuantidade;
        this.tipoJaula = ATipoJaula;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getTipoJaula() {
        return this.tipoJaula;
    }
    setListaAnimals(animal) {
        this.listaAnimals.push(animal);
    }
    getListaAnimals() {
        return this.listaAnimals;
    }
    ImprimirListaAnimals() {
        this.listaAnimals.forEach(element => {
            let ImprimirAnimalNome = new mensagem_1.Mensagem(element.getNome());
            ImprimirAnimalNome.ImprimirMensagem();
        });
    }
}
exports.Jaula = Jaula;
