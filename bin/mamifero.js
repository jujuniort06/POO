"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero() {
        var _this = _super.call(this) || this;
        _this.tamanho = "";
        _this.peso = 0;
        return _this;
    }
    Mamifero.prototype.andar = function () {
        console.log("Mamifero andando");
    };
    Mamifero.prototype.setTamanho = function (tamanho) {
        this.tamanho = tamanho;
    };
    Mamifero.prototype.getTamanho = function () {
        return this.tamanho;
    };
    Mamifero.prototype.setPeso = function (peso) {
        if (peso > 0) {
            this.peso = peso;
        }
    };
    Mamifero.prototype.getPeso = function () {
        return this.peso;
    };
    return Mamifero;
}(animal_1.Animal));
exports.Mamifero = Mamifero;
