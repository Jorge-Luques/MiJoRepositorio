"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('archivo.txt', 'utf-8');
var palabras = texto.split(' ');
console.log(palabras);
