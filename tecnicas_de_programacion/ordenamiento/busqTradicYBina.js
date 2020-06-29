//Algoritmo de facturacion y busqueda
/*
• La misma empresa ahora quiere buscar la
facturación de un cliente dado
• Leer el nombre del cliente que interesa
• Pensar cómo optimizar la búsqueda con el ordenamiento
*/

let readlineS = require('readline-sync');

function buscarTradicional (valorBuscado, a, lim) {
    let i;
    let posicion = -1;
    i = 0;
    while (i < lim && posicion == -1) {
        //console.log("comparar ",valorBuscado," con ",a[i]);
        if (a[i] == valorBuscado) {
            posicion = i;
        } 
        i++;
    }
    return posicion;
}

function cargarClientes(clientes, facturacion, cantidad) {
    let cliente, fact, numCliente;
    for (numCliente=0; numCliente<cantidad; numCliente++) {
        cliente = readlineS.question("Cliente " + (numCliente + 1) + ": ");
        fact = readlineS.questionInt("Facturacion "+ (numCliente + 1) + ": ");
        clientes[numCliente] = cliente;
        facturacion[numCliente] = fact;
    }
}

function imprimirCliente (posicion, buscado, clientes, facturacion) {
    if (posicion == -1) {
        console.log ("El cliente "+buscado+ " no pudo ser encontrado");
    } else {
        console.log ("El cliente "+ clientes[posicion]+
        " con facturacion "+ facturacion[posicion]+
        " esta en la posicion "+ (posicion+1));
    }
}

function escribirEnUnaLinea(arregCl, arregFc, cantidad) {
    let i;
    let vector = "[ " ;
    for (i = 0 ; i<cantidad; i++) {
        vector = vector +"Cliente: " +arregCl[i] + " con Facturacion: "+arregFc[i]+"\n" ;
    }
    vector +="]"
    console.log (vector);
}
//---------------------------------------------------------
function busquedaBinaria(valorBuscado, a, izq, der) {
    let posicion;
    if (izq <= der) {
        let medio;
        medio = Math.floor ((izq + der) / 2);
        if (valorBuscado == a[medio]) {
            posicion = medio;
        } else if (valorBuscado < a[medio]) {
            posicion = busquedaBinaria(valorBuscado, a, izq, medio - 1);
        } else {
            posicion = busquedaBinaria(valorBuscado, a, medio + 1, der);
        }
    }
    else {
        posicion = -1
    }
    return posicion;
}

function intercambiar(arreglo, i, j) {
    let aux;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
            comparacion = 1;
    }
    return comparacion;
}

function ord_seleccion(arreglo, cantidad){
    let i, j, posicion;
    for (i = 0; i < (cantidad-1); i++) {
        posicion = i;
        for (j = i + 1; j < cantidad; j++) {
            if (comparar(arreglo, posicion, j) == 1) {
                posicion = j;
            }
        }
        intercambiar(arreglo, i, posicion);
        intercambiar(clientes, i ,posicion);
    }
}

let cantidad = 4;
let posicion;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);
//Busqueda tradicional
console.log("Busqueda tradicional");
cargarClientes(clientes, facturacion, cantidad);
escribirEnUnaLinea(clientes, facturacion, cantidad);
let buscado = readlineS.question("Ingresar el nombre  del cliente: ");
posicion = buscarTradicional(buscado, clientes, cantidad);
imprimirCliente(posicion, buscado, clientes, facturacion);

//Busqueda binaria
/*BUSCO LA MEJOR FACTURACION UTILIZANDO BUSQUEDA BINARIA */
ord_seleccion(facturacion,cantidad);
let buscarFact = readlineS.questionInt("introduzca la facturacion a buscar: ");
let posFact = busquedaBinaria(buscarFact,facturacion,0,cantidad);
imprimirCliente(posFact, buscarFact, clientes, facturacion);
escribirEnUnaLinea(clientes, facturacion, cantidad);
