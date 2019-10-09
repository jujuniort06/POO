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
var especie_1 = require("./especie");
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero() {
        return _super.call(this) || this;
    }
    Mamifero.prototype.andar = function () {
        console.log("Mamifero andando");
    };
    return Mamifero;
}(especie_1.Especie));
exports.Mamifero = Mamifero;
