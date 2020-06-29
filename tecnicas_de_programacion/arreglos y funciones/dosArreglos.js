//Algoritmo para 2 arreglos
/*
• Construya un algoritmo que tenga dos arreglos
uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el
usuario.
• Al final debe imprimir los valores por consola. 
*/

let readlineSync = require('readline-sync');
let arregloNombres = new Array (2);
let arregloNumeros = new Array (3);

function cargarArreglo(arreglo, mensaje, dim){
    for (indice = 0; indice < dim; indice++) {
        nombre = readlineSync.question("Ingrese el "+mensaje+" de la posicion "+indice+": ");
        arreglo[indice] = nombre;
    }
}

function mostrarArreglo(arreglo, mensaje, dim){
    console.log("****** contenido del arreglo ******");
    for (let indice = 0; indice < dim; indice++) {
        console.log("El ",mensaje, " ingresado en la posicion ", indice, " es ", arreglo[indice]);
    }
}


console.log("CARGAR EL ARREGLO DE NOMBRES -->");
cargarArreglo(arregloNombres,"nombre",2);
console.log("CARGAR EL ARREGLO DE NUMEROS -->");
cargarArreglo(arregloNumeros,"numero",3);
mostrarArreglo(arregloNombres,"nombre",2);
mostrarArreglo(arregloNumeros,"numero",3)