"use strict";
exports.__esModule = true;
exports.AutoDeportivo = void 0;
var AutoDeportivo = /** @class */ (function () {
    function AutoDeportivo() {
        this.velocidadActual = 0;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoDeportivo.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return AutoDeportivo;
}());
exports.AutoDeportivo = AutoDeportivo;
