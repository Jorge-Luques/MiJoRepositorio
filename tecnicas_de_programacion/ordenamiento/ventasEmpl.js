
let vendedor1 = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]; 
let vendedor2 = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855]; 
let vendedor3 = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]; 
let vendedor4 = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006]; 
let vendedor5 = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];

function maximaVenta(arreglo){
    let maximo = -1;
    let semana = 0;
    let mes = 0;
    for (let i=0; i < arreglo.length; i++){
        if (arreglo[i] > maximo){
            maximo = arreglo[i];
            semana = i;
        }
    }
    mes = Math.round(semana / 4);
    console.log("el maximo de ventas es: ",maximo);
    console.log("la semana de su maximo es: ",semana);
    console.log("el mes de su maximo es: ",mes);
}

function minimaVenta(arreglo){
    let minimo = 200000;
    let semana = 0;
    let mes = 0;
    for (let i=0; i < arreglo.length; i++){
        if (arreglo[i] < minimo){
            minimo = arreglo[i];
            semana = i;
        }
    }
    mes = Math.round(semana / 4);
    console.log("el minimo de ventas es: ",minimo);
    console.log("la semana de su minimo es: ",semana);
    console.log("el mes de su minimo es: ",mes);
}

function promedioSemanal(arreglo){
    let suma = 0;
    let prom = 0;

    for (let i=0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    prom = suma / arreglo.length;
    return prom;
}

function promedioMensual(arreglo){
    let promMensual = 0;
    let promMes = 0;
    promMes += promedioMes(arreglo, 0, 4);
    promMes += promedioMes(arreglo, 4, 8);
    promMes += promedioMes(arreglo, 8, 12);
    promMensual = promMes / 3;
    return promMensual;
}

function promedioMes(arreglo, inic, fin){
    let suma = 0;
    let prom = 0;

    for (let sem=inic; sem < fin; sem++){
        suma += arreglo[sem];
        
    }
    prom = suma / 4;
    return prom;
}

function verResultados(nomVendedor, arreglo){
    separarConGuiones();
    console.log("los datos referentes a ",nomVendedor," son:")
    maximaVenta(arreglo);
    minimaVenta(arreglo);
    console.log("su promedio semanal es: ",promedioSemanal(arreglo));
    console.log("su promedio mensual es: ",promedioMensual(arreglo));
}

function mejorVendedorSemanal(sem){
    let monto = 0;
    let vendedor = "";
    if (vendedor1[sem] > monto){ // tomo como mejor el primer vendedor
        monto = vendedor1[sem];
        vendedor = "Camila";
    }
    if (vendedor2[sem] > monto){ // comparo con el siguiente vendedor
        monto = vendedor2[sem];
        vendedor = "Franco";
    }
    if (vendedor3[sem] > monto){ // comparo con el siguiente vendedor
        monto = vendedor3[sem];
        vendedor = "Sofia";
    }
    if (vendedor4[sem] > monto){ // comparo con el siguiente vendedor
        monto = vendedor4[sem];
        vendedor = "Matias";
    }
    if (vendedor5[sem] > monto){ // comparo con el siguiente vendedor
        monto = vendedor5[sem];
        vendedor = "Agustina";
    }
    console.log("el mejor vendedor de la semana ",sem);
    console.log("fue ",vendedor," con monto maximo de ",monto);
}

function mejoresPorSemana(){
    for (let i=0; i < vendedor1.length; i++){
        mejorVendedorSemanal(i);
    }
}

function subArreglo(arreglo, inic, fin){
    let subArray =[];
    let indexSArr= 0;
    for(let i=inic; i< fin; i++){
        subArray[indexSArr] = arreglo[i];
        indexSArr++;
    }
    return subArray;
}

function mejorVendedorMensual(inic, fin){
    let promMes = 0;
    let vendedor = "";
    let montos = [];

    let promMesVend = promedioMes(vendedor1, inic, fin);
    if (promMesVend > promMes){ // tomo como mejor el primer vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor1, inic, fin);
        vendedor = "Camila";
    }
    promMesVend = promedioMes(vendedor2, inic, fin);
    if (promMesVend > promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor2, inic, fin);
        vendedor = "Franco";
    }
    promMesVend = promedioMes(vendedor3, inic, fin);
    if (promMesVend > promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor3, inic, fin);
        vendedor = "Sofia";
    }
    promMesVend = promedioMes(vendedor4, inic, fin);
    if (promMesVend > promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor4, inic, fin);
        vendedor = "Matias";
    }
    promMesVend = promedioMes(vendedor5, inic, fin);
    if (promMesVend > promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor5, inic, fin);
        vendedor = "Agustina";
    }
    console.log("el mejor vendedor del mes ");
    console.log("fue ",vendedor," con montos de ",verVentasMes(montos));
}

