// se calcula el tiempo total de carrera para un auto durante 4 vueltas y el promedio por vuelta
// sin iteracion
let readlineSync = require('readline-sync');
let vuelta1 = readlineSync.questionFloat("ingresar el tiempo de la vuelta 1= ");
let vuelta2 = readlineSync.questionFloat("ingresar el tiempo de la vuelta 2= ");
let vuelta3 = readlineSync.questionFloat("ingresar el tiempo de la vuelta 3= ");
let vuelta4 = readlineSync.questionFloat("ingresar el tiempo de la vuelta 4= ");
let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("El tiempo total de carrera es de: "+tiempoTotal+" seg.");
let tiempoProm = tiempoTotal/4;
console.log("El tiempo promedio de vuelta es de: "+tiempoProm+" seg.");