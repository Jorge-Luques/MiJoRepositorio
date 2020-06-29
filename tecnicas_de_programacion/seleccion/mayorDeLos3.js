// se evalua cual de los tres numeros ingresados es el mayor de todos
let readlineSync = require('readline-sync');
let nro1 = readlineSync.questionInt('Escriba el primer numero: ');
let nro2 = readlineSync.questionInt('Escriba el segundo numero: ');
let nro3 = readlineSync.questionInt('Escriba el tercer numero: ');
console.log("los valores ingresados son: "+nro1+" , "+nro2+" y "+ nro3);
let mayor = nro1;
if (mayor < nro2){
    mayor = nro2;
}
if (mayor < nro3){
    mayor = nro3;
}
console.log("El mayor de los 3 numeros ingresados es: "+mayor);