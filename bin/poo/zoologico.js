"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mamifero_1 = require("./mamiferos/mamifero");
const mensagem_1 = require("./mensagem");
class Zoologico {
    constructor() {
        this.jaulas = [];
        this.animais = [];
    }
    addAnimals(animal) {
        this.animais.push(animal);
        let ImprimirAdicionandoAnimais = new mensagem_1.Mensagem("Adicionando o animal " + animal.constructor.name + " (" + animal.getNome() + ")");
        ImprimirAdicionandoAnimais.ImprimirMensagemComLinha();
        for (let i = 0; i < this.jaulas.length; i++) {
            const element = this.jaulas[i];
            if (element.colocarAnimalNaJaula(animal)) {
                element.setListaAnimals(animal);
                break;
            }
        }
    }
    addJaulas(jaula) {
        this.jaulas.push(jaula);
    }
    listJaulas() {
        let ImprimirCabecalho = new mensagem_1.Mensagem("Listando as Jaulas deste Zoológico: \n");
        ImprimirCabecalho.ImprimirMensagemComLinha();
        this.jaulas.forEach((element) => {
            let ImprimirListaJaulas = new mensagem_1.Mensagem(element.getTipoJaula().constructor.name + " e ela aceita " + element.getQuantidade() + " animais " + element.getTipoJaula().constructor.name);
            ImprimirListaJaulas.ImprimirMensagemComLinha();
            if (element.getTipoJaula() instanceof mamifero_1.Mamifero) {
                element.getTipoJaula().fazerBarulho();
            }
        });
    }
    listAnimaisDasJaulas() {
        this.jaulas.forEach((element) => {
            let ImprimirListaAnimaisEmJaulas;
            if (element.getListaAnimals().length > 0) {
                ImprimirListaAnimaisEmJaulas = new mensagem_1.Mensagem("A Jaula de " + element.getTipoJaula().constructor.name + " tem os seguintes animais: \n");
                ImprimirListaAnimaisEmJaulas.ImprimirMensagemComLinha();
                element.ImprimirListaAnimals();
            }
            else {
                ImprimirListaAnimaisEmJaulas = new mensagem_1.Mensagem("A Jaula de " + element.getTipoJaula().constructor.name + " não contém animais!");
                ImprimirListaAnimaisEmJaulas.ImprimirMensagemComLinha();
            }
        });
    }
    agoravai(ARetorno) {
        return ARetorno;
    }
}
exports.Zoologico = Zoologico;
