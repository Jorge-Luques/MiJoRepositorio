// se evalua si el numero ingresado es par o impar y si es cero, informarlo por pantalla
let readlineSync = require('readline-sync');
let nro1 = readlineSync.questionInt('Escriba el numero: ');
if (nro1 == 0){
    console.log("el numero ingresado es CERO");
}
else{
    if ((nro1 % 2)==0){
        console.log("el numero ingresado es PAR");
    }
    else{
        console.log("el numero ingresado es IMPAR"); 
    }
}