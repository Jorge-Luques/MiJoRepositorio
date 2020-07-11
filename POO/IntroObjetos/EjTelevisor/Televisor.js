var Televisor = /** @class */ (function () {
    function Televisor(canalActual, volumenActual) {
        this.canalActual = canalActual;
        this.volumenActual = volumenActual;
        this.estaPrendido = false;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.estaPrendido) {
            if (this.volumenActual < 100) {
                this.volumenActual = this.volumenActual + 1;
            }
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido) {
            if (this.volumenActual > 0) {
                this.volumenActual = this.volumenActual - 1;
            }
        }
    };
    Televisor.prototype.subirCanal = function () {
        if (this.estaPrendido) {
            this.canalActual = this.canalActual + 1;
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.estaPrendido) {
            this.canalActual = this.canalActual - 1;
        }
    };
    Televisor.prototype.elegirCanal = function (canal) {
        if (this.estaPrendido) {
            this.canalActual = canal;
        }
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
var miTele = new Televisor(2, 0);
console.log("prendo el televisor");
miTele.prenderApagar();
mirandoTele();
console.log("apago el televisor");
miTele.prenderApagar();
mirandoTele();
