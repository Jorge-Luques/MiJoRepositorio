/* Escriba un programa que calcule la probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato ingresado por al usuario)

lo aplico sin utilizar funcion de potenciacion para usar ciclos!!
 */

let readlineSync = require('readline-sync');
let cantDados = readlineSync.questionInt("Ingresar la cantidad de dados... ");
if (cantDados >= 1){
    let probabilidad = 0;
    let divisor = 1; //inicializo en 1 porque le voy a aplicar multiplicaciones
    for (let i=1; i<= cantDados; i++){
        divisor = divisor * 6;
    }
    probabilidad = 1 / divisor;
    console.log("la probabilidad de sacar "+ cantDados+" seis en la misma cantidad de dados es: "+ probabilidad);
}
else{
    console.log("cantidad de dados invalida para calcular la probailidad!!");
}
