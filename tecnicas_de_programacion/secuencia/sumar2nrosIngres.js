// se calcula el resultado de una suma entre 2 valores enteros cargados por el usuario
let readlineSync = require('readline-sync');
let sumando1 = readlineSync.questionInt("ingresar el primer valor a sumar ");
console.log("El valor del sumando1 es de: "+sumando1);
let sumando2 = readlineSync.questionInt("ingresar el segundo valor a sumar ");
console.log("El valor del sumando2 es de: "+sumando2);
let resultado= sumando1 + sumando2;
console.log("El resultado de la suma es de: "+resultado);