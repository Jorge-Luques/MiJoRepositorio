// se evaluan las condiciones para saber si se puede realizar un viaje nocturno en vehiculo
let readlineSync = require('readline-sync');
let lucesEncendidas = true;
let litrosNafta = readlineSync.questionInt("introduzca la cantidad de litros cargados: ");
if (lucesEncendidas && litrosNafta > 20) {
 console.log('Puede manejar de noche');
}
else{
    console.log("No tiene suficiente nafa para realizar el viaje");
}