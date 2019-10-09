import { Jaula } from "./jaula";
import { Animal } from "./animal";
import { Mamifero } from "./mamiferos/mamifero";
import { Repteis } from "./repteis/repteis";
import { Mensagem } from "./mensagem";
import { Jacare } from "./repteis/jacare";
import { Aves } from "./aves/aves";
import { Papagaio } from "./aves/papagaio";
import { Cachorro } from "./mamiferos/cachorro";

export class Zoologico{
    jaulas : Array<Jaula> = [];
    animais : Array<Animal> = [];

    constructor(){
        
    }
    
    public addAnimals(animal : Animal) : void{
        this.animais.push(animal);

        let ImprimirAdicionandoAnimais : Mensagem<string> = new Mensagem<string>("Adicionando o animal " + animal.constructor.name);
        ImprimirAdicionandoAnimais.ImprimirMensagemComLinha();

        this.colocarAnimalEmJaula(animal);
    }

    public colocarAnimalEmJaula(animal : Animal){
        for (let i = 0; i < this.jaulas.length; i++) {
            const element = this.jaulas[i];

            if (element.getTipoJaula() instanceof Jacare){
                if (animal instanceof Jacare){
                    if (element.getQuantidade() == element.getListaAnimals().length){
                        let ImprimirQuantidadeNaoDisponivel : Mensagem<string> = new Mensagem<string>("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();

                        return;
                    }

                    element.setListaAnimals(animal);

                    let ImprimirAdicionandoAnimaisSucesso : Mensagem<string> = new Mensagem<string>("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }                
            }

            if (element.getTipoJaula() instanceof Papagaio){
                if (animal instanceof Papagaio){
                    if (element.getQuantidade() == element.getListaAnimals().length){
                        let ImprimirQuantidadeNaoDisponivel : Mensagem<string> = new Mensagem<string>("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();

                        return;
                    }

                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso : Mensagem<string> = new Mensagem<string>("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }
            }

            if (element.getTipoJaula() instanceof Cachorro){
                if (animal instanceof Cachorro){
                    if (element.getQuantidade() == element.getListaAnimals().length){
                        let ImprimirQuantidadeNaoDisponivel : Mensagem<string> = new Mensagem<string>("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();

                        return;
                    }

                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso : Mensagem<string> = new Mensagem<string>("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }                
            }

            if (element.getTipoJaula() instanceof Mamifero){
                if (animal instanceof Mamifero){
                    if (element.getQuantidade() == element.getListaAnimals().length){
                        let ImprimirQuantidadeNaoDisponivel : Mensagem<string> = new Mensagem<string>("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();

                        return;
                    }

                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso : Mensagem<string> = new Mensagem<string>("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }                
            }

            if (element.getTipoJaula() instanceof Repteis){
                if (animal instanceof Repteis){
                    if (element.getQuantidade() == element.getListaAnimals().length){
                        let ImprimirQuantidadeNaoDisponivel : Mensagem<string> = new Mensagem<string>("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();

                        return;
                    }

                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso : Mensagem<string> = new Mensagem<string>("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }                
            }

            if (element.getTipoJaula() instanceof Aves){
                if (animal instanceof Aves){
                    if (element.getQuantidade() == element.getListaAnimals().length){
                        let ImprimirQuantidadeNaoDisponivel : Mensagem<string> = new Mensagem<string>("A Jaula de " + element.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + element.getQuantidade() + " quantidades. \nOperação cancelada!!");
                        ImprimirQuantidadeNaoDisponivel.ImprimirMensagemComLinha();

                        return;
                    }

                    element.setListaAnimals(animal);
                    let ImprimirAdicionandoAnimaisSucesso : Mensagem<string> = new Mensagem<string>("Adicionado com sucesso!");
                    ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
                    return;
                }                
            }
        }
    }

    public addJaulas(jaula : Jaula) : void{
        this.jaulas.push(jaula);
    }

    public listJaulas(){
        let ImprimirCabecalho : Mensagem<string> = new Mensagem<string>("Listando as Jaulas deste Zoológico: \n");
        ImprimirCabecalho.ImprimirMensagemComLinha();

        this.jaulas.forEach((element : Jaula) => {
            let ImprimirListaJaulas : Mensagem<string> = new Mensagem<string>(element.getTipoJaula().constructor.name + " e ela aceita " + element.getQuantidade() + " animais " + element.getTipoJaula().constructor.name);
            ImprimirListaJaulas.ImprimirMensagemComLinha();

            if (element.getTipoJaula() instanceof Mamifero){
                element.getTipoJaula().fazerBarulho();
            }
        });
    }

    public listAnimaisDasJaulas(){
        this.jaulas.forEach((element : Jaula) => {
            let ImprimirListaAnimaisEmJaulas : any;

            if (element.getListaAnimals().length > 0){
                ImprimirListaAnimaisEmJaulas = new Mensagem<string>("A Jaula de " + element.getTipoJaula().constructor.name + " tem os seguintes animais: \n");
                
                ImprimirListaAnimaisEmJaulas.ImprimirMensagemComLinha();
                element.ImprimirListaAnimals();
            } else {
                ImprimirListaAnimaisEmJaulas = new Mensagem<string>("A Jaula de " + element.getTipoJaula().constructor.name + " não contém animais!"); 
                ImprimirListaAnimaisEmJaulas.ImprimirMensagemComLinha();   
            }
        });
    }
}