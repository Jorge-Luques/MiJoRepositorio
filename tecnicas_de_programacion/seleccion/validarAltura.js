// determina si una persona puede acceder a un juego si supera o mide la altura permitida
let readlineSync = require('readline-sync');
let alturaPermitida = 1.3;
let alturaPersona = readlineSync.questionFloat("Indique la altura de la persona: ");

if (alturaPersona <= alturaPermitida) {
console.log("La persona no puede subir al juego");
} else {
console.log("La persona puede subir al juego");
}