"use strict";

let inputTarea = document.querySelector(".inTarea");
console.log("inputTarea", inputTarea);

let misTareas = document.querySelector(".misTareas");

function agregarTarea() {
    let newTarea = document.createElement("p");
    newTarea.innerHTML = inputTarea.value;
    console.log("la tarea es: ", newTarea);
    misTareas.appendChild(newTarea);
    console.log("misTareas tiene: ", misTareas.children);
    inputTarea.value = "";
}

function eliminarTareas() {
    if (misTareas !== null) {
        while (misTareas.hasChildNodes()) {
            misTareas.removeChild(misTareas.lastChild);
        }
        console.log("tareas tiene esto: ", misTareas)
    }
    else {
        alert("No se crearon tareas!!");
    }
}


let btnAgregar = document.querySelector(".btnAdd");
btnAgregar.addEventListener("click", agregarTarea);


let btnLimpiar = document.querySelector(".btnClean");
btnLimpiar.addEventListener("click", eliminarTareas)