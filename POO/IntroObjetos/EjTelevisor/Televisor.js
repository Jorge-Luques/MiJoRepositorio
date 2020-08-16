"use strict";
exports.__esModule = true;
var Decodificador_1 = require("./Decodificador");
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.decodificador = new Decodificador_1.Decodificador();
        this.estaPrendido = false;
    }
    Televisor.prototype.getDecodificador = function () {
        return this.decodificador;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.estaPrendido) {
            this.getDecodificador().subirVolumen();
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido) {
            this.getDecodificador().bajarVolumen();
        }
    };
    Televisor.prototype.subirCanal = function () {
        if (this.estaPrendido) {
            this.getDecodificador().subirCanal();
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.estaPrendido) {
            this.getDecodificador().bajarCanal();
        }
    };
    Televisor.prototype.elegirCanal = function (canal) {
        if (this.estaPrendido) {
            this.getDecodificador().elegirCanal(canal);
        }
    };
    Televisor.prototype.getCanal = function () {
        return this.decodificador.getCanal();
    };
    return Televisor;
}());
function mirandoTele() {
    miTele.bajarVolumen();
    miTele.bajarVolumen();
    console.log(miTele);
    miTele.subirCanal();
    miTele.subirVolumen();
    console.log(miTele);
    for (var i = 1; i <= 10; i++) {
        miTele.subirVolumen();
        console.log("subo el volumen.... ", miTele);
    }
    miTele.elegirCanal(25);
    console.log(miTele);
}
var miTele = new Televisor();
console.log("prendo el televisor");
miTele.prenderApagar();
mirandoTele();
console.log("apago el televisor");
miTele.prenderApagar();
mirandoTele();
