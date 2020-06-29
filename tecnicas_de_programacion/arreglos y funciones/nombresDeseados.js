//Algoritmo NombresDeseados
/* 
• Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee
• Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de p
*/

let readlineSync = require('readline-sync');
let dimensionArreglo;
let nombrePersonas = new Array (dimensionArreglo);

function controlarDimension(){
    let dimensionArreglo = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimensionArreglo < 1){
        dimensionArreglo = readlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimensionArreglo;
}

function cargarArreglo(nombrePersonas,dimensionArreglo){
    for (let indice = 0; indice < dimensionArreglo; indice++) {
        nro = readlineSync.question("Indique el nombre que desea incorporar en la posicion "+indice+": ");
        nombrePersonas[indice] = nro;
    }
}

function mostrarValores(nombrePersonas, dimensionArreglo){
    console.log("****** contenido del arreglo ******");
    for (let indice = 0; indice < dimensionArreglo; indice++) {
        console.log("El nombre ingresado en la posicion ", indice, " es ", nombrePersonas[indice]);
    }
}

dimensionArreglo = controlarDimension();
cargarArreglo(nombrePersonas,dimensionArreglo);
mostrarValores(nombrePersonas,dimensionArreglo);