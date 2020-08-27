"use strict";
exports.__esModule = true;
var Examen = /** @class */ (function () {
    function Examen(materia, fecha) {
        this.materia = materia;
        this.fecha = fecha;
        this.alumnos = [];
        this.notas = [];
    }
    Examen.prototype.getMateria = function () {
        return this.materia;
    };
    Examen.prototype.getFecha = function () {
        return this.fecha;
    };
    Examen.prototype.setNotaAlumno = function (alumno, nota) {
        if (this.alumnos.includes(alumno)) {
            var pos = void 0;
            pos = this.alumnos.indexOf(alumno);
            this.notas[pos] = nota;
        }
    };
    Examen.prototype.getNotaAlumno = function (estud) {
        if (this.alumnos.includes(estud)) {
            var pos = void 0;
            pos = this.alumnos.indexOf(estud);
            return this.notas[pos];
        }
        return -1;
    };
    Examen.prototype.agregarAlumno = function (estud) {
        this.alumnos.push(estud);
    };
    return Examen;
}());
exports["default"] = Examen;
