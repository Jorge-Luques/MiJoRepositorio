//Algoritmo ocurrencia y probabilidad mejorado
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
        console.log("char1 : ",char1);
        char1 = unificarLetra(char1);
        console.log("char1 modif: ",char1);
        arregloMinus[i] = char1;
        console.log("arregloMinus[i] : ",arregloMinus[i]);
        if (!estaChar(char1,caracteres)){
            caracteres[indexChars] = char1;
            ocurrencias[indexChars] = 1;
            indexChars++;
        }
        else{
            sumarOcurrecia(ocurrencias, caracteres, char1);
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

function unificarLetra(caract){
    switch (caract){
        case "\u00E1":  // caso 'á'
            caract = "a"; 
            break;
        case "\u00E0": // caso 'à'
            caract = "a"; 
            break;
        case "\u00E9": // caso 'é'
            caract = "e";
            break;
        case "\u00E8": // caso 'è'
            caract = "e";
            break;
        case "\u00ED": // caso 'í'
            caract = "i";
            break;
        case "\u00EC": // caso 'ì'
            caract = "i";
            break;
        case "\u00F3": // caso 'ó'
            caract = "o";
            break;
        case "\u00F2": // caso 'ò'
            caract = "o";
            break;
        case "\u00FA": // caso 'ú'
            caract = "u";
            break;
        case "\u00F9": // caso 'ù'
            caract = "u";
            break;
        default:
            break;
    }
    return caract;
}

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