//Algoritmo jardin
/* 
• El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de bancos)
• Ej: La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá 
  determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada
*/

readlineSync = require('readline-sync');
let cantCursos;
let capacidades = new Array(cantCursos);
let colores = new Array(cantCursos);
let buscarAula;

function controlarCantidadValida(){
    let cantCursos = readlineSync.questionInt("Ingrese la cantidad: ");
    while (cantCursos < 1){
        cantCursos = readlineSync.questionInt("Cantidad incorrecta. Ingrese la cantidad de nuevo: ");
    }
    return cantCursos;
}

function cargarDatosJardin(){
        let capac, nomCurso;
        for (let indice = 0; indice < cantCursos; indice++) {
            console.log("---- curso ---");
            nomCurso = readlineSync.question("Indique el nombre del curso: ");
            colores[indice] = nomCurso;
            console.log("se ingresara la capacidad del curso");
            capac = controlarCantidadValida(capac);
            capacidades[indice] = capac;
        }
}

function ordenarDescendArreglos(){
    //let change;
    let mayor;
    let indice, j;
    for (indice = 0; indice < cantCursos; indice++) {
        mayor = capacidades[indice];
        for (j = indice + 1; j < cantCursos; j++) {
            if (capacidades[j] > mayor){ //Cuando es mayor hago intercambios
                cambiarPorPosiciones(capacidades, indice, j);           // para el arreglo capacidades
                cambiarPorPosiciones(colores, indice, j);               // para el arreglo colores
            }
        }
    }       
}

let cambiarPorPosiciones=(arreglo, pos1, pos2)=>{
    let varCambio;
    varCambio = arreglo[pos1];           // intercambio para
    arreglo[pos1] = arreglo[pos2];   // el arreglo
    arreglo[pos2] = varCambio;
}

function escogerMejorAula(numAl){
    let indice = 0;
    let menorDif = capacidades[indice] - numAl;
    if (menorDif >= 0){
        let sigDif;
        let posMenor = 0;
        while (indice < capacidades.length){
            sigDif = capacidades[indice] - numAl;
            if (sigDif >= 0 && sigDif < menorDif){
                menorDif = sigDif;
                posMenor = indice;
            }
            indice++;
        }
        console.log("El aula asignada es: ",colores[posMenor]);
        console.log("entran los",numAl,"alumnos y sobran",capacidades[posMenor]-numAl,"asientos");
    }
    else{
        console.log("no hay aula en el jardin donde quepan ",numAl," infantes");
    }
}

function mostrarValores(cursos,tamaños){
    console.log("********** informacion de las aulas del jardin **********");
    for (let indice = 0; indice < cantCursos; indice++) {
        console.log("El aula:",cursos[indice],"posee",tamaños[indice],"asientos.");
    }
}

console.log("se ingresara la cantidad de cursos");
cantCursos = controlarCantidadValida(cantCursos);
cargarDatosJardin();
ordenarDescendArreglos();
console.log("se ingresara la cantidad de alumnos a asignar aula...");
buscarAula = controlarCantidadValida(buscarAula);
escogerMejorAula(buscarAula);
mostrarValores(colores,capacidades);