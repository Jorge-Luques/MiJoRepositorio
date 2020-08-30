//-------- MAIN -----------------------
import {Celular} from "./celular";
import {CelularConCamara} from "./celularConCamara";
import {CelularConRadio} from "./celularConRadio";

let micel:Celular = new Celular(3333456);
let celuCam: CelularConCamara = new CelularConCamara(22233344);
let celRadio: CelularConRadio = new CelularConRadio(24942881);
micel.prenderApagar();
micel.mandarMensaje("hola",12345);
console.log(micel);
celuCam.prenderApagar();
celuCam.hacerLlamada();
celuCam.sacarFoto();
celuCam.sacarFoto();
celuCam.sacarFoto();
console.log(celuCam);
celRadio.prenderApagar();
celRadio.sintonizar(750);
console.log("sintonizando ",celRadio.verFrecuenciaActual());
console.log(celRadio);