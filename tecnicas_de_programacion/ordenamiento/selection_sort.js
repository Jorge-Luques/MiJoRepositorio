//Algoritmo de ordenamiento de SELECCION

function escribirEnUnaLinea(arreglo, cantidad) {
    let i;
    let vector = "[ " ;
    for (i = 0 ; i<cantidad; i++) {
        vector = vector + arreglo[i] + " " ;
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
    }
}

let cargar=(arr,cant,rand)=>{
    for (let i=0; i<cant; i++){
        arr[i] = Math.floor(Math.random()*rand);
    }
}

let lim = 10;
let vect = new Array(lim);
cargar(vect, lim, 100);
console.log("El arreglo desordenado es:")
escribirEnUnaLinea(vect, lim);
ord_seleccion(vect, lim);
console.log("El arreglo ordenado quedo:");
escribirEnUnaLinea(vect, lim);