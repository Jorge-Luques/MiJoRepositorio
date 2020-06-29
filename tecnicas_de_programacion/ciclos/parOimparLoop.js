// se evalua si el numero ingresado es par o impar y si es cero o negativo, hay que volver a ingresar el numero
let readlineSync = require('readline-sync');
let nro = readlineSync.questionInt('Escriba el numero: ');
while (nro <= 0){
     nro = readlineSync.questionInt('escriba otro numero: ');
}
if (nro > 0){
    if ((nro % 2)==0){
        console.log("el numero ingresado es PAR");
    }
    else{
        console.log("el numero ingresado es IMPAR"); 
    }
}