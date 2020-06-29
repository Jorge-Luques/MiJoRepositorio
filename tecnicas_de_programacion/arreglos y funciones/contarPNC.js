//Algoritmo Tipos de Números en Arreglo
/* 
• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
*/

let readlineSync = require('readline-sync');
let dimensionArreglo;
let vector1 = new Array ();

function controlarDimension(){
    let dimensionArreglo = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimensionArreglo < 1){
        dimensionArreglo = readlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimensionArreglo;
}

function cargarArreglo(){
    for (let indice = 0; indice < dimensionArreglo; indice++) {
        nro = readlineSync.question("Indique el numero que desea incorporar en la posicion "+indice+": ");
        vector1[indice] = nro;
    }
}

function contarTiposNumeros(arreglo){
    let cantPos = cantNeg = cantCeros = 0;
    for (let indice = 0; indice < dimensionArreglo; indice++ ){
        if (arreglo[indice] == 0){
            cantCeros++;
        }
        else{
            if (arreglo[indice] > 0){
                cantPos++;
            }
            else{
                cantNeg++;
            }
        }
    }
    console.log("Los elementos del arreglo se distribuyen asi:");
    console.log("contiene : ",cantPos," nros. positivos");
    console.log("contiene : ",cantNeg," nros. negativos");
    console.log("contiene : ",cantCeros," de ceros");
}

dimensionArreglo = controlarDimension();
cargarArreglo();
contarTiposNumeros(vector1);