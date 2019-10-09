"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mamifero_1 = require("./mamiferos/mamifero");
const repteis_1 = require("./repteis/repteis");
const mensagem_1 = require("./mensagem");
const jacare_1 = require("./repteis/jacare");
const aves_1 = require("./aves/aves");
const papagaio_1 = require("./aves/papagaio");
const cachorro_1 = require("./mamiferos/cachorro");
class Zoologico {
    constructor() {
        this.jaulas = [];
        this.animais = [];
    }
    addAnimals(animal) {
        this.animais.push(animal);
        let ImprimirAdicionandoAnimais = new mensagem_1.Mensagem("Adicionando o animal " + animal.constructor.name);
        ImprimirAdicionandoAnimais.ImprimirMensagemComLinha();
        this.colocarAnimalEmJaula(animal);
    }
    colocarAnimalEmJaula(animal) {
        for (let i = 0; i < this.jaulas.length; i++) {
            const element = this.jaulas[i];
            if (element.getTipoJaula() instanceof jacare_1.Jacare) {
                if (animal instanceof jacare_1.Jacare) {
                    if (element.getQuantidade() == element.getListaAnimals().length) {
                        let ImprimirQuantidadeNaoDisponivel = new mensagem_1.Mensagem("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();
                        return;
                    }
                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso = new mensagem_1.Mensagem("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }
            }
            if (element.getTipoJaula() instanceof papagaio_1.Papagaio) {
                if (animal instanceof papagaio_1.Papagaio) {
                    if (element.getQuantidade() == element.getListaAnimals().length) {
                        let ImprimirQuantidadeNaoDisponivel = new mensagem_1.Mensagem("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();
                        return;
                    }
                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso = new mensagem_1.Mensagem("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }
            }
            if (element.getTipoJaula() instanceof cachorro_1.Cachorro) {
                if (animal instanceof cachorro_1.Cachorro) {
                    if (element.getQuantidade() == element.getListaAnimals().length) {
                        let ImprimirQuantidadeNaoDisponivel = new mensagem_1.Mensagem("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();
                        return;
                    }
                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso = new mensagem_1.Mensagem("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }
            }
            if (element.getTipoJaula() instanceof mamifero_1.Mamifero) {
                if (animal instanceof mamifero_1.Mamifero) {
                    if (element.getQuantidade() == element.getListaAnimals().length) {
                        let ImprimirQuantidadeNaoDisponivel = new mensagem_1.Mensagem("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();
                        return;
                    }
                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso = new mensagem_1.Mensagem("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }
            }
            if (element.getTipoJaula() instanceof repteis_1.Repteis) {
                if (animal instanceof repteis_1.Repteis) {
                    if (element.getQuantidade() == element.getListaAnimals().length) {
                        let ImprimirQuantidadeNaoDisponivel = new mensagem_1.Mensagem("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();
                        return;
                    }
                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso = new mensagem_1.Mensagem("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }
            }
            if (element.getTipoJaula() instanceof aves_1.Aves) {
                if (animal instanceof aves_1.Aves) {
                    if (element.getQuantidade() == element.getListaAnimals().length) {
                        let ImprimirQuantidadeNaoDisponivel = new mensagem_1.Mensagem("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagemComLinha();
                        return;
                    }
                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso = new mensagem_1.Mensagem("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }
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
}
exports.Zoologico = Zoologico;
