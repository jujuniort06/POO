import { Mamifero } from "./mamifero";

export class Gato extends Mamifero{
    
    private nome : string;

    constructor(){
        super();
        this.nome = "";
    }
    public fazerBarulho() : void{
        console.log("Miando...");
    }

    public andar() : void{
        super.andar();
        console.log("Julio andando");
    }

    public setNome(nome : string){
        this.nome = nome;
    }

    public getNome() : string{
        return this.nome;
    }
}