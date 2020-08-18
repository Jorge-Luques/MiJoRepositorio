import * as fs from 'fs';
import * as rs from 'readline-sync';

export class LectorArchivos{
    private nombreArchivo: string;
    private delimitador1: string;
    

    public constructor(nombreArchivo:string, lim1:string){
        this.nombreArchivo = nombreArchivo;
        this.delimitador1 = lim1;
    }

    public extraerDeArchivo():string[]{
        let txtArchivo:string = fs.readFileSync(this.nombreArchivo,"utf-8");
        let datosExtraidos:string[] = txtArchivo.split(this.delimitador1);
        return datosExtraidos;
    }

    public setDelimitadorTexto():void{
        let lim = rs.question("ingresar el delimitador del texto: ");
        this.delimitador1 = lim;
    }

    public getDelimitador():string{
        return this.delimitador1;
    }

    /**
     * Extrae los elementos de tipo string del "arreglo" separados por "lim"
     * @param arreglo de tipo string[] de donde se extraen los datos
     * @param lim es el separador de caracteres del arreglo
     * @param pos es la posicion en el arreglo elegida para la extraccion
     */
    public extraerDeArregloPorPosic(arreglo: string[], lim:string, pos: number):string[]{
        let datosExtraidos:string[];
        datosExtraidos = arreglo[pos].split(lim);
        return datosExtraidos;
    }
}

let readfile = new LectorArchivos("coches.txt","\r\n");
let datosArch:string[] = [];
datosArch = readfile.extraerDeArchivo();
let segLectura: string[] = [];
console.log(datosArch);
segLectura = readfile.extraerDeArregloPorPosic(datosArch,",", 0);
console.log(segLectura);
readfile.setDelimitadorTexto();
datosArch = readfile.extraerDeArchivo();
console.log(datosArch);



