//Algoritmo que identifica a que mes se refiere utilizando arreglos
let readlineSync = require('readline-sync');

let nroMes = readlineSync.questionInt("Ingresar el numero de mes: ");
let arregloMes = new Array (12) ;
arregloMes[0] = "Enero";
arregloMes[1] = "Febrero";
arregloMes[2] = "Marzo";
arregloMes[3] = "Abril";
arregloMes[4] = "Mayo";
arregloMes[5] = "Junio";
arregloMes[6] = "Julio";
arregloMes[7] = "Agosto";
arregloMes[8] = "Septiembre";
arregloMes[9] = "Octubre";
arregloMes[10] = "Noviembre";
arregloMes[11] = "Diciembre";

function verMes(nroMes){
    if(nroMes >= 1 && nroMes <= 12){
        console.log("El mes elegido es: "+arregloMes[nroMes-1]);
    }
    else{
        console.log("No es un mes valido!!");
    }
}

verMes(nroMes);