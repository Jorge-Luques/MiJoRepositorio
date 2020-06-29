// se crea un funcion para saber si el numero ingresado es primo segun la cantidad de divisores q tiene
// y para ponerla en practica, se muestran todos los numeros primos entre 1 y 100
let readlineSync = require('readline-sync');

function esMultiplo(numero1, numero2){
    if (numero2 > numero1){
        return false;
    }
    else{
        if (numero1 % numero2 == 0){
            return true;
        }
        else{
            return false;
        }
    }
}

function cantidadDivisores(numero){
    let cant=0;
    for(let i=1;i <= numero; i++){
        if (esMultiplo(numero,i)){
            cant++;
           // console.log(numero+" es multiplo de "+i);
        }
    }
    return cant;
}

function esPrimo(numero){
   if (cantidadDivisores(numero) <= 2){
       return true;
   }
   else{
       return false;
   }
}

console.log("SE MOSTRARN TODOS LOS NUMEROS PRIMOS ENTRE 1 y 100")
for (let i=1; i<=97;i++){
    if (esPrimo(i)){
        console.log(i+" es numero PRIMO");
    }
}