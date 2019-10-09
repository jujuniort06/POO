import { Animal } from "./animal";
import { Mensagem } from "./mensagem";

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
        
}