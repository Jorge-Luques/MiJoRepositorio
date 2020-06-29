/* Algoritmo de numero de Fibonacci
• Fibonacci es una serie numérica
• El Fibonacci de un numero n se calcula como:
   Fibonacci(n)=Fibonacci(n-1)+Fibonacci(n-2)
Excepto:
• Fibonacci(0)=0
• Fibonacci(1)=1
*/
let readlineSync = require('readline-sync');


function controlarNroFibo(){
    let numero = readlineSync.questionInt("Ingrese el numero: ");
    while (numero < 0){
        numero = readlineSync.questionInt("numero incorrecto. Ingrese nuevamente el numero: ");
    }
    return numero;
}

function numFibonacci(numero){
    if(numero <= 1){
        return numero;
    }
    else{
        return numFibonacci(numero-1)+numFibonacci(numero-2);
    }
}

function numFibonacci_ite(numero){
    let resultado = 0;
    let fibo1, fibo2;
    fibo1 = 1;
    for (let i=1; i <= numero; i++){
            console.log("iteracion:",i);
            fibo2 = resultado;
            console.log("fibo2:",fibo2);
            resultado = fibo1;
            console.log(resultado);
            fibo1 = fibo1 + fibo2;
            console.log("fibo1:",fibo1);
    }
    return resultado;
}

let num;
num = controlarNroFibo(num);
console.log("El resultado de Fibonacci es: ",numFibonacci(num));
console.log("El resultado de Fibonacci c/ iteracion es: ",numFibonacci_ite(num));