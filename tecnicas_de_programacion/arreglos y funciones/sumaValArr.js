//Algoritmo Suma Elementos Arreglo
/* 
• Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario
*/

readlineSync = require('readline-sync');
let dimension;
let numeros = new Array(dimension);
function controlarDimension(){
    let dimensionArreglo = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimensionArreglo < 1){
        dimensionArreglo = readlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimensionArreglo;
}

function cargarArreglo(arreglo,dimensionArreglo){
    for (let indice = 0; indice < dimensionArreglo; indice++) {
        nro = readlineSync.questionInt("Indique el numero que desea incorporar en la posicion "+indice+": ");
        arreglo[indice] = nro;
    }
}

function mostrarValores(arreglo, dimensionArreglo){
    console.log("****** contenido del arreglo ******");
    for (let indice = 0; indice < dimensionArreglo; indice++) {
        console.log("El numero ingresado en la posicion ", indice, " es ",arreglo[indice]);
    }
}

function sumarElementos(arreglo, dimensionArreglo){
    resultado = 0;
    for(let i=0; i < dimensionArreglo; i++){
        resultado += arreglo[i]; 
    }
    return resultado;
}

dimension = controlarDimension();
cargarArreglo(numeros,dimension);
mostrarValores(numeros,dimension);
console.log("la suma de los elementos del arreglo da: ",sumarElementos(numeros,dimension));