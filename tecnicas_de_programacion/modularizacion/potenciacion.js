// se cargan 2 valores por teclado (base y exponente) y se calcula la potencia con exponente positivo 
let readlineSync = require('readline-sync');

let base = readlineSync.questionInt("Ingresar el valor de la base: ");
let exponente = readlineSync.questionInt("Ingresar el exponente: ");

// no lo pude incluir dentro de ua funcion porque el parametro no sale modificado
while (exponente < 0){
    exponente = readlineSync.questionInt("Numero neagtivo!!! Ingresar nuevamente el exponente: ");
}


 // version recursiva
 function calcularPotencia(base, exponente){
     if (exponente == 0)
        return 1;
    else
        return base * calcularPotencia(base, exponente -1);
 }

 // version iterativa
 function calcularPot(base, exponente){
    let resultado = 1;
    for (let i=1; i <= exponente; i++){
        resultado = resultado * base;
    }
    return resultado;
 }

 
 console.log("El resultado de la potencia es: "+calcularPotencia(base, exponente));
 console.log("El resultado de "+base+" elevado a la "+exponente+" es: "+calcularPot(base, exponente));