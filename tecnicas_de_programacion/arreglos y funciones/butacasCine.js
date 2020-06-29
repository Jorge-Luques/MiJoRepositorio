//Algoritmo Cine
/* 
• Diseñar un algoritmo que recorra las butacas de una sala de cine y 
determine cuántas butacas desocupadas hay 
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
    • La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
    • La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada
*/

let readlineSync = require('readline-sync');
let cantButacas;
let arrayButacas = new Array ();

function controlarCantidad(){
    cantButacas = readlineSync.questionInt("Ingrese la cantidad de butacas: ");
    while (cantButacas < 2){
        cantButacas = readlineSync.questionInt("cantidad incorrecta. Ingrese la cantidad de butacas: ");
    }
    return cantButacas;
}

function iniciarArreglo(){
    // cargo todas las butacas en false porque no hay ninguna ocupada
    for (let indice = 0; indice < cantButacas; indice++) {
        arrayButacas[indice] = false;
    }
}

/*
en esta funcion solo esta modelado que los clientes se sientan uno al lado del otro desde el primer asiento
 
let vender_N_entradas=(cantEntradas)=>{
    if (cantEntradas > 0){
        if (cantEntradas <= cantButacas){
             for (let entrada = 0; entrada < cantEntradas; entrada++){
                arrayButacas[entrada] = true;
             }  
        }
        else{
            for (let entrada = 0; entrada < cantButacas; entrada++){ // solo se ocupan hasta la capacidad limite
                arrayButacas[entrada] = true;
            }    
            console.log("solo se ocuparon ",cantButacas," butacas");
            console.log("Hubo ",cantEntradas - cantButacas," de clientes que quedaron sin entrar");
        }
    }
    else{ // cuando la cantidad ingresada es 0 o menor
        console.log("cantidad de entradas nula... no se ocupan las butacas");
    }
}
*/

// funcion que va a servir para modelar el caso mas real que es el de venta de butacas aleatoria
 function vendioUnaAlAzar () {
    return Math.random() > 0.5;
} 

let entrarAlCine=()=>{
    for (let i=0; i < cantButacas; i++){
        if (vendioUnaAlAzar()){
            arrayButacas[i] = true;
        }
        else{
            arrayButacas[i] = false;
        }
    }
}

let cantAsientosVacios =()=>{
    let cantidad = 0;
    for (let i=0; i < cantButacas; i++){
        if (arrayButacas[i] == false){
            cantidad++;
        }
    }
    return cantidad;
}

function mostrarButacasVacias(){
    console.log("****** butacas vacias ******");
    for (let indice = 0; indice < cantButacas; indice++) {
        if (!arrayButacas[indice]){
            console.log("la butaca", indice, "esta vacia");
        }
    }
}

cantButacas = controlarCantidad();
//iniciarArreglo();
//let cantEntradas = readlineSync.questionInt("cargar cuantas entradas se vendieron: ");
//vender_N_entradas(cantEntradas);
entrarAlCine();
console.log("quedaron",cantAsientosVacios(),"sin ocupar");
mostrarButacasVacias();