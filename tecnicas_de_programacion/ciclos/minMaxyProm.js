// determina cual es numero maximo, el minimo y el promedio de los ingresados y corta cuando se ingresa un 0

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("ingrese un numero: ");
let maximo = numero;
let minimo = numero;
let suma = 0;
let cantidad = 0;
let prom = 0;
let num2 = numero;
while (num2 != 0){
    if (num2 > maximo && num2 !=0){
        maximo = num2;
    }
    if (num2 < minimo && num2 !=0){
        minimo = num2;
    }
    suma = suma + num2;
    cantidad++;
    num2 = readlineSync.questionInt("Ingresar un numero: ");
}
console.log("############  RESULTADOS OBTENIDOS  #########");
console.log("el numero maximo es: "+maximo);
console.log("el numero minimo es: "+minimo);
if (cantidad > 0){
    prom = suma / cantidad;
}   
console.log("el promedio es: "+prom);