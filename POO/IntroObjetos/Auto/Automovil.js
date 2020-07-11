var Automovil = /** @class */ (function () {
    function Automovil(combustible) {
        this.estaPrendido = false;
        this.combustible = combustible;
        this.velocidad = 0;
    }
    Automovil.prototype.acelerar = function () {
        if (this.estaPrendido) {
            this.velocidad = this.velocidad + 5;
            this.combustible--;
        }
    };
    Automovil.prototype.frenar = function () {
        if (this.velocidad >= 2) {
            this.velocidad = this.velocidad - 2;
        }
    };
    Automovil.prototype.cargarCombustible = function (litros) {
        this.combustible = this.combustible + litros;
    };
    Automovil.prototype.arrancar = function () {
        if (!this.estaPrendido && this.combustible > 0) {
            this.estaPrendido = true;
        }
        else {
            console.log("el carro ya arranco o le falta combustible");
        }
    };
    Automovil.prototype.parar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            this.velocidad = 0;
        }
    };
    return Automovil;
}());
var miAuto = new Automovil(0);
miAuto.arrancar();
miAuto.cargarCombustible(10);
console.log("carga de combustible, ", miAuto);
miAuto.arrancar();
console.log("arranco el auto ", miAuto);
miAuto.acelerar();
console.log("acelero...", miAuto);
miAuto.acelerar();
console.log("acelero...", miAuto);
miAuto.frenar();
console.log("freno el auto ", miAuto);
miAuto.parar();
console.log("Auto parado. ", miAuto);
