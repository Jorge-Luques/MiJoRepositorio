//Algoritmo Arreglo Invertido
/* 
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
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

function mostrarValoresInvertidos(vector1){
    console.log("****** contenido del arreglo de forma invertida ******");
    console.log("la salida es: ");
    for (let indice = dimensionArreglo -1; indice >= 0 ; indice--) {
        console.log(vector1[indice]);
    }
}

/* 
// esta seria a forma de realizar la inversion del arreglo elemento por elemento
function invertirValoresArreglo(vector){
    let menor,mayor, cambio;
    menor = 0;
    mayor = dimensionArreglo -1;
    while (menor < mayor){
        console.log("cambio ",vector[menor]," con ",vector[mayor]);
        // hago el intercambio
        cambio = vector[menor]
        vector[menor] = vector[mayor];
        vector[mayor] = cambio;

        menor++;
        mayor--;
    }
    return vector;
} */

dimensionArreglo = controlarDimension();
cargarArreglo(vector1);
//vector1 = invertirValoresArreglo(vector1);
mostrarValoresInvertidos(vector1);