import {RegistroAutomotor} from './regAutomotor';
import {Automovil} from './automovil';
import {Moto} from './moto';
import {Camion} from './camion';



    let registoAutos = new RegistroAutomotor(1000);
    let miAuto = new Automovil("abc123","fiat","palio","2014",3);
    let unaMoto = new Moto("go701n","gilera","smash","2010",150);
    let unCamion = new Camion("sta884","iveco","tector","2016",1800);
   
    
    registoAutos.agregar(miAuto);
    if(miAuto.esCoupe()){
        console.log("si quieren sentarse atras, corran el asiento");
    }
    console.log(registoAutos);
    registoAutos.borrar("jjj338");
    console.log(registoAutos);
    registoAutos.actualizar(unaMoto,1);
    registoAutos.agregar(unCamion);
    console.log(registoAutos);
