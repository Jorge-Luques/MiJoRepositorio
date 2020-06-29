//Algoritmo en el que se cargan los numeros en un arreglo y se los muestra por pantalla
let num = new Array (7) ;
let indice=0;
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

function mostrarValores(num){
    let indice = 0;
    while (indice < 7) {
        console.log ("El número en la posición ", indice, " es ", num[indice]);
        indice++;
    }
}

mostrarValores(num);