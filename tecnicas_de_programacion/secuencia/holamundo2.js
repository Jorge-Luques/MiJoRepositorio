//"este es un hola mundo en el que se elige el mensaje a imprimir x pantalla"
let readlineSync = require('readline-sync');
let mensaje = readlineSync.question("ingresar el mensaje a mostrar por pantalla: ");
console.log(mensaje);