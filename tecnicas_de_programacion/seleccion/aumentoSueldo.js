//se aplica un aumento de sueldo o no, de acuerdo al salario actual que recibe

//Declaro variables
let readlineSync = require('readline-sync');
let sueldo;
let sueldoConAumento;

sueldo = readlineSync.questionFloat("Ingresar el sueldo recibido: $");
if (sueldo > 0){
    if (sueldo <= 20000){  // rango menor o igual que 20000
        if (sueldo > 15000){
            sueldoConAumento = sueldo * 1.1;
            console.log("actualmente cobra "+sueldo+"% y ahora el sueldo sera de $"+sueldoConAumento);
        }
        else{ //es menor o igual que 15000
            sueldoConAumento = sueldo * 1.2;
            console.log("actualmente cobra "+sueldo+"% y ahora el sueldo sera de $"+sueldoConAumento);
        }
    }
    else{ //es mayor que 20000
        if (sueldo <= 25000){
            sueldoConAumento = sueldo * 1.05;
            console.log("actualmente cobra "+sueldo+"% y ahora el sueldo sera de $"+sueldoConAumento);
        }
        else{ //es mayor que 25000 y no recibe aumento
            console.log("NO se le otorga un aumento y el sueldo seguira de $"+sueldo);
        }
    }
}
else {
    console.log("sueldo no valido para calcular el aumento");
}