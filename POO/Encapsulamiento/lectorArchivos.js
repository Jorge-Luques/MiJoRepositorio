"use strict";
exports.__esModule = true;
exports.LectorArchivos = void 0;
var fs = require("fs");
var rs = require("readline-sync");
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos(nombreArchivo, lim1) {
        this.nombreArchivo = nombreArchivo;
        this.delimitador1 = lim1;
    }
    LectorArchivos.prototype.extraerDeArchivo = function () {
        var txtArchivo = fs.readFileSync(this.nombreArchivo, "utf-8");
        var datosExtraidos = txtArchivo.split(this.delimitador1);
        return datosExtraidos;
    };
    LectorArchivos.prototype.setDelimitadorTexto = function () {
        var lim = rs.question("ingresar el delimitador del texto: ");
        this.delimitador1 = lim;
    };
    LectorArchivos.prototype.getDelimitador = function () {
        return this.delimitador1;
    };
    /**
     * Extrae los elementos de tipo string del "arreglo" separados por "lim"
     * @param arreglo de tipo string[] de donde se extraen los datos
     * @param lim es el separador de caracteres del arreglo
     * @param pos es la posicion en el arreglo elegida para la extraccion
     */
    LectorArchivos.prototype.extraerDeArregloPorPosic = function (arreglo, lim, pos) {
        var datosExtraidos;
        datosExtraidos = arreglo[pos].split(lim);
        return datosExtraidos;
    };
    return LectorArchivos;
}());
exports.LectorArchivos = LectorArchivos;
var readfile = new LectorArchivos("coches.txt", "\r\n");
var datosArch = [];
datosArch = readfile.extraerDeArchivo();
var segLectura = [];
console.log(datosArch);
segLectura = readfile.extraerDeArregloPorPosic(datosArch, ",", 0);
console.log(segLectura);
readfile.setDelimitadorTexto();
datosArch = readfile.extraerDeArchivo();
console.log(datosArch);
