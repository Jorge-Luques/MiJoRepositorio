//Algoritmo ocurrencia y probabilidad
/* 
 Armar un algoritmo que permita leer un texto desde la consola y emita un listado con la ocurrencia 
 de cada letra en el texto calculando además la probabilidad de aparición de cada una. 
 Tenga en cuenta que el texto puede contener letras mayúsculas, minúsculas y caracteres de puntuación, 
 pero cada letra se debe considerar independiente de como se presente, por ejemplo A y a NO son dos letras diferentes.
 Considere que el texto está en idioma inglés es decir no contiene ñ, Ñ o letras acentuadas. 
 Agregue el código como respuesta y los comentarios que crea necesarios
*/
let readlineSync = require('readline-sync');

function ocurrenciasProbabLetras(arreglo){
    let arregloMinus = pasarAminus(arreglo);
    let caracteres = [];
    let ocurrencias = [];
    let probabilidades = [];
    let indexChars=0;
    let char1;

    for (let i=0; i < arregloMinus.length; i++){
        char1 = arregloMinus[i];
        if (!estaChar(char1,caracteres)){
            caracteres[indexChars] = char1;
            ocurrencias[indexChars] = 1;
            indexChars++;
        }
        else{
            sumarOcurrecia(ocurrencias, caracteres, arregloMinus[i]);
        }

    }
    probabilidadesChars(arregloMinus,ocurrencias, probabilidades);
    verResultados(caracteres, ocurrencias, probabilidades);
}

function verResultados(caracteres, ocurrencias, probabilidades){
    for(let i=0; i < caracteres.length; i++){
        console.log("____________________");
        console.log("el caracter ", caracteres[i]);
        console.log("se repite en el texto ", ocurrencias[i]);
        console.log("con probabiidad ", probabilidades[i]);
    }
    console.log("estos son todos los caracteres diferentes en el texto:");
    mostrarValores(caracteres);
    console.log("ocurrecias de los caracteres presentes");
    mostrarValores(ocurrencias);
    console.log("probabilidades de esos caracteres");
    mostrarValores(probabilidades);
}

function probabilidadesChars(arreglo, ocurrencias, probabilidades){
    for (let i=0; i< ocurrencias.length;i++ ){
        probabilidades[i] = ocurrencias[i] / arreglo.length;
    }
}

function pasarAminus(arreglo){
    let arrMinus = [];
    for (let i=0; i < arreglo.length; i++){
        arrMinus[i] = arreglo[i].toLowerCase();
    }
    return arrMinus;
}

function estaChar(caract, caracteres){
    for (let i=0; i < caracteres.length; i++){
        if (caracteres[i] == caract){
            return true;
        }
    }
    return false;
}

// function esLetra(caract){
//     if ((caract >= "a" && caract <= "z") || (caract >= "A" && caract <= "Z")){
//             return true;
//     }
//     return false;
// }

let sumarOcurrecia=(ocurrencias, caracteres, caract)=>{
    for (let i=0; i < caracteres.length; i++){
        if (caracteres[i] == caract){
            ocurrencias[i] = ocurrencias[i] +1;
        }
    }
}

function mostrarValores(arreglo){
    console.log("****** contenido del arreglo ******");
    for (let indice = 0; indice < arreglo.length; indice++) {
        console.log("arreglo [", indice, "] = ", arreglo[indice]);
    }
}

function cargarArreglo(arreglo){
    let palabras = readlineSync.question("Ingresar un texto: ");
    let indice = 0;
    while (indice < palabras.length) {
        arreglo[indice] = palabras[indice];
        indice++;
    }
}

let textoCompl = [];
cargarArreglo(textoCompl);
ocurrenciasProbabLetras(textoCompl);