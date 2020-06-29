//Algoritmo Completar Arreglo
/*
• Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99
• Para obtener números aleatorios crear una función
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.
*/

let arregloCompletar = new Array (10);
let indice;

function cargarArr(arreglo){
    for (indice = 0; indice < 10; indice++) {
        arreglo[indice] = Azar(100);
    }
}

function mostrarArreglo(arregloC){
    for (indice = 0; indice < 10; indice++) {
        console.log ("El numero en la posicion ", indice, " es: ", arregloC[indice]);
    }
}

function Azar (tope) {
    return Math.floor(Math.random()*tope);
}

cargarArr(arregloCompletar);
mostrarArreglo(arregloCompletar);