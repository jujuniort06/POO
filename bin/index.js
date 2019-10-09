"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zoologico_1 = require("./zoologico");
const cachorro_1 = require("./mamiferos/cachorro");
const jacare_1 = require("./repteis/jacare");
const jaula_1 = require("./jaula");
const mamifero_1 = require("./mamiferos/mamifero");
const repteis_1 = require("./repteis/repteis");
const aves_1 = require("./aves/aves");
const papagaio_1 = require("./aves/papagaio");
// **** ----  Criação do Zoologico  ---- ****//
let zoologico = new zoologico_1.Zoologico();
// **** ----  Criação dos tipos de animais que vão ter no meu zoologico ---- ****//
let mamifero = new mamifero_1.Mamifero();
let repteis = new repteis_1.Repteis();
let aves = new aves_1.Aves();
let cachorro = new cachorro_1.Cachorro();
let jacare = new jacare_1.Jacare();
// **** ----  Criando as Jaulas e definindo os tipos de animais de cada uma  ---- ****//
let jaulaDeMamiferos = new jaula_1.Jaula(5, mamifero);
let jaulaDeRepteis = new jaula_1.Jaula(3, repteis);
let jaulaDeAves = new jaula_1.Jaula(5, aves);
let jaulaDeCachorro = new jaula_1.Jaula(2, cachorro);
let jaulaDeJacare = new jaula_1.Jaula(2, jacare);
// **** ----  Criação dos animais de tipo Mamifero  ---- ****//
let cachorro01 = new cachorro_1.Cachorro();
cachorro01.setNome('Cachorro 01');
let cachorro02 = new cachorro_1.Cachorro();
cachorro02.setNome('Cachorro 02');
let cachorro03 = new cachorro_1.Cachorro();
cachorro03.setNome('Cachorro 03');
// **** ----  Criação dos animais de tipo Repteis  ---- ****//
let jacare01 = new jacare_1.Jacare();
jacare01.setNome('Jacaré 01');
let jacare02 = new jacare_1.Jacare();
jacare02.setNome('Jacaré 02');
let jacare03 = new jacare_1.Jacare();
jacare03.setNome('Jacaré 03');
let jacare04 = new jacare_1.Jacare();
jacare04.setNome('Jacaré 04');
let jacare05 = new jacare_1.Jacare();
jacare05.setNome('Jacaré 05');
// **** ----  Criação dos animais de tipo Aves  ---- ****//
let ave01 = new papagaio_1.Papagaio();
ave01.setNome('Ave 01');
let ave02 = new papagaio_1.Papagaio();
ave02.setNome('Ave 02');
let ave03 = new papagaio_1.Papagaio();
ave03.setNome('Ave 03');
let mamifero01 = new mamifero_1.Mamifero();
mamifero01.setNome('Mamifero 01');
// **** ----  Adicionando Jaulas ao meu zoologico  ---- ****//
zoologico.addJaulas(jaulaDeRepteis);
zoologico.addJaulas(jaulaDeMamiferos);
zoologico.addJaulas(jaulaDeAves);
zoologico.addJaulas(jaulaDeCachorro);
zoologico.addJaulas(jaulaDeJacare);
zoologico.listJaulas();
zoologico.addAnimals(jacare01);
zoologico.addAnimals(jacare02);
zoologico.addAnimals(jacare03);
zoologico.addAnimals(jacare04);
zoologico.addAnimals(jacare05);
zoologico.addAnimals(cachorro01);
zoologico.addAnimals(cachorro02);
zoologico.addAnimals(cachorro03);
zoologico.addAnimals(ave01);
zoologico.addAnimals(mamifero01);
zoologico.listAnimaisDasJaulas();
