import Local from "./local"

let miLocal:Local = new Local("maxi kiosco JUA-JUA");
miLocal.venderItem(11132,3);
console.log(miLocal);
miLocal.venderItem(13031,15);
miLocal.venderItem(12121,4);
console.log(miLocal);
console.log("ventas = ",miLocal.calcularVentas());