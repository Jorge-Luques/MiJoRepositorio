"use strict";
exports.__esModule = true;
exports.Celular = void 0;
//-------------------- Clase Celular -------------------------
var Celular = /** @class */ (function () {
    function Celular(miNro) {
        this.numero = miNro;
        this.estaPrendido = false;
        this.linternaPrendida = false;
        this.bateriaActual = 100;
    }
    Celular.prototype.mandarMensaje = function (msg, numero) {
        if (this.estaPrendido) {
            console.log("enviando sms con texto: ", msg, " al numero: ", numero);
            this.bateriaActual -= 2;
            return true;
        }
    };
    Celular.prototype.hacerLlamada = function () {
        if (this.estaPrendido) {
            console.log("llamando...C");
            this.bateriaActual -= 4;
        }
    };
    Celular.prototype.prenderApagar = function () {
        if (!this.estaPrendido)
            this.estaPrendido = true;
        else {
            this.estaPrendido = false;
        }
    };
    Celular.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    Celular.prototype.getNumero = function () {
        return this.numero;
    };
    return Celular;
}());
exports.Celular = Celular;
