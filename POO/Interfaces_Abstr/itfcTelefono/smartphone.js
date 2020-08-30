"use strict";
exports.__esModule = true;
exports.SmartPhone = void 0;
var SmartPhone = /** @class */ (function () {
    function SmartPhone(nro) {
        this.numero = nro;
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log("llamando al ", numero);
    };
    SmartPhone.prototype.getNumero = function () {
        return this.numero;
    };
    return SmartPhone;
}());
exports.SmartPhone = SmartPhone;