function mejoresPorMes(){
    mejorVendedorMensual(0, 4);
    mejorVendedorMensual(4, 8);
    mejorVendedorMensual(8, 12);
}

function peorVendedorMensual(inic, fin){
    let promMes = 100000;
    let vendedor = "";
    let montos = [];

    let promMesVend = promedioMes(vendedor1, inic, fin);
    if (promMesVend < promMes){ // tomo como mejor el primer vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor1, inic, fin);
        vendedor = "Camila";
    }
    promMesVend = promedioMes(vendedor2, inic, fin);
    if (promMesVend < promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor2, inic, fin);
        vendedor = "Franco";
    }
    promMesVend = promedioMes(vendedor3, inic, fin);
    if (promMesVend < promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor3, inic, fin);
        vendedor = "Sofia";
    }
    promMesVend = promedioMes(vendedor4, inic, fin);
    if (promMesVend < promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor4, inic, fin);
        vendedor = "Matias";
    }
    promMesVend = promedioMes(vendedor5, inic, fin);
    if (promMesVend < promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor5, inic, fin);
        vendedor = "Agustina";
    }
    console.log("el peor vendedor del mes ");
    console.log("fue ",vendedor," con montos de ",verVentasMes(montos));
}

function peoresPorMes(){
    console.log("primer mes: ")
    peorVendedorMensual(0, 4);
    console.log("segundo mes: ")
    peorVendedorMensual(4, 8);
    console.log("tercer mes: ")
    peorVendedorMensual(8, 12);
}

function verVentasMes(arreglo){
    // muestro todos los valores del arreglo separados por coma y en una sola linea
    let elemens = "[ "
    for (let indice = 0; indice < arreglo.length; indice++) {
        elemens += arreglo[indice]+", "
    }
    elemens += "]";
    return elemens;
}

function peorVendedorTrimestre(){
    let promMes = 100000;
    let vendedor = "";
    let montos = [];

    let promMesVend = promedioMes(vendedor1, 0, vendedor1.length);
    if (promMesVend < promMes){ // tomo como mejor el primer vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor1, 0, vendedor1.length);
        vendedor = "Camila";
    }
    promMesVend = promedioMes(vendedor2, 0, vendedor2.length);
    if (promMesVend < promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor2, 0, vendedor2.length);
        vendedor = "Franco";
    }
    promMesVend = promedioMes(vendedor3, 0, vendedor3.length);
    if (promMesVend < promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor3, 0, vendedor3.length);
        vendedor = "Sofia";
    }
    promMesVend = promedioMes(vendedor4, 0, vendedor4.length);
    if (promMesVend < promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor4, 0, vendedor4.length);
        vendedor = "Matias";
    }
    promMesVend = promedioMes(vendedor5, 0, vendedor5.length);
    if (promMesVend < promMes){ // comparo con el siguiente vendedor
        promMes = promMesVend;
        montos = subArreglo(vendedor5, 0, vendedor5.length);
        vendedor = "Agustina";
    }
    console.log("el peor vendedor del trimestre ");
    console.log("fue ",vendedor," con montos de ",verVentasMes(montos));
}

function separarConGuiones(){
    console.log("-----------------------------------------");
}

//MAIN
verResultados("Camila", vendedor1);
separarConGuiones();
verResultados("Franco", vendedor2);
separarConGuiones();
verResultados("Sofia", vendedor3);
separarConGuiones();
verResultados("Matias", vendedor4);
separarConGuiones();
verResultados("Agustina", vendedor5);
separarConGuiones();
separarConGuiones();
mejoresPorSemana();
separarConGuiones();
mejoresPorMes();
separarConGuiones();
peoresPorMes();
separarConGuiones();
peorVendedorTrimestre();