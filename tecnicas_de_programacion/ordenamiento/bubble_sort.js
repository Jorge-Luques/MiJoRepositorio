//Algoritmo de ordenamiento de BURBUJEO

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

function ord_burbuja(arreglo, cantidad){
    let i, j;
    for (i = 2 ; i < cantidad; i++) {
        for (j = 0 ; j < (cantidad - 1); j++) {
            if (comparar(arreglo, j, j+1) == 1 ) {
                intercambiar(arreglo, j, j+1) ;   
            }
        }
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
ord_burbuja(vect, lim);
console.log("El arreglo ordenado quedo:");
escribirEnUnaLinea(vect, lim);