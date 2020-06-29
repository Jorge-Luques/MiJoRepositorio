//Comprobar y controlar el funcionamiento de funciones poco demostrativas
/* 
------ Son ejercicios de tipo examen --------------------
*/

readlineSync = require('readline-sync');
const dim = 6;
let valores1 = new Array(dim);

function a(v){ //devuelve un arreglo con todos los numeros pares que tiene el arrglo v
    let r = [];
    let b=0;
    for(let i=0; i<v.length; i++){
        if(v[i] % 2==0){
            r[b] = v[i];
            b++;
        }
    }
    return r;
}

function b(v,m){ 
//devuelve un arreglo con todos los numeros multiplos de m que tiene el arreglo v
    let r = [];
    let b=0;
    for(let i=0; i<v.length; i++){
        if(v[i] % m==0){
            r[b] = v[i];
            b++;
        }
    }
    return r;
}

function c(a, i, j) {
//compara los valores que se encuentran en las pos 'i' y 'j' del arreglo 'a' 
/* 
    * si los valores son iguales retorna 0
    * si el de la pos 'i' es menor que el de la pos 'j' retorna -1
    * pero si el valor que esta en la pos 'i' es mayor o igual que el de la pos 'j' retorna 1 
*/
    let r;
    if (a[i] === a[j]) {
        r = 0;
    } else if (a[i] < a[j]) {
        r = -1;
        } else {
            r = 1;
        }
    return r;
}

function d(v){ //retorna el promedio de los valores del arreglo v
    let r=0;
    for(let i=0; i<v.length; i++){
        r = v[i] +r;
    }
    return r/v.length;
}

function cargarArreglo(arreglo){
    let nro;
    for (let indice = 0; indice < dim; indice++) {
        nro = readlineSync.questionInt("Ingresar un numero: ");
        arreglo[indice] = nro;
    }
}

function mostrarValores(arreglo){
    console.log("****** contenido del arreglo ******");
    for (let indice = 0; indice < dim; indice++) {
        console.log("El numero ingresado en la posicion ", indice, " es ",arreglo[indice]);
    }
}

let retFuncA, retFuncB, retFuncC, retFuncD;
cargarArreglo(valores1);
retFuncA = a(valores1);
retFuncB = b(valores1,3);
retFuncC = c(valores1,0,1);
retFuncD = d(valores1);
console.log("Evaluando la fucion a()...");
console.log("la funcion devuelve a:",retFuncA);
console.log("Evaluando la fucion b...");
console.log("la funcion devuelve b:",retFuncB);
console.log("Evaluando la fucion c...");
console.log("la funcion devuelve c:",retFuncC);
console.log("Evaluando la fucion d...");
console.log("la funcion devuelve d:",retFuncD);
mostrarValores(valores1);