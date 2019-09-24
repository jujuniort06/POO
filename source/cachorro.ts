import { Mamifero } from "./mamifero";

export class Cachorro extends Mamifero{

    private nome : string;

    constructor(){
        super();
        this.nome = "";
    }

    public fazerBarulho() : void{
        console.log("Latindo...");
    }

    public andar() : void{
        super.andar();
        this.setTamanho("Grande");
        console.log("Cachorro andando");
    }

    public setNome(nome : string){
        this.nome = nome;
    }

    public getNome() : string{
        return this.nome;
    }
}