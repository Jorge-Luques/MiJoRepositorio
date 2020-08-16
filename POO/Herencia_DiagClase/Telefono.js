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
//-------------------- Clase Telefono -------------------------
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
//-------------------- Clase TelefonoConCamara -------------------------
var CelularConCamara = /** @class */ (function (_super) {
    __extends(CelularConCamara, _super);
    function CelularConCamara(miNro) {
        var _this = _super.call(this, miNro) || this;
        _this.camaraCel = "";
        return _this;
    }
    CelularConCamara.prototype.sacarFoto = function () {
        this.camaraCel += "foto ";
        console.log(this.camaraCel);
    };
    return CelularConCamara;
}(Celular));
//-------------------- Clase CelularConRadio -------------------------
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
}(Celular));
//-------- MAIN -----------------------
var micel = new Celular(3333456);
var celuCam = new CelularConCamara(22233344);
var celRadio = new CelularConRadio(24942881);
micel.prenderApagar();
micel.mandarMensaje("hola", 12345);
console.log(micel);
celuCam.prenderApagar();
celuCam.hacerLlamada();
celuCam.sacarFoto();
celuCam.sacarFoto();
celuCam.sacarFoto();
console.log(celuCam);
celRadio.prenderApagar();
celRadio.sintonizar(750);
console.log("sintonizando ", celRadio.verFrecuenciaActual());
console.log(celRadio);
