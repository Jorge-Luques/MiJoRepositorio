//-------------------- Clase CelularConRadio -------------------------
import {Celular} from "./celular";
export class CelularConRadio extends Celular{
    private frecuenciaActual:number; 

    public constructor(miNro:number){
        super(miNro);
        this.frecuenciaActual = 500;
        
    }

    public sintonizar(dial: number){
        if (this.estaPrendido){
            this.frecuenciaActual = dial;
        }
    }

    public verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }
}