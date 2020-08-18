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
exports.__esModule = true;
exports.Automovil = void 0;
//------------------------ Clase Automovil --------------------- 
var vehiculo_1 = require("./vehiculo");
var Automovil = /** @class */ (function (_super) {
    __extends(Automovil, _super);
    function Automovil(patente, marca, dis, modelo, canPtas) {
        if (canPtas === void 0) { canPtas = 4; }
        var _this = _super.call(this, patente, marca, dis, modelo) || this;
        _this.cantPuertas = canPtas;
        return _this;
    }
    Automovil.prototype.esCoupe = function () {
        return this.cantPuertas == 3;
    };
    Automovil.prototype.setCantPuertas = function (cant) {
        if (cant >= 2 && cant <= 5) { //control de que el parametro sea acorde a la cant de puertas real de un auto
            this.cantPuertas = cant;
        }
    };
    Automovil.prototype.getCantPuertas = function () {
        return this.cantPuertas;
    };
    return Automovil;
}(vehiculo_1.Vehiculo));
exports.Automovil = Automovil;
