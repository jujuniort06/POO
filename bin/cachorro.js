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
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super.call(this) || this;
    }
    Cachorro.prototype.fazerBarulho = function () {
        console.log("Latindo...");
    };
    Cachorro.prototype.andar = function () {
        _super.prototype.andar.call(this);
        console.log("Cachorro andando");
    };
    return Cachorro;
}(mamifero_1.Mamifero));
exports.Cachorro = Cachorro;
