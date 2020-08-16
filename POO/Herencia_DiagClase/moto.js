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
exports.Moto = void 0;
//------------------------ Clase Moto --------------------- 
var vehiculo_1 = require("./vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(patente, marca, dis, modelo, cil) {
        if (cil === void 0) { cil = 110; }
        var _this = _super.call(this, patente, marca, dis, modelo) || this;
        _this.cilindrada = cil;
        return _this;
    }
    Moto.prototype.setCilindrada = function (cc) {
        this.cilindrada = cc;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    return Moto;
}(vehiculo_1.Vehiculo));
exports.Moto = Moto;
