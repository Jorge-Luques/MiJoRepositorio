import * as rs from 'readline-sync';

let lasPalabras: string[] = new Array();

function cargarPalabras(lasPalabras:string[]) {
    let palabra: string;
    palabra = "nana";
    while (palabra != "") {
        palabra = rs.question("ingresar una palabra, cadena vacia para finalizar: ");
        lasPalabras.push(palabra);
    }
    lasPalabras.pop(); //para sacar la cadena vacia
}

function insertar(posicion: number, word: string, arreglo: string[]): void {
    if (posicion >= 0 && posicion < arreglo.length) {
        arreglo[posicion] = word;
    }
    else {
        console.log("Posicion invalida para insertar una palabra");
    }
}

function buscar(word: string, arreglo: string[]): number {
    let i: number;
    i = 0;
    while (i < arreglo.length && word != arreglo[i]) {
        i++;
    }
    if (arreglo[i] == word) {
        return i;
    }
    else {
        return -1;
    }
}

function corrimiento_izq(pos: number, arreglo: string[]): void {
    let index: number;
    for (index = pos; index < arreglo.length; index++) {
        arreglo[index] = arreglo[index + 1];
    }
}

function eliminar(word: string, arreglo: string[]): void {
    let pos: number = buscar(word, arreglo);
    if (pos != -1) {
        corrimiento_izq(buscar(word, arreglo), arreglo);
        arreglo.pop();
    }
    else {
        console.log("No se encontro la palabra");
    }
}

function actualizar(miWord, word: string, lasPalabras: string[]): void {
    let pos: number = buscar(word, lasPalabras);
    if (pos != -1) {
        lasPalabras[pos] = miWord;
    }
    else {
        console.log("no se encontro la palabra ", word, " en el arreglo")
    }
}

let menuOpciones =(lasPalabras):void =>{
    let option:number;
    let word:string;
    console.log("-----------------------");
    console.log("-- MENU DE OPCIONES ---");
    console.log("-----------------------");
    console.log("--  1. INSERTAR      --");
    console.log("--  2. BUSCAR        --");
    console.log("--  3. ELIMINAR      --");
    console.log("--  4. ACTUALIZAR    --");
    option = rs.questionInt("Ingresar la opcion con la cual trabajar en el arreglo: ");
    switch (option){
        case 1:
            let pos:number;
            pos = rs.questionInt("ingresar la posicion de la palabra a insertar: ");
            word = rs.question("ingresar la palabra a insertar: ");
            insertar(pos, word, lasPalabras);
            break;
        case 2:
            word = rs.question("ingresar la palabra a buscar: ");
            console.log("la palabra ", word, " esta en la posicion: ", buscar(word, lasPalabras));
            break;
        case 3:
            word = rs.question("ingresar la palabra a eliminar: ");
            eliminar(word, lasPalabras);
            break;
        case 4:
            let nuevaWord:string;
            nuevaWord = rs.question("ingresar la palabra reemplazante: ");
            word = rs.question("ingresar la palabra a ser reemplazada: ");
            actualizar(nuevaWord, word, lasPalabras);
            break;
        default: 
            console.log("Opcion no valida!!!"); 
            break;
    }

}

cargarPalabras(lasPalabras);
console.log(lasPalabras);
menuOpciones(lasPalabras);
console.log(lasPalabras);
