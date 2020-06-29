/* Algoritmo de ranking de facturacion
• Una empresa quiere saber quienes fueron los clientes
que más facturaron en un mes
• Sean dos arreglos, uno para los nombres de los
clientes y otro para los montos de facturación (enteros)
• La cantidad de clientes es fija (10)
• Mostrar por pantalla los 5 clientes que más facturaron
y los montos
• Pensar en cómo cargar la información para facilitar la
escritura del ranking
*/

let readlineSync = require('readline-sync');

let cantidad = 10;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);


function cargar_ordenado(clies, facts, cantidad){
    let cliente;
    let fact;
    let numCliente;
    let i, j;
    //Cargo ordenado, uno por uno
    console.log ("Cargando los arreglos de forma ordenada" );
    for (numCliente = 0; numCliente < cantidad; numCliente++ ) {
        cliente = readlineSync.question("Cliente " + (numCliente + 1) + ": ");
        fact = readlineSync.questionInt("Facturacion " + (numCliente + 1) + ": ");
        i = 0;
        while (i < numCliente && facturacion[i] > fact) {
            i++;
        }
        for (j = numCliente; j > i; j--) {
            clies[j] = clies[j-1];
            facts[j] = facts[j-1];
        }
        clies[i] = cliente ;
        facts[i] = fact ;
    }
}

function mostrar_mejores(){
    for (let posicion = 0; posicion < 3; posicion++) {
        console.log ("(",posicion,") ",clientes[posicion],
        "[",facturacion[posicion],"] ");
    }
}

cargar_ordenado(clientes, facturacion, cantidad);
mostrar_mejores();