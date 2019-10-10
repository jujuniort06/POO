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

        let ImprimirAdicionandoAnimais : Mensagem<string> = new Mensagem<string>("Adicionando o animal " + animal.constructor.name + " (" + animal.getNome() + ")");
        ImprimirAdicionandoAnimais.ImprimirMensagemComLinha();

        for (let i = 0; i < this.jaulas.length; i++) {
            const element = this.jaulas[i];
            
            if (element.colocarAnimalNaJaula(animal)){
                element.setListaAnimals(animal);
                break;
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

    public agoravai(ARetorno : string) : string {

        return ARetorno;
    }
}