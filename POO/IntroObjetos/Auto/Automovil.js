"use strict";
exports.__esModule = true;
var fs = require("fs");
var Automovil = /** @class */ (function () {
    function Automovil(patente, marca, disegno, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.disegno = disegno;
        this.modelo = modelo;
        this.estaPrendido = false;
        this.combustible = 0;
        this.velocidad = 0;
    }
    Automovil.prototype.getPatente = function () {
        return this.patente;
    };
    Automovil.prototype.getMarca = function () {
        return this.marca;
    };
    Automovil.prototype.getDisegno = function () {
        return this.disegno;
    };
    Automovil.prototype.getModelo = function () {
        return this.modelo;
    };
    Automovil.prototype.acelerar = function () {
        if (this.estaPrendido && this.combustible > 0) {
            this.velocidad = this.velocidad + 5;
            this.combustible - 1;
        }
    };
    Automovil.prototype.frenar = function () {
        if (this.velocidad >= 2) {
            this.velocidad = this.velocidad - 2;
        }
    };
    Automovil.prototype.cargarCombustible = function (litros) {
        this.combustible = this.combustible + litros;
    };
    Automovil.prototype.arrancar = function () {
        if (!this.estaPrendido && this.combustible > 0) {
            this.estaPrendido = true;
        }
        else {
            console.log("el carro ya arranco o le falta combustible");
        }
    };
    Automovil.prototype.parar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            this.velocidad = 0;
        }
    };
    return Automovil;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(id) {
        this.id = id;
        this.registrados = [];
        this.cargarAutos();
    }
    RegistroAutomotor.prototype.cargarAutos = function () {
        var txtAutos = fs.readFileSync("Auto/coches.txt", "utf-8");
        var datosAuto = txtAutos.split('\r\n');
        var infoAuto;
        var carro;
        for (var i = 0; i < datosAuto.length; i++) {
            infoAuto = datosAuto[i].split(',');
            carro = new Automovil(infoAuto[3], infoAuto[0], infoAuto[1], infoAuto[2]);
            this.agregar(carro);
        }
    };
    RegistroAutomotor.prototype.getId = function () {
        return this.id;
    };
    RegistroAutomotor.prototype.agregar = function (auto) {
        this.registrados.push(auto);
    };
    RegistroAutomotor.prototype.buscar = function (patente) {
        var autoReg = null;
        for (var i = 0; this.registrados.length; i++) {
            autoReg = this.registrados[i];
            if (patente == autoReg.getPatente()) {
                return i;
            }
        }
        return -1;
    };
    RegistroAutomotor.prototype.borrar = function (patente) {
        if (this.buscar(patente) != -1) {
            var posAuto = this.buscar(patente); //lo encontro y se para en la pos donde se encuentra
            for (var i = posAuto; i < this.registrados.length - 1; i++) {
                this.registrados[i] = this.registrados[i + 1]; //hago corrimiento a izq
            }
            this.registrados.pop(); //borro el ultimo, que esta duplicado
        }
    };
    RegistroAutomotor.prototype.actualizar = function (car, pos) {
        if (pos >= 0 && pos < this.registrados.length) {
            this.registrados[pos] = car;
        }
        else {
            console.log("posicion NO VALIDA para actualizar el vehiculo");
        }
    };
    return RegistroAutomotor;
}());
var registoAutos = new RegistroAutomotor(1000);
var miAuto = new Automovil("abc123", "fiat", "palio", "2014");
miAuto.arrancar();
var otroAuto = new Automovil("gol701", "volkswagen", "gol", "2010");
// miAuto.cargarCombustible(10);
// console.log("carga de combustible, ",miAuto);
// miAuto.arrancar();
// console.log("arranco el auto ",miAuto);
// miAuto.acelerar();
// console.log("acelero...",miAuto);
// miAuto.acelerar();
// console.log("acelero...",miAuto);
// miAuto.frenar();
// console.log("freno el auto ",miAuto);
// miAuto.parar();
// console.log("Auto parado. ",miAuto);
// console.log("mi auto es un: ",miAuto.getMarca());
// console.log("diseño: ",miAuto.getDisegno());
// console.log("modelo: ",miAuto.getModelo());
// console.log("patente: ",miAuto.getPatente());
registoAutos.agregar(miAuto);
console.log(registoAutos);
registoAutos.borrar("jjj338");
console.log(registoAutos);
registoAutos.actualizar(otroAuto, 2);
console.log(registoAutos);
