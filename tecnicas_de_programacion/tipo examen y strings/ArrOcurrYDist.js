//Algoritmo Repeticiones y distancias entre si de un Arreglo
/* 
• Construir un algoritmo que muestre las posiciones de las ocurrencias o repeticiones de un elemento
dentro de un arreglo de tamaño N
• Adicionalmente se muestra la distancia entre una ocurrencia y la siguiente
• Los elementos (números) del arreglo son ingresados por el usuario
*/

readlineSync = require('readline-sync');
let dimension;
let numeros = new Array(dimension);
function controlarDimension(dimensionArreglo){
    dimensionArreglo = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimensionArreglo < 1){
        dimensionArreglo = readlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimensionArreglo;
}

function cargarArreglo(arreglo){
    for (let indice = 0; indice < dimension; indice++) {
        nro = readlineSync.questionInt("Ingresar un valor: ");
        arreglo[indice] = nro;
    }
}

let devolverPosicDeOcurrencias=(arreglo, elem)=>{
    let posOcurrencias = [];
    let indexPO = 0;
    for (let indice = 0; indice < arreglo.length; indice++){
        if (arreglo[indice] == elem){
            posOcurrencias[indexPO] = indice;
            indexPO++;
        }
    }
    return posOcurrencias;
}

let devolverDistOcurrencias=(arreglo)=>{
    let distancias = [];
    distancias[0] = arreglo[0]; // el primer elemento de distancias es el mismo el del arreglo
    for (let indice = 0;indice < arreglo.length; indice++ ){
        if (indice+1 < arreglo.length){
            distancias[indice+1] = arreglo[indice+1] - arreglo[indice];
        }
    }
    return distancias;
}

function mostrarValores(arreglo){
    console.log("****** contenido del arreglo ******");
    for (let indice = 0; indice < arreglo.length; indice++) {
        console.log("Arreglo [", indice, "] = ",arreglo[indice]);
    }
}

dimension = controlarDimension(dimension);
cargarArreglo(numeros);
let elem = readlineSync.questionInt("ingresar el valor del cual desea saber sus repeticiones: ");
let repeticiones = devolverPosicDeOcurrencias(numeros, elem);
let distRepet = devolverDistOcurrencias(repeticiones);
mostrarValores(repeticiones);
mostrarValores(distRepet);