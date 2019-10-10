import { Animal } from "../animal";

export class Repteis extends Animal{

    constructor(){
        super();
    }

    public fazerBarulho() : void{
        console.log('Tipo Repteis fazendo barulho');
    }

}