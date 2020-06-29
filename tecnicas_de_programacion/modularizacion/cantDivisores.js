// se devuelve la cantidad de divisores que posee un numero
let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingresar el numero: ");
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

if (numero > 0){
    console.log(numero+" tiene "+cantidadDivisores(numero)+" de divisores");
}
else{
    console.log("No se realizara ningun calculo...");
}
