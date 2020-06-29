// se calcula un porcentaje de descuento al precio de un producto
let readlineSync = require('readline-sync');
let precio = readlineSync.questionFloat("ingresar el valor del precio. $");
console.log("El valor del precio es de: $"+precio);
let descuento = readlineSync.questionFloat("ingresar el porcentaje de decuento a aplicar ");
console.log("El valor del descuento es de: "+descuento+"%");
descuento = descuento/100;
let valorDeDescuento = precio * descuento; // contiene el ahorro del precio
console.log("El cliente obtiene un ahorro de: $"+valorDeDescuento);
let precioFinal = precio - valorDeDescuento;
console.log("El precio con el descuento aplicado es de: $"+precioFinal); 