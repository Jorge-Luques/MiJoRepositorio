//------------------------ Clase Automovil --------------------- 
import {Vehiculo} from './vehiculo'
export class Automovil extends Vehiculo{
    private cantPuertas: number;

    constructor(patente: string, marca:string,dis:string,modelo:string,canPtas:number = 4){
        super(patente,marca,dis,modelo);
        this.cantPuertas = canPtas;
    }

    public esCoupe():boolean{
        return this.cantPuertas == 3;
    }

    public setCantPuertas(cant:number):void{
        if (cant >= 2 && cant <= 5){//control de que el parametro sea acorde a la cant de puertas real de un auto
            this.cantPuertas = cant;
        }
    }

    public getCantPuertas():number{
        return this.cantPuertas;
    }
    
}