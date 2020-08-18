"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
//------------------------ Clase Vehiculo --------------------- 
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, disegno, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.disegno = disegno;
        this.modelo = modelo;
    }
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getDisegno = function () {
        return this.disegno;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
