"use strict";
//Algoritmo Suma Elementos Arreglo
/*
• Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario
*/
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var dimension;
var numeros = [];
function controlarDimension() {
    var dimensionArreglo;
    dimensionArreglo = ReadlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimensionArreglo < 1) {
        dimensionArreglo = ReadlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimensionArreglo;
}
function cargarArreglo(arreglo, dimensionArreglo) {
    var nro;
    nro = 0;
    for (var indice = 0; indice < dimensionArreglo; indice++) {
        nro = ReadlineSync.questionInt("Indique el numero que desea incorporar en la posicion " + indice + ": ");
        arreglo[indice] = nro;
    }
}
function mostrarValores(arreglo, dimensionArreglo) {
    console.log("****** contenido del arreglo ******");
    for (var indice = 0; indice < dimensionArreglo; indice++) {
        console.log("El numero ingresado en la posicion ", indice, " es ", arreglo[indice]);
    }
}
function sumarElementos(arreglo, dimensionArreglo) {
    var resultado;
    resultado = 0;
    for (var i = 0; i < dimensionArreglo; i++) {
        resultado += arreglo[i];
    }
    return resultado;
}
dimension = controlarDimension();
cargarArreglo(numeros, dimension);
mostrarValores(numeros, dimension);
console.log("la suma de los elementos del arreglo da: ", sumarElementos(numeros, dimension));
