//Algoritmo Producto Escalar
/* 
• Cargue dos arreglos de dimensión N números
(la cantidad es ingresada por el usuario)
• Calcule el producto escalar entre los dos arreglos:
    A * B = a1b1 + a2b2 + a3b3...
*/

let readlineSync = require('readline-sync');
let arreglo1 = new Array();
let arreglo2 = new Array();
let arreglo3 = new Array();
let arreglo4 = new Array();
let arregloRes = new Array();
let dimension;

function controlarDimension(dimension){
    dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimension < 1){
        dimension = readlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimension;
}

function cargarArreglo(arreglo){
    let nro = 0;
    for (indice = 0; indice < dimension; indice++) {
        nro = readlineSync.questionInt("Indique el numero que desea incorporar en la posicion "+indice+": ");
        arreglo[indice] = nro;
    }
}

let multipArreglos = (vector1,vector2,vResulMul)=>{
	for (let i=0;i < dimension; i++){
		vResulMul[i] = vector1[i] * vector2[i];
	}
}

function multip4arreglos(){
    let arrAuxMul1 = [];
    let arrAuxMul2 = [];
    multipArreglos(arreglo1,arreglo2,arrAuxMul1);
    multipArreglos(arreglo3,arreglo4,arrAuxMul2);
    multipArreglos(arrAuxMul1, arrAuxMul2, arregloRes);
}

function mostrarValores(arreglo){
    console.log("****** contenido del arreglo resultado******");
    for (let indice = 0; indice < dimension; indice++) {
        console.log("contenido en la posicion ", indice, " es ", arreglo[indice]);
    }
}

dimension = controlarDimension(dimension);
console.log("###### cargar ARREGLO nro 1 ######");
cargarArreglo(arreglo1);
console.log("###### cargar ARREGLO nro 2 ######");
cargarArreglo(arreglo2);
console.log("###### cargar ARREGLO nro 3 ######");
cargarArreglo(arreglo3);
console.log("###### cargar ARREGLO nro 4 ######");
cargarArreglo(arreglo4);
multip4arreglos();
mostrarValores(arregloRes);