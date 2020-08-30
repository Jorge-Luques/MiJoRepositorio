//-------------------- Clase TelefonoConCamara -------------------------
import {Celular} from "./celular"
export class CelularConCamara extends Celular{
    private camaraCel: string;

    public constructor(miNro:number){
        super(miNro);
        this.camaraCel = "";
    }

    public sacarFoto():void{
        this.camaraCel += "foto ";
        console.log(this.camaraCel);
    }
}
