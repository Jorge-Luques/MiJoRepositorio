"use strict";
exports.__esModule = true;
//-------- MAIN -----------------------
var celular_1 = require("./celular");
var celularConCamara_1 = require("./celularConCamara");
var celularConRadio_1 = require("./celularConRadio");
var micel = new celular_1.Celular(3333456);
var celuCam = new celularConCamara_1.CelularConCamara(22233344);
var celRadio = new celularConRadio_1.CelularConRadio(24942881);
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
