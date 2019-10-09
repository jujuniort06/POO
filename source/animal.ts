import { Zoologico } from "./zoologico";

export abstract class Animal{
    private nome : string;

    constructor(){
        this.nome = "";
    }

    public setNome(ANome : string){
        this.nome = ANome;
    }

    public getNome() : string {
        return this.nome;
    }

    public abstract fazerBarulho() : void;

}