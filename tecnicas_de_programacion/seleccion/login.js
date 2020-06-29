//determina si un usuario puede acceder al sistema, comparando con el usuario y la clave registrados
let readlineSync = require('readline-sync');
let usuario = "Juan";
let clave = "claveJuan";
let userIngresado = readlineSync.question("Por favor ingrese el usuario: ");
let claveIngresada = readlineSync.question("Por favor ingrese la clave: ");
if (usuario == userIngresado && clave == claveIngresada){
 console.log("Bienvenido");
} else {
 console.log("El usuario o la clave son incorrectos");
}