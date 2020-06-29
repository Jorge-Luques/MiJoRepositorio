// determina cual es numero maximo de los ingresados y corta cuando se ingresa un 0

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("ingrese un numero: ");
let maximo = numero;
let num2;
while (num2 != 0){
    num2 = readlineSync.questionInt("Ingresar un numero: ");
    if (num2 > maximo && num2 !=0){
        maximo = num2;
    }
}
console.log("el numero maximo es: "+maximo);