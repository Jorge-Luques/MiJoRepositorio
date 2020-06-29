//Algoritmo Arreglo Invertido
/* 
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero de forma recursiva
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

function cargarArreglo(vector1){
    for (let indice = 0; indice < dimensionArreglo; indice++) {
        nro = readlineSync.question("Indique el numero que desea incorporar en la posicion "+indice+": ");
        vector1[indice] = nro;
    }
}

let  imprimirArregloRec=(arreglo,indice, largo)=> {
    if (indice < largo) {
    console.log("posicion ", indice, " tiene:",
    imprimirArregloRec(arreglo,indice+1,largo));
    };
    return arreglo[indice-1];
}

dimensionArreglo = controlarDimension();
cargarArreglo(vector1);
imprimirArregloRec(vector1,0, dimensionArreglo);