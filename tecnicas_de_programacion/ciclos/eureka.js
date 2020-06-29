let readlineSync = require('readline-sync');
let claveSecreta = "eureka";
let claveIngresada, cont;
cont = 1;
while (cont <=3 && claveIngresada != claveSecreta){
    claveIngresada = readlineSync.question("Ingresar clave: ");
    if (claveIngresada == claveSecreta){
       console.log("clave correcta!!!");
    }
    else{
        if (cont < 3)
            console.log("clave incorrecta, intente nuevamente");
    }
    cont++;
}
if (claveIngresada != claveSecreta){
    console.log("tuvo 3 intentos, chauuuu");
}
