"use strict";
exports.__esModule = true;
var Alumno = /** @class */ (function () {
    function Alumno(expediente, nombre, apellido, edad) {
        this.expediente = expediente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.examenes = [];
    }
    Alumno.prototype.calcularPromedioGral = function () {
        var suma = 0;
        for (var i = 0; i < this.examenes.length; i++) {
            suma += this.examenes[i].getNotaAlumno(this);
        }
        if (this.examenes.length > 0) {
            return suma / this.examenes.length;
        }
        else {
            return 0;
        }
    };
    Alumno.prototype.getNombreCompleto = function () {
        return (this.nombre + " " + this.apellido);
    };
    return Alumno;
}());
exports["default"] = Alumno;
