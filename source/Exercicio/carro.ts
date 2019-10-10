import { Motor } from "./motor";
import { Rodado } from "./rodado";
import { Cambio } from "./cambio";
import { Direcao } from "./direcao";

export class Carro {
  private motor : Motor;
  private rodado : Rodado;
  private cambio : Cambio;
  private direcao : Direcao;

  constructor(cambio : Cambio, motor : Motor, direcao : Direcao, rodado : Rodado) {
    this.cambio = cambio;
    this.motor  = motor;
    this.direcao = direcao;
    this.rodado  = rodado;
  }

  public imprimirDadosCarro(){
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