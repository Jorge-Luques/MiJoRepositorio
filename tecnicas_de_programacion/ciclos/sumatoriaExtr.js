//devuelve la sumatoria entre los valores maximo y minimo ingresados por teclado

let readlineSync = require ('readline-sync');
let prim, segu;
prim = readlineSync.questionInt("Ingresar el primer extremo: ");
segu = readlineSync.questionInt("Ingresar el segundo extremo: ");
let sumatoria = 0;
let index = prim;
if (prim > segu){
    let aux = prim;
    prim = segu;
    segu = aux;
}

while (index <= segu){
        sumatoria = sumatoria + index;
        index++;
}
console.log("la suma total es de: "+sumatoria);