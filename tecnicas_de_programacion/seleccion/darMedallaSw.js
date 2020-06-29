//determina el tipo de medalla que se le debe otorgar a un participante segun su posicion de llegada
// ademas, agrego la condicion, de que si el participante ingresa
// una posicion menor o igual que 0, entonces no participo y no obtine mencion
let readlineSync = require('readline-sync');
let posicionLlegada = readlineSync.questionInt("Indicar posicion de llegada del competidor: ");
if (posicionLlegada >0){
  switch (posicionLlegada) {
    case 1:
        console.log("Entregar medalla de oro");
        break;
    case 2:
        console.log("Entregar medalla de plata");
        break;
    case 3:
        console.log("Entregar medalla de bronce");
        break;
    default:
        console.log("Entregar mencion de participacion");
  }
}
else{
   console.log("el participante no recibe NADA"); 
}
   