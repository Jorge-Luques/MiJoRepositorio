//determina la cantidad y distribucion de numeros positivos hasta ingresar 0

let readlineSync = require('readline-sync');
let cantPtv = 0;
let cantIng = 0;
let numero, porcent;
numero = readlineSync.questionInt("Ingresar un numero: ");
while (numero != 0){
    if (numero > 0){
        cantPtv++;
    }
    cantIng++;
    numero = readlineSync.questionInt("Ingresar un numero: ");
}
if (cantIng > 0){
    porcent = (cantPtv/cantIng)*100;
    console.log("la cantidad de positivos es: "+cantPtv+", "+porcent+"% del total de ingresados");
}
else{
    console.log("No hay numeros ingresados");
}
