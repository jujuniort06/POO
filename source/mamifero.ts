import { Animal } from "./animal";

export abstract class Mamifero extends Animal{
    private tamanho : string;
    private peso    : number;

    constructor(){
        super();
        this.tamanho = "";
        this.peso    = 0;
    }

    public andar() : void{
        console.log("Mamifero andando");
    }

    public abstract fazerBarulho() : void;

    public setTamanho(tamanho : string) : void{
        this.tamanho = tamanho;
    }

    public getTamanho() : string{
        return this.tamanho;
    }

    public setPeso(peso : number) : void{
        if (peso > 0){
            this.peso = peso;
        }        
    }
    
    public getPeso() : number{
        return this.peso;
    }
}