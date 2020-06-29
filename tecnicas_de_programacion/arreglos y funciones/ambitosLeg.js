let mensaje = 'Hola Global!';

function ambitoVariables() {
    leeVariable();
}

function leeVariable() {
    let mensaje;
    mensaje = 'Hola Mundo!!';
    console.log (mensaje);
}

function compararCadenas(mensaje){
    let miMsj = "Hola Global!"
    console.log("mensaje posee dentro: "+mensaje);
    console.log("miMsj posee dentro: "+miMsj);
    if (mensaje == miMsj){ // compara "Hola Global!" con 'Hola Global!'
        console.log("no difiere comillas simples de dobles");
    }
    else{
        console.log("Hay diferencias entre comillas simples de dobles");
    }
}
ambitoVariables();
compararCadenas(mensaje);