// se cargan 2 valores por teclado e indica si un numero es multiplo del otro
let readlineSync = require('readline-sync');

let numero1 = cargarValor();
let numero2 = cargarValor();

function cargarValor(){
    let  valor = readlineSync.questionInt("Ingresar un numero: ");
    while (valor < 1){
        valor = readlineSync.questionInt("El numero debe ser positivo >0. Ingresar nuevamente: ");
    }
    return valor;
}

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

if (esMultiplo(numero1,numero2)){
    console.log("El numero "+numero1+" es multiplo de "+numero2);
}
else{
    console.log("NO ES MULTIPLO");
}