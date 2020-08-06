// import * as fs from 'fs';

// class RegistroAutomotor{
//     private registrados:Automovil[];
//     private id:number;

//     constructor(id:number){
//         this.id = id;
//         this.registrados = new Array();
//     }

//     getId():number{
//         return this.id;
//     }
    
//     agregar(auto:Automovil):void{
//         this.registrados.push(auto);
//     }

//     buscar(patente:string):number{
//         let autoReg:Automovil;
//         for(let i=0; this.registrados.length; i++){
//             autoReg = this.registrados[i];
//             if(autoReg.getPatente() == patente){
//                 return i;
//             }
//         }
//         return -1;
//     }

//     borrar(patente:string):void{
//         if (this.buscar(patente) != -1){
//             let posAuto:number = this.buscar(patente);//lo encontro y se para en la pos donde se encuentra
//             for (let i = posAuto; i < this.registrados.length-1; i++){
//                 this.registrados[i] = this.registrados[i+1];//hago corrimiento a izq
//             }
//             this.registrados.pop();//borro el ultimo, que esta duplicado
//         }
//     }

//     actualizar(car:Automovil, pos:number):void{
//         if(pos >= 0 && pos < this.registrados.length){
//             this.registrados[pos] = car;
//         }
//         else{
//             console.log("posicion NO VALIDA para actualizar el vehiculo");
//         }
//     }
// }

