import Alumno from "./alumno";
import * as fs from 'fs';

export default class LegajoEscolar {
    private nombreInstitucion: string;
    private alumnado: Alumno[];

    public constructor(nombreInstitucion: string) {
        this.nombreInstitucion = nombreInstitucion;
        this.alumnado = [];
        this.cargarItems();
    }

    public getInstitucion(): string{
        return this.nombreInstitucion;
    }

    public getTodosLosAlumnos(): Alumno[] {
        return this.alumnado;
    }

    public agregar(itm: Alumno): void {
        this.alumnado.push(itm);
    }

    private cargarItems(): void {
        try {
            let txtItems: string = fs.readFileSync("alumnos.txt", "utf-8");
            let datosItems: string[] = txtItems.split('\r\n');
            let infoItems: string[];
            let alum: Alumno;
            for (let i = 0; i < datosItems.length; i++) {
                infoItems = datosItems[i].split(',');
                alum = new Alumno(parseInt(infoItems[0]), infoItems[1], infoItems[2],parseInt(infoItems[3]));
                this.agregar(alum)
            }
        }
        catch(err){
            console.error("NO SE ENCONTRO EL ARCHIVO...", err);
        }
    }

    public calcularPromAlumnos(): number{
        let suma:number = 0;
        for (let i=0; i < this.alumnado.length; i++){
            suma += this.alumnado[i].calcularPromedioGral();
        }
        if (this.alumnado.length > 0){
            return (suma/this.alumnado.length);
        }
        else{
            return 0;
        }
    }
}