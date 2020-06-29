// se evalua si un supermercado debe proporcionar un descuento si la compra fue en su mes aniversario
let readlineSync = require('readline-sync');
//cargo las variables que contienen la informacion del supermercado
let descuento = readlineSync.questionFloat("Ingresar el descuento en aniversario: ");
let mesAnivers = readlineSync.question("Ingresar el mes aniversario: ");
mesAnivers = mesAnivers.toUpperCase();
// controlo que sea un mes valido el ingresado para el descuento
switch (mesAnivers){
    case "ENERO":
        console.log("El mes aniversario es ENERO");
        break;
    case "FEBRERO":
        console.log("El mes aniversario es FEBRERO");
        break;
    case "MARZO":
        console.log("El mes aniversario es MARZO");
        break;
    case "ABRIL":
        console.log("El mes aniversario es ABRIL");
        break;
    case "MAYO":
        console.log("El mes aniversario es MAYO");
        break;
    case "JUNIO":
        console.log("El mes aniversario es JUNIO");
        break;
    case "JULIO":
        console.log("El mes aniversario es JULIO");
        break;
    case "AGOSTO":
        console.log("El mes aniversario es AGOSTO");
        break;
    case "SEPTIEMBRE":
        console.log("El mes aniversario es SEPTIEMBRE");
        break;
    case "OCTUBRE":
        console.log("El mes aniversario es OCTUBRE");
        break;
    case "NOVIEMBRE":
        console.log("El mes aniversario es NOVIEMBRE");
        break;
    case "DICIEMBRE":
        console.log("El mes aniversario es DICIEMBRE");
        break;
    default:
        console.log("Mes no valido!!! El mes aniversario va a ser SEPTIEMBRE");
        mesAnivers="SEPTIEMBRE";
        break;
}

//cargo las variables que se van a controlar
let precioUnit = readlineSync.questionFloat("Escriba valor del precio unitario: ");
let cantidad = readlineSync.questionInt("Indicar la cantidad de producos: ");
let mesActual = readlineSync.question("Indicar el mes actual de compra: ");
mesActual = mesActual.toUpperCase();
//muestro los valores ingresados
console.log("los valores ingresados son: ");
console.log("precio unitario: $"+precioUnit);
console.log("cantidad: "+cantidad);
console.log("mes actual: "+mesActual);
let precioCompra = precioUnit * cantidad;
//realizo el control de que se cumpla la condicion del mes aniversario
if (mesActual == mesAnivers){
    let valorDesc = (precioCompra * descuento)/100
    let precioConDescuento = precioCompra - valorDesc;
    console.log("El precio con descuento es de: $"+precioConDescuento);
}
else{
    console.log("No se aplica descuento");
    console.log("el valor de la compra es de: $"+precioCompra);
}