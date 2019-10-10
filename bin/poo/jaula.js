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
    colocarAnimalNaJaula(AAnimal) {
        if (this.getTipoJaula().constructor.name == AAnimal.constructor.name) {
            if (this.getQuantidade() == this.getListaAnimals().length) {
                let ImprimirQuantidadeNaoDisponivel = new mensagem_1.Mensagem("A Jaula de " + this.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + this.getQuantidade() + " quantidades. \nOperação cancelada!!");
                ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();
                return false;
            }
            let ImprimirAdicionandoAnimaisSucesso = new mensagem_1.Mensagem("Adicionado com sucesso!");
            ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Jaula = Jaula;
