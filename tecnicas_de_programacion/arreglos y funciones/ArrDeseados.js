//Algoritmo NumerosDeseados
/* 
• Construya un algoritmo que tenga un arreglo de
dimensión 5 y llénelo con los números que el usuario
desee
• Muestre los números del arreglo al usuario
*/

let readlineSync = require('readline-sync');
let nroDeseadoArreglo = new Array (5);
let nro, indice;

function cargarArreglo(nroDeseadoArreglo){
    for (indice = 0; indice < 5; indice++) {
        nro = readlineSync.questionInt("Indique el numero que desea incorporar en la posicion "+indice+": ");
        nroDeseadoArreglo[indice] = nro;
    }
}

function mostrarValores(nroDeseadoArreglo){
    console.log("****** contenido del arreglo ******");
    for (indice = 0; indice < 5; indice++) {
        console.log("El numero en la posicion ", indice, " es ", nroDeseadoArreglo[indice]);
    }
}

cargarArreglo(nroDeseadoArreglo);
mostrarValores(nroDeseadoArreglo);