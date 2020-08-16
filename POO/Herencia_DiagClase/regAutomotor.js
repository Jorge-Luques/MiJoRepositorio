"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
//------------------------ Clase RegistroAutomotor --------------------- 
var fs = require("fs");
var automovil_1 = require("./automovil");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(id) {
        this.id = id;
        this.registrados = [];
        this.cargarVehic();
    }
    RegistroAutomotor.prototype.cargarVehic = function () {
        var txtVehic = fs.readFileSync("vehiculos.txt", "utf-8");
        var datosVehic = txtVehic.split('\r\n');
        var infoVehic;
        var vhc;
        for (var i = 0; i < datosVehic.length; i++) {
            infoVehic = datosVehic[i].split(',');
            if (infoVehic[4] == 'auto') {
                vhc = new automovil_1.Automovil(infoVehic[0], infoVehic[1], infoVehic[2], infoVehic[3]);
            }
            else if (infoVehic[4] == 'moto') {
                vhc = new moto_1.Moto(infoVehic[0], infoVehic[1], infoVehic[2], infoVehic[3]);
            }
            else {
                vhc = new camion_1.Camion(infoVehic[0], infoVehic[1], infoVehic[2], infoVehic[3]);
            }
            this.agregar(vhc);
        }
    };
    RegistroAutomotor.prototype.getId = function () {
        return this.id;
    };
    RegistroAutomotor.prototype.agregar = function (vhc) {
        this.registrados.push(vhc);
    };
    RegistroAutomotor.prototype.buscar = function (patente) {
        var vhcReg = null;
        for (var i = 0; this.registrados.length; i++) {
            vhcReg = this.registrados[i];
            if (patente == vhcReg.getPatente()) {
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
    RegistroAutomotor.prototype.actualizar = function (vhc, pos) {
        if (pos >= 0 && pos < this.registrados.length) {
            this.registrados[pos] = vhc;
        }
        else {
            console.log("posicion NO VALIDA para actualizar el vehiculo");
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
