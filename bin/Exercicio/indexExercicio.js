"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const manual_1 = require("./manual");
const ap_1 = require("./ap");
const eletrica_1 = require("./eletrica");
const automatica_1 = require("./automatica");
const contadorQuilometragem_1 = require("./contadorQuilometragem");
const cht_1 = require("./cht");
let cambioManual = new manual_1.Manual();
let motorCht = new cht_1.Cht();
let direcaoEletrica = new eletrica_1.Eletrica();
let contadorQuilometragemGol = new contadorQuilometragem_1.ContadorQuilometragem();
let carroGol = new carro_1.Carro(cambioManual, motorCht, direcaoEletrica, contadorQuilometragemGol);
let cambioAutomatico = new automatica_1.Automatica();
let motorAp = new ap_1.Ap();
let direcaoHidraulica = new eletrica_1.Eletrica();
let contadorQuilometragemGolf = new contadorQuilometragem_1.ContadorQuilometragem();
let carroGolf = new carro_1.Carro(cambioAutomatico, motorAp, direcaoHidraulica, contadorQuilometragemGolf);
carroGol.imprimirDadosCarro();
console.log("-------------------------------------------------------------------------------");
carroGolf.imprimirDadosCarro();
