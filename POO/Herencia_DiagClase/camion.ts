//------------------------ Clase Camion --------------------- 
import {Vehiculo} from './vehiculo'
export class Camion extends Vehiculo{
    private tara: number;

    constructor(patente: string, marca:string,dis:string,modelo:string, tara:number = 1000){
        super(patente,marca,dis,modelo);
        this.tara = tara;
    }

    public setTara(pesaje:number){
        if (pesaje >= 500 && pesaje <= 2500){ //control de que el parametro sea acorde a la tara real de un camion
            this.tara = pesaje;
        }
    }

    public getTara():number{
        return this.tara;
    }
}