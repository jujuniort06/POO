"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("../animal");
class Aves extends animal_1.Animal {
    constructor() {
        super();
    }
    fazerBarulho() {
        console.log('Tipo Aves de fazendo barulho');
    }
}
exports.Aves = Aves;
