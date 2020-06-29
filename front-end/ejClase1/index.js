'use strict';

function cambiarH1(){
    let miInputs = document.getElementById("inText");
    console.log("miInput con esto: ",miInputs)
    let nodoH1 = document.getElementById("miH11");
    console.log("nodoH1 con esto: ",nodoH1)
    nodoH1.innerHTML = miInputs.value;
}

let miInput = document.getElementById("inText");
miInput.addEventListener("change",cambiarH1);

// Manejo de clases en el html desde js
// let miElem = document.querySelector("h1");
// console.log("elementos con querySelector(h1)");
// console.log(miElem);
// let misElems = document.querySelectorAll("h1");
// console.log("elementos con querySelectorAll(h1)")
// console.log(misElems);
// let misElemsCl = document.getElementsByClassName("miH1");
// console.log("elementos con getElementsByClassName(miH1)")
// console.log(misElemsCl);

// let miP = document.querySelector("p");
// miP.classList.add("miClase", "clase2");
// miP.classList.remove("clase2");
// miP.classList.toggle("clase2"); //TOGGLE: si no existe la clase, la agrega, sino la quita
