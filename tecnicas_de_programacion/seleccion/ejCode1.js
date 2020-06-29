/* determina que si el primer nro. ingresado es menor que 0, 
entonces hace el producto entre los 3 numeros ingresados 
en caso contrario, hace la suma entre los 3 nros. ingresados */
let readlineSync = require('readline-sync');
let no1 = readlineSync.questionInt("Ingrese el primer: ");
let no2 = readlineSync.questionInt("Ingrese el segundo: ");
let no3 = readlineSync.questionInt("Ingrese el tercer: ");
let result;
if (no1 < 0) {
result = no1*no2*no3;
} else {
result = no1+no2+no3;
}
console.log(result);