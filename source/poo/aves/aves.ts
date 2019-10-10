import { Animal } from "../animal";

export class Aves extends Animal{
    
    constructor(){
        super();
    }

    public fazerBarulho() : void{
        console.log('Tipo Aves de fazendo barulho');
    }
}