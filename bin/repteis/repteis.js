"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("../animal");
class Repteis extends animal_1.Animal {
    constructor() {
        super();
    }
    fazerBarulho() {
        console.log('Tipo Repteis fazendo barulho');
    }
}
exports.Repteis = Repteis;
