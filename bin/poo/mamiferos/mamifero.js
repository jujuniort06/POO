"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("../animal");
class Mamifero extends animal_1.Animal {
    constructor() {
        super();
    }
    fazerBarulho() {
        console.log('Tipo Mamifero fazendo barulho');
    }
}
exports.Mamifero = Mamifero;
