"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Especie = /** @class */ (function () {
    function Especie() {
        this.name = "";
        this.qtde = 0;
    }
    Especie.prototype.setName = function (name) {
        this.name = name;
    };
    Especie.prototype.getName = function () {
        return this.name;
    };
    Especie.prototype.setQtde = function (qtde) {
        this.qtde = qtde;
    };
    Especie.prototype.getQtde = function (qtde) {
        return this.qtde;
    };
    return Especie;
}());
exports.Especie = Especie;
