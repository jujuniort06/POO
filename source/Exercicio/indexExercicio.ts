import { Carro } from "./carro";
import { Hidraulica } from "./hidraulica";
import { Manual } from "./manual";
import { Ap } from "./ap";
import { Eletrica } from "./eletrica";
import { Automatica } from "./automatica";
import { ContadorQuilometragem } from "./contadorQuilometragem";
import { Cht } from "./cht";


let cambioManual          = new Manual();
let motorCht               = new Cht();
let direcaoEletrica       = new Eletrica();
let contadorQuilometragemGol = new ContadorQuilometragem();

let carroGol = new Carro(cambioManual, motorCht, direcaoEletrica, contadorQuilometragemGol);

let cambioAutomatico      = new Automatica();
let motorAp               = new Ap();
let direcaoHidraulica     = new Eletrica();
let contadorQuilometragemGolf = new ContadorQuilometragem();

let carroGolf = new Carro(cambioAutomatico, motorAp, direcaoHidraulica, contadorQuilometragemGolf);

carroGol.imprimirDadosCarro();
console.log("------------------;-------------------------------------------------------------")
carroGolf.imprimirDadosCarro();