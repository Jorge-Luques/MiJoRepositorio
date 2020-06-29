//muestra las tablas de multiplicacion del valor ingresado, y hasta qué numero, tambien ingresado

let readlineSync = require('readline-sync');
let factor = readlineSync.questionInt("Ingresar el numero del que se veran las tablas: ");
let multiplicador = readlineSync.questionInt("Ingresar hasta que numero quiere ver: ");
if (factor > 0 && multiplicador > 0){
    for(let i=1; i <= multiplicador;i++){
       console.log(factor+" X "+i+" = "+(factor*i)); 
    }
}
else{
    console.log("No se mostraran tablas de numeros negativos o de 0");
}