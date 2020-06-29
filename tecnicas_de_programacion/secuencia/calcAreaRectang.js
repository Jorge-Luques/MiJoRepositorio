//  se utiliza para calcular el area de un rectangulo
//  con los valores de BASE y ALTURA del mismo cargados por el usuario
let readlineSync = require('readline-sync');
let base = readlineSync.questionInt("ingresar el valor de la base ");
console.log("El valor de la base es de: "+base);
let altura = readlineSync.questionInt("ingresar el valor de la altura ");
console.log("El valor de la altura es de: "+altura);
let resultado= base * altura;
console.log("El Area del rectangulo es de: "+resultado);