/* Algoritmo de numero factorial
• el factorial de 0 es 1
• El factorial de un numero n se calcula como:
   factorial(n) => n! = n * (n-1)! 
*/
let readlineSync = require('readline-sync');


function controlarNroPositivo(){
    let numero = readlineSync.questionInt("Ingrese el numero: ");
    while (numero < 0){
        numero = readlineSync.questionInt("numero incorrecto. Ingrese nuevamente el numero: ");
    }
    return numero;
}

function calcularFactorialRec(n) {
    let resultado = 1;
    if (n == 0) {
        resultado = 1;
    } 
    else {
        resultado = n * calcularFactorialRec(n-1);
    };
    return resultado;
}

let calcularFactorialSec=(n)=>{
    let resultado = 1;
    let indice = 1;
    for(indice;indice <= n; indice++) {
        resultado = resultado * indice;
    };
    return resultado;
}

let num = controlarNroPositivo();
console.log("el resultado del factorial es: ",calcularFactorialRec(num));
console.log("el resultado del factorial  SEC es: ",calcularFactorialSec(num));