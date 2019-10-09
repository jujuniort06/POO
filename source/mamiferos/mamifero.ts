import { Animal } from "../animal";

export class Mamifero extends Animal{

    constructor(){
        super();
    }

    public fazerBarulho() : void{
        console.log('Tipo Mamifero fazendo barulho');
    }
}