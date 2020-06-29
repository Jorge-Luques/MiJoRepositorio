//determina el tipo de medalla que se le debe otorgar a un participante segun su posicion de llegada
// si la posicion ingresada es menor o igual que 0, entonces no se le entrega nada
let readlineSync = require('readline-sync');
let posicionLlegada= readlineSync.questionInt("Indicar posicion de llegada del competidor: ");
if (posicionLlegada >0){
    if (posicionLlegada == 1) {
        console.log("Entregar medalla de oro");
    } else {
        if (posicionLlegada == 2) {
        console.log("Entregar medalla de plata");
        } else {
            if (posicionLlegada == 3) {
            console.log("Entregar medalla de bronce");
            } else {
                console.log("Entregar mencion de participacion");
                } 
        }
    }
}
else{ console.log("el participante no recibe NADA!!");}