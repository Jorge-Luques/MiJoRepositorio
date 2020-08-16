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
exports.Camion = void 0;
//------------------------ Clase Camion --------------------- 
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(patente, marca, dis, modelo, tara) {
        if (tara === void 0) { tara = 1000; }
        var _this = _super.call(this, patente, marca, dis, modelo) || this;
        _this.tara = tara;
        return _this;
    }
    Camion.prototype.setTara = function (pesaje) {
        this.tara = pesaje;
    };
    Camion.prototype.getTara = function () {
        return this.tara;
    };
    return Camion;
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
