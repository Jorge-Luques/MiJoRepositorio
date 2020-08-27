"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var fs = require("fs");
var LegajoEscolar = /** @class */ (function () {
    function LegajoEscolar(nombreInstitucion) {
        this.nombreInstitucion = nombreInstitucion;
        this.alumnado = [];
        this.cargarItems();
    }
    LegajoEscolar.prototype.getInstitucion = function () {
        return this.nombreInstitucion;
    };
    LegajoEscolar.prototype.getTodosLosAlumnos = function () {
        return this.alumnado;
    };
    LegajoEscolar.prototype.agregar = function (itm) {
        this.alumnado.push(itm);
    };
    LegajoEscolar.prototype.cargarItems = function () {
        try {
            var txtItems = fs.readFileSync("alumnos.txt", "utf-8");
            var datosItems = txtItems.split('\r\n');
            var infoItems = void 0;
            var alum = void 0;
            for (var i = 0; i < datosItems.length; i++) {
                infoItems = datosItems[i].split(',');
                alum = new alumno_1["default"](parseInt(infoItems[0]), infoItems[1], infoItems[2], parseInt(infoItems[3]));
                this.agregar(alum);
            }
        }
        catch (err) {
            console.error("NO SE ENCONTRO EL ARCHIVO...", err);
        }
    };
    LegajoEscolar.prototype.calcularPromAlumnos = function () {
        var suma = 0;
        for (var i = 0; i < this.alumnado.length; i++) {
            suma += this.alumnado[i].calcularPromedioGral();
        }
        if (this.alumnado.length > 0) {
            return (suma / this.alumnado.length);
        }
        else {
            return 0;
        }
    };
    return LegajoEscolar;
}());
exports["default"] = LegajoEscolar;
