var Televisor = /** @class */ (function () {
    function Televisor(canalActual, volumenActual) {
        this.decodificador = new Decodificador();
        this.canalActual = canalActual;
        this.volumenActual = volumenActual;
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
            if (this.volumenActual < 100) {
                this.getDecodificador().subirVolumen();
            }
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido) {
            if (this.volumenActual > 0) {
                this.getDecodificador().bajarVolumen();
            }
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
var Decodificador = /** @class */ (function () {
    function Decodificador() {
        this.volumenActual = 20;
        this.canalActual = 44;
    }
    Decodificador.prototype.subirVolumen = function () {
        if (this.volumenActual < 100) {
            this.volumenActual = this.volumenActual + 1;
        }
    };
    Decodificador.prototype.bajarVolumen = function () {
        if (this.volumenActual > 0) {
            this.volumenActual = this.volumenActual - 1;
        }
    };
    Decodificador.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Decodificador.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Decodificador.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    Decodificador.prototype.getCanal = function () {
        return this.canalActual;
    };
    return Decodificador;
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
var miTele = new Televisor(2, 0);
console.log("prendo el televisor");
miTele.prenderApagar();
mirandoTele();
console.log("apago el televisor");
miTele.prenderApagar();
mirandoTele();
