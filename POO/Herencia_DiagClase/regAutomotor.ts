//------------------------ Clase RegistroAutomotor --------------------- 
import * as fs from 'fs'
import {Vehiculo} from './vehiculo';
import {Automovil} from './automovil';
import {Moto} from './moto';
import {Camion} from './camion';

export class RegistroAutomotor{
    private vhcRegistrados:Vehiculo[];
    private id:number;

    constructor(id:number){
        this.id = id;
        this.vhcRegistrados = [];
        this.cargarVehic();
    }

    private cargarVehic():void{
        let txtVehic:string = fs.readFileSync("vehiculos.txt","utf-8");
        let datosVehic:string[] = txtVehic.split('\r\n');
        let infoVehic: string[];
        let vhc: Vehiculo;
        for (let i=0; i < datosVehic.length;i++){
            infoVehic = datosVehic[i].split(',');
            if(infoVehic[4] == 'auto'){
                vhc = new Automovil(infoVehic[0],infoVehic[1],infoVehic[2],infoVehic[3]);
            }
            else if (infoVehic[4] == 'moto'){
                vhc = new Moto(infoVehic[0],infoVehic[1],infoVehic[2],infoVehic[3]);
            }
            else{
                vhc = new Camion(infoVehic[0],infoVehic[1],infoVehic[2],infoVehic[3]);
            } 
            this.agregar(vhc);
        }      
    }
    
    public getId():number{
        return this.id;
    }
    
    public agregar(vhc:Vehiculo):void{
        this.vhcRegistrados.push(vhc);
    }

    private buscar(patente:string):number{
        let vhcReg:Vehiculo = null;
        for(let i=0; this.vhcRegistrados.length; i++){
            vhcReg = this.vhcRegistrados[i];
            if(patente == vhcReg.getPatente()){
                return i;
            }
        }
        return -1;
    }

    public borrar(patente:string):void{
        if (this.buscar(patente) != -1){
            let posAuto:number = this.buscar(patente);//lo encontro y se para en la pos donde se encuentra
            for (let i = posAuto; i < this.vhcRegistrados.length-1; i++){
                this.vhcRegistrados[i] = this.vhcRegistrados[i+1];//hago corrimiento a izq
            }
            this.vhcRegistrados.pop();//borro el ultimo, que esta duplicado
        }
    }

    public actualizar(vhc:Vehiculo, pos:number):void{
        if(pos >= 0 && pos < this.vhcRegistrados.length){
            this.vhcRegistrados[pos] = vhc;
        }
        else{
            console.log("posicion NO VALIDA para actualizar el vehiculo");
        }
    }
}