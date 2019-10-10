"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(cambio, motor, direcao, rodado) {
        this.cambio = cambio;
        this.motor = motor;
        this.direcao = direcao;
        this.rodado = rodado;
    }
    imprimirDadosCarro() {
        this.cambio.tipoCambio();
        this.cambio.quantidadeMarchas();
        this.cambio.consumoCombustivel();
        this.motor.tipoMotor();
        this.motor.potenciaMotor();
        this.motor.pesoMotor();
        this.rodado.quilometragem();
        this.rodado.quilometragemZerou();
        this.direcao.tipoDirecao();
        this.direcao.usaOleo();
        this.direcao.precoManutencao();
    }
}
exports.Carro = Carro;
