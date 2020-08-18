"use strict";
exports.__esModule = true;
var regAutomotor_1 = require("./regAutomotor");
var automovil_1 = require("./automovil");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var registoAutos = new regAutomotor_1.RegistroAutomotor(1000);
var miAuto = new automovil_1.Automovil("abc123", "fiat", "palio", "2014", 3);
var unaMoto = new moto_1.Moto("go701n", "gilera", "smash", "2010", 150);
var unCamion = new camion_1.Camion("sta884", "iveco", "tector", "2016", 1800);
registoAutos.agregar(miAuto);
if (miAuto.esCoupe()) {
    console.log("si quieren sentarse atras, corran el asiento");
}
console.log(registoAutos);
registoAutos.borrar("jjj338");
console.log(registoAutos);
registoAutos.actualizar(unaMoto, 1);
registoAutos.agregar(unCamion);
console.log(registoAutos);
