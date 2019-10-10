import { Zoologico } from "./zoologico";
import { Cachorro } from "./mamiferos/cachorro";
import { Jacare } from "./repteis/jacare";
import { Jaula } from "./jaula";
import { Mamifero } from "./mamiferos/mamifero";
import { Repteis } from "./repteis/repteis";
import { Aves } from "./aves/aves";
import { Papagaio } from "./aves/papagaio";

    // **** ----  Criação do Zoologico  ---- ****//
    let zoologico = new Zoologico();

    // **** ----  Criação dos tipos de animais que vão ter no meu zoologico ---- ****//
    let mamifero = new Mamifero();
    let repteis  = new Repteis();
    let aves     = new Aves();
    let cachorro = new Cachorro();
    let jacare   = new Jacare();

    // **** ----  Criando as Jaulas e definindo os tipos de animais de cada uma  ---- ****//
    let jaulaDeMamiferos = new Jaula(5, mamifero);
    let jaulaDeRepteis   = new Jaula(3, repteis);
    let jaulaDeAves      = new Jaula(5, aves);
    let jaulaDeCachorro  = new Jaula(2, cachorro);
    let jaulaDeJacare    = new Jaula(2, jacare);
    let jaulaDeJacare02    = new Jaula(3, jacare);

    // **** ----  Criação dos animais de tipo Mamifero  ---- ****//
    let cachorro01  = new Cachorro();
    cachorro01.setNome('Cachorro 01');

    let cachorro02  = new Cachorro();
    cachorro02.setNome('Cachorro 02');

    let cachorro03  = new Cachorro();
    cachorro03.setNome('Cachorro 03');    

    // **** ----  Criação dos animais de tipo Repteis  ---- ****//
    let jacare01 = new Jacare();
    jacare01.setNome('Jacaré 01');

    let jacare02 = new Jacare();
    jacare02.setNome('Jacaré 02');

    let jacare03 = new Jacare();
    jacare03.setNome('Jacaré 03');

    let jacare04 = new Jacare();
    jacare04.setNome('Jacaré 04');

    let jacare05 = new Jacare();
    jacare05.setNome('Jacaré 05');

    // **** ----  Criação dos animais de tipo Aves  ---- ****//
    let ave01 = new Papagaio();
    ave01.setNome('Ave 01');

    let ave02 = new Papagaio();
    ave02.setNome('Ave 02');
    
    let ave03 = new Papagaio();
    ave03.setNome('Ave 03');   

    let mamifero01 = new Mamifero();
    mamifero01.setNome('Mamifero 01');

    // **** ----  Adicionando Jaulas ao meu zoologico  ---- ****//
    zoologico.addJaulas(jaulaDeRepteis);
    zoologico.addJaulas(jaulaDeMamiferos);
    zoologico.addJaulas(jaulaDeAves);
    zoologico.addJaulas(jaulaDeCachorro);
    zoologico.addJaulas(jaulaDeJacare);
    zoologico.addJaulas(jaulaDeJacare02);

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
