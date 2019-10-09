import { Animal } from "./animal";
import { Mensagem } from "./mensagem";
import { Jacare } from "./repteis/jacare";

export class Jaula{

    private quantidade : number;
    private tipoJaula : Animal;
    private listaAnimals : Array<Animal> = [];
    
    constructor(AQuantidade : number, ATipoJaula : Animal){
        this.quantidade = AQuantidade;
        this.tipoJaula  = ATipoJaula;
    }

    public getQuantidade() : number{
        return this.quantidade;
    }

    public getTipoJaula() : Animal{
        return this.tipoJaula;
    }

    public setListaAnimals(animal : Animal){
        this.listaAnimals.push(animal);
    }

    public getListaAnimals() : Array<Animal>{      
        return this.listaAnimals;
    }

    public ImprimirListaAnimals(){
        this.listaAnimals.forEach(element => {
            let ImprimirAnimalNome : Mensagem<string> = new Mensagem<string>(element.getNome());
            
            ImprimirAnimalNome.ImprimirMensagem();
        });
    }

    public colocarAnimalNaJaula(AAnimal : Animal) : boolean{
        if (this.getTipoJaula().constructor.name == AAnimal.constructor.name){
            if (this.getQuantidade() == this.getListaAnimals().length){
                let ImprimirQuantidadeNaoDisponivel : Mensagem<string> = new Mensagem<string>("A Jaula de " + this.getTipoJaula().constructor.name + " esta cheia, ela suporte somente " + this.getQuantidade() + " quantidades. \nOperação cancelada!!");
                ImprimirQuantidadeNaoDisponivel.ImprimirMensagem();

                return false;
            }

            let ImprimirAdicionandoAnimaisSucesso : Mensagem<string> = new Mensagem<string>("Adicionado com sucesso!");
            ImprimirAdicionandoAnimaisSucesso.ImprimirMensagem();
            
            return true;
        } else {
            return false;
        }
    }
        
}