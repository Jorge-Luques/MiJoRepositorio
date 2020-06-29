//Algoritmo Promedio Escolar
/* 
• Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno
(ingresado por el usuario)
*/

let readlineSync = require('readline-sync');
let dimension;
let alumnos = new Array();
let notasTri1 = new Array();
let notasTri2 = new Array();
let notasTri3 = new Array();


function controlarDimension(dimension){
    dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
    while (dimension < 1){
        dimension = readlineSync.questionInt("Dimension incorrecta. Ingrese la dimension del arreglo: ");
    }
    return dimension;
}

function cargarArreglos(){
    let nota = 0;
    let nomAlumno;
    for (indice = 0; indice < dimension; indice++) {
        nomAlumno = readlineSync.question("ingresar el nombre del alumno: ");
        alumnos[indice] = nomAlumno;
        console.log("Nota primer trimestre")
        cargarNota(notasTri1,indice,nota);
        console.log("Nota segundo trimestre")
        cargarNota(notasTri2,indice,nota);
        console.log("Nota tercer trimestre")
        cargarNota(notasTri3,indice,nota);
        console.log("------------------------");
    }
}

let cargarNota = (arreglo, pos, nota) =>{
    let esNotaValida=(nro)=>{ // funcion interna que determina que la nota este en un rango valido
        if (nro >=0 && nro <= 10){
            return true;
        }
        else{
            return false;
        }
    }

    nota = readlineSync.questionInt("Indique la nota recibida: ");
    while (! esNotaValida(nota)){
        nota = readlineSync.questionInt("Nota no valida. Indique de nuevo la nota recibida: ");
    }
    arreglo[pos] = nota;

}

function calcularPromedio(alum){

    let estaPosAlumno =(alum)=>{ // determina si el alumno fue ingresado y en que posicion del arreglo esta
        let esta = -1;
        let listo = false;
        for(let index=0; index < dimension && !listo; index++){
            if (alumnos[index] == alum){
                esta = index;
                listo = true;
            }
        }
        return esta;
    }

    if (estaPosAlumno(alum)>= 0){
        let pos = estaPosAlumno(alum);
        let promedio = (notasTri1[pos] + notasTri2[pos] + notasTri3[pos])/3
        console.log("El promedio del alumno "+alum+ " es de: ",promedio);
    }
    else{
        console.log("El alumno ", alum, " no existe en el sistema")
    }
}

// function mostrarValores(arreglo){
//     console.log("****** contenido del arreglo ******");
//     for (let indice = 0; indice < dimension; indice++) {
//         console.log("El dato ingresado en la posicion ", indice, " es ", arreglo[indice]);
//     }
// }

dimension = controlarDimension(dimension);
cargarArreglos();
// mostrarValores(alumnos);
// mostrarValores(notasTri1);
// mostrarValores(notasTri2);
// mostrarValores(notasTri3);
let busqueda = readlineSync.question("Ingresar el nombre de alumno a buscar: ");
calcularPromedio(busqueda);