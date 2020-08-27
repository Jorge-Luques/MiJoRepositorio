"use strict";
exports.__esModule = true;
var fs = require("fs");
var rs = require("readline-sync");
//---------------------- CLASE Libro ------------------------------------
var Libro = /** @class */ (function () {
    function Libro(codigo, titulo, autor, genero) {
        this.codigo = codigo;
        this.genero = genero;
        this.autor = autor;
        this.titulo = titulo;
        this.stock = 1;
    }
    Libro.prototype.getcodigo = function () {
        return this.codigo;
    };
    Libro.prototype.getgenero = function () {
        return this.genero;
    };
    Libro.prototype.getautor = function () {
        return this.autor;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.agregarcantStock = function (cant) {
        this.stock += cant;
    };
    Libro.prototype.vender = function () {
        this.stock = this.stock - 1;
    };
    return Libro;
}());
//---------------------- CLASE GestorLibros ------------------------------------
var GestorLibros = /** @class */ (function () {
    function GestorLibros(id) {
        this.id = id;
        this.registrados = [];
        this.cargarLibros();
    }
    GestorLibros.prototype.cargarLibros = function () {
        var txtLibros = fs.readFileSync("misLibros.txt", "utf-8");
        var datosLibro = txtLibros.split('\r\n');
        var infolibro;
        var theBook;
        for (var i = 0; i < datosLibro.length; i++) {
            infolibro = datosLibro[i].split(',');
            theBook = new Libro(infolibro[0], infolibro[1], infolibro[2], infolibro[3]);
            this.agregar(theBook);
        }
    };
    GestorLibros.prototype.getId = function () {
        return this.id;
    };
    GestorLibros.prototype.agregar = function (libro) {
        this.registrados.push(libro);
    };
    GestorLibros.prototype.buscar = function (codigo) {
        var libroReg = null;
        for (var i = 0; this.registrados.length; i++) {
            libroReg = this.registrados[i];
            if (codigo == libroReg.getcodigo()) {
                return i;
            }
        }
        return -1;
    };
    GestorLibros.prototype.borrar = function (codigo) {
        if (this.buscar(codigo) != -1) {
            var poslibro = this.buscar(codigo); //lo encontro y se para en la pos donde se encuentra
            for (var i = poslibro; i < this.registrados.length - 1; i++) {
                this.registrados[i] = this.registrados[i + 1]; //hago corrimiento a izq
            }
            this.registrados.pop(); //borro el ultimo, que esta duplicado
        }
    };
    GestorLibros.prototype.actualizar = function (car, pos) {
        if (pos >= 0 && pos < this.registrados.length) {
            this.registrados[pos] = car;
        }
        else {
            console.log("posicion NO VALIDA para actualizar el libro");
        }
    };
    GestorLibros.prototype.busquedaGlobal = function (criterio) {
        var matching;
        var tipoBsq;
        //seleccionar el criterio de busqueda de acuerdo a lo ingresado en el tipo de busqueda
        if (criterio != '') {
            console.log("Ingresar el tipo de busqueda en el gestor de libros de acuerdo a los siguientes tipos");
            console.log(" 1. por genero");
            console.log(" 2. por autor");
            tipoBsq = rs.questionInt("seleccionar busqueda: ");
            switch (tipoBsq) {
                case 1:
                    matching = this.coincidentesxGenero(criterio);
                    break;
                case 2:
                    matching = this.coincidentesxAutor(criterio);
                    break;
                default:
                    matching = this.registrados;
                    break;
            }
        }
        else {
            matching = this.registrados;
        }
        return matching;
    };
    GestorLibros.prototype.coincidentesxGenero = function (bsqGenero) {
        var librosCriterio = [];
        for (var i = 0; i < this.registrados.length; i++) {
            if (bsqGenero == this.registrados[i].getgenero()) {
                librosCriterio.push(this.registrados[i]);
            }
        }
        return librosCriterio;
    };
    GestorLibros.prototype.coincidentesxAutor = function (bsqAutor) {
        var librosCriterio = [];
        for (var i = 0; i < this.registrados.length; i++) {
            if (bsqAutor == this.registrados[i].getautor()) {
                librosCriterio.push(this.registrados[i]);
            }
        }
        return librosCriterio;
    };
    return GestorLibros;
}());
var gbook = new GestorLibros(33);
var unLibro = new Libro("230f", "Harry Potter y la piedra filosofal", "J.K. Rowling", "infantil");
console.log("llego el libro ", unLibro.getTitulo(), " con codigo: ", unLibro.getcodigo());
unLibro.agregarcantStock(5);
gbook.agregar(unLibro);
console.log(gbook);
var busqueda = [];
busqueda = gbook.busquedaGlobal("Las mil y una noches");
console.log(busqueda);
