// indica que porcentaje aumento un producto, basado en el precio anterior y posterior al aumento
let readlineSync = require('readline-sync');
let precioViejo = readlineSync.questionFloat('Ingresar el precio antes de aumentar: ');
let precioActual = readlineSync.questionFloat('Ingresar el precio luego de aumentar: ');
let aumento = precioActual - precioViejo;
aumento = (aumento / precioViejo) * 100;
console.log("el aumento de precio es del "+aumento+" %");