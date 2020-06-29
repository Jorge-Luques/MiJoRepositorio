//Algoritmo fin de año
/* 
 Armar un algoritmo que permita calcular los dias que faltan para que termine el año, teniendo en cuenta 
 que el año ingresado puede ser bisiesto
*/

let readlineSync = require('readline-sync');

let arregloMeses = [31,28,31,30,31,30,31,31,30,31,30,31];

function devolverCantDias(dia, mes, anio){
    let restoMes; // variable para guardar la cantidad de dias q faltan para el mes siguiente
    restoMes = arregloMeses[mes-1] - dia;
    let cantDias = restoMes;
    if (mes == 2 && esBisiesto(anio)){
        cantDias++; // agrego un dia mas xq el mes es febrero y el año es bisiesto
    }
    if (mes+1 < arregloMeses.length){
        for (let contMes = mes; contMes < arregloMeses.length; contMes++){
            if (contMes == 1 && esBisiesto(anio)){ //caso en sea febrero y sea año bisiesto
                console.log("agrego un dia mas xq es bisiesto");
                cantDias++;
            }
            cantDias += arregloMeses[contMes];
        }
    }
    return cantDias;
}

let controlarMes=(mes)=>{
    mes = readlineSync.questionInt('ingresar el nro de mes: ');
    while (mes < 1 || mes > 12){
        mes = readlineSync.questionInt('nro de mes incorrecto, ingresar nuevamente el mes: ');
    }
    return mes;
}

let controlarDia=(dia)=>{
    dia = readlineSync.questionInt('ingresar el nro de dia: ');
    while (dia < 1 && dia > arregloMeses[mm]){
        dia = readlineSync.questionInt('nro de dia incorrecto, ingresar nuevamente el dia: ');
    }
    return dia;
}

function esBisiesto(anio){
    if ((anio % 4 == 0) && (anio % 100 != 0 || anio % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

let aaaa = readlineSync.questionInt('ingresar el anio: ');
let mm;
let dd;

mm = controlarMes(mm);
dd= controlarDia(dd);

console.log('esta cantidad de dias son los que faltan para fin del año: ',devolverCantDias(dd,mm,aaaa));