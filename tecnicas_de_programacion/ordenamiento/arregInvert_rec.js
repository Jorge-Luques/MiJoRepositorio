//Algoritmo Arreglo Invertido
/* 
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Invierte los números del arreglo de forma recursiva
*/

let readlineSync = require('readline-sync');
let dimensionArreglo;
let vector1 = new Array (dimensionArreglo);

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

let intercambiar =(arreglo, pos1, pos2)=>{
    let aux = arreglo[pos1];
    arreglo[pos1] = arreglo[pos2];
    arreglo[pos2] = aux;
}

function invertirArreglo_Rcs(arreglo,ini,fin){
    if(ini < fin){
        intercambiar(arreglo, ini, fin);
        invertirArreglo_Rcs(arreglo, ini+1, fin-1);
    }
}

function mostrarValores(vector1){
    console.log("****** contenido del arreglo ******");
    console.log("la salida es: ");
    let strArr = "[ "
    for (let indice = 0; indice < vector1.length ; indice++) {
        strArr += vector1[indice]+" ";
    }
    strArr += "]";
    console.log(strArr);
}

dimensionArreglo = controlarDimension(dimensionArreglo);
cargarArreglo(vector1);
invertirArreglo_Rcs(vector1, 0, vector1.length -1);
mostrarValores(vector1);