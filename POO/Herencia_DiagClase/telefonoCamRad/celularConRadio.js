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
exports.CelularConRadio = void 0;
//-------------------- Clase CelularConRadio -------------------------
var celular_1 = require("./celular");
var CelularConRadio = /** @class */ (function (_super) {
    __extends(CelularConRadio, _super);
    function CelularConRadio(miNro) {
        var _this = _super.call(this, miNro) || this;
        _this.frecuenciaActual = 500;
        return _this;
    }
    CelularConRadio.prototype.sintonizar = function (dial) {
        if (this.estaPrendido) {
            this.frecuenciaActual = dial;
        }
    };
    CelularConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    return CelularConRadio;
}(celular_1.Celular));
exports.CelularConRadio = CelularConRadio;
