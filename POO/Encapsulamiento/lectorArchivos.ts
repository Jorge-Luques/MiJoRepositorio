import * as fs from 'fs';
import * as rs from 'readline-sync';

export class LectorArchivos{
    private nombreArchivo: string;
    private delimitador1: string;
    

    public constructor(nombreArchivo:string, lim1:string){
        this.nombreArchivo = nombreArchivo;
        this.delimitador1 = lim1;
    }

    public extraerDeArchivo(lim:string):string[]{
        let txtArchivo:string = fs.readFileSync(this.nombreArchivo,"utf-8");
        let datosExtraidos:string[] = txtArchivo.split(lim);
        return datosExtraidos;
    }

    public setDelimitadorTexto():void{
        let lim = rs.question("ingresar el delimitador del texto: ");
        this.delimitador1 = lim;
    }

    public getDelimitador():string{
        return this.delimitador1;
    }
}

