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
var mamifero_1 = require("./mamifero");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        var _this = _super.call(this) || this;
        _this.nome = "";
        return _this;
    }
    Gato.prototype.fazerBarulho = function () {
        console.log("Miando...");
    };
    Gato.prototype.andar = function () {
        _super.prototype.andar.call(this);
        console.log("Julio andando");
    };
    Gato.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Gato.prototype.getNome = function () {
        return this.nome;
    };
    return Gato;
}(mamifero_1.Mamifero));
exports.Gato = Gato;
