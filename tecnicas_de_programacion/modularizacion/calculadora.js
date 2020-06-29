// se devuelve el resultado de la operacion solicitada y los valores ingresados
let readlineSync = require('readline-sync');

let numero1,numero2,opcion;

function dibujarGuiones () {
    let i;
    let linea = "-";
    for (i = 0; i <= 40; i++) {
    linea = linea + "-";
    };
    console.log(linea);
}

function efectuarOperacion(numero1,numero2,opcionMenu){
    switch (opcionMenu) {
        case 1: //suma
            console.log("el resultado es: ", numero1 + numero2);
            break;
        case 2: //resta
            console.log("el resultado es: ", numero1 - numero2);
            break;
        case 3: //multiplicacion
            console.log("el resultado es: ", numero1 * numero2);
            break;
        case 4: //division
            console.log("el resultado es: ", numero1 / numero2);
            break;
        default:
            console.log("opcion no valida! No se muestra ninguna operacion");
    }
}

function cargarOperando(numero){
    numero = readlineSync.questionInt("Ingresar un valor: ");
    return numero;
}

// Probando funcion void si cambia el parametro
function introOperando(numero){
    let x = readlineSync.questionInt("cargar numero: ");
    numero = x;
}

function mostrarMenuOpt(){
    console.log("###### MENU DE CALCULO ######");
    console.log("la operacion aritmetica debe ser seleccionada entre: ");
    console.log("1: suma; 2: resta; 3: multiplicacion; 4: division ");
}

//////////////////////////// MAIN //////////////////////
numero1 = cargarOperando(numero1);
numero2 = cargarOperando(numero2);
//introOperando(numero2); // invoco para ver si se modifica (NO FUNCA)
mostrarMenuOpt();
opcion = readlineSync.questionInt("Ingresar la operacion a realizar: ");
dibujarGuiones();
efectuarOperacion(numero1, numero2, opcion);
dibujarGuiones();