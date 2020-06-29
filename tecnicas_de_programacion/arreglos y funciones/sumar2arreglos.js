//Algoritmo Sumar Dos Arreglos
/* 
• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/

readlineSync = require('readline-sync');
const dim = 6;
let valores1 = new Array();
let valores2 = new Array();
let vSuma = new Array();


function cargarArreglo(arreglo){
    for (let indice = 0; indice < dim; indice++) {
        nro = readlineSync.questionInt("Indique el numero que desea incorporar en la posicion "+indice+": ");
        arreglo[indice] = nro;
    }
}

function mostrarValores(arreglo){
    console.log("****** contenido del arreglo  vSuma ******");
    for (let indice = 0; indice < dim; indice++) {
        console.log("El numero ingresado en la posicion ", indice, " es ",arreglo[indice]);
    }
}

function inicArreglo(arreglo){
    for (let index = 0; index < dim; index++){
        arreglo[index] = 0;
    }
    return arreglo;
}

function sumarArreglos(valores1, valores2){
    let resultado = new Array();
    for(let i=0; i < dim; i++){
        resultado[i] += valores1[i] + valores2[i]; 
    }
    return resultado;
}

console.log("---- cargar el primer arreglo ------");
cargarArreglo(valores1);
console.log("---- cargar el segundo arreglo ------");
cargarArreglo(valores2);
vSuma = sumarArreglos(valores1,valores2)
mostrarValores(vSuma);