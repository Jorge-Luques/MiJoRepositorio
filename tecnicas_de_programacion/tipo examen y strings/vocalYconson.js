// Arreglo de texto
/*
Dado un texto o cadena de caracteres, devolver un arreglo con todo el texto en minusculas
tambien un arreglo con todas las vocales y otro con todas las consonantes 
*/
let rl = require('readline-sync');

let texto = rl.question("ingresar un texto a analizar: ");
separaVocales(texto);

function esVocal(char){
    return (char =='a' || char=='e' || char=='i' || char =='o' || char =='u');
}

function separaVocales(palabras){
    let arregloChars = [];
    let arregloVocales = [];
    let arregloConson = [];

    arregloChars = palabras.toLowerCase();
    for (let i=0; i<arregloChars.length; i++){
        if (esVocal(arregloChars[i])){
            arregloVocales.push(arregloChars[i]);
        }
        else{
            arregloConson.push(arregloChars[i]);
        }
    }
    console.log('Este es el texto en minusculas:');
    mostrarValores(arregloChars);
    console.log('Asi queda el arreglo de vocales:');
    mostrarValores(arregloVocales);
    console.log('Asi queda el arreglo de consonantes y caracteres especiales');
    mostrarValores(arregloConson);
}

function mostrarValores(arreglo){
    // muestro todos los valores del arreglo separados por coma y en una sola linea
    console.log("****** contenido del arreglo ******");
    let elemens = "[ "
    for (let indice = 0; indice < arreglo.length; indice++) {
        elemens += arreglo[indice]+", "
    }
    elemens += "]";
    console.log(elemens);
}