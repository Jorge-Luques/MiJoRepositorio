//Algoritmo Suma Elementos Arreglo
/* 
• Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario
*/

import * as ReadlineSync from './node_modules/readline-sync';
let dimension: number;
let numeros: number[] = [];

function controlarDimension(): number{
    let dimensionArreglo: number;
    dimensionArreglo = ReadlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimensionArreglo < 1){
        dimensionArreglo = ReadlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimensionArreglo;
}

function cargarArreglo(arreglo: number[], dimensionArreglo:number): void{
    let nro: number;
    nro = 0;
    for (let indice = 0; indice < dimensionArreglo; indice++) {
        nro = ReadlineSync.questionInt("Indique el numero que desea incorporar en la posicion "+indice+": ");
        arreglo[indice] = nro;
    }
}

function mostrarValores(arreglo: number[], dimensionArreglo: number){
    console.log("****** contenido del arreglo ******");
    for (let indice = 0; indice < dimensionArreglo; indice++) {
        console.log("El numero ingresado en la posicion ", indice, " es ",arreglo[indice]);
    }
}

function sumarElementos(arreglo, dimensionArreglo){
    let resultado: number;
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