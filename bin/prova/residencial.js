"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areas_1 = require("./areas");
class Residencial extends areas_1.Areas {
    finalidadeArea() {
        console.log("A finalidade desta area é para construções RESIDENCIAIS!");
    }
}
exports.Residencial = Residencial;
