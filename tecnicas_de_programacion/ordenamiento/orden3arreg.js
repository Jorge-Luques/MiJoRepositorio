// Algoritmo ordenar arreglos por criterios
/*
• Dados un arreglo de texto y dos arreglos de enteros de tamaño n:
    • nombres Como Texto
    • años Como Entero y altura Como Entero
• Ordénelos los tres vectores a la vez según los años, y en caso que haya
un empate, utilice la altura para desempatar
• Tener en cuenta que los intercambios tienen que cambiar los elementos de
los tres vectores a la vez
*/

let readlineSync = require('readline-sync');

let dim = 4;
let nombres = new Array(dim);
let anios = new Array(dim);
let alturas = new Array(dim);

// function edad_azar(edad){
//     edad = Math.floor(Math.random()*30)+18;
//     return edad;
// }

// function altura_azar(altor){
//     altor = Math.floor(Math.random()*40)+150;
//     return altor;
// }

let cargar_Arreglos=(nombres, anios, alturas)=>{
    let name;
    let age;
    let height;
    for(let i=0; i < dim; i++){
        name = readlineSync.question("ingresar nombre: ");
        age = readlineSync.questionInt('ingresar edad: ');   //edad_azar(age);
        height = readlineSync.questionInt('ingresar altura: ');   //altura_azar(height);
        nombres[i] = name;
        anios[i] = age;
        alturas[i] = height;
        //console.log("se cargo ",name,"con edad ",age," y altura ",height);
    }
}

function escribirEnUnaLinea(nombres, anios, alturas, cantidad) {
    let i;
    let vector = "[ " ;
    for (i = 0 ; i<cantidad; i++) {
        vector = vector +"Nombre: " +nombres[i] + " Edad: "+anios[i]+" Altura: "+alturas[i]+"\n" ;
    }
    vector +="]"
    console.log (vector);
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

function ord_seleccionLos3(nombres, anios, alturas, cantidad){
    let i, j, posicion;
    for (i = 0; i < (cantidad-1); i++) {
        posicion = i;
        for (j = i + 1; j < cantidad; j++) {
            if (comparar(anios, posicion, j) == 1) {
                posicion = j;
            }
            if (comparar(anios, posicion, j) == 0){// son iguales
                if (comparar(alturas, posicion, j) == 1){
                    posicion = j;
                }
            }
        }
        intercambiar(nombres, i, posicion);
        intercambiar(anios, i, posicion);
        intercambiar(alturas, i, posicion);
    }
}


cargar_Arreglos(nombres, anios, alturas);
escribirEnUnaLinea(nombres,anios,alturas,dim);
ord_seleccionLos3(nombres, anios, alturas, dim);
escribirEnUnaLinea(nombres,anios,alturas,dim);