//Algoritmo Producto Escalar
/* 
• Cargue dos arreglos de dimensión N números
(la cantidad es ingresada por el usuario)
• Calcule el producto escalar entre los dos arreglos:
    A * B = a1b1 + a2b2 + a3b3...
*/

let readlineSync = require('readline-sync');
let arreglo1 = new Array();
let arreglo2 = new Array();
let dimension;

function controlarDimension(dimension){
    dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimension < 1){
        dimension = readlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimension;
}

function cargarArreglo(arreglo){
    let nro = 0;
    for (indice = 0; indice < dimension; indice++) {
        nro = readlineSync.questionInt("Indique el numero que desea incorporar en la posicion "+indice+": ");
        arreglo[indice] = nro;
    }
}

function calcularProductoEscalar(arreglo1, arreglo2){
    let prodEscalar = 0;
    for (indice = 0; indice < dimension; indice++) {
        prodEscalar += arreglo1[indice] * arreglo2[indice];
    }
    return prodEscalar;
}


dimension = controlarDimension(dimension);
console.log("###### cargar ARREGLO nro 1 ######");
cargarArreglo(arreglo1);
console.log("###### cargar ARREGLO nro 2 ######");
cargarArreglo(arreglo2);
console.log("El producto escalar es: ",calcularProductoEscalar(arreglo1,arreglo2));