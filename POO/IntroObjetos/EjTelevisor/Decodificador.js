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
