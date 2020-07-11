"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var lasPalabras = new Array();
function cargarPalabras(lasPalabras) {
    var palabra;
    palabra = "nana";
    while (palabra != "") {
        palabra = rs.question("ingresar una palabra, cadena vacia para finalizar: ");
        lasPalabras.push(palabra);
    }
    lasPalabras.pop(); //para sacar la cadena vacia
}
function insertar(posicion, word, arreglo) {
    if (posicion >= 0 && posicion < arreglo.length) {
        arreglo[posicion] = word;
    }
    else {
        console.log("Posicion invalida para insertar una palabra");
    }
}
function buscar(word, arreglo) {
    var i;
    i = 0;
    while (i < arreglo.length && word != arreglo[i]) {
        i++;
    }
    if (arreglo[i] == word) {
        return i;
    }
    else {
        return -1;
    }
}
function corrimiento_izq(pos, arreglo) {
    var index;
    for (index = pos; index < arreglo.length; index++) {
        arreglo[index] = arreglo[index + 1];
    }
}
function eliminar(word, arreglo) {
    var pos = buscar(word, arreglo);
    if (pos != -1) {
        corrimiento_izq(buscar(word, arreglo), arreglo);
        arreglo.pop();
    }
    else {
        console.log("No se encontro la palabra");
    }
}
function actualizar(miWord, word, lasPalabras) {
    var pos = buscar(word, lasPalabras);
    if (pos != -1) {
        lasPalabras[pos] = miWord;
    }
    else {
        console.log("no se encontro la palabra ", word, " en el arreglo");
    }
}
var menuOpciones = function (lasPalabras) {
    var option;
    var word;
    console.log("-----------------------");
    console.log("-- MENU DE OPCIONES ---");
    console.log("-----------------------");
    console.log("--  1. INSERTAR      --");
    console.log("--  2. BUSCAR        --");
    console.log("--  3. ELIMINAR      --");
    console.log("--  4. ACTUALIZAR    --");
    option = rs.questionInt("Ingresar la opcion con la cual trabajar en el arreglo: ");
    switch (option) {
        case 1:
            var pos = void 0;
            pos = rs.questionInt("ingresar la posicion de la palabra a insertar: ");
            word = rs.question("ingresar la palabra a insertar: ");
            insertar(pos, word, lasPalabras);
            break;
        case 2:
            word = rs.question("ingresar la palabra a buscar: ");
            console.log("la palabra ", word, " esta en la posicion: ", buscar(word, lasPalabras));
            break;
        case 3:
            word = rs.question("ingresar la palabra a eliminar: ");
            eliminar(word, lasPalabras);
            break;
        case 4:
            var nuevaWord = void 0;
            nuevaWord = rs.question("ingresar la palabra reemplazante: ");
            word = rs.question("ingresar la palabra a ser reemplazada: ");
            actualizar(nuevaWord, word, lasPalabras);
            break;
        default:
            console.log("Opcion no valida!!!");
            break;
    }
};
cargarPalabras(lasPalabras);
console.log(lasPalabras);
menuOpciones(lasPalabras);
console.log(lasPalabras);
