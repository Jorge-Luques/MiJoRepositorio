//------------------------ Clase Moto --------------------- 
import {Vehiculo} from './vehiculo'
export class Moto extends Vehiculo{
    private cilindrada: number;

    constructor(patente: string, marca:string,dis:string,modelo:string, cil:number = 110){
        super(patente,marca,dis,modelo);
        this.cilindrada = cil;
    }

    public setCilindrada(cc:number){
        this.cilindrada = cc;
    }

    public getCilindrada():number{
        return this.cilindrada;
    }
}