var Monitor = /** @class */ (function () {
    function Monitor() {
        this.encendido = false;
        this.brillo = 5;
        this.contraste = 5;
        this.color = 5;
    }
    Monitor.prototype.botonPower = function () {
        if (!this.encendido) {
            this.encendido = true;
        }
        else {
            this.encendido = false;
        }
    };
    Monitor.prototype.getEncendido = function () {
        return this.encendido;
    };
    Monitor.prototype.subirBrillo = function () {
        if (this.encendido) {
            console.log("esta encendido se cumple");
            if (this.brillo <= 10) {
                this.brillo = this.brillo + 1;
                console.log("modificado: ", this.brillo);
            }
        }
    };
    Monitor.prototype.bajarBrillo = function () {
        if (this.encendido) {
            if (this.brillo > 0) {
                this.brillo = this.brillo - 1;
            }
        }
    };
    Monitor.prototype.getBrillo = function () {
        return this.brillo;
    };
    Monitor.prototype.subirContraste = function () {
        if (this.encendido) {
            if (this.contraste <= 10) {
                this.contraste = this.contraste + 1;
            }
        }
    };
    Monitor.prototype.bajarContraste = function () {
        if (this.encendido) {
            if (this.contraste > 0) {
                this.contraste = this.contraste - 1;
            }
        }
    };
    Monitor.prototype.getContraste = function () {
        return this.contraste;
    };
    Monitor.prototype.subirColor = function () {
        if (this.encendido) {
            if (this.color <= 10) {
                this.color = this.color + 1;
            }
        }
    };
    Monitor.prototype.bajarColor = function () {
        if (this.encendido) {
            if (this.color > 0) {
                this.color = this.color - 1;
            }
        }
    };
    Monitor.prototype.getColor = function () {
        return this.color;
    };
    return Monitor;
}());
var miMonitor = new Monitor();
miMonitor.botonPower();
console.log(miMonitor);
miMonitor.subirBrillo();
miMonitor.bajarColor();
console.log(miMonitor);
miMonitor.botonPower();
console.log("apagado...", miMonitor);
miMonitor.subirContraste();
console.log(miMonitor);
