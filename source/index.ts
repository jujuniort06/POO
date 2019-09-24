import { Cachorro } from "./cachorro";
import { Gato } from "./gato";
import { Mamifero } from "./mamifero";

let listaMamiferos : Array<Mamifero> = [];

let cachorro = new Cachorro();
cachorro.setNome("Maggie");
listaMamiferos.push(cachorro);

cachorro = new Cachorro();
cachorro.setNome("Thor");
listaMamiferos.push(cachorro);

cachorro = new Cachorro();
cachorro.setNome("Rex");
listaMamiferos.push(cachorro);

let gato = new Gato();
gato.setNome("Gatinho Julio");
listaMamiferos.push(gato);


listaMamiferos.forEach(element => {    
    element.fazerBarulho();
});