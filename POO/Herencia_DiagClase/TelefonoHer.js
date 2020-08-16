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
var Telefono = /** @class */ (function () {
    function Telefono(miNro) {
        this.numero = miNro;
        this.estaPrendido = false;
        this.linternaPrendida = false;
        this.bateriaActual = 100;
    }
    Telefono.prototype.mandarMensaje = function (msg, numero) {
        if (this.estaPrendido) {
            console.log("enviando sms con texto: ", msg, " al numero: ", numero);
            this.bateriaActual -= 2;
            return true;
        }
    };
    Telefono.prototype.hacerLlamada = function () {
        if (this.estaPrendido) {
            console.log("llamando...C");
            this.bateriaActual -= 4;
        }
    };
    Telefono.prototype.prenderApagar = function () {
        if (!this.estaPrendido)
            this.estaPrendido = true;
        else {
            this.estaPrendido = false;
        }
    };
    Telefono.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    return Telefono;
}());
//-------------------- Clase TelefonoConCamara -------------------------
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(miNro) {
        var _this = _super.call(this, miNro) || this;
        _this.camaraCel = new Camara();
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        console.log(this.camaraCel.sacarFoto());
    };
    return TelefonoConCamara;
}(Telefono));
//-------------------- Clase Camara -------------------------
var Camara = /** @class */ (function () {
    function Camara() {
    }
    Camara.prototype.sacarFoto = function () {
        return "sonrian...salen en la foto";
    };
    return Camara;
}());
//-------- MAIN -----------------------
var cel = new Telefono(3333456);
var celCam = new TelefonoConCamara(22233344);
cel.prenderApagar();
cel.mandarMensaje("hola", 12345);
console.log(cel);
celCam.prenderApagar();
celCam.hacerLlamada();
celCam.sacarFoto();
console.log(celCam);
