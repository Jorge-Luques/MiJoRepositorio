"use strict";

let inputCantidad = document.getElementById("cantidad");

function Azar (tope) {
    return (Math.floor(Math.random()*tope)+2);
}

function lanzarDados(){
    // console.log("en lanzar dados:", Azar(12));
    return Azar(11);
}

function calcularCantAciertos(){
    console.log("empieza la simulacion");
    let cantLnz = Number(inputCantidad.value);
    console.log("la cantidad es: ",cantLnz);
    let cant7s = 0;
    let sale;
    for (let i = 0; i < cantLnz; i++){
        sale = lanzarDados();
        // console.log("sale con: ",sale);
        if (sale == 7){
            // console.log("salio 7!!!")
            cant7s++;
        }
    }
    return cant7s;
}

let BotonSimulacion = document.querySelector(".simularLanzam");
BotonSimulacion.addEventListener("click",calcularCantAciertos);
let acertados = calcularCantAciertos();
console.log("acertados: ", acertados);

let cantAciertos = document.querySelector(".aciertos");
cantAciertos.innerHTML = acertados;
