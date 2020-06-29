// se evalua si el numero cargado por pantalla es MAYOR que 20
let readlineSync = require('readline-sync');
let nroDeseado = readlineSync.questionInt('Escriba el numero que desea verificar si es mayor o no a 20: ');
if (nroDeseado > 20) {
console.log('El número es mayor a 20: ' + nroDeseado );
} else {
console.log('El número es menor o igual a 20: ' + nroDeseado );
}