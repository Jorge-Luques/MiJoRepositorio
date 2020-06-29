// determina si el numero ingresado es mayor o igual que 18
let readlineSync = require('readline-sync');
let e = readlineSync.questionInt("Introduce ");
if (e >= 18) {
console.log("Es " + e);
} else {
console.log("No es " + e);
}